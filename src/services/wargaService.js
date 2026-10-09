import { supabase } from "../lib/supabase";

export async function cariWargaDenganNIK(nik) {
  const { data, error } = await supabase
    .from("warga")
    .select("id, nama, nik, status")
    .eq("nik", nik)
    .eq("status", "Aktif")
    .maybeSingle();

  if (error) {
    console.error("Gagal mencari warga:", error);
    return null;
  }

  return data;
}