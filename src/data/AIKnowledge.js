[ "cara membuat KTP", "cara membuat KTP baru", "syarat KTP", "mengurus KTP", "KTP pertama", "KTP pemula" ]
// ============================================================
// AI KNOWLEDGE RT 03 / RW 07
// Karet - Setiabudi
// ============================================================
//
// File ini berisi knowledge administrasi yang digunakan
// oleh Tanya AI RT.
//
// PENTING:
// - Knowledge ini bukan pengganti data resmi pemerintah.
// - RT/RW bukan penerbit dokumen pemerintah.
// - Jika informasi tidak tersedia, AI tidak boleh mengarang.
// - Data warga/agenda/pengumuman tetap berasal dari database RT.
// ============================================================

export const AI_KNOWLEDGE = [

  // ==========================================================
  // KB-01
  // KTP & IDENTITAS
  // ==========================================================

  {
    id: "KB01-KTP-001",
    kategori: "KTP & Identitas",
    nama: "KTP Elektronik (KTP-el)",

    keywords: [
      "ktp",
      "ktp elektronik",
      "ktp el",
      "e-ktp",
      "kartu tanda penduduk",
      "identitas",
      "nik"
    ],

    questions: [
      "cara membuat KTP",
      "cara membuat KTP baru",
      "syarat KTP",
      "mengurus KTP",
      "KTP pertama",
      "KTP pemula"
    ],

    answer: `
KTP-el merupakan dokumen identitas penduduk yang diterbitkan
oleh instansi administrasi kependudukan yang berwenang.

Untuk warga yang baru pertama kali membuat KTP, prosesnya
berkaitan dengan perekaman dan administrasi kependudukan.

RT dapat membantu warga dalam hal administrasi lingkungan
atau surat pengantar apabila memang diperlukan.

RT bukan penerbit KTP.

Jika warga ingin mengurus KTP, arahkan ke:
1. RT/RW apabila membutuhkan surat atau verifikasi lingkungan.
2. Kelurahan/kecamatan atau layanan Dukcapil sesuai prosedur
   wilayah.
3. Instansi Dukcapil sebagai pihak yang berwenang terhadap
   administrasi kependudukan.

Persyaratan dan lokasi pelayanan dapat berubah, sehingga
warga perlu mengikuti ketentuan Dukcapil yang berlaku.
`,

    dokumen_warga: [
      "Kartu Keluarga",
      "dokumen identitas sesuai kondisi warga"
    ],

    dokumen_rt: [
      "Surat pengantar/keterangan apabila diperlukan"
    ],

    instansi_tujuan: [
      "Kelurahan",
      "Kecamatan",
      "Dukcapil"
    ],

    penerbit_akhir: "Instansi Dukcapil yang berwenang",

    crossLink: [
      "KB02-KK",
      "KB05-PINDAH",
      "KB07-POL"
    ],

    status: "aktif"
  },


  // ==========================================================
  // KTP HILANG
  // ==========================================================

  {
    id: "KB01-KTP-002",
    kategori: "KTP & Identitas",
    nama: "KTP Hilang",

    keywords: [
      "ktp hilang",
      "ktp saya hilang",
      "kehilangan ktp",
      "ktp ilang",
      "buat ktp hilang"
    ],

    questions: [
      "KTP saya hilang",
      "bagaimana mengurus KTP yang hilang",
      "cara mengganti KTP hilang",
      "apa yang harus dilakukan jika KTP hilang"
    ],

    answer: `
Jika KTP hilang, warga perlu mengurus penggantian KTP
sesuai prosedur administrasi kependudukan.

Jika diperlukan laporan kehilangan dari kepolisian, laporan
kehilangan tersebut merupakan layanan kepolisian dan bukan
surat yang diterbitkan oleh RT.

Untuk administrasi RT, warga dapat menghubungi RT terlebih
dahulu apabila membutuhkan surat atau verifikasi lingkungan.

Alurnya secara umum:

KTP hilang
↓
Laporan kehilangan apabila diperlukan
↓
Pengurusan administrasi KTP pengganti
↓
Dukcapil menerbitkan KTP pengganti
`,

    dokumen_rt: [
      "Surat pengantar/keterangan apabila diperlukan"
    ],

    instansi_tujuan: [
      "Kepolisian apabila membutuhkan laporan kehilangan",
      "Dukcapil untuk administrasi KTP"
    ],

    penerbit_akhir: "Dukcapil",

    crossLink: [
      "KB07-POL-005"
    ],

    status: "aktif"
  },


  // ==========================================================
  // KTP RUSAK
  // ==========================================================

  {
    id: "KB01-KTP-003",
    kategori: "KTP & Identitas",
    nama: "KTP Rusak",

    keywords: [
      "ktp rusak",
      "ktp patah",
      "ktp tidak terbaca",
      "ktp rusak parah",
      "ganti ktp rusak"
    ],

    questions: [
      "KTP saya rusak",
      "bagaimana mengganti KTP rusak",
      "KTP tidak terbaca"
    ],

    answer: `
Jika KTP rusak atau tidak dapat digunakan dengan baik,
warga dapat mengajukan penggantian KTP sesuai prosedur
administrasi kependudukan.

RT dapat membantu jika diperlukan surat atau verifikasi
lingkungan.

Penerbitan KTP pengganti tetap merupakan kewenangan
Dukcapil.
`,

    dokumen_rt: [
      "Surat pengantar/keterangan apabila diperlukan"
    ],

    instansi_tujuan: [
      "Dukcapil"
    ],

    penerbit_akhir: "Dukcapil",

    crossLink: [
      "KB02-KK"
    ],

    status: "aktif"
  },


  // ==========================================================
  // PERUBAHAN DATA KTP
  // ==========================================================

  {
    id: "KB01-KTP-004",
    kategori: "KTP & Identitas",
    nama: "Perubahan Data KTP",

    keywords: [
      "ubah ktp",
      "perubahan ktp",
      "ubah data ktp",
      "data ktp salah",
      "nama di ktp salah",
      "alamat ktp",
      "status perkawinan ktp",
      "ubah status kawin"
    ],

    questions: [
      "data KTP saya salah",
      "nama di KTP salah",
      "alamat KTP berubah",
      "status perkawinan di KTP belum berubah",
      "bagaimana mengubah data KTP"
    ],

    answer: `
Jika terdapat perubahan atau kesalahan data pada KTP,
warga perlu melakukan pembaruan data administrasi kependudukan.

Contohnya:
- perubahan nama;
- perubahan alamat;
- perubahan status perkawinan;
- perubahan data keluarga;
- perubahan elemen identitas lainnya.

RT dapat membantu melakukan verifikasi berdasarkan data
lingkungan yang dimiliki apabila diperlukan.

Namun RT tidak dapat mengubah data KTP secara langsung.

Perubahan data resmi dilakukan melalui administrasi
kependudukan pada instansi yang berwenang.
`,

    instansi_tujuan: [
      "Kelurahan",
      "Kecamatan",
      "Dukcapil"
    ],

    penerbit_akhir: "Dukcapil",

    crossLink: [
      "KB02-KK",
      "KB06-NIK"
    ],

    status: "aktif"
  },


  // ==========================================================
  // NIK BERMASALAH
  // ==========================================================

  {
    id: "KB01-KTP-005",
    kategori: "KTP & Identitas",
    nama: "NIK Bermasalah",

    keywords: [
      "nik bermasalah",
      "nik tidak ditemukan",
      "nik tidak valid",
      "nik salah",
      "nik tidak sesuai",
      "nik tidak terdaftar"
    ],

    questions: [
      "NIK saya tidak terbaca",
      "NIK saya tidak ditemukan",
      "NIK saya bermasalah",
      "kenapa NIK tidak valid"
    ],

    answer: `
Jika NIK tidak ditemukan, tidak valid, atau terdapat
ketidaksesuaian data, warga perlu melakukan pengecekan
pada administrasi kependudukan.

RT dapat membantu memastikan data warga yang tercatat
di lingkungan RT, tetapi RT tidak dapat memperbaiki
database kependudukan nasional.

Jika masalah berkaitan dengan NIK pada layanan tertentu,
warga perlu memeriksa data pada Dukcapil atau instansi
yang menggunakan NIK tersebut.
`,

    instansi_tujuan: [
      "Dukcapil",
      "Instansi pelayanan terkait"
    ],

    penerbit_akhir: "Dukcapil",

    crossLink: [
      "KB02-KK"
    ],

    status: "aktif"
  },


  // ==========================================================
  // PEREKAMAN KTP
  // ==========================================================

  {
    id: "KB01-KTP-006",
    kategori: "KTP & Identitas",
    nama: "Perekaman KTP-el",

    keywords: [
      "rekam ktp",
      "perekaman ktp",
      "rekam ektp",
      "belum rekam ktp",
      "belum punya ktp"
    ],

    questions: [
      "saya belum pernah rekam KTP",
      "dimana rekam KTP",
      "cara rekam KTP"
    ],

    answer: `
Warga yang belum melakukan perekaman KTP-el perlu mengikuti
proses perekaman pada layanan administrasi kependudukan
yang berwenang.

RT dapat membantu apabila warga memerlukan surat atau
verifikasi lingkungan.

Perekaman dan penerbitan KTP bukan kewenangan RT.
`,

    instansi_tujuan: [
      "Dukcapil",
      "Lokasi pelayanan administrasi kependudukan yang ditunjuk"
    ],

    penerbit_akhir: "Dukcapil",

    status: "aktif"
  },


  // ==========================================================
  // KTP SETELAH PINDAH
  // ==========================================================

  {
    id: "KB01-KTP-007",
    kategori: "KTP & Identitas",
    nama: "KTP Setelah Pindah",

    keywords: [
      "ktp setelah pindah",
      "ubah alamat ktp",
      "alamat ktp setelah pindah",
      "pindah alamat ktp",
      "ktp pindah rumah"
    ],

    questions: [
      "saya pindah rumah bagaimana KTP saya",
      "alamat KTP saya berubah",
      "saya pindah ke RT 03"
    ],

    answer: `
Jika warga pindah tempat tinggal secara administratif,
perubahan alamat KTP merupakan bagian dari administrasi
kependudukan.

Proses pindah juga berkaitan dengan KK dan data keluarga.

Untuk warga yang pindah ke RT 03, prosesnya dapat dibagi:

1. Administrasi perpindahan penduduk.
2. Penyesuaian KK/KTP.
3. Pendataan warga pada lingkungan RT 03.

RT 03 dapat melakukan pendataan warga setelah warga
berdomisili di lingkungan RT.

Untuk prosedur resmi KTP dan KK, warga mengikuti
ketentuan Dukcapil.
`,

    crossLink: [
      "KB02-KK",
      "KB05-PINDAH"
    ],

    instansi_tujuan: [
      "Kelurahan",
      "Kecamatan",
      "Dukcapil"
    ],

    penerbit_akhir: "Dukcapil",

    status: "aktif"
  },


  // ==========================================================
  // KTP PENDATANG
  // ==========================================================

  {
    id: "KB01-KTP-008",
    kategori: "KTP & Identitas",
    nama: "KTP Pendatang",

    keywords: [
      "pendatang",
      "ktp pendatang",
      "warga baru",
      "penduduk baru",
      "baru tinggal",
      "baru pindah"
    ],

    questions: [
      "saya warga baru",
      "saya baru tinggal di RT ini",
      "saya pendatang",
      "saya baru pindah ke sini"
    ],

    answer: `
Jika warga baru pindah dan tinggal di RT 03, terdapat
dua hal yang perlu dibedakan:

1. Administrasi kependudukan resmi.
2. Pendataan lingkungan RT.

RT dapat mendata warga yang tinggal di lingkungan RT 03,
termasuk warga yang tinggal di rumah sendiri, kontrakan,
kost, atau sebagai pendatang.

Perubahan alamat resmi pada KTP dan KK tetap mengikuti
prosedur administrasi kependudukan.
`,

    crossLink: [
      "KB02-KK",
      "KB05-PINDAH"
    ],

    status: "aktif"
  },


  // ==========================================================
  // WNA
  // ==========================================================

  {
    id: "KB01-KTP-009",
    kategori: "KTP & Identitas",
    nama: "Identitas WNA",

    keywords: [
      "wna",
      "orang asing",
      "asing",
      "kitap",
      "kitas",
      "identitas wna"
    ],

    questions: [
      "bagaimana identitas WNA",
      "WNA tinggal di RT",
      "WNA tinggal di kost"
    ],

    answer: `
Untuk WNA, dokumen identitas dan administrasinya berbeda
dengan WNI.

RT dapat melakukan pendataan keberadaan WNA di lingkungan
sesuai administrasi RT.

RT tidak menerbitkan dokumen keimigrasian.

Untuk dokumen resmi WNA, warga diarahkan kepada instansi
keimigrasian dan administrasi kependudukan sesuai jenis
dokumen dan status tinggalnya.
`,

    instansi_tujuan: [
      "Imigrasi",
      "Dukcapil"
    ],

    status: "aktif"
  },


  // ==========================================================
  // LANSIA / KETERBATASAN MOBILITAS
  // ==========================================================

  {
    id: "KB01-KTP-010",
    kategori: "KTP & Identitas",
    nama: "Warga Tidak Dapat Datang Langsung",

    keywords: [
      "lansia",
      "orang tua",
      "tidak bisa datang",
      "sakit",
      "tidak bisa ke dukcapil",
      "keterbatasan mobilitas"
    ],

    questions: [
      "orang tua saya tidak bisa datang mengurus KTP",
      "lansia mau membuat KTP",
      "warga tidak bisa datang ke pelayanan"
    ],

    answer: `
Jika warga karena usia lanjut atau kondisi tertentu tidak
dapat datang langsung ke tempat pelayanan administrasi
kependudukan, warga/keluarga sebaiknya menanyakan apakah
tersedia layanan jemput bola atau pelayanan khusus dari
instansi Dukcapil setempat.

RT dapat membantu melakukan koordinasi lingkungan apabila
diperlukan.

Namun RT tidak boleh menjanjikan bahwa petugas Dukcapil
pasti datang ke rumah sebelum ada konfirmasi dari instansi
yang berwenang.
`,

    instansi_tujuan: [
      "Dukcapil"
    ],

    status: "aktif"
  },


  // ==========================================================
  // KTP DITEMUKAN SETELAH DILAPORKAN HILANG
  // ==========================================================

  {
    id: "KB01-KTP-011",
    kategori: "KTP & Identitas",
    nama: "KTP Lama Ditemukan Kembali",

    keywords: [
      "ktp ditemukan",
      "ktp hilang ketemu",
      "ktp lama ketemu",
      "ktp yang sudah dilaporkan hilang"
    ],

    questions: [
      "KTP saya yang hilang ketemu lagi",
      "apa yang dilakukan kalau KTP lama ditemukan"
    ],

    answer: `
Jika KTP yang sebelumnya dinyatakan hilang kemudian ditemukan,
warga sebaiknya tidak langsung menganggap KTP tersebut tetap
dapat digunakan.

Jika sudah dilakukan proses penggantian atau perubahan data,
status dokumen lama perlu dikonfirmasi kepada instansi
administrasi kependudukan.

Untuk memastikan status KTP tersebut, warga dapat menghubungi
Dukcapil.
`,

    instansi_tujuan: [
      "Dukcapil"
    ],

    status: "aktif"
  },


  // ==========================================================
  // ATURAN UMUM KB-01
  // ==========================================================

  {
    id: "KB01-KTP-RULE",
    kategori: "KTP & Identitas",
    nama: "Aturan Umum KTP",

    keywords: [
      "aturan ktp",
      "siapa penerbit ktp",
      "rt membuat ktp",
      "rt penerbit ktp"
    ],

    answer: `
ATURAN PENTING:

1. RT bukan penerbit KTP.
2. RT dapat membantu surat/keterangan atau verifikasi
   lingkungan apabila diperlukan.
3. KTP merupakan dokumen administrasi kependudukan.
4. Perubahan data resmi dilakukan melalui instansi
   administrasi kependudukan.
5. Data internal RT tidak boleh dianggap sebagai pengganti
   database Dukcapil.
6. Jika pertanyaan menyangkut kehilangan KTP, bedakan
   administrasi KTP dengan laporan kehilangan dari kepolisian.
7. Jika pertanyaan menyangkut pindah alamat, hubungkan
   dengan KB-05.
8. Jika pertanyaan menyangkut KK, hubungkan dengan KB-02.
`,

    crossLink: [
      "KB02-KK",
      "KB05-PINDAH",
      "KB07-POL"
    ],

    status: "aktif"
  }

];


// ============================================================
// HELPER
// ============================================================

/**
 * Mengambil seluruh knowledge aktif.
 */
export function getActiveAIKnowledge() {
  return AI_KNOWLEDGE.filter(
    item => item.status === "aktif"
  );
}


/**
 * Mengambil knowledge berdasarkan kategori.
 */
export function getAIKnowledgeByCategory(kategori) {
  return AI_KNOWLEDGE.filter(
    item =>
      item.status === "aktif" &&
      item.kategori === kategori
  );
}


/**
 * Mengambil knowledge berdasarkan ID.
 */
export function getAIKnowledgeById(id) {
  return AI_KNOWLEDGE.find(
    item => item.id === id
  );
}

