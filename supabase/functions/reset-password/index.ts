
import { createClient } from "npm:@supabase/supabase-js@2";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
};

const ADMIN_USER_ID = "a103eb93-e739-4892-9965-9d474fbac653";

function jsonResponse(
  body: Record<string, unknown>,
  status = 200,
) {
  return new Response(JSON.stringify(body), {
    status,
    headers: {
      ...corsHeaders,
      "Content-Type": "application/json",
    },
  });
}

async function hashKode(kode: string): Promise<string> {
  const data = new TextEncoder().encode(kode);
  const digest = await crypto.subtle.digest("SHA-256", data);

  return Array.from(new Uint8Array(digest))
    .map((byte) => byte.toString(16).padStart(2, "0"))
    .join("");
}

Deno.serve(async (req: Request) => {
  if (req.method === "OPTIONS") {
    return new Response("ok", { headers: corsHeaders });
  }

  if (req.method !== "POST") {
    return jsonResponse(
      { success: false, message: "Metode permintaan tidak diizinkan." },
      405,
    );
  }

  try {

// =====================================================
// VALIDASI RESET PASSWORD AKUN WARGA
// =====================================================
// Warga tidak perlu login sebagai Admin untuk reset password.
// Hak reset dibuktikan dengan NIK dan kode reset yang valid.
// Service role hanya digunakan di sisi server, tidak dikirim
// ke browser atau ditampilkan kepada warga.

const supabaseUrl = Deno.env.get("SUPABASE_URL");
const serviceRoleKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY");

if (!supabaseUrl || !serviceRoleKey) {
  console.error("Konfigurasi environment Supabase belum lengkap.");

  return jsonResponse(
    { success: false, message: "Konfigurasi server belum lengkap." },
    500,
  );
}

const admin = createClient(supabaseUrl, serviceRoleKey, {
  auth: {
    persistSession: false,
    autoRefreshToken: false,
  },
});


    const body = await req.json();
    const nik = String(body.nik ?? "").trim();
    const kode = String(body.kode ?? "").trim();
    const password = String(body.password ?? "");

    if (!/^\d{16}$/.test(nik)) {
      return jsonResponse({
        success: false,
        message: "NIK harus terdiri dari 16 digit angka.",
      });
    }

    if (!/^\d{8}$/.test(kode)) {
      return jsonResponse({
        success: false,
        message: "Kode reset harus terdiri dari 8 digit angka.",
      });
    }

    if (password.length < 8 || password.length > 72) {
      return jsonResponse({
        success: false,
        message: "Password baru harus terdiri dari 8–72 karakter.",
      });
    }

    // Cari akun warga yang aktif dan sudah terhubung ke Supabase Auth.
    const { data: warga, error: wargaError } = await admin
      .from("warga")
      .select("id, nama, status, auth_user_id")
      .eq("nik", nik)
      .eq("status", "Aktif")
      .maybeSingle();

    if (
      wargaError ||
      !warga ||
      !warga.auth_user_id
    ) {
      return jsonResponse({
        success: false,
        message: "NIK atau kode reset tidak valid.",
      });
    }

    const kodeHash = await hashKode(kode);
    const prosesId = crypto.randomUUID();

    // Validasi dan klaim kode secara atomik di database.
    const { data: hasilKlaim, error: klaimError } = await admin.rpc(
      "klaim_kode_reset_password_aman",
      {
        p_warga_id: String(warga.id),
        p_kode_hash: kodeHash,
        p_proses_id: prosesId,
      },
    );

    if (klaimError) {
      console.error("Gagal memvalidasi kode reset.");

      return jsonResponse(
        { success: false, message: "Gagal memvalidasi kode reset." },
        500,
      );
    }

    const pesanKlaim: Record<string, string> = {
      tidak_ditemukan: "NIK atau kode reset tidak valid.",
      salah: "NIK atau kode reset tidak valid.",
      sudah_digunakan: "Kode reset sudah digunakan.",
      kedaluwarsa: "Kode reset sudah kedaluwarsa.",
      terkunci: "Kode reset terkunci karena terlalu banyak percobaan.",
      sedang_diproses: "Kode reset sedang diproses. Silakan coba kembali.",
    };

    if (hasilKlaim !== "valid") {
      return jsonResponse({
        success: false,
        message:
          pesanKlaim[String(hasilKlaim)] ??
          "Kode reset tidak dapat digunakan.",
      });
    }

    // Ganti password akun Auth yang sama, bukan membuat akun baru.
    const { error: passwordError } =
      await admin.auth.admin.updateUserById(
        warga.auth_user_id,
        { password },
      );

    if (passwordError) {
      // Lepaskan klaim agar kode masih bisa dicoba kembali
      // jika penggantian password gagal.
      const { error: releaseError } = await admin
        .from("kode_reset_password_warga")
        .update({ proses_id: null })
        .eq("warga_id", String(warga.id))
        .eq("proses_id", prosesId)
        .is("digunakan_pada", null);

      if (releaseError) {
        console.error("Klaim kode reset gagal dilepaskan.");
      }

      console.error("Penggantian password akun warga gagal.");

      return jsonResponse(
        {
          success: false,
          message: "Password gagal diganti. Silakan coba kembali.",
        },
        500,
      );
    }

    // Tandai kode sudah digunakan agar tidak dapat dipakai ulang.
    const { error: selesaiError } = await admin
      .from("kode_reset_password_warga")
      .update({
        digunakan_pada: new Date().toISOString(),
        proses_id: null,
      })
      .eq("warga_id", String(warga.id))
      .eq("proses_id", prosesId)
      .is("digunakan_pada", null);

    if (selesaiError) {
      // Password sudah berhasil berubah. Kode tetap terkunci
      // oleh proses_id jika penandaan ini gagal.
      console.error(
        "Password berubah, tetapi finalisasi kode reset gagal.",
      );

      return jsonResponse({
        success: true,
        message:
          "Password berhasil diganti. Silakan login menggunakan password baru.",
      });
    }

    return jsonResponse({
      success: true,
      message:
        "Password berhasil diganti. Silakan login menggunakan password baru.",
    });
  } catch {
    console.error("Terjadi kesalahan saat memproses reset password.");

    return jsonResponse(
      {
        success: false,
        message: "Terjadi kesalahan server. Silakan coba kembali.",
      },
      500,
    );
  }
});
