
import { createClient } from "npm:@supabase/supabase-js@2";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
};

const ADMIN_USER_ID = "a103eb93-e739-4892-9965-9d474fbac653";

Deno.serve(async (req: Request) => {
  if (req.method === "OPTIONS") {
    return new Response("ok", { headers: corsHeaders });
  }

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

  if (req.method !== "POST") {
    return jsonResponse({ error: "Metode tidak diizinkan." }, 405);
  }

  try {
    const supabaseUrl = Deno.env.get("SUPABASE_URL");
    const anonKey = Deno.env.get("SUPABASE_ANON_KEY");
    const serviceRoleKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY");

    if (!supabaseUrl || !anonKey || !serviceRoleKey) {
      console.error("Konfigurasi rahasia Supabase belum lengkap.");
      return jsonResponse(
        { error: "Konfigurasi server belum lengkap." },
        500,
      );
    }

    const authorization = req.headers.get("Authorization");

    if (!authorization?.startsWith("Bearer ")) {
      return jsonResponse({ error: "Silakan login sebagai Admin." }, 401);
    }

    const accessToken = authorization.slice(7);

    const supabaseAuth = createClient(supabaseUrl, anonKey, {
      auth: {
        persistSession: false,
        autoRefreshToken: false,
      },
    });

    const { data: userData, error: userError } =
      await supabaseAuth.auth.getUser(accessToken);

    if (userError || !userData.user) {
  console.error("AKTIVASI: USER TIDAK VALID", userError?.message);
  return jsonResponse({ error: "Sesi login tidak valid." }, 401);
}

if (userData.user.id !== ADMIN_USER_ID) {
  console.error("AKTIVASI: UID ADMIN TIDAK COCOK");
  return jsonResponse({ error: "Akses khusus Admin." }, 403);
}

console.log("AKTIVASI: PEMERIKSAAN ADMIN BERHASIL");

    const { warga_id } = await req.json();

    if (typeof warga_id !== "string" || !warga_id.trim()) {
      return jsonResponse({ error: "ID warga tidak valid." }, 400);
    }

    const supabaseAdmin = createClient(supabaseUrl, serviceRoleKey, {
      auth: {
        persistSession: false,
        autoRefreshToken: false,
      },
    });

    const { data: warga, error: wargaError } = await supabaseAdmin
      .from("warga")
      .select("id, nama, status, auth_user_id")
      .eq("id", warga_id.trim())
      .maybeSingle();

    if (wargaError) {
      console.error("Gagal memeriksa warga:", wargaError);
      return jsonResponse({ error: "Gagal memeriksa data warga." }, 500);
    }

    if (!warga || warga.status !== "Aktif") {
      return jsonResponse(
        { error: "Warga tidak ditemukan atau tidak aktif." },
        404,
      );
    }

    if (warga.auth_user_id) {
      return jsonResponse(
        { error: "Warga sudah terhubung dengan akun. Kode tidak dibuat." },
        409,
      );
    }


let angkaAcak: number;
const batas = Math.floor(4294967296 / 100000000) * 100000000;

do {
  const randomBytes = new Uint32Array(1);
  crypto.getRandomValues(randomBytes);
  angkaAcak = randomBytes[0];
} while (angkaAcak >= batas);

const kode = String(angkaAcak % 100000000).padStart(8, "0");


    const hashBuffer = await crypto.subtle.digest(
      "SHA-256",
      new TextEncoder().encode(kode),
    );

    const kodeHash = Array.from(new Uint8Array(hashBuffer))
      .map((byte) => byte.toString(16).padStart(2, "0"))
      .join("");

    const sekarang = new Date();
    const kedaluwarsa = new Date(
      sekarang.getTime() + 24 * 60 * 60 * 1000,
    );


    const { data: hasilSimpan, error: simpanError } =
      await supabaseAdmin.rpc("buat_kode_aktivasi_aman", {
        p_warga_id: warga.id,
        p_kode_hash: kodeHash,
        p_dibuat_oleh: userData.user.id,
        p_kedaluwarsa_pada: kedaluwarsa.toISOString(),
      });

    if (simpanError) {
      console.error(
        "Gagal menyimpan kode aktivasi:",
        simpanError.message,
      );
      return jsonResponse(
        { error: "Kode aktivasi gagal disimpan." },
        500,
      );
    }

    if (hasilSimpan !== "berhasil") {
      if (hasilSimpan === "sedang_diproses") {
        return jsonResponse(
          {
            error:
              "Aktivasi warga sedang diproses. Coba terbitkan kode kembali setelah proses selesai.",
          },
          409,
        );
      }

      if (hasilSimpan === "warga_tidak_memenuhi_syarat") {
        return jsonResponse(
          {
            error:
              "Warga tidak aktif atau sudah terhubung dengan akun.",
          },
          409,
        );
      }

      return jsonResponse(
        { error: "Kode aktivasi tidak berhasil disimpan." },
        500,
      );
    }


    return jsonResponse({
      success: true,
      nama: warga.nama,
      kode,
      kedaluwarsa_pada: kedaluwarsa.toISOString(),
      pesan: "Kode aktivasi berhasil dibuat.",
    });
  } catch (error) {
    console.error("KESALAHAN FUNGSI AKTIVASI:", error);
    return jsonResponse({ error: "Terjadi kesalahan pada server." }, 500);
  }
});
