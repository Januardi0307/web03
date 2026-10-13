
import { useEffect, useState } from "react";
import { supabaseAdmin } from "../lib/supabaseAdmin";
import "./AdminKontakPenting.css";

// ADMIN KONTAK PENTING
export default function AdminKontakPenting() {
  const [kontak, setKontak] = useState([]);
  const [sedangMemuat, setSedangMemuat] = useState(true);
  const [sedangMenyimpan, setSedangMenyimpan] = useState(null);
  const [pesan, setPesan] = useState("");

  useEffect(() => {
    ambilKontak();
  }, []);

  const ambilKontak = async () => {
    setSedangMemuat(true);
    setPesan("");

    const { data, error } = await supabaseAdmin
      .from("kontak_penting")
      .select("*")
      .order("urutan", { ascending: true });

    if (error) {
      console.error("Gagal mengambil kontak:", error);
      setPesan("Gagal memuat kontak. Periksa izin Supabase.");
    } else {
      setKontak(data || []);
    }

    setSedangMemuat(false);
  };

  const ubahKontak = (id, field, value) => {
    setKontak((sebelumnya) =>
      sebelumnya.map((item) =>
        item.id === id ? { ...item, [field]: value } : item
      )
    );
  };

  const simpanKontak = async (item) => {
    setSedangMenyimpan(item.id);
    setPesan("");

    const { error } = await supabaseAdmin
      .from("kontak_penting")
      .update({
        nama_kontak: item.nama_kontak.trim(),
        nomor_telepon: item.nomor_telepon.trim(),
        keterangan: item.keterangan.trim(),
        updated_at: new Date().toISOString(),
      })
      .eq("id", item.id);

    if (error) {
      console.error("Gagal menyimpan kontak:", error);
      setPesan(`Gagal menyimpan ${item.nama_kontak}. Periksa izin Supabase.`);
    } else {
      setPesan(`${item.nama_kontak} berhasil disimpan.`);
    }

    setSedangMenyimpan(null);
  };

  if (sedangMemuat) {
    return <p>Memuat kontak penting...</p>;
  }

  return (
    <div className="admin-kontak">
      <h2>Kontak Penting Lingkungan</h2>
      <p className="admin-kontak-pengantar">
        Kelola nomor telepon yang dapat dilihat pengunjung halaman depan.
      </p>

      {pesan && (
        <p className="admin-kontak-pesan" role="status">
          {pesan}
        </p>
      )}

      {kontak.map((item) => (
        <form
          className="admin-kontak-item"
          key={item.id}
          onSubmit={(event) => {
            event.preventDefault();
            simpanKontak(item);
          }}
        >
          <h3>{item.nama_kontak}</h3>

          <label>
            Nama kontak
            <input
              type="text"
              value={item.nama_kontak}
              onChange={(event) =>
                ubahKontak(item.id, "nama_kontak", event.target.value)
              }
              required
            />
          </label>

          <label>
            Nomor telepon
            <input
              type="tel"
              value={item.nomor_telepon || ""}
              placeholder="Masukkan nomor telepon"
              onChange={(event) =>
                ubahKontak(item.id, "nomor_telepon", event.target.value)
              }
            />
          </label>

          <label>
            Keterangan
            <input
              type="text"
              value={item.keterangan || ""}
              onChange={(event) =>
                ubahKontak(item.id, "keterangan", event.target.value)
              }
            />
          </label>

          <button type="submit" disabled={sedangMenyimpan !== null}>
            {sedangMenyimpan === item.id ? "Menyimpan..." : "Simpan Kontak"}
          </button>
        </form>
      ))}
    </div>
  );
}
