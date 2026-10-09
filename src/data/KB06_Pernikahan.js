// =========================================================
// KB-06 — PERNIKAHAN & PERCERAIAN
// RT 03 / RW 07 Karet - Setiabudi
// =========================================================

export const KB06_Pernikahan = [
  {
    id: "KB06-NIK-001",
    kategori: "Pernikahan",
    nama: "Mengurus Administrasi Pernikahan",
    keywords: [
      "menikah",
      "mau menikah",
      "administrasi nikah",
      "syarat nikah",
      "surat nikah"
    ],
    questions: [
      "Saya mau menikah, apa yang harus disiapkan?",
      "Bagaimana mengurus administrasi pernikahan?",
      "Apa saja syarat menikah?"
    ],
    answer:
      "Administrasi pernikahan perlu disesuaikan dengan status dan kondisi calon pengantin. Untuk pernikahan umat Islam yang dicatat melalui KUA, calon pengantin perlu mengikuti prosedur pencatatan pernikahan yang berlaku. RT dapat membantu surat atau keterangan lingkungan apabila memang diperlukan, tetapi RT bukan penerbit buku nikah atau dokumen pencatatan perkawinan.",
    dokumen_warga: [
      "KTP-el",
      "KK",
      "Dokumen persyaratan perkawinan sesuai ketentuan",
      "Dokumen calon pasangan sesuai kebutuhan"
    ],
    dokumen_rt: [
      "Surat pengantar/keterangan RT apabila diperlukan"
    ],
    instansi_tujuan: "KUA/Dukcapil sesuai jenis perkawinan dan kebutuhan administrasi",
    penerbit_akhir: "Instansi pencatat perkawinan sesuai ketentuan",
    crossLink: ["KB-01", "KB-02", "KB-10"],
    status: "aktif"
  },

  {
    id: "KB06-NIK-002",
    kategori: "Pernikahan",
    nama: "Surat Pengantar Nikah dari RT",
    keywords: [
      "surat pengantar nikah",
      "pengantar nikah RT",
      "surat nikah RT",
      "pengantar KUA",
      "surat pengantar perkawinan"
    ],
    questions: [
      "Apakah RT membuat surat pengantar nikah?",
      "Bagaimana meminta surat pengantar nikah?",
      "Saya perlu surat pengantar untuk KUA"
    ],
    answer:
      "RT dapat membantu surat pengantar atau keterangan lingkungan apabila diperlukan dalam proses administrasi pernikahan. Jenis surat yang diperlukan harus disesuaikan dengan tujuan dan prosedur Kelurahan/KUA. RT bukan pihak yang mencatat atau menerbitkan dokumen perkawinan resmi.",
    dokumen_warga: [
      "KTP-el",
      "KK",
      "Data calon pasangan"
    ],
    dokumen_rt: [
      "Data warga",
      "Surat pengantar/keterangan sesuai kebutuhan"
    ],
    instansi_tujuan: "RT/Kelurahan/KUA",
    penerbit_akhir: "KUA untuk pencatatan perkawinan Islam sesuai kewenangan",
    crossLink: ["KB-10"],
    status: "aktif"
  },

  {
    id: "KB06-NIK-003",
    kategori: "Pernikahan",
    nama: "Pernikahan di KUA",
    keywords: [
      "nikah di KUA",
      "menikah KUA",
      "pencatatan nikah KUA",
      "daftar nikah KUA",
      "KUA"
    ],
    questions: [
      "Bagaimana proses menikah di KUA?",
      "Saya mau daftar nikah di KUA",
      "Apa yang harus disiapkan untuk nikah di KUA?"
    ],
    answer:
      "Untuk pernikahan umat Islam yang akan dicatat di KUA, calon pengantin mengikuti prosedur pencatatan pernikahan yang berlaku. Persyaratan dan dokumen perlu disiapkan sesuai ketentuan KUA/Kementerian Agama. RT dapat membantu administrasi lingkungan apabila dibutuhkan dalam rangkaian proses tersebut.",
    dokumen_warga: [
      "KTP-el",
      "KK",
      "Dokumen persyaratan perkawinan sesuai ketentuan"
    ],
    dokumen_rt: [
      "Surat pengantar/keterangan apabila diperlukan"
    ],
    instansi_tujuan: "KUA",
    penerbit_akhir: "KUA untuk pencatatan perkawinan Islam",
    crossLink: ["KB-01", "KB-02"],
    status: "aktif"
  },

  {
    id: "KB06-NIK-004",
    kategori: "Pernikahan",
    nama: "Pernikahan di Luar KUA atau di Luar Waktu Pelayanan",
    keywords: [
      "nikah di luar KUA",
      "nikah di rumah",
      "nikah di gedung",
      "nikah di luar jam",
      "akad nikah di luar KUA"
    ],
    questions: [
      "Bisa menikah di luar KUA?",
      "Saya ingin akad nikah di rumah",
      "Bagaimana jika akad dilakukan di luar jam pelayanan?"
    ],
    answer:
      "Pernikahan dapat memiliki lokasi atau kondisi pelaksanaan tertentu sesuai ketentuan pencatatan perkawinan. Jika calon pengantin ingin akad di luar kantor KUA atau pada waktu tertentu, tanyakan prosedur dan persyaratan kepada KUA tempat pencatatan dilakukan. Jangan menganggap semua lokasi atau waktu otomatis bebas dari persyaratan administrasi.",
    dokumen_warga: [
      "KTP-el",
      "KK",
      "Dokumen perkawinan sesuai ketentuan"
    ],
    dokumen_rt: [
      "Keterangan lingkungan apabila diperlukan"
    ],
    instansi_tujuan: "KUA",
    penerbit_akhir: "KUA sesuai kewenangan",
    crossLink: ["KB-10"],
    status: "aktif"
  },

  {
    id: "KB06-NIK-005",
    kategori: "Pernikahan",
    nama: "Pernikahan Pindah Tempat",
    keywords: [
      "pindah nikah",
      "nikah di tempat lain",
      "akad di luar wilayah",
      "menikah di kota lain",
      "pencatatan nikah luar wilayah"
    ],
    questions: [
      "Saya tinggal di RT 03 tetapi menikah di tempat lain",
      "Bolehkah menikah di luar wilayah?",
      "Bagaimana administrasi nikah di daerah lain?"
    ],
    answer:
      "Jika calon pengantin akan melangsungkan atau mencatatkan perkawinan di wilayah yang berbeda dari tempat tinggal, calon pengantin perlu mengikuti prosedur KUA atau instansi pencatat perkawinan yang berwenang. Dokumen pengantar atau administrasi dari wilayah asal dapat diperlukan tergantung kondisi.",
    dokumen_warga: [
      "KTP-el",
      "KK",
      "Dokumen persyaratan perkawinan",
      "Dokumen perpindahan/pengantar apabila diperlukan"
    ],
    dokumen_rt: [
      "Surat pengantar/keterangan apabila diperlukan"
    ],
    instansi_tujuan: "KUA/Instansi pencatat perkawinan",
    penerbit_akhir: "Instansi pencatat perkawinan sesuai kewenangan",
    crossLink: ["KB-05", "KB-10"],
    status: "aktif"
  },

  {
    id: "KB06-NIK-006",
    kategori: "Pernikahan",
    nama: "Pernikahan WNI dengan WNI",
    keywords: [
      "nikah WNI",
      "pernikahan WNI",
      "calon suami WNI",
      "calon istri WNI",
      "nikah sesama WNI"
    ],
    questions: [
      "Saya dan pasangan sama-sama WNI",
      "Apa syarat menikah sesama WNI?",
      "Bagaimana administrasi pernikahan WNI?"
    ],
    answer:
      "Jika kedua calon pengantin merupakan WNI, proses administrasi perkawinan mengikuti ketentuan pencatatan perkawinan yang berlaku sesuai agama dan instansi pencatatnya. Untuk umat Islam, pencatatan perkawinan dilakukan melalui KUA sesuai kewenangan. RT dapat membantu administrasi lingkungan apabila diperlukan.",
    dokumen_warga: [
      "KTP-el kedua calon",
      "KK",
      "Dokumen persyaratan perkawinan sesuai ketentuan"
    ],
    dokumen_rt: [
      "Keterangan/pengantar apabila diperlukan"
    ],
    instansi_tujuan: "KUA atau instansi pencatat perkawinan sesuai agama",
    penerbit_akhir: "Instansi pencatat perkawinan",
    crossLink: ["KB-01", "KB-02"],
    status: "aktif"
  },

  {
    id: "KB06-NIK-007",
    kategori: "Pernikahan",
    nama: "Pernikahan WNI dengan WNA",
    keywords: [
      "nikah WNA",
      "WNI menikah WNA",
      "pernikahan campuran",
      "nikah dengan warga asing",
      "perkawinan campuran"
    ],
    questions: [
      "Saya WNI mau menikah dengan WNA",
      "Bagaimana syarat menikah dengan warga asing?",
      "Apa yang harus disiapkan untuk perkawinan WNI-WNA?"
    ],
    answer:
      "Perkawinan antara WNI dan WNA memiliki persyaratan tambahan dibandingkan perkawinan antara sesama WNI. Dokumen pasangan WNA dan persyaratan dari negara asal dapat diperlukan. Karena prosedurnya dapat melibatkan pencatatan perkawinan dan dokumen keimigrasian, calon pasangan sebaiknya meminta daftar persyaratan terbaru dari instansi pencatat perkawinan dan instansi terkait.",
    dokumen_warga: [
      "KTP-el WNI",
      "KK",
      "Paspor/dokumen identitas pasangan WNA",
      "Dokumen perkawinan sesuai ketentuan"
    ],
    dokumen_rt: [
      "Keterangan lingkungan apabila diperlukan"
    ],
    instansi_tujuan: "KUA/Dukcapil/Instansi terkait",
    penerbit_akhir: "Instansi pencatat perkawinan sesuai kewenangan",
    crossLink: ["KB-01", "KB-05"],
    status: "aktif"
  },

  {
    id: "KB06-NIK-008",
    kategori: "Pernikahan",
    nama: "Surat Keterangan Belum Menikah",
    keywords: [
      "surat belum menikah",
      "belum menikah",
      "surat keterangan belum kawin",
      "belum kawin",
      "status belum menikah"
    ],
    questions: [
      "Saya butuh surat belum menikah",
      "Bagaimana mendapatkan surat keterangan belum menikah?",
      "Apakah RT bisa membuat surat belum menikah?"
    ],
    answer:
      "Jika warga membutuhkan surat keterangan belum menikah atau belum kawin, tujuan penggunaan surat perlu diketahui terlebih dahulu. RT dapat memberikan keterangan berdasarkan data lingkungan sesuai kewenangannya apabila diperlukan, tetapi dokumen resmi mengenai status perkawinan dapat berasal dari administrasi kependudukan atau instansi lain sesuai tujuan.",
    dokumen_warga: [
      "KTP-el",
      "KK",
      "Dokumen pendukung sesuai tujuan"
    ],
    dokumen_rt: [
      "Keterangan status warga berdasarkan data RT"
    ],
    instansi_tujuan: "RT/Kelurahan/Dukcapil/Instansi tujuan",
    penerbit_akhir: "Sesuai jenis dokumen",
    crossLink: ["KB-01", "KB-02", "KB-10"],
    status: "aktif"
  },

  {
    id: "KB06-NIK-009",
    kategori: "Pernikahan",
    nama: "Pernikahan Siri atau Belum Tercatat",
    keywords: [
      "nikah siri",
      "nikah tidak tercatat",
      "pernikahan belum tercatat",
      "status nikah siri",
      "belum ada buku nikah"
    ],
    questions: [
      "Saya sudah nikah siri tetapi belum tercatat",
      "Bagaimana mengurus pernikahan yang belum tercatat?",
      "Nikah sudah dilakukan tetapi belum ada dokumen resmi"
    ],
    answer:
      "Pernikahan yang belum tercatat perlu dibedakan dari perkawinan yang sudah tercatat secara resmi. Untuk menentukan langkah administrasi yang tepat, perlu diketahui kondisi perkawinan dan dokumen yang dimiliki. Dalam kondisi tertentu, pengesahan atau penetapan perkawinan melalui Pengadilan Agama dapat menjadi bagian dari proses sebelum pembaruan administrasi kependudukan.",
    dokumen_warga: [
      "KTP-el",
      "KK",
      "Bukti atau dokumen perkawinan yang tersedia"
    ],
    dokumen_rt: [
      "Keterangan lingkungan apabila diperlukan"
    ],
    instansi_tujuan: "Pengadilan Agama/KUA/Dukcapil sesuai kondisi",
    penerbit_akhir: "Instansi berwenang sesuai proses",
    crossLink: ["KB-02"],
    status: "aktif"
  },

  {
    id: "KB06-NIK-010",
    kategori: "Pernikahan",
    nama: "Isbat Nikah",
    keywords: [
      "isbat nikah",
      "itsbat nikah",
      "pengesahan nikah",
      "nikah belum tercatat",
      "pengadilan agama nikah"
    ],
    questions: [
      "Apa itu isbat nikah?",
      "Bagaimana mengurus isbat nikah?",
      "Saya tidak punya buku nikah, apakah perlu isbat?"
    ],
    answer:
      "Isbat nikah merupakan proses penetapan perkawinan oleh Pengadilan Agama dalam kondisi yang memenuhi ketentuan. Setelah memperoleh penetapan yang diperlukan, warga dapat melanjutkan proses pencatatan atau pembaruan administrasi kependudukan sesuai prosedur. RT bukan pihak yang menetapkan isbat nikah.",
    dokumen_warga: [
      "KTP-el",
      "KK",
      "Bukti perkawinan yang tersedia",
      "Dokumen lain sesuai permintaan Pengadilan Agama"
    ],
    dokumen_rt: [
      "Keterangan lingkungan apabila diperlukan"
    ],
    instansi_tujuan: "Pengadilan Agama lalu KUA/Dukcapil sesuai kebutuhan",
    penerbit_akhir: "Pengadilan Agama untuk penetapan; instansi terkait untuk pencatatan",
    crossLink: ["KB-02"],
    status: "aktif"
  },

  {
    id: "KB06-NIK-011",
    kategori: "Pernikahan",
    nama: "Pernikahan di Luar Negeri",
    keywords: [
      "nikah luar negeri",
      "menikah di luar negeri",
      "perkawinan luar negeri",
      "WNI nikah luar negeri",
      "lapor perkawinan luar negeri"
    ],
    questions: [
      "Saya menikah di luar negeri",
      "Bagaimana mencatat perkawinan luar negeri?",
      "WNI menikah di luar negeri harus lapor ke mana?"
    ],
    answer:
      "WNI yang melangsungkan perkawinan di luar negeri perlu memperhatikan pencatatan perkawinan di negara tempat perkawinan dan kewajiban pelaporan kepada instansi Indonesia sesuai ketentuan. Karena prosedurnya dapat melibatkan Perwakilan RI dan Dukcapil, warga perlu mengikuti persyaratan yang berlaku pada kasusnya.",
    dokumen_warga: [
      "KTP-el",
      "KK",
      "Dokumen perkawinan dari negara tempat menikah",
      "Dokumen pendukung sesuai ketentuan"
    ],
    dokumen_rt: [
      "Keterangan lingkungan apabila diperlukan"
    ],
    instansi_tujuan: "Perwakilan RI/Dukcapil/Instansi terkait",
    penerbit_akhir: "Instansi berwenang sesuai jenis pencatatan",
    crossLink: ["KB-01", "KB-02"],
    status: "aktif"
  },

  {
    id: "KB06-NIK-012",
    kategori: "KK",
    nama: "KK Setelah Menikah",
    keywords: [
      "KK setelah menikah",
      "buat KK setelah nikah",
      "KK pasangan baru",
      "KK suami istri",
      "KK baru menikah"
    ],
    questions: [
      "Setelah menikah bagaimana membuat KK?",
      "Apakah harus membuat KK baru setelah menikah?",
      "Bagaimana susunan KK setelah menikah?"
    ],
    answer:
      "Setelah perkawinan tercatat, susunan administrasi keluarga perlu disesuaikan dengan kondisi keluarga. Apakah pasangan membuat KK baru atau masuk ke KK tertentu bergantung pada kondisi keluarga dan domisili. Proses perubahan KK dilakukan melalui administrasi kependudukan, bukan oleh RT.",
    dokumen_warga: [
      "KTP-el",
      "KK",
      "Dokumen perkawinan"
    ],
    dokumen_rt: [
      "Surat pengantar/keterangan apabila diperlukan"
    ],
    instansi_tujuan: "Kelurahan/Dukcapil",
    penerbit_akhir: "Dukcapil",
    crossLink: ["KB-02"],
    status: "aktif"
  },

  {
    id: "KB06-NIK-013",
    kategori: "KK",
    nama: "Memasukkan Pasangan ke KK",
    keywords: [
      "masukkan istri ke KK",
      "masukkan suami ke KK",
      "pasangan masuk KK",
      "gabung KK setelah nikah",
      "pasangan belum masuk KK"
    ],
    questions: [
      "Istri saya belum masuk KK",
      "Suami saya belum masuk KK",
      "Bagaimana memasukkan pasangan ke KK?"
    ],
    answer:
      "Jika pasangan sudah menikah secara tercatat tetapi belum tercantum pada KK yang sesuai, data keluarga perlu diperbarui melalui administrasi kependudukan. Dokumen perkawinan dan dokumen kependudukan pasangan perlu disiapkan sesuai ketentuan.",
    dokumen_warga: [
      "KTP-el kedua pasangan",
      "KK",
      "Dokumen perkawinan"
    ],
    dokumen_rt: [
      "Keterangan/pengantar apabila diperlukan"
    ],
    instansi_tujuan: "Kelurahan/Dukcapil",
    penerbit_akhir: "Dukcapil",
    crossLink: ["KB-02"],
    status: "aktif"
  },

  {
    id: "KB06-NIK-014",
    kategori: "Pernikahan",
    nama: "Perubahan KTP Setelah Menikah",
    keywords: [
      "KTP setelah menikah",
      "ubah KTP setelah nikah",
      "status kawin di KTP",
      "perubahan status perkawinan",
      "KTP menikah"
    ],
    questions: [
      "Apakah KTP harus diubah setelah menikah?",
      "Bagaimana mengubah status perkawinan di KTP?",
      "Saya sudah menikah tetapi data KTP belum berubah"
    ],
    answer:
      "Setelah perkawinan tercatat, data administrasi kependudukan perlu disesuaikan dengan status perkawinan yang sebenarnya. Perubahan data dilakukan melalui administrasi kependudukan. RT dapat membantu surat atau keterangan apabila diperlukan, tetapi RT bukan penerbit KTP.",
    dokumen_warga: [
      "KTP-el",
      "KK",
      "Dokumen perkawinan"
    ],
    dokumen_rt: [
      "Keterangan/pengantar apabila diperlukan"
    ],
    instansi_tujuan: "Kelurahan/Dukcapil",
    penerbit_akhir: "Dukcapil",
    crossLink: ["KB-01", "KB-02"],
    status: "aktif"
  },

  {
    id: "KB06-NIK-015",
    kategori: "Perceraian",
    nama: "Mengurus Administrasi Setelah Perceraian",
    keywords: [
      "cerai",
      "perceraian",
      "setelah cerai",
      "status cerai",
      "administrasi perceraian"
    ],
    questions: [
      "Saya sudah bercerai, apa yang harus dilakukan?",
      "Bagaimana memperbarui data setelah cerai?",
      "Setelah cerai bagaimana KK dan KTP?"
    ],
    answer:
      "Setelah perceraian memperoleh kekuatan hukum sesuai ketentuan, data administrasi kependudukan perlu diperbarui agar status perkawinan dan susunan keluarga sesuai keadaan sebenarnya. Perubahan KK, KTP, dan data keluarga dilakukan melalui instansi administrasi kependudukan yang berwenang.",
    dokumen_warga: [
      "KTP-el",
      "KK",
      "Dokumen atau putusan/akta perceraian sesuai ketentuan"
    ],
    dokumen_rt: [
      "Keterangan/pengantar apabila diperlukan",
      "Pembaruan data lingkungan"
    ],
    instansi_tujuan: "Pengadilan/Kelurahan/Dukcapil sesuai proses",
    penerbit_akhir: "Instansi berwenang sesuai jenis dokumen",
    crossLink: ["KB-01", "KB-02", "KB-05"],
    status: "aktif"
  },

  {
    id: "KB06-NIK-016",
    kategori: "Perceraian",
    nama: "KK Setelah Perceraian",
    keywords: [
      "KK setelah cerai",
      "KK cerai",
      "buat KK setelah cerai",
      "KK mantan suami",
      "KK mantan istri"
    ],
    questions: [
      "Bagaimana KK setelah cerai?",
      "Saya bercerai dan ingin membuat KK sendiri",
      "Mantan suami keluar dari KK"
    ],
    answer:
      "Setelah perceraian, susunan KK perlu disesuaikan dengan keadaan keluarga. Jika salah satu pihak tidak lagi tinggal bersama atau membentuk keluarga sendiri, data KK dapat diproses sesuai kondisi administratif masing-masing. RT dapat membantu data lingkungan, tetapi penerbitan KK dilakukan oleh Dukcapil.",
    dokumen_warga: [
      "KTP-el",
      "KK",
      "Dokumen perceraian"
    ],
    dokumen_rt: [
      "Keterangan tempat tinggal",
      "Pembaruan data warga"
    ],
    instansi_tujuan: "Kelurahan/Dukcapil",
    penerbit_akhir: "Dukcapil",
    crossLink: ["KB-02", "KB-05"],
    status: "aktif"
  },

  {
    id: "KB06-NIK-017",
    kategori: "Perceraian",
    nama: "Suami Pindah dan Istri Menjadi Kepala Keluarga",
    keywords: [
      "istri menjadi kepala keluarga",
      "suami pindah",
      "mantan suami pindah",
      "kepala keluarga setelah cerai",
      "istri kepala keluarga"
    ],
    questions: [
      "Suami sudah pindah dan saya menjadi kepala keluarga",
      "Setelah cerai apakah istri bisa menjadi kepala keluarga?",
      "Mantan suami sudah tidak tinggal di RT"
    ],
    answer:
      "Jika terjadi perceraian dan suami sudah tidak tinggal di RT 03, kondisi keluarga perlu diperbarui berdasarkan keadaan sebenarnya. Dalam kondisi tertentu, perempuan dapat tercatat sebagai Kepala Keluarga sesuai ketentuan administrasi kependudukan. Data internal RT juga harus mengikuti keadaan tempat tinggal aktual. Nomor urut KK internal RT tidak boleh dijadikan dasar untuk menentukan siapa Kepala Keluarga.",
    dokumen_warga: [
      "KTP-el",
      "KK",
      "Dokumen perceraian",
      "Dokumen perpindahan apabila diperlukan"
    ],
    dokumen_rt: [
      "Pembaruan data warga",
      "Pembaruan susunan keluarga"
    ],
    instansi_tujuan: "Kelurahan/Dukcapil",
    penerbit_akhir: "Dukcapil",
    crossLink: ["KB-02", "KB-05"],
    status: "aktif"
  },

  {
    id: "KB06-NIK-018",
    kategori: "Perceraian",
    nama: "Anak Setelah Perceraian Orang Tua",
    keywords: [
      "anak setelah cerai",
      "anak ikut ibu setelah cerai",
      "anak ikut ayah setelah cerai",
      "KK anak setelah perceraian",
      "data anak setelah cerai"
    ],
    questions: [
      "Setelah orang tua bercerai anak masuk KK siapa?",
      "Anak ikut ibu setelah perceraian",
      "Bagaimana data anak setelah ayah dan ibu bercerai?"
    ],
    answer:
      "Setelah perceraian, data anak perlu disesuaikan dengan kondisi keluarga dan pengaturan tempat tinggal anak. Susunan KK anak tidak boleh ditentukan hanya berdasarkan asumsi. Dokumen perceraian, kondisi tempat tinggal, dan ketentuan administrasi kependudukan perlu diperhatikan.",
    dokumen_warga: [
      "KTP-el orang tua",
      "KK",
      "Dokumen anak",
      "Dokumen perceraian"
    ],
    dokumen_rt: [
      "Keterangan tempat tinggal anak apabila diperlukan"
    ],
    instansi_tujuan: "Kelurahan/Dukcapil",
    penerbit_akhir: "Dukcapil",
    crossLink: ["KB-02", "KB-03", "KB-05"],
    status: "aktif"
  },

  {
    id: "KB06-NIK-019",
    kategori: "Perceraian",
    nama: "Cerai Hidup dan Cerai Mati",
    keywords: [
      "cerai hidup",
      "cerai mati",
      "status cerai hidup",
      "status cerai mati",
      "perbedaan cerai hidup dan cerai mati"
    ],
    questions: [
      "Apa bedanya cerai hidup dan cerai mati?",
      "Pasangan meninggal apakah termasuk cerai mati?",
      "Bagaimana status setelah pasangan meninggal?"
    ],
    answer:
      "Cerai hidup dan cerai mati merupakan kondisi yang berbeda. Cerai hidup terjadi karena perceraian, sedangkan cerai mati berkaitan dengan meninggalnya pasangan. Jika pasangan meninggal, proses administrasinya mengikuti pencatatan kematian dan pembaruan status perkawinan. Jika terjadi perceraian, prosesnya mengikuti dokumen dan putusan perceraian yang berlaku.",
    dokumen_warga: [
      "KTP-el",
      "KK",
      "Dokumen perceraian atau dokumen kematian sesuai kondisi"
    ],
    dokumen_rt: [
      "Keterangan lingkungan apabila diperlukan"
    ],
    instansi_tujuan: "Kelurahan/Dukcapil",
    penerbit_akhir: "Dukcapil",
    crossLink: ["KB-02", "KB-04"],
    status: "aktif"
  },

  {
    id: "KB06-NIK-020",
    kategori: "Perceraian",
    nama: "Status Janda atau Duda",
    keywords: [
      "janda",
      "duda",
      "status janda",
      "status duda",
      "setelah pasangan meninggal"
    ],
    questions: [
      "Bagaimana status administrasi janda?",
      "Bagaimana status administrasi duda?",
      "Saya menjadi janda setelah suami meninggal"
    ],
    answer:
      "Status janda atau duda perlu dilihat dari penyebab berakhirnya perkawinan dan data administrasi yang telah tercatat. Jika pasangan meninggal, proses pembaruan status dilakukan berdasarkan pencatatan kematian. Jika perkawinan berakhir karena perceraian, perubahan dilakukan berdasarkan dokumen perceraian.",
    dokumen_warga: [
      "KTP-el",
      "KK",
      "Dokumen kematian atau perceraian sesuai kondisi"
    ],
    dokumen_rt: [
      "Keterangan lingkungan apabila diperlukan"
    ],
    instansi_tujuan: "Kelurahan/Dukcapil",
    penerbit_akhir: "Dukcapil",
    crossLink: ["KB-02", "KB-04"],
    status: "aktif"
  },

  {
    id: "KB06-NIK-021",
    kategori: "Pernikahan",
    nama: "Data Perkawinan Belum Berubah",
    keywords: [
      "status kawin belum berubah",
      "data perkawinan belum berubah",
      "KTP masih belum kawin",
      "KK belum update setelah nikah",
      "data nikah belum masuk"
    ],
    questions: [
      "Saya sudah menikah tetapi KTP masih belum kawin",
      "Data pernikahan belum masuk KK",
      "Bagaimana memperbaiki status perkawinan?"
    ],
    answer:
      "Jika perkawinan sudah tercatat tetapi status pada dokumen kependudukan belum berubah, warga perlu melakukan pembaruan data melalui administrasi kependudukan. Siapkan dokumen perkawinan dan dokumen kependudukan yang tersedia. RT dapat membantu keterangan lingkungan apabila diperlukan.",
    dokumen_warga: [
      "KTP-el",
      "KK",
      "Dokumen perkawinan"
    ],
    dokumen_rt: [
      "Keterangan/pengantar apabila diperlukan"
    ],
    instansi_tujuan: "Kelurahan/Dukcapil",
    penerbit_akhir: "Dukcapil",
    crossLink: ["KB-01", "KB-02"],
    status: "aktif"
  },

  {
    id: "KB06-NIK-022",
    kategori: "Perceraian",
    nama: "Perceraian di Luar Negeri",
    keywords: [
      "cerai luar negeri",
      "perceraian luar negeri",
      "WNI cerai luar negeri",
      "cerai di luar negeri",
      "dokumen perceraian luar negeri"
    ],
    questions: [
      "Saya bercerai di luar negeri",
      "Bagaimana mencatat perceraian luar negeri?",
      "Perceraian saya terjadi di luar Indonesia"
    ],
    answer:
      "Perceraian yang terjadi di luar negeri dapat memerlukan proses pengakuan atau pencatatan di Indonesia sebelum data administrasi kependudukan diperbarui. Karena prosedurnya bergantung pada negara dan kondisi perkawinan, warga perlu berkonsultasi dengan instansi Indonesia yang berwenang.",
    dokumen_warga: [
      "KTP-el",
      "KK",
      "Dokumen perceraian dari negara tempat perceraian",
      "Dokumen pendukung lainnya"
    ],
    dokumen_rt: [
      "Keterangan lingkungan apabila diperlukan"
    ],
    instansi_tujuan: "Instansi terkait/Dukcapil",
    penerbit_akhir: "Instansi berwenang sesuai proses",
    crossLink: ["KB-01", "KB-02", "KB-05"],
    status: "aktif"
  },

  {
    id: "KB06-NIK-RULE",
    kategori: "Pernikahan",
    nama: "Aturan Umum Pernikahan dan Perceraian",
    keywords: [
      "aturan pernikahan",
      "aturan perceraian",
      "nikah dan RT",
      "cerai dan RT",
      "status perkawinan"
    ],
    questions: [
      "Apa peran RT dalam urusan pernikahan?",
      "Apa peran RT dalam perceraian?",
      "Siapa yang mengubah status perkawinan?"
    ],
    answer:
      "RT berperan dalam administrasi lingkungan dan dapat memberikan surat atau keterangan apabila diperlukan. RT bukan pihak yang mencatat perkawinan, mengesahkan perkawinan, memutus perceraian, atau menerbitkan dokumen kependudukan. Untuk perkawinan, instansi pencatat bergantung pada agama dan ketentuan yang berlaku. Untuk perceraian, dokumen hukum dan administrasi kependudukan harus diproses melalui instansi yang berwenang. Setelah status berubah, KK dan KTP perlu disesuaikan dengan keadaan sebenarnya.",
    instansi_tujuan: "RT/KUA/Pengadilan/Dukcapil sesuai jenis kasus",
    penerbit_akhir: "Instansi berwenang sesuai jenis dokumen",
    crossLink: ["KB-01", "KB-02", "KB-04", "KB-05", "KB-10"],
    status: "aktif"
  }
];