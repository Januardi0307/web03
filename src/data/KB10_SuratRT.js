// =========================================================
// KB-10 — SURAT UMUM RT / RW
// RT 03 / RW 07 Karet - Setiabudi
// =========================================================

export const KB10_SuratRT = [
  {
    id: "KB10-SRT-001",
    kategori: "Surat RT",
    nama: "Surat Pengantar RT",
    keywords: [
      "surat pengantar",
      "surat RT",
      "pengantar RT",
      "minta surat RT",
      "surat pengantar warga"
    ],
    questions: [
      "Saya mau membuat surat pengantar",
      "Bagaimana mendapatkan surat pengantar RT?",
      "Apa syarat membuat surat RT?"
    ],
    answer:
      "Surat pengantar RT digunakan untuk membantu proses administrasi warga sesuai keperluan. Warga perlu menjelaskan tujuan surat agar jenis surat dan dokumen pendukung yang diperlukan dapat ditentukan dengan tepat. RT menerbitkan atau memberikan pengantar sesuai kewenangannya, sedangkan dokumen akhir dapat diterbitkan oleh RW, Kelurahan, Dukcapil, Kepolisian, KUA, atau instansi lain sesuai keperluan.",
    dokumen_warga: [
      "KTP-el",
      "KK",
      "Dokumen pendukung sesuai keperluan"
    ],
    dokumen_rt: [
      "Data warga",
      "Surat pengantar sesuai keperluan"
    ],
    instansi_tujuan: "RW/Kelurahan/Instansi tujuan sesuai keperluan",
    penerbit_akhir: "Instansi yang berwenang menerbitkan dokumen akhir",
    crossLink: [
      "KB-01",
      "KB-02",
      "KB-04",
      "KB-05",
      "KB-06",
      "KB-07"
    ],
    status: "aktif"
  },

  {
    id: "KB10-SRT-002",
    kategori: "Surat RT",
    nama: "Surat Keterangan Domisili",
    keywords: [
      "surat domisili",
      "keterangan domisili",
      "domisili",
      "alamat tinggal",
      "surat tempat tinggal"
    ],
    questions: [
      "Saya perlu surat domisili",
      "Bagaimana mendapatkan surat keterangan domisili?",
      "Saya tinggal di sini tetapi KTP bukan alamat sini"
    ],
    answer:
      "Keterangan mengenai tempat tinggal harus disesuaikan dengan tujuan penggunaannya. RT dapat memberikan keterangan mengenai keberadaan atau tempat tinggal warga sesuai data lingkungan. Namun keterangan RT tidak otomatis mengubah alamat KTP atau KK. Jika tujuan membutuhkan dokumen resmi dari Kelurahan atau instansi lain, warga harus melanjutkan proses ke instansi tersebut.",
    dokumen_warga: [
      "KTP-el",
      "KK",
      "Bukti tempat tinggal apabila diperlukan"
    ],
    dokumen_rt: [
      "Data tempat tinggal warga",
      "Keterangan lingkungan"
    ],
    instansi_tujuan: "RT/Kelurahan/Instansi tujuan",
    penerbit_akhir: "Sesuai tujuan dokumen",
    crossLink: [
      "KB-01",
      "KB-02",
      "KB-05"
    ],
    status: "aktif"
  },

  {
    id: "KB10-SRT-003",
    kategori: "Surat RT",
    nama: "Surat Keterangan Tinggal",
    keywords: [
      "surat keterangan tinggal",
      "keterangan tinggal",
      "tinggal di RT",
      "bukti tinggal",
      "warga tinggal"
    ],
    questions: [
      "Saya butuh surat keterangan tinggal",
      "Bagaimana membuktikan saya tinggal di sini?",
      "RT bisa membuat keterangan tinggal?"
    ],
    answer:
      "RT dapat memberikan keterangan mengenai warga yang diketahui tinggal di lingkungan RT sesuai data yang dimiliki. Jenis keterangan dan penggunaannya harus dijelaskan terlebih dahulu karena keterangan tinggal dari RT berbeda dengan perubahan alamat resmi pada dokumen kependudukan.",
    dokumen_warga: [
      "KTP-el",
      "KK",
      "Informasi alamat tempat tinggal"
    ],
    dokumen_rt: [
      "Data warga",
      "Keterangan tempat tinggal"
    ],
    instansi_tujuan: "RT/Kelurahan/Instansi tujuan",
    penerbit_akhir: "Sesuai tujuan dokumen",
    crossLink: [
      "KB-01",
      "KB-05"
    ],
    status: "aktif"
  },

  {
    id: "KB10-SRT-004",
    kategori: "Surat RT",
    nama: "Surat Keterangan Belum Menikah",
    keywords: [
      "belum menikah",
      "surat belum menikah",
      "belum kawin",
      "keterangan belum menikah",
      "status perkawinan"
    ],
    questions: [
      "Saya perlu surat belum menikah",
      "Bagaimana membuat surat keterangan belum menikah?",
      "RT bisa membuat surat belum menikah?"
    ],
    answer:
      "Keterangan belum menikah harus didasarkan pada data dan tujuan penggunaannya. RT dapat memberikan keterangan sesuai data lingkungan dan kewenangannya, tetapi dokumen akhir untuk keperluan tertentu dapat memerlukan pengesahan atau penerbitan dari Kelurahan atau instansi lain.",
    dokumen_warga: [
      "KTP-el",
      "KK",
      "Dokumen pendukung apabila diperlukan"
    ],
    dokumen_rt: [
      "Data kependudukan warga",
      "Keterangan lingkungan"
    ],
    instansi_tujuan: "RT/Kelurahan/KUA/Instansi tujuan sesuai keperluan",
    penerbit_akhir: "Instansi berwenang sesuai tujuan",
    crossLink: [
      "KB-01",
      "KB-02",
      "KB-06"
    ],
    status: "aktif"
  },

  {
    id: "KB10-SRT-005",
    kategori: "Surat RT",
    nama: "Surat Keterangan Penghasilan",
    keywords: [
      "surat penghasilan",
      "keterangan penghasilan",
      "penghasilan",
      "gaji",
      "pendapatan"
    ],
    questions: [
      "Saya perlu surat keterangan penghasilan",
      "Apakah RT bisa membuat surat penghasilan?",
      "Untuk bank saya perlu keterangan penghasilan"
    ],
    answer:
      "Keterangan penghasilan dapat dibuat atau diberikan sesuai kondisi pekerjaan dan tujuan penggunaannya. Jika warga bekerja sebagai karyawan, bukti penghasilan dapat berasal dari perusahaan. Untuk warga yang bekerja mandiri atau memiliki usaha, keterangan lingkungan dapat digunakan apabila memang diterima oleh instansi tujuan. Persyaratan harus disesuaikan dengan tujuan surat.",
    dokumen_warga: [
      "KTP-el",
      "KK",
      "Informasi pekerjaan atau usaha",
      "Bukti penghasilan apabila tersedia"
    ],
    dokumen_rt: [
      "Keterangan warga",
      "Keterangan lingkungan apabila diperlukan"
    ],
    instansi_tujuan: "RT/Instansi tujuan",
    penerbit_akhir: "Sesuai kebutuhan dan kewenangan",
    crossLink: [
      "KB-09"
    ],
    status: "aktif"
  },

  {
    id: "KB10-SRT-006",
    kategori: "Surat RT",
    nama: "Surat Keterangan Tidak Mampu",
    keywords: [
      "SKTM",
      "surat tidak mampu",
      "tidak mampu",
      "keluarga tidak mampu",
      "surat keterangan ekonomi"
    ],
    questions: [
      "Bagaimana membuat SKTM?",
      "Saya membutuhkan surat tidak mampu",
      "RT bisa membuat surat tidak mampu?"
    ],
    answer:
      "Keterangan kondisi ekonomi warga harus berdasarkan keadaan yang sebenarnya dan data yang dapat dipertanggungjawabkan. RT dapat memberikan keterangan lingkungan sesuai kewenangannya. Jika dokumen akhir harus diterbitkan atau disahkan oleh Kelurahan atau instansi lain, warga perlu melanjutkan proses sesuai persyaratan instansi tersebut.",
    dokumen_warga: [
      "KTP-el",
      "KK",
      "Dokumen pendukung sesuai tujuan"
    ],
    dokumen_rt: [
      "Data keluarga",
      "Keterangan kondisi lingkungan"
    ],
    instansi_tujuan: "RT/Kelurahan/Instansi tujuan",
    penerbit_akhir: "Sesuai kewenangan instansi tujuan",
    crossLink: [
      "KB-02",
      "KB-08"
    ],
    status: "aktif"
  },

  {
    id: "KB10-SRT-007",
    kategori: "Surat RT",
    nama: "Surat Keterangan Usaha",
    keywords: [
      "surat usaha",
      "keterangan usaha",
      "usaha",
      "SKU",
      "usaha warga"
    ],
    questions: [
      "Saya perlu surat keterangan usaha",
      "Bagaimana membuat surat usaha?",
      "RT bisa membuat surat usaha?"
    ],
    answer:
      "RT dapat memberikan keterangan mengenai keberadaan usaha warga di lingkungan apabila diperlukan. Surat keterangan dari RT bukan pengganti NIB atau perizinan usaha lainnya. Jika tujuan surat berkaitan dengan perizinan usaha, warga perlu mengikuti prosedur resmi sesuai jenis usaha.",
    dokumen_warga: [
      "KTP-el",
      "KK",
      "Data usaha",
      "Alamat usaha"
    ],
    dokumen_rt: [
      "Keterangan keberadaan usaha"
    ],
    instansi_tujuan: "RT/Kelurahan/Instansi perizinan sesuai tujuan",
    penerbit_akhir: "Instansi berwenang sesuai jenis dokumen",
    crossLink: [
      "KB-09"
    ],
    status: "aktif"
  },

  {
    id: "KB10-SRT-008",
    kategori: "Surat RT",
    nama: "Surat Keterangan Janda atau Duda",
    keywords: [
      "janda",
      "duda",
      "surat janda",
      "surat duda",
      "status perkawinan"
    ],
    questions: [
      "Saya perlu surat keterangan janda",
      "Bagaimana membuat surat keterangan duda?",
      "Suami meninggal, bagaimana surat keterangan status?"
    ],
    answer:
      "Keterangan status janda atau duda harus disesuaikan dengan penyebabnya, misalnya cerai hidup atau cerai mati. Data kependudukan perlu diperiksa agar status perkawinan sesuai. RT dapat memberikan keterangan lingkungan sesuai data yang diketahui, tetapi dokumen resmi status perkawinan berasal dari instansi kependudukan atau dokumen perceraian/kematian yang sah.",
    dokumen_warga: [
      "KTP-el",
      "KK",
      "Akta cerai atau dokumen kematian pasangan apabila relevan"
    ],
    dokumen_rt: [
      "Data warga",
      "Keterangan lingkungan"
    ],
    instansi_tujuan: "RT/Kelurahan/Dukcapil/KUA/Instansi tujuan",
    penerbit_akhir: "Instansi berwenang sesuai jenis dokumen",
    crossLink: [
      "KB-02",
      "KB-04",
      "KB-06"
    ],
    status: "aktif"
  },

  {
    id: "KB10-SRT-009",
    kategori: "Surat RT",
    nama: "Surat Keterangan Kematian dari RT",
    keywords: [
      "surat kematian",
      "keterangan kematian",
      "warga meninggal",
      "lapor kematian",
      "surat meninggal"
    ],
    questions: [
      "Ayah saya meninggal, bagaimana suratnya?",
      "Bagaimana mendapatkan surat keterangan kematian dari RT?",
      "Apa yang harus dilakukan setelah warga meninggal?"
    ],
    answer:
      "RT dapat membantu memberikan keterangan mengenai warga yang meninggal berdasarkan informasi dan dokumen yang tersedia. Surat atau keterangan dari RT bukan Akta Kematian. Kematian tetap perlu dilaporkan dan dicatat melalui administrasi kependudukan agar Akta Kematian dapat diterbitkan oleh instansi yang berwenang.",
    dokumen_warga: [
      "KTP-el almarhum apabila tersedia",
      "KK",
      "Surat keterangan kematian dari fasilitas kesehatan atau dokumen lain yang relevan"
    ],
    dokumen_rt: [
      "Data warga",
      "Keterangan kematian",
      "Surat pengantar/keterangan sesuai kebutuhan"
    ],
    instansi_tujuan: "Kelurahan/Dukcapil",
    penerbit_akhir: "Dukcapil untuk Akta Kematian",
    crossLink: [
      "KB-01",
      "KB-02",
      "KB-04"
    ],
    status: "aktif"
  },

  {
    id: "KB10-SRT-010",
    kategori: "Surat RT",
    nama: "Surat Pengantar Kematian dan Pemakaman",
    keywords: [
      "pengantar pemakaman",
      "surat pemakaman",
      "pemakaman",
      "pengantar kematian",
      "TPU"
    ],
    questions: [
      "Apa surat untuk pemakaman?",
      "Saya membutuhkan surat pengantar pemakaman",
      "Bagaimana mengurus pemakaman warga?"
    ],
    answer:
      "Untuk pemakaman, RT dapat membantu administrasi dan koordinasi lingkungan sesuai kebutuhan. Dokumen yang dibutuhkan dapat berbeda tergantung lokasi pemakaman dan pengelolanya. Jika pemakaman dilakukan di TPU yang dikelola pemerintah atau pihak tertentu, ikuti persyaratan pengelola TPU.",
    dokumen_warga: [
      "Identitas almarhum apabila tersedia",
      "KK",
      "Dokumen kematian"
    ],
    dokumen_rt: [
      "Keterangan warga",
      "Surat pengantar sesuai kebutuhan"
    ],
    instansi_tujuan: "Pengelola TPU/Kelurahan/Instansi terkait",
    penerbit_akhir: "Instansi atau pengelola yang berwenang",
    crossLink: [
      "KB-04"
    ],
    status: "aktif"
  },

  {
    id: "KB10-SRT-011",
    kategori: "Surat RT",
    nama: "Surat Pengantar Nikah",
    keywords: [
      "pengantar nikah",
      "surat nikah",
      "nikah",
      "KUA",
      "surat RT untuk nikah"
    ],
    questions: [
      "Bagaimana mendapatkan surat pengantar nikah?",
      "Apa yang harus dibawa untuk membuat pengantar nikah?",
      "RT membuat surat nikah?"
    ],
    answer:
      "RT dapat membantu membuat surat pengantar atau keterangan lingkungan untuk keperluan administrasi pernikahan sesuai prosedur setempat. RT bukan pencatat pernikahan. Untuk pernikahan Muslim, pencatatan dilakukan melalui KUA sesuai ketentuan. Untuk keperluan administrasi kependudukan setelah menikah, perubahan data dilakukan melalui instansi kependudukan.",
    dokumen_warga: [
      "KTP-el",
      "KK",
      "Dokumen lain sesuai persyaratan pernikahan"
    ],
    dokumen_rt: [
      "Data warga",
      "Surat pengantar nikah"
    ],
    instansi_tujuan: "Kelurahan/KUA/Instansi terkait",
    penerbit_akhir: "Instansi yang berwenang mencatat atau menerbitkan dokumen",
    crossLink: [
      "KB-01",
      "KB-02",
      "KB-06"
    ],
    status: "aktif"
  },

  {
    id: "KB10-SRT-012",
    kategori: "Surat RT",
    nama: "Surat Pengantar Pindah",
    keywords: [
      "surat pindah",
      "pengantar pindah",
      "pindah rumah",
      "pindah alamat",
      "pindah RT"
    ],
    questions: [
      "Saya mau pindah dari RT",
      "Bagaimana membuat surat pengantar pindah?",
      "Apa yang harus dilakukan kalau pindah rumah?"
    ],
    answer:
      "Jika warga pindah tempat tinggal, RT dapat membantu administrasi lingkungan dan surat pengantar sesuai prosedur yang berlaku. Perubahan alamat resmi pada KTP dan KK mengikuti proses administrasi kependudukan. Jenis proses dapat berbeda tergantung pindah dalam satu wilayah atau ke wilayah lain.",
    dokumen_warga: [
      "KTP-el",
      "KK",
      "Informasi alamat tujuan"
    ],
    dokumen_rt: [
      "Data warga",
      "Surat pengantar/keterangan pindah sesuai kebutuhan"
    ],
    instansi_tujuan: "Kelurahan/Dukcapil",
    penerbit_akhir: "Dukcapil untuk perubahan dokumen kependudukan",
    crossLink: [
      "KB-01",
      "KB-02",
      "KB-05"
    ],
    status: "aktif"
  },

  {
    id: "KB10-SRT-013",
    kategori: "Surat RT",
    nama: "Surat Pengantar Pendatang",
    keywords: [
      "surat pendatang",
      "pendatang",
      "lapor pendatang",
      "warga baru",
      "datang ke RT"
    ],
    questions: [
      "Saya baru tinggal di RT ini",
      "Bagaimana melapor sebagai pendatang?",
      "Apa yang harus dilakukan warga baru?"
    ],
    answer:
      "Warga yang baru tinggal di lingkungan RT sebaiknya melapor kepada pengurus RT agar data lingkungan dapat diperbarui. Status pendatang dan tempat tinggal perlu dicatat sesuai kondisi sebenarnya, misalnya pemilik, kost, kontrak, atau menumpang. Jika memerlukan perubahan alamat resmi, proses dilakukan melalui administrasi kependudukan.",
    dokumen_warga: [
      "KTP-el",
      "KK",
      "Informasi tempat tinggal"
    ],
    dokumen_rt: [
      "Pendataan warga",
      "Keterangan lingkungan apabila diperlukan"
    ],
    instansi_tujuan: "RT/RW/Kelurahan/Dukcapil sesuai kebutuhan",
    penerbit_akhir: "Sesuai jenis dokumen",
    crossLink: [
      "KB-01",
      "KB-02",
      "KB-05"
    ],
    status: "aktif"
  },

  {
    id: "KB10-SRT-014",
    kategori: "Surat RT",
    nama: "Surat Pengantar SKCK",
    keywords: [
      "SKCK",
      "pengantar SKCK",
      "surat SKCK",
      "kepolisian",
      "catatan kepolisian"
    ],
    questions: [
      "Saya mau membuat SKCK",
      "Apakah perlu surat pengantar RT untuk SKCK?",
      "Bagaimana mengurus pengantar SKCK?"
    ],
    answer:
      "Kebutuhan surat pengantar RT untuk SKCK mengikuti ketentuan pelayanan kepolisian dan wilayah yang berlaku. Jika surat dari lingkungan diperlukan, RT dapat membantu sesuai kewenangannya. SKCK bukan diterbitkan oleh RT, melainkan oleh Kepolisian sesuai prosedur yang berlaku.",
    dokumen_warga: [
      "KTP-el",
      "KK",
      "Dokumen lain sesuai persyaratan Kepolisian"
    ],
    dokumen_rt: [
      "Keterangan warga",
      "Surat pengantar apabila memang dipersyaratkan"
    ],
    instansi_tujuan: "Kepolisian",
    penerbit_akhir: "Kepolisian",
    crossLink: [
      "KB-01",
      "KB-02",
      "KB-07"
    ],
    status: "aktif"
  },

  {
    id: "KB10-SRT-015",
    kategori: "Surat RT",
    nama: "Surat Keterangan Kehilangan",
    keywords: [
      "surat kehilangan",
      "kehilangan",
      "barang hilang",
      "KTP hilang",
      "dokumen hilang"
    ],
    questions: [
      "Saya kehilangan dokumen",
      "Apakah RT bisa membuat surat kehilangan?",
      "KTP saya hilang, harus bagaimana?"
    ],
    answer:
      "Jika warga kehilangan dokumen atau barang, kewenangan surat kehilangan harus dibedakan dari keterangan lingkungan RT. Untuk laporan kehilangan yang membutuhkan dokumen resmi Kepolisian, warga perlu membuat laporan kepada Kepolisian sesuai prosedur. RT dapat membantu memberikan keterangan lingkungan apabila memang diperlukan.",
    dokumen_warga: [
      "KTP-el atau identitas lain apabila tersedia",
      "Informasi barang/dokumen yang hilang"
    ],
    dokumen_rt: [
      "Keterangan lingkungan apabila diperlukan"
    ],
    instansi_tujuan: "Kepolisian/Instansi penerbit dokumen",
    penerbit_akhir: "Kepolisian atau instansi yang berwenang",
    crossLink: [
      "KB-01",
      "KB-07"
    ],
    status: "aktif"
  },

  {
    id: "KB10-SRT-016",
    kategori: "Surat RT",
    nama: "Surat Keterangan Keperluan Bank",
    keywords: [
      "surat untuk bank",
      "surat bank",
      "keterangan bank",
      "administrasi bank",
      "pinjaman bank"
    ],
    questions: [
      "Saya membutuhkan surat dari RT untuk bank",
      "Bank meminta surat keterangan RT",
      "Apa syarat surat RT untuk bank?"
    ],
    answer:
      "Jika bank meminta keterangan dari lingkungan, warga perlu menyebutkan jenis surat dan tujuan penggunaannya. RT dapat memberikan keterangan sesuai data yang diketahui dan kewenangannya. RT tidak dapat menjamin kemampuan membayar, kepemilikan aset, atau kebenaran data yang tidak dapat diverifikasi.",
    dokumen_warga: [
      "KTP-el",
      "KK",
      "Informasi tujuan surat",
      "Dokumen pendukung sesuai permintaan bank"
    ],
    dokumen_rt: [
      "Data warga",
      "Keterangan lingkungan"
    ],
    instansi_tujuan: "Bank/Instansi tujuan",
    penerbit_akhir: "RT untuk keterangan lingkungan atau instansi berwenang untuk dokumen resmi lainnya",
    crossLink: [
      "KB-01",
      "KB-02",
      "KB-09"
    ],
    status: "aktif"
  },

  {
    id: "KB10-SRT-017",
    kategori: "Surat RT",
    nama: "Surat Keterangan untuk Sekolah",
    keywords: [
      "surat sekolah",
      "keterangan sekolah",
      "surat domisili sekolah",
      "administrasi sekolah",
      "sekolah"
    ],
    questions: [
      "Sekolah meminta surat dari RT",
      "Saya butuh surat untuk sekolah",
      "Apakah RT bisa membuat surat keterangan sekolah?"
    ],
    answer:
      "Jika sekolah membutuhkan keterangan mengenai tempat tinggal atau keberadaan warga, RT dapat memberikan keterangan sesuai data lingkungan. Namun warga harus menyampaikan tujuan surat secara jelas karena persyaratan sekolah dapat berbeda.",
    dokumen_warga: [
      "KTP-el orang tua/wali",
      "KK",
      "Data anak",
      "Surat atau persyaratan dari sekolah apabila tersedia"
    ],
    dokumen_rt: [
      "Data warga",
      "Keterangan tempat tinggal apabila diperlukan"
    ],
    instansi_tujuan: "Sekolah/Kelurahan/Instansi pendidikan sesuai kebutuhan",
    penerbit_akhir: "Sesuai jenis dokumen",
    crossLink: [
      "KB-02",
      "KB-03",
      "KB-08"
    ],
    status: "aktif"
  },

  {
    id: "KB10-SRT-018",
    kategori: "Surat RT",
    nama: "Surat Keterangan untuk Bantuan Sosial",
    keywords: [
      "surat bansos",
      "surat bantuan",
      "bantuan sosial",
      "keterangan bansos",
      "bansos"
    ],
    questions: [
      "Saya perlu surat untuk bantuan sosial",
      "Bagaimana meminta keterangan RT untuk bansos?",
      "Data saya belum masuk bantuan sosial"
    ],
    answer:
      "RT dapat membantu memberikan keterangan atau melakukan pendataan lingkungan sesuai program yang sedang berjalan. Penerima bantuan sosial ditentukan berdasarkan mekanisme dan data program yang berlaku, sehingga surat dari RT tidak otomatis menjamin seseorang mendapatkan bantuan.",
    dokumen_warga: [
      "KTP-el",
      "KK",
      "Dokumen pendukung sesuai program"
    ],
    dokumen_rt: [
      "Data keluarga",
      "Keterangan kondisi lingkungan"
    ],
    instansi_tujuan: "Kelurahan/Instansi sosial/Program bantuan terkait",
    penerbit_akhir: "Instansi/program yang berwenang",
    crossLink: [
      "KB-02",
      "KB-08"
    ],
    status: "aktif"
  },

  {
    id: "KB10-SRT-019",
    kategori: "Surat RT",
    nama: "Surat Keterangan Tinggal di Kost",
    keywords: [
      "surat kost",
      "keterangan kost",
      "tinggal di kost",
      "anak kost",
      "penghuni kost"
    ],
    questions: [
      "Saya tinggal di kost dan perlu surat",
      "Apakah RT bisa memberikan surat untuk penghuni kost?",
      "Bagaimana administrasi warga kost?"
    ],
    answer:
      "Penghuni kost sebaiknya terdata di lingkungan RT sesuai kondisi tempat tinggalnya. Jika diperlukan surat keterangan tinggal di kost, RT dapat memberikan keterangan berdasarkan data yang diketahui dan informasi dari pemilik atau pengelola kost. Surat tersebut tidak otomatis mengubah alamat KTP atau KK.",
    dokumen_warga: [
      "KTP-el",
      "KK",
      "Informasi tempat kost"
    ],
    dokumen_rt: [
      "Data penghuni kost",
      "Data tempat kost",
      "Keterangan lingkungan"
    ],
    instansi_tujuan: "RT/Kelurahan/Instansi tujuan",
    penerbit_akhir: "Sesuai tujuan dokumen",
    crossLink: [
      "KB-02",
      "KB-05",
      "KB-09"
    ],
    status: "aktif"
  },

  {
    id: "KB10-SRT-020",
    kategori: "Surat RT",
    nama: "Surat Keterangan untuk Warga Pendatang",
    keywords: [
      "surat pendatang",
      "warga pendatang",
      "keterangan pendatang",
      "pendatang baru",
      "warga baru"
    ],
    questions: [
      "Saya warga pendatang dan membutuhkan surat",
      "Apakah warga pendatang bisa mendapat surat RT?",
      "Saya baru tinggal di sini tetapi KTP masih alamat lama"
    ],
    answer:
      "Warga pendatang dapat didata oleh RT sesuai kondisi tempat tinggal sebenarnya. Jika membutuhkan surat keterangan lingkungan, RT dapat memberikan keterangan berdasarkan data yang dimiliki. Namun status pendatang di lingkungan tidak otomatis berarti alamat KTP telah berubah.",
    dokumen_warga: [
      "KTP-el",
      "KK",
      "Informasi tempat tinggal"
    ],
    dokumen_rt: [
      "Data pendatang",
      "Keterangan lingkungan"
    ],
    instansi_tujuan: "RT/RW/Kelurahan/Instansi tujuan",
    penerbit_akhir: "Sesuai jenis dokumen",
    crossLink: [
      "KB-01",
      "KB-02",
      "KB-05"
    ],
    status: "aktif"
  },

  {
    id: "KB10-SRT-021",
    kategori: "Surat RT",
    nama: "Surat Keterangan Ahli Waris atau Keluarga",
    keywords: [
      "ahli waris",
      "surat waris",
      "keterangan keluarga",
      "hubungan keluarga",
      "warisan"
    ],
    questions: [
      "Saya perlu surat ahli waris",
      "Apakah RT bisa membuat surat ahli waris?",
      "Bagaimana mengurus keterangan ahli waris?"
    ],
    answer:
      "Keterangan ahli waris memiliki konsekuensi hukum dan tidak boleh dibuat berdasarkan perkiraan. RT dapat memberikan keterangan lingkungan atau data keluarga sejauh dapat diverifikasi, tetapi penetapan atau pengesahan ahli waris mengikuti ketentuan dan mekanisme hukum yang berlaku.",
    dokumen_warga: [
      "KTP-el para pihak",
      "KK",
      "Dokumen kematian apabila relevan",
      "Dokumen keluarga/waris yang tersedia"
    ],
    dokumen_rt: [
      "Data keluarga",
      "Keterangan lingkungan apabila diperlukan"
    ],
    instansi_tujuan: "Kelurahan/Notaris/Pengadilan/Instansi berwenang sesuai kebutuhan",
    penerbit_akhir: "Instansi atau pejabat yang berwenang",
    crossLink: [
      "KB-02",
      "KB-04",
      "KB-09"
    ],
    status: "aktif"
  },

  {
    id: "KB10-SRT-022",
    kategori: "Surat RT",
    nama: "Surat Keterangan Pengantar untuk Administrasi Kependudukan",
    keywords: [
      "pengantar dukcapil",
      "surat dukcapil",
      "administrasi kependudukan",
      "pengantar KTP",
      "pengantar KK"
    ],
    questions: [
      "Saya perlu surat pengantar untuk Dukcapil",
      "Bagaimana mengurus pengantar KTP atau KK?",
      "RT bisa membuat pengantar Dukcapil?"
    ],
    answer:
      "Untuk keperluan administrasi kependudukan, RT dapat membantu memberikan surat pengantar atau keterangan lingkungan apabila memang menjadi bagian dari prosedur setempat. Dokumen resmi seperti KTP-el, KK, Akta Kelahiran, dan Akta Kematian diterbitkan oleh instansi kependudukan yang berwenang, bukan RT.",
    dokumen_warga: [
      "KTP-el apabila tersedia",
      "KK",
      "Dokumen pendukung sesuai layanan"
    ],
    dokumen_rt: [
      "Data warga",
      "Surat pengantar/keterangan sesuai keperluan"
    ],
    instansi_tujuan: "Kelurahan/Dukcapil",
    penerbit_akhir: "Dukcapil untuk dokumen kependudukan",
    crossLink: [
      "KB-01",
      "KB-02",
      "KB-03",
      "KB-04",
      "KB-05"
    ],
    status: "aktif"
  },

  {
    id: "KB10-SRT-023",
    kategori: "Surat RT",
    nama: "Surat Keterangan untuk Keperluan Pekerjaan",
    keywords: [
      "surat kerja",
      "surat untuk pekerjaan",
      "keterangan kerja",
      "lamaran kerja",
      "administrasi pekerjaan"
    ],
    questions: [
      "Saya butuh surat dari RT untuk pekerjaan",
      "Perusahaan meminta surat keterangan RT",
      "Apa yang harus dibawa untuk surat kerja?"
    ],
    answer:
      "Jika perusahaan meminta keterangan lingkungan, RT dapat memberikan keterangan sesuai data warga dan tujuan surat. Namun surat pengalaman kerja, surat keterangan bekerja, atau keterangan penghasilan dari perusahaan harus diterbitkan oleh pihak yang memang mengetahui dan berwenang menerbitkannya.",
    dokumen_warga: [
      "KTP-el",
      "KK",
      "Permintaan atau format dari perusahaan apabila tersedia"
    ],
    dokumen_rt: [
      "Data warga",
      "Keterangan lingkungan"
    ],
    instansi_tujuan: "Perusahaan/Instansi tujuan",
    penerbit_akhir: "Sesuai jenis keterangan",
    crossLink: [
      "KB-01",
      "KB-05",
      "KB-09"
    ],
    status: "aktif"
  },

  {
    id: "KB10-SRT-024",
    kategori: "Surat RT",
    nama: "Surat Keterangan Tidak Memiliki Rumah atau Tempat Tinggal",
    keywords: [
      "tidak punya rumah",
      "tidak memiliki rumah",
      "tempat tinggal",
      "keterangan tempat tinggal",
      "tinggal bersama"
    ],
    questions: [
      "Saya tidak memiliki rumah sendiri",
      "Saya tinggal menumpang dan perlu surat",
      "Bagaimana membuat keterangan tempat tinggal?"
    ],
    answer:
      "Keterangan tempat tinggal harus menjelaskan kondisi sebenarnya, misalnya tinggal bersama keluarga, menumpang, kost, atau kontrak. RT dapat memberikan keterangan lingkungan berdasarkan data yang diketahui. Surat tersebut tidak boleh menyatakan kepemilikan rumah apabila warga memang tidak memiliki rumah.",
    dokumen_warga: [
      "KTP-el",
      "KK",
      "Informasi tempat tinggal"
    ],
    dokumen_rt: [
      "Data tempat tinggal",
      "Keterangan lingkungan"
    ],
    instansi_tujuan: "RT/Kelurahan/Instansi tujuan",
    penerbit_akhir: "Sesuai tujuan dokumen",
    crossLink: [
      "KB-02",
      "KB-05"
    ],
    status: "aktif"
  },

  {
    id: "KB10-SRT-025",
    kategori: "Surat RT",
    nama: "Permintaan Surat dengan Format dari Instansi",
    keywords: [
      "format surat",
      "surat dari perusahaan",
      "format bank",
      "format sekolah",
      "format instansi"
    ],
    questions: [
      "Instansi memberi format surat, apakah RT bisa mengisi?",
      "Saya punya formulir dari bank",
      "Perusahaan memberikan format surat RT"
    ],
    answer:
      "Jika warga membawa format surat dari instansi, format tersebut perlu diperiksa terlebih dahulu. RT hanya dapat mengisi atau menerbitkan bagian yang memang sesuai kewenangannya dan berdasarkan data yang benar. RT tidak boleh mengesahkan pernyataan yang tidak dapat diverifikasi atau bukan kewenangannya.",
    dokumen_warga: [
      "KTP-el",
      "KK",
      "Formulir/format dari instansi"
    ],
    dokumen_rt: [
      "Data warga",
      "Keterangan sesuai kewenangan RT"
    ],
    instansi_tujuan: "Instansi yang meminta surat",
    penerbit_akhir: "Sesuai jenis dokumen",
    crossLink: [],
    status: "aktif"
  },

  {
    id: "KB10-SRT-026",
    kategori: "Surat RT",
    nama: "Surat Keterangan Warga Aktif",
    keywords: [
      "warga aktif",
      "keterangan warga",
      "status warga",
      "warga RT",
      "surat warga"
    ],
    questions: [
      "Saya perlu surat bahwa saya warga RT",
      "Apakah RT bisa membuat keterangan warga?",
      "Saya membutuhkan bukti sebagai warga RT"
    ],
    answer:
      "RT dapat memberikan keterangan mengenai warga yang tercatat dan tinggal di lingkungan RT sesuai data administrasi yang dimiliki. Keterangan tersebut harus sesuai kondisi sebenarnya dan tidak boleh digunakan untuk menyatakan status resmi yang hanya dapat ditetapkan oleh instansi lain.",
    dokumen_warga: [
      "KTP-el",
      "KK"
    ],
    dokumen_rt: [
      "Data warga",
      "Keterangan status tinggal"
    ],
    instansi_tujuan: "RT/Instansi tujuan",
    penerbit_akhir: "RT untuk keterangan lingkungan sesuai kewenangan",
    crossLink: [
      "KB-01",
      "KB-02",
      "KB-05"
    ],
    status: "aktif"
  },

  {
    id: "KB10-SRT-027",
    kategori: "Surat RT",
    nama: "Permohonan Surat untuk Keperluan Khusus",
    keywords: [
      "surat lainnya",
      "surat khusus",
      "keperluan surat",
      "minta surat",
      "surat RT lainnya"
    ],
    questions: [
      "Saya butuh surat tetapi tidak tahu jenisnya",
      "Bisa minta surat RT untuk keperluan lain?",
      "Saya diminta surat dari RT"
    ],
    answer:
      "Jika warga belum mengetahui nama surat yang diperlukan, jangan langsung membuat surat. Tanyakan terlebih dahulu: surat tersebut untuk siapa, untuk keperluan apa, instansi mana yang meminta, dan apakah instansi memberikan format tertentu. Setelah tujuan diketahui, tentukan apakah RT memang berwenang memberikan surat tersebut atau warga harus memperoleh dokumen dari instansi lain.",
    dokumen_warga: [
      "KTP-el",
      "KK",
      "Permintaan atau format dari instansi apabila tersedia"
    ],
    dokumen_rt: [
      "Data warga",
      "Keterangan sesuai kewenangan"
    ],
    instansi_tujuan: "Ditentukan berdasarkan tujuan surat",
    penerbit_akhir: "Ditentukan berdasarkan jenis dokumen",
    crossLink: [
      "KB-01",
      "KB-02",
      "KB-05",
      "KB-06",
      "KB-07",
      "KB-08",
      "KB-09"
    ],
    status: "aktif"
  },

  {
    id: "KB10-RULE",
    kategori: "Surat RT",
    nama: "Aturan Umum Pembuatan Surat RT",
    keywords: [
      "aturan surat RT",
      "surat RT",
      "kewenangan RT",
      "jenis surat",
      "pembuatan surat"
    ],
    questions: [
      "Surat apa saja yang bisa dibuat RT?",
      "Apakah RT bisa membuat semua surat?",
      "Bagaimana menentukan jenis surat yang benar?"
    ],
    answer:
      "RT hanya memberikan surat, pengantar, atau keterangan sesuai kewenangannya dan berdasarkan data yang benar. RT bukan penerbit KTP-el, KK, Akta Kelahiran, Akta Kematian, SKCK, sertifikat tanah, PBG, NIB, surat keterangan medis, atau dokumen resmi lain yang menjadi kewenangan instansi berbeda. Jika warga meminta surat tetapi belum jelas jenisnya, AI harus menanyakan tujuan surat, instansi yang meminta, kondisi warga, dan apakah ada format resmi dari instansi tersebut.",
    instansi_tujuan:
      "RT/RW/Kelurahan/Dukcapil/Kepolisian/KUA/Instansi lain sesuai kebutuhan",
    penerbit_akhir:
      "Instansi yang memiliki kewenangan menerbitkan dokumen tersebut",
    crossLink: [
      "KB-01",
      "KB-02",
      "KB-03",
      "KB-04",
      "KB-05",
      "KB-06",
      "KB-07",
      "KB-08",
      "KB-09"
    ],
    status: "aktif"
  }
];