// =========================================================
// KB-01 — KTP & IDENTITAS
// RT 03 / RW 07 Karet - Setiabudi
// =========================================================

export const KB01_KTP = [
  {
    id: "KB01-KTP-001",
    kategori: "KTP",
    nama: "Membuat KTP Elektronik",
    keywords: [
      "buat KTP",
      "KTP baru",
      "membuat KTP",
      "KTP pertama",
      "KTP elektronik"
    ],
    questions: [
      "Bagaimana cara membuat KTP?",
      "Saya belum punya KTP",
      "Bagaimana membuat KTP pertama kali?"
    ],
    answer:
      "KTP-el merupakan dokumen identitas resmi penduduk. Untuk membuat KTP-el pertama kali, warga perlu mengikuti proses administrasi kependudukan sesuai ketentuan Dukcapil. RT dapat membantu administrasi lingkungan apabila diperlukan, tetapi KTP-el bukan diterbitkan oleh RT.",
    dokumen_warga: [
      "Kartu Keluarga",
      "Dokumen pendukung apabila diperlukan"
    ],
    dokumen_rt: [
      "Surat pengantar/keterangan RT apabila diperlukan"
    ],
    instansi_tujuan: "Kelurahan/Dukcapil",
    penerbit_akhir: "Dukcapil",
    crossLink: ["KB-02", "KB-05"],
    status: "aktif"
  },

  {
    id: "KB01-KTP-002",
    kategori: "KTP",
    nama: "KTP Hilang",
    keywords: [
      "KTP hilang",
      "KTP saya hilang",
      "KTP hilang bagaimana",
      "ganti KTP hilang",
      "KTP tidak ditemukan"
    ],
    questions: [
      "KTP saya hilang, bagaimana mengurusnya?",
      "Apa yang harus dilakukan kalau KTP hilang?",
      "Bagaimana mendapatkan KTP pengganti karena hilang?"
    ],
    answer:
      "Jika KTP-el hilang, warga perlu mengurus dokumen pengganti melalui layanan administrasi kependudukan sesuai ketentuan yang berlaku. Karena kehilangan juga dapat berkaitan dengan keamanan identitas, warga sebaiknya segera mengurus penggantian dan mengikuti prosedur yang ditetapkan instansi berwenang. RT dapat membantu surat keterangan apabila memang diperlukan.",
    dokumen_warga: [
      "Kartu Keluarga",
      "Dokumen atau surat keterangan kehilangan apabila dipersyaratkan"
    ],
    dokumen_rt: [
      "Surat keterangan/pengantar RT apabila diperlukan"
    ],
    instansi_tujuan: "Kelurahan/Dukcapil",
    penerbit_akhir: "Dukcapil",
    crossLink: ["KB-02"],
    status: "aktif"
  },

  {
    id: "KB01-KTP-003",
    kategori: "KTP",
    nama: "KTP Rusak",
    keywords: [
      "KTP rusak",
      "KTP patah",
      "KTP tidak terbaca",
      "KTP rusak ganti",
      "KTP chip rusak"
    ],
    questions: [
      "KTP saya rusak, bagaimana menggantinya?",
      "KTP saya tidak terbaca",
      "Bagaimana mengganti KTP yang rusak?"
    ],
    answer:
      "Jika KTP-el rusak, warga dapat mengajukan penggantian melalui layanan administrasi kependudukan. Bawa KTP yang rusak apabila masih tersedia serta dokumen pendukung yang diminta oleh instansi pelayanan. RT bukan penerbit KTP-el.",
    dokumen_warga: [
      "KTP-el yang rusak apabila masih ada",
      "Kartu Keluarga",
      "Dokumen pendukung apabila diperlukan"
    ],
    dokumen_rt: [
      "Surat pengantar/keterangan RT apabila diperlukan"
    ],
    instansi_tujuan: "Kelurahan/Dukcapil",
    penerbit_akhir: "Dukcapil",
    crossLink: ["KB-02"],
    status: "aktif"
  },

  {
    id: "KB01-KTP-004",
    kategori: "KTP",
    nama: "Perubahan Data KTP",
    keywords: [
      "ubah data KTP",
      "perubahan KTP",
      "data KTP salah",
      "perbaikan KTP",
      "koreksi data KTP"
    ],
    questions: [
      "Bagaimana memperbaiki data KTP?",
      "Nama di KTP saya salah",
      "Data KTP saya tidak sesuai"
    ],
    answer:
      "Jika terdapat kesalahan atau perubahan data pada KTP-el, warga perlu melakukan pembaruan data administrasi kependudukan. Dokumen pendukung bergantung pada jenis data yang diubah, misalnya nama, tempat tanggal lahir, alamat, status perkawinan, atau data lainnya. Setelah data kependudukan diperbaiki, KTP-el dapat disesuaikan.",
    dokumen_warga: [
      "KTP-el",
      "Kartu Keluarga",
      "Dokumen pembuktian sesuai jenis perubahan"
    ],
    dokumen_rt: [
      "Surat keterangan/pengantar RT apabila diperlukan"
    ],
    instansi_tujuan: "Kelurahan/Dukcapil",
    penerbit_akhir: "Dukcapil",
    crossLink: ["KB-02", "KB-05", "KB-06"],
    status: "aktif"
  },

  {
    id: "KB01-KTP-005",
    kategori: "KTP",
    nama: "NIK Bermasalah",
    keywords: [
      "NIK bermasalah",
      "NIK tidak ditemukan",
      "NIK tidak aktif",
      "NIK salah",
      "NIK tidak sesuai"
    ],
    questions: [
      "NIK saya tidak ditemukan, bagaimana?",
      "NIK saya bermasalah",
      "NIK di KTP dan KK berbeda"
    ],
    answer:
      "Jika NIK tidak ditemukan, tidak sesuai, atau mengalami masalah saat digunakan untuk layanan tertentu, warga perlu melakukan pengecekan data administrasi kependudukan. Bandingkan data pada KTP-el dan KK terlebih dahulu. Jika terdapat ketidaksesuaian, penyelesaiannya dilakukan melalui instansi administrasi kependudukan yang berwenang.",
    dokumen_warga: [
      "KTP-el",
      "Kartu Keluarga",
      "Dokumen pendukung apabila diperlukan"
    ],
    dokumen_rt: [
      "Keterangan RT apabila diperlukan"
    ],
    instansi_tujuan: "Kelurahan/Dukcapil",
    penerbit_akhir: "Dukcapil",
    crossLink: ["KB-02"],
    status: "aktif"
  },

  {
    id: "KB01-KTP-006",
    kategori: "KTP",
    nama: "Perekaman KTP-el",
    keywords: [
      "rekam KTP",
      "perekaman KTP",
      "rekam biometrik",
      "belum rekam KTP",
      "perekaman KTP elektronik"
    ],
    questions: [
      "Saya belum melakukan perekaman KTP",
      "Di mana melakukan perekaman KTP?",
      "Bagaimana proses rekam KTP?"
    ],
    answer:
      "Perekaman KTP-el mencakup proses identifikasi dan perekaman data biometrik penduduk melalui layanan administrasi kependudukan. Warga yang belum melakukan perekaman perlu mengikuti lokasi dan prosedur pelayanan Dukcapil/Kelurahan yang berlaku.",
    dokumen_warga: [
      "Kartu Keluarga",
      "Dokumen identitas atau dokumen pendukung apabila diperlukan"
    ],
    dokumen_rt: [
      "Surat pengantar apabila diperlukan"
    ],
    instansi_tujuan: "Kelurahan/Dukcapil",
    penerbit_akhir: "Dukcapil",
    crossLink: ["KB-02"],
    status: "aktif"
  },

  {
    id: "KB01-KTP-007",
    kategori: "KTP",
    nama: "KTP Setelah Pindah Alamat",
    keywords: [
      "KTP setelah pindah",
      "pindah alamat KTP",
      "KTP alamat baru",
      "ganti alamat KTP",
      "pindah rumah"
    ],
    questions: [
      "Saya pindah rumah, apakah KTP harus diubah?",
      "Bagaimana KTP setelah pindah alamat?",
      "Saya pindah ke RT 03"
    ],
    answer:
      "Jika seseorang pindah domisili secara administratif, data alamat kependudukan perlu disesuaikan dengan domisili baru. Proses perpindahan penduduk dan perubahan alamat dilakukan melalui administrasi Dukcapil sesuai ketentuan. Setelah data kependudukan berubah, dokumen kependudukan dapat disesuaikan.",
    dokumen_warga: [
      "KTP-el",
      "Kartu Keluarga",
      "Dokumen perpindahan sesuai ketentuan"
    ],
    dokumen_rt: [
      "Surat pengantar/keterangan RT apabila diperlukan"
    ],
    instansi_tujuan: "Kelurahan/Dukcapil",
    penerbit_akhir: "Dukcapil",
    crossLink: ["KB-02", "KB-05"],
    status: "aktif"
  },

  {
    id: "KB01-KTP-008",
    kategori: "KTP",
    nama: "KTP Pendatang",
    keywords: [
      "KTP pendatang",
      "pendatang RT",
      "warga baru",
      "orang baru tinggal",
      "penduduk datang"
    ],
    questions: [
      "Saya baru tinggal di RT 03",
      "Saya pendatang, apa yang harus dilakukan?",
      "Apakah pendatang harus mengurus sesuatu ke RT?"
    ],
    answer:
      "Warga yang baru tinggal di lingkungan RT 03 perlu melaporkan keberadaannya kepada pengurus lingkungan sesuai ketentuan setempat. Status tempat tinggal dan status administrasi kependudukan perlu dibedakan. Seseorang dapat tinggal di RT 03 sebagai pemilik rumah, penyewa, penghuni kost, atau menumpang, sementara alamat pada KTP dapat memiliki kondisi yang berbeda sampai proses administrasi kependudukan selesai.",
    dokumen_warga: [
      "KTP-el",
      "Kartu Keluarga",
      "Dokumen perpindahan atau dokumen tempat tinggal apabila diperlukan"
    ],
    dokumen_rt: [
      "Data pendatang",
      "Keterangan tempat tinggal"
    ],
    instansi_tujuan: "RT/Kelurahan/Dukcapil sesuai kebutuhan",
    penerbit_akhir: "Sesuai jenis layanan",
    crossLink: ["KB-02", "KB-05"],
    status: "aktif"
  },

  {
    id: "KB01-KTP-009",
    kategori: "KTP",
    nama: "Identitas WNA",
    keywords: [
      "WNA",
      "KTP WNA",
      "orang asing",
      "identitas warga asing",
      "penduduk asing"
    ],
    questions: [
      "Bagaimana identitas warga negara asing?",
      "Apakah WNA memiliki KTP?",
      "WNA tinggal di RT 03 bagaimana pelaporannya?"
    ],
    answer:
      "Administrasi identitas warga negara asing berbeda dengan administrasi KTP-el WNI. WNA yang tinggal di lingkungan RT 03 perlu dilaporkan sesuai ketentuan administrasi kependudukan dan keimigrasian yang berlaku. Jangan menyamakan dokumen identitas WNA dengan KTP-el WNI.",
    dokumen_warga: [
      "Dokumen identitas dan izin tinggal sesuai status WNA",
      "Dokumen pendukung lainnya sesuai kebutuhan"
    ],
    dokumen_rt: [
      "Data keberadaan WNA di lingkungan RT"
    ],
    instansi_tujuan: "Instansi administrasi kependudukan/Keimigrasian sesuai kebutuhan",
    penerbit_akhir: "Instansi berwenang sesuai jenis dokumen",
    crossLink: ["KB-05"],
    status: "aktif"
  },

  {
    id: "KB01-KTP-010",
    kategori: "KTP",
    nama: "Warga Tidak Dapat Datang Langsung",
    keywords: [
      "tidak bisa datang",
      "lansia KTP",
      "sakit KTP",
      "disabilitas KTP",
      "perekaman di rumah"
    ],
    questions: [
      "Bagaimana jika warga tidak bisa datang ke kantor?",
      "Orang tua saya tidak bisa datang untuk mengurus KTP",
      "Apakah ada pelayanan untuk warga yang tidak bisa datang?"
    ],
    answer:
      "Jika warga memiliki kondisi yang menyebabkan tidak dapat datang langsung, seperti keterbatasan fisik atau kondisi tertentu, tanyakan kepada Kelurahan/Dukcapil apakah tersedia mekanisme pelayanan khusus atau layanan jemput bola. RT dapat membantu menyampaikan kondisi warga dan membantu koordinasi lingkungan, tetapi bentuk pelayanan ditentukan oleh instansi yang berwenang.",
    dokumen_warga: [
      "KTP/KK atau dokumen kependudukan yang tersedia",
      "Dokumen pendukung kondisi warga apabila diperlukan"
    ],
    dokumen_rt: [
      "Keterangan kondisi warga",
      "Bantuan koordinasi lingkungan"
    ],
    instansi_tujuan: "Kelurahan/Dukcapil",
    penerbit_akhir: "Dukcapil",
    crossLink: ["KB-02"],
    status: "aktif"
  },

  {
    id: "KB01-KTP-011",
    kategori: "KTP",
    nama: "KTP Lama Ditemukan Kembali",
    keywords: [
      "KTP lama ditemukan",
      "KTP hilang ditemukan",
      "KTP lama ketemu",
      "KTP pengganti",
      "dua KTP"
    ],
    questions: [
      "KTP saya yang hilang sudah ditemukan",
      "KTP lama ketemu setelah membuat pengganti",
      "Apa yang dilakukan dengan KTP lama?"
    ],
    answer:
      "Jika KTP yang sebelumnya dilaporkan hilang kemudian ditemukan kembali setelah warga memperoleh dokumen pengganti, jangan menganggap kedua dokumen tersebut sama-sama dapat digunakan. Gunakan dokumen kependudukan yang masih berlaku sesuai data administrasi terbaru dan ikuti arahan instansi Dukcapil jika diperlukan.",
    dokumen_warga: [
      "KTP yang ditemukan",
      "KTP pengganti apabila sudah diterbitkan",
      "Kartu Keluarga apabila diperlukan"
    ],
    instansi_tujuan: "Kelurahan/Dukcapil",
    penerbit_akhir: "Dukcapil",
    crossLink: ["KB-02"],
    status: "aktif"
  },

  {
    id: "KB01-KTP-RULE",
    kategori: "KTP",
    nama: "Aturan Umum KTP",
    keywords: [
      "aturan KTP",
      "siapa menerbitkan KTP",
      "KTP dan RT",
      "KTP Dukcapil",
      "fungsi RT dalam KTP"
    ],
    questions: [
      "Apakah RT menerbitkan KTP?",
      "Siapa yang membuat KTP?",
      "Apakah RT bisa mengubah data KTP?"
    ],
    answer:
      "KTP-el merupakan dokumen administrasi kependudukan resmi dan bukan dokumen yang diterbitkan oleh RT. RT berperan dalam administrasi lingkungan dan dapat membantu memberikan surat atau keterangan apabila diperlukan dalam suatu proses pelayanan. Perubahan dan penerbitan dokumen kependudukan dilakukan oleh instansi yang berwenang.",
    instansi_tujuan: "Kelurahan/Dukcapil",
    penerbit_akhir: "Dukcapil",
    crossLink: ["KB-02", "KB-05"],
    status: "aktif"
  }
];