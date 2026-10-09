// =========================================================
// KB-03 — KELAHIRAN & ANAK
// RT 03 / RW 07 Karet - Setiabudi
// =========================================================

export const KB03_Kelahiran = [
  {
    id: "KB03-KEL-001",
    kategori: "Kelahiran",
    nama: "Melaporkan Kelahiran Anak",
    keywords: [
      "bayi lahir",
      "anak baru lahir",
      "lapor kelahiran",
      "melaporkan kelahiran",
      "bayi baru lahir",
      "kelahiran anak"
    ],
    questions: [
      "Anak saya baru lahir, apa yang harus dilakukan?",
      "Bagaimana cara melaporkan kelahiran anak?",
      "Bayi baru lahir harus dilaporkan ke mana?"
    ],
    answer:
      "Kelahiran anak perlu dicatat dalam administrasi kependudukan. Untuk warga RT 03, keluarga dapat terlebih dahulu melaporkan kelahiran kepada pengurus RT agar data lingkungan dapat diperbarui. Selanjutnya pengurusan dokumen kependudukan dilakukan melalui layanan administrasi kependudukan sesuai ketentuan. Untuk menentukan langkah yang tepat, perlu diketahui tempat kelahiran dan dokumen kelahiran yang dimiliki.",
    dokumen_warga: [
      "Kartu Keluarga",
      "KTP-el orang tua",
      "Dokumen atau surat keterangan kelahiran dari fasilitas kesehatan apabila tersedia",
      "Dokumen perkawinan orang tua apabila diperlukan"
    ],
    dokumen_rt: [
      "Laporan/keterangan kelahiran warga"
    ],
    instansi_tujuan: "Kelurahan/Dukcapil",
    penerbit_akhir: "Dukcapil",
    crossLink: ["KB-01", "KB-02", "KB-04"],
    status: "aktif"
  },

  {
    id: "KB03-KEL-002",
    kategori: "Kelahiran",
    nama: "Akta Kelahiran",
    keywords: [
      "akta kelahiran",
      "buat akta kelahiran",
      "akte lahir",
      "surat kelahiran",
      "anak belum punya akta"
    ],
    questions: [
      "Bagaimana membuat akta kelahiran?",
      "Anak saya belum memiliki akta kelahiran",
      "Di mana mengurus akta kelahiran?"
    ],
    answer:
      "Akta Kelahiran merupakan dokumen administrasi kependudukan yang mencatat peristiwa kelahiran. Pengurusannya dilakukan melalui layanan administrasi kependudukan sesuai ketentuan. RT dapat membantu administrasi lingkungan apabila diperlukan, tetapi Akta Kelahiran bukan diterbitkan oleh RT.",
    dokumen_warga: [
      "Kartu Keluarga",
      "KTP-el orang tua",
      "Dokumen atau surat keterangan kelahiran",
      "Dokumen perkawinan orang tua apabila diperlukan"
    ],
    dokumen_rt: [
      "Surat keterangan/pengantar apabila diperlukan"
    ],
    instansi_tujuan: "Kelurahan/Dukcapil",
    penerbit_akhir: "Dukcapil",
    crossLink: ["KB-01", "KB-02"],
    status: "aktif"
  },

  {
    id: "KB03-KEL-003",
    kategori: "Kelahiran",
    nama: "Bayi Belum Masuk KK",
    keywords: [
      "bayi belum masuk KK",
      "anak belum masuk KK",
      "nama bayi belum ada di KK",
      "tambah bayi ke KK",
      "bayi tidak tercantum KK"
    ],
    questions: [
      "Bayi saya belum masuk KK",
      "Bagaimana memasukkan bayi ke KK?",
      "Anak baru lahir belum tercantum di KK"
    ],
    answer:
      "Jika bayi baru lahir belum tercantum dalam KK, data keluarga perlu diperbarui melalui administrasi kependudukan. Pengurusan kelahiran, Akta Kelahiran, dan perubahan KK dapat saling berkaitan. Karena prosedur dapat bergantung pada dokumen yang tersedia, warga perlu memastikan data orang tua dan dokumen kelahiran sudah benar.",
    dokumen_warga: [
      "KK",
      "KTP-el orang tua",
      "Dokumen kelahiran bayi",
      "Dokumen pendukung lainnya sesuai kondisi"
    ],
    dokumen_rt: [
      "Keterangan/laporan kelahiran apabila diperlukan"
    ],
    instansi_tujuan: "Kelurahan/Dukcapil",
    penerbit_akhir: "Dukcapil",
    crossLink: ["KB-02", "KB-04"],
    status: "aktif"
  },

  {
    id: "KB03-KEL-004",
    kategori: "Kelahiran",
    nama: "Kartu Identitas Anak (KIA)",
    keywords: [
      "KIA",
      "Kartu Identitas Anak",
      "buat KIA",
      "KIA anak",
      "identitas anak"
    ],
    questions: [
      "Apa itu KIA?",
      "Bagaimana membuat KIA?",
      "Anak saya belum punya KIA"
    ],
    answer:
      "Kartu Identitas Anak (KIA) merupakan dokumen identitas bagi anak sesuai ketentuan administrasi kependudukan. Pengurusannya dilakukan melalui layanan administrasi kependudukan yang berlaku. Persyaratan dapat berbeda berdasarkan usia dan kondisi anak.",
    dokumen_warga: [
      "Kartu Keluarga",
      "Akta Kelahiran atau dokumen kelahiran",
      "Dokumen orang tua/wali sesuai ketentuan",
      "Foto anak apabila dipersyaratkan"
    ],
    dokumen_rt: [
      "Surat pengantar apabila diperlukan"
    ],
    instansi_tujuan: "Kelurahan/Dukcapil",
    penerbit_akhir: "Dukcapil",
    crossLink: ["KB-01", "KB-02"],
    status: "aktif"
  },

  {
    id: "KB03-KEL-005",
    kategori: "Kelahiran",
    nama: "KIA Hilang atau Rusak",
    keywords: [
      "KIA hilang",
      "KIA rusak",
      "KIA pengganti",
      "KIA hilang bagaimana",
      "kartu identitas anak hilang"
    ],
    questions: [
      "KIA anak saya hilang",
      "Bagaimana mengganti KIA yang rusak?",
      "Apa yang dilakukan jika KIA hilang?"
    ],
    answer:
      "Jika KIA hilang atau rusak, penggantian dilakukan melalui layanan administrasi kependudukan sesuai ketentuan. Siapkan dokumen identitas anak dan orang tua serta dokumen pendukung yang diperlukan.",
    dokumen_warga: [
      "KK",
      "Akta Kelahiran",
      "Dokumen identitas orang tua/wali",
      "KIA yang rusak apabila masih tersedia"
    ],
    dokumen_rt: [
      "Surat keterangan/pengantar apabila diperlukan"
    ],
    instansi_tujuan: "Kelurahan/Dukcapil",
    penerbit_akhir: "Dukcapil",
    crossLink: ["KB-01", "KB-02"],
    status: "aktif"
  },

  {
    id: "KB03-KEL-006",
    kategori: "Kelahiran",
    nama: "Perubahan Data Anak",
    keywords: [
      "data anak salah",
      "ubah data anak",
      "perbaikan akta kelahiran",
      "data kelahiran salah",
      "nama anak salah"
    ],
    questions: [
      "Nama anak di dokumen salah",
      "Bagaimana memperbaiki data anak?",
      "Data kelahiran anak tidak sesuai"
    ],
    answer:
      "Jika terdapat kesalahan atau perubahan data anak, jenis dokumen yang harus diperbaiki perlu ditentukan terlebih dahulu. Data pada Akta Kelahiran, KK, KIA, dan dokumen lainnya harus konsisten. Perbaikan dokumen resmi dilakukan melalui instansi administrasi kependudukan sesuai jenis perubahannya.",
    dokumen_warga: [
      "KK",
      "Akta Kelahiran",
      "KIA apabila sudah memiliki",
      "Dokumen pembuktian perubahan"
    ],
    dokumen_rt: [
      "Surat keterangan apabila diperlukan"
    ],
    instansi_tujuan: "Kelurahan/Dukcapil",
    penerbit_akhir: "Dukcapil",
    crossLink: ["KB-01", "KB-02"],
    status: "aktif"
  },

  {
    id: "KB03-KEL-007",
    kategori: "Kelahiran",
    nama: "Kelahiran di Rumah",
    keywords: [
      "lahir di rumah",
      "bayi lahir di rumah",
      "kelahiran tanpa rumah sakit",
      "surat kelahiran rumah",
      "persalinan di rumah"
    ],
    questions: [
      "Anak saya lahir di rumah, bagaimana membuat akta?",
      "Bayi lahir bukan di rumah sakit",
      "Bagaimana mengurus kelahiran yang terjadi di rumah?"
    ],
    answer:
      "Kelahiran yang terjadi di rumah tetap perlu dicatat secara administratif. Dokumen pembuktian kelahiran dan mekanisme pelaporannya dapat berbeda dengan kelahiran di fasilitas kesehatan. Karena itu, warga perlu menyampaikan kondisi sebenarnya kepada layanan administrasi kependudukan untuk mengetahui dokumen yang dapat digunakan.",
    dokumen_warga: [
      "KK",
      "KTP-el orang tua",
      "Dokumen atau bukti kelahiran yang tersedia",
      "Dokumen pendukung lainnya sesuai kondisi"
    ],
    dokumen_rt: [
      "Keterangan/laporan kelahiran apabila diperlukan"
    ],
    instansi_tujuan: "Kelurahan/Dukcapil",
    penerbit_akhir: "Dukcapil",
    crossLink: ["KB-02", "KB-04"],
    status: "aktif"
  },

  {
    id: "KB03-KEL-008",
    kategori: "Kelahiran",
    nama: "Kelahiran di Luar Daerah",
    keywords: [
      "anak lahir di luar kota",
      "lahir di luar daerah",
      "bayi lahir luar kota",
      "kelahiran luar wilayah",
      "lahir di provinsi lain"
    ],
    questions: [
      "Anak saya lahir di luar kota tetapi tinggal di RT 03",
      "Bagaimana mengurus anak yang lahir di luar daerah?",
      "Bayi lahir di kota lain, bagaimana KK-nya?"
    ],
    answer:
      "Kelahiran di luar daerah tempat tinggal orang tua tetap perlu dicatat dalam administrasi kependudukan. Dokumen kelahiran yang diperoleh dari tempat kelahiran perlu digunakan untuk proses administrasi selanjutnya. Status alamat keluarga dan pencatatan dalam KK perlu disesuaikan dengan keadaan keluarga.",
    dokumen_warga: [
      "KK",
      "KTP-el orang tua",
      "Dokumen kelahiran dari tempat kelahiran",
      "Dokumen pendukung lainnya"
    ],
    dokumen_rt: [
      "Keterangan/laporan keluarga apabila diperlukan"
    ],
    instansi_tujuan: "Kelurahan/Dukcapil",
    penerbit_akhir: "Dukcapil",
    crossLink: ["KB-02", "KB-05"],
    status: "aktif"
  },

  {
    id: "KB03-KEL-009",
    kategori: "Kelahiran",
    nama: "Kelahiran Anak Kembar",
    keywords: [
      "anak kembar",
      "bayi kembar",
      "akta anak kembar",
      "KK anak kembar",
      "kelahiran kembar"
    ],
    questions: [
      "Bagaimana mengurus akta anak kembar?",
      "Saya mempunyai bayi kembar",
      "Apakah anak kembar harus dilaporkan satu-satu?"
    ],
    answer:
      "Setiap anak yang lahir perlu dicatat sebagai individu dalam administrasi kependudukan, termasuk anak kembar. Data masing-masing anak harus dibuat secara benar dan konsisten dengan dokumen kelahiran. Pengurusan dilakukan melalui layanan administrasi kependudukan.",
    dokumen_warga: [
      "KK",
      "KTP-el orang tua",
      "Dokumen kelahiran masing-masing anak",
      "Dokumen pendukung lainnya"
    ],
    dokumen_rt: [
      "Laporan kelahiran apabila diperlukan"
    ],
    instansi_tujuan: "Kelurahan/Dukcapil",
    penerbit_akhir: "Dukcapil",
    crossLink: ["KB-02"],
    status: "aktif"
  },

  {
    id: "KB03-KEL-010",
    kategori: "Kelahiran",
    nama: "Anak dari Orang Tua dengan Status Perkawinan Berbeda",
    keywords: [
      "anak orang tua belum menikah",
      "anak luar kawin",
      "orang tua belum menikah",
      "akta anak orang tua belum menikah",
      "status perkawinan orang tua"
    ],
    questions: [
      "Bagaimana akta anak jika orang tua belum menikah?",
      "Orang tua anak belum menikah",
      "Bagaimana memasukkan anak ke KK jika orang tua belum menikah?"
    ],
    answer:
      "Administrasi kelahiran anak tetap perlu dilakukan meskipun kondisi status perkawinan orang tua berbeda. Namun, pencatatan nama orang tua, hubungan keluarga, dan dokumen yang diperlukan dapat bergantung pada keadaan hukum dan dokumen yang tersedia. Untuk kondisi seperti ini, warga sebaiknya meminta penjelasan langsung dari Dukcapil agar pencatatan sesuai ketentuan.",
    dokumen_warga: [
      "KK",
      "KTP-el orang tua",
      "Dokumen kelahiran",
      "Dokumen perkawinan apabila ada",
      "Dokumen pendukung lainnya sesuai kondisi"
    ],
    dokumen_rt: [
      "Keterangan RT apabila diperlukan"
    ],
    instansi_tujuan: "Kelurahan/Dukcapil",
    penerbit_akhir: "Dukcapil",
    crossLink: ["KB-02", "KB-06"],
    status: "aktif"
  },

  {
    id: "KB03-KEL-011",
    kategori: "Kelahiran",
    nama: "Pengakuan atau Pengesahan Anak",
    keywords: [
      "pengakuan anak",
      "pengesahan anak",
      "status anak",
      "pengakuan ayah anak",
      "pengesahan anak Dukcapil"
    ],
    questions: [
      "Bagaimana pengakuan anak?",
      "Bagaimana mengurus pengesahan anak?",
      "Nama ayah belum tercantum dalam dokumen anak"
    ],
    answer:
      "Pengakuan atau pengesahan anak merupakan proses administrasi yang memiliki ketentuan khusus. Dokumen dan mekanisme bergantung pada keadaan keluarga dan status hukum perkawinan orang tua. Untuk kasus seperti ini, warga perlu menyampaikan kondisi sebenarnya kepada Dukcapil agar mendapatkan prosedur yang tepat.",
    dokumen_warga: [
      "KK",
      "KTP-el orang tua",
      "Akta Kelahiran apabila sudah ada",
      "Dokumen perkawinan atau dokumen hukum terkait apabila ada"
    ],
    dokumen_rt: [
      "Keterangan RT apabila diperlukan"
    ],
    instansi_tujuan: "Dukcapil",
    penerbit_akhir: "Dukcapil",
    crossLink: ["KB-02", "KB-06"],
    status: "aktif"
  },

  {
    id: "KB03-KEL-012",
    kategori: "Kelahiran",
    nama: "Orang Tua Tidak Memiliki Dokumen Lengkap",
    keywords: [
      "dokumen orang tua tidak lengkap",
      "KTP orang tua tidak ada",
      "KK orang tua tidak ada",
      "akta kelahiran tanpa dokumen",
      "dokumen kelahiran kurang"
    ],
    questions: [
      "Bagaimana membuat akta kelahiran jika dokumen orang tua tidak lengkap?",
      "KTP orang tua hilang saat mengurus kelahiran",
      "Dokumen kelahiran anak tidak lengkap"
    ],
    answer:
      "Jika dokumen orang tua atau dokumen kelahiran tidak lengkap, jangan membuat dokumen berdasarkan perkiraan. Sampaikan kondisi sebenarnya kepada Kelurahan/Dukcapil agar petugas dapat menentukan dokumen pengganti atau prosedur yang sesuai. RT dapat membantu memberikan keterangan mengenai keadaan warga apabila memang diperlukan.",
    dokumen_warga: [
      "Dokumen identitas yang masih tersedia",
      "KK apabila tersedia",
      "Bukti kelahiran yang tersedia",
      "Dokumen pendukung lainnya"
    ],
    dokumen_rt: [
      "Surat keterangan/keterangan keadaan warga apabila diperlukan"
    ],
    instansi_tujuan: "Kelurahan/Dukcapil",
    penerbit_akhir: "Dukcapil",
    crossLink: ["KB-01", "KB-02"],
    status: "aktif"
  },

  {
    id: "KB03-KEL-013",
    kategori: "Kelahiran",
    nama: "Anak dengan Wali",
    keywords: [
      "anak dengan wali",
      "wali anak",
      "pengurusan anak oleh wali",
      "anak diasuh wali",
      "dokumen anak wali"
    ],
    questions: [
      "Bagaimana mengurus dokumen anak yang diasuh wali?",
      "Anak tinggal bersama wali",
      "Siapa yang mengurus dokumen anak jika orang tua tidak ada?"
    ],
    answer:
      "Jika seorang anak diasuh atau diwakili oleh wali, dokumen dan kewenangan pengurusannya bergantung pada status hukum perwalian. Wali sebaiknya membawa dokumen yang membuktikan kewenangannya ketika mengurus administrasi anak. Untuk kasus khusus, konfirmasi kepada Dukcapil atau instansi terkait diperlukan.",
    dokumen_warga: [
      "Dokumen identitas anak",
      "KK",
      "KTP-el wali",
      "Dokumen yang membuktikan status perwalian apabila diperlukan"
    ],
    dokumen_rt: [
      "Keterangan RT apabila diperlukan"
    ],
    instansi_tujuan: "Kelurahan/Dukcapil/Instansi terkait",
    penerbit_akhir: "Instansi berwenang sesuai jenis dokumen",
    crossLink: ["KB-02", "KB-04"],
    status: "aktif"
  },

  {
    id: "KB03-KEL-014",
    kategori: "Kelahiran",
    nama: "Anak Tanpa Data Orang Tua Lengkap",
    keywords: [
      "anak tanpa orang tua",
      "orang tua tidak diketahui",
      "anak terlantar",
      "identitas anak tidak diketahui",
      "anak ditemukan"
    ],
    questions: [
      "Bagaimana mengurus anak yang orang tuanya tidak diketahui?",
      "Bagaimana jika identitas orang tua anak tidak lengkap?",
      "Anak terlantar harus mengurus dokumen ke mana?"
    ],
    answer:
      "Kasus anak yang identitas orang tuanya tidak diketahui atau anak terlantar memerlukan penanganan khusus. Jangan membuat data orang tua berdasarkan perkiraan. Warga perlu menghubungi Kelurahan dan instansi terkait agar identitas dan status anak dapat ditangani sesuai prosedur hukum dan administrasi yang berlaku.",
    dokumen_warga: [
      "Dokumen anak yang tersedia",
      "Dokumen atau bukti mengenai keadaan anak apabila ada"
    ],
    dokumen_rt: [
      "Keterangan mengenai keberadaan dan kondisi anak"
    ],
    instansi_tujuan: "Kelurahan/Dukcapil/Instansi Sosial terkait",
    penerbit_akhir: "Instansi berwenang sesuai kasus",
    crossLink: ["KB-02", "KB-08"],
    status: "aktif"
  },

  {
    id: "KB03-KEL-015",
    kategori: "Kelahiran",
    nama: "Anak WNI Lahir di Luar Negeri",
    keywords: [
      "anak lahir luar negeri",
      "bayi lahir di luar negeri",
      "anak WNI lahir luar negeri",
      "akta kelahiran luar negeri",
      "kelahiran luar negeri"
    ],
    questions: [
      "Anak WNI lahir di luar negeri bagaimana?",
      "Bagaimana mengurus dokumen anak yang lahir di luar negeri?",
      "Anak saya lahir di luar Indonesia"
    ],
    answer:
      "Anak WNI yang lahir di luar negeri memiliki proses administrasi yang dapat berbeda dari kelahiran di Indonesia. Dokumen kelahiran dari negara tempat anak lahir perlu diperhatikan, demikian juga status kewarganegaraan dan pencatatan administrasi Indonesia. Untuk kasus ini, warga perlu mengikuti prosedur Perwakilan RI dan/atau instansi administrasi kependudukan sesuai kondisi.",
    dokumen_warga: [
      "Dokumen kelahiran dari negara tempat kelahiran",
      "Dokumen identitas orang tua",
      "Dokumen kewarganegaraan apabila diperlukan",
      "Dokumen perkawinan orang tua apabila diperlukan"
    ],
    dokumen_rt: [],
    instansi_tujuan: "Perwakilan RI/Dukcapil sesuai kondisi",
    penerbit_akhir: "Instansi berwenang sesuai jenis dokumen",
    crossLink: ["KB-01", "KB-02", "KB-05"],
    status: "aktif"
  },

  {
    id: "KB03-KEL-016",
    kategori: "Kelahiran",
    nama: "Kelahiran dan Kematian Bayi",
    keywords: [
      "bayi meninggal",
      "bayi lahir meninggal",
      "kematian bayi",
      "lahir hidup meninggal",
      "bayi meninggal setelah lahir"
    ],
    questions: [
      "Bayi baru lahir kemudian meninggal, bagaimana mengurus dokumennya?",
      "Bagaimana jika bayi meninggal setelah lahir?",
      "Kelahiran dan kematian bayi harus dilaporkan bagaimana?"
    ],
    answer:
      "Jika bayi lahir kemudian meninggal, penanganan administrasinya harus membedakan peristiwa kelahiran dan peristiwa kematian sesuai keadaan sebenarnya. Dokumen dari fasilitas kesehatan atau bukti peristiwa yang tersedia sangat penting. Karena kasus ini memiliki ketentuan khusus, warga perlu menghubungi Kelurahan/Dukcapil untuk memastikan pencatatan yang tepat.",
    dokumen_warga: [
      "Dokumen kelahiran yang tersedia",
      "Dokumen kematian yang tersedia",
      "KK",
      "KTP-el orang tua"
    ],
    dokumen_rt: [
      "Keterangan/laporan peristiwa apabila diperlukan"
    ],
    instansi_tujuan: "Kelurahan/Dukcapil",
    penerbit_akhir: "Dukcapil",
    crossLink: ["KB-02", "KB-04"],
    status: "aktif"
  },

  {
    id: "KB03-KEL-017",
    kategori: "Kelahiran",
    nama: "Anak Pindah atau Masuk ke KK Lain",
    keywords: [
      "anak pindah KK",
      "anak masuk KK lain",
      "anak ikut ibu",
      "anak ikut ayah",
      "pindah KK anak"
    ],
    questions: [
      "Anak saya pindah ikut ibunya, bagaimana KK?",
      "Bagaimana memindahkan anak ke KK lain?",
      "Anak ikut ayah setelah perceraian",
      "Anak ikut ibu setelah perceraian"
    ],
    answer:
      "Jika anak berpindah mengikuti salah satu orang tua atau masuk ke KK lain, perubahan susunan KK perlu disesuaikan dengan kondisi keluarga dan ketentuan administrasi kependudukan. Dalam kasus perceraian atau perubahan pengasuhan, dokumen yang berkaitan dengan status keluarga dapat diperlukan.",
    dokumen_warga: [
      "KK lama",
      "KK tujuan apabila tersedia",
      "KTP-el orang tua",
      "Dokumen pendukung mengenai hubungan/pengasuhan anak apabila diperlukan"
    ],
    dokumen_rt: [
      "Surat pengantar/keterangan apabila diperlukan"
    ],
    instansi_tujuan: "Kelurahan/Dukcapil",
    penerbit_akhir: "Dukcapil",
    crossLink: ["KB-02", "KB-05", "KB-06"],
    status: "aktif"
  },

  {
    id: "KB03-KEL-018",
    kategori: "Kelahiran",
    nama: "Data Anak Tidak Sesuai antara Dokumen",
    keywords: [
      "data anak berbeda",
      "nama anak berbeda",
      "tanggal lahir anak berbeda",
      "akta dan KK berbeda",
      "KIA dan KK berbeda"
    ],
    questions: [
      "Data anak di KK dan akta berbeda",
      "Tanggal lahir anak di KIA salah",
      "Nama anak berbeda antara dokumen"
    ],
    answer:
      "Jika data anak berbeda antara KK, Akta Kelahiran, KIA, atau dokumen lainnya, jangan mengubah salah satu dokumen berdasarkan perkiraan. Tentukan terlebih dahulu dokumen mana yang menjadi dasar dan siapkan dokumen pembuktian. Perbaikan dilakukan melalui instansi administrasi kependudukan sesuai jenis masalahnya.",
    dokumen_warga: [
      "KK",
      "Akta Kelahiran",
      "KIA apabila ada",
      "KTP-el orang tua",
      "Dokumen pembuktian"
    ],
    dokumen_rt: [
      "Keterangan RT apabila diperlukan"
    ],
    instansi_tujuan: "Kelurahan/Dukcapil",
    penerbit_akhir: "Dukcapil",
    crossLink: ["KB-01", "KB-02"],
    status: "aktif"
  },

  {
    id: "KB03-KEL-019",
    kategori: "Kelahiran",
    nama: "Melaporkan Kelahiran kepada RT",
    keywords: [
      "lapor bayi ke RT",
      "lapor kelahiran ke RT",
      "bayi baru lahir RT",
      "data bayi RT",
      "lapor anak baru lahir"
    ],
    questions: [
      "Apakah bayi baru lahir harus dilaporkan ke RT?",
      "Bagaimana melaporkan bayi baru lahir kepada RT?",
      "Anak saya baru lahir, apakah data RT harus diperbarui?"
    ],
    answer:
      "Untuk administrasi lingkungan RT 03, keluarga sebaiknya melaporkan adanya anggota keluarga yang baru lahir agar data warga dapat diperbarui. Data internal RT bukan pengganti Akta Kelahiran atau KK resmi. Setelah laporan kepada RT, keluarga tetap perlu menyelesaikan administrasi kependudukan melalui instansi yang berwenang.",
    dokumen_warga: [
      "Informasi identitas keluarga",
      "Dokumen kelahiran apabila sudah tersedia"
    ],
    dokumen_rt: [
      "Pembaruan data keluarga/warga"
    ],
    instansi_tujuan: "RT dan Kelurahan/Dukcapil sesuai kebutuhan",
    penerbit_akhir: "Sesuai jenis dokumen",
    crossLink: ["KB-02", "KB-04"],
    status: "aktif"
  },

  {
    id: "KB03-KEL-RULE",
    kategori: "Kelahiran",
    nama: "Aturan Umum Administrasi Kelahiran",
    keywords: [
      "aturan kelahiran",
      "administrasi kelahiran",
      "akta kelahiran dan KK",
      "kelahiran dan RT",
      "dokumen kelahiran"
    ],
    questions: [
      "Apa bedanya laporan kelahiran, KK dan akta kelahiran?",
      "Apakah RT menerbitkan akta kelahiran?",
      "Apa yang harus dilakukan setelah bayi lahir?"
    ],
    answer:
      "Ada beberapa hal yang harus dibedakan: laporan kelahiran kepada RT merupakan administrasi lingkungan; perubahan atau penambahan anggota keluarga berkaitan dengan KK; sedangkan Akta Kelahiran merupakan dokumen administrasi kependudukan resmi. RT tidak menerbitkan Akta Kelahiran. Jika bayi baru lahir, keluarga sebaiknya melaporkan kepada RT dan kemudian menyelesaikan dokumen kependudukan melalui instansi yang berwenang.",
    instansi_tujuan: "RT/Kelurahan/Dukcapil",
    penerbit_akhir: "Dukcapil untuk dokumen kependudukan",
    crossLink: ["KB-01", "KB-02", "KB-04"],
    status: "aktif"
  }
];