import { useEffect, useState } from "react";
import { useRTData } from "../context/RTDataContext";
import { supabase } from "../lib/supabase";

function AdminDataRT() {
  const { rtInfo, setRtInfo } = useRTData();

  const [form, setForm] = useState({
    namaRT: "",
    namaRW: "",

    kelurahan: "",
    kecamatan: "",
    kota: "",
    provinsi: "",

    alamatRT: "",

    namaKetua: "",
    namaSekretaris: "",
    namaBendahara: "",

    nomorTelepon: "",
    email: "",

    jadwalPelayanan: "",
    jamPelayanan: "",

    informasiTambahan: "",
  });

  const [saving, setSaving] = useState(false);

  useEffect(() => {
    if (!rtInfo) return;

    setForm({
      namaRT: rtInfo.namaRT || "",
      namaRW: rtInfo.namaRW || "",

      kelurahan: rtInfo.kelurahan || "",
      kecamatan: rtInfo.kecamatan || "",
      kota: rtInfo.kota || "",
      provinsi: rtInfo.provinsi || "",

      alamatRT: rtInfo.alamatRT || "",

      namaKetua: rtInfo.namaKetua || "",
      namaSekretaris:
        rtInfo.namaSekretaris || "",
      namaBendahara:
        rtInfo.namaBendahara || "",

      nomorTelepon:
        rtInfo.nomorTelepon || "",
      email: rtInfo.email || "",

      jadwalPelayanan:
        rtInfo.jadwalPelayanan || "",
      jamPelayanan:
        rtInfo.jamPelayanan || "",

      informasiTambahan:
        rtInfo.informasiTambahan || "",
    });
  }, [rtInfo]);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setSaving(true);

    const dataSupabase = {
      nama_rt: form.namaRT,
      nama_rw: form.namaRW,

      kelurahan: form.kelurahan,
      kecamatan: form.kecamatan,
      kota: form.kota,
      provinsi: form.provinsi,

      alamat_rt: form.alamatRT,

      nama_ketua: form.namaKetua,
      nama_sekretaris: form.namaSekretaris,
      nama_bendahara: form.namaBendahara,

      nomor_telepon: form.nomorTelepon,
      email: form.email,

      jadwal_pelayanan:
        form.jadwalPelayanan,
      jam_pelayanan:
        form.jamPelayanan,

      informasi_tambahan:
        form.informasiTambahan,

      updated_at: new Date().toISOString(),
    };

    const { data: existingData, error: findError } = await supabase
  .from("rt_info")
  .select("id")
  .limit(1)
  .maybeSingle();

if (findError) {
  console.error("Gagal mencari data RT:", findError);
  alert("Data RT gagal ditemukan.\n\n" + findError.message);
  setSaving(false);
  return;
}

if (!existingData) {
  alert("Data RT belum tersedia di Supabase.");
  setSaving(false);
  return;
}

const { data, error } = await supabase
  .from("rt_info")
  .update(dataSupabase)
  .eq("id", existingData.id)
  .select();

    if (error) {
      console.error(
        "Gagal menyimpan data RT:",
        error
      );

      alert(
        "Data RT gagal disimpan.\n\n" +
        error.message
      );

      setSaving(false);
      return;
    }

    if (!data || data.length === 0) {
      alert(
        "Data RT tidak ditemukan di Supabase."
      );

      setSaving(false);
      return;
    }

    const row = data?.[0];
    if (!row) {
  alert("Data RT tidak berhasil diperbarui.");
  setSaving(false);
  return;
}

    const dataContext = {
      namaRT: row.nama_rt || "",
      namaRW: row.nama_rw || "",

      kelurahan: row.kelurahan || "",
      kecamatan: row.kecamatan || "",
      kota: row.kota || "",
      provinsi: row.provinsi || "",

      alamatRT: row.alamat_rt || "",

      namaKetua:
        row.nama_ketua || "",
      namaSekretaris:
        row.nama_sekretaris || "",
      namaBendahara:
        row.nama_bendahara || "",

      nomorTelepon:
        row.nomor_telepon || "",
      email: row.email || "",

      jadwalPelayanan:
        row.jadwal_pelayanan || "",
      jamPelayanan:
        row.jam_pelayanan || "",

      informasiTambahan:
        row.informasi_tambahan || "",
    };

    setRtInfo(dataContext);

    alert(
      "Data RT berhasil disimpan."
    );

    setSaving(false);
  };

  return (
    <div>
      <div className="admin-page-header">
        <div>
          <p>ADMIN RT</p>

          <h2>Data RT</h2>

          <span>
            Kelola informasi umum RT 03 / RW 07
            yang digunakan oleh website dan AI RT.
          </span>
        </div>
      </div>

      <form
        className="admin-form"
        onSubmit={handleSubmit}
      >

        <h3>Identitas Wilayah</h3>

        <div className="form-grid">

          <div>
            <label>Nama RT</label>

            <input
              type="text"
              name="namaRT"
              value={form.namaRT}
              onChange={handleChange}
            />
          </div>

          <div>
            <label>Nama RW</label>

            <input
              type="text"
              name="namaRW"
              value={form.namaRW}
              onChange={handleChange}
            />
          </div>

          <div>
            <label>Kelurahan</label>

            <input
              type="text"
              name="kelurahan"
              value={form.kelurahan}
              onChange={handleChange}
            />
          </div>

          <div>
            <label>Kecamatan</label>

            <input
              type="text"
              name="kecamatan"
              value={form.kecamatan}
              onChange={handleChange}
            />
          </div>

          <div>
            <label>Kota</label>

            <input
              type="text"
              name="kota"
              value={form.kota}
              onChange={handleChange}
            />
          </div>

          <div>
            <label>Provinsi</label>

            <input
              type="text"
              name="provinsi"
              value={form.provinsi}
              onChange={handleChange}
            />
          </div>

        </div>

        <div>
          <label>Alamat RT</label>

          <textarea
            name="alamatRT"
            value={form.alamatRT}
            onChange={handleChange}
            rows="3"
            placeholder="Alamat kantor/sekretariat RT"
          />
        </div>

        <h3>Pengurus RT</h3>

        <div className="form-grid">

          <div>
            <label>Ketua RT</label>

            <input
              type="text"
              name="namaKetua"
              value={form.namaKetua}
              onChange={handleChange}
              placeholder="Nama Ketua RT"
            />
          </div>

          <div>
            <label>Sekretaris</label>

            <input
              type="text"
              name="namaSekretaris"
              value={form.namaSekretaris}
              onChange={handleChange}
              placeholder="Nama Sekretaris"
            />
          </div>

          <div>
            <label>Bendahara</label>

            <input
              type="text"
              name="namaBendahara"
              value={form.namaBendahara}
              onChange={handleChange}
              placeholder="Nama Bendahara"
            />
          </div>

        </div>

        <h3>Kontak RT</h3>

        <div className="form-grid">

          <div>
            <label>Nomor Telepon / WhatsApp</label>

            <input
              type="text"
              name="nomorTelepon"
              value={form.nomorTelepon}
              onChange={handleChange}
              placeholder="08xxxxxxxxxx"
            />
          </div>

          <div>
            <label>Email</label>

            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="email RT"
            />
          </div>

        </div>

        <h3>Pelayanan RT</h3>

        <div className="form-grid">

          <div>
            <label>Hari Pelayanan</label>

            <input
              type="text"
              name="jadwalPelayanan"
              value={form.jadwalPelayanan}
              onChange={handleChange}
              placeholder="Contoh: Senin - Jumat"
            />
          </div>

          <div>
            <label>Jam Pelayanan</label>

            <input
              type="text"
              name="jamPelayanan"
              value={form.jamPelayanan}
              onChange={handleChange}
              placeholder="Contoh: 19.00 - 21.00 WIB"
            />
          </div>

        </div>

        <h3>Informasi Tambahan</h3>

        <div>
          <label>
            Informasi yang ingin diketahui warga
          </label>

          <textarea
            name="informasiTambahan"
            value={form.informasiTambahan}
            onChange={handleChange}
            rows="5"
            placeholder="Informasi umum mengenai RT..."
          />
        </div>

        <div className="form-actions">

          <button
            type="submit"
            className="btn-save"
            disabled={saving}
          >
            {saving
              ? "Menyimpan..."
              : "💾 Simpan Data RT"}
          </button>

        </div>

      </form>
    </div>
  );
}

export default AdminDataRT;