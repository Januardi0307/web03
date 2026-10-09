import { useState } from "react";
import { cariWargaDenganNIK } from "../services/wargaService";
import { supabase } from "../lib/supabase";

function LoginWarga({ setWargaLogin }) {
  const [nama, setNama] = useState("");
  const [nik, setNik] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    setError("");

    if (!nama.trim()) {
      setError("Silakan masukkan nama.");
      return;
    }

    if (!nik.trim()) {
      setError("Silakan masukkan NIK.");
      return;
    }

    if (!/^\d{16}$/.test(nik.trim())) {
      setError("NIK harus terdiri dari 16 digit.");
      return;
    }

    setLoading(true);

    const warga = await cariWargaDenganNIK(nik.trim());

if (!warga) {
  setLoading(false);
  setError("NIK tidak ditemukan atau data warga tidak aktif.");
  return;
}

const {
  data: { session: sessionLama },
} = await supabase.auth.getSession();

let authUserId = sessionLama?.user?.id;

if (!authUserId) {
  const { data: authData, error: authError } =
    await supabase.auth.signInAnonymously();

  if (authError) {
    console.error("GAGAL ANONYMOUS AUTH:", authError);
    setLoading(false);
    setError(authError.message);
    return;
  }

  authUserId = authData.session?.user?.id;
}

setLoading(false);

console.log("SUPABASE USER ID:", authUserId);

if (!authUserId) {
  setError("Sesi warga tidak valid. Silakan coba lagi.");
  return;
}

if (!authUserId) {
  setError("Sesi warga tidak valid. Silakan coba lagi.");
  return;
}

const { data: wargaTerhubung, error: updateError } =
  await supabase.rpc("hubungkan_akun_warga", {
    p_nik: nik.trim(),
  });

if (updateError) {
  console.error("Gagal menghubungkan akun warga:", updateError);
  setError("Gagal menghubungkan akun warga. Silakan coba lagi.");
  return;
}

console.log(
  "AKUN WARGA BERHASIL DIHUBUNGKAN:",
  wargaTerhubung?.nama
);

setWargaLogin({
  ...warga,
  auth_user_id: authUserId,
});
  };

  return (
    <div className="page">
      <div className="page-header">
        <p>AKSES WARGA</p>
        <h2>Masuk sebagai Warga</h2>
        <span>
          Masukkan nama dan NIK untuk mengakses fitur warga.
        </span>
      </div>

      <div className="ai-container">
        <form className="ai-form" onSubmit={handleSubmit}>

          <input
            type="text"
            value={nama}
            onChange={(e) => setNama(e.target.value)}
            placeholder="Masukkan nama"
            autoComplete="name"
          />

          <input
            type="text"
            value={nik}
            onChange={(e) =>
              setNik(e.target.value.replace(/\D/g, "").slice(0, 16))
            }
            placeholder="Masukkan NIK 16 digit"
            inputMode="numeric"
            autoComplete="off"
          />

          {error && (
            <p style={{ color: "#c62828" }}>
              {error}
            </p>
          )}

          <button type="submit" disabled={loading}>
            {loading ? "Memeriksa..." : "Masuk"}
          </button>

        </form>
      </div>
    </div>
  );
}

export default LoginWarga;