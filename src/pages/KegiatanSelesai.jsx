import { useRTData } from "../context/RTDataContext";
import "./KegiatanSelesai.css";

function formatDate(date) {
  return new Date(date).toLocaleDateString("id-ID", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  });
}

function KegiatanSelesai() {
  const { completedActivities } = useRTData();

  return (
    <div className="page">

      <div className="page-header">
        <p>DOKUMENTASI</p>

        <h2>Kegiatan Selesai</h2>

        <span>
          Dokumentasi kegiatan RT 03 / RW 07 yang telah selesai.
        </span>
      </div>

      <div className="announcement-list kegiatan-selesai-list">

        {completedActivities.length === 0 ? (

          <div className="admin-empty">

            <div>✅</div>

            <h3>
              Belum ada kegiatan selesai
            </h3>

            <p>
              Dokumentasi kegiatan yang telah selesai
              akan tampil di halaman ini.
            </p>

          </div>

        ) : (

          completedActivities.map((item) => (

            <article
  className="announcement-card"
  key={item.id}
>
  {item.fotoUrls && item.fotoUrls.length > 0 ? (

<div
  style={{
    display: "flex",
    flexWrap: "wrap",
    gap: "15px",
    marginBottom: "15px",
  }}
>

    {item.fotoUrls.map((fotoUrl, index) => (
     <img
  key={`${item.id}-${index}`}
  className="kegiatan-selesai-foto"
  src={fotoUrl}
  alt={`Dokumentasi ${item.title} ${index + 1}`}

      />
    ))}
  </div>
) : (
  item.fotoUrl && (
    <img
  className="kegiatan-selesai-foto"
  src={item.fotoUrl}
  alt={`Dokumentasi ${item.title}`}

    />
  )
)}

  <div className="announcement-date">
    📅 {formatDate(item.date)}
  </div>

              <h3>
                {item.title}
              </h3>

              <p>
                📍 {item.location}
              </p>

              <p>
                {item.description}
              </p>

            </article>

          ))

        )}

      </div>

    </div>
  );
}

export default KegiatanSelesai;