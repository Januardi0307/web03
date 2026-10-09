import { useEffect, useState } from "react";
import { supabase } from "../lib/supabase";
import "./Polling.css";

function Polling() {
  console.log("POLLING JSX DIJALANKAN");

  const [polling, setPolling] = useState(null);
  const [pilihan, setPilihan] = useState([]);
  const [loading, setLoading] = useState(true);
  const [pilihanTerpilih, setPilihanTerpilih] = useState(null);
  const [sudahMemilih, setSudahMemilih] = useState(false);
  const [hasilPolling, setHasilPolling] = useState([]);

  useEffect(() => {
    const loadPolling = async () => {
      console.log("LOAD POLLING DIJALANKAN");

      const { data, error } = await supabase
        .from("polling")
        .select("*")
        .eq("aktif", true)
        .order("tanggal_mulai", { ascending: false });

      if (error) {
        console.error("Gagal memuat polling:", error);
        setLoading(false);
        return;
      }

      const pollingAktif = data?.[0] || null;

      setPolling(pollingAktif);

      if (!pollingAktif) {
        setLoading(false);
        return;
      }

      const { data: sessionInfo } = await supabase.auth.getSession();

      console.log("=== ROLE BROWSER ===");
      console.log("Session:", sessionInfo.session);
      console.log("User ID:", sessionInfo.session?.user?.id);
      console.log("User Email:", sessionInfo.session?.user?.email);

      const {
        data: pilihanData,
        error: pilihanError,
      } = await supabase
        .from("polling_pilihan")
        .select("*")
        .eq("polling_id", pollingAktif.id)
        .order("urutan", { ascending: true });

      if (pilihanError) {
        console.error("=== ERROR PILIHAN POLLING ===");
        console.error("Error:", pilihanError);
        console.error("Message:", pilihanError.message);
        console.error("Details:", pilihanError.details);
        console.error("Hint:", pilihanError.hint);
        console.error("Code:", pilihanError.code);

        setLoading(false);
        return;
      }

      console.log("POLLING TERPILIH:", pollingAktif);
      console.log("PILIHAN POLLING:", pilihanData);

      setPilihan(pilihanData || []);

      // Cek apakah warga yang sedang login sudah memberikan suara
      const userId = sessionInfo.session?.user?.id;

      if (userId) {
        const {
          data: suaraData,
          error: suaraError,
        } = await supabase
          .from("polling_suara")
          .select("id")
          .eq("polling_id", pollingAktif.id)
          .eq("warga_id", userId)
          .maybeSingle();

        if (suaraError) {
          console.error("Gagal mengecek suara warga:", suaraError);
        } else if (suaraData) {
          console.log("WARGA SUDAH MEMILIH:", suaraData);
          setSudahMemilih(true);
        } else {
          console.log("WARGA BELUM MEMILIH");
          setSudahMemilih(false);
        }
      }

      const { data: suaraPolling, error: hasilError } = await supabase
  .from("polling_suara")
  .select("pilihan_id")
  .eq("polling_id", pollingAktif.id);

if (hasilError) {
  console.error("Gagal mengambil hasil polling:", hasilError);
} else {
  const jumlahSuara = {};

  (suaraPolling || []).forEach((suara) => {
    jumlahSuara[suara.pilihan_id] =
      (jumlahSuara[suara.pilihan_id] || 0) + 1;
  });

  const hasil = (pilihanData || []).map((item) => ({
    ...item,
    jumlahSuara: jumlahSuara[item.id] || 0,
  }));

  console.log("HASIL POLLING:", hasil);

  setHasilPolling(hasil);
}

      setLoading(false);
    };

    loadPolling();
  }, []);

  const kirimPilihan = async () => {
    if (!pilihanTerpilih) {
      alert("Silakan pilih salah satu jawaban terlebih dahulu.");
      return;
    }

    const { data: sessionInfo } = await supabase.auth.getSession();
    const userId = sessionInfo.session?.user?.id;

    if (!userId) {
      alert("Sesi warga tidak ditemukan. Silakan masuk kembali.");
      return;
    }

    const { error } = await supabase
      .from("polling_suara")
      .insert({
        polling_id: polling.id,
        pilihan_id: pilihanTerpilih,
        warga_id: userId,
      });

    if (error) {
      console.error("Gagal menyimpan suara:", error);
      console.error("Message:", error.message);
      console.error("Details:", error.details);
      console.error("Hint:", error.hint);
      console.error("Code:", error.code);

      if (error.code === "23505") {
        alert("Anda sudah memberikan suara pada polling ini.");
        return;
      }

      alert(`Suara gagal disimpan.\n\n${error.message}`);
      return;
    }

    setSudahMemilih(true);

const { data: suaraTerbaru, error: hasilError } = await supabase
  .from("polling_suara")
  .select("pilihan_id")
  .eq("polling_id", polling.id);

if (hasilError) {
  console.error("Gagal memperbarui hasil polling:", hasilError);
} else {
  const jumlahSuara = {};

  (suaraTerbaru || []).forEach((suara) => {
    jumlahSuara[suara.pilihan_id] =
      (jumlahSuara[suara.pilihan_id] || 0) + 1;
  });

  const hasilTerbaru = pilihan.map((item) => ({
    ...item,
    jumlahSuara: jumlahSuara[item.id] || 0,
  }));

  setHasilPolling(hasilTerbaru);
}

    alert("Pilihan Anda berhasil disimpan.");
  };

  return (
    <div className="page">

      <div className="page-header">

        <p>SUARA WARGA</p>

        <h2>🗳️ Polling Warga</h2>

        <span>
          Sampaikan pendapat Anda melalui polling RT.
        </span>

      </div>

      {loading ? (

        <div className="empty-state">

          <div className="empty-icon">
            ⏳
          </div>

          <h3>
            Memuat polling...
          </h3>

        </div>

      ) : !polling ? (

        <div className="empty-state">

          <div className="empty-icon">
            🗳️
          </div>

          <h3>
            Belum ada polling aktif
          </h3>

          <p>
            Polling yang dibuat Admin RT akan
            tampil di halaman ini.
          </p>

        </div>

      ) : (

        <div className="polling-card">

          <h3>
            {polling.judul}
          </h3>

          {sudahMemilih ? (

  <div className="polling-hasil">

    <p className="polling-sudah-memilih">
      ✅ Anda sudah memberikan suara.
    </p>

   <h4>
  Hasil Polling
</h4>

<p className="polling-total-suara">
  Total suara: <strong>{hasilPolling.reduce(
    (total, item) => total + item.jumlahSuara,
    0
  )}</strong>
</p>

    {(() => {
      const totalSuara = hasilPolling.reduce(
        (total, item) => total + item.jumlahSuara,
        0
      );

      return hasilPolling.map((item) => {

        const persentase =
          totalSuara > 0
            ? ((item.jumlahSuara / totalSuara) * 100).toFixed(1)
            : 0;

        return (
          <div
            key={item.id}
            className="polling-hasil-item"
          >

            <div className="polling-hasil-label">
              <span>
                {item.jawaban}
              </span>

              <strong>
                {item.jumlahSuara} suara
              </strong>
            </div>

            <div className="polling-progress">
              <div
                className="polling-progress-bar"
                style={{
                  width: `${persentase}%`,
                }}
              />
            </div>

            <div className="polling-persentase">
              {persentase}%
            </div>

          </div>
        );
      });
    })()}

    <p className="polling-tidak-bisa-memilih">
      Anda tidak dapat memberikan suara lagi pada polling ini.
    </p>

  </div>

) : (

  <>
    <div className="polling-options">

      {pilihan.map((item) => (

        <label
          key={item.id}
          className="polling-option"
        >

          <input
            type="radio"
            name="polling"
            value={item.id}
            checked={pilihanTerpilih === item.id}
            onChange={() => setPilihanTerpilih(item.id)}
          />

          <span>
            {item.jawaban}
          </span>

        </label>

      ))}

    </div>

    <button
      type="button"
      className="polling-submit"
      onClick={kirimPilihan}
    >
      Kirim Pilihan
    </button>
  </>

)}

        </div>

      )}

    </div>
  );
}

export default Polling;