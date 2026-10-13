
import { useEffect, useState } from "react";
import { supabase } from "../lib/supabase";
import "./PengaduanWarga.css";

// =====================================================
// PENGADUAN WARGA
// =====================================================
function PengaduanWarga({ wargaLogin }) {
  const [judul, setJudul] = useState("");
  const [kategori, setKategori] = useState("Infrastruktur");
  const [lokasi, setLokasi] = useState("");
  const [isi, setIsi] = useState("");

  const [daftarPengaduan, setDaftarPengaduan] = useState([]);
  const [loading, setLoading] = useState(true);
  const [loadingKirim, setLoadingKirim] = useState(false);
  const [pesan, setPesan] = useState("");

  const authId = wargaLogin?.auth_user_id;

  // Memuat pengaduan milik warga yang sedang login.
  const muatPengaduan = async () => {
    if (!authId) {
      setDaftarPengaduan([]);
      setLoading(false);
      return;
    }

    setLoading(true);

    const { data, error } = await supabase
      .from("pengaduan_warga")
      .select(
        "id, judul, kategori, lokasi, isi, status, catatan_tindak_lanjut, created_at, updated_at"
      )
      .eq("pelapor_auth_id", authId)
      .order("created_at", { ascending: false });

    if (error) {
      console.error("Gagal memuat pengaduan:", error);
      setPesan("Pengaduan belum dapat dimuat. Silakan coba lagi.");
    } else {
      setDaftarPengaduan(data || []);
    }

    setLoading(false);
  };

  useEffect(() => {
    muatPengaduan();
  }, [authId]);

  // Mengirim pengaduan atas nama akun warga yang login.
  const handleKirim = async (e) => {
    e.preventDefault();
    setPesan("");

    if (!authId) {
      setPesan("Sesi akun warga tidak ditemukan. Silakan login kembali.");
      return;
    }

    if (!judul.trim() || !isi.trim()) {
      setPesan("Judul dan isi pengaduan wajib diisi.");
      return;
    }

    setLoadingKirim(true);

    try {
      // Pastikan UUID pada data warga cocok dengan sesi Auth aktif.
      const { data: sesiData, error: sesiError } =
        await supabase.auth.getSession();

      if (sesiError || sesiData.session?.user?.id !== authId) {
        setPesan("Sesi login tidak cocok. Silakan keluar dan login kembali.");
        return;
      }

      const { error } = await supabase
        .from("pengaduan_warga")
        .insert({
          pelapor_auth_id: authId,
          judul: judul.trim(),
          kategori,
          lokasi: lokasi.trim() || null,
          isi: isi.trim(),
        });

      if (error) {
        console.error("Gagal mengirim pengaduan:", error);
        setPesan("Pengaduan gagal dikirim. Silakan coba kembali.");
        return;
      }

      setJudul("");
      setKategori("Infrastruktur");
      setLokasi("");
      setIsi("");
      setPesan("Pengaduan berhasil dikirim.");

      await muatPengaduan();
    } catch (error) {
      console.error("Kesalahan pengiriman pengaduan:", error);
      setPesan("Terjadi kesalahan. Silakan coba kembali.");
    } finally {
      setLoadingKirim(false);
    }
  };

  if (!wargaLogin) {
    return (
      <div className="page pengaduan-warga-page">
        <h2>Pengaduan Warga</h2>
        <p>Silakan login sebagai warga untuk mengakses pengaduan.</p>
      </div>
    );
  }

  return (
    <div className="page">
      <div className="page-header pengaduan-warga-header">
        <p>LAYANAN WARGA</p>
        <h2>Pengaduan Warga</h2>
        <span>Kirim pengaduan dan pantau tindak lanjut dari Admin RT.</span>
      </div>

      <div className="ai-container pengaduan-warga-panel">
        <h3>Buat Pengaduan</h3>

        <form
  className="ai-form pengaduan-warga-form"
  onSubmit={handleKirim}
>
          <input
            type="text"
            value={judul}
            onChange={(e) => setJudul(e.target.value)}
            placeholder="Judul pengaduan"
            maxLength={150}
            required
          />

          <select
            value={kategori}
            onChange={(e) => setKategori(e.target.value)}
            required
          >
            <option value="Infrastruktur">Infrastruktur</option>
            <option value="Kebersihan">Kebersihan</option>
            <option value="Keamanan">Keamanan</option>
            <option value="Ketertiban">Ketertiban</option>
            <option value="Lingkungan">Lingkungan</option>
            <option value="Lainnya">Lainnya</option>
          </select>

          <input
            type="text"
            value={lokasi}
            onChange={(e) => setLokasi(e.target.value)}
            placeholder="Lokasi kejadian (opsional)"
            maxLength={200}
          />

          <textarea
            value={isi}
            onChange={(e) => setIsi(e.target.value)}
            placeholder="Jelaskan pengaduan Anda"
            rows={5}
            required
          />

          {pesan && <p role="status">{pesan}</p>}

          <button type="submit" disabled={loadingKirim}>
            {loadingKirim ? "Mengirim..." : "Kirim Pengaduan"}
          </button>
        </form>
      </div>

      <div className="ai-container pengaduan-warga-panel">
        <h3>Riwayat Pengaduan Saya</h3>

        <button
          type="button"
          onClick={muatPengaduan}
          disabled={loading}
        >
          {loading ? "Memuat..." : "Muat Ulang"}
        </button>

        {loading ? (
          <p>Memuat pengaduan...</p>
        ) : daftarPengaduan.length === 0 ? (
          <p>Belum ada pengaduan.</p>
        ) : (
          daftarPengaduan.map((item) => (
            <article className="pengaduan-warga-kartu" key={item.id}>
              <h3>{item.judul}</h3>
              <p><strong>Kategori:</strong> {item.kategori}</p>

              {item.lokasi && (
                <p><strong>Lokasi:</strong> {item.lokasi}</p>
              )}

              <p>{item.isi}</p>
              <p>
                <strong>Status:</strong> {item.status}
              </p>

              {item.catatan_tindak_lanjut && (
                <p>
                  <strong>Catatan Admin:</strong>{" "}
                  {item.catatan_tindak_lanjut}
                </p>
              )}

              <small>
                Dikirim:{" "}
                {new Date(item.created_at).toLocaleString("id-ID")}
              </small>
            </article>
          ))
        )}
      </div>
    </div>
  );
}

export default PengaduanWarga;
