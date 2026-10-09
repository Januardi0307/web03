// =========================================================
// KB-08 — SOSIAL, SEKOLAH & KESEHATAN
// RT 03 / RW 07 Karet - Setiabudi
// =========================================================

export const KB08_Sosial = [
  {
    id: "KB08-SOS-001",
    kategori: "Sosial",
    nama: "Bantuan Sosial",
    keywords: [
      "bansos",
      "bantuan sosial",
      "bantuan pemerintah",
      "mau dapat bansos",
      "penerima bansos"
    ],
    questions: [
      "Bagaimana cara mendapatkan bansos?",
      "Saya ingin mengajukan bantuan sosial",
      "Siapa yang bisa mendapatkan bantuan sosial?"
    ],
    answer:
      "Bantuan sosial memiliki program dan persyaratan yang berbeda-beda. Data keluarga penerima juga dapat ditentukan melalui sistem/data pemerintah sesuai program yang berlaku. RT dapat membantu memberikan informasi atau keterangan lingkungan apabila diperlukan, tetapi RT bukan pihak yang secara sepihak menentukan seseorang pasti menerima bantuan.",
    dokumen_warga: [
      "KTP-el",
      "KK",
      "Dokumen pendukung sesuai program bantuan"
    ],
    dokumen_rt: [
      "Data warga",
      "Keterangan kondisi warga apabila diperlukan"
    ],
    instansi_tujuan: "Kelurahan/Instansi sosial sesuai program",
    penerbit_akhir: "Instansi pemerintah sesuai program",
    crossLink: ["KB-01", "KB-02", "KB-10"],
    status: "aktif"
  },

  {
    id: "KB08-SOS-002",
    kategori: "Sosial",
    nama: "Data Keluarga untuk Bantuan Sosial",
    keywords: [
      "data bansos",
      "data keluarga bansos",
      "data bantuan",
      "data kemiskinan",
      "data sosial"
    ],
    questions: [
      "Bagaimana data keluarga untuk bansos?",
      "Kenapa keluarga saya belum masuk data bantuan?",
      "Bagaimana memperbaiki data bantuan sosial?"
    ],
    answer:
      "Data bantuan sosial tidak hanya bergantung pada data internal RT. Jika data keluarga tidak sesuai atau belum tercatat dalam sistem pemerintah yang digunakan untuk program tertentu, warga perlu menanyakan mekanisme pemutakhiran data kepada Kelurahan atau instansi sosial yang berwenang.",
    dokumen_warga: [
      "KTP-el",
      "KK",
      "Dokumen pendukung kondisi keluarga"
    ],
    dokumen_rt: [
      "Data warga",
      "Keterangan lingkungan apabila diperlukan"
    ],
    instansi_tujuan: "Kelurahan/Instansi sosial",
    penerbit_akhir: "Instansi pemerintah sesuai program",
    crossLink: ["KB-01", "KB-02"],
    status: "aktif"
  },

  {
    id: "KB08-SOS-003",
    kategori: "Sosial",
    nama: "Data Sosial Tidak Sesuai",
    keywords: [
      "data bansos salah",
      "data sosial salah",
      "data keluarga salah",
      "data bantuan tidak sesuai",
      "perbaikan data sosial"
    ],
    questions: [
      "Data bansos saya salah",
      "Nama saya salah dalam data bantuan",
      "Bagaimana memperbaiki data sosial?"
    ],
    answer:
      "Jika terdapat kesalahan data, warga perlu membandingkan data KTP, KK, dan data keluarga dengan informasi yang digunakan dalam program bantuan. RT dapat membantu memeriksa data lingkungan yang dimiliki, sedangkan perbaikan pada sistem pemerintah dilakukan melalui mekanisme instansi yang berwenang.",
    dokumen_warga: [
      "KTP-el",
      "KK",
      "Dokumen pendukung perubahan data"
    ],
    dokumen_rt: [
      "Data warga",
      "Keterangan apabila diperlukan"
    ],
    instansi_tujuan: "Kelurahan/Instansi sosial",
    penerbit_akhir: "Instansi pengelola data",
    crossLink: ["KB-01", "KB-02"],
    status: "aktif"
  },

  {
    id: "KB08-SOS-004",
    kategori: "Sosial",
    nama: "Surat Keterangan Tidak Mampu",
    keywords: [
      "SKTM",
      "surat tidak mampu",
      "surat keterangan tidak mampu",
      "surat miskin",
      "keterangan tidak mampu"
    ],
    questions: [
      "Bagaimana membuat SKTM?",
      "Saya membutuhkan surat keterangan tidak mampu",
      "Apakah RT bisa membuat SKTM?"
    ],
    answer:
      "Jika warga membutuhkan SKTM, tujuan penggunaannya harus ditanyakan terlebih dahulu karena format dan pihak penerbit dapat berbeda. RT dapat membantu memberikan keterangan kondisi warga sesuai kewenangannya, sedangkan dokumen resmi yang diminta oleh sekolah, rumah sakit, atau instansi lain dapat memerlukan pengesahan atau penerbitan dari Kelurahan.",
    dokumen_warga: [
      "KTP-el",
      "KK",
      "Dokumen pendukung sesuai tujuan"
    ],
    dokumen_rt: [
      "Data warga",
      "Keterangan kondisi sosial apabila diperlukan"
    ],
    instansi_tujuan: "RT/Kelurahan/Instansi tujuan",
    penerbit_akhir: "Sesuai jenis dokumen",
    crossLink: ["KB-02", "KB-10"],
    status: "aktif"
  },

  {
    id: "KB08-SOS-005",
    kategori: "Sekolah",
    nama: "Pendaftaran Sekolah",
    keywords: [
      "daftar sekolah",
      "masuk sekolah",
      "pendaftaran sekolah",
      "sekolah anak",
      "syarat sekolah"
    ],
    questions: [
      "Apa yang dibutuhkan untuk mendaftar sekolah?",
      "Anak saya mau masuk sekolah",
      "Bagaimana administrasi pendaftaran sekolah?"
    ],
    answer:
      "Persyaratan pendaftaran sekolah bergantung pada jenjang, sekolah, dan jalur penerimaan. Warga perlu mengikuti persyaratan resmi sekolah atau sistem penerimaan yang berlaku. RT dapat membantu surat atau keterangan lingkungan apabila memang diminta.",
    dokumen_warga: [
      "KK",
      "Dokumen identitas anak/orang tua",
      "Dokumen pendidikan sesuai jenjang"
    ],
    dokumen_rt: [
      "Surat/keterangan lingkungan apabila diperlukan"
    ],
    instansi_tujuan: "Sekolah/Instansi pendidikan",
    penerbit_akhir: "Sekolah/Instansi pendidikan sesuai dokumen",
    crossLink: ["KB-01", "KB-02", "KB-03"],
    status: "aktif"
  },

  {
    id: "KB08-SOS-006",
    kategori: "Sekolah",
    nama: "Keterangan Domisili untuk Sekolah",
    keywords: [
      "domisili sekolah",
      "surat domisili sekolah",
      "keterangan tinggal sekolah",
      "alamat sekolah",
      "surat RT sekolah"
    ],
    questions: [
      "Sekolah meminta surat domisili",
      "Apakah RT bisa membuat surat domisili untuk sekolah?",
      "Saya butuh keterangan tempat tinggal untuk sekolah"
    ],
    answer:
      "Jika sekolah meminta keterangan tempat tinggal, warga perlu mengetahui jenis dokumen yang diminta. RT dapat memberikan keterangan mengenai tempat tinggal warga apabila sesuai kewenangannya. Jika sekolah meminta dokumen resmi dari Kelurahan atau Dukcapil, proses perlu dilanjutkan ke instansi tersebut.",
    dokumen_warga: [
      "KTP-el orang tua",
      "KK",
      "Dokumen anak"
    ],
    dokumen_rt: [
      "Keterangan tempat tinggal"
    ],
    instansi_tujuan: "RT/Kelurahan/Sekolah",
    penerbit_akhir: "Sesuai jenis dokumen",
    crossLink: ["KB-03", "KB-05", "KB-10"],
    status: "aktif"
  },

  {
    id: "KB08-SOS-007",
    kategori: "Sekolah",
    nama: "PIP atau KIP",
    keywords: [
      "PIP",
      "KIP",
      "bantuan pendidikan",
      "Kartu Indonesia Pintar",
      "Program Indonesia Pintar"
    ],
    questions: [
      "Bagaimana mendapatkan PIP?",
      "Anak saya ingin mendapatkan KIP",
      "Apa syarat bantuan pendidikan?"
    ],
    answer:
      "PIP dan bantuan pendidikan lainnya memiliki mekanisme pendataan dan penetapan penerima tersendiri. Warga sebaiknya menanyakan kepada sekolah mengenai status data peserta didik dan prosedur yang berlaku. RT dapat membantu keterangan lingkungan jika memang diminta, tetapi RT bukan penentu penerima bantuan pendidikan.",
    dokumen_warga: [
      "KK",
      "KTP orang tua/wali",
      "Dokumen peserta didik",
      "Dokumen pendukung sesuai program"
    ],
    dokumen_rt: [
      "Keterangan lingkungan apabila diperlukan"
    ],
    instansi_tujuan: "Sekolah/Instansi pendidikan",
    penerbit_akhir: "Instansi pendidikan/pemerintah sesuai program",
    crossLink: ["KB-02", "KB-03"],
    status: "aktif"
  },

  {
    id: "KB08-SOS-008",
    kategori: "Sekolah",
    nama: "Beasiswa",
    keywords: [
      "beasiswa",
      "bantuan sekolah",
      "beasiswa anak",
      "beasiswa mahasiswa",
      "bantuan pendidikan"
    ],
    questions: [
      "Bagaimana mengurus beasiswa?",
      "Anak saya ingin mengajukan beasiswa",
      "Apakah RT bisa membuat surat untuk beasiswa?"
    ],
    answer:
      "Persyaratan beasiswa berbeda menurut pemberi beasiswa. Warga perlu melihat persyaratan resmi dari sekolah, kampus, pemerintah, atau lembaga pemberi beasiswa. Jika diperlukan surat keterangan dari lingkungan, RT dapat membantu sesuai kewenangannya.",
    dokumen_warga: [
      "KTP",
      "KK",
      "Dokumen sekolah/kampus",
      "Dokumen pendukung sesuai program"
    ],
    dokumen_rt: [
      "Surat/keterangan lingkungan apabila diperlukan"
    ],
    instansi_tujuan: "Sekolah/Kampus/Instansi pemberi beasiswa",
    penerbit_akhir: "Instansi pemberi beasiswa",
    crossLink: ["KB-10"],
    status: "aktif"
  },

  {
    id: "KB08-SOS-009",
    kategori: "Sekolah",
    nama: "Pindah Sekolah",
    keywords: [
      "pindah sekolah",
      "mutasi sekolah",
      "pindah siswa",
      "surat pindah sekolah",
      "anak pindah sekolah"
    ],
    questions: [
      "Bagaimana mengurus pindah sekolah?",
      "Anak saya mau pindah sekolah",
      "Apa syarat mutasi sekolah?"
    ],
    answer:
      "Perpindahan sekolah mengikuti prosedur sekolah asal dan sekolah tujuan serta ketentuan pendidikan yang berlaku. Dokumen akademik dan administrasi siswa perlu disiapkan sesuai permintaan sekolah. Surat dari RT hanya diperlukan jika memang diminta untuk tujuan tertentu.",
    dokumen_warga: [
      "KK",
      "KTP orang tua/wali",
      "Dokumen siswa",
      "Dokumen sekolah asal sesuai kebutuhan"
    ],
    dokumen_rt: [
      "Keterangan lingkungan apabila diperlukan"
    ],
    instansi_tujuan: "Sekolah asal/Sekolah tujuan/Instansi pendidikan",
    penerbit_akhir: "Sekolah/Instansi pendidikan",
    crossLink: ["KB-02", "KB-03"],
    status: "aktif"
  },

  {
    id: "KB08-SOS-010",
    kategori: "Sekolah",
    nama: "Anak Berhenti Sekolah",
    keywords: [
      "anak putus sekolah",
      "berhenti sekolah",
      "tidak sekolah",
      "anak tidak sekolah",
      "putus sekolah"
    ],
    questions: [
      "Anak saya berhenti sekolah",
      "Bagaimana membantu anak yang putus sekolah?",
      "Ada anak di lingkungan yang tidak sekolah"
    ],
    answer:
      "Jika anak berhenti sekolah atau tidak dapat melanjutkan pendidikan, keluarga sebaiknya mencari solusi melalui sekolah, Kelurahan, atau instansi pendidikan terkait. Untuk kondisi sosial yang membutuhkan bantuan, RT dapat membantu menghubungkan keluarga dengan pihak yang sesuai.",
    dokumen_warga: [
      "KK",
      "Dokumen anak",
      "Dokumen pendidikan yang tersedia"
    ],
    dokumen_rt: [
      "Informasi kondisi warga",
      "Keterangan lingkungan apabila diperlukan"
    ],
    instansi_tujuan: "Sekolah/Instansi pendidikan/Kelurahan",
    penerbit_akhir: "Instansi terkait",
    crossLink: ["KB-03", "KB-10"],
    status: "aktif"
  },

  {
    id: "KB08-SOS-011",
    kategori: "Kesehatan",
    nama: "BPJS atau JKN",
    keywords: [
      "BPJS",
      "JKN",
      "kartu BPJS",
      "peserta JKN",
      "jaminan kesehatan"
    ],
    questions: [
      "Bagaimana mengurus BPJS?",
      "Saya tidak punya BPJS",
      "Bagaimana mengecek status JKN?"
    ],
    answer:
      "Administrasi BPJS Kesehatan/JKN mengikuti ketentuan BPJS Kesehatan dan status kepesertaan masing-masing warga. RT dapat membantu keterangan lingkungan apabila diperlukan, tetapi kepesertaan dan perubahan data dilakukan melalui BPJS Kesehatan atau kanal resmi yang tersedia.",
    dokumen_warga: [
      "KTP-el",
      "KK",
      "Data kepesertaan apabila sudah ada"
    ],
    dokumen_rt: [
      "Keterangan lingkungan apabila diperlukan"
    ],
    instansi_tujuan: "BPJS Kesehatan/Kanal resmi JKN",
    penerbit_akhir: "BPJS Kesehatan",
    crossLink: ["KB-01", "KB-02"],
    status: "aktif"
  },

  {
    id: "KB08-SOS-012",
    kategori: "Kesehatan",
    nama: "Data NIK Tidak Sesuai untuk BPJS",
    keywords: [
      "BPJS NIK tidak sesuai",
      "NIK BPJS salah",
      "BPJS tidak aktif karena NIK",
      "data BPJS salah",
      "NIK JKN"
    ],
    questions: [
      "NIK saya tidak sesuai di BPJS",
      "BPJS saya bermasalah karena NIK",
      "Bagaimana memperbaiki data NIK BPJS?"
    ],
    answer:
      "Jika data NIK pada kepesertaan BPJS/JKN tidak sesuai, warga perlu memastikan terlebih dahulu bahwa NIK dan KK pada administrasi kependudukan sudah benar. Setelah itu, perbaikan data kepesertaan dilakukan melalui BPJS Kesehatan atau kanal layanan resminya.",
    dokumen_warga: [
      "KTP-el",
      "KK",
      "Kartu atau data kepesertaan JKN"
    ],
    dokumen_rt: [
      "Keterangan apabila diperlukan"
    ],
    instansi_tujuan: "Dukcapil/BPJS Kesehatan sesuai sumber masalah",
    penerbit_akhir: "Instansi berwenang",
    crossLink: ["KB-01", "KB-02"],
    status: "aktif"
  },

  {
    id: "KB08-SOS-013",
    kategori: "Kesehatan",
    nama: "Bayi Baru Lahir dan JKN",
    keywords: [
      "bayi baru lahir BPJS",
      "bayi JKN",
      "bayi baru lahir BPJS",
      "BPJS bayi",
      "anak baru lahir JKN"
    ],
    questions: [
      "Bagaimana mendaftarkan bayi ke BPJS?",
      "Bayi baru lahir apakah perlu didaftarkan JKN?",
      "Bagaimana data bayi untuk BPJS?"
    ],
    answer:
      "Administrasi bayi baru lahir perlu disesuaikan dengan ketentuan kependudukan dan kepesertaan JKN. Keluarga sebaiknya memastikan data kelahiran dan data keluarga telah diproses, kemudian mengikuti prosedur BPJS Kesehatan sesuai jenis kepesertaan orang tua dan ketentuan yang berlaku.",
    dokumen_warga: [
      "KK",
      "Dokumen kelahiran bayi",
      "Data kepesertaan JKN orang tua"
    ],
    dokumen_rt: [
      "Keterangan lingkungan apabila diperlukan"
    ],
    instansi_tujuan: "Dukcapil/BPJS Kesehatan",
    penerbit_akhir: "Instansi berwenang sesuai layanan",
    crossLink: ["KB-02", "KB-03"],
    status: "aktif"
  },

  {
    id: "KB08-SOS-014",
    kategori: "Kesehatan",
    nama: "Berobat Menggunakan JKN",
    keywords: [
      "berobat BPJS",
      "berobat JKN",
      "faskes BPJS",
      "kartu JKN berobat",
      "layanan kesehatan BPJS"
    ],
    questions: [
      "Bagaimana berobat menggunakan BPJS?",
      "Saya mau berobat pakai JKN",
      "Ke mana harus berobat dengan BPJS?"
    ],
    answer:
      "Penggunaan JKN mengikuti ketentuan fasilitas kesehatan dan alur pelayanan yang berlaku berdasarkan kepesertaan. Untuk kondisi tertentu, pasien dapat memperoleh layanan sesuai prosedur rujukan atau kondisi kegawatdaruratan. RT bukan pihak yang menentukan fasilitas kesehatan atau memberikan keputusan medis.",
    dokumen_warga: [
      "KTP/NIK",
      "Data kepesertaan JKN",
      "Dokumen kesehatan apabila diperlukan"
    ],
    dokumen_rt: [],
    instansi_tujuan: "Fasilitas kesehatan/BPJS Kesehatan",
    penerbit_akhir: "Fasilitas kesehatan/BPJS sesuai layanan",
    crossLink: ["KB-01"],
    status: "aktif"
  },

  {
    id: "KB08-SOS-015",
    kategori: "Kesehatan",
    nama: "Surat Keterangan Sehat",
    keywords: [
      "surat sehat",
      "surat keterangan sehat",
      "keterangan sehat",
      "surat sehat RT",
      "surat kesehatan"
    ],
    questions: [
      "Apakah RT bisa membuat surat sehat?",
      "Di mana mendapatkan surat keterangan sehat?",
      "Saya membutuhkan surat sehat"
    ],
    answer:
      "Surat keterangan sehat merupakan dokumen yang berkaitan dengan pemeriksaan kesehatan dan bukan dokumen yang dapat diterbitkan RT. Jika diperlukan untuk sekolah, pekerjaan, olahraga, atau keperluan lain, warga perlu mendapatkan pemeriksaan dari fasilitas atau tenaga kesehatan yang berwenang.",
    dokumen_warga: [
      "KTP/NIK",
      "Dokumen lain sesuai fasilitas kesehatan"
    ],
    dokumen_rt: [],
    instansi_tujuan: "Puskesmas/Klinik/Rumah Sakit/Tenaga kesehatan berwenang",
    penerbit_akhir: "Tenaga/fasilitas kesehatan berwenang",
    crossLink: ["KB-10"],
    status: "aktif"
  },

  {
    id: "KB08-SOS-016",
    kategori: "Kesehatan",
    nama: "Warga Lansia Membutuhkan Bantuan",
    keywords: [
      "lansia",
      "orang tua lansia",
      "bantuan lansia",
      "warga lanjut usia",
      "lansia tinggal sendiri"
    ],
    questions: [
      "Ada lansia yang membutuhkan bantuan",
      "Bagaimana membantu warga lansia?",
      "Lansia tinggal sendiri di lingkungan RT"
    ],
    answer:
      "Jika ada lansia yang membutuhkan bantuan sosial atau layanan kesehatan, pengurus RT dapat membantu menghubungkan keluarga atau warga tersebut dengan Kelurahan, fasilitas kesehatan, atau instansi sosial yang sesuai. Untuk keadaan darurat kesehatan, utamakan layanan kesehatan atau kegawatdaruratan, bukan menunggu proses administrasi RT.",
    dokumen_warga: [
      "KTP",
      "KK",
      "Dokumen kesehatan apabila tersedia"
    ],
    dokumen_rt: [
      "Data warga",
      "Informasi kondisi lingkungan"
    ],
    instansi_tujuan: "Kelurahan/Fasilitas kesehatan/Instansi sosial",
    penerbit_akhir: "Instansi terkait",
    crossLink: ["KB-01", "KB-02"],
    status: "aktif"
  },

  {
    id: "KB08-SOS-017",
    kategori: "Sosial",
    nama: "Warga dengan Disabilitas",
    keywords: [
      "disabilitas",
      "penyandang disabilitas",
      "warga disabilitas",
      "bantuan disabilitas",
      "layanan disabilitas"
    ],
    questions: [
      "Ada warga disabilitas yang membutuhkan bantuan",
      "Bagaimana mendapatkan bantuan untuk penyandang disabilitas?",
      "Apa yang harus dilakukan untuk warga disabilitas?"
    ],
    answer:
      "Warga penyandang disabilitas dapat membutuhkan dukungan administrasi, sosial, kesehatan, atau aksesibilitas yang berbeda. RT dapat membantu mendata dan menghubungkan warga dengan Kelurahan, layanan sosial, atau fasilitas kesehatan sesuai kebutuhannya. Jenis bantuan dan persyaratan ditentukan oleh program atau instansi terkait.",
    dokumen_warga: [
      "KTP",
      "KK",
      "Dokumen pendukung sesuai kebutuhan"
    ],
    dokumen_rt: [
      "Data warga",
      "Keterangan kondisi apabila diperlukan"
    ],
    instansi_tujuan: "Kelurahan/Instansi sosial/Fasilitas kesehatan",
    penerbit_akhir: "Instansi terkait",
    crossLink: ["KB-01", "KB-02"],
    status: "aktif"
  },

  {
    id: "KB08-SOS-018",
    kategori: "Sosial",
    nama: "Anak atau Orang Terlantar",
    keywords: [
      "anak terlantar",
      "orang terlantar",
      "warga terlantar",
      "anak tanpa pengasuh",
      "orang tanpa tempat tinggal"
    ],
    questions: [
      "Ada anak terlantar di lingkungan",
      "Bagaimana menangani warga terlantar?",
      "Ada orang yang tidak memiliki tempat tinggal"
    ],
    answer:
      "Jika ditemukan anak atau orang yang terlantar, pengurus RT sebaiknya segera berkoordinasi dengan Kelurahan dan instansi sosial yang berwenang. Jika terdapat keadaan darurat, keselamatan dan kebutuhan medis harus diprioritaskan. RT tidak boleh mengambil keputusan penempatan atau pengasuhan secara sepihak.",
    dokumen_warga: [
      "Identitas atau dokumen yang tersedia"
    ],
    dokumen_rt: [
      "Keterangan lokasi dan kondisi",
      "Informasi warga apabila diketahui"
    ],
    instansi_tujuan: "Kelurahan/Instansi sosial/Instansi terkait",
    penerbit_akhir: "Instansi berwenang",
    crossLink: ["KB-01", "KB-02"],
    status: "aktif"
  },

  {
    id: "KB08-SOS-019",
    kategori: "Sosial",
    nama: "Keluarga Mengalami Kesulitan Ekonomi",
    keywords: [
      "kesulitan ekonomi",
      "keluarga tidak mampu",
      "keluarga membutuhkan bantuan",
      "tidak punya penghasilan",
      "bantuan keluarga"
    ],
    questions: [
      "Keluarga saya sedang kesulitan ekonomi",
      "Apakah ada bantuan untuk keluarga tidak mampu?",
      "Bagaimana meminta bantuan sosial?"
    ],
    answer:
      "Keluarga yang mengalami kesulitan ekonomi dapat mencari informasi mengenai program bantuan sosial atau layanan pemberdayaan yang tersedia. RT dapat membantu memberikan informasi dan keterangan kondisi lingkungan jika diperlukan, tetapi penerima dan jenis bantuan ditentukan oleh program serta instansi yang berwenang.",
    dokumen_warga: [
      "KTP",
      "KK",
      "Dokumen pendukung kondisi keluarga"
    ],
    dokumen_rt: [
      "Keterangan kondisi warga apabila diperlukan"
    ],
    instansi_tujuan: "Kelurahan/Instansi sosial",
    penerbit_akhir: "Instansi pemerintah sesuai program",
    crossLink: ["KB-02", "KB-10"],
    status: "aktif"
  },

  {
    id: "KB08-SOS-020",
    kategori: "Sosial",
    nama: "Privasi Data Warga",
    keywords: [
      "privasi warga",
      "data warga",
      "data pribadi warga",
      "kerahasiaan data",
      "data KTP warga"
    ],
    questions: [
      "Bolehkah data warga diberikan kepada orang lain?",
      "Bagaimana menjaga data KTP warga?",
      "Apakah data warga boleh disebarkan?"
    ],
    answer:
      "Data kependudukan dan data pribadi warga harus digunakan secara hati-hati dan hanya untuk tujuan yang sah. Pengurus RT tidak seharusnya menyebarkan KTP, KK, NIK, nomor telepon, atau informasi pribadi warga kepada pihak lain tanpa dasar dan kebutuhan yang jelas. Data internal RT harus dibedakan dari informasi yang memang boleh diumumkan kepada masyarakat.",
    dokumen_rt: [
      "Data warga sesuai kebutuhan administrasi"
    ],
    instansi_tujuan: "RT/Instansi berwenang sesuai kebutuhan",
    penerbit_akhir: "Sesuai jenis layanan",
    crossLink: ["KB-01", "KB-02"],
    status: "aktif"
  },

  {
    id: "KB08-SOS-021",
    kategori: "Sosial",
    nama: "Aturan Umum Sosial, Sekolah dan Kesehatan",
    keywords: [
      "aturan sosial",
      "aturan bantuan",
      "sekolah dan RT",
      "kesehatan dan RT",
      "peran RT bantuan"
    ],
    questions: [
      "Apa peran RT dalam urusan sosial?",
      "Apa peran RT dalam sekolah dan kesehatan?",
      "Apakah RT menentukan penerima bantuan?"
    ],
    answer:
      "RT berperan dalam administrasi dan pelayanan lingkungan, seperti pendataan warga, memberikan keterangan sesuai kewenangan, dan membantu koordinasi. RT bukan pengganti sekolah, fasilitas kesehatan, BPJS, Dukcapil, atau instansi sosial. Untuk bantuan sosial, pendidikan, dan kesehatan, AI harus terlebih dahulu mengetahui tujuan warga agar dapat mengarahkan ke instansi yang tepat.",
    instansi_tujuan: "RT/Kelurahan/Sekolah/Fasilitas kesehatan/Instansi terkait",
    penerbit_akhir: "Sesuai jenis layanan",
    crossLink: [
      "KB-01",
      "KB-02",
      "KB-03",
      "KB-05",
      "KB-10"
    ],
    status: "aktif"
  }
];