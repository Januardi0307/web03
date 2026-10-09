import { useEffect, useRef, useState } from "react";
import { supabase } from "../lib/supabase";
import {
  ambilPesanWarga,
  kirimPesanWarga,
} from "../services/komunikasiService";

function RuangWarga({ wargaLogin }) {
  const [pesan, setPesan] = useState([]);
  const [pesanBaru, setPesanBaru] = useState("");
  const [mengirim, setMengirim] = useState(false);

  const pesanContainerRef = useRef(null);

 useEffect(() => {
  async function muatPesan() {
    const data = await ambilPesanWarga();
    setPesan(data);
  }

  muatPesan();
}, []);

useEffect(() => {
  const container = pesanContainerRef.current;

  if (!container) return;

  requestAnimationFrame(() => {
    container.scrollTop = container.scrollHeight;
  });
}, [pesan]);

  useEffect(() => {
  const channel = supabase
    .channel("ruang-warga-realtime")
    .on(
      "postgres_changes",
      {
        event: "INSERT",
        schema: "public",
        table: "komunikasi_warga",
      },
      async (payload) => {
        console.log("PESAN REALTIME DITERIMA:", payload);

        const data = await ambilPesanWarga();

        setPesan(data);
      }
    )
    .subscribe((status) => {
      console.log("STATUS REALTIME RUANG WARGA:", status);
    });

  return () => {
    supabase.removeChannel(channel);
  };
}, []);

  return (
    <div className="page">
      <div className="page-header">
        <p>KOMUNIKASI WARGA</p>
        <h2>💬 Ruang Warga</h2>
        <span>
          Ruang komunikasi bersama warga RT 03 / RW 07 Karet Setiabudi.
        </span>
      </div>

      <div className="ruang-warga-container">
        {!wargaLogin ? (
          <div className="empty-state">
            <div className="empty-icon">🔐</div>
            <h3>Silakan masuk sebagai warga</h3>
            <p>
              Anda harus masuk terlebih dahulu untuk membaca
              dan mengirim pesan di Ruang Warga.
            </p>
          </div>
        ) : (
          <>
            <div className="ruang-warga-info">
              <strong>👤 {wargaLogin.nama}</strong>
              <span>Anda masuk sebagai warga RT 03 / RW 07</span>
            </div>

            <div
  className="ruang-warga-messages"
  ref={pesanContainerRef}
>
  {pesan.length === 0 ? (
    <div className="empty-state">
      <div className="empty-icon">💬</div>
      <h3>Belum ada pesan</h3>
      <p>
        Pesan warga akan tampil di sini.
      </p>
    </div>
  ) : (
    pesan.map((item) => (
      <div
  key={item.id}
  className={`ruang-warga-message ${
    item.warga?.nama === wargaLogin.nama ? "pesan-saya" : ""
  }`}
>
  <div className="ruang-warga-message-header">
    <strong>{item.warga?.nama || "Warga RT 03"}</strong>

    <small>
      {new Date(item.created_at).toLocaleString("id-ID", {
        day: "2-digit",
        month: "short",
        year: "numeric",
        hour: "2-digit",
        minute: "2-digit",
      })}
    </small>
  </div>

  <p>{item.pesan}</p>
</div>
    ))
  )}
</div>

            <div className="ruang-warga-form">
              <input
  type="text"
  placeholder="Tulis pesan..."
  maxLength={500}
  value={pesanBaru}
  onChange={(e) => setPesanBaru(e.target.value)}
  disabled={mengirim}
/>

             <button
  type="button"
  disabled={mengirim || !pesanBaru.trim()}
  onClick={async () => {
    if (!pesanBaru.trim()) return;

    setMengirim(true);

    const hasil = await kirimPesanWarga(pesanBaru);

    setMengirim(false);

    if (!hasil.success) {
      alert("Pesan gagal dikirim.");
      return;
    }

    setPesan((dataLama) => [...dataLama, hasil.data]);
    setPesanBaru("");
  }}
>
  {mengirim ? "Mengirim..." : "Kirim"}
</button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default RuangWarga;