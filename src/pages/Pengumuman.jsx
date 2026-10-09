import { useRTData } from "../context/RTDataContext";

function formatDate(date) {
  return new Date(date).toLocaleDateString("id-ID", {
    day: "2-digit",
    month: "long",
    year: "numeric"
  });
}

function Pengumuman() {
   const { announcements } = useRTData();
  return (
    <div className="page">

      <div className="page-header">

        <p>INFORMASI WARGA</p>

        <h2>Pengumuman</h2>

        <span>
          Informasi resmi dari RT 03 / RW 07
        </span>

      </div>


      <div className="announcement-list">

        {announcements.length === 0 ? (

          <div className="admin-empty">
            <div>📢</div>

            <h3>
              Belum ada pengumuman
            </h3>

            <p>
              Belum terdapat pengumuman dari Admin RT.
            </p>
          </div>

        ) : (

          announcements.map((item) => (

            <article
              className="announcement-card"
              key={item.id}
            >

              <div className="announcement-date">
                📅 {formatDate(item.date)}
              </div>

              <h3>
                {item.title}
              </h3>

              <p>
                {item.content}
              </p>

            </article>

          ))

        )}

      </div>

    </div>
  );
}

export default Pengumuman;