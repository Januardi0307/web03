import { supabase } from "../lib/supabase";

export async function ambilPesanWarga() {
  const { data, error } = await supabase
    .from("komunikasi_warga")
    .select(`
      id,
      pesan,
      created_at,
      warga (
        nama
      )
    `)
    .order("created_at", { ascending: true });

  if (error) {
    console.error("Gagal mengambil pesan warga:", error);
    return [];
  }

  return data || [];
}

export async function kirimPesanWarga(pesan) {
  const { data: wargaId, error: wargaError } =
    await supabase.rpc("get_warga_id_saya");

  if (wargaError) {
    console.error(
      "Gagal mendapatkan identitas warga:",
      wargaError
    );

    return {
      success: false,
      error: wargaError,
    };
  }

  if (!wargaId) {
    return {
      success: false,
      error: new Error("Identitas warga tidak ditemukan."),
    };
  }

  const { data, error } = await supabase
    .from("komunikasi_warga")
    .insert({
      warga_id: wargaId,
      pesan: pesan.trim(),
    })
    .select(`
      id,
      pesan,
      created_at,
      warga (
        nama
      )
    `)
    .single();

  if (error) {
    console.error("Gagal mengirim pesan:", error);

    return {
      success: false,
      error,
    };
  }

  return {
    success: true,
    data,
  };
}