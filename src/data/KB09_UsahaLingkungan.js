// =========================================================
// KB-09 — USAHA, RUMAH & LINGKUNGAN
// RT 03 / RW 07 Karet - Setiabudi
// =========================================================

export const KB09_UsahaLingkungan = [
  {
    id: "KB09-USA-001",
    kategori: "Usaha",
    nama: "Membuka Usaha di Lingkungan RT",
    keywords: [
      "buka usaha",
      "membuka usaha",
      "usaha di rumah",
      "usaha di lingkungan",
      "izin usaha"
    ],
    questions: [
      "Saya mau membuka usaha di rumah",
      "Apakah perlu izin RT untuk membuka usaha?",
      "Bagaimana administrasi membuka usaha?"
    ],
    answer:
      "Untuk membuka usaha, warga perlu membedakan administrasi lingkungan dengan perizinan usaha resmi. RT dapat membantu memberikan keterangan atau mengetahui kegiatan usaha di lingkungan apabila diperlukan. Perizinan usaha resmi mengikuti jenis usaha dan ketentuan pemerintah yang berlaku.",
    dokumen_warga: [
      "KTP-el",
      "KK",
      "Dokumen tempat usaha apabila diperlukan",
      "Dokumen usaha sesuai jenis usaha"
    ],
    dokumen_rt: [
      "Keterangan lingkungan apabila diperlukan"
    ],
    instansi_tujuan: "RT/Kelurahan/Instansi perizinan sesuai jenis usaha",
    penerbit_akhir: "Instansi pemerintah yang berwenang",
    crossLink: ["KB-01", "KB-02", "KB-05", "KB-10"],
    status: "aktif"
  },

  {
    id: "KB09-USA-002",
    kategori: "Usaha",
    nama: "Surat Keterangan Usaha",
    keywords: [
      "SKU",
      "surat keterangan usaha",
      "surat usaha",
      "keterangan usaha",
      "usaha mikro"
    ],
    questions: [
      "Bagaimana membuat surat keterangan usaha?",
      "Saya membutuhkan surat keterangan usaha",
      "Apakah RT bisa membuat surat usaha?"
    ],
    answer:
      "Jika warga membutuhkan keterangan bahwa dirinya menjalankan usaha di lingkungan RT, RT dapat memberikan surat atau keterangan sesuai kewenangannya. Namun surat keterangan dari RT tidak sama dengan perizinan usaha atau NIB. Tujuan penggunaan surat harus diketahui agar diarahkan ke dokumen yang tepat.",
    dokumen_warga: [
      "KTP-el",
      "KK",
      "Informasi jenis usaha",
      "Alamat tempat usaha"
    ],
    dokumen_rt: [
      "Keterangan keberadaan usaha di lingkungan"
    ],
    instansi_tujuan: "RT/Kelurahan/Instansi tujuan",
    penerbit_akhir: "Sesuai jenis dokumen",
    crossLink: ["KB-10"],
    status: "aktif"
  },

  {
    id: "KB09-USA-003",
    kategori: "Usaha",
    nama: "NIB atau Nomor Induk Berusaha",
    keywords: [
      "NIB",
      "nomor induk berusaha",
      "izin usaha online",
      "OSS",
      "daftar usaha"
    ],
    questions: [
      "Bagaimana membuat NIB?",
      "Apakah RT yang membuat NIB?",
      "Saya ingin mendaftarkan usaha"
    ],
    answer:
      "NIB merupakan identitas pelaku usaha yang diperoleh melalui sistem perizinan berusaha pemerintah. RT bukan penerbit NIB. Warga perlu menggunakan kanal resmi perizinan berusaha dan menyiapkan data usaha sesuai jenis kegiatan.",
    dokumen_warga: [
      "KTP-el",
      "Data usaha",
      "Alamat usaha",
      "Data lain sesuai jenis usaha"
    ],
    dokumen_rt: [
      "Keterangan lingkungan apabila memang diminta"
    ],
    instansi_tujuan: "Sistem/Instansi perizinan berusaha pemerintah",
    penerbit_akhir: "Instansi pemerintah melalui sistem perizinan berusaha",
    crossLink: ["KB-01", "KB-10"],
    status: "aktif"
  },

  {
    id: "KB09-USA-004",
    kategori: "Usaha",
    nama: "Usaha Makanan dan Minuman",
    keywords: [
      "usaha makanan",
      "jualan makanan",
      "usaha minuman",
      "kuliner",
      "izin makanan"
    ],
    questions: [
      "Saya mau jual makanan dari rumah",
      "Apa izin usaha makanan?",
      "Apakah usaha makanan perlu izin?"
    ],
    answer:
      "Usaha makanan dan minuman dapat memiliki persyaratan yang berbeda tergantung jenis produk, skala usaha, tempat usaha, dan cara penjualannya. RT dapat membantu dari sisi administrasi lingkungan apabila diperlukan, sedangkan perizinan usaha dan persyaratan produk mengikuti instansi yang berwenang.",
    dokumen_warga: [
      "KTP-el",
      "Data usaha",
      "Alamat usaha",
      "Dokumen usaha/produk sesuai kebutuhan"
    ],
    dokumen_rt: [
      "Keterangan lingkungan apabila diperlukan"
    ],
    instansi_tujuan: "Instansi perizinan/Instansi terkait produk pangan",
    penerbit_akhir: "Instansi berwenang sesuai jenis usaha",
    crossLink: ["KB-10"],
    status: "aktif"
  },

  {
    id: "KB09-USA-005",
    kategori: "Usaha",
    nama: "Usaha Kos atau Rumah Kost",
    keywords: [
      "usaha kost",
      "rumah kost",
      "pemilik kost",
      "izin kost",
      "data penghuni kost"
    ],
    questions: [
      "Saya punya usaha kost",
      "Apa yang harus dilakukan pemilik kost?",
      "Bagaimana administrasi rumah kost?"
    ],
    answer:
      "Pemilik atau pengelola kost perlu memperhatikan administrasi lingkungan, pendataan penghuni, keamanan, kebersihan, dan ketentuan usaha yang berlaku. RT dapat mendata keberadaan penghuni dan membantu administrasi lingkungan. Perizinan usaha atau bangunan mengikuti ketentuan instansi yang berwenang.",
    dokumen_warga: [
      "KTP-el pemilik/pengelola",
      "Data tempat kost",
      "Data penghuni"
    ],
    dokumen_rt: [
      "Data tempat kost",
      "Data penghuni sesuai kebutuhan administrasi lingkungan"
    ],
    instansi_tujuan: "RT/Kelurahan/Instansi terkait",
    penerbit_akhir: "Sesuai jenis dokumen",
    crossLink: ["KB-02", "KB-05", "KB-10"],
    status: "aktif"
  },

  {
    id: "KB09-USA-006",
    kategori: "Usaha",
    nama: "Usaha Laundry",
    keywords: [
      "laundry",
      "usaha laundry",
      "buka laundry",
      "laundry rumah",
      "izin laundry"
    ],
    questions: [
      "Saya mau membuka laundry",
      "Apa yang harus diperhatikan usaha laundry?",
      "Apakah usaha laundry perlu izin?"
    ],
    answer:
      "Usaha laundry perlu memperhatikan administrasi usaha, lingkungan, limbah air, kebisingan, dan ketentuan usaha yang berlaku. RT dapat membantu dari sisi lingkungan, sedangkan perizinan usaha dan ketentuan teknis mengikuti instansi yang berwenang.",
    dokumen_warga: [
      "KTP-el",
      "Data usaha",
      "Alamat usaha"
    ],
    dokumen_rt: [
      "Keterangan lingkungan apabila diperlukan"
    ],
    instansi_tujuan: "Instansi perizinan/Instansi lingkungan sesuai kebutuhan",
    penerbit_akhir: "Instansi berwenang",
    crossLink: ["KB-10"],
    status: "aktif"
  },

  {
    id: "KB09-USA-007",
    kategori: "Usaha",
    nama: "Usaha Bengkel",
    keywords: [
      "bengkel",
      "usaha bengkel",
      "bengkel motor",
      "bengkel mobil",
      "buka bengkel"
    ],
    questions: [
      "Saya mau membuka bengkel",
      "Apa yang harus diperhatikan usaha bengkel?",
      "Bengkel mengganggu lingkungan, bagaimana?"
    ],
    answer:
      "Usaha bengkel perlu memperhatikan izin usaha, penggunaan tempat, kebisingan, parkir, keselamatan, limbah oli, dan dampak terhadap lingkungan. RT dapat membantu menyelesaikan persoalan lingkungan dan memberikan keterangan sesuai kewenangan, tetapi bukan penerbit seluruh perizinan usaha atau teknis.",
    dokumen_warga: [
      "KTP-el",
      "Data usaha",
      "Alamat tempat usaha"
    ],
    dokumen_rt: [
      "Keterangan lingkungan apabila diperlukan"
    ],
    instansi_tujuan: "Instansi perizinan/Instansi teknis terkait",
    penerbit_akhir: "Instansi berwenang",
    crossLink: ["KB-10"],
    status: "aktif"
  },

  {
    id: "KB09-USA-008",
    kategori: "Usaha",
    nama: "Usaha Kosmetik atau Produk Kecantikan",
    keywords: [
      "usaha kosmetik",
      "jual kosmetik",
      "produksi kosmetik",
      "izin kosmetik",
      "kosmetik rumahan"
    ],
    questions: [
      "Saya mau menjual kosmetik",
      "Apa izin untuk usaha kosmetik?",
      "Apakah RT bisa memberikan izin kosmetik?"
    ],
    answer:
      "Usaha kosmetik memiliki persyaratan usaha dan persyaratan produk yang harus mengikuti ketentuan instansi yang berwenang. RT bukan penerbit izin edar atau persetujuan teknis kosmetik. Jika kegiatan usaha dilakukan di lingkungan RT, aspek lingkungan dan administrasi warga dapat dikoordinasikan dengan RT.",
    dokumen_warga: [
      "KTP-el",
      "Data usaha",
      "Dokumen usaha",
      "Dokumen produk sesuai ketentuan"
    ],
    dokumen_rt: [
      "Keterangan lingkungan apabila diperlukan"
    ],
    instansi_tujuan: "Instansi perizinan/BPOM atau instansi terkait sesuai jenis kegiatan",
    penerbit_akhir: "Instansi berwenang",
    crossLink: ["KB-01", "KB-10"],
    status: "aktif"
  },

  {
    id: "KB09-USA-009",
    kategori: "Usaha",
    nama: "Usaha Online dari Rumah",
    keywords: [
      "usaha online",
      "jualan online",
      "bisnis online",
      "online shop",
      "toko online"
    ],
    questions: [
      "Saya jualan online dari rumah",
      "Apakah usaha online perlu dilaporkan ke RT?",
      "Bagaimana administrasi usaha online?"
    ],
    answer:
      "Usaha online yang dilakukan dari rumah tetap perlu memperhatikan ketentuan usaha dan lingkungan, terutama jika terdapat aktivitas penyimpanan barang, keluar-masuk kurir, pekerja, atau perubahan fungsi rumah. Administrasi usaha resmi mengikuti jenis dan skala kegiatan.",
    dokumen_warga: [
      "KTP-el",
      "Data usaha",
      "Alamat kegiatan usaha"
    ],
    dokumen_rt: [
      "Keterangan lingkungan apabila diperlukan"
    ],
    instansi_tujuan: "RT/Instansi perizinan sesuai kebutuhan",
    penerbit_akhir: "Instansi berwenang sesuai dokumen",
    crossLink: ["KB-01", "KB-10"],
    status: "aktif"
  },

  {
    id: "KB09-RUM-001",
    kategori: "Rumah",
    nama: "Renovasi Rumah",
    keywords: [
      "renovasi rumah",
      "renovasi",
      "perbaikan rumah",
      "bangun ulang rumah",
      "renovasi bangunan"
    ],
    questions: [
      "Saya mau renovasi rumah",
      "Apakah renovasi rumah perlu izin RT?",
      "Apa yang harus dilakukan sebelum renovasi?"
    ],
    answer:
      "Untuk renovasi rumah, warga perlu membedakan pemberitahuan kepada lingkungan dengan persyaratan teknis bangunan. RT dapat membantu koordinasi lingkungan seperti jadwal pekerjaan, akses material, kebersihan, dan dampak kepada tetangga. Jika renovasi memerlukan persetujuan atau dokumen bangunan tertentu, proses dilakukan melalui instansi yang berwenang.",
    dokumen_warga: [
      "Identitas pemilik/penghuni",
      "Informasi rencana renovasi",
      "Dokumen bangunan apabila diperlukan"
    ],
    dokumen_rt: [
      "Pemberitahuan/keterangan lingkungan apabila diperlukan"
    ],
    instansi_tujuan: "RT/Instansi bangunan pemerintah sesuai kebutuhan",
    penerbit_akhir: "Instansi berwenang",
    crossLink: ["KB-10"],
    status: "aktif"
  },

  {
    id: "KB09-RUM-002",
    kategori: "Rumah",
    nama: "Pembangunan Rumah Baru",
    keywords: [
      "bangun rumah",
      "rumah baru",
      "membangun rumah",
      "pembangunan rumah",
      "izin bangunan"
    ],
    questions: [
      "Saya mau membangun rumah",
      "Apa yang harus diurus sebelum membangun rumah?",
      "Apakah perlu izin untuk membangun rumah?"
    ],
    answer:
      "Pembangunan rumah harus memperhatikan ketentuan bangunan yang berlaku. RT dapat membantu koordinasi lingkungan, tetapi dokumen teknis atau persetujuan bangunan bukan diterbitkan oleh RT. Warga perlu memastikan persyaratan bangunan kepada instansi pemerintah yang berwenang sebelum pembangunan.",
    dokumen_warga: [
      "Identitas pemilik",
      "Dokumen tanah/bangunan yang relevan",
      "Rencana bangunan",
      "Dokumen teknis sesuai kebutuhan"
    ],
    dokumen_rt: [
      "Keterangan lingkungan apabila diperlukan"
    ],
    instansi_tujuan: "Instansi pemerintah yang menangani bangunan",
    penerbit_akhir: "Instansi berwenang",
    crossLink: ["KB-10"],
    status: "aktif"
  },

  {
    id: "KB09-RUM-003",
    kategori: "Rumah",
    nama: "PBG atau Persetujuan Bangunan Gedung",
    keywords: [
      "PBG",
      "persetujuan bangunan gedung",
      "izin bangunan",
      "IMB",
      "dokumen bangunan"
    ],
    questions: [
      "Apa itu PBG?",
      "Bagaimana mengurus PBG?",
      "Apakah RT menerbitkan PBG?"
    ],
    answer:
      "PBG merupakan persetujuan terkait penyelenggaraan bangunan gedung dan bukan dokumen yang diterbitkan RT. Jika pembangunan atau perubahan bangunan memerlukan PBG atau dokumen teknis lainnya, warga harus mengikuti prosedur pemerintah daerah dan sistem resmi yang berlaku.",
    dokumen_warga: [
      "Identitas pemohon",
      "Dokumen tanah/bangunan",
      "Dokumen teknis sesuai persyaratan"
    ],
    dokumen_rt: [
      "Keterangan lingkungan apabila memang diminta"
    ],
    instansi_tujuan: "Instansi pemerintah daerah/sistem resmi bangunan gedung",
    penerbit_akhir: "Instansi pemerintah yang berwenang",
    crossLink: ["KB-10"],
    status: "aktif"
  },

  {
    id: "KB09-RUM-004",
    kategori: "Rumah",
    nama: "Menambah Lantai Rumah",
    keywords: [
      "tambah lantai",
      "lantai dua",
      "bangun lantai dua",
      "menambah tingkat rumah",
      "renovasi lantai"
    ],
    questions: [
      "Saya mau menambah lantai rumah",
      "Apakah tambah lantai perlu izin?",
      "Rumah mau dibuat dua lantai"
    ],
    answer:
      "Penambahan lantai dapat memengaruhi struktur dan persyaratan bangunan. Warga perlu memastikan aspek teknis bangunan dan dokumen yang diperlukan sebelum pekerjaan dilakukan. RT dapat membantu koordinasi dengan lingkungan, tetapi tidak menggantikan pemeriksaan atau persetujuan teknis bangunan.",
    dokumen_warga: [
      "Identitas pemilik",
      "Dokumen bangunan yang tersedia",
      "Rencana teknis bangunan"
    ],
    dokumen_rt: [
      "Koordinasi lingkungan apabila diperlukan"
    ],
    instansi_tujuan: "Instansi bangunan pemerintah",
    penerbit_akhir: "Instansi berwenang",
    crossLink: ["KB-10"],
    status: "aktif"
  },

  {
    id: "KB09-RUM-005",
    kategori: "Rumah",
    nama: "Mengubah Rumah Menjadi Tempat Usaha",
    keywords: [
      "rumah jadi usaha",
      "rumah dijadikan toko",
      "alih fungsi rumah",
      "tempat usaha di rumah",
      "ubah fungsi rumah"
    ],
    questions: [
      "Saya mau menjadikan rumah sebagai tempat usaha",
      "Apakah rumah boleh dijadikan toko?",
      "Apa yang perlu diurus jika rumah menjadi tempat usaha?"
    ],
    answer:
      "Perubahan fungsi rumah menjadi tempat usaha perlu memperhatikan jenis usaha, lingkungan, tata bangunan, parkir, akses, dan ketentuan pemerintah yang berlaku. RT dapat membantu koordinasi lingkungan, sedangkan perizinan atau persetujuan teknis mengikuti instansi yang berwenang.",
    dokumen_warga: [
      "KTP-el",
      "Dokumen rumah",
      "Data usaha",
      "Rencana kegiatan usaha"
    ],
    dokumen_rt: [
      "Keterangan lingkungan apabila diperlukan"
    ],
    instansi_tujuan: "RT/Instansi perizinan/bangunan sesuai kebutuhan",
    penerbit_akhir: "Instansi berwenang",
    crossLink: ["KB-05", "KB-10"],
    status: "aktif"
  },

  {
    id: "KB09-LING-001",
    kategori: "Lingkungan",
    nama: "Masalah Sampah",
    keywords: [
      "sampah",
      "buang sampah",
      "sampah menumpuk",
      "sampah tetangga",
      "masalah sampah"
    ],
    questions: [
      "Ada masalah sampah di lingkungan",
      "Tetangga membuang sampah sembarangan",
      "Sampah menumpuk di lingkungan"
    ],
    answer:
      "Masalah sampah sebaiknya terlebih dahulu disampaikan kepada pengurus RT untuk dikoordinasikan dengan warga dan pihak terkait. Jika menyangkut layanan pengangkutan atau masalah lingkungan yang lebih luas, RT dapat meneruskan kepada RW atau instansi terkait.",
    dokumen_rt: [
      "Informasi lokasi dan kondisi masalah"
    ],
    instansi_tujuan: "RT/RW/Instansi kebersihan sesuai kebutuhan",
    penerbit_akhir: "Instansi terkait",
    crossLink: ["KB-10"],
    status: "aktif"
  },

  {
    id: "KB09-LING-002",
    kategori: "Lingkungan",
    nama: "Limbah Air atau Air Buangan",
    keywords: [
      "limbah air",
      "air buangan",
      "air kotor",
      "limbah rumah tangga",
      "saluran air"
    ],
    questions: [
      "Air buangan tetangga mengganggu",
      "Ada limbah air di lingkungan",
      "Bagaimana menangani air kotor?"
    ],
    answer:
      "Masalah air buangan sebaiknya dicari sumber dan dampaknya terlebih dahulu. RT dapat membantu mediasi dan koordinasi dengan warga. Jika terdapat pencemaran, gangguan serius, atau persoalan teknis yang tidak dapat diselesaikan di lingkungan, masalah dapat diteruskan kepada instansi terkait.",
    dokumen_rt: [
      "Informasi lokasi",
      "Keterangan kondisi lingkungan",
      "Dokumentasi apabila diperlukan"
    ],
    instansi_tujuan: "RT/RW/Instansi lingkungan sesuai masalah",
    penerbit_akhir: "Instansi berwenang apabila diperlukan",
    crossLink: [],
    status: "aktif"
  },

  {
    id: "KB09-LING-003",
    kategori: "Lingkungan",
    nama: "Saluran Air Tersumbat",
    keywords: [
      "selokan mampet",
      "drainase mampet",
      "saluran tersumbat",
      "got mampet",
      "air tidak mengalir"
    ],
    questions: [
      "Got di depan rumah mampet",
      "Saluran air tersumbat",
      "Bagaimana melaporkan drainase mampet?"
    ],
    answer:
      "Laporkan terlebih dahulu kepada pengurus RT agar kondisi dan lokasi dapat diperiksa serta dikoordinasikan. Jika saluran merupakan fasilitas umum yang memerlukan penanganan pemerintah, RT/RW dapat meneruskan laporan kepada instansi terkait.",
    dokumen_rt: [
      "Lokasi saluran",
      "Informasi kondisi",
      "Dokumentasi apabila diperlukan"
    ],
    instansi_tujuan: "RT/RW/Instansi terkait",
    penerbit_akhir: "Instansi pengelola fasilitas sesuai lokasi",
    crossLink: [],
    status: "aktif"
  },

  {
    id: "KB09-LING-004",
    kategori: "Lingkungan",
    nama: "Banjir atau Genangan",
    keywords: [
      "banjir",
      "genangan",
      "air masuk rumah",
      "banjir lingkungan",
      "genangan air"
    ],
    questions: [
      "Lingkungan kami sering banjir",
      "Ada genangan air di jalan",
      "Bagaimana melaporkan banjir?"
    ],
    answer:
      "Untuk banjir atau genangan, warga dapat melaporkan kondisi kepada RT agar dapat dipetakan dan dikoordinasikan. Jika masalah berkaitan dengan drainase, jalan, sungai, atau fasilitas umum, laporan dapat diteruskan melalui RW atau instansi pemerintah yang menangani fasilitas tersebut.",
    dokumen_rt: [
      "Lokasi genangan",
      "Informasi waktu dan kondisi",
      "Dokumentasi apabila diperlukan"
    ],
    instansi_tujuan: "RT/RW/Instansi pemerintah terkait",
    penerbit_akhir: "Instansi pengelola fasilitas",
    crossLink: [],
    status: "aktif"
  },

  {
    id: "KB09-LING-005",
    kategori: "Lingkungan",
    nama: "Pohon Membahayakan",
    keywords: [
      "pohon tumbang",
      "pohon berbahaya",
      "pohon besar",
      "pohon rawan tumbang",
      "potong pohon"
    ],
    questions: [
      "Ada pohon yang membahayakan",
      "Pohon di lingkungan rawan tumbang",
      "Bagaimana melaporkan pohon berbahaya?"
    ],
    answer:
      "Jika pohon berada di area pribadi, warga perlu berkoordinasi dengan pemilik lahan. Jika berada di fasilitas umum atau membahayakan masyarakat, laporkan kepada RT/RW untuk dikoordinasikan dengan instansi yang berwenang. Jangan melakukan penebangan sendiri jika pohon berada di fasilitas umum atau membutuhkan penanganan teknis.",
    dokumen_rt: [
      "Lokasi pohon",
      "Kondisi dan tingkat bahaya",
      "Dokumentasi apabila diperlukan"
    ],
    instansi_tujuan: "RT/RW/Instansi pengelola lingkungan",
    penerbit_akhir: "Instansi berwenang",
    crossLink: [],
    status: "aktif"
  },

  {
    id: "KB09-LING-006",
    kategori: "Lingkungan",
    nama: "Kabel atau Tiang Mengganggu",
    keywords: [
      "kabel",
      "kabel semrawut",
      "tiang listrik",
      "kabel internet",
      "kabel mengganggu"
    ],
    questions: [
      "Kabel di depan rumah mengganggu",
      "Ada kabel berbahaya",
      "Bagaimana melaporkan kabel semrawut?"
    ],
    answer:
      "Jika kabel atau tiang merupakan jaringan utilitas, warga sebaiknya melaporkan kepada RT dan kemudian kepada pemilik jaringan atau instansi yang berwenang. RT dapat membantu koordinasi lingkungan tetapi bukan pemilik atau operator jaringan utilitas.",
    dokumen_rt: [
      "Lokasi kabel/tiang",
      "Dokumentasi apabila diperlukan"
    ],
    instansi_tujuan: "RT/RW/Pemilik jaringan/Instansi terkait",
    penerbit_akhir: "Pemilik jaringan atau instansi berwenang",
    crossLink: [],
    status: "aktif"
  },

  {
    id: "KB09-LING-007",
    kategori: "Lingkungan",
    nama: "Lampu Jalan Mati",
    keywords: [
      "lampu jalan mati",
      "PJU mati",
      "lampu lingkungan",
      "penerangan jalan",
      "jalan gelap"
    ],
    questions: [
      "Lampu jalan mati",
      "Jalan di lingkungan gelap",
      "Bagaimana melaporkan PJU mati?"
    ],
    answer:
      "Laporkan lokasi lampu jalan yang mati kepada RT agar dapat dicatat dan diteruskan kepada pihak yang bertanggung jawab atas penerangan tersebut. Jika merupakan fasilitas pemerintah, laporan dapat diteruskan melalui mekanisme pemerintah daerah.",
    dokumen_rt: [
      "Lokasi lampu",
      "Kondisi lampu",
      "Dokumentasi apabila diperlukan"
    ],
    instansi_tujuan: "RT/RW/Instansi pengelola PJU",
    penerbit_akhir: "Instansi pengelola fasilitas",
    crossLink: [],
    status: "aktif"
  },

  {
    id: "KB09-LING-008",
    kategori: "Lingkungan",
    nama: "Parkir Mengganggu Jalan",
    keywords: [
      "parkir",
      "parkir sembarangan",
      "mobil parkir",
      "motor parkir",
      "jalan terhalang"
    ],
    questions: [
      "Tetangga parkir sembarangan",
      "Mobil menghalangi jalan",
      "Bagaimana masalah parkir diselesaikan?"
    ],
    answer:
      "Masalah parkir di lingkungan sebaiknya diselesaikan terlebih dahulu melalui komunikasi dan koordinasi RT. Pengurus dapat membuat kesepakatan lingkungan mengenai penggunaan jalan dan area parkir. Jika terdapat pelanggaran terhadap fasilitas atau aturan yang berada di bawah kewenangan instansi tertentu, masalah dapat diteruskan kepada pihak berwenang.",
    dokumen_rt: [
      "Lokasi masalah",
      "Keterangan kondisi"
    ],
    instansi_tujuan: "RT/RW/Instansi berwenang sesuai lokasi",
    penerbit_akhir: "Pihak berwenang",
    crossLink: [],
    status: "aktif"
  },

  {
    id: "KB09-LING-009",
    kategori: "Lingkungan",
    nama: "Kebisingan",
    keywords: [
      "berisik",
      "bising",
      "kebisingan",
      "suara keras",
      "tetangga berisik"
    ],
    questions: [
      "Tetangga terlalu berisik",
      "Ada suara bising setiap malam",
      "Bagaimana mengatasi kebisingan?"
    ],
    answer:
      "Masalah kebisingan sebaiknya dimulai dengan komunikasi yang baik dan koordinasi melalui RT. Jika berulang dan menimbulkan gangguan serius, pengurus dapat membantu mediasi atau meneruskan masalah kepada pihak berwenang sesuai jenis dan tingkat gangguan.",
    dokumen_rt: [
      "Keterangan waktu dan kondisi gangguan"
    ],
    instansi_tujuan: "RT/RW/Pihak berwenang sesuai masalah",
    penerbit_akhir: "Pihak berwenang apabila diperlukan",
    crossLink: [],
    status: "aktif"
  },

  {
    id: "KB09-LING-010",
    kategori: "Lingkungan",
    nama: "Hewan Mengganggu Lingkungan",
    keywords: [
      "hewan",
      "anjing",
      "kucing",
      "hewan peliharaan",
      "hewan mengganggu"
    ],
    questions: [
      "Hewan peliharaan tetangga mengganggu",
      "Ada hewan yang membahayakan",
      "Bagaimana masalah hewan di lingkungan?"
    ],
    answer:
      "Masalah hewan peliharaan sebaiknya dibicarakan terlebih dahulu dengan pemilik melalui koordinasi yang baik. RT dapat membantu mediasi apabila gangguan terus terjadi. Jika terdapat ancaman keselamatan, penyakit, atau persoalan yang membutuhkan penanganan khusus, masalah dapat diteruskan kepada instansi yang berwenang.",
    dokumen_rt: [
      "Keterangan gangguan",
      "Dokumentasi apabila diperlukan"
    ],
    instansi_tujuan: "RT/RW/Instansi terkait sesuai masalah",
    penerbit_akhir: "Pihak berwenang apabila diperlukan",
    crossLink: [],
    status: "aktif"
  },

  {
    id: "KB09-LING-011",
    kategori: "Lingkungan",
    nama: "Perselisihan Antarwarga",
    keywords: [
      "konflik tetangga",
      "perselisihan warga",
      "cekcok tetangga",
      "masalah tetangga",
      "konflik lingkungan"
    ],
    questions: [
      "Saya berselisih dengan tetangga",
      "Ada konflik antarwarga",
      "Apakah RT bisa menjadi mediator?"
    ],
    answer:
      "RT dapat membantu mediasi persoalan lingkungan sepanjang masih berada dalam lingkup hubungan bertetangga dan dapat diselesaikan secara musyawarah. Jika terdapat ancaman, kekerasan, tindak pidana, atau persoalan hukum, warga perlu menghubungi pihak yang berwenang.",
    dokumen_rt: [
      "Keterangan para pihak",
      "Informasi kejadian",
      "Dokumentasi apabila diperlukan"
    ],
    instansi_tujuan: "RT/RW/Pihak berwenang sesuai masalah",
    penerbit_akhir: "Pihak berwenang apabila diperlukan",
    crossLink: ["KB-07", "KB-10"],
    status: "aktif"
  },

  {
    id: "KB09-LING-012",
    kategori: "Lingkungan",
    nama: "Batas Rumah atau Tanah",
    keywords: [
      "batas tanah",
      "batas rumah",
      "sengketa batas",
      "patok tanah",
      "batas pekarangan"
    ],
    questions: [
      "Batas tanah saya bermasalah",
      "Tetangga mengambil batas tanah",
      "Apakah RT menentukan batas tanah?"
    ],
    answer:
      "RT tidak berwenang menetapkan atau mengubah hak kepemilikan maupun batas hukum tanah. Jika terjadi persoalan batas, warga sebaiknya menggunakan dokumen pertanahan yang dimiliki dan meminta penyelesaian melalui instansi pertanahan atau mekanisme hukum yang sesuai. RT dapat membantu sebatas keterangan lingkungan apabila diperlukan.",
    dokumen_warga: [
      "Dokumen pertanahan",
      "Identitas pemilik",
      "Dokumen pendukung lainnya"
    ],
    dokumen_rt: [
      "Keterangan lingkungan apabila diperlukan"
    ],
    instansi_tujuan: "Instansi pertanahan/Pihak berwenang",
    penerbit_akhir: "Instansi pertanahan/Pihak berwenang",
    crossLink: ["KB-10"],
    status: "aktif"
  },

  {
    id: "KB09-LING-013",
    kategori: "Lingkungan",
    nama: "Warisan dan Kepemilikan Rumah",
    keywords: [
      "warisan rumah",
      "warisan tanah",
      "rumah warisan",
      "sengketa warisan",
      "kepemilikan rumah"
    ],
    questions: [
      "Rumah orang tua sudah meninggal bagaimana?",
      "Bagaimana mengurus rumah warisan?",
      "Apakah RT menentukan ahli waris?"
    ],
    answer:
      "RT tidak menentukan siapa ahli waris dan tidak menetapkan hak kepemilikan tanah atau rumah. Penyelesaian warisan harus menggunakan dokumen dan mekanisme hukum yang sesuai. RT dapat membantu memberikan keterangan mengenai kondisi lingkungan atau riwayat tinggal jika memang diperlukan dan dapat dibuktikan.",
    dokumen_warga: [
      "Identitas para pihak",
      "Dokumen kepemilikan",
      "Dokumen kematian",
      "Dokumen keluarga/waris sesuai kebutuhan"
    ],
    dokumen_rt: [
      "Keterangan lingkungan apabila diperlukan"
    ],
    instansi_tujuan: "Instansi pertanahan/Notaris/Pengadilan/Instansi berwenang sesuai masalah",
    penerbit_akhir: "Instansi berwenang",
    crossLink: ["KB-02", "KB-04", "KB-10"],
    status: "aktif"
  },

  {
    id: "KB09-LING-014",
    kategori: "Lingkungan",
    nama: "Ancaman atau Kekerasan",
    keywords: [
      "ancaman",
      "diancam",
      "kekerasan",
      "penganiayaan",
      "bahaya"
    ],
    questions: [
      "Saya mendapat ancaman",
      "Ada kekerasan antarwarga",
      "Apa yang harus dilakukan jika diancam?"
    ],
    answer:
      "Jika terdapat ancaman serius, kekerasan, atau bahaya terhadap keselamatan, utamakan keselamatan warga dan hubungi pihak berwenang. RT dapat membantu koordinasi lingkungan, tetapi RT bukan pengganti kepolisian dan tidak boleh menangani tindak pidana secara sepihak.",
    dokumen_warga: [
      "Identitas",
      "Bukti atau dokumentasi apabila aman untuk dikumpulkan"
    ],
    dokumen_rt: [
      "Informasi kejadian apabila diperlukan"
    ],
    instansi_tujuan: "Kepolisian/Pihak berwenang",
    penerbit_akhir: "Pihak berwenang",
    crossLink: ["KB-07"],
    status: "aktif"
  },

  {
    id: "KB09-LING-015",
    kategori: "Lingkungan",
    nama: "Kegiatan Warga di Lingkungan",
    keywords: [
      "kegiatan warga",
      "acara warga",
      "acara lingkungan",
      "kegiatan RT",
      "izin kegiatan"
    ],
    questions: [
      "Kami mau mengadakan kegiatan warga",
      "Apakah perlu melapor ke RT?",
      "Bagaimana mengadakan acara di lingkungan?"
    ],
    answer:
      "Kegiatan warga sebaiknya dikoordinasikan dengan RT agar jadwal, lokasi, keamanan, kebersihan, parkir, dan penggunaan fasilitas lingkungan dapat diatur. Jika kegiatan membutuhkan izin dari instansi lain, warga perlu mengikuti ketentuan instansi tersebut.",
    dokumen_rt: [
      "Informasi kegiatan",
      "Waktu dan lokasi",
      "Penanggung jawab kegiatan"
    ],
    instansi_tujuan: "RT/RW/Instansi terkait sesuai jenis kegiatan",
    penerbit_akhir: "Sesuai jenis kegiatan",
    crossLink: ["KB-10"],
    status: "aktif"
  },

  {
    id: "KB09-LING-016",
    kategori: "Lingkungan",
    nama: "Penggunaan Fasilitas Lingkungan",
    keywords: [
      "fasilitas RT",
      "fasilitas umum",
      "balai warga",
      "tempat kegiatan",
      "fasilitas lingkungan"
    ],
    questions: [
      "Bolehkah menggunakan fasilitas RT?",
      "Bagaimana meminjam fasilitas warga?",
      "Saya ingin menggunakan tempat fasilitas umum"
    ],
    answer:
      "Penggunaan fasilitas lingkungan mengikuti aturan dan kesepakatan yang berlaku di RT/RW. Warga sebaiknya mengajukan permintaan kepada pengurus terlebih dahulu dan menjelaskan tujuan, waktu penggunaan, serta penanggung jawab.",
    dokumen_rt: [
      "Permintaan penggunaan fasilitas",
      "Informasi kegiatan",
      "Penanggung jawab"
    ],
    instansi_tujuan: "RT/RW/Pengelola fasilitas",
    penerbit_akhir: "Pengelola fasilitas sesuai kewenangan",
    crossLink: ["KB-10"],
    status: "aktif"
  },

  {
    id: "KB09-LING-017",
    kategori: "Lingkungan",
    nama: "Pengaduan Masalah Lingkungan",
    keywords: [
      "pengaduan",
      "laporan lingkungan",
      "lapor RT",
      "keluhan lingkungan",
      "pengaduan warga"
    ],
    questions: [
      "Bagaimana membuat pengaduan lingkungan?",
      "Saya ingin melapor masalah lingkungan",
      "Ke mana menyampaikan keluhan warga?"
    ],
    answer:
      "Untuk masalah yang terjadi di lingkungan RT, warga dapat menyampaikan laporan kepada pengurus RT dengan menjelaskan lokasi, kejadian, waktu, dan dampaknya. Jika masalah berada di luar kewenangan RT, pengurus dapat meneruskannya kepada RW atau instansi yang berwenang.",
    dokumen_rt: [
      "Identitas pelapor apabila diperlukan",
      "Lokasi kejadian",
      "Keterangan masalah",
      "Dokumentasi apabila diperlukan"
    ],
    instansi_tujuan: "RT/RW/Instansi terkait",
    penerbit_akhir: "Pihak yang berwenang menangani masalah",
    crossLink: ["KB-07", "KB-10"],
    status: "aktif"
  },

  {
    id: "KB09-RULE",
    kategori: "Usaha, Rumah & Lingkungan",
    nama: "Aturan Umum Usaha, Rumah dan Lingkungan",
    keywords: [
      "aturan usaha",
      "aturan rumah",
      "aturan lingkungan",
      "kewenangan RT",
      "izin RT"
    ],
    questions: [
      "Apa saja kewenangan RT?",
      "Apakah semua izin harus dari RT?",
      "Apa yang bisa dilakukan RT?"
    ],
    answer:
      "RT berperan dalam administrasi dan koordinasi lingkungan, bukan sebagai penerbit seluruh izin pemerintah. Untuk usaha, bangunan, pertanahan, keamanan, kesehatan, dan perizinan teknis, AI harus membedakan antara keterangan dari RT dengan dokumen resmi yang diterbitkan oleh instansi berwenang. Jika warga menyampaikan masalah, tanyakan terlebih dahulu tujuan, lokasi, kondisi, dan jenis dokumen yang dibutuhkan.",
    instansi_tujuan:
      "RT/RW/Kelurahan/Instansi pemerintah sesuai jenis layanan",
    penerbit_akhir: "Instansi berwenang sesuai jenis dokumen",
    crossLink: [
      "KB-01",
      "KB-02",
      "KB-05",
      "KB-07",
      "KB-08",
      "KB-10"
    ],
    status: "aktif"
  }
];