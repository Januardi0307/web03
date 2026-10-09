import {
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

import { supabase } from "../lib/supabase";

const RTDataContext = createContext();

export function RTDataProvider({ children }) {

  /* ================================================
     DATA PENGUMUMAN
  ================================================= */

  const [announcements, setAnnouncements] = useState([]);

  useEffect(() => {
    async function loadAnnouncements() {
      const { data, error } = await supabase
        .from("pengumuman")
        .select("*")
        .order("tanggal", { ascending: false });

      if (error) {
        console.error(
          "Gagal mengambil data pengumuman:",
          error
        );
        return;
      }

      setAnnouncements(
        (data || []).map((item) => ({
          id: item.id,
          title: item.judul,
          date: item.tanggal,
          content: item.isi,
        }))
      );
    }

    loadAnnouncements();
  }, []);


  /* ================================================
     DATA KEGIATAN YANG SEDANG BERLANGSUNG
  ================================================= */

  const [activities, setActivities] = useState([]);

  useEffect(() => {
  async function loadActivities() {
    const { data, error } = await supabase
      .from("rencana_kegiatan")
      .select("*")
      .order("tanggal", { ascending: true })
      .order("waktu", { ascending: true });

    if (error) {
      console.error(
        "Gagal memuat rencana kegiatan:",
        error
      );
      return;
    }

    const mappedActivities = (data || []).map((item) => ({
      id: item.id,
      title: item.judul,
      date: item.tanggal,
      time: item.waktu?.slice(0, 5) || "",
      location: item.lokasi,
      description: item.deskripsi,
      status: item.status,
    }));

    setActivities(mappedActivities);
  }

  loadActivities();
}, []);


  /* ================================================
     DATA KEGIATAN SELESAI
  ================================================= */

  const [completedActivities, setCompletedActivities] =
    useState([]);

  useEffect(() => {
    async function loadCompletedActivities() {

      console.log(
        "=== LOAD KEGIATAN SELESAI DARI SUPABASE ==="
      );

      const { data, error } = await supabase
        .from("kegiatan_selesai")
        .select(`
          *,
          kegiatan_selesai_foto (
            id,
            foto_url,
            urutan
          )
        `)
        .order("tanggal", { ascending: false });

      if (error) {
        console.error(
          "Gagal mengambil data kegiatan selesai:",
          error
        );
        return;
      }

      console.log(
        "DATA KEGIATAN SELESAI DARI SUPABASE:",
        JSON.stringify(data, null, 2)
      );

      const mappedData = (data || []).map((item) => {

        const fotoUrls = (item.kegiatan_selesai_foto || [])
          .sort((a, b) => a.urutan - b.urutan)
          .map((foto) => foto.foto_url);

        return {
          id: item.id,
          title: item.judul,
          date: item.tanggal,
          location: item.lokasi,
          description: item.deskripsi,

          // Foto utama / foto lama
          fotoUrl: item.foto_url,

          // Semua foto dokumentasi
          fotoUrls: fotoUrls,
        };
      });

      console.log(
        "HASIL MAPPING KEGIATAN SELESAI:",
        JSON.stringify(mappedData, null, 2)
      );

      setCompletedActivities(mappedData);
    }

    loadCompletedActivities();
  }, []);


  /* ================================================
     DATA PENGETAHUAN RT
  ================================================= */

  const [rtInfo, setRtInfo] = useState({
    namaRT: "RT 03",
    namaRW: "RW 07",

    kelurahan: "Karet",
    kecamatan: "Setiabudi",
    kota: "Jakarta Selatan",
    provinsi: "DKI Jakarta",

    alamatRT: "",

    namaKetua: "",
    namaSekretaris: "",
    namaBendahara: "",

    nomorTelepon: "",
    email: "",

    jadwalPelayanan: "",
    jamPelayanan: "",

    informasiTambahan: "",
  });


  /* ================================================
     LOAD INFORMASI RT
  ================================================= */

  useEffect(() => {
    async function loadRtInfo() {

      const { data, error } = await supabase
        .from("rt_info")
        .select("*")
        .limit(1)
        .maybeSingle();

      if (error) {
        console.error(
          "Gagal mengambil data RT:",
          error
        );
        return;
      }

      if (!data) {
        console.warn(
          "Data rt_info belum tersedia."
        );
        return;
      }

      setRtInfo({
        namaRT: data.nama_rt || "",
        namaRW: data.nama_rw || "",

        kelurahan: data.kelurahan || "",
        kecamatan: data.kecamatan || "",
        kota: data.kota || "",
        provinsi: data.provinsi || "",

        alamatRT: data.alamat_rt || "",

        namaKetua: data.nama_ketua || "",

        namaSekretaris:
          data.nama_sekretaris || "",

        namaBendahara:
          data.nama_bendahara || "",

        nomorTelepon:
          data.nomor_telepon || "",

        email:
          data.email || "",

        jadwalPelayanan:
          data.jadwal_pelayanan || "",

        jamPelayanan:
          data.jam_pelayanan || "",

        informasiTambahan:
          data.informasi_tambahan || "",
      });
    }

    loadRtInfo();
  }, []);


  /* ================================================
     CONTEXT
  ================================================= */

  return (
    <RTDataContext.Provider
      value={{
        announcements,
        setAnnouncements,

        activities,
        setActivities,

        completedActivities,
        setCompletedActivities,

        rtInfo,
        setRtInfo,
      }}
    >
      {children}
    </RTDataContext.Provider>
  );
}


export function useRTData() {
  return useContext(RTDataContext);
}