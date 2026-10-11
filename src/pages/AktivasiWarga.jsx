
import { useState } from "react";
import { supabase } from "../lib/supabase";

function AktivasiWarga({ onBack, onAktivasiBerhasil }) {
  const [nik, setNik] = useState("");
  const [kode, setKode] = useState("");
  const [password, setPassword] = useState("");
  const [konfirmasiPassword, setKonfirmasiPassword] = useState("");
  const [error, setError] = useState("");


const handleSubmit = async (e) => {
  e.preventDefault();
  setError("");

  if (!/^\d{16}$/.test(nik)) {
    setError("NIK harus terdiri dari 16 angka.");
    return;
  }

  if (!/^\d{8}$/.test(kode)) {
    setError("Kode aktivasi harus terdiri dari 8 angka.");
    return;
  }

  if (password.length < 8 || password.length > 72) {
    setError("Kata sandi harus terdiri dari 8–72 karakter.");
    return;
  }

  if (password !== konfirmasiPassword) {
    setError("Konfirmasi kata sandi tidak sama.");
    return;
  }

  setLoading(true);

  try {
    const { data, error: aktivasiError } =
      await supabase.functions.invoke("aktivasi-akun-warga", {
        body: {
          nik: nik.trim(),
          kode: kode.trim(),
          password,
        },
      });


if (aktivasiError) {
  console.error("GAGAL MEMANGGIL AKTIVASI:", aktivasiError);

  let pesanError = "";

  try {
    if (aktivasiError.context) {
      const response = aktivasiError.context.clone
        ? aktivasiError.context.clone()
        : aktivasiError.context;

      const hasil = await response.json();
      pesanError = hasil?.error || "";
      console.error("PESAN SERVER AKTIVASI:", hasil);
    }
  } catch (err) {
    console.error("Gagal membaca pesan server:", err);
  }

  setError(
    pesanError ||
      aktivasiError.message ||
      "Aktivasi gagal. Silakan coba kembali.",
  );
  return;
}

    if (!data?.success) {
      setError(data?.error || "Aktivasi akun belum berhasil.");
      return;
    }

    alert(
      data.message ||
        "Aktivasi berhasil. Silakan masuk menggunakan NIK dan kata sandi.",
    );

    if (onAktivasiBerhasil) {
      onAktivasiBerhasil();
    } else if (onBack) {
      onBack();
    }
  } catch (err) {
    console.error("KESALAHAN AKTIVASI:", err);
    setError("Terjadi kesalahan saat aktivasi. Silakan coba kembali.");
  } finally {
    setLoading(false);
  }
};

const [loading, setLoading] = useState(false);

  return (
    <div className="page">
      <div className="page-header">
        <p>AKSES WARGA</p>
        <h2>Aktivasi Akun Warga</h2>
        <span>
          Aktifkan akun menggunakan NIK dan kode aktivasi dari Admin RT.
        </span>
      </div>

      <div className="ai-container">
        <form className="ai-form" onSubmit={handleSubmit}>
          <input
            type="text"
            value={nik}
            onChange={(e) =>
              setNik(e.target.value.replace(/\D/g, "").slice(0, 16))
            }
            placeholder="NIK 16 digit"
            inputMode="numeric"
            autoComplete="off"
            required
          />

          <input
            type="text"
            value={kode}
            onChange={(e) =>
              setKode(e.target.value.replace(/\D/g, "").slice(0, 8))
            }
            placeholder="Kode aktivasi 8 digit"
            inputMode="numeric"
            autoComplete="off"
            required
          />

          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Buat kata sandi (minimal 8 karakter)"
            autoComplete="new-password"
            required
          />

          <input
            type="password"
            value={konfirmasiPassword}
            onChange={(e) => setKonfirmasiPassword(e.target.value)}
            placeholder="Ulangi kata sandi"
            autoComplete="new-password"
            required
          />

          {error && (
            <p style={{ color: "#c62828" }}>{error}</p>
          )}

          <button type="submit" disabled={loading}>
  {loading ? "Mengaktifkan..." : "Aktivasi Akun"}
</button>

          <button type="button" onClick={onBack}>
            Kembali ke Login
          </button>
        </form>
      </div>
    </div>
  );
}

export default AktivasiWarga;