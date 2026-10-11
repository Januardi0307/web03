import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
};

const jsonResponse = (
  body: Record<string, unknown>,
  status = 200,
) =>
  new Response(JSON.stringify(body), {
    status,
    headers: {
      ...corsHeaders,
      "Content-Type": "application/json",
    },
  });

async function sha256(value: string): Promise<string> {
  const bytes = new TextEncoder().encode(value);
  const digest = await crypto.subtle.digest("SHA-256", bytes);

  return Array.from(new Uint8Array(digest))
    .map((b) => b.toString(16).padStart(2, "0"))
    .join("");
}

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response("ok", { headers: corsHeaders });
  }

  if (req.method !== "POST") {
    return jsonResponse(
      { error: "Metode tidak diizinkan." },
      405,
    );
  }

  let admin: any = null;
  let wargaId: string | null = null;
  let prosesId: string | null = null;
  let authUserId: string | null = null;

  try {
    const supabaseUrl = Deno.env.get("SUPABASE_URL");
    const serviceKey = Deno.env.get(
      "SUPABASE_SERVICE_ROLE_KEY",
    );

    if (!supabaseUrl || !serviceKey) {
      console.error(
        "Konfigurasi server aktivasi belum lengkap.",
      );

      return jsonResponse(
        { error: "Layanan aktivasi belum siap." },
        500,
      );
    }

    admin = createClient(supabaseUrl, serviceKey, {
      auth: {
        autoRefreshToken: false,
        persistSession: false,
      },
    });

    // 1. Membaca dan memvalidasi permintaan aktivasi.
    const body = await req.json();

    const nik = String(body.nik ?? "").trim();
    const kode = String(body.kode ?? "").trim();
    const password = String(body.password ?? "");

    if (!/^\d{16}$/.test(nik)) {
      return jsonResponse(
        { error: "NIK harus terdiri dari 16 angka." },
        400,
      );
    }

    if (!/^\d{8}$/.test(kode)) {
      return jsonResponse(
        { error: "Kode aktivasi harus 8 angka." },
        400,
      );
    }

    if (password.length < 8 || password.length > 72) {
      return jsonResponse(
        {
          error:
            "Kata sandi harus terdiri dari 8–72 karakter.",
        },
        400,
      );
    }

    // 2. Memeriksa data warga.
    const { data: warga, error: wargaError } = await admin
      .from("warga")
      .select("id, nama, status, auth_user_id")
      .eq("nik", nik)
      .maybeSingle();

    if (wargaError) {
      console.error(
        "Pencarian data warga gagal:",
        wargaError.message,
      );

      return jsonResponse(
        { error: "Aktivasi belum dapat diproses." },
        500,
      );
    }

    if (
      !warga ||
      warga.status !== "Aktif" ||
      warga.auth_user_id !== null
    ) {
      return jsonResponse(
        {
          error:
            "Data warga tidak memenuhi syarat aktivasi.",
        },
        400,
      );
    }

    wargaId = String(warga.id);
    prosesId = crypto.randomUUID();

    const kodeHash = await sha256(kode);

    // 3. Mengklaim kode aktivasi untuk proses ini.
    // Kode belum ditandai terpakai pada tahap ini.
    const { data: klaim, error: klaimError } =
      await admin.rpc("klaim_kode_aktivasi_aman", {
        p_warga_id: wargaId,
        p_kode_hash: kodeHash,
        p_proses_id: prosesId,
      });

    if (klaimError) {
      console.error(
        "Pemeriksaan kode gagal:",
        klaimError.message,
      );

      return jsonResponse(
        { error: "Aktivasi belum dapat diproses." },
        500,
      );
    }

    if (klaim !== "valid") {
      const pesan: Record<string, string> = {
        tidak_ditemukan: "Kode aktivasi tidak valid.",
        sudah_digunakan: "Kode aktivasi sudah digunakan.",
        kedaluwarsa: "Kode aktivasi sudah kedaluwarsa.",
        terkunci:
          "Kode aktivasi terkunci. Hubungi Admin RT.",
        salah: "NIK atau kode aktivasi tidak sesuai.",
        sedang_diproses:
          "Aktivasi sedang diproses. Coba kembali nanti.",
      };

      const status = klaim === "salah" ? 400 : 409;

      return jsonResponse(
        {
          error:
            pesan[String(klaim)] ??
            "Kode aktivasi tidak dapat digunakan.",
        },
        status,
      );
    }

    // 4. Membuat akun Supabase Auth.
    // Alamat internal unik; tidak memerlukan email pribadi.
    const internalEmail =
      `warga-${await sha256(wargaId)}@akun-warga.invalid`;

    const { data: created, error: createError } =
      await admin.auth.admin.createUser({
        email: internalEmail,
        password,
        email_confirm: true,
        user_metadata: {
          jenis_akun: "warga",
          warga_id: wargaId,
        },
      });

    if (createError || !created.user) {
      console.error(
        "Pembuatan akun gagal:",
        createError?.message ?? "User tidak tersedia",
      );

      const { error: lepasError } = await admin.rpc(
        "lepas_klaim_kode_aktivasi",
        {
          p_warga_id: wargaId,
          p_proses_id: prosesId,
        },
      );

      if (lepasError) {
        console.error(
          "Pelepasan klaim gagal:",
          lepasError.message,
        );
      }

      return jsonResponse(
        {
          error:
            "Akun belum berhasil dibuat. Silakan coba kembali.",
        },
        500,
      );
    }

    authUserId = created.user.id;

    // 5. Menghubungkan akun dan menyelesaikan aktivasi
    // melalui fungsi database.
    const { data: hasil, error: selesaiError } =
      await admin.rpc("selesaikan_aktivasi_warga", {
        p_warga_id: wargaId,
        p_kode_hash: kodeHash,
        p_auth_user_id: authUserId,
        p_proses_id: prosesId,
      });

    if (selesaiError || hasil !== "berhasil") {
      console.error(
        "Penyelesaian aktivasi gagal:",
        selesaiError?.message ?? String(hasil),
      );

      // Periksa apakah akun sudah berhasil terhubung.
      const { data: cekWarga, error: cekError } =
        await admin
          .from("warga")
          .select("auth_user_id")
          .eq("id", wargaId)
          .maybeSingle();

      // Jika pemeriksaan gagal, jangan menghapus akun
      // karena status hubungan akun belum dapat dipastikan.
      if (cekError || !cekWarga) {
        console.error(
          "Status hubungan akun tidak dapat dipastikan:",
          cekError?.message ?? "Data warga tidak ditemukan",
        );

        return jsonResponse(
          {
            error:
              "Status aktivasi belum dapat dipastikan. Hubungi Admin RT.",
          },
          500,
        );
      }

      if (cekWarga.auth_user_id === authUserId) {
        // Akun sudah terhubung. Jangan hapus akun tersebut.
        return jsonResponse(
          {
            error:
              "Aktivasi perlu diperiksa oleh Admin RT.",
          },
          500,
        );
      }

      // Akun dipastikan belum terhubung.
      const { error: deleteError } =
        await admin.auth.admin.deleteUser(authUserId);

      if (deleteError) {
        console.error(
          "Pembersihan akun gagal:",
          deleteError.message,
        );
      }

      const { error: lepasError } = await admin.rpc(
        "lepas_klaim_kode_aktivasi",
        {
          p_warga_id: wargaId,
          p_proses_id: prosesId,
        },
      );

      if (lepasError) {
        console.error(
          "Pelepasan klaim gagal:",
          lepasError.message,
        );
      }

      return jsonResponse(
        {
          error:
            "Aktivasi belum selesai. Silakan coba kembali.",
        },
        500,
      );
    }

    // 6. Aktivasi berhasil.
    return jsonResponse({
      success: true,
      message:
        "Aktivasi akun berhasil. Silakan masuk menggunakan NIK dan kata sandi.",
    });
  } catch (error) {
    console.error(
      "Kesalahan aktivasi:",
      error instanceof Error
        ? error.message
        : "Kesalahan tidak diketahui",
    );

    // 7. Pemulihan jika terjadi kesalahan tak terduga.
    // admin, wargaId, prosesId, dan authUserId tetap
    // dapat diakses karena dideklarasikan sebelum try.

    if (admin && wargaId && prosesId) {
      let akunSudahTerhubung = false;
      let statusAkunDapatDipastikan = !authUserId;

      if (authUserId) {
        const { data: cekWarga, error: cekError } =
          await admin
            .from("warga")
            .select("auth_user_id")
            .eq("id", wargaId)
            .maybeSingle();

        if (!cekError && cekWarga) {
          akunSudahTerhubung =
            cekWarga.auth_user_id === authUserId;

          statusAkunDapatDipastikan = true;
        } else {
          console.error(
            "Pemeriksaan status akun gagal:",
            cekError?.message ?? "Data warga tidak ditemukan",
          );
        }
      }

      // Hapus akun hanya jika statusnya dapat dipastikan
      // dan akun tersebut belum terhubung dengan data warga.
      if (
        authUserId &&
        statusAkunDapatDipastikan &&
        !akunSudahTerhubung
      ) {
        const { error: deleteError } =
          await admin.auth.admin.deleteUser(authUserId);

        if (deleteError) {
          console.error(
            "Pembersihan akun gagal:",
            deleteError.message,
          );
        }
      }

      // Jangan lepaskan klaim jika status hubungan akun
      // belum dapat dipastikan atau akun sudah terhubung.
      if (
        statusAkunDapatDipastikan &&
        !akunSudahTerhubung
      ) {
        const { error: lepasError } = await admin.rpc(
          "lepas_klaim_kode_aktivasi",
          {
            p_warga_id: wargaId,
            p_proses_id: prosesId,
          },
        );

        if (lepasError) {
          console.error(
            "Pelepasan klaim gagal:",
            lepasError.message,
          );
        }
      }
    }

    return jsonResponse(
      {
        error:
          "Terjadi kesalahan saat aktivasi. Silakan coba kembali.",
      },
      500,
    );
  }
});