// =========================================================
// KB-02 — KK & SUSUNAN KELUARGA
// RT 03 / RW 07 Karet - Setiabudi
// =========================================================

export const KB02_KK = [
  {
    id: "KB02-KK-001",
    kategori: "KK",
    nama: "Membuat Kartu Keluarga Baru",
    keywords: [
      "buat KK",
      "KK baru",
      "membuat kartu keluarga",
      "kartu keluarga baru",
      "membuat KK"
    ],
    questions: [
      "Bagaimana cara membuat KK baru?",
      "Saya mau membuat Kartu Keluarga baru",
      "Apa syarat membuat KK?"
    ],
    answer:
      "Kartu Keluarga (KK) merupakan dokumen administrasi kependudukan resmi. Jika warga RT 03 ingin membuat KK baru, terlebih dahulu perlu diketahui alasan pembuatannya dan kondisi anggota keluarga. RT dapat membantu administrasi lingkungan apabila diperlukan, tetapi KK diterbitkan oleh instansi administrasi kependudukan yang berwenang.",
    dokumen_warga: [
      "KTP-el anggota keluarga yang terkait",
      "KK lama apabila ada",
      "Dokumen pendukung sesuai alasan pembuatan KK"
    ],
    dokumen_rt: [
      "Surat pengantar/keterangan RT apabila diperlukan"
    ],
    instansi_tujuan: "Kelurahan/Dukcapil",
    penerbit_akhir: "Dukcapil",
    crossLink: ["KB-01", "KB-05", "KB-06"],
    status: "aktif"
  },

  {
    id: "KB02-KK-002",
    kategori: "KK",
    nama: "KK Baru Setelah Menikah",
    keywords: [
      "KK setelah menikah",
      "buat KK setelah menikah",
      "KK suami istri",
      "KK pengantin baru",
      "KK pasangan menikah"
    ],
    questions: [
      "Setelah menikah apakah harus membuat KK baru?",
      "Bagaimana membuat KK setelah menikah?",
      "Suami istri mau membuat KK baru"
    ],
    answer:
      "Setelah menikah, data keluarga perlu disesuaikan dengan keadaan sebenarnya. Pasangan dapat membentuk susunan KK sesuai kondisi keluarga dan ketentuan administrasi kependudukan. Proses perubahan atau penerbitan KK dilakukan melalui layanan administrasi kependudukan. RT dapat membantu administrasi lingkungan apabila diperlukan.",
    dokumen_warga: [
      "KTP-el",
      "KK",
      "Dokumen perkawinan yang sah",
      "Dokumen pendukung lain sesuai kondisi"
    ],
    dokumen_rt: [
      "Surat pengantar/keterangan RT apabila diperlukan"
    ],
    instansi_tujuan: "Kelurahan/Dukcapil",
    penerbit_akhir: "Dukcapil",
    crossLink: ["KB-01", "KB-05", "KB-06"],
    status: "aktif"
  },

  {
    id: "KB02-KK-003",
    kategori: "KK",
    nama: "Pecah KK",
    keywords: [
      "pecah KK",
      "pisah KK",
      "memisahkan KK",
      "KK sendiri",
      "membuat KK terpisah"
    ],
    questions: [
      "Bagaimana cara pecah KK?",
      "Saya ingin pisah KK dari orang tua",
      "Bagaimana membuat KK sendiri?"
    ],
    answer:
      "Pecah KK berarti melakukan perubahan susunan anggota keluarga sehingga terbentuk atau diperbarui KK sesuai keadaan keluarga. Alasannya dapat berbeda, misalnya menikah, membentuk keluarga sendiri, atau kondisi administrasi lainnya. Sebelum mengurusnya, tentukan terlebih dahulu siapa saja yang akan berada dalam KK baru dan apakah alamat administrasinya berubah.",
    dokumen_warga: [
      "KTP-el",
      "KK lama",
      "Dokumen pendukung sesuai alasan pecah KK"
    ],
    dokumen_rt: [
      "Surat pengantar/keterangan RT apabila diperlukan"
    ],
    instansi_tujuan: "Kelurahan/Dukcapil",
    penerbit_akhir: "Dukcapil",
    crossLink: ["KB-01", "KB-05", "KB-06"],
    status: "aktif"
  },

  {
    id: "KB02-KK-004",
    kategori: "KK",
    nama: "Menambah Anggota Keluarga ke KK",
    keywords: [
      "tambah anggota KK",
      "menambah anak ke KK",
      "tambah istri ke KK",
      "tambah suami ke KK",
      "anggota keluarga baru",
      "nama belum masuk KK"
    ],
    questions: [
      "Bagaimana menambahkan anggota keluarga ke KK?",
      "Anak saya belum masuk KK",
      "Bagaimana memasukkan istri ke KK?",
      "Nama anggota keluarga belum ada di KK"
    ],
    answer:
      "Jika ada anggota keluarga yang belum tercantum dalam KK, data perlu disesuaikan dengan keadaan keluarga yang sebenarnya. Penyebabnya dapat berupa kelahiran anak, perkawinan, pindah masuk, atau kondisi lainnya. Dokumen pendukung mengikuti alasan penambahan anggota tersebut.",
    dokumen_warga: [
      "KK",
      "KTP-el anggota keluarga terkait",
      "Dokumen pendukung sesuai alasan penambahan"
    ],
    dokumen_rt: [
      "Surat pengantar/keterangan RT apabila diperlukan"
    ],
    instansi_tujuan: "Kelurahan/Dukcapil",
    penerbit_akhir: "Dukcapil",
    crossLink: ["KB-01", "KB-03", "KB-05", "KB-06"],
    status: "aktif"
  },

  {
    id: "KB02-KK-005",
    kategori: "KK",
    nama: "Mengeluarkan Anggota dari KK",
    keywords: [
      "keluarkan anggota KK",
      "hapus anggota KK",
      "anggota keluar KK",
      "hapus nama dari KK",
      "anggota pindah KK",
      "nama masih ada di KK"
    ],
    questions: [
      "Bagaimana mengeluarkan anggota dari KK?",
      "Nama saya masih ada di KK lama",
      "Bagaimana menghapus anggota dari KK?",
      "Anggota keluarga sudah pindah tetapi masih ada di KK"
    ],
    answer:
      "Jika seseorang sudah tidak menjadi bagian dari susunan keluarga pada KK tersebut, data KK perlu disesuaikan. Penyebabnya dapat berupa pindah tempat tinggal, membentuk KK baru, perkawinan, perceraian, atau kondisi lainnya. Perubahan resmi dilakukan melalui administrasi kependudukan, bukan hanya dengan mengubah data internal RT.",
    dokumen_warga: [
      "KK",
      "KTP-el",
      "Dokumen pendukung sesuai alasan perubahan"
    ],
    dokumen_rt: [
      "Surat pengantar/keterangan RT apabila diperlukan"
    ],
    instansi_tujuan: "Kelurahan/Dukcapil",
    penerbit_akhir: "Dukcapil",
    crossLink: ["KB-01", "KB-05", "KB-06"],
    status: "aktif"
  },

  {
    id: "KB02-KK-006",
    kategori: "KK",
    nama: "KK Hilang atau Rusak",
    keywords: [
      "KK hilang",
      "KK rusak",
      "kartu keluarga hilang",
      "kartu keluarga rusak",
      "KK pengganti",
      "cetak ulang KK"
    ],
    questions: [
      "KK saya hilang, bagaimana mengurusnya?",
      "Bagaimana jika KK rusak?",
      "Saya ingin mendapatkan KK pengganti",
      "Bagaimana cetak ulang KK?"
    ],
    answer:
      "Jika Kartu Keluarga hilang atau rusak, warga perlu mengajukan penggantian atau pencetakan kembali melalui layanan administrasi kependudukan yang berlaku. RT dapat membantu memberikan keterangan apabila diperlukan, tetapi KK pengganti diterbitkan melalui layanan administrasi kependudukan yang berwenang.",
    dokumen_warga: [
      "KTP-el",
      "KK yang rusak apabila masih tersedia",
      "Dokumen pendukung kehilangan apabila diperlukan"
    ],
    dokumen_rt: [
      "Surat keterangan/pengantar apabila diperlukan"
    ],
    instansi_tujuan: "Kelurahan/Dukcapil",
    penerbit_akhir: "Dukcapil",
    crossLink: ["KB-01"],
    status: "aktif"
  },

  {
    id: "KB02-KK-007",
    kategori: "KK",
    nama: "Perubahan Data dalam KK",
    keywords: [
      "ubah data KK",
      "perubahan KK",
      "data KK salah",
      "perbaikan KK",
      "koreksi data keluarga",
      "nama di KK salah"
    ],
    questions: [
      "Bagaimana memperbaiki data di KK?",
      "Nama di KK salah",
      "Data keluarga di KK tidak sesuai",
      "Bagaimana mengubah data KK?"
    ],
    answer:
      "Jika terdapat kesalahan atau perubahan data dalam KK, data perlu diperbaiki melalui administrasi kependudukan. Jenis dokumen pendukung bergantung pada data yang diubah, misalnya nama, tempat tanggal lahir, hubungan keluarga, status perkawinan, atau data lainnya. RT dapat membantu mencocokkan keadaan warga di lingkungan, tetapi perubahan resmi dilakukan oleh instansi administrasi kependudukan.",
    dokumen_warga: [
      "KK",
      "KTP-el",
      "Dokumen pembuktian sesuai jenis data yang diperbaiki"
    ],
    dokumen_rt: [
      "Surat keterangan/pengantar apabila diperlukan"
    ],
    instansi_tujuan: "Kelurahan/Dukcapil",
    penerbit_akhir: "Dukcapil",
    crossLink: ["KB-01", "KB-06"],
    status: "aktif"
  },

  {
    id: "KB02-KK-008",
    kategori: "KK",
    nama: "Kepala Keluarga Meninggal atau Pindah",
    keywords: [
      "kepala keluarga meninggal",
      "kepala keluarga pindah",
      "ganti kepala keluarga",
      "KK kepala keluarga meninggal",
      "KK kepala keluarga pindah",
      "pengganti kepala keluarga"
    ],
    questions: [
      "Apa yang dilakukan jika kepala keluarga meninggal?",
      "Kepala keluarga pindah, bagaimana KK?",
      "Bagaimana mengganti kepala keluarga?",
      "Suami sebagai kepala keluarga sudah pindah"
    ],
    answer:
      "Jika Kepala Keluarga meninggal atau pindah, susunan dan data KK perlu disesuaikan dengan kondisi keluarga yang sebenarnya. Siapa yang menjadi Kepala Keluarga berikutnya bergantung pada keadaan keluarga dan ketentuan administrasi kependudukan. Untuk warga RT 03, perubahan internal juga perlu dicatat agar data lingkungan sesuai dengan keadaan sebenarnya.",
    dokumen_warga: [
      "KK",
      "KTP-el",
      "Dokumen pendukung sesuai penyebab perubahan"
    ],
    dokumen_rt: [
      "Surat keterangan/pengantar apabila diperlukan",
      "Pembaruan data administrasi lingkungan"
    ],
    instansi_tujuan: "Kelurahan/Dukcapil",
    penerbit_akhir: "Dukcapil",
    crossLink: ["KB-01", "KB-04", "KB-05", "KB-06"],
    status: "aktif"
  },

  {
    id: "KB02-KK-009",
    kategori: "KK",
    nama: "KK Setelah Perceraian",
    keywords: [
      "KK setelah cerai",
      "KK karena perceraian",
      "cerai hidup KK",
      "pisah KK setelah cerai",
      "status cerai KK",
      "suami pindah setelah cerai"
    ],
    questions: [
      "Bagaimana KK setelah perceraian?",
      "Setelah cerai apakah harus membuat KK baru?",
      "Mantan suami sudah pindah, bagaimana KK?",
      "Istri menjadi kepala keluarga setelah cerai"
    ],
    answer:
      "Setelah perceraian, data keluarga perlu disesuaikan dengan keadaan sebenarnya. Perubahan dapat meliputi status perkawinan, susunan anggota keluarga, alamat, dan Kepala Keluarga. Jika salah satu pihak pindah dari RT 03, data internal RT juga perlu diperbarui. Untuk kondisi tertentu, susunan KK setelah perceraian perlu dikonfirmasi kepada Dukcapil.",
    dokumen_warga: [
      "KK",
      "KTP-el",
      "Dokumen perceraian yang sah",
      "Dokumen pendukung sesuai kondisi keluarga"
    ],
    dokumen_rt: [
      "Surat pengantar/keterangan RT apabila diperlukan"
    ],
    instansi_tujuan: "Kelurahan/Dukcapil",
    penerbit_akhir: "Dukcapil",
    crossLink: ["KB-01", "KB-05", "KB-06"],
    status: "aktif"
  },

  {
    id: "KB02-KK-010",
    kategori: "KK",
    nama: "Anggota Keluarga Kost, Kontrak, atau Menumpang",
    keywords: [
      "kost dalam KK",
      "anak kost",
      "anggota keluarga kontrak",
      "menumpang KK",
      "tinggal di rumah orang lain",
      "kost dan KK",
      "penghuni kost"
    ],
    questions: [
      "Kalau tinggal di kost apakah harus masuk KK?",
      "Apakah anak kost masuk KK pemilik rumah?",
      "Bagaimana data orang yang tinggal menumpang?",
      "Orang yang kontrak apakah masuk KK pemilik?"
    ],
    answer:
      "Tempat tinggal secara fisik dan susunan anggota dalam KK adalah dua hal yang berbeda. Seseorang yang tinggal di kost, rumah kontrakan, atau menumpang tidak otomatis menjadi anggota KK pemilik rumah. Status administrasi kependudukan harus disesuaikan dengan keadaan dan tujuan tinggal. Data internal RT 03 juga membedakan status warga dengan tempat tinggal seperti pemilik, kost, kontrak, atau menumpang.",
    dokumen_warga: [
      "KTP-el",
      "KK",
      "Dokumen terkait tempat tinggal apabila diperlukan"
    ],
    dokumen_rt: [
      "Data penghuni",
      "Keterangan tempat tinggal di lingkungan RT"
    ],
    instansi_tujuan: "Kelurahan/Dukcapil sesuai kebutuhan",
    penerbit_akhir: "Dukcapil sesuai jenis layanan",
    crossLink: ["KB-01", "KB-05"],
    status: "aktif"
  },

  {
    id: "KB02-KK-011",
    kategori: "KK",
    nama: "KK Satu Orang atau Kondisi Khusus",
    keywords: [
      "KK satu orang",
      "KK sendiri",
      "KK orang tua meninggal",
      "KK kondisi khusus",
      "KK lansia sendiri",
      "tinggal sendiri"
    ],
    questions: [
      "Apakah boleh satu orang memiliki KK sendiri?",
      "Orang tua tinggal sendiri bagaimana KK-nya?",
      "Bagaimana KK jika semua anggota keluarga sudah pindah?",
      "Bagaimana jika kepala keluarga meninggal dan tinggal satu orang?"
    ],
    answer:
      "Kondisi keluarga tidak selalu berbentuk suami, istri, dan anak dalam satu KK. Dalam keadaan tertentu seseorang dapat memiliki susunan KK tersendiri sesuai ketentuan administrasi kependudukan. Jika kondisinya khusus, seperti orang tua tinggal sendiri, semua anggota keluarga sudah pindah, atau Kepala Keluarga meninggal, kondisi tersebut perlu diperiksa berdasarkan dokumen dan keadaan sebenarnya.",
    dokumen_warga: [
      "KTP-el",
      "KK",
      "Dokumen pendukung sesuai kondisi"
    ],
    dokumen_rt: [
      "Keterangan RT mengenai kondisi tempat tinggal apabila diperlukan"
    ],
    instansi_tujuan: "Kelurahan/Dukcapil",
    penerbit_akhir: "Dukcapil",
    crossLink: ["KB-01", "KB-04", "KB-05"],
    status: "aktif"
  },

  {
    id: "KB02-KK-012",
    kategori: "KK",
    nama: "Anggota Keluarga Tidak Lagi Tinggal di Alamat",
    keywords: [
      "anggota tidak tinggal",
      "nama masih di KK",
      "sudah pindah tapi masih di KK",
      "anggota keluarga pindah",
      "warga tidak tinggal di rumah"
    ],
    questions: [
      "Anggota keluarga sudah tidak tinggal di rumah tetapi masih ada di KK",
      "Anak saya sudah pindah tetapi masih ada di KK",
      "Apa yang harus dilakukan jika anggota KK sudah tidak tinggal di alamat?"
    ],
    answer:
      "Jika anggota keluarga sudah tidak tinggal di alamat tersebut, perlu dibedakan antara kondisi tempat tinggal secara nyata dan status administrasi kependudukannya. Jika orang tersebut memang pindah domisili secara administratif, data kependudukan perlu disesuaikan melalui prosedur pindah yang berlaku. Data internal RT juga perlu diperbarui agar tidak mencatat orang yang sudah tidak tinggal di lingkungan sebagai warga aktif.",
    dokumen_warga: [
      "KTP-el",
      "KK",
      "Dokumen perpindahan apabila diperlukan"
    ],
    dokumen_rt: [
      "Keterangan pindah atau pembaruan data lingkungan"
    ],
    instansi_tujuan: "Kelurahan/Dukcapil",
    penerbit_akhir: "Dukcapil",
    crossLink: ["KB-01", "KB-05"],
    status: "aktif"
  },

  {
    id: "KB02-KK-013",
    kategori: "KK",
    nama: "Anggota Keluarga Meninggal tetapi Masih Tercantum di KK",
    keywords: [
      "orang meninggal masih di KK",
      "nama orang meninggal masih di KK",
      "KK belum diubah setelah meninggal",
      "hapus nama orang meninggal",
      "anggota KK meninggal"
    ],
    questions: [
      "Orang tua saya meninggal tetapi masih ada di KK",
      "Nama orang yang meninggal masih tercantum di KK",
      "Bagaimana memperbarui KK setelah ada anggota meninggal?"
    ],
    answer:
      "Jika anggota keluarga meninggal, data kependudukan perlu diperbarui berdasarkan dokumen kematian dan kondisi keluarga setelah meninggal. Jangan hanya menghapus nama tersebut dari data internal RT tanpa memperbarui administrasi kependudukan. Setelah data kematian diproses, susunan KK dapat disesuaikan dengan kondisi keluarga.",
    dokumen_warga: [
      "KK",
      "KTP-el atau dokumen identitas almarhum apabila tersedia",
      "Dokumen kematian/akta kematian sesuai kondisi"
    ],
    dokumen_rt: [
      "Keterangan kematian apabila diperlukan",
      "Pembaruan status warga di lingkungan"
    ],
    instansi_tujuan: "Kelurahan/Dukcapil",
    penerbit_akhir: "Dukcapil",
    crossLink: ["KB-01", "KB-04"],
    status: "aktif"
  },

  {
    id: "KB02-KK-014",
    kategori: "KK",
    nama: "Hubungan Keluarga dalam KK Tidak Sesuai",
    keywords: [
      "hubungan keluarga salah",
      "status hubungan KK salah",
      "anak di KK salah",
      "istri di KK salah",
      "hubungan keluarga tidak sesuai"
    ],
    questions: [
      "Hubungan keluarga di KK salah",
      "Status anak di KK tidak sesuai",
      "Bagaimana memperbaiki hubungan keluarga di KK?"
    ],
    answer:
      "Jika hubungan antaranggota keluarga yang tercantum dalam KK tidak sesuai dengan keadaan sebenarnya, data perlu diperiksa dan diperbaiki melalui administrasi kependudukan. Siapkan dokumen yang dapat membuktikan hubungan keluarga tersebut. RT dapat membantu memberikan keterangan keadaan warga apabila diperlukan, tetapi perubahan data resmi dilakukan oleh instansi yang berwenang.",
    dokumen_warga: [
      "KK",
      "KTP-el",
      "Dokumen yang membuktikan hubungan keluarga"
    ],
    dokumen_rt: [
      "Surat keterangan/pengantar RT apabila diperlukan"
    ],
    instansi_tujuan: "Kelurahan/Dukcapil",
    penerbit_akhir: "Dukcapil",
    crossLink: ["KB-01", "KB-03", "KB-06"],
    status: "aktif"
  },

  {
    id: "KB02-KK-015",
    kategori: "KK",
    nama: "Kepala Keluarga Bukan Ayah",
    keywords: [
      "kepala keluarga bukan ayah",
      "istri kepala keluarga",
      "perempuan kepala keluarga",
      "ibu menjadi kepala keluarga",
      "KK kepala keluarga perempuan"
    ],
    questions: [
      "Apakah kepala keluarga harus laki-laki?",
      "Ibu menjadi kepala keluarga apakah bisa?",
      "Setelah suami meninggal siapa kepala keluarga?",
      "Setelah cerai istri menjadi kepala keluarga"
    ],
    answer:
      "Kepala Keluarga dalam administrasi kependudukan tidak selalu harus ayah atau laki-laki. Penetapan Kepala Keluarga mengikuti kondisi keluarga dan ketentuan administrasi kependudukan. Misalnya dalam kondisi tertentu setelah perceraian, kematian, atau keadaan keluarga lainnya, perempuan dapat tercatat sebagai Kepala Keluarga.",
    dokumen_warga: [
      "KK",
      "KTP-el",
      "Dokumen pendukung sesuai kondisi keluarga"
    ],
    dokumen_rt: [
      "Keterangan kondisi keluarga apabila diperlukan"
    ],
    instansi_tujuan: "Kelurahan/Dukcapil",
    penerbit_akhir: "Dukcapil",
    crossLink: ["KB-01", "KB-04", "KB-06"],
    status: "aktif"
  },

  {
    id: "KB02-KK-RULE",
    kategori: "KK",
    nama: "Aturan Umum Data KK",
    keywords: [
      "aturan KK",
      "data KK",
      "KK Dukcapil",
      "KK dan data RT",
      "perbedaan KK dan data RT",
      "RT bisa mengubah KK"
    ],
    questions: [
      "Apakah data KK sama dengan data RT?",
      "Apakah RT bisa mengubah KK?",
      "Siapa yang menerbitkan KK?",
      "Apakah data RT menggantikan KK?"
    ],
    answer:
      "Data Kartu Keluarga adalah data administrasi kependudukan resmi. Data yang disimpan oleh RT 03 digunakan untuk administrasi lingkungan dan tidak menggantikan data resmi Dukcapil. RT dapat mencatat keadaan warga di lingkungan dan membantu proses administrasi yang diperlukan, tetapi RT bukan penerbit Kartu Keluarga. Jika terdapat perbedaan antara data RT dan KK, warga perlu menentukan data mana yang secara administratif harus diperbaiki dan melakukan pembaruan pada instansi yang berwenang.",
    instansi_tujuan: "Kelurahan/Dukcapil",
    penerbit_akhir: "Dukcapil",
    crossLink: ["KB-01", "KB-05", "KB-06"],
    status: "aktif"
  }
];