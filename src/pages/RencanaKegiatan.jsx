import { useRTData } from "../context/RTDataContext";

function formatDate(date) {
  return new Date(date).toLocaleDateString("id-ID", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  });
}

function RencanaKegiatan() {
  const { activities } = useRTData();

  return (
    <div className="page">
      <div className="page-header">
        <p>AGENDA WARGA</p>

        <h2>Rencana Kegiatan</h2>

        <span>
          Informasi kegiatan yang akan dilaksanakan oleh RT 03 / RW 07
        </span>
      </div>

      <div className="announcement-list">
        {activities.length === 0 ? (
          <div className="admin-empty">
            <div>📅</div>

            <h3>Belum ada rencana kegiatan</h3>

            <p>
              Belum terdapat kegiatan yang direncanakan oleh Admin RT.
            </p>
          </div>
        ) : (
          activities.map((item) => (
            <article className="announcement-card" key={item.id}>
              <div className="announcement-date">
                📅 {formatDate(item.date)}
              </div>

              <h3>{item.title}</h3>

              <p>
                🕐 {item.time}
              </p>

              <p>
                📍 {item.location}
              </p>

              <p>{item.description}</p>

              <div className="activity-status">
                {item.status}
              </div>
            </article>
          ))
        )}
      </div>
    </div>
  );
}

export default RencanaKegiatan;