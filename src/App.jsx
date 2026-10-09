import { useState } from "react";
import "./App.css";

import Home from "./pages/Home";
import Pengumuman from "./pages/Pengumuman";
import RencanaKegiatan from "./pages/RencanaKegiatan";
import KegiatanSelesai from "./pages/KegiatanSelesai";
import TanyaAI from "./pages/TanyaAI";
import Polling from "./pages/Polling";
import RuangWarga from "./pages/RuangWarga";
import Admin from "./pages/Admin";
import LoginWarga from "./pages/LoginWarga";

function App() {
  const [activePage, setActivePage] = useState("home");
  const [wargaLogin, setWargaLogin] = useState(null);

  const renderPage = () => {
    switch (activePage) {
      case "pengumuman":
        return <Pengumuman />;

      case "rencana":
        return <RencanaKegiatan />;

      case "selesai":
        return <KegiatanSelesai />;

      case "ai":
        return <TanyaAI />;

      case "polling":
        return <Polling />;

      case "ruang-warga":
        return <RuangWarga wargaLogin={wargaLogin} />;

      case "admin":
        return <Admin />;

      case "login":
        return (
          <LoginWarga
            setWargaLogin={(warga) => {
              setWargaLogin(warga);
              setActivePage("home");
            }}
          />
        );

      default:
        return (
          <Home
            setActivePage={setActivePage}
            wargaLogin={wargaLogin}
            setWargaLogin={setWargaLogin}
          />
        );
    }
  };

  return (
    <div className="app">
      {/* HEADER */}
      <header className="header">
        <div className="brand" onClick={() => setActivePage("home")}>
          <div className="brand-icon">RT</div>

          <div>
            <h1>RT 03 / RW 07</h1>
            <p>Karet Setiabudi</p>
          </div>
        </div>

        <nav className="navigation">
  <button
    className={activePage === "home" ? "menu-aktif" : ""}
    onClick={() => setActivePage("home")}
  >
    Beranda
  </button>

  <button
    className={activePage === "pengumuman" ? "menu-aktif" : ""}
    onClick={() => setActivePage("pengumuman")}
  >
    Pengumuman
  </button>

  <button
    className={activePage === "rencana" ? "menu-aktif" : ""}
    onClick={() => setActivePage("rencana")}
  >
    Rencana Kegiatan
  </button>

  <button
    className={activePage === "selesai" ? "menu-aktif" : ""}
    onClick={() => setActivePage("selesai")}
  >
    Kegiatan Selesai
  </button>

  <button
    className={`${activePage === "ai" ? "menu-aktif " : ""}ai-button`}
    onClick={() => setActivePage("ai")}
  >
    🤖 Tanya AI RT
  </button>

  <button
    className={activePage === "polling" ? "menu-aktif" : ""}
    onClick={() => setActivePage("polling")}
  >
    🗳️ Polling
  </button>

  <button
    className={activePage === "ruang-warga" ? "menu-aktif" : ""}
    onClick={() => setActivePage("ruang-warga")}
  >
    💬 Ruang Warga
  </button>

  <button
    className={activePage === "login" ? "menu-aktif" : ""}
    onClick={() => setActivePage("login")}
  >
    👤 Masuk Warga
  </button>

  <button
    className={activePage === "admin" ? "menu-aktif" : ""}
    onClick={() => setActivePage("admin")}
  >
    ⚙️ Admin
  </button>
</nav>
      </header>

      {/* CONTENT */}
      <main className="main-content">{renderPage()}</main>

      {/* FOOTER */}
      <footer className="footer">
        <div>
          <strong>RT 03 / RW 07 Karet Setiabudi</strong>
          <p>Sistem Informasi Warga</p>
        </div>

        <div>
          <p>© 2026 RT 03 / RW 07</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
