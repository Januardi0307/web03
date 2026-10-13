
import { useEffect, useState } from "react";
import { supabaseAdmin } from "../lib/supabaseAdmin";
import "./AdminPengaduan.css";

// =====================================================
// ADMIN PENGADUAN WARGA
// =====================================================
export default function AdminPengaduan() {
  const [pengaduan, setPengaduan] = useState([]);
  const [loading, setLoading] = useState(true);
  const [pesan, setPesan] = useState("");
  const [prosesId, setProsesId] = useState("");

  // FORM CATATAN TINDAK LANJUT
  const [editId, setEditId] = useState("");
  const [statusPilihan, setStatusPilihan] = useState("Diproses");
  const [catatanDraft, setCatatanDraft] = useState("");

  // MEMUAT PENGADUAN DAN NAMA PELAPOR
  async function muatPengaduan() {
    setLoading(true);
    setPesan("");

    const { data, error } = await supabaseAdmin
      .from("pengaduan_warga")
      .select(
        "id, pelapor_auth_id, judul, kategori, lokasi, isi, status, catatan_tindak_lanjut, created_at, updated_at"
      )
      .order("created_at", { ascending: false });

    if (error) {
      console.error("Gagal memuat pengaduan:", error);
      setPesan("Pengaduan gagal dimuat. Periksa akses database.");
      setPengaduan([]);
      setLoading(false);
      return;
    }

    // Cari nama warga berdasarkan ID akun Auth.
    const authIds = [
      ...new Set((data || []).map((item) => item.pelapor_auth_id)),
    ].filter(Boolean);

    let daftarWarga = [];

    if (authIds.length > 0) {
      const { data: wargaData, error: wargaError } = await supabaseAdmin
        .from("warga")
        .select("nama, auth_user_id")
        .in("auth_user_id", authIds);

      if (wargaError) {
        console.error("Gagal memuat nama pelapor:", wargaError);
      } else {
        daftarWarga = wargaData || [];
      }
    }

    const petaNama = new Map(
      daftarWarga.map((warga) => [warga.auth_user_id, warga.nama])
    );

    const dataDenganNama = (data || []).map((item) => ({
      ...item,
      nama_pelapor:
        petaNama.get(item.pelapor_auth_id) || "Nama warga tidak ditemukan",
    }));

    setPengaduan(dataDenganNama);

    if (dataDenganNama.length === 0) {
      setPesan("Belum ada pengaduan yang dapat ditampilkan.");
    }

    setLoading(false);
  }

  useEffect(() => {
    muatPengaduan();
  }, []);

  // MEMBUKA FORM CATATAN DI HALAMAN ADMIN
  function bukaFormTindakLanjut(item, statusBaru) {
    setEditId(item.id);
    setStatusPilihan(statusBaru);
    setCatatanDraft(item.catatan_tindak_lanjut || "");
    setPesan("");
  }

  // MENYIMPAN STATUS DAN CATATAN TINDAK LANJUT
  async function simpanTindakLanjut(item) {
    setProsesId(item.id);
    setPesan("");

    try {
      const { error } = await supabaseAdmin
        .from("pengaduan_warga")
        .update({
          status: statusPilihan,
          catatan_tindak_lanjut: catatanDraft.trim() || null,
          updated_at: new Date().toISOString(),
        })
        .eq("id", item.id);

      if (error) {
        console.error("Gagal memperbarui pengaduan:", error);
        setPesan("Status atau catatan gagal disimpan. Periksa akses admin.");
        return;
      }

      setEditId("");
      setCatatanDraft("");
      setPesan("Status dan catatan tindak lanjut berhasil disimpan.");

      await muatPengaduan();
    } catch (error) {
      console.error("Kesalahan menyimpan tindak lanjut:", error);
      setPesan("Terjadi kesalahan saat menyimpan tindak lanjut.");
    } finally {
      setProsesId("");
    }
  }

  return (
    <div className="admin-pengaduan">
      <h2>📣 Pengaduan Warga</h2>
      <p>Daftar laporan dan tindak lanjut pengaduan warga RT 03.</p>

      <button
        type="button"
        onClick={muatPengaduan}
        disabled={loading}
      >
        {loading ? "Memuat..." : "Muat Ulang"}
      </button>

      {pesan && <p role="status">{pesan}</p>}

      {loading ? (
        <p>Memuat pengaduan...</p>
      ) : pengaduan.length === 0 ? (
        <p>Belum ada data pengaduan untuk ditampilkan.</p>
      ) : (
        pengaduan.map((item) => (
          <article
            key={item.id}
            style={{
              border: "1px solid #ddd",
              borderRadius: "8px",
              padding: "16px",
              marginTop: "14px",
            }}
          >
            <p>
              <strong>Nama Pelapor:</strong> {item.nama_pelapor}
            </p>

            <h3>{item.judul}</h3>

            <p>
              <strong>Kategori:</strong> {item.kategori}
            </p>

            <p>
              <strong>Lokasi:</strong> {item.lokasi || "-"}
            </p>

            <p>
              <strong>Tanggal:</strong>{" "}
              {new Date(item.created_at).toLocaleString("id-ID")}
            </p>

            <p>
              <strong>Status:</strong> {item.status}
            </p>

            <p style={{ whiteSpace: "pre-wrap" }}>{item.isi}</p>

            {item.catatan_tindak_lanjut && (
              <div
                style={{
                  marginTop: "12px",
                  padding: "12px",
                  background: "#eff6ff",
                  borderRadius: "8px",
                  whiteSpace: "pre-wrap",
                }}
              >
                <strong>Catatan Tindak Lanjut Admin:</strong>
                <p>{item.catatan_tindak_lanjut}</p>
              </div>
            )}

            <div
              style={{
                display: "flex",
                gap: "8px",
                flexWrap: "wrap",
                marginTop: "14px",
              }}
            >
              {["Menunggu", "Diproses", "Selesai"].map((status) => (
                <button
                  key={status}
                  type="button"
                  disabled={prosesId === item.id}
                  onClick={() => bukaFormTindakLanjut(item, status)}
                >
                  {status}
                </button>
              ))}
            </div>

            {editId === item.id && (
              <div
                style={{
                  marginTop: "16px",
                  padding: "16px",
                  border: "1px solid #bfdbfe",
                  borderRadius: "10px",
                  background: "#f8fbff",
                }}
              >
                <h4 style={{ marginTop: 0 }}>Tindak Lanjut Pengaduan</h4>

                <label
                  htmlFor={`status-${item.id}`}
                  style={{ display: "block", marginBottom: "6px" }}
                >
                  Status pengaduan
                </label>

                <select
                  id={`status-${item.id}`}
                  value={statusPilihan}
                  onChange={(e) => setStatusPilihan(e.target.value)}
                  style={{
                    width: "100%",
                    padding: "10px",
                    marginBottom: "14px",
                    boxSizing: "border-box",
                  }}
                >
                  <option value="Menunggu">Menunggu</option>
                  <option value="Diproses">Diproses</option>
                  <option value="Selesai">Selesai</option>
                </select>

                <label
                  htmlFor={`catatan-${item.id}`}
                  style={{ display: "block", marginBottom: "6px" }}
                >
                  Catatan Tindak Lanjut Admin
                </label>

                <textarea
                  id={`catatan-${item.id}`}
                  value={catatanDraft}
                  onChange={(e) => setCatatanDraft(e.target.value)}
                  placeholder="Tuliskan tanggapan atau tindakan yang dilakukan..."
                  rows={4}
                  style={{
                    width: "100%",
                    padding: "10px",
                    marginBottom: "12px",
                    boxSizing: "border-box",
                    resize: "vertical",
                  }}
                />

                <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
                  <button
                    type="button"
                    disabled={prosesId === item.id}
                    onClick={() => simpanTindakLanjut(item)}
                  >
                    {prosesId === item.id
                      ? "Menyimpan..."
                      : "Simpan Tanggapan"}
                  </button>

                  <button
                    type="button"
                    disabled={prosesId === item.id}
                    onClick={() => setEditId("")}
                  >
                    Batalkan
                  </button>
                </div>
              </div>
            )}
          </article>
        ))
      )}
    </div>
  );
}
