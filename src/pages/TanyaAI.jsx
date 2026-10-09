
import { useEffect, useState } from "react";
import { useRTData } from "../context/RTDataContext";
import { supabase } from "../lib/supabase";
import { AI_KNOWLEDGE } from "../data";
import "./TanyaAI.css";
/* ==================================================
   FORMAT TANGGAL
================================================== */

function formatDate(date) {
  return new Date(date).toLocaleDateString("id-ID", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  });
}

/* ==================================================
   FORMAT KEGIATAN
================================================== */

function formatKegiatan(item) {
  return (
    `📅 ${formatDate(item.date)}\n` +
    `📌 ${item.title}\n` +
    `🕐 ${item.time}\n` +
    `📍 ${item.location}\n` +
    `Status: ${item.status}`
  );
}

/* ==================================================
   FORMAT PENGUMUMAN
================================================== */

function formatPengumuman(item) {
  return (
    `📅 ${formatDate(item.date)}\n` +
    `📢 ${item.title}\n` +
    `${item.content}`
  );
}

/* ==================================================
   FORMAT KEGIATAN SELESAI
================================================== */

function formatKegiatanSelesai(item) {
  return (
    `📅 ${formatDate(item.date)}\n` +
    `📸 ${item.title}\n` +
    `📍 ${item.location}\n` +
    `${item.description}`
  );
}

/* ==================================================
   CARI KEGIATAN
================================================== */

function cariKegiatanYangCocok(
  question,
  activities
) {
  const q = question.toLowerCase().trim();

  const stopWords = [
    "kapan",
    "dimana",
    "di mana",
    "jam",
    "pukul",
    "ada",
    "apa",
    "yang",
    "akan",
    "dilaksanakan",
    "dilakukan",
    "kegiatan",
    "acara",
    "agenda",
    "jadwal",
    "rt",
    "selanjutnya",
    "berikutnya",
    "mendatang",
    "terdekat",
  ];

  const kataPencarian = q
    .split(/\s+/)
    .filter((kata) => kata.length > 2)
    .filter(
      (kata) => !stopWords.includes(kata)
    );

  if (kataPencarian.length === 0) {
    return [];
  }

  return activities
    .map((item) => {
      const teksKegiatan = `
        ${item.title || ""}
        ${item.location || ""}
        ${item.description || ""}
      `.toLowerCase();

      let skor = 0;

      kataPencarian.forEach((kata) => {
        if (teksKegiatan.includes(kata)) {
          skor++;
        }
      });

      return {
        ...item,
        skor,
      };
    })
    .filter((item) => item.skor > 0)
    .sort((a, b) => b.skor - a.skor);
}

/* ==================================================
   CARI PENGUMUMAN
================================================== */

function cariPengumumanYangCocok(
  question,
  announcements
) {
  const q = question.toLowerCase().trim();

  const stopWords = [
    "ada",
    "apa",
    "pengumuman",
    "terbaru",
    "baru",
    "tentang",
    "mengenai",
    "rt",
    "warga",
  ];

  const kataPencarian = q
    .split(/\s+/)
    .filter((kata) => kata.length > 2)
    .filter(
      (kata) => !stopWords.includes(kata)
    );

  if (kataPencarian.length === 0) {
    return [];
  }

  return announcements
    .map((item) => {
      const teksPengumuman = `
        ${item.title || ""}
        ${item.content || ""}
      `.toLowerCase();

      let skor = 0;

      kataPencarian.forEach((kata) => {
        if (teksPengumuman.includes(kata)) {
          skor++;
        }
      });

      return {
        ...item,
        skor,
      };
    })
    .filter((item) => item.skor > 0)
    .sort((a, b) => b.skor - a.skor);
}

/* ==================================================
   CARI KEGIATAN SELESAI
================================================== */

function cariKegiatanSelesaiYangCocok(
  question,
  completedActivities
) {
  const q = question.toLowerCase().trim();

  const stopWords = [
    "kapan",
    "dimana",
    "di mana",
    "ada",
    "apa",
    "yang",
    "sudah",
    "telah",
    "selesai",
    "dilaksanakan",
    "dilakukan",
    "kegiatan",
    "acara",
    "dokumentasi",
    "rt",
    "warga",
  ];

  const kataPencarian = q
    .split(/\s+/)
    .filter((kata) => kata.length > 2)
    .filter(
      (kata) => !stopWords.includes(kata)
    );

  if (kataPencarian.length === 0) {
    return [];
  }

  return completedActivities
    .map((item) => {
      const teksKegiatan = `
        ${item.title || ""}
        ${item.location || ""}
        ${item.description || ""}
      `.toLowerCase();

      let skor = 0;

      kataPencarian.forEach((kata) => {
        if (teksKegiatan.includes(kata)) {
          skor++;
        }
      });

      return {
        ...item,
        skor,
      };
    })
    .filter((item) => item.skor > 0)
    .sort((a, b) => b.skor - a.skor);
}

/* ==================================================
   PENGUMUMAN TERBARU
================================================== */

function cariPengumumanTerbaru(
  announcements
) {
  return [...announcements].sort(
    (a, b) =>
      new Date(b.date) -
      new Date(a.date)
  );
}

/* ==================================================
   KEGIATAN SELANJUTNYA
================================================== */

function cariKegiatanSelanjutnya(
  activities
) {
  const sekarang = new Date();

  sekarang.setHours(0, 0, 0, 0);

  return activities
    .filter((item) => {
      if (!item.date) return false;

      const tanggal = new Date(item.date);

      tanggal.setHours(0, 0, 0, 0);

      return tanggal >= sekarang;
    })
    .sort(
      (a, b) =>
        new Date(a.date) -
        new Date(b.date)
    );
}

/* ==================================================
   JAWAB KEGIATAN
================================================== */

function jawabKegiatan(
  question,
  activities
) {
  const q = question.toLowerCase().trim();

  if (activities.length === 0) {
    return (
      "Saat ini belum ada Rencana Kegiatan " +
      "yang terdaftar di sistem RT."
    );
  }

  const tanyaSelanjutnya =
    q.includes("selanjutnya") ||
    q.includes("berikutnya") ||
    q.includes("mendatang") ||
    q.includes("terdekat");

  if (tanyaSelanjutnya) {
    const kegiatanMendatang =
      cariKegiatanSelanjutnya(
        activities
      );

    if (kegiatanMendatang.length === 0) {
      return (
        "Saat ini belum ada kegiatan RT " +
        "yang dijadwalkan mendatang."
      );
    }

    return (
      "Kegiatan RT yang paling dekat adalah:\n\n" +
      formatKegiatan(
        kegiatanMendatang[0]
      )
    );
  }

  const hasil =
    cariKegiatanYangCocok(
      question,
      activities
    );

  if (hasil.length > 0) {
    return (
      "Saya menemukan kegiatan yang sesuai:\n\n" +
      formatKegiatan(hasil[0])
    );
  }

  const kataKegiatan = [
    "kegiatan",
    "acara",
    "agenda",
    "jadwal",
    "kerja bakti",
  ];

  const bertanyaKegiatan =
    kataKegiatan.some((kata) =>
      q.includes(kata)
    );

  if (bertanyaKegiatan) {
    const daftar = [...activities].sort(
      (a, b) =>
        new Date(a.date) -
        new Date(b.date)
    );

    const teks = daftar
      .map((item) =>
        formatKegiatan(item)
      )
      .join("\n\n");

    return (
      "Berikut Rencana Kegiatan RT 03 / RW 07:\n\n" +
      teks
    );
  }

  return null;
}

/* ==================================================
   JAWAB PENGUMUMAN
================================================== */

function jawabPengumuman(
  question,
  announcements
) {
  const q = question.toLowerCase().trim();

  if (announcements.length === 0) {
    return (
      "Saat ini belum ada pengumuman RT " +
      "yang tersedia."
    );
  }

  const tanyaTerbaru =
    q.includes("terbaru") ||
    q.includes("terkini") ||
    q.includes("paling baru");

  if (tanyaTerbaru) {
    const daftar =
      cariPengumumanTerbaru(
        announcements
      );

    return (
      "Pengumuman RT terbaru:\n\n" +
      formatPengumuman(daftar[0])
    );
  }

  const hasil =
    cariPengumumanYangCocok(
      question,
      announcements
    );

  if (hasil.length > 0) {
    return (
      "Saya menemukan pengumuman yang sesuai:\n\n" +
      formatPengumuman(hasil[0])
    );
  }

  const kataPengumuman = [
    "pengumuman",
    "info warga",
    "informasi warga",
  ];

  const bertanyaPengumuman =
    kataPengumuman.some((kata) =>
      q.includes(kata)
    );

  if (bertanyaPengumuman) {
    const daftar =
      cariPengumumanTerbaru(
        announcements
      );

    const teks = daftar
      .map((item) =>
        formatPengumuman(item)
      )
      .join("\n\n");

    return (
      "Berikut pengumuman RT 03 / RW 07:\n\n" +
      teks
    );
  }

  return null;
}

/* ==================================================
   JAWAB KEGIATAN SELESAI
================================================== */

function jawabKegiatanSelesai(
  question,
  completedActivities
) {
  const q = question.toLowerCase().trim();

  if (completedActivities.length === 0) {
    return (
      "Saat ini belum ada dokumentasi " +
      "kegiatan yang telah selesai."
    );
  }

  const hasil =
    cariKegiatanSelesaiYangCocok(
      question,
      completedActivities
    );

  if (hasil.length > 0) {
    return (
      "Saya menemukan dokumentasi kegiatan " +
      "yang sesuai:\n\n" +
      formatKegiatanSelesai(hasil[0])
    );
  }

  const tanyaDaftar =
    q.includes("kegiatan yang sudah") ||
    q.includes("kegiatan yang telah") ||
    q.includes("kegiatan selesai") ||
    q.includes("kegiatan sebelumnya") ||
    q.includes("dokumentasi kegiatan");

  if (tanyaDaftar) {
    const daftar = [
      ...completedActivities,
    ].sort(
      (a, b) =>
        new Date(b.date) -
        new Date(a.date)
    );

    const teks = daftar
      .map((item) =>
        formatKegiatanSelesai(item)
      )
      .join("\n\n");

    return (
      "Berikut kegiatan RT 03 / RW 07 " +
      "yang telah selesai:\n\n" +
      teks
    );
  }

  return null;
}

/* ==================================================
   JAWAB INFORMASI RT
================================================== */

function jawabInformasiRT(question, rtInfo) {
  const q = question.toLowerCase().trim();

  /* ================================================
     KETUA RT
  ================================================= */

  if (
    q.includes("ketua rt") ||
    q.includes("siapa ketua")
  ) {
    if (!rtInfo.namaKetua) {
      return (
        "Data nama Ketua RT belum tersedia " +
        "di sistem."
      );
    }

    return (
      `Ketua RT 03 / RW 07 adalah ` +
      `${rtInfo.namaKetua}.`
    );
  }

  /* ================================================
     SEKRETARIS
  ================================================= */

  if (
    q.includes("sekretaris rt") ||
    q.includes("siapa sekretaris")
  ) {
    if (!rtInfo.namaSekretaris) {
      return (
        "Data nama Sekretaris RT belum tersedia " +
        "di sistem."
      );
    }

    return (
      `Sekretaris RT 03 / RW 07 adalah ` +
      `${rtInfo.namaSekretaris}.`
    );
  }

  /* ================================================
     BENDAHARA
  ================================================= */

  if (
    q.includes("bendahara rt") ||
    q.includes("siapa bendahara")
  ) {
    if (!rtInfo.namaBendahara) {
      return (
        "Data nama Bendahara RT belum tersedia " +
        "di sistem."
      );
    }

    return (
      `Bendahara RT 03 / RW 07 adalah ` +
      `${rtInfo.namaBendahara}.`
    );
  }

  /* ================================================
     RW
  ================================================= */

  if (
    q.includes("rw berapa") ||
    (
      q.includes("rt berapa") &&
      !q.includes("nomor") &&
      !q.includes("whatsapp") &&
      !q.includes("wa")
    )
  ) {
    return (
      "RT 03 berada di lingkungan RW 07."
    );
  }

  /* ================================================
     KELURAHAN
  ================================================= */

  if (
    q.includes("kelurahan") ||
    q.includes("rt 03 dimana") ||
    q.includes("rt 03 di mana")
  ) {
    return (
      `RT 03 / RW 07 berada di Kelurahan ` +
      `${rtInfo.kelurahan}, Kecamatan ` +
      `${rtInfo.kecamatan}.`
    );
  }

  /* ================================================
     ALAMAT
  ================================================= */

  if (
    q.includes("alamat rt") ||
    q.includes("alamat kantor rt") ||
    q.includes("kantor rt dimana") ||
    q.includes("kantor rt di mana")
  ) {
    if (!rtInfo.alamatRT) {
      return (
        "Data alamat RT belum tersedia " +
        "di sistem."
      );
    }

    return (
      `Alamat RT 03 / RW 07 adalah ` +
      `${rtInfo.alamatRT}.`
    );
  }

  /* ================================================
     KONTAK
  ================================================= */

  if (
    q.includes("nomor telepon") ||
    q.includes("nomor hp") ||
    q.includes("nomor whatsapp") ||
    q.includes("nomor wa") ||
    q.includes("whatsapp rt") ||
    q.includes("kontak rt") ||
    q.includes("kontak") ||
    q.includes("hubungi rt")
  ) {
    if (!rtInfo.nomorTelepon) {
      return (
        "Data kontak RT belum tersedia " +
        "di sistem."
      );
    }

    return (
      `Nomor kontak RT 03 / RW 07 adalah ` +
      `${rtInfo.nomorTelepon}.`
    );
  }

  /* ================================================
     JADWAL PELAYANAN
  ================================================= */

  if (
    q.includes("jadwal pelayanan") ||
    q.includes("pelayanan rt") ||
    q.includes("jam pelayanan")
  ) {
    if (
      !rtInfo.jadwalPelayanan &&
      !rtInfo.jamPelayanan
    ) {
      return (
        "Data jadwal pelayanan RT belum tersedia " +
        "di sistem."
      );
    }

    return (
      "Jadwal pelayanan RT 03 / RW 07:\n\n" +
      `${rtInfo.jadwalPelayanan || ""}\n` +
      `${rtInfo.jamPelayanan || ""}`
    );
  }

  return null;
}

/* ==================================================
   CARI AI KNOWLEDGE BASE
   Mesin pencarian dengan pengunci jenis layanan
================================================== */

function cariKnowledgeBase(question) {
  const q = question.toLowerCase().trim();

  if (!q) return [];

  /* ==================================================
     PENGUNCI JENIS LAYANAN
  ================================================== */

  let layananKunci = null;

  if (
    q.includes("kartu keluarga") ||
    /\bkk\b/.test(q)
  ) {
    layananKunci = "KK";
  } else if (
    q.includes("ktp") ||
    q.includes("kartu tanda penduduk")
  ) {
    layananKunci = "KTP";
  } else if (
    q.includes("skck") ||
    q.includes(
      "surat keterangan catatan kepolisian"
    )
  ) {
    layananKunci = "SKCK";
  } else if (
    q.includes("akta kelahiran") ||
    q.includes("kelahiran")
  ) {
    layananKunci = "KELAHIRAN";
  } else if (
    q.includes("akta kematian") ||
    q.includes("kematian")
  ) {
    layananKunci = "KEMATIAN";
  } else if (
    q.includes("pindah domisili") ||
    q.includes("surat pindah") ||
    q.includes("pindah alamat")
  ) {
    layananKunci = "PINDAH";
  } else if (
    q.includes("pernikahan") ||
    q.includes("menikah") ||
    q.includes("nikah")
  ) {
    layananKunci = "PERNIKAHAN";
  }

  /* ==================================================
     PECAH PERTANYAAN
  ================================================== */

  const kata = q
    .split(/\s+/)
    .filter((word) => word.length > 2);

  if (kata.length === 0) return [];

  return AI_KNOWLEDGE
    .map((item) => {
      const nama =
        (item.nama || "").toLowerCase();

      const kategori =
        (item.kategori || "").toLowerCase();

      const keywords = Array.isArray(item.keywords)
        ? item.keywords.join(" ").toLowerCase()
        : "";

      const questions = Array.isArray(item.questions)
        ? item.questions.join(" ").toLowerCase()
        : "";

      /* ================================================
         IDENTITAS LAYANAN
      ================================================= */

      let identitasLayanan = "";

      if (
        item.id?.startsWith("KB01") ||
        kategori.includes("ktp")
      ) {
        identitasLayanan = "KTP";
      } else if (
        item.id?.startsWith("KB02") ||
        kategori === "kk"
      ) {
        identitasLayanan = "KK";
      } else if (
        item.id?.startsWith("KB03") ||
        kategori.includes("kelahiran")
      ) {
        identitasLayanan = "KELAHIRAN";
      } else if (
        item.id?.startsWith("KB04") ||
        kategori.includes("kematian")
      ) {
        identitasLayanan = "KEMATIAN";
      } else if (
        item.id?.startsWith("KB05") ||
        kategori.includes("pindah")
      ) {
        identitasLayanan = "PINDAH";
      } else if (
        item.id?.startsWith("KB06") ||
        kategori.includes("pernikahan")
      ) {
        identitasLayanan = "PERNIKAHAN";
      } else if (
        item.id?.startsWith("KB07") ||
        kategori.includes("skck") ||
        kategori.includes("kepolisian")
      ) {
        identitasLayanan = "SKCK";
      }

      /* ================================================
         JIKA ADA LAYANAN KUNCI,
         LAYANAN LAIN TIDAK BOLEH IKUT
      ================================================= */

      if (
        layananKunci &&
        identitasLayanan !== layananKunci
      ) {
        return {
          ...item,
          skor: 0,
        };
      }

      /* ================================================
         HITUNG SKOR
      ================================================= */

      let skor = 0;

      /* Nama layanan */

      if (nama && q.includes(nama)) {
        skor += 20;
      }

      kata.forEach((word) => {
        if (nama.includes(word)) {
          skor += 8;
        }
      });

      /* Keywords */

      kata.forEach((word) => {
        if (keywords.includes(word)) {
          skor += 5;
        }
      });

      /* Pertanyaan */

      kata.forEach((word) => {
        if (questions.includes(word)) {
          skor += 4;
        }
      });

      /* Kategori */

      kata.forEach((word) => {
        if (kategori.includes(word)) {
          skor += 2;
        }
      });

      /* ================================================
         BONUS LAYANAN YANG TEPAT
      ================================================= */

      if (
        layananKunci &&
        identitasLayanan === layananKunci
      ) {
        skor += 30;
      }

      return {
        ...item,
        skor,
      };
    })
    .filter((item) => item.skor > 0)
    .sort((a, b) => b.skor - a.skor);
}

/* ==================================================
   JAWAB AI KNOWLEDGE BASE
================================================== */

function jawabKnowledgeBase(question) {
  const hasil = cariKnowledgeBase(question);

  if (hasil.length === 0) {
    return null;
  }

  const terbaik = hasil[0];

  if (!terbaik.answer) {
    return null;
  }

  let jawaban = terbaik.answer;

  // Dokumen yang harus disiapkan warga
  if (
    Array.isArray(terbaik.dokumen_warga) &&
    terbaik.dokumen_warga.length > 0
  ) {
    jawaban += "\n\n📄 Dokumen yang perlu disiapkan warga:\n";

    terbaik.dokumen_warga.forEach((dokumen) => {
      jawaban += `• ${dokumen}\n`;
    });
  }

  // Dokumen/surat dari RT
  if (
    Array.isArray(terbaik.dokumen_rt) &&
    terbaik.dokumen_rt.length > 0
  ) {
    jawaban += "\n🏠 Dokumen/surat dari RT:\n";

    terbaik.dokumen_rt.forEach((dokumen) => {
      jawaban += `• ${dokumen}\n`;
    });
  }

  // Instansi tujuan
  if (terbaik.instansi_tujuan) {
    jawaban += `\n🏢 Instansi tujuan: ${terbaik.instansi_tujuan}`;
  }

  // Penerbit akhir
  if (terbaik.penerbit_akhir) {
    jawaban += `\n📌 Penerbit akhir: ${terbaik.penerbit_akhir}`;
  }

  return jawaban;
}



function jawabKnowledgeTambahan(
  question,
  additionalKnowledge
) {
  const kataPertanyaan = question
    .toLowerCase()
    .replace(/[^\w\s]/g, " ")
    .split(/\s+/)
    .filter((kata) => kata.length > 2);

  if (kataPertanyaan.length === 0) return null;

  const hasil = additionalKnowledge
    .map((item) => {
      const teks = [
        item.judul,
        item.kategori,
        ...(Array.isArray(item.keywords) ? item.keywords : []),
        item.isi,
      ]
        .filter(Boolean)
        .join(" ")
        .toLowerCase();

      const judulKategori = [
        item.judul,
        item.kategori,
      ]
        .filter(Boolean)
        .join(" ")
        .toLowerCase();

      let skor = 0;

      kataPertanyaan.forEach((kata) => {
        if (judulKategori.includes(kata)) {
          skor += 3;
        } else if (teks.includes(kata)) {
          skor += 1;
        }
      });

      return { item, skor };
    })
    .filter((hasil) => hasil.skor > 0)
    .sort((a, b) => b.skor - a.skor);

  if (hasil.length === 0) return null;

  const terbaik = hasil[0];

  // Hindari menjawab dari kecocokan satu kata yang terlalu umum.
  if (
    terbaik.skor < 2 &&
    kataPertanyaan.length > 1
  ) {
    return null;
  }

  return terbaik.item.isi;
}

/* ==================================================
   MESIN JAWABAN AI RT
================================================== */


function cariJawaban(
  question,
  activities,
  announcements,
  completedActivities,
  rtInfo,
  additionalKnowledge
) {
  const q = question.toLowerCase().trim();

  
  /* -----------------------------------------------
     AI KNOWLEDGE TAMBAHAN DARI SUPABASE
  ------------------------------------------------ */

  const jawabanTambahan =
    jawabKnowledgeTambahan(
      question,
      additionalKnowledge
    );

  if (jawabanTambahan) {
    return jawabanTambahan;
  }

  /* -----------------------------------------------
     INFORMASI RT
  ------------------------------------------------ */

  const jawabanInfoRT =
    jawabInformasiRT(
      question,
      rtInfo
    );

  if (jawabanInfoRT) {
    return jawabanInfoRT;
  }

  /* -----------------------------------------------
     PENGUMUMAN
  ------------------------------------------------ */

  const kataPengumuman = [
    "pengumuman",
    "info warga",
    "informasi warga",
  ];

  const tentangPengumuman =
    kataPengumuman.some((kata) =>
      q.includes(kata)
    );

  if (tentangPengumuman) {
    const jawaban =
      jawabPengumuman(
        question,
        announcements
      );

    if (jawaban) return jawaban;
  }

  /* -----------------------------------------------
     KEGIATAN SELESAI
  ------------------------------------------------ */

  const kataSelesai = [
    "sudah dilakukan",
    "sudah dilaksanakan",
    "telah dilakukan",
    "telah dilaksanakan",
    "sudah selesai",
    "telah selesai",
    "kegiatan selesai",
    "dokumentasi",
    "kegiatan sebelumnya",
  ];

  const tentangSelesai =
    kataSelesai.some((kata) =>
      q.includes(kata)
    );

  if (tentangSelesai) {
    const jawaban =
      jawabKegiatanSelesai(
        question,
        completedActivities
      );

    if (jawaban) return jawaban;
  }

  /* -----------------------------------------------
     KEGIATAN MENDATANG
  ------------------------------------------------ */

  const kataKegiatan = [
    "kegiatan",
    "acara",
    "agenda",
    "jadwal",
    "kerja bakti",
    "rapat",
    "selanjutnya",
    "berikutnya",
    "mendatang",
    "terdekat",
  ];

  const tentangKegiatan =
    kataKegiatan.some((kata) =>
      q.includes(kata)
    );

  if (tentangKegiatan) {
    const jawaban =
      jawabKegiatan(
        question,
        activities
      );

    if (jawaban) return jawaban;
  }

  /* -----------------------------------------------
     AI KNOWLEDGE BASE LAMA
  ------------------------------------------------ */

  const jawabanKnowledge =
    jawabKnowledgeBase(question);

  if (jawabanKnowledge) {
    return jawabanKnowledge;
  }

  /* -----------------------------------------------
     INFORMASI BELUM TERSEDIA
  ------------------------------------------------ */

  return (
    "Maaf, informasi tersebut belum tersedia " +
    "di sistem AI RT 03 / RW 07.\n\n" +
    "Saya dapat membantu mencari informasi " +
    "tentang administrasi warga, KTP, KK, " +
    "kelahiran, kematian, pindah/domisili, " +
    "pernikahan, SKCK, bantuan sosial, sekolah, " +
    "kesehatan, usaha, lingkungan, surat RT, " +
    "pengumuman, serta kegiatan RT."
  );
}

/* ==================================================
   KOMPONEN
================================================== */


function TanyaAI() {
  const {
    activities,
    announcements,
    completedActivities,
    rtInfo,
  } = useRTData();

  const [additionalKnowledge, setAdditionalKnowledge] = useState([]);

  useEffect(() => {
    async function loadAdditionalKnowledge() {
      const { data, error } = await supabase
        .from("ai_knowledge_tambahan")
        .select("*")
        .eq("aktif", true);

      if (error) {
        console.error(
          "Gagal memuat AI Knowledge tambahan:",
          error
        );
        return;
      }

      setAdditionalKnowledge(data || []);
    }

    loadAdditionalKnowledge();
  }, []);

  // Lanjutkan kode TanyaAI yang sudah ada di bawah sini.

  const [question, setQuestion] =
    useState("");

  const [messages, setMessages] =
    useState([
      {
        id: 1,
        sender: "ai",
        text:
          "Halo, saya AI RT 03 / RW 07. " +
          "Silakan tanyakan informasi tentang " +
          "kegiatan, pengumuman, atau kegiatan " +
          "yang telah selesai.",
      },
    ]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const text = question.trim();

    if (!text) return;

    const userMessage = {
      id: Date.now(),
      sender: "warga",
      text,
    };

    
const answer = cariJawaban(
  text,
  activities,
  announcements,
  completedActivities,
  rtInfo,
  additionalKnowledge
);
    const aiMessage = {
      id: Date.now() + 1,
      sender: "ai",
      text: answer,
    };

    setMessages((prev) => [
      ...prev,
      userMessage,
      aiMessage,
    ]);

    setQuestion("");
  };

  return (
    <div className="page ai-page">

      <div className="page-header">
        <p>ASISTEN WARGA</p>

        <h2>🤖 Tanya AI RT</h2>

        <span>
          Tanyakan informasi seputar RT 03 / RW 07.
        </span>
      </div>

      <div className="ai-container">

        <div className="ai-welcome">

          <div className="ai-avatar">
            🤖
          </div>

          <div>

            <h3>Halo, saya AI RT</h3>

            <p>
              Saya dapat membantu mencari
              informasi kegiatan, pengumuman,
              dan dokumentasi kegiatan RT.
            </p>

          </div>

        </div>

        <div className="ai-messages">

          {messages.map((message) => (

            <div
              key={message.id}
              className={
                message.sender === "warga"
                  ? "ai-message warga"
                  : "ai-message"
              }
            >

              <div className="ai-message-avatar">
                {message.sender === "warga"
                  ? "👤"
                  : "🤖"}
              </div>

              <div className="ai-message-content">

                <strong>
                  {message.sender === "warga"
                    ? "Anda"
                    : "AI RT"}
                </strong>

                <p>
                  {message.text}
                </p>

              </div>

            </div>

          ))}

        </div>
        <div className="ai-quick-questions">

          <span className="ai-quick-title">
            Pertanyaan Cepat
          </span>

          <div className="ai-quick-list">

            <button
              type="button"
              onClick={() =>
                setQuestion("Bagaimana cara membuat KTP baru?")
              }
            >
              🪪 KTP
            </button>

            <button
              type="button"
              onClick={() =>
                setQuestion("Bagaimana cara membuat KK baru?")
              }
            >
              👨‍👩‍👧 KK
            </button>

            <button
              type="button"
              onClick={() =>
                setQuestion("Bagaimana cara mengurus akta kelahiran?")
              }
            >
              👶 Kelahiran
            </button>

            <button
              type="button"
              onClick={() =>
                setQuestion("Bagaimana cara mengurus surat kematian?")
              }
            >
              🕊️ Kematian
            </button>

            <button
              type="button"
              onClick={() =>
                setQuestion("Bagaimana cara mengurus surat pindah?")
              }
            >
              🚚 Pindah
            </button>

            <button
              type="button"
              onClick={() =>
                setQuestion("Bagaimana cara mengurus surat pernikahan?")
              }
            >
              💍 Pernikahan
            </button>

            <button
              type="button"
              onClick={() =>
                setQuestion("Bagaimana cara membuat SKCK?")
              }
            >
              👮 SKCK
            </button>

            <button
              type="button"
              onClick={() =>
                setQuestion("Apa saja informasi bantuan sosial yang tersedia?")
              }
            >
              🤝 Sosial
            </button>

            <button
              type="button"
              onClick={() =>
                setQuestion("Bagaimana cara mengurus usaha di lingkungan RT?")
              }
            >
              🏠 Usaha
            </button>

            <button
              type="button"
              onClick={() =>
                setQuestion("Bagaimana cara membuat surat pengantar RT?")
              }
            >
              📄 Surat RT
            </button>

          </div>

        </div>

        <form
          className="ai-form"
          onSubmit={handleSubmit}
        ></form>
        <form
          className="ai-form"
          onSubmit={handleSubmit}
        >

          <input
            type="text"
            value={question}
            onChange={(e) =>
              setQuestion(e.target.value)
            }
            placeholder="Contoh: Apa kegiatan yang sudah dilakukan?"
          />

          <button type="submit">
            Kirim
          </button>

        </form>

      </div>

    </div>
  );
}

export default TanyaAI;