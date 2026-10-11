
import { useState } from "react";
import { cariWargaDenganNIK } from "../services/wargaService";
import { supabase } from "../lib/supabase";

async function sha256(value) {
  const bytes = new TextEncoder().encode(value);
  const digest = await crypto.subtle.digest("SHA-256", bytes);

  return Array.from(new Uint8Array(digest))
    .map((b) => b.toString(16).padStart(2, "0"))
    .join("");
}

function LoginWarga({ setWargaLogin, onAktivasi }) {
  const [nik, setNik] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);


  // =====================================================
  // RESET PASSWORD AKUN WARGA
  // =====================================================
  const [modeResetPassword, setModeResetPassword] = useState(false);
  const [kodeReset, setKodeReset] = useState("");
  const [passwordBaru, setPasswordBaru] = useState("");
  const [konfirmasiPasswordBaru, setKonfirmasiPasswordBaru] = useState("");
  const [loadingReset, setLoadingReset] = useState(false);
  const [pesanReset, setPesanReset] = useState("");


  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    const nikBersih = nik.trim();

    if (!/^\d{16}$/.test(nikBersih)) {
      setError("NIK harus terdiri dari 16 digit.");
      return;
    }

    if (!password) {
      setError("Silakan masukkan kata sandi.");
      return;
    }

    setLoading(true);

    try {
      // 1. Cari data warga berdasarkan NIK.
      const warga = await cariWargaDenganNIK(nikBersih);

      if (!warga) {
        setError("Data warga tidak ditemukan atau tidak aktif.");
        return;
      }

      // 2. Pastikan akun warga sudah terhubung.
      const { data: dataWarga, error: cekError } = await supabase
        .from("warga")
        .select("id, nama, status, auth_user_id")
        .eq("id", warga.id)
        .maybeSingle();

      if (cekError) {
        console.error("Gagal memeriksa akun warga:", cekError);
        setError("Data akun belum dapat diperiksa. Silakan coba lagi.");
        return;
      }

      if (!dataWarga || dataWarga.status !== "Aktif") {
        setError("Data warga tidak ditemukan atau tidak aktif.");
        return;
      }

      if (!dataWarga.auth_user_id) {
        setError("Akun belum diaktifkan. Silakan pilih Aktivasi Akun Warga.");
        return;
      }

      // 3. Bentuk email internal yang sama dengan proses aktivasi.
      const wargaId = String(warga.id);
      const emailInternal =
        `warga-${await sha256(wargaId)}@akun-warga.invalid`;

      // 4. Login menggunakan kata sandi Supabase Auth.
      const { data: authData, error: authError } =
        await supabase.auth.signInWithPassword({
          email: emailInternal,
          password,
        });

      if (authError || !authData.user) {
        console.error("Login warga gagal:", authError?.message);
        setError("NIK atau kata sandi salah.");
        return;
      }

      // 5. Pastikan akun yang login memang milik warga ini.
      if (authData.user.id !== dataWarga.auth_user_id) {
        await supabase.auth.signOut();

        setError(
          "Akun tidak cocok dengan data warga. Silakan hubungi Admin RT."
        );
        return;
      }

      // 6. Login berhasil.
      setWargaLogin({
        ...warga,
        auth_user_id: authData.user.id,
      });
    } catch (err) {
      console.error("Kesalahan login warga:", err);
      setError("Terjadi kesalahan saat masuk. Silakan coba kembali.");
    } finally {
      setLoading(false);
    }
  };


// =====================================================
// RESET PASSWORD AKUN WARGA
// =====================================================
const handleResetPassword = async (e) => {
  e.preventDefault();
  setPesanReset("");

  const nikBersih = nik.trim();
  const kodeBersih = kodeReset.trim();
  const passwordBersih = passwordBaru;

  if (!/^\d{16}$/.test(nikBersih)) {
    setPesanReset("NIK harus terdiri dari 16 digit.");
    return;
  }

  if (!/^\d{8}$/.test(kodeBersih)) {
    setPesanReset("Kode reset harus terdiri dari 8 digit.");
    return;
  }

  if (passwordBersih.length < 8 || passwordBersih.length > 72) {
    setPesanReset("Password baru harus terdiri dari 8–72 karakter.");
    return;
  }

  if (passwordBersih !== konfirmasiPasswordBaru) {
    setPesanReset("Konfirmasi password baru tidak sama.");
    return;
  }

  setLoadingReset(true);

  try {
    const { data, error: resetError } = await supabase.functions.invoke(
      "reset-password",
      {
        body: {
          nik: nikBersih,
          kode: kodeBersih,
          password: passwordBersih,
        },
      },
    );


    if (resetError) {
      console.error("Gagal mereset password:", resetError);

      let pesanServer = "";

      try {
        if (resetError.context) {
          const respons = resetError.context.clone
            ? resetError.context.clone()
            : resetError.context;

          const teksRespons = await respons.text();

          if (teksRespons) {
            try {
              const hasilServer = JSON.parse(teksRespons);
              pesanServer =
                hasilServer.message ||
                hasilServer.error_description ||
                hasilServer.error ||
                "";
            } catch {
              pesanServer = teksRespons;
            }
          }
        }
      } catch (err) {
        console.error("Gagal membaca respons server reset:", err);
      }

      console.error("PENYEBAB RESET PASSWORD:", pesanServer);

      setPesanReset(
        pesanServer ||
          "Reset password ditolak server (403). Periksa log Edge Function reset-password di Supabase.",
      );
      return;
    }


    if (!data?.success) {
      setPesanReset(
        data?.message || data?.error || "Reset password gagal.",
      );
      return;
    }

    setPesanReset("Password berhasil diubah. Silakan masuk menggunakan password baru.");
    setPassword("");
    setKodeReset("");
    setPasswordBaru("");
    setKonfirmasiPasswordBaru("");
    setModeResetPassword(false);
  } catch (err) {
    console.error("Kesalahan reset password:", err);
    setPesanReset("Terjadi kesalahan saat reset password. Silakan coba lagi.");
  } finally {
    setLoadingReset(false);
  }
};



  // =====================================================
  // TAMPILAN LOGIN DAN RESET PASSWORD AKUN WARGA
  // =====================================================
  return (
    <div className="page">
      <div className="page-header">
        <p>AKSES WARGA</p>
        <h2>
          {modeResetPassword
            ? "Reset Password Warga"
            : "Masuk sebagai Warga"}
        </h2>
        <span>
          {modeResetPassword
            ? "Masukkan NIK, kode reset dari Admin RT, dan password baru."
            : "Masukkan NIK dan kata sandi akun warga Anda."}
        </span>
      </div>

      <div className="ai-container">
        {modeResetPassword ? (
          <form className="ai-form" onSubmit={handleResetPassword}>
            <input
              type="text"
              value={nik}
              onChange={(e) =>
                setNik(e.target.value.replace(/\D/g, "").slice(0, 16))
              }
              placeholder="Masukkan NIK 16 digit"
              inputMode="numeric"
              autoComplete="username"
              required
            />

            <input
              type="text"
              value={kodeReset}
              onChange={(e) =>
                setKodeReset(e.target.value.replace(/\D/g, "").slice(0, 8))
              }
              placeholder="Kode reset 8 digit dari Admin"
              inputMode="numeric"
              autoComplete="one-time-code"
              required
            />

            <input
              type="password"
              value={passwordBaru}
              onChange={(e) => setPasswordBaru(e.target.value)}
              placeholder="Password baru (8–72 karakter)"
              autoComplete="new-password"
              minLength={8}
              maxLength={72}
              required
            />

            <input
              type="password"
              value={konfirmasiPasswordBaru}
              onChange={(e) => setKonfirmasiPasswordBaru(e.target.value)}
              placeholder="Ulangi password baru"
              autoComplete="new-password"
              minLength={8}
              maxLength={72}
              required
            />

            {pesanReset && (
              <p
                role="alert"
                style={{
                  color: pesanReset.includes("berhasil")
                    ? "#2e7d32"
                    : "#c62828",
                }}
              >
                {pesanReset}
              </p>
            )}

            <button type="submit" disabled={loadingReset}>
              {loadingReset ? "Memproses..." : "Ubah Password"}
            </button>

            <button
              type="button"
              onClick={() => {
                setModeResetPassword(false);
                setPesanReset("");
                setKodeReset("");
                setPasswordBaru("");
                setKonfirmasiPasswordBaru("");
              }}
              disabled={loadingReset}
            >
              Kembali ke Login
            </button>
          </form>
        ) : (
          <form className="ai-form" onSubmit={handleSubmit}>
            <input
              type="text"
              value={nik}
              onChange={(e) =>
                setNik(e.target.value.replace(/\D/g, "").slice(0, 16))
              }
              placeholder="Masukkan NIK 16 digit"
              inputMode="numeric"
              autoComplete="username"
              required
            />

            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Masukkan kata sandi"
              autoComplete="current-password"
              required
            />

            {error && <p style={{ color: "#c62828" }}>{error}</p>}

            <button type="submit" disabled={loading}>
              {loading ? "Memeriksa..." : "Masuk"}
            </button>

            <button
              type="button"
              onClick={() => {
                setModeResetPassword(true);
                setError("");
                setPesanReset("");
              }}
              disabled={loading}
            >
              Lupa Password?
            </button>

            <button type="button" onClick={onAktivasi} disabled={loading}>
              Aktivasi Akun Warga
            </button>
          </form>
        )}
      </div>
    </div>
  );
}

export default LoginWarga;