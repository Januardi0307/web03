// =========================================================
// KB-05 — PINDAH, PENDATANG, KOST & DOMISILI
// RT 03 / RW 07 Karet - Setiabudi
// =========================================================

export const KB05_Pindah = [
  {
    id: "KB05-PIN-001",
    kategori: "Pindah",
    nama: "Pindah Keluar dari RT 03",
    keywords: [
      "pindah rumah",
      "pindah dari RT",
      "pindah keluar RT",
      "mau pindah",
      "lapor pindah"
    ],
    questions: [
      "Saya mau pindah dari RT 03, apa yang harus dilakukan?",
      "Bagaimana cara melaporkan pindah?",
      "Saya akan pindah rumah keluar RT 03"
    ],
    answer:
      "Jika warga akan pindah dari RT 03, warga sebaiknya melaporkan rencana kepindahan kepada pengurus RT terlebih dahulu. Setelah itu proses administrasi perpindahan penduduk dilakukan sesuai wilayah tujuan dan ketentuan administrasi kependudukan. Data internal RT juga perlu diperbarui agar warga tidak lagi tercatat sebagai warga yang tinggal aktif di RT 03.",
    dokumen_warga: [
      "KTP-el",
      "KK",
      "Dokumen perpindahan apabila diperlukan"
    ],
    dokumen_rt: [
      "Laporan/keterangan pindah",
      "Pembaruan data warga"
    ],
    instansi_tujuan: "RT/Kelurahan/Dukcapil sesuai proses perpindahan",
    penerbit_akhir: "Dukcapil untuk dokumen kependudukan",
    crossLink: ["KB-01", "KB-02"],
    status: "aktif"
  },

  {
    id: "KB05-PIN-002",
    kategori: "Pindah",
    nama: "Pindah Antar-RT",
    keywords: [
      "pindah RT",
      "pindah antar RT",
      "pindah dalam satu kelurahan",
      "pindah ke RT lain",
      "pindah lingkungan"
    ],
    questions: [
      "Saya pindah dari RT 03 ke RT lain",
      "Bagaimana kalau pindah antar RT?",
      "Saya masih di kelurahan yang sama tetapi pindah RT"
    ],
    answer:
      "Jika warga pindah tempat tinggal dari RT 03 ke RT lain, perpindahan tempat tinggal perlu dilaporkan kepada pengurus lingkungan dan disesuaikan dengan administrasi kependudukan apabila domisili administratif juga berubah. Data internal RT 03 perlu diperbarui agar alamat tempat tinggal warga tercatat dengan benar.",
    dokumen_warga: [
      "KTP-el",
      "KK",
      "Dokumen perpindahan apabila diperlukan"
    ],
    dokumen_rt: [
      "Keterangan/laporan pindah",
      "Pembaruan data warga"
    ],
    instansi_tujuan: "RT/Kelurahan/Dukcapil sesuai kondisi",
    penerbit_akhir: "Dukcapil untuk dokumen kependudukan",
    crossLink: ["KB-01", "KB-02"],
    status: "aktif"
  },

  {
    id: "KB05-PIN-003",
    kategori: "Pindah",
    nama: "Pindah Antar-RW",
    keywords: [
      "pindah RW",
      "pindah antar RW",
      "pindah lingkungan RW",
      "pindah ke RW lain",
      "pindah wilayah RW"
    ],
    questions: [
      "Saya pindah ke RW lain",
      "Bagaimana proses pindah antar RW?",
      "Saya masih satu kelurahan tetapi pindah RW"
    ],
    answer:
      "Pindah dari satu RW ke RW lain perlu dilaporkan agar administrasi lingkungan dan data kependudukan dapat disesuaikan. Jika alamat administratif berubah, ikuti proses perpindahan penduduk yang berlaku. RT dapat membantu administrasi pada tingkat lingkungan sesuai kebutuhan.",
    dokumen_warga: [
      "KTP-el",
      "KK",
      "Dokumen perpindahan apabila diperlukan"
    ],
    dokumen_rt: [
      "Keterangan/laporan pindah"
    ],
    dokumen_rw: [
      "Administrasi perpindahan sesuai kebutuhan wilayah"
    ],
    instansi_tujuan: "RT/RW/Kelurahan/Dukcapil sesuai kebutuhan",
    penerbit_akhir: "Dukcapil untuk dokumen kependudukan",
    crossLink: ["KB-01", "KB-02"],
    status: "aktif"
  },

  {
    id: "KB05-PIN-004",
    kategori: "Pindah",
    nama: "Pindah Antar-Kelurahan",
    keywords: [
      "pindah kelurahan",
      "pindah antar kelurahan",
      "pindah alamat kelurahan",
      "pindah domisili kelurahan",
      "pindah wilayah kelurahan"
    ],
    questions: [
      "Saya pindah ke kelurahan lain",
      "Bagaimana pindah antar kelurahan?",
      "Saya akan pindah alamat ke kelurahan lain"
    ],
    answer:
      "Jika warga pindah ke kelurahan lain, proses perpindahan penduduk perlu dilakukan sesuai ketentuan administrasi kependudukan. Warga sebaiknya memastikan dokumen kependudukan dan data alamat diperbarui sesuai domisili administratif yang baru.",
    dokumen_warga: [
      "KTP-el",
      "KK",
      "Dokumen perpindahan sesuai ketentuan"
    ],
    dokumen_rt: [
      "Surat/keterangan pengantar apabila diperlukan"
    ],
    instansi_tujuan: "Kelurahan/Dukcapil",
    penerbit_akhir: "Dukcapil",
    crossLink: ["KB-01", "KB-02"],
    status: "aktif"
  },

  {
    id: "KB05-PIN-005",
    kategori: "Pindah",
    nama: "Pindah Antar-Kecamatan atau Kota",
    keywords: [
      "pindah kecamatan",
      "pindah kota",
      "pindah kabupaten",
      "pindah antar wilayah",
      "pindah domisili jauh"
    ],
    questions: [
      "Saya pindah ke kecamatan lain",
      "Saya pindah ke kota lain",
      "Bagaimana pindah domisili ke luar kota?"
    ],
    answer:
      "Jika warga pindah ke kecamatan, kota, atau kabupaten lain, perpindahan perlu diproses melalui administrasi kependudukan sesuai wilayah asal dan tujuan. RT dapat membantu administrasi lingkungan apabila diperlukan, tetapi perubahan data kependudukan dilakukan melalui instansi yang berwenang.",
    dokumen_warga: [
      "KTP-el",
      "KK",
      "Dokumen perpindahan sesuai ketentuan"
    ],
    dokumen_rt: [
      "Keterangan/pengantar pindah apabila diperlukan"
    ],
    instansi_tujuan: "Kelurahan/Dukcapil",
    penerbit_akhir: "Dukcapil",
    crossLink: ["KB-01", "KB-02"],
    status: "aktif"
  },

  {
    id: "KB05-PIN-006",
    kategori: "Pindah",
    nama: "Pindah Antar-Provinsi",
    keywords: [
      "pindah provinsi",
      "pindah antar provinsi",
      "pindah ke provinsi lain",
      "pindah luar daerah",
      "pindah alamat provinsi"
    ],
    questions: [
      "Saya pindah ke provinsi lain",
      "Bagaimana mengurus pindah antar provinsi?",
      "Saya akan pindah keluar Jakarta"
    ],
    answer:
      "Perpindahan penduduk antarprovinsi memerlukan penyesuaian administrasi kependudukan antara wilayah asal dan wilayah tujuan. Warga perlu mengikuti prosedur Dukcapil yang berlaku dan memastikan data KK serta KTP diperbarui sesuai alamat baru.",
    dokumen_warga: [
      "KTP-el",
      "KK",
      "Dokumen perpindahan sesuai ketentuan"
    ],
    dokumen_rt: [
      "Keterangan/pengantar apabila diperlukan"
    ],
    instansi_tujuan: "Dukcapil/Kelurahan sesuai prosedur",
    penerbit_akhir: "Dukcapil",
    crossLink: ["KB-01", "KB-02"],
    status: "aktif"
  },

  {
    id: "KB05-PIN-007",
    kategori: "Pendatang",
    nama: "Warga Baru Tinggal di RT 03",
    keywords: [
      "warga baru",
      "pendatang baru",
      "baru tinggal di RT",
      "masuk RT 03",
      "lapor pendatang"
    ],
    questions: [
      "Saya baru tinggal di RT 03",
      "Saya pendatang, harus lapor ke siapa?",
      "Apa yang harus dilakukan warga baru?"
    ],
    answer:
      "Warga yang baru tinggal di RT 03 sebaiknya melaporkan keberadaannya kepada pengurus RT. Data pendatang perlu dicatat agar pengurus mengetahui siapa yang tinggal di lingkungan. Status tinggal secara fisik perlu dibedakan dari alamat KTP dan KK. Jika warga memang akan menjadikan RT 03 sebagai domisili administratif, proses perpindahan penduduk perlu dilakukan sesuai ketentuan.",
    dokumen_warga: [
      "KTP-el",
      "KK",
      "Dokumen tempat tinggal atau perpindahan apabila diperlukan"
    ],
    dokumen_rt: [
      "Data pendatang",
      "Data tempat tinggal"
    ],
    instansi_tujuan: "RT/Kelurahan/Dukcapil sesuai kebutuhan",
    penerbit_akhir: "Sesuai jenis layanan",
    crossLink: ["KB-01", "KB-02"],
    status: "aktif"
  },

  {
    id: "KB05-PIN-008",
    kategori: "Pendatang",
    nama: "Pendatang dengan KTP Alamat Lain",
    keywords: [
      "pendatang KTP alamat lain",
      "tinggal beda KTP",
      "KTP luar daerah tinggal di RT",
      "KTP tidak sesuai tempat tinggal",
      "pendatang sementara"
    ],
    questions: [
      "Saya tinggal di RT 03 tetapi KTP saya alamat luar kota",
      "Apakah boleh tinggal di RT 03 dengan KTP alamat lain?",
      "Pendatang belum pindah KTP"
    ],
    answer:
      "Seseorang dapat secara fisik tinggal di RT 03 sementara alamat pada KTP masih berada di wilayah lain. Namun, status tempat tinggal dan administrasi kependudukan perlu dibedakan. Warga sebaiknya melaporkan keberadaannya kepada RT dan memastikan apakah perlu melakukan proses perpindahan atau dokumen administrasi lain sesuai tujuan tinggal.",
    dokumen_warga: [
      "KTP-el",
      "KK",
      "Dokumen tempat tinggal apabila diperlukan"
    ],
    dokumen_rt: [
      "Data pendatang",
      "Keterangan tempat tinggal"
    ],
    instansi_tujuan: "RT/Kelurahan/Dukcapil sesuai kebutuhan",
    penerbit_akhir: "Sesuai jenis layanan",
    crossLink: ["KB-01", "KB-02"],
    status: "aktif"
  },

  {
    id: "KB05-PIN-009",
    kategori: "Tempat Tinggal",
    nama: "Warga Tinggal di Kost",
    keywords: [
      "tinggal di kost",
      "anak kost",
      "penghuni kost",
      "kost RT",
      "pendatang kost"
    ],
    questions: [
      "Saya tinggal di kost di RT 03",
      "Apa yang harus dilakukan penghuni kost?",
      "Apakah anak kost harus lapor RT?"
    ],
    answer:
      "Penghuni kost yang tinggal di lingkungan RT 03 sebaiknya melaporkan keberadaannya kepada pengurus RT sesuai ketentuan lingkungan. Data penghuni kost dapat dicatat sebagai bagian dari administrasi warga atau pendatang. Status tempat tinggal di kost tidak otomatis berarti alamat KTP harus berubah; hal tersebut bergantung pada kondisi dan tujuan administrasi kependudukan.",
    dokumen_warga: [
      "KTP-el",
      "KK",
      "Data atau bukti tempat tinggal apabila diperlukan"
    ],
    dokumen_rt: [
      "Data penghuni kost",
      "Data tempat kost"
    ],
    instansi_tujuan: "RT/Kelurahan/Dukcapil sesuai kebutuhan",
    penerbit_akhir: "Sesuai jenis layanan",
    crossLink: ["KB-01", "KB-02", "KB-09"],
    status: "aktif"
  },

  {
    id: "KB05-PIN-010",
    kategori: "Tempat Tinggal",
    nama: "Warga Tinggal di Rumah Kontrak",
    keywords: [
      "rumah kontrakan",
      "tinggal kontrak",
      "rumah sewa",
      "penghuni kontrakan",
      "kontrak rumah RT"
    ],
    questions: [
      "Saya tinggal di rumah kontrakan",
      "Apakah penghuni kontrakan harus lapor RT?",
      "Saya menyewa rumah di RT 03"
    ],
    answer:
      "Penghuni rumah kontrakan yang tinggal di RT 03 sebaiknya melaporkan keberadaannya kepada pengurus RT. Data tempat tinggal dapat dicatat sebagai kontrak/sewa. Alamat pada KTP dan KK tidak otomatis berubah hanya karena seseorang menyewa rumah; perubahan alamat administratif mengikuti proses kependudukan sesuai kondisi.",
    dokumen_warga: [
      "KTP-el",
      "KK",
      "Bukti atau informasi tempat tinggal apabila diperlukan"
    ],
    dokumen_rt: [
      "Data penghuni kontrakan",
      "Data alamat tempat tinggal"
    ],
    instansi_tujuan: "RT/Kelurahan/Dukcapil sesuai kebutuhan",
    penerbit_akhir: "Sesuai jenis layanan",
    crossLink: ["KB-01", "KB-02", "KB-09"],
    status: "aktif"
  },

  {
    id: "KB05-PIN-011",
    kategori: "Tempat Tinggal",
    nama: "Tinggal Menumpang",
    keywords: [
      "tinggal menumpang",
      "menumpang di rumah keluarga",
      "menumpang rumah orang",
      "numpang tinggal",
      "penghuni menumpang"
    ],
    questions: [
      "Saya tinggal menumpang di rumah saudara",
      "Bagaimana status warga yang menumpang?",
      "Apakah orang yang menumpang harus lapor RT?"
    ],
    answer:
      "Warga yang tinggal menumpang di rumah orang lain sebaiknya melaporkan keberadaannya kepada pengurus RT. Status menumpang merupakan informasi tempat tinggal di lingkungan dan perlu dibedakan dari status alamat pada KTP dan KK. Jika ingin mengubah alamat administratif, prosesnya mengikuti ketentuan Dukcapil.",
    dokumen_warga: [
      "KTP-el",
      "KK",
      "Informasi atau dokumen tempat tinggal apabila diperlukan"
    ],
    dokumen_rt: [
      "Data penghuni",
      "Keterangan tempat tinggal"
    ],
    instansi_tujuan: "RT/Kelurahan/Dukcapil sesuai kebutuhan",
    penerbit_akhir: "Sesuai jenis layanan",
    crossLink: ["KB-01", "KB-02"],
    status: "aktif"
  },

  {
    id: "KB05-PIN-012",
    kategori: "Domisili",
    nama: "Surat Keterangan Domisili",
    keywords: [
      "surat domisili",
      "keterangan domisili",
      "surat domisili RT",
      "domisili RT",
      "bukti tinggal"
    ],
    questions: [
      "Saya membutuhkan surat domisili",
      "Apakah RT bisa membuat surat domisili?",
      "Bagaimana meminta keterangan domisili?"
    ],
    answer:
      "Istilah surat domisili dapat digunakan untuk beberapa kebutuhan yang berbeda. Karena itu, warga perlu menjelaskan tujuan surat terlebih dahulu. RT dapat memberikan keterangan mengenai tempat tinggal warga sesuai kewenangan administrasi lingkungan, tetapi dokumen resmi yang diminta oleh instansi tertentu dapat memiliki format atau penerbit yang berbeda.",
    dokumen_warga: [
      "KTP-el",
      "KK",
      "Data tempat tinggal"
    ],
    dokumen_rt: [
      "Data warga",
      "Keterangan tempat tinggal"
    ],
    instansi_tujuan: "RT/Kelurahan/Instansi tujuan sesuai kebutuhan",
    penerbit_akhir: "Sesuai jenis dokumen",
    crossLink: ["KB-10", "KB-09"],
    status: "aktif"
  },

  {
    id: "KB05-PIN-013",
    kategori: "Domisili",
    nama: "Domisili untuk Bank",
    keywords: [
      "domisili bank",
      "surat domisili bank",
      "alamat untuk bank",
      "keterangan tinggal bank",
      "domisili rekening"
    ],
    questions: [
      "Saya diminta surat domisili oleh bank",
      "Apakah RT bisa membuat surat domisili untuk bank?",
      "Bank meminta keterangan tempat tinggal"
    ],
    answer:
      "Jika bank meminta keterangan tempat tinggal, warga perlu menyampaikan persyaratan atau format yang diminta bank. RT dapat memberikan keterangan lingkungan sesuai kewenangannya apabila memang dibutuhkan. Namun, jika bank meminta dokumen resmi dari Kelurahan atau instansi tertentu, warga perlu melanjutkan proses kepada instansi tersebut.",
    dokumen_warga: [
      "KTP-el",
      "KK",
      "Dokumen lain sesuai permintaan bank"
    ],
    dokumen_rt: [
      "Keterangan tempat tinggal apabila diperlukan"
    ],
    instansi_tujuan: "RT/Kelurahan/Bank sesuai kebutuhan",
    penerbit_akhir: "Sesuai jenis dokumen",
    crossLink: ["KB-01", "KB-10"],
    status: "aktif"
  },

  {
    id: "KB05-PIN-014",
    kategori: "Domisili",
    nama: "Domisili untuk Sekolah atau Kampus",
    keywords: [
      "domisili sekolah",
      "domisili kampus",
      "surat domisili sekolah",
      "keterangan tinggal sekolah",
      "alamat sekolah"
    ],
    questions: [
      "Sekolah meminta surat domisili",
      "Kampus meminta surat keterangan domisili",
      "Bagaimana mendapatkan keterangan tempat tinggal untuk sekolah?"
    ],
    answer:
      "Jika sekolah atau kampus meminta bukti tempat tinggal, warga perlu mengetahui terlebih dahulu dokumen apa yang diwajibkan oleh institusi tersebut. RT dapat memberikan keterangan lingkungan mengenai tempat tinggal apabila sesuai kewenangan, sedangkan dokumen administrasi kependudukan tetap berasal dari instansi yang berwenang.",
    dokumen_warga: [
      "KTP-el",
      "KK",
      "Dokumen sekolah/kampus apabila diperlukan"
    ],
    dokumen_rt: [
      "Keterangan tempat tinggal"
    ],
    instansi_tujuan: "RT/Kelurahan/Sekolah/Kampus sesuai kebutuhan",
    penerbit_akhir: "Sesuai jenis dokumen",
    crossLink: ["KB-01", "KB-10"],
    status: "aktif"
  },

  {
    id: "KB05-PIN-015",
    kategori: "Pindah",
    nama: "Satu Anggota Keluarga Pindah",
    keywords: [
      "satu anggota keluarga pindah",
      "anak pindah KK",
      "istri pindah",
      "suami pindah",
      "anggota keluarga pindah"
    ],
    questions: [
      "Hanya satu anggota keluarga yang pindah",
      "Anak saya pindah ke kota lain",
      "Bagaimana jika hanya satu anggota KK yang pindah?"
    ],
    answer:
      "Jika hanya satu atau beberapa anggota keluarga yang pindah, data keluarga perlu disesuaikan dengan kondisi sebenarnya. Proses administrasi kependudukan dapat menyebabkan perubahan susunan KK. Data internal RT juga perlu diperbarui agar status tempat tinggal masing-masing anggota keluarga sesuai keadaan.",
    dokumen_warga: [
      "KTP-el",
      "KK",
      "Dokumen perpindahan sesuai ketentuan"
    ],
    dokumen_rt: [
      "Laporan perubahan anggota keluarga",
      "Pembaruan data warga"
    ],
    instansi_tujuan: "Kelurahan/Dukcapil",
    penerbit_akhir: "Dukcapil",
    crossLink: ["KB-02"],
    status: "aktif"
  },

  {
    id: "KB05-PIN-016",
    kategori: "Pindah",
    nama: "Seluruh Keluarga Pindah",
    keywords: [
      "sekeluarga pindah",
      "seluruh keluarga pindah",
      "pindah satu KK",
      "KK pindah alamat",
      "keluarga pindah rumah"
    ],
    questions: [
      "Seluruh keluarga saya pindah",
      "Kami sekeluarga pindah rumah",
      "Bagaimana jika satu KK pindah semua?"
    ],
    answer:
      "Jika seluruh anggota keluarga pindah tempat tinggal, proses perpindahan penduduk perlu dilakukan sesuai wilayah tujuan. Data KK dan alamat kependudukan perlu disesuaikan dengan domisili baru. RT 03 juga perlu memperbarui data lingkungan setelah warga benar-benar tidak lagi tinggal di wilayah RT.",
    dokumen_warga: [
      "KTP-el",
      "KK",
      "Dokumen perpindahan sesuai ketentuan"
    ],
    dokumen_rt: [
      "Laporan pindah",
      "Pembaruan data keluarga"
    ],
    instansi_tujuan: "Kelurahan/Dukcapil",
    penerbit_akhir: "Dukcapil",
    crossLink: ["KB-01", "KB-02"],
    status: "aktif"
  },

  {
    id: "KB05-PIN-017",
    kategori: "Pindah",
    nama: "Sudah Pindah tetapi Masih Tercatat di RT",
    keywords: [
      "sudah pindah masih tercatat",
      "data warga pindah",
      "warga sudah tidak tinggal",
      "data lama warga",
      "warga pindah belum dihapus"
    ],
    questions: [
      "Saya sudah pindah tetapi masih tercatat di RT",
      "Bagaimana mengubah data warga yang sudah pindah?",
      "Warga sudah tidak tinggal tetapi masih aktif"
    ],
    answer:
      "Jika warga sudah tidak tinggal di RT 03, pengurus perlu memperbarui data internal agar status tempat tinggalnya tidak lagi tercatat sebagai aktif tinggal di RT. Dalam sistem RT 03, status kependudukan dapat dibedakan antara Aktif, Pindah, dan Meninggal. Perubahan data internal RT tidak otomatis mengubah data Dukcapil.",
    dokumen_warga: [
      "Dokumen atau informasi perpindahan apabila tersedia"
    ],
    dokumen_rt: [
      "Tanggal/status pindah",
      "Pembaruan data warga"
    ],
    instansi_tujuan: "RT untuk data lingkungan; Kelurahan/Dukcapil untuk data kependudukan",
    penerbit_akhir: "Sesuai jenis administrasi",
    crossLink: ["KB-01", "KB-02"],
    status: "aktif"
  },

  {
    id: "KB05-PIN-018",
    kategori: "Pindah",
    nama: "Sudah Pindah tetapi Belum Melapor",
    keywords: [
      "pindah tidak lapor",
      "sudah pindah tidak lapor",
      "warga pindah tanpa laporan",
      "tidak lapor pindah",
      "data pindah tidak diketahui"
    ],
    questions: [
      "Bagaimana jika warga pindah tetapi tidak melapor?",
      "Warga sudah pindah tetapi RT tidak tahu",
      "Apa yang dilakukan jika penghuni sudah pergi?"
    ],
    answer:
      "Jika seseorang sudah tidak tinggal di RT 03 tetapi belum melaporkan kepindahannya, pengurus RT sebaiknya melakukan verifikasi informasi sebelum mengubah data secara permanen. Setelah kondisi dapat dipastikan, data internal RT dapat diperbarui. Untuk perubahan administrasi kependudukan, warga tetap perlu menyelesaikan proses pada instansi yang berwenang.",
    dokumen_rt: [
      "Informasi keberadaan warga",
      "Hasil verifikasi lingkungan",
      "Pembaruan data"
    ],
    instansi_tujuan: "RT/Kelurahan/Dukcapil sesuai kondisi",
    penerbit_akhir: "Sesuai jenis administrasi",
    crossLink: ["KB-01", "KB-02"],
    status: "aktif"
  },

  {
    id: "KB05-PIN-019",
    kategori: "Pendatang",
    nama: "Pemilik Rumah Menyewakan kepada Orang Lain",
    keywords: [
      "rumah disewakan",
      "pemilik rumah menyewakan",
      "kontrakan warga baru",
      "rumah dikontrakkan",
      "penyewa rumah"
    ],
    questions: [
      "Saya pemilik rumah dan menyewakan kepada orang lain",
      "Apa yang harus dilakukan jika rumah dikontrakkan?",
      "Penyewa rumah perlu lapor RT?"
    ],
    answer:
      "Jika pemilik rumah menyewakan rumah kepada orang lain, pemilik sebaiknya menyampaikan informasi penghuni kepada pengurus RT sesuai ketentuan lingkungan. Data pemilik rumah dan data penghuni perlu dibedakan. Penghuni tetap perlu melaporkan keberadaannya sesuai ketentuan administrasi lingkungan.",
    dokumen_warga: [
      "Identitas pemilik",
      "Data atau identitas penyewa"
    ],
    dokumen_rt: [
      "Data pemilik rumah",
      "Data penghuni/penyewa",
      "Data tempat tinggal"
    ],
    instansi_tujuan: "RT/Kelurahan sesuai kebutuhan",
    penerbit_akhir: "Sesuai jenis layanan",
    crossLink: ["KB-09", "KB-10"],
    status: "aktif"
  },

  {
    id: "KB05-PIN-020",
    kategori: "Pendatang",
    nama: "Pemilik Tempat Kost",
    keywords: [
      "pemilik kost",
      "rumah kost",
      "usaha kost",
      "pemilik rumah kost",
      "data penghuni kost"
    ],
    questions: [
      "Saya memiliki rumah kost di RT 03",
      "Bagaimana pelaporan penghuni kost?",
      "Apa yang perlu dilakukan pemilik kost?"
    ],
    answer:
      "Pemilik tempat kost perlu membantu memastikan data penghuni diketahui oleh pengurus lingkungan sesuai ketentuan setempat. Data pemilik kost, alamat tempat kost, dan data penghuni sebaiknya dibedakan. Jika tempat kost juga merupakan kegiatan usaha, kebutuhan administrasi usahanya merupakan hal yang berbeda dari pelaporan penghuni kepada RT.",
    dokumen_warga: [
      "Identitas pemilik",
      "Data penghuni"
    ],
    dokumen_rt: [
      "Data tempat kost",
      "Data pemilik",
      "Data penghuni"
    ],
    instansi_tujuan: "RT/Kelurahan/Instansi usaha sesuai kebutuhan",
    penerbit_akhir: "Sesuai jenis layanan",
    crossLink: ["KB-09", "KB-10"],
    status: "aktif"
  },

  {
    id: "KB05-PIN-021",
    kategori: "Pendatang",
    nama: "Penghuni Kost Pindah Keluar",
    keywords: [
      "anak kost pindah",
      "penghuni kost keluar",
      "kost sudah pindah",
      "pendatang kost pindah",
      "hapus data penghuni kost"
    ],
    questions: [
      "Penghuni kost sudah pindah",
      "Bagaimana menghapus data penghuni kost?",
      "Anak kost sudah tidak tinggal di sini"
    ],
    answer:
      "Jika penghuni kost sudah tidak tinggal di RT 03, data internal lingkungan perlu diperbarui agar tidak lagi tercatat sebagai penghuni aktif. Sebaiknya dicatat informasi kepindahan atau tanggal terakhir tinggal jika tersedia.",
    dokumen_rt: [
      "Informasi kepindahan penghuni",
      "Tanggal/status keluar",
      "Pembaruan data penghuni"
    ],
    instansi_tujuan: "RT untuk data lingkungan; Kelurahan/Dukcapil sesuai kebutuhan",
    penerbit_akhir: "Sesuai jenis administrasi",
    crossLink: ["KB-02"],
    status: "aktif"
  },

  {
    id: "KB05-PIN-022",
    kategori: "Domisili",
    nama: "Tinggal di Dua Tempat",
    keywords: [
      "dua tempat tinggal",
      "punya dua rumah",
      "tinggal dua alamat",
      "domisili ganda",
      "rumah utama dan rumah kedua"
    ],
    questions: [
      "Saya tinggal di dua tempat",
      "Apakah boleh punya dua tempat tinggal?",
      "KTP saya di satu tempat tetapi sering tinggal di tempat lain"
    ],
    answer:
      "Seseorang dapat memiliki lebih dari satu tempat yang secara fisik digunakan untuk tinggal, tetapi administrasi kependudukan dan alamat resmi harus dibedakan dari tempat tinggal sementara atau tempat yang sesekali ditempati. Untuk menentukan dokumen yang diperlukan, perlu diketahui tujuan penggunaan alamat dan kondisi domisili sebenarnya.",
    dokumen_warga: [
      "KTP-el",
      "KK",
      "Dokumen tempat tinggal apabila diperlukan"
    ],
    dokumen_rt: [
      "Keterangan tempat tinggal di lingkungan"
    ],
    instansi_tujuan: "RT/Kelurahan/Dukcapil sesuai tujuan",
    penerbit_akhir: "Sesuai jenis layanan",
    crossLink: ["KB-01", "KB-02"],
    status: "aktif"
  },

  {
    id: "KB05-PIN-023",
    kategori: "Pindah",
    nama: "Pindah Setelah Menikah",
    keywords: [
      "pindah setelah menikah",
      "menikah lalu pindah",
      "istri pindah setelah nikah",
      "suami pindah setelah nikah",
      "pasangan pindah rumah"
    ],
    questions: [
      "Saya menikah lalu pindah rumah",
      "Setelah menikah saya pindah ke rumah pasangan",
      "Bagaimana KK dan KTP setelah menikah dan pindah?"
    ],
    answer:
      "Jika setelah menikah seseorang pindah tempat tinggal, ada dua hal yang perlu diproses secara terpisah: perubahan susunan keluarga karena perkawinan dan perubahan alamat karena perpindahan. Warga perlu memastikan KK dan KTP disesuaikan dengan kondisi administrasi yang sebenarnya.",
    dokumen_warga: [
      "KTP-el",
      "KK",
      "Dokumen perkawinan",
      "Dokumen perpindahan apabila diperlukan"
    ],
    dokumen_rt: [
      "Keterangan/pengantar sesuai kebutuhan"
    ],
    instansi_tujuan: "Kelurahan/Dukcapil/KUA sesuai proses",
    penerbit_akhir: "Instansi berwenang sesuai jenis dokumen",
    crossLink: ["KB-01", "KB-02", "KB-06"],
    status: "aktif"
  },

  {
    id: "KB05-PIN-024",
    kategori: "Pindah",
    nama: "Pindah Setelah Perceraian",
    keywords: [
      "pindah setelah cerai",
      "cerai lalu pindah",
      "mantan suami pindah",
      "mantan istri pindah",
      "pindah setelah perceraian"
    ],
    questions: [
      "Setelah cerai saya pindah rumah",
      "Mantan suami sudah pindah dari RT",
      "Bagaimana data keluarga setelah cerai dan pindah?"
    ],
    answer:
      "Jika setelah perceraian salah satu pihak pindah dari RT 03, data keluarga dan data tempat tinggal perlu disesuaikan dengan keadaan sebenarnya. Perubahan status perkawinan dan perpindahan alamat merupakan dua hal yang saling berkaitan tetapi tetap harus diproses sesuai administrasinya masing-masing.",
    dokumen_warga: [
      "KTP-el",
      "KK",
      "Dokumen perceraian",
      "Dokumen perpindahan apabila diperlukan"
    ],
    dokumen_rt: [
      "Keterangan/pengantar sesuai kebutuhan",
      "Pembaruan data warga"
    ],
    instansi_tujuan: "Kelurahan/Dukcapil",
    penerbit_akhir: "Dukcapil",
    crossLink: ["KB-02", "KB-06"],
    status: "aktif"
  },

  {
    id: "KB05-PIN-025",
    kategori: "Pendatang",
    nama: "WNA Tinggal di RT 03",
    keywords: [
      "WNA tinggal",
      "orang asing tinggal",
      "WNA pendatang",
      "warga asing RT",
      "WNA di RT 03"
    ],
    questions: [
      "Ada WNA tinggal di RT 03",
      "Bagaimana melaporkan WNA yang tinggal di lingkungan?",
      "Orang asing menyewa rumah di RT 03"
    ],
    answer:
      "Warga negara asing yang tinggal di RT 03 perlu dilaporkan dan didata sesuai ketentuan administrasi lingkungan serta aturan keimigrasian. Dokumen WNA berbeda dengan dokumen kependudukan WNI. Jika menyangkut izin tinggal atau kewajiban keimigrasian, warga harus diarahkan kepada instansi yang berwenang.",
    dokumen_warga: [
      "Paspor atau dokumen identitas",
      "Dokumen izin tinggal sesuai status"
    ],
    dokumen_rt: [
      "Data keberadaan WNA",
      "Informasi tempat tinggal"
    ],
    instansi_tujuan: "RT/Kelurahan/Keimigrasian sesuai kebutuhan",
    penerbit_akhir: "Instansi berwenang sesuai jenis dokumen",
    crossLink: ["KB-01", "KB-09"],
    status: "aktif"
  },

  {
    id: "KB05-PIN-026",
    kategori: "Pindah",
    nama: "Dokumen Pindah Tidak Lengkap",
    keywords: [
      "dokumen pindah tidak lengkap",
      "syarat pindah kurang",
      "berkas pindah kurang",
      "dokumen perpindahan kurang",
      "pindah tanpa dokumen"
    ],
    questions: [
      "Dokumen pindah saya tidak lengkap",
      "Apa yang dilakukan jika berkas pindah kurang?",
      "Saya tidak memiliki semua dokumen untuk pindah"
    ],
    answer:
      "Jika dokumen perpindahan belum lengkap, jangan menebak atau membuat dokumen pengganti sendiri. Warga perlu membawa dokumen yang tersedia dan meminta daftar kekurangan kepada Kelurahan/Dukcapil atau instansi yang menangani perpindahan. RT dapat membantu menjelaskan data lingkungan yang diketahui.",
    dokumen_warga: [
      "KTP-el yang tersedia",
      "KK yang tersedia",
      "Dokumen pendukung yang dimiliki"
    ],
    dokumen_rt: [
      "Keterangan sesuai data RT"
    ],
    instansi_tujuan: "Kelurahan/Dukcapil",
    penerbit_akhir: "Dukcapil",
    crossLink: ["KB-01", "KB-02"],
    status: "aktif"
  },

  {
    id: "KB05-PIN-027",
    kategori: "Domisili",
    nama: "Tidak Tahu Status Domisili",
    keywords: [
      "status domisili",
      "domisili saya bagaimana",
      "alamat tinggal tidak jelas",
      "tinggal di mana secara administrasi",
      "alamat KTP berbeda"
    ],
    questions: [
      "Saya bingung alamat domisili saya",
      "KTP saya berbeda dengan tempat tinggal",
      "Bagaimana menentukan domisili saya?"
    ],
    answer:
      "Untuk menentukan administrasi yang tepat, perlu dibedakan antara tempat tinggal secara fisik, alamat pada KTP, alamat pada KK, dan tujuan penggunaan alamat. Jika keempat hal tersebut berbeda, warga sebaiknya menjelaskan tujuan administrasinya terlebih dahulu agar dapat ditentukan dokumen dan instansi yang tepat.",
    dokumen_warga: [
      "KTP-el",
      "KK",
      "Bukti atau informasi tempat tinggal"
    ],
    dokumen_rt: [
      "Keterangan tempat tinggal apabila diperlukan"
    ],
    instansi_tujuan: "RT/Kelurahan/Dukcapil sesuai tujuan",
    penerbit_akhir: "Sesuai jenis layanan",
    crossLink: ["KB-01", "KB-02", "KB-10"],
    status: "aktif"
  },

  {
    id: "KB05-PIN-028",
    kategori: "Pindah",
    nama: "Tidak Ingin Mengubah KTP Setelah Pindah",
    keywords: [
      "tidak mau ubah KTP",
      "pindah tapi KTP lama",
      "KTP alamat lama",
      "tidak ingin pindah KTP",
      "alamat KTP tetap"
    ],
    questions: [
      "Saya sudah pindah tetapi tidak ingin mengubah KTP",
      "Bolehkah tetap memakai KTP alamat lama?",
      "Saya tinggal di tempat lain tetapi KTP masih alamat lama"
    ],
    answer:
      "Kesesuaian alamat kependudukan dengan domisili administratif perlu mengikuti ketentuan administrasi kependudukan. Karena kondisi setiap orang berbeda, jangan langsung menyimpulkan bahwa KTP lama selalu boleh atau selalu tidak boleh digunakan. Warga perlu menjelaskan apakah perpindahan bersifat sementara atau menetap dan untuk tujuan administrasi apa alamat tersebut digunakan.",
    dokumen_warga: [
      "KTP-el",
      "KK",
      "Informasi tempat tinggal"
    ],
    dokumen_rt: [
      "Keterangan tempat tinggal apabila diperlukan"
    ],
    instansi_tujuan: "Kelurahan/Dukcapil",
    penerbit_akhir: "Dukcapil",
    crossLink: ["KB-01", "KB-02"],
    status: "aktif"
  },

  {
    id: "KB05-PIN-029",
    kategori: "Pindah",
    nama: "Pindah tetapi Masih Memiliki Rumah di RT 03",
    keywords: [
      "pindah masih punya rumah",
      "rumah ditinggal setelah pindah",
      "pindah tetapi rumah tetap milik",
      "pemilik rumah pindah",
      "rumah kosong setelah pindah"
    ],
    questions: [
      "Saya pindah tetapi rumah saya masih di RT 03",
      "Apakah masih tercatat sebagai warga jika rumah tetap milik saya?",
      "Saya pindah tetapi masih punya rumah di RT 03"
    ],
    answer:
      "Kepemilikan rumah dan tempat tinggal merupakan dua hal yang berbeda. Seseorang dapat tetap memiliki rumah di RT 03 tetapi sudah tidak tinggal di sana. Untuk administrasi RT, data pemilik rumah dan data penghuni sebaiknya dibedakan agar tidak menimbulkan kesalahan data warga.",
    dokumen_warga: [
      "KTP-el",
      "KK",
      "Informasi kepemilikan atau tempat tinggal apabila diperlukan"
    ],
    dokumen_rt: [
      "Data pemilik rumah",
      "Data penghuni aktual"
    ],
    instansi_tujuan: "RT untuk data lingkungan; instansi pertanahan/administrasi lain sesuai tujuan",
    penerbit_akhir: "Sesuai jenis layanan",
    crossLink: ["KB-09"],
    status: "aktif"
  },

  {
    id: "KB05-PIN-030",
    kategori: "Pindah",
    nama: "Aturan Umum Pindah dan Domisili",
    keywords: [
      "aturan pindah",
      "aturan domisili",
      "pindah dan KTP",
      "pendatang dan RT",
      "domisili dan RT"
    ],
    questions: [
      "Apa bedanya domisili dan alamat KTP?",
      "Apa yang harus dilakukan pendatang di RT?",
      "Bagaimana aturan umum pindah warga?"
    ],
    answer:
      "Dalam administrasi lingkungan perlu dibedakan antara tempat tinggal secara fisik, data internal RT, dan alamat resmi pada dokumen kependudukan. RT dapat mendata siapa yang benar-benar tinggal di lingkungan, termasuk pemilik rumah, penghuni kost, kontrakan, atau warga yang menumpang. Sementara perubahan alamat KTP dan KK mengikuti administrasi kependudukan melalui instansi yang berwenang. Jika warga meminta surat domisili, surat tinggal, atau surat pengantar, tujuan surat perlu ditanyakan terlebih dahulu karena dokumen yang diperlukan dapat berbeda.",
    instansi_tujuan: "RT/Kelurahan/Dukcapil sesuai tujuan",
    penerbit_akhir: "Sesuai jenis layanan",
    crossLink: ["KB-01", "KB-02", "KB-09", "KB-10"],
    status: "aktif"
  }
];