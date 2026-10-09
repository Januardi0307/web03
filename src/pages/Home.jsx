import { supabase } from "../lib/supabase";
import { useRTData } from "../context/RTDataContext";

function Home({ setActivePage, wargaLogin, setWargaLogin }) {
  const {
    announcements,
    activities,
    completedActivities,
  } = useRTData();

  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const getDateDifference = (date) => {
  if (!date) return null;

  const [year, month, day] = date.split("-").map(Number);

  const itemDate = new Date(year, month - 1, day);
  itemDate.setHours(0, 0, 0, 0);

  return Math.round(
    (today - itemDate) / (1000 * 60 * 60 * 24)
  );
};

  const activeAnnouncements = announcements.filter((item) => {
  const difference = getDateDifference(item.date);

  return difference <= 10;
});

  const activeActivities = activities.filter((item) => {
    const itemDate = new Date(item.date);
    itemDate.setHours(0, 0, 0, 0);

    return itemDate >= today;
  });

  const recentCompletedActivities = completedActivities.filter((item) => {
  const difference = getDateDifference(item.date);

  return difference <= 10;
});
  return (
    <div>

      {/* HERO */}

      <section className="hero">

        <div className="hero-content">

          <p className="hero-label">
            SISTEM INFORMASI WARGA
          </p>

          <h2>
            RT 03 / RW 07
          </h2>

          <h3>
            Karet Setiabudi
          </h3>

          <p>
            Selamat datang di pusat informasi dan komunikasi
            warga RT 03 / RW 07 Karet Setiabudi.
          </p>

          <button
            className="hero-button"
            onClick={() => setActivePage("ai")}
          >
            🤖 Tanya AI RT
          </button>

        </div>
        {wargaLogin && (
  <div className="warga-login-info">
    <span>👤</span>

    <div>
      <strong>{wargaLogin.nama}</strong>
      <small>Warga RT 03 / RW 07</small>
    </div>

   <button
  className="warga-logout-button"
  onClick={async () => {
    await supabase.auth.signOut();
    setWargaLogin(null);
  }}
>
  Keluar
</button>
  </div>
)}

      </section>


      {/* MENU */}

      <section className="home-section">

        <div className="section-title">

          <p>INFORMASI RT</p>

          <h2>
            Informasi & Kegiatan Warga
          </h2>

        </div>


        <div className="menu-grid">

          <div
            className="menu-card"
            onClick={() => setActivePage("pengumuman")}
          >
            <div className="menu-icon">
              📢
            </div>

            <h3>
  Pengumuman

  <span className="announcement-counter">
    {activeAnnouncements.length}
  </span>
</h3>

            <p>
              Informasi penting untuk seluruh warga.
            </p>

          </div>


          <div
            className="menu-card"
            onClick={() => setActivePage("rencana")}
          >
            <div className="menu-icon">
              📅
            </div>

            <h3>
  Rencana Kegiatan

  <span className="announcement-counter">
    {activeActivities.length}
  </span>
</h3>

            <p>
              Jadwal dan rencana kegiatan RT.
            </p>

          </div>

          <div
            className="menu-card"
            onClick={() => setActivePage("selesai")}
          >
            <div className="menu-icon">
              ✅
            </div>

            <h3>
  Kegiatan Selesai

  <span className="announcement-counter">
    {recentCompletedActivities.length}
  </span>
</h3>

            <p>
              Dokumentasi kegiatan yang telah selesai.
            </p>

          </div>


          <div
            className="menu-card special-card"
            onClick={() => setActivePage("ai")}
          >
            <div className="menu-icon">
              🤖
            </div>

            <h3>Tanya AI RT</h3>

            <p>
              Tanyakan informasi seputar RT kepada AI.
            </p>

          </div>


          <div
            className="menu-card"
            onClick={() => setActivePage("polling")}
          >
            <div className="menu-icon">
              🗳️
            </div>

            <h3>Polling Warga</h3>

            <p>
              Sampaikan pendapat melalui polling.
            </p>

          </div>

        </div>

      </section>

    </div>
  );
}

export default Home;