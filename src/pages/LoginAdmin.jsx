
import { useState } from "react";
import { supabaseAdmin } from "../lib/supabaseAdmin";

function LoginAdmin({ onLoginSuccess, onBack }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const { data, error: loginError } =
  await supabaseAdmin.auth.signInWithPassword({
          email: email.trim(),
          password,
        });

      if (loginError) {
        setError("Email atau kata sandi Admin tidak sesuai.");
        return;
      }

      if (!data.user || !data.session) {
        setError("Login gagal. Silakan coba kembali.");
        return;
      }

      onLoginSuccess(data.user);
    } catch (err) {
      console.error("LOGIN ADMIN ERROR:", err);
      setError("Terjadi kesalahan. Silakan coba kembali.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="page">
      <div className="page-header">
        <p>AKSES KHUSUS PENGURUS</p>
        <h2>Login Admin RT</h2>
        <span>Masuk menggunakan akun Admin yang terdaftar.</span>
      </div>

      <div className="ai-container">
        <form className="ai-form" onSubmit={handleSubmit}>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email Admin"
            autoComplete="username"
            required
          />

          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Kata sandi Admin"
            autoComplete="current-password"
            required
          />

          {error && (
            <p style={{ color: "#c62828" }}>{error}</p>
          )}

          <button type="submit" disabled={loading}>
            {loading ? "Memeriksa..." : "Masuk sebagai Admin"}
          </button>

          <button
            type="button"
            onClick={onBack}
            disabled={loading}
          >
            Kembali
          </button>
        </form>
      </div>
    </div>
  );
}

export default LoginAdmin;