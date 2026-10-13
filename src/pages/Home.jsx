import { useEffect, useState } from "react";
import { supabase } from "../lib/supabase";
import { useRTData } from "../context/RTDataContext";

// FOTO BANNER: URL ini bisa diganti dengan foto lingkungan RT 03 / RW 07.
const FOTO_BANNER = "/banner03.png";
function Home({ setActivePage, wargaLogin, setWargaLogin }) {
  const {
    announcements = [],
    activities = [],
    completedActivities = [],
  } = useRTData();

  // STATISTIK WARGA RT03
  const [statistikWarga, setStatistikWarga] = useState(null);

  // KONTAK PENTING LINGKUNGAN
  const [kontakPenting, setKontakPenting] = useState([]);

  // HASIL POLLING DI BERANDA
const [hasilPollingBeranda, setHasilPollingBeranda] = useState([]);

  useEffect(() => {
    const ambilStatistikWarga = async () => {
      const { data, error } = await supabase.rpc("statistik_warga_rt03");

      if (error) {
        console.error("Gagal mengambil statistik warga:", error);
        return;
      }

      setStatistikWarga(data);
    };

    ambilStatistikWarga();
  }, []);

  // AMBIL KONTAK PENTING LINGKUNGAN
  useEffect(() => {
    const ambilKontakPenting = async () => {
      const { data, error } = await supabase
        .from("kontak_penting")
        .select("*")
        .eq("aktif", true)
        .order("urutan", { ascending: true });

      if (error) {
        console.error("Gagal mengambil kontak penting:", error);
        return;
      }

      setKontakPenting(data || []);
    };

    ambilKontakPenting();
  }, []);


// AMBIL DAN PERBARUI HASIL POLLING BERANDA OTOMATIS
useEffect(() => {
  let masihAktif = true;

  const ambilHasilPollingBeranda = async () => {
    const { data, error } = await supabase.rpc(
      "hasil_polling_aktif_rt03"
    );

    if (error) {
      console.error(
        "Gagal mengambil hasil polling Beranda:",
        error
      );
      return;
    }

    if (masihAktif) {
      setHasilPollingBeranda(data || []);
    }
  };

  ambilHasilPollingBeranda();

  const intervalPolling = setInterval(() => {
    ambilHasilPollingBeranda();
  }, 10000);

  return () => {
    masihAktif = false;
    clearInterval(intervalPolling);
  };
}, []);


  // CUACA AKTUAL KARET - SETIABUDI
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    let masihAktif = true;

    const ambilCuaca = async () => {
      try {
        const response = await fetch(
          "https://api.open-meteo.com/v1/forecast?latitude=-6.2088&longitude=106.8295&current=temperature_2m,relative_humidity_2m,apparent_temperature,is_day,precipitation,rain,showers,weather_code&timezone=Asia%2FJakarta",
        );

        if (!response.ok) {
          throw new Error("Data cuaca tidak tersedia");
        }

        const data = await response.json();

        if (masihAktif && data.current) {
          setWeather(data.current);
        }
      } catch (error) {
        console.error("Gagal mengambil cuaca:", error);
      }
    };

    ambilCuaca();

    const intervalCuaca = setInterval(ambilCuaca, 30 * 60 * 1000);

    return () => {
      masihAktif = false;
      clearInterval(intervalCuaca);
    };
  }, []);

  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const getDateDifference = (date) => {
    if (!date) return null;

    const [year, month, day] = date.split("-").map(Number);
    const itemDate = new Date(year, month - 1, day);
    itemDate.setHours(0, 0, 0, 0);

    return Math.round((today - itemDate) / (1000 * 60 * 60 * 24));
  };

  const activeAnnouncements = announcements.filter((item) => {
    const difference = getDateDifference(item.date);
    return difference !== null && difference >= 0 && difference <= 10;
  });

  const activeActivities = activities.filter((item) => {
    if (!item.date) return false;

    const [year, month, day] = item.date.split("-").map(Number);
    const itemDate = new Date(year, month - 1, day);
    itemDate.setHours(0, 0, 0, 0);

    return itemDate >= today;
  });

  const recentCompletedActivities = completedActivities.filter((item) => {
    const difference = getDateDifference(item.date);
    return difference !== null && difference >= 0 && difference <= 10;
  });

  const latestAnnouncements = [...activeAnnouncements]
    .sort((a, b) => (b.date || "").localeCompare(a.date || ""))
    .slice(0, 3);

  const greeting =
    new Date().getHours() < 11
      ? "Selamat pagi"
      : new Date().getHours() < 15
        ? "Selamat siang"
        : new Date().getHours() < 18
          ? "Selamat sore"
          : "Selamat malam";

  // IKON DAN KETERANGAN CUACA
  const getWeatherInfo = (code) => {
    if (code === 0) {
      return { icon: "☀️", text: "Cerah" };
    }

    if (code === 1 || code === 2) {
      return { icon: "🌤️", text: "Cerah berawan" };
    }

    if (code === 3) {
      return { icon: "☁️", text: "Berawan" };
    }

    if ([45, 48].includes(code)) {
      return { icon: "🌫️", text: "Berkabut" };
    }

    if ([51, 53, 55, 56, 57].includes(code)) {
      return { icon: "🌦️", text: "Gerimis" };
    }

    if ([61, 63, 65, 66, 67, 80, 81, 82].includes(code)) {
      return { icon: "🌧️", text: "Hujan" };
    }

    if ([71, 73, 75, 77, 85, 86].includes(code)) {
      return { icon: "🌨️", text: "Salju" };
    }

    if ([95, 96, 99].includes(code)) {
      return { icon: "⛈️", text: "Hujan petir" };
    }

    return { icon: "🌡️", text: "Kondisi cuaca" };
  };

  const weatherInfo = weather ? getWeatherInfo(weather.weather_code) : null;

  const menuItems = [
    {
      icon: "📢",
      title: "Pengumuman",
      description: "Informasi penting untuk seluruh warga.",
      count: activeAnnouncements.length,
      page: "pengumuman",
      style: "teal",
    },
    {
      icon: "📅",
      title: "Rencana Kegiatan",
      description: "Jadwal dan rencana kegiatan RT.",
      count: activeActivities.length,
      page: "rencana",
      style: "blue",
    },
    {
      icon: "✅",
      title: "Kegiatan Selesai",
      description: "Dokumentasi kegiatan warga.",
      count: recentCompletedActivities.length,
      page: "selesai",
      style: "green",
    },
    {
      icon: "🤖",
      title: "Tanya AI RT",
      description: "Bantuan informasi seputar lingkungan RT.",
      page: "ai",
      style: "purple",
    },
    {
      icon: "🗳️",
      title: "Polling Warga",
      description: "Sampaikan pendapat melalui polling.",
      page: "polling",
      style: "orange",
    },
    {
      icon: "💬",
      title: "Ruang Warga",
      description: "Ruang komunikasi antarwarga.",
      page: "ruang-warga",
      style: "pink",
    },
  ];

  return (
    <div className="home-v2">
      <div className="home-v2-layout">
        <div className="home-v2-main">
          {/* BANNER UTAMA */}

          <section
            className="home-v2-hero"
            aria-label="Banner RT 03 / RW 07"
          ></section>

          {/* MENU LAYANAN */}
          <section className="home-v2-services">
            <div className="home-v2-section-heading">
              <div>
                <span>LAYANAN WARGA</span>
                <h2>Informasi & Kegiatan Warga</h2>
                <p>Akses layanan lingkungan dengan mudah.</p>
              </div>
            </div>

            <div className="home-v2-menu-grid">
              {menuItems.map((item) => (
                <button
                  type="button"
                  key={item.page}
                  className={`home-v2-menu-card ${item.style}`}
                  onClick={() => setActivePage(item.page)}
                >
                  <span className={`home-v2-menu-icon ${item.style}`}>
                    {item.icon}
                  </span>

                  <span className="home-v2-menu-title">
                    {item.title}
                    {item.count !== undefined && (
                      <span className="home-v2-counter">{item.count}</span>
                    )}
                  </span>

                  <span className="home-v2-menu-description">
                    {item.description}
                  </span>

                  <span className="home-v2-menu-arrow">↗</span>
                </button>
              ))}
            </div>
          </section>


{/* HASIL POLLING AKTIF */}
{hasilPollingBeranda.length > 0 && (
  <section className="home-v2-polling">
    <h3>📊 Hasil Polling Warga</h3>

    {hasilPollingBeranda.map((polling) => {
      const totalSuara = polling.pilihan.reduce(
        (total, item) => total + Number(item.jumlahSuara || 0),
        0
      );

      return (
        <div key={polling.id}>
          <h4>{polling.judul}</h4>

          {polling.pilihan.map((item) => {
            const jumlahSuara = Number(item.jumlahSuara || 0);
            const persentase =
              totalSuara > 0
                ? (jumlahSuara / totalSuara) * 100
                : 0;

            return (
              <div key={item.id} className="home-v2-polling-item">
                <div className="home-v2-polling-label">
                  <span>{item.jawaban}</span>
                  <span>
                    {jumlahSuara} suara ({Math.round(persentase)}%)
                  </span>
                </div>

                <div className="home-v2-polling-track">
                  <div
                    className="home-v2-polling-bar"
                    style={{ width: `${persentase}%` }}
                  />
                </div>
              </div>
            );
          })}

          <p className="home-v2-polling-total">
            Total suara: {totalSuara}
          </p>
        </div>
      );
    })}
  </section>
)}


          {/* AKSES AKUN */}
          <section className="home-v2-access">
            <div>
              <span className="home-v2-access-icon">👥</span>
              <div>
                <h3>
                  {wargaLogin
                    ? `Halo, ${wargaLogin.nama}`
                    : "Ruang khusus warga"}
                </h3>
                <p>
                  {wargaLogin
                    ? "Anda sudah masuk ke akun warga."
                    : "Masuk untuk mengakses layanan warga."}
                </p>
              </div>
              {!wargaLogin && (
                <button type="button" onClick={() => setActivePage("login")}>
                  Masuk Warga →
                </button>
              )}
            </div>

            <div>
              <span className="home-v2-access-icon">⚙️</span>
              <div>
                <h3>Panel Administrasi</h3>
                <p>Pengelolaan informasi dan kegiatan RT.</p>
              </div>
              <button type="button" onClick={() => setActivePage("admin")}>
                Akses Admin →
              </button>
            </div>
          </section>
        </div>

        {/* SIDEBAR INFORMASI */}
        <aside className="home-v2-sidebar">
          <section className="home-v2-welcome">
            <div className="home-v2-welcome-top">
              <div className="home-v2-welcome-greeting">
                <span className="home-v2-welcome-icon">
                  {weather && weather.is_day === 1 ? "☀️" : "🌙"}
                </span>
                <p>{greeting},</p>
              </div>

              {weather && (
                <div className="home-v2-weather">
                  <span className="home-v2-weather-icon">
                    {weatherInfo?.icon || "🌡️"}
                  </span>
                  <strong>{Math.round(weather.temperature_2m)}°C</strong>
                  <span className="home-v2-weather-description">
                    {weatherInfo?.text || "Cuaca terkini"}
                  </span>
                </div>
              )}
            </div>

            <h2>{wargaLogin?.nama || "Warga RT 03"}</h2>
            <span>RT 03 / RW 07 · Karet Setiabudi</span>
          </section>

          <section className="home-v2-side-card">
            <div className="home-v2-side-heading">
              <h3>Pengumuman Terbaru</h3>
              <button type="button" onClick={() => setActivePage("pengumuman")}>
                Lihat semua →
              </button>
            </div>

            {latestAnnouncements.length > 0 ? (
              <div className="home-v2-latest-list">
                {latestAnnouncements.map((item, index) => (
                  <button
                    type="button"
                    className="home-v2-latest-item"
                    key={item.id || `${item.date}-${index}`}
                    onClick={() => setActivePage("pengumuman")}
                  >
                    <span className="home-v2-latest-icon">📢</span>
                    <span>
                      <strong>
                        {item.title || item.judul || "Pengumuman"}
                      </strong>
                      <small>
                        {item.date || item.tanggal || "Informasi warga"}
                      </small>
                    </span>
                  </button>
                ))}
              </div>
            ) : (
              <p className="home-v2-empty">Belum ada pengumuman terbaru.</p>
            )}
          </section>

          <section className="home-v2-contact home-v2-statistik">
            <div className="statistik-header">
              <div>
                <span className="statistik-label">INFORMASI LINGKUNGAN</span>
                <h3>Data dan Informasi Warga</h3>
              </div>
              <span className="statistik-icon">👥</span>
            </div>

            {statistikWarga ? (
              <>
                <div className="statistik-total">
                  <strong>{statistikWarga.total}</strong>
                  <span>Total Warga RT 03 / RW 07</span>
                </div>

                <div className="statistik-gender">
                  <span>
                    👨 Laki-laki <strong>{statistikWarga.lakiLaki}</strong>
                  </span>
                  <span>
                    👩 Perempuan <strong>{statistikWarga.perempuan}</strong>
                  </span>
                </div>

                {[
                  { key: "balita", label: "Balita", color: "#F59E0B" },
                  { key: "anak", label: "Anak-anak", color: "#10B981" },
                  { key: "remaja", label: "Remaja", color: "#6366F1" },
                  { key: "dewasa", label: "Dewasa", color: "#0EA5E9" },
                  { key: "lansia", label: "Lansia", color: "#EC4899" },
                ].map((item) => (
                  <div className="statistik-bar-item" key={item.key}>
                    <div className="statistik-bar-info">
                      <span>{item.label}</span>
                      <strong>{statistikWarga[item.key]}</strong>
                    </div>

                    <div className="statistik-bar-track">
                      <div
                        className="statistik-bar-fill"
                        style={{
                          width: `${
                            statistikWarga.total > 0
                              ? (statistikWarga[item.key] /
                                  statistikWarga.total) *
                                100
                              : 0
                          }%`,
                          backgroundColor: item.color,
                        }}
                      />
                    </div>
                  </div>
                ))}
              </>
            ) : (
              <p>Memuat data warga...</p>
            )}
          </section>

          {/* KONTAK PENTING LINGKUNGAN */}
          <section className="kontak-penting-home">
            <h2>📞 Kontak Penting Lingkungan</h2>

            {kontakPenting.length === 0 ? (
              <p>Belum ada kontak yang tersedia.</p>
            ) : (
              <div className="kontak-penting-home-list">
                {kontakPenting.map((item) => (
                  <div className="kontak-penting-home-item" key={item.id}>
                    <div className="kontak-penting-home-info">
                      <strong>{item.nama_kontak}</strong>

                      <p>{item.nomor_telepon || "Nomor belum tersedia"}</p>

                      {item.nomor_telepon && (
                        <div className="kontak-penting-home-actions">
                          <a
                            className="kontak-btn-whatsapp"
                            href={`https://wa.me/${item.nomor_telepon.replace(/\D/g, "").replace(/^0/, "62")}`}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            WhatsApp
                          </a>

                          <a
                            className="kontak-btn-telepon"
                            href={`tel:${item.nomor_telepon.replace(/[^\d+]/g, "")}`}
                          >
                            Telepon
                          </a>
                        </div>
                      )}

                      {item.keterangan && <small>{item.keterangan}</small>}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </section>
        </aside>
      </div>
    </div>
  );
}

export default Home;
