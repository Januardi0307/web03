
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

async function sha256(value: string): Promise<string> {
  const bytes = new TextEncoder().encode(value);
  const digest = await crypto.subtle.digest("SHA-256", bytes);

  return Array.from(new Uint8Array(digest))
    .map((b) => b.toString(16).padStart(2, "0"))
    .join("");
}

function buatKode8Digit(): string {
  const batas = Math.floor(4294967296 / 100000000) * 100000000;
  let angka: number;

  do {
    const random = new Uint32Array(1);
    crypto.getRandomValues(random);
    angka = random[0];
  } while (angka >= batas);

  return String(angka % 100000000).padStart(8, "0");
}

Deno.serve(async (req: Request) => {
  if (req.method === "OPTIONS") {
    return new Response("ok", { headers: corsHeaders });
  }

  if (req.method !== "POST") {
    return jsonResponse({ error: "Metode tidak diizinkan." }, 405);
  }

  try {
    const supabaseUrl = Deno.env.get("SUPABASE_URL");
    const anonKey = Deno.env.get("SUPABASE_ANON_KEY");
    const serviceRoleKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY");

    if (!supabaseUrl || !anonKey || !serviceRoleKey) {
      return jsonResponse({ error: "Konfigurasi server belum lengkap." }, 500);
    }

    const authorization = req.headers.get("Authorization");

    if (!authorization?.startsWith("Bearer ")) {
      return jsonResponse({ error: "Silakan login sebagai Admin." }, 401);
    }

    const supabaseAuth = createClient(supabaseUrl, anonKey, {
      auth: {
        persistSession: false,
        autoRefreshToken: false,
      },
    });

    const { data: userData, error: userError } =
      await supabaseAuth.auth.getUser(authorization.slice(7));

    if (userError || !userData.user) {
      return jsonResponse({ error: "Sesi login tidak valid." }, 401);
    }

    if (userData.user.id !== ADMIN_USER_ID) {
      return jsonResponse({ error: "Akses khusus Admin." }, 403);
    }

    const body = await req.json();
    const wargaId = String(body.warga_id ?? "").trim();

    if (!wargaId) {
      return jsonResponse({ error: "ID warga tidak valid." }, 400);
    }

    const admin = createClient(supabaseUrl, serviceRoleKey, {
      auth: {
        persistSession: false,
        autoRefreshToken: false,
      },
    });

    const { data: warga, error: wargaError } = await admin
      .from("warga")
      .select("id, nama, status, auth_user_id")
      .eq("id", wargaId)
      .maybeSingle();

    if (wargaError) {
      console.error("Gagal memeriksa warga:", wargaError.message);
      return jsonResponse({ error: "Data warga belum dapat diperiksa." }, 500);
    }

    if (!warga || warga.status !== "Aktif") {
      return jsonResponse({ error: "Warga tidak ditemukan atau tidak aktif." }, 404);
    }

    if (!warga.auth_user_id) {
      return jsonResponse({
        error: "Warga belum mengaktifkan akun. Gunakan proses aktivasi akun.",
      }, 409);
    }

    const kode = buatKode8Digit();
    const kodeHash = await sha256(kode);
    const sekarang = new Date();
    const kedaluwarsa = new Date(sekarang.getTime() + 15 * 60 * 1000);

    // Kode lama yang belum digunakan untuk warga ini dibuat tidak berlaku.
    const { error: hapusError } = await admin
      .from("kode_reset_password_warga")
      .delete()
      .eq("warga_id", wargaId)
      .is("digunakan_pada", null);

    if (hapusError) {
      console.error("Gagal membatalkan kode lama:", hapusError.message);
      return jsonResponse({ error: "Kode reset belum dapat diterbitkan." }, 500);
    }

    const { error: simpanError } = await admin
      .from("kode_reset_password_warga")
      .insert({
        warga_id: wargaId,
        kode_hash: kodeHash,
        dibuat_oleh: userData.user.id,
        kedaluwarsa_pada: kedaluwarsa.toISOString(),
      });

    if (simpanError) {
      console.error("Gagal menyimpan kode reset:", simpanError.message);
      return jsonResponse({ error: "Kode reset gagal disimpan." }, 500);
    }

    return jsonResponse({
      success: true,
      nama: warga.nama,
      kode,
      kedaluwarsa_pada: kedaluwarsa.toISOString(),
      pesan: "Kode reset password berhasil dibuat.",
    });
  } catch (error) {
    console.error(
      "Kesalahan membuat kode reset:",
      error instanceof Error ? error.message : error,
    );

    return jsonResponse({ error: "Terjadi kesalahan pada server." }, 500);
  }
});
