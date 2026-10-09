// =========================================================
// KB-04 — KEMATIAN & PEMAKAMAN
// RT 03 / RW 07 Karet - Setiabudi
// =========================================================

export const KB04_Kematian = [
  {
    id: "KB04-KEM-001",
    kategori: "Kematian",
    nama: "Melaporkan Warga Meninggal",
    keywords: [
      "warga meninggal",
      "lapor kematian",
      "orang meninggal",
      "anggota keluarga meninggal",
      "melaporkan kematian"
    ],
    questions: [
      "Apa yang harus dilakukan jika warga meninggal?",
      "Ayah saya meninggal, saya harus mengurus apa?",
      "Bagaimana melaporkan warga yang meninggal?"
    ],
    answer:
      "Jika warga RT 03 meninggal dunia, keluarga sebaiknya segera melaporkan kepada pengurus RT agar data lingkungan dapat diperbarui dan administrasi pemakaman dapat dibantu. Selanjutnya, peristiwa kematian perlu diproses melalui administrasi kependudukan untuk mendapatkan dokumen resmi sesuai ketentuan. Jika ingin menentukan langkah yang tepat, perlu diketahui apakah meninggal di rumah, rumah sakit, atau tempat lain serta apakah dokumen kematian dari fasilitas kesehatan sudah tersedia.",
    dokumen_warga: [
      "KTP-el almarhum apabila tersedia",
      "KK",
      "Dokumen atau surat keterangan kematian apabila tersedia"
    ],
    dokumen_rt: [
      "Laporan/keterangan kematian",
      "Pembaruan status warga di lingkungan"
    ],
    instansi_tujuan: "RT/Kelurahan/Dukcapil",
    penerbit_akhir: "Dukcapil untuk dokumen kependudukan",
    crossLink: ["KB-01", "KB-02", "KB-05"],
    status: "aktif"
  },

  {
    id: "KB04-KEM-002",
    kategori: "Kematian",
    nama: "Kematian di Rumah Sakit",
    keywords: [
      "meninggal di rumah sakit",
      "kematian rumah sakit",
      "surat kematian rumah sakit",
      "pasien meninggal",
      "dokumen kematian rumah sakit"
    ],
    questions: [
      "Kalau meninggal di rumah sakit bagaimana?",
      "Apa yang harus dilakukan jika keluarga meninggal di rumah sakit?",
      "Surat kematian dari rumah sakit digunakan untuk apa?"
    ],
    answer:
      "Jika seseorang meninggal di rumah sakit, keluarga sebaiknya memperoleh dokumen atau surat keterangan kematian dari fasilitas kesehatan. Dokumen tersebut dapat menjadi bagian dari proses administrasi kematian selanjutnya. Keluarga juga sebaiknya melaporkan kepada RT apabila almarhum merupakan warga atau tinggal di lingkungan RT 03.",
    dokumen_warga: [
      "KTP-el almarhum apabila tersedia",
      "KK",
      "Surat atau dokumen keterangan kematian dari rumah sakit"
    ],
    dokumen_rt: [
      "Laporan kematian warga"
    ],
    instansi_tujuan: "RT/Kelurahan/Dukcapil",
    penerbit_akhir: "Dukcapil untuk dokumen kependudukan",
    crossLink: ["KB-02", "KB-03"],
    status: "aktif"
  },

  {
    id: "KB04-KEM-003",
    kategori: "Kematian",
    nama: "Kematian di Rumah",
    keywords: [
      "meninggal di rumah",
      "kematian di rumah",
      "surat kematian rumah",
      "orang meninggal di rumah",
      "lapor kematian di rumah"
    ],
    questions: [
      "Kalau meninggal di rumah bagaimana mengurusnya?",
      "Apa yang dilakukan jika orang meninggal di rumah?",
      "Bagaimana mendapatkan dokumen kematian jika meninggal di rumah?"
    ],
    answer:
      "Jika seseorang meninggal di rumah, keluarga perlu melaporkan peristiwa tersebut kepada pengurus lingkungan dan mengikuti prosedur pembuktian serta pencatatan kematian yang berlaku. Dokumen yang diperlukan dapat berbeda berdasarkan kondisi kematian. Jika tidak ada dokumen dari fasilitas kesehatan, keluarga perlu meminta arahan Kelurahan/Dukcapil mengenai dokumen atau keterangan yang diperlukan.",
    dokumen_warga: [
      "KTP-el almarhum apabila tersedia",
      "KK",
      "Bukti atau dokumen kematian yang tersedia"
    ],
    dokumen_rt: [
      "Keterangan/laporan kematian"
    ],
    instansi_tujuan: "RT/Kelurahan/Dukcapil",
    penerbit_akhir: "Dukcapil untuk dokumen kependudukan",
    crossLink: ["KB-01", "KB-02"],
    status: "aktif"
  },

  {
    id: "KB04-KEM-004",
    kategori: "Kematian",
    nama: "Akta Kematian",
    keywords: [
      "akta kematian",
      "akte kematian",
      "buat akta kematian",
      "surat kematian dukcapil",
      "dokumen kematian"
    ],
    questions: [
      "Bagaimana membuat Akta Kematian?",
      "Di mana mengurus Akta Kematian?",
      "Apakah RT bisa membuat Akta Kematian?"
    ],
    answer:
      "Akta Kematian merupakan dokumen administrasi kependudukan resmi. RT bukan penerbit Akta Kematian. RT dapat membantu administrasi lingkungan atau memberikan keterangan apabila diperlukan, sedangkan pencatatan dan penerbitan dokumen kependudukan dilakukan oleh instansi yang berwenang.",
    dokumen_warga: [
      "KK",
      "KTP-el almarhum apabila tersedia",
      "Dokumen atau surat keterangan kematian",
      "Dokumen pendukung lainnya sesuai kondisi"
    ],
    dokumen_rt: [
      "Surat keterangan/pengantar apabila diperlukan"
    ],
    instansi_tujuan: "Kelurahan/Dukcapil",
    penerbit_akhir: "Dukcapil",
    crossLink: ["KB-02"],
    status: "aktif"
  },

  {
    id: "KB04-KEM-005",
    kategori: "Kematian",
    nama: "Nama Almarhum Masih Tercantum di KK",
    keywords: [
      "orang meninggal masih di KK",
      "nama almarhum masih di KK",
      "KK belum diperbarui setelah meninggal",
      "hapus nama almarhum",
      "anggota KK meninggal"
    ],
    questions: [
      "Orang tua saya meninggal tetapi masih ada di KK",
      "Nama almarhum masih tercantum di KK",
      "Bagaimana memperbarui KK setelah ada anggota meninggal?"
    ],
    answer:
      "Jika anggota keluarga meninggal, data kependudukan perlu diperbarui berdasarkan dokumen kematian. Jangan hanya menghapus nama almarhum dari data internal RT. Setelah kematian tercatat secara resmi, susunan KK perlu disesuaikan dengan kondisi keluarga yang sebenarnya.",
    dokumen_warga: [
      "KK",
      "KTP-el almarhum apabila tersedia",
      "Akta atau dokumen kematian"
    ],
    dokumen_rt: [
      "Keterangan kematian",
      "Pembaruan data warga"
    ],
    instansi_tujuan: "Kelurahan/Dukcapil",
    penerbit_akhir: "Dukcapil",
    crossLink: ["KB-02"],
    status: "aktif"
  },

  {
    id: "KB04-KEM-006",
    kategori: "Kematian",
    nama: "Kepala Keluarga Meninggal",
    keywords: [
      "kepala keluarga meninggal",
      "suami meninggal",
      "ayah meninggal",
      "kepala KK meninggal",
      "KK setelah kepala keluarga meninggal"
    ],
    questions: [
      "Apa yang dilakukan jika Kepala Keluarga meninggal?",
      "Suami saya meninggal, bagaimana KK?",
      "Ayah sebagai kepala keluarga meninggal"
    ],
    answer:
      "Jika Kepala Keluarga meninggal, pertama-tama peristiwa kematian perlu dicatat secara resmi. Setelah itu, susunan KK perlu disesuaikan dengan keadaan keluarga. Siapa yang menjadi Kepala Keluarga berikutnya bergantung pada kondisi keluarga dan ketentuan administrasi kependudukan.",
    dokumen_warga: [
      "KK",
      "KTP-el almarhum apabila tersedia",
      "Dokumen kematian"
    ],
    dokumen_rt: [
      "Keterangan kematian",
      "Pembaruan data keluarga"
    ],
    instansi_tujuan: "Kelurahan/Dukcapil",
    penerbit_akhir: "Dukcapil",
    crossLink: ["KB-02", "KB-06"],
    status: "aktif"
  },

  {
    id: "KB04-KEM-007",
    kategori: "Kematian",
    nama: "Suami atau Istri Meninggal",
    keywords: [
      "suami meninggal",
      "istri meninggal",
      "pasangan meninggal",
      "cerai mati",
      "status cerai mati"
    ],
    questions: [
      "Suami saya meninggal, bagaimana status saya?",
      "Istri saya meninggal, apakah status KK berubah?",
      "Bagaimana status perkawinan setelah pasangan meninggal?"
    ],
    answer:
      "Jika suami atau istri meninggal, peristiwa kematian perlu dicatat terlebih dahulu. Setelah itu, data administrasi kependudukan keluarga dapat diperbarui, termasuk status perkawinan dan susunan KK sesuai keadaan sebenarnya. Dalam administrasi keluarga, kondisi ini berbeda dengan perceraian hidup.",
    dokumen_warga: [
      "KK",
      "KTP-el",
      "Dokumen kematian pasangan"
    ],
    dokumen_rt: [
      "Keterangan kematian apabila diperlukan"
    ],
    instansi_tujuan: "Kelurahan/Dukcapil",
    penerbit_akhir: "Dukcapil",
    crossLink: ["KB-02", "KB-06"],
    status: "aktif"
  },

  {
    id: "KB04-KEM-008",
    kategori: "Kematian",
    nama: "Kematian Anak",
    keywords: [
      "anak meninggal",
      "anak meninggal dunia",
      "kematian anak",
      "anak meninggal masih di KK",
      "lapor kematian anak"
    ],
    questions: [
      "Anak saya meninggal, apa yang harus dilakukan?",
      "Bagaimana mengurus kematian anak?",
      "Anak meninggal tetapi masih ada di KK"
    ],
    answer:
      "Jika anak meninggal, keluarga perlu melaporkan peristiwa kematian dan mengurus dokumen kematian sesuai ketentuan. Setelah pencatatan kematian selesai, data anak pada KK dan data administrasi lingkungan perlu disesuaikan.",
    dokumen_warga: [
      "KK",
      "Dokumen identitas anak apabila tersedia",
      "Dokumen kematian"
    ],
    dokumen_rt: [
      "Laporan/keterangan kematian"
    ],
    instansi_tujuan: "RT/Kelurahan/Dukcapil",
    penerbit_akhir: "Dukcapil",
    crossLink: ["KB-02", "KB-03"],
    status: "aktif"
  },

  {
    id: "KB04-KEM-009",
    kategori: "Kematian",
    nama: "KTP Milik Orang yang Meninggal",
    keywords: [
      "KTP orang meninggal",
      "KTP almarhum",
      "KTP orang meninggal bagaimana",
      "dokumen identitas almarhum",
      "KTP setelah meninggal"
    ],
    questions: [
      "Apa yang dilakukan dengan KTP orang yang meninggal?",
      "KTP almarhum harus bagaimana?",
      "Apakah KTP orang meninggal masih berlaku?"
    ],
    answer:
      "Setelah seseorang meninggal, status kependudukannya perlu diperbarui secara resmi. KTP-el milik almarhum tidak digunakan sebagai identitas aktif setelah status kematian tercatat. Simpan dokumen yang diperlukan untuk proses administrasi keluarga dan ikuti arahan instansi berwenang mengenai dokumen tersebut.",
    dokumen_warga: [
      "KTP-el almarhum apabila tersedia",
      "KK",
      "Dokumen kematian"
    ],
    dokumen_rt: [
      "Pembaruan status warga"
    ],
    instansi_tujuan: "Kelurahan/Dukcapil",
    penerbit_akhir: "Dukcapil",
    crossLink: ["KB-01", "KB-02"],
    status: "aktif"
  },

  {
    id: "KB04-KEM-010",
    kategori: "Kematian",
    nama: "Surat Keterangan Kematian dari RT",
    keywords: [
      "surat kematian RT",
      "surat keterangan kematian RT",
      "surat kematian dari RT",
      "keterangan warga meninggal",
      "surat pengantar kematian"
    ],
    questions: [
      "Apakah RT bisa membuat surat kematian?",
      "Bagaimana meminta surat keterangan kematian dari RT?",
      "Saya membutuhkan surat kematian dari RT"
    ],
    answer:
      "RT dapat membuat atau membantu administrasi berupa surat keterangan/pengantar mengenai peristiwa kematian sesuai kewenangan dan kebutuhan pelayanan setempat. Surat dari RT bukan pengganti Akta Kematian. Jika tujuan akhirnya adalah pencatatan kematian secara resmi, proses tetap dilanjutkan kepada Kelurahan/Dukcapil sesuai ketentuan.",
    dokumen_warga: [
      "KTP-el almarhum apabila tersedia",
      "KK",
      "Bukti atau dokumen kematian"
    ],
    dokumen_rt: [
      "Data warga",
      "Keterangan peristiwa kematian"
    ],
    instansi_tujuan: "RT lalu Kelurahan/Dukcapil sesuai tujuan",
    penerbit_akhir: "RT untuk surat keterangan RT; Dukcapil untuk dokumen kependudukan",
    crossLink: ["KB-10"],
    status: "aktif"
  },

  {
    id: "KB04-KEM-011",
    kategori: "Pemakaman",
    nama: "Pengurusan Pemakaman",
    keywords: [
      "pemakaman",
      "pemakaman warga",
      "makam",
      "mengurus pemakaman",
      "pengantar pemakaman"
    ],
    questions: [
      "Bagaimana mengurus pemakaman warga?",
      "Apakah RT membantu pemakaman?",
      "Saya membutuhkan surat pengantar pemakaman"
    ],
    answer:
      "Untuk pemakaman warga RT 03, keluarga dapat berkoordinasi dengan pengurus RT mengenai administrasi lingkungan dan lokasi pemakaman. Jika pemakaman dilakukan di TPU atau lokasi yang dikelola pihak tertentu, persyaratan dan ketersediaan tempat mengikuti pengelola makam serta ketentuan wilayah setempat.",
    dokumen_warga: [
      "Dokumen identitas almarhum apabila tersedia",
      "Dokumen kematian"
    ],
    dokumen_rt: [
      "Surat pengantar/keterangan pemakaman apabila diperlukan"
    ],
    instansi_tujuan: "Pengelola TPU/Instansi terkait",
    penerbit_akhir: "Sesuai pengelola atau instansi tujuan",
    crossLink: ["KB-10"],
    status: "aktif"
  },

  {
    id: "KB04-KEM-012",
    kategori: "Pemakaman",
    nama: "Pemakaman di Luar Wilayah",
    keywords: [
      "makam di luar kota",
      "pemakaman luar daerah",
      "jenazah dibawa keluar kota",
      "makam keluarga",
      "pemakaman luar wilayah"
    ],
    questions: [
      "Jenazah akan dimakamkan di luar kota",
      "Bagaimana jika pemakaman di luar wilayah?",
      "Apa yang diperlukan untuk membawa jenazah ke daerah lain?"
    ],
    answer:
      "Jika jenazah akan dimakamkan di luar wilayah, keluarga perlu mengikuti ketentuan administrasi dan pengangkutan jenazah yang berlaku serta persyaratan dari tempat tujuan. RT dapat membantu surat atau keterangan lingkungan apabila diperlukan, tetapi persyaratan utama mengikuti instansi dan pengelola tempat pemakaman tujuan.",
    dokumen_warga: [
      "Dokumen kematian",
      "Identitas almarhum apabila tersedia",
      "Dokumen lain sesuai ketentuan perjalanan/pemakaman"
    ],
    dokumen_rt: [
      "Surat keterangan/pengantar apabila diperlukan"
    ],
    instansi_tujuan: "Instansi terkait/Pengelola pemakaman tujuan",
    penerbit_akhir: "Sesuai jenis dokumen",
    crossLink: ["KB-10"],
    status: "aktif"
  },

  {
    id: "KB04-KEM-013",
    kategori: "Pemakaman",
    nama: "Pindah Makam atau Pemindahan Jenazah",
    keywords: [
      "pindah makam",
      "pindah kuburan",
      "pemindahan makam",
      "bongkar makam",
      "pindah jenazah"
    ],
    questions: [
      "Bagaimana cara memindahkan makam?",
      "Apakah makam boleh dipindahkan?",
      "Bagaimana mengurus pemindahan jenazah?"
    ],
    answer:
      "Pemindahan makam atau jenazah merupakan proses khusus yang harus mengikuti aturan pengelola makam dan instansi wilayah terkait. Persyaratan dapat berbeda berdasarkan lokasi makam lama dan lokasi tujuan. RT dapat membantu koordinasi lingkungan jika diperlukan, tetapi izin pemindahan mengikuti pihak yang berwenang.",
    dokumen_warga: [
      "Dokumen identitas keluarga",
      "Dokumen kematian",
      "Data atau bukti lokasi makam lama apabila tersedia"
    ],
    dokumen_rt: [
      "Keterangan lingkungan apabila diperlukan"
    ],
    instansi_tujuan: "Pengelola makam/Instansi terkait",
    penerbit_akhir: "Instansi atau pengelola yang berwenang",
    crossLink: ["KB-10"],
    status: "aktif"
  },

  {
    id: "KB04-KEM-014",
    kategori: "Kematian",
    nama: "Warga Meninggal tetapi Data RT Masih Aktif",
    keywords: [
      "status warga meninggal",
      "warga meninggal masih aktif",
      "data RT belum diubah",
      "ubah status meninggal",
      "data warga meninggal"
    ],
    questions: [
      "Orang sudah meninggal tetapi masih aktif di data RT",
      "Bagaimana mengubah status warga menjadi meninggal?",
      "Data warga meninggal belum diperbarui"
    ],
    answer:
      "Jika warga RT 03 meninggal, data internal RT perlu diperbarui agar status warga tidak lagi tercatat sebagai aktif. Dalam sistem administrasi RT, status dapat dicatat sebagai Meninggal disertai tanggal meninggal dan keterangan yang diperlukan. Perubahan data internal RT tidak menggantikan pencatatan kematian pada Dukcapil.",
    dokumen_warga: [
      "Dokumen atau keterangan kematian"
    ],
    dokumen_rt: [
      "Tanggal meninggal",
      "Keterangan meninggal",
      "Pembaruan status warga"
    ],
    instansi_tujuan: "RT untuk data lingkungan; Kelurahan/Dukcapil untuk administrasi kependudukan",
    penerbit_akhir: "Sesuai jenis administrasi",
    crossLink: ["KB-02"],
    status: "aktif"
  },

  {
    id: "KB04-KEM-015",
    kategori: "Kematian",
    nama: "Kematian di Luar Kota atau Luar Daerah",
    keywords: [
      "meninggal di luar kota",
      "meninggal di luar daerah",
      "kematian luar kota",
      "warga meninggal di luar daerah",
      "meninggal saat bepergian"
    ],
    questions: [
      "Warga RT 03 meninggal di luar kota",
      "Bagaimana jika warga meninggal di daerah lain?",
      "Dokumen kematian dari luar kota bagaimana?"
    ],
    answer:
      "Jika warga RT 03 meninggal di luar kota atau daerah lain, dokumen kematian dari tempat kejadian perlu diperhatikan untuk proses administrasi selanjutnya. Keluarga tetap sebaiknya melaporkan kepada RT agar data lingkungan dapat diperbarui. Proses pencatatan resmi mengikuti ketentuan administrasi kependudukan.",
    dokumen_warga: [
      "KTP-el almarhum apabila tersedia",
      "KK",
      "Dokumen kematian dari tempat kejadian"
    ],
    dokumen_rt: [
      "Laporan kematian warga"
    ],
    instansi_tujuan: "RT/Kelurahan/Dukcapil",
    penerbit_akhir: "Dukcapil",
    crossLink: ["KB-01", "KB-02", "KB-05"],
    status: "aktif"
  },

  {
    id: "KB04-KEM-016",
    kategori: "Kematian",
    nama: "Kematian di Luar Negeri",
    keywords: [
      "meninggal di luar negeri",
      "kematian luar negeri",
      "WNI meninggal luar negeri",
      "jenazah dari luar negeri",
      "dokumen kematian luar negeri"
    ],
    questions: [
      "WNI meninggal di luar negeri bagaimana?",
      "Bagaimana mengurus warga yang meninggal di luar negeri?",
      "Jenazah akan dibawa pulang dari luar negeri"
    ],
    answer:
      "Jika WNI meninggal di luar negeri, proses administrasinya dapat melibatkan Perwakilan RI, dokumen kematian dari negara setempat, serta instansi Indonesia sesuai kebutuhan. Karena prosedurnya bersifat khusus, keluarga perlu mengikuti arahan Perwakilan RI dan instansi yang berwenang.",
    dokumen_warga: [
      "Dokumen identitas almarhum",
      "Dokumen kematian dari negara tempat meninggal",
      "Dokumen perjalanan/pengangkutan jenazah apabila diperlukan"
    ],
    dokumen_rt: [
      "Keterangan warga apabila diperlukan"
    ],
    instansi_tujuan: "Perwakilan RI/Instansi terkait",
    penerbit_akhir: "Instansi berwenang sesuai jenis dokumen",
    crossLink: ["KB-01", "KB-05"],
    status: "aktif"
  },

  {
    id: "KB04-KEM-017",
    kategori: "Kematian",
    nama: "Warga Meninggal Tanpa Keluarga",
    keywords: [
      "meninggal tanpa keluarga",
      "orang meninggal sendirian",
      "jenazah tanpa keluarga",
      "warga meninggal tidak ada keluarga",
      "tidak ada ahli keluarga"
    ],
    questions: [
      "Bagaimana jika warga meninggal tanpa keluarga?",
      "Ada warga meninggal tetapi tidak ada keluarga yang bisa dihubungi",
      "Siapa yang mengurus jenazah tanpa keluarga?"
    ],
    answer:
      "Jika seseorang meninggal tanpa keluarga yang dapat dihubungi, pengurus lingkungan sebaiknya segera berkoordinasi dengan Kelurahan dan instansi terkait. Jangan mengambil keputusan administratif atau pemakaman secara sepihak jika status keluarga dan identitas belum jelas. Penanganan jenazah mengikuti prosedur instansi yang berwenang.",
    dokumen_warga: [
      "Identitas atau dokumen yang ditemukan apabila tersedia"
    ],
    dokumen_rt: [
      "Keterangan keberadaan dan kondisi warga"
    ],
    instansi_tujuan: "Kelurahan/Instansi terkait",
    penerbit_akhir: "Instansi berwenang",
    crossLink: ["KB-08"],
    status: "aktif"
  },

  {
    id: "KB04-KEM-018",
    kategori: "Kematian",
    nama: "Identitas Orang Meninggal Tidak Diketahui",
    keywords: [
      "jenazah tanpa identitas",
      "identitas tidak diketahui",
      "orang meninggal tanpa identitas",
      "mayat tanpa identitas",
      "identitas almarhum tidak diketahui"
    ],
    questions: [
      "Bagaimana jika identitas orang meninggal tidak diketahui?",
      "Ada orang meninggal tanpa identitas",
      "Siapa yang mengurus jenazah tanpa identitas?"
    ],
    answer:
      "Jika identitas orang yang meninggal tidak diketahui, penanganannya harus dilakukan melalui instansi berwenang. RT tidak boleh membuat atau menebak identitas almarhum. Segera koordinasikan dengan Kelurahan dan pihak berwenang agar identifikasi, pencatatan, dan penanganan jenazah dilakukan sesuai prosedur.",
    dokumen_warga: [
      "Dokumen atau barang identitas yang ditemukan apabila ada"
    ],
    dokumen_rt: [
      "Keterangan mengenai lokasi dan kejadian"
    ],
    instansi_tujuan: "Kelurahan/Instansi berwenang",
    penerbit_akhir: "Instansi berwenang",
    crossLink: ["KB-08"],
    status: "aktif"
  },

  {
    id: "KB04-KEM-019",
    kategori: "Kematian",
    nama: "Data Kematian Belum Diperbarui",
    keywords: [
      "kematian belum tercatat",
      "data kematian belum masuk",
      "akta kematian belum ada",
      "kematian belum diperbarui",
      "status meninggal belum tercatat"
    ],
    questions: [
      "Kematian sudah lama tetapi belum tercatat",
      "Bagaimana jika Akta Kematian belum dibuat?",
      "Data orang yang meninggal belum diperbarui"
    ],
    answer:
      "Jika seseorang sudah meninggal tetapi data administrasinya belum diperbarui, keluarga perlu mengurus pencatatan kematian sesuai kondisi dan dokumen yang tersedia. Semakin lama data tidak diperbarui, semakin besar kemungkinan muncul ketidaksesuaian pada KK, data kependudukan, atau layanan administrasi lainnya.",
    dokumen_warga: [
      "KK",
      "KTP-el almarhum apabila tersedia",
      "Bukti atau dokumen kematian yang tersedia"
    ],
    dokumen_rt: [
      "Keterangan/laporan kematian"
    ],
    instansi_tujuan: "Kelurahan/Dukcapil",
    penerbit_akhir: "Dukcapil",
    crossLink: ["KB-01", "KB-02"],
    status: "aktif"
  },

  {
    id: "KB04-KEM-RULE",
    kategori: "Kematian",
    nama: "Aturan Umum Administrasi Kematian",
    keywords: [
      "aturan kematian",
      "administrasi kematian",
      "akta kematian dan RT",
      "surat kematian RT",
      "kematian dan KK",
      "kematian warga"
    ],
    questions: [
      "Apa bedanya surat kematian RT dan Akta Kematian?",
      "Apakah RT menerbitkan Akta Kematian?",
      "Apa yang harus dilakukan setelah warga meninggal?"
    ],
    answer:
      "Administrasi kematian perlu dibedakan menjadi beberapa bagian. RT dapat mencatat laporan kematian dan membantu surat atau keterangan lingkungan sesuai kebutuhan. Dokumen dari rumah sakit atau fasilitas kesehatan dapat menjadi bagian dari pembuktian kematian. Sedangkan pencatatan dan penerbitan dokumen administrasi kependudukan seperti Akta Kematian dilakukan oleh instansi yang berwenang. Setelah kematian tercatat, data KK dan data lingkungan juga perlu diperbarui.",
    instansi_tujuan: "RT/Kelurahan/Dukcapil",
    penerbit_akhir: "Dukcapil untuk dokumen kependudukan",
    crossLink: ["KB-01", "KB-02", "KB-10"],
    status: "aktif"
  }
];