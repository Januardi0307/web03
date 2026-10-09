import { useEffect, useState } from "react";
import { useRTData } from "../context/RTDataContext";
import AdminDataRT from "./AdminDataRT";
import { supabase } from "../lib/supabase";
import "./AdminPolling.css";

function Admin() {
  const [activeMenu, setActiveMenu] = useState("dashboard");
  
const {
  announcements,
  activities,
  completedActivities,
} = useRTData();

const today = new Date();
today.setHours(0, 0, 0, 0);

const getDateDifference = (date) => {
  if (!date) return null;

  const [year, month, day] = date.split("-").map(Number);
  const itemDate = new Date(year, month - 1, day);
  itemDate.setHours(0, 0, 0, 0);

  return Math.round(
    (today - itemDate) / (1000 * 60 * 60 * 24)
  );
};

const activeAnnouncements = announcements.filter((item) => {
  const difference = getDateDifference(item.date);
  return difference !== null && difference <= 10;
});

const activeActivities = activities.filter((item) => {
  if (!item.date) return false;

  const itemDate = new Date(item.date);
  itemDate.setHours(0, 0, 0, 0);

  return itemDate >= today;
});

const recentCompletedActivities = completedActivities.filter((item) => {
  const difference = getDateDifference(item.date);
  return difference !== null && difference <= 10;
});

  const renderContent = () => {
    switch (activeMenu) {
      case "pengumuman":
        return <AdminPengumuman />;

      case "rencana":
        return <AdminRencana />;

      case "selesai":
        return <AdminSelesai />;

      case "ai":
        return <AdminAI />;

      case "polling":
        return <AdminPolling />;

      case "dataRT":
        return <AdminDataRT />;

   
default:
  return (
    <AdminDashboard
      setActiveMenu={setActiveMenu}
      jumlahPengumuman={activeAnnouncements.length}
      jumlahRencana={activeActivities.length}
      jumlahSelesai={recentCompletedActivities.length}
    />
  );

    }
  };

  return (
    <div className="admin-layout">
      {/* SIDEBAR */}

      <aside className="admin-sidebar">
        <div className="admin-sidebar-title">
          <div className="admin-logo">RT</div>

          <div>
            <strong>ADMIN RT</strong>
            <small>RT 03 / RW 07</small>
          </div>
        </div>

        <div className="admin-menu">
          <button
            className={activeMenu === "dashboard" ? "active" : ""}
            onClick={() => setActiveMenu("dashboard")}
          >
            🏠 Dashboard
          </button>

        

<button
  className={activeMenu === "pengumuman" ? "active" : ""}
  onClick={() => setActiveMenu("pengumuman")}
>
  📢 Pengumuman
  <span className="announcement-counter">
    {activeAnnouncements.length}
  </span>
</button>

<button
  className={activeMenu === "rencana" ? "active" : ""}
  onClick={() => setActiveMenu("rencana")}
>
  📅 Rencana Kegiatan
  <span className="announcement-counter">
    {activeActivities.length}
  </span>
</button>

<button
  className={activeMenu === "selesai" ? "active" : ""}
  onClick={() => setActiveMenu("selesai")}
>
  ✅ Kegiatan Selesai
  <span className="announcement-counter">
    {recentCompletedActivities.length}
  </span>
</button>





          <button
            className={activeMenu === "ai" ? "active" : ""}
            onClick={() => setActiveMenu("ai")}
          >
            🤖 Data AI RT
          </button>

          <button
            className={activeMenu === "dataRT" ? "active" : ""}
            onClick={() => setActiveMenu("dataRT")}
          >
            🏠 Data RT
          </button>

          <button
            className={activeMenu === "polling" ? "active" : ""}
            onClick={() => setActiveMenu("polling")}
          >
            🗳️ Polling
          </button>
        </div>

        <div className="admin-sidebar-footer">
          RT 03 / RW 07
          <br />
          Karet Setiabudi
        </div>
      </aside>

      {/* CONTENT */}

      <section className="admin-main">{renderContent()}</section>
    </div>
  );
}

/* =====================================================
   DASHBOARD
===================================================== */

function AdminDashboard({
  setActiveMenu,
  jumlahPengumuman,
  jumlahRencana,
  jumlahSelesai,
}) {
  return (
    <div>
      <div className="admin-topbar">
        <div>
          <p>ADMINISTRATOR</p>
          <h2>Dashboard RT</h2>
        </div>

        <div className="admin-user">👤 Admin RT</div>
      </div>

      <div className="admin-welcome">
        <h3>Selamat datang, Admin RT 👋</h3>

        <p>
          Kelola informasi dan kegiatan warga RT 03 / RW 07 Karet Setiabudi
          melalui halaman ini.
        </p>
      </div>

      <div className="stats-grid">
        <div className="stat-card">
          <span>📢</span>
          <div>
            <small>Pengumuman</small>
           <strong>{jumlahRencana}</strong>
          </div>
        </div>

        <div className="stat-card">
          <span>📅</span>
          <div>
            <small>Rencana Kegiatan</small>
            <strong>{jumlahRencana}</strong>
          </div>
        </div>

        <div className="stat-card">
          <span>✅</span>
          <div>
            <small>Kegiatan Selesai</small>
            <strong>{jumlahSelesai}</strong>
          </div>
        </div>
      </div>

      <div className="quick-actions">
        <h3>Menu Cepat</h3>

        <div className="quick-grid">
          <button onClick={() => setActiveMenu("pengumuman")}>
            📢
            <span>Buat Pengumuman</span>
          </button>

          <button onClick={() => setActiveMenu("rencana")}>
            📅
            <span>Tambah Kegiatan</span>
          </button>

          <button onClick={() => setActiveMenu("polling")}>
            🗳️
            <span>Buat Polling</span>
          </button>
        </div>
      </div>
    </div>
  );
}

/* =====================================================
   PENGUMUMAN
===================================================== */

function AdminPengumuman() {
  const { announcements, setAnnouncements } = useRTData();

  const [showForm, setShowForm] = useState(false);

  const [editingId, setEditingId] = useState(null);

  const [form, setForm] = useState({
    title: "",

    date: "",

    content: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const resetForm = () => {
    setForm({
      title: "",
      date: "",
      content: "",
    });

    setEditingId(null);

    setShowForm(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!form.title.trim()) {
      alert("Judul pengumuman harus diisi.");
      return;
    }

    if (!form.date) {
      alert("Tanggal harus diisi.");
      return;
    }

    if (!form.content.trim()) {
      alert("Isi pengumuman harus diisi.");
      return;
    }

    if (editingId) {
      const { data, error } = await supabase
        .from("pengumuman")
        .update({
          judul: form.title.trim(),
          tanggal: form.date,
          isi: form.content.trim(),
        })
        .eq("id", editingId)
        .select()
        .single();

      if (error) {
        console.error("Gagal mengubah pengumuman:", error);

        alert("Pengumuman gagal diubah di Supabase.\n\n" + error.message);

        return;
      }

      const updatedItem = {
        id: data.id,
        title: data.judul,
        date: data.tanggal,
        content: data.isi,
      };

      setAnnouncements((prev) =>
        prev.map((item) => (item.id === editingId ? updatedItem : item)),
      );

      resetForm();

      alert("Pengumuman berhasil diubah di Supabase.");

      return;
    }
    const {
      data: { session },
    } = await supabase.auth.getSession();

    const { data, error } = await supabase
      .from("pengumuman")
      .insert([
        {
          judul: form.title.trim(),
          tanggal: form.date,
          isi: form.content.trim(),
        },
      ])
      .select()
      .single();

    if (error) {
      console.error("Gagal menyimpan pengumuman:", error);

      alert("Pengumuman gagal disimpan ke Supabase.\n\n" + error.message);

      return;
    }

    const newItem = {
      id: data.id,
      title: data.judul,
      date: data.tanggal,
      content: data.isi,
    };

    setAnnouncements([newItem, ...announcements]);

    resetForm();

    alert("Pengumuman berhasil disimpan ke Supabase.");
  };

  const handleEdit = (item) => {
    setForm({
      title: item.title,
      date: item.date,
      content: item.content,
    });

    setEditingId(item.id);
    setShowForm(true);
  };

  const handleDelete = async (id) => {
    const confirmDelete = window.confirm(
      "Apakah Anda yakin ingin menghapus pengumuman ini?",
    );

    if (!confirmDelete) {
      return;
    }

    const { error } = await supabase.from("pengumuman").delete().eq("id", id);

    if (error) {
      console.error("Gagal menghapus pengumuman:", error);

      alert("Pengumuman gagal dihapus dari Supabase.\n\n" + error.message);

      return;
    }

    setAnnouncements((prev) => prev.filter((item) => item.id !== id));

    alert("Pengumuman berhasil dihapus dari Supabase.");
  };

  const formatDate = (date) => {
    return new Date(date).toLocaleDateString("id-ID", {
      day: "2-digit",
      month: "long",
      year: "numeric",
    });
  };

  return (
    <div>
      <AdminPageHeader
        title="Pengumuman"
        description="Kelola informasi dan pengumuman untuk warga."
        buttonText={showForm ? "✕ Tutup Form" : "+ Tambah Pengumuman"}
        onClick={() => {
          if (showForm) {
            resetForm();
          } else {
            setShowForm(true);
          }
        }}
      />

      {/* FORM */}

      {showForm && (
        <form className="admin-form" onSubmit={handleSubmit}>
          <h3>{editingId ? "Edit Pengumuman" : "Tambah Pengumuman"}</h3>

          <label>Judul Pengumuman</label>

          <input
            type="text"
            name="title"
            value={form.title}
            onChange={handleChange}
            placeholder="Contoh: Kerja Bakti Lingkungan"
          />

          <label>Tanggal</label>

          <input
            type="date"
            name="date"
            value={form.date}
            onChange={handleChange}
          />

          <label>Isi Pengumuman</label>

          <textarea
            rows="7"
            name="content"
            value={form.content}
            onChange={handleChange}
            placeholder="Tuliskan isi pengumuman..."
          />

          <div className="form-actions">
            <button type="submit" className="btn-save">
              {editingId ? "Simpan Perubahan" : "Simpan Pengumuman"}
            </button>

            <button type="button" className="btn-cancel" onClick={resetForm}>
              Batal
            </button>
          </div>
        </form>
      )}

      {/* LIST */}

      <div className="admin-announcement-list">
        {!showForm && announcements.length === 0 && (
          <div className="admin-empty">
            <div>📢</div>

            <h3>Belum ada pengumuman</h3>

            <p>
              Klik tombol "Tambah Pengumuman" untuk membuat pengumuman baru.
            </p>
          </div>
        )}

        {announcements.map((item) => (
          <div className="admin-announcement-card" key={item.id}>
            <div className="announcement-card-content">
              <div className="announcement-date">
                📅 {formatDate(item.date)}
              </div>

              <h3>{item.title}</h3>

              <p>{item.content}</p>
            </div>

            <div className="announcement-actions">
              <button className="edit-button" onClick={() => handleEdit(item)}>
                ✏️ Edit
              </button>

              <button
                className="delete-button"
                onClick={() => handleDelete(item.id)}
              >
                🗑️ Hapus
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

/* =====================================================
   RENCANA
===================================================== */

function AdminRencana() {
  const { activities, setActivities } = useRTData();

  const [showForm, setShowForm] = useState(false);
  const [editingId, setEditingId] = useState(null);

  const [form, setForm] = useState({
    title: "",
    date: "",
    time: "",
    location: "",
    description: "",
    status: "Direncanakan",
  });

  const resetForm = () => {
    setForm({
      title: "",
      date: "",
      time: "",
      location: "",
      description: "",
      status: "Direncanakan",
    });

    setEditingId(null);
    setShowForm(false);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  /*
   * TAMBAH RENCANA KEGIATAN
   */
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!form.title.trim()) {
      alert("Nama kegiatan harus diisi.");
      return;
    }

    if (!form.date) {
      alert("Tanggal harus diisi.");
      return;
    }

    if (!form.time) {
      alert("Waktu kegiatan harus diisi.");
      return;
    }

    if (!form.location.trim()) {
      alert("Lokasi kegiatan harus diisi.");
      return;
    }

    if (!form.description.trim()) {
      alert("Deskripsi kegiatan harus diisi.");
      return;
    }

    const payload = {
      judul: form.title.trim(),
      tanggal: form.date,
      waktu: form.time,
      lokasi: form.location.trim(),
      deskripsi: form.description.trim(),
      status: form.status,
    };

    /*
     * EDIT
     */
    if (editingId) {
      const { data, error } = await supabase
        .from("rencana_kegiatan")
        .update(payload)
        .eq("id", editingId)
        .select()
        .single();

      if (error) {
        console.error("Gagal mengubah rencana kegiatan:", error);

        alert("Rencana kegiatan gagal diubah di Supabase.\n\n" + error.message);

        return;
      }

      const updatedItem = {
        id: data.id,
        title: data.judul,
        date: data.tanggal,
        time: data.waktu?.slice(0, 5) || "",
        location: data.lokasi,
        description: data.deskripsi,
        status: data.status,
      };

      setActivities((prev) =>
        prev.map((item) => (item.id === editingId ? updatedItem : item)),
      );

      resetForm();

      alert("Rencana kegiatan berhasil diubah di Supabase.");

      return;
    }

    /*
     * TAMBAH BARU
     */

    const { data, error } = await supabase
      .from("rencana_kegiatan")
      .insert([payload])
      .select()
      .single();

    if (error) {
      console.error("Gagal menyimpan rencana kegiatan:", error);

      alert("Rencana kegiatan gagal disimpan ke Supabase.\n\n" + error.message);

      return;
    }

    const newItem = {
      id: data.id,
      title: data.judul,
      date: data.tanggal,
      time: data.waktu?.slice(0, 5) || "",
      location: data.lokasi,
      description: data.deskripsi,
      status: data.status,
    };

    setActivities((prev) => [newItem, ...prev]);

    resetForm();

    alert("Rencana kegiatan berhasil disimpan ke Supabase.");
  };

  const handleEdit = (item) => {
    setEditingId(item.id);

    setForm({
      title: item.title,
      date: item.date,
      time: item.time || "",
      location: item.location,
      description: item.description,
      status: item.status || "Direncanakan",
    });

    setShowForm(true);
  };

  /*
   * HAPUS SEMENTARA MASIH LOCAL
   * NANTI KITA MIGRASIKAN KE SUPABASE
   */
  const handleDelete = async (id) => {
    const yakin = window.confirm(
      "Apakah Anda yakin ingin menghapus kegiatan ini?",
    );

    if (!yakin) {
      return;
    }

    const { error } = await supabase
      .from("rencana_kegiatan")
      .delete()
      .eq("id", id);

    if (error) {
      console.error("Gagal menghapus rencana kegiatan:", error);

      alert(
        "Rencana kegiatan gagal dihapus dari Supabase.\n\n" + error.message,
      );

      return;
    }

    setActivities((prev) => prev.filter((item) => item.id !== id));

    alert("Rencana kegiatan berhasil dihapus dari Supabase.");
  };

  return (
    <div>
      <AdminPageHeader
        title="Rencana Kegiatan"
        description="Kelola kegiatan yang akan dilaksanakan oleh RT."
        buttonText={showForm ? "✕ Tutup Form" : "+ Tambah Kegiatan"}
        onClick={() => {
          if (showForm) {
            resetForm();
          } else {
            setEditingId(null);

            setForm({
              title: "",
              date: "",
              time: "",
              location: "",
              description: "",
              status: "Direncanakan",
            });

            setShowForm(true);
          }
        }}
      />

      {showForm && (
        <form className="admin-form" onSubmit={handleSubmit}>
          <h3>
            {editingId ? "Edit Rencana Kegiatan" : "Tambah Rencana Kegiatan"}
          </h3>

          <label>Nama Kegiatan</label>

          <input
            type="text"
            name="title"
            value={form.title}
            onChange={handleChange}
            placeholder="Contoh: Kerja Bakti Lingkungan"
          />

          <label>Tanggal</label>

          <input
            type="date"
            name="date"
            value={form.date}
            onChange={handleChange}
          />

          <label>Waktu</label>

          <input
            type="time"
            name="time"
            value={form.time}
            onChange={handleChange}
          />

          <label>Lokasi</label>

          <input
            type="text"
            name="location"
            value={form.location}
            onChange={handleChange}
            placeholder="Contoh: Jalan Karet..."
          />

          <label>Status</label>

          <select name="status" value={form.status} onChange={handleChange}>
            <option value="Direncanakan">Direncanakan</option>

            <option value="Sedang Berlangsung">Sedang Berlangsung</option>

            <option value="Selesai">Selesai</option>

            <option value="Dibatalkan">Dibatalkan</option>
          </select>

          <label>Deskripsi</label>

          <textarea
            name="description"
            value={form.description}
            onChange={handleChange}
            rows="5"
            placeholder="Jelaskan kegiatan..."
          />

          <div className="form-actions">
            <button type="submit" className="btn-save">
              {editingId ? "Simpan Perubahan" : "Simpan Kegiatan"}
            </button>

            <button type="button" className="btn-cancel" onClick={resetForm}>
              Batal
            </button>
          </div>
        </form>
      )}

      <div className="admin-announcement-list">
        {activities.length === 0 ? (
          <div className="admin-empty">
            <div>📅</div>

            <h3>Belum ada kegiatan</h3>

            <p>
              Klik tombol "+ Tambah Kegiatan" untuk membuat rencana kegiatan.
            </p>
          </div>
        ) : (
          activities.map((item) => (
            <div className="admin-announcement-card" key={item.id}>
              <div className="announcement-card-content">
                <div className="announcement-date">
                  📅{" "}
                  {new Date(item.date).toLocaleDateString("id-ID", {
                    day: "2-digit",
                    month: "long",
                    year: "numeric",
                  })}
                </div>

                <h3>{item.title}</h3>

                <p>🕐 {item.time}</p>

                <p>📍 {item.location}</p>

                <p>{item.description}</p>

                <div className="activity-status">{item.status}</div>
              </div>

              <div className="announcement-actions">
                <button
                  className="edit-button"
                  onClick={() => handleEdit(item)}
                >
                  ✏️ Edit
                </button>

                <button
                  className="delete-button"
                  onClick={() => handleDelete(item.id)}
                >
                  🗑️ Hapus
                </button>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

/* =====================================================
   SELESAI
===================================================== */

function AdminSelesai() {
  const { completedActivities, setCompletedActivities } = useRTData();

  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    const loadCompletedActivities = async () => {
      const { data, error } = await supabase
        .from("kegiatan_selesai")
        .select(
          `
        *,
        kegiatan_selesai_foto (
          id,
          foto_url,
          urutan
        )
      `,
        )
        .order("tanggal", { ascending: false });

      if (error) {
        console.error("Gagal mengambil kegiatan selesai:", error);

        alert(
          "Gagal mengambil data kegiatan selesai dari Supabase.\n\n" +
            error.message,
        );

        return;
      }

      const mappedData = (data || []).map((item) => {
        const fotoTambahan = (item.kegiatan_selesai_foto || [])
          .sort((a, b) => a.urutan - b.urutan)
          .map((foto) => foto.foto_url);

        return {
          id: item.id,
          title: item.judul,
          date: item.tanggal,
          location: item.lokasi,
          description: item.deskripsi,
          fotoUrl: item.foto_url,
          fotoUrls: fotoTambahan,
        };
      });

      setCompletedActivities(mappedData);
    };

    loadCompletedActivities();
  }, [setCompletedActivities]);

  const [editingId, setEditingId] = useState(null);
  const [selectedFiles, setSelectedFiles] = useState([]);
  const [existingPhotos, setExistingPhotos] = useState([]);
  const [deletedPhotos, setDeletedPhotos] = useState([]);

  const [form, setForm] = useState({
    title: "",
    date: "",
    location: "",
    description: "",
  });

  const compressImage = (file) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();

      reader.onload = async (e) => {
        try {
          const blob = new Blob([e.target.result], {
            type: file.type,
          });

          const img = await createImageBitmap(blob, {
            imageOrientation: "from-image",
          });

          const maxSize = 1600;

          let width = img.width;
          let height = img.height;

          if (width > maxSize || height > maxSize) {
            if (width > height) {
              height = Math.round((height * maxSize) / width);
              width = maxSize;
            } else {
              width = Math.round((width * maxSize) / height);
              height = maxSize;
            }
          }

          const canvas = document.createElement("canvas");
          canvas.width = width;
          canvas.height = height;

          const ctx = canvas.getContext("2d");

          ctx.drawImage(img, 0, 0, width, height);

          canvas.toBlob(
            (blob) => {
              if (!blob) {
                reject(new Error("Gagal mengompres foto."));
                return;
              }

              const compressedFile = new File([blob], "foto-kegiatan.webp", {
                type: "image/webp",
              });

              resolve(compressedFile);
            },
            "image/webp",
            0.8,
          );

          img.close();
        } catch (error) {
          reject(error);
        }
      };

      reader.onerror = () => {
        reject(new Error("Gagal membaca file foto."));
      };

      reader.readAsArrayBuffer(file);
    });
  };

  return (
    <div>
      <AdminPageHeader
        title="Kegiatan Selesai"
        description="Kelola dokumentasi kegiatan yang telah selesai."
        buttonText="+ Tambah Dokumentasi"
        onClick={() => setShowForm(true)}
      />
      {showForm && (
        <form
          className="admin-form"
          onSubmit={async (e) => {
            e.preventDefault();

            if (
              !form.title.trim() ||
              !form.date ||
              !form.location.trim() ||
              !form.description.trim()
            ) {
              alert("Mohon lengkapi semua data dokumentasi.");
              return;
            }

            let data = null;
            let error = null;

            let fotoUrl = null;
            const fotoUrls = [];

            /* =====================================================
   UPLOAD SEMUA FOTO
===================================================== */

            if (selectedFiles.length > 0) {
              try {
                for (const file of selectedFiles) {
                  const compressedFile = await compressImage(file);

                  const fileName = `${Date.now()}-${crypto.randomUUID()}.webp`;

                  const { error: uploadError } = await supabase.storage
                    .from("kegiatan-selesai")
                    .upload(fileName, compressedFile, {
                      contentType: "image/webp",
                      upsert: false,
                    });

                  if (uploadError) {
                    console.error("GAGAL UPLOAD FOTO:", uploadError);

                    alert(
                      "Foto gagal diupload ke Supabase.\n\n" +
                        uploadError.message,
                    );

                    return;
                  }

                  const { data: publicUrlData } = supabase.storage
                    .from("kegiatan-selesai")
                    .getPublicUrl(fileName);

                  const publicUrl = publicUrlData.publicUrl;

                  fotoUrls.push(publicUrl);
                }

                fotoUrl = fotoUrls[0] || null;
              } catch (fotoError) {
                console.error("GAGAL MEMPROSES FOTO:", fotoError);

                alert("Foto gagal diproses.\n\n" + fotoError.message);

                return;
              }
            }

            /* =====================================================
   SIMPAN KEGIATAN SELESAI
===================================================== */

            if (editingId) {
              const updateData = {
                judul: form.title.trim(),
                tanggal: form.date,
                lokasi: form.location.trim(),
                deskripsi: form.description.trim(),
              };

              const result = await supabase
                .from("kegiatan_selesai")
                .update(updateData)
                .eq("id", editingId)
                .select()
                .single();

              data = result.data;
              error = result.error;
             
            } else {
              const result = await supabase
                .from("kegiatan_selesai")
                .insert([
                  {
                    judul: form.title.trim(),
                    tanggal: form.date,
                    lokasi: form.location.trim(),
                    deskripsi: form.description.trim(),
                    foto_url: null,
                  },
                ])
                .select()
                .single();

              data = result.data;
              error = result.error;

           
            }

            /* =====================================================
   CEK HASIL SIMPAN KEGIATAN
===================================================== */

            if (error) {
              console.error("GAGAL MENYIMPAN KEGIATAN SELESAI:", error);

              alert("Kegiatan gagal disimpan ke Supabase.\n\n" + error.message);

              return;
            }

            if (!data) {
              console.error("DATA KEGIATAN TIDAK DITEMUKAN SETELAH SIMPAN.");

              alert(
                "Kegiatan gagal disimpan karena data hasil simpan tidak ditemukan.",
              );

              return;
            }

            /* =====================================================
   SIMPAN FOTO BARU KE DATABASE
===================================================== */

            if (fotoUrls.length > 0) {
              const jumlahFotoLama = existingPhotos.length;

              const fotoRows = fotoUrls.map((url, index) => ({
                kegiatan_id: data.id,
                foto_url: url,
                urutan: jumlahFotoLama + index + 1,
              }));

              const { error: fotoDbError } = await supabase
                .from("kegiatan_selesai_foto")
                .insert(fotoRows);

              if (fotoDbError) {
                console.error("GAGAL MENYIMPAN FOTO KE DATABASE:", fotoDbError);

                alert(
                  "Kegiatan berhasil disimpan, tetapi daftar foto gagal disimpan.\n\n" +
                    fotoDbError.message,
                );

                return;
              }
            }

            /* =====================================================
   HAPUS FOTO LAMA YANG DITANDAI
===================================================== */

            if (editingId && deletedPhotos.length > 0) {
              const uniqueDeletedPhotos = [...new Set(deletedPhotos)];

              // Ambil foto utama dari kegiatan
              const { data: kegiatanSaatIni, error: kegiatanError } =
                await supabase
                  .from("kegiatan_selesai")
                  .select("foto_url")
                  .eq("id", editingId)
                  .single();

              if (kegiatanError) {
                console.error("GAGAL MENGAMBIL FOTO UTAMA:", kegiatanError);
                return;
              }

              // Ambil foto tambahan
              const { data: fotoTambahanData, error: fotoTambahanError } =
                await supabase
                  .from("kegiatan_selesai_foto")
                  .select("id, foto_url")
                  .eq("kegiatan_id", editingId);

              if (fotoTambahanError) {
                console.error(
                  "GAGAL MENGAMBIL FOTO TAMBAHAN:",
                  fotoTambahanError,
                );
                return;
              }

              for (const fotoUrl of uniqueDeletedPhotos) {
                // ==========================================
                // 1. CEK APAKAH INI FOTO UTAMA
                // ==========================================
                if (kegiatanSaatIni?.foto_url === fotoUrl) {
                  const { error: clearMainPhotoError } = await supabase
                    .from("kegiatan_selesai")
                    .update({ foto_url: null })
                    .eq("id", editingId);

                  if (clearMainPhotoError) {
                    console.error(
                      "GAGAL MENGHAPUS FOTO UTAMA DARI DATABASE:",
                      clearMainPhotoError,
                    );
                    return;
                  }
                }

                // ==========================================
                // 2. CEK FOTO TAMBAHAN
                // ==========================================
                const fotoTambahan = (fotoTambahanData || []).filter(
                  (foto) => foto.foto_url === fotoUrl,
                );

                for (const foto of fotoTambahan) {
                  const { error: deleteDbError } = await supabase
                    .from("kegiatan_selesai_foto")
                    .delete()
                    .eq("id", foto.id);

                  if (deleteDbError) {
                    console.error(
                      "GAGAL MENGHAPUS FOTO TAMBAHAN DARI DATABASE:",
                      deleteDbError,
                    );
                    return;
                  }
                }

                // ==========================================
                // 3. HAPUS FILE DARI SUPABASE STORAGE
                // ==========================================
                try {
                  const url = new URL(fotoUrl);

                  const marker = "/storage/v1/object/public/kegiatan-selesai/";

                  const posisi = url.pathname.indexOf(marker);

                  if (posisi === -1) {
                    console.warn(
                      "PATH STORAGE TIDAK DITEMUKAN DARI URL:",
                      fotoUrl,
                    );
                    continue;
                  }

                  const filePath = decodeURIComponent(
                    url.pathname.substring(posisi + marker.length),
                  );

                  const { data: storageData, error: storageError } =
                    await supabase.storage
                      .from("kegiatan-selesai")
                      .remove([filePath]);

                  if (storageError) {
                    console.error(
                      "GAGAL MENGHAPUS FILE DARI STORAGE:",
                      storageError,
                    );
                    return;
                  }
                } catch (storageError) {
                  console.error(
                    "ERROR SAAT MENGHAPUS FILE STORAGE:",
                    storageError,
                  );
                  return;
                }
              }
            }

            /* =====================================================
   RAPikan URUTAN FOTO
===================================================== */

            if (editingId) {
              const { data: semuaFoto, error: urutanError } = await supabase
                .from("kegiatan_selesai_foto")
                .select("id, urutan")
                .eq("kegiatan_id", editingId)
                .order("urutan", { ascending: true })
                .order("id", { ascending: true });

              if (urutanError) {
                console.error(
                  "GAGAL MENGAMBIL FOTO UNTUK MERAPIKAN URUTAN:",
                  urutanError,
                );
              } else {
                for (let i = 0; i < semuaFoto.length; i++) {
                  const { error: updateUrutanError } = await supabase
                    .from("kegiatan_selesai_foto")
                    .update({ urutan: i + 1 })
                    .eq("id", semuaFoto[i].id);

                  if (updateUrutanError) {
                    console.error(
                      "GAGAL MERAPIKAN URUTAN FOTO:",
                      updateUrutanError,
                    );
                    return;
                  }
                }
               
              }
            }

            /* =====================================================
   UPDATE TAMPILAN ADMIN
===================================================== */

            const kegiatanLama = completedActivities.find(
              (item) => item.id === data.id,
            );

            const fotoLama =
              existingPhotos && existingPhotos.length > 0
                ? existingPhotos
                : kegiatanLama?.fotoUrls || [];

            const fotoGabungan = [...fotoLama, ...fotoUrls];

            const updatedItem = {
              id: data.id,
              title: data.judul,
              date: data.tanggal,
              location: data.lokasi,
              description: data.deskripsi,
              fotoUrl: fotoGabungan[0] || data.foto_url || null,
              fotoUrls: fotoGabungan,
            };

            if (editingId) {
              setCompletedActivities((prev) =>
                prev.map((item) =>
                  item.id === editingId ? updatedItem : item,
                ),
              );
            } else {
              setCompletedActivities((prev) => [updatedItem, ...prev]);
            }

            setForm({
              title: "",
              date: "",
              location: "",
              description: "",
            });

            setSelectedFiles([]);
            setDeletedPhotos([]);

            setShowForm(false);
            setEditingId(null);

            alert("Dokumentasi kegiatan berhasil disimpan.");
          }}
        >
          <div>
            <label>Nama Kegiatan</label>

            <input
              type="text"
              value={form.title}
              onChange={(e) =>
                setForm((prev) => ({
                  ...prev,
                  title: e.target.value,
                }))
              }
              placeholder="Contoh: Kerja Bakti Lingkungan"
            />
          </div>

          <div>
            <label>Tanggal Kegiatan</label>

            <input
              type="date"
              value={form.date}
              onChange={(e) =>
                setForm((prev) => ({
                  ...prev,
                  date: e.target.value,
                }))
              }
            />
          </div>

          <div>
            <label>Lokasi</label>

            <input
              type="text"
              value={form.location}
              onChange={(e) =>
                setForm((prev) => ({
                  ...prev,
                  location: e.target.value,
                }))
              }
              placeholder="Contoh: Jalan Karet..."
            />
          </div>

          <div>
            <label>Deskripsi</label>

            <textarea
              value={form.description}
              onChange={(e) =>
                setForm((prev) => ({
                  ...prev,
                  description: e.target.value,
                }))
              }
              rows="5"
              placeholder="Ceritakan kegiatan yang telah dilaksanakan..."
            />
          </div>

          <div>
            <label>Foto Dokumentasi (maksimal 5 foto)</label>

            {/* FOTO LAMA SAAT EDIT */}
            {editingId && existingPhotos.length > 0 && (
              <div style={{ marginTop: "10px", marginBottom: "15px" }}>
                <p style={{ marginBottom: "10px" }}>
                  Foto yang sudah tersimpan:
                </p>

                <div
                  style={{
                    display: "flex",
                    flexWrap: "wrap",
                    gap: "15px",
                  }}
                >
                  {existingPhotos.map((fotoUrl, index) => (
                    <div
                      key={`${fotoUrl}-${index}`}
                      style={{
                        position: "relative",
                        display: "inline-block",
                      }}
                    >
                      <img
                        src={fotoUrl}
                        alt={`Foto lama ${index + 1}`}
                        style={{
                          width: "150px",
                          height: "auto",
                          borderRadius: "8px",
                          display: "block",
                        }}
                      />

                      <button
                        type="button"
                        onClick={() => {
                          setDeletedPhotos((prev) =>
                            prev.includes(fotoUrl) ? prev : [...prev, fotoUrl],
                          );

                          setExistingPhotos((prev) =>
                            prev.filter((url) => url !== fotoUrl),
                          );
                        }}
                        style={{
                          position: "absolute",
                          top: "5px",
                          right: "5px",
                          width: "30px",
                          height: "30px",
                          border: "none",
                          borderRadius: "50%",
                          background: "#dc3545",
                          color: "#fff",
                          cursor: "pointer",
                          fontSize: "16px",
                          lineHeight: "30px",
                          padding: 0,
                        }}
                        title="Hapus foto"
                      >
                        🗑️
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* FOTO BARU */}
            <input
              type="file"
              accept="image/*"
              multiple
              onChange={(e) => {
                const files = Array.from(e.target.files || []);

                const jumlahFotoLama = existingPhotos.length;
                const jumlahFotoBaru = files.length;

                if (jumlahFotoLama + jumlahFotoBaru > 5) {
                  alert(
                    `Maksimal 5 foto.\n\n` +
                      `Foto lama: ${jumlahFotoLama}\n` +
                      `Foto baru yang dipilih: ${jumlahFotoBaru}\n\n` +
                      `Silakan pilih foto baru sebanyak ${
                        5 - jumlahFotoLama
                      } foto atau kurang.`,
                  );

                  e.target.value = "";
                  setSelectedFiles([]);
                  return;
                }

                setSelectedFiles(files);
              }}
            />

            {selectedFiles.length > 0 && (
              <div style={{ marginTop: "10px" }}>
                {selectedFiles.map((file, index) => (
                  <p key={`${file.name}-${index}`}>
                    Foto baru {index + 1}: <strong>{file.name}</strong>
                  </p>
                ))}
              </div>
            )}
          </div>

          <div className="form-actions">
            <button type="submit" className="btn-save">
              Simpan Dokumentasi
            </button>

            <button
              type="button"
              className="btn-cancel"
              onClick={() => {
                setShowForm(false);

                setEditingId(null);
                setSelectedFiles([]);
                setExistingPhotos([]);
                setDeletedPhotos([]);

                setForm({
                  title: "",
                  date: "",
                  location: "",
                  description: "",
                });
              }}
            >
              Batal
            </button>
          </div>
        </form>
      )}
      {completedActivities.length === 0 ? (
        <div className="admin-empty">
          <div>✅</div>

          <h3>Belum ada kegiatan selesai</h3>

          <p>Dokumentasi kegiatan akan tampil di sini.</p>
        </div>
      ) : (
        <div className="admin-announcement-list">
          {completedActivities.map((item) => (
            <div className="admin-announcement-card" key={item.id}>
              <div className="announcement-card-content">
                {item.fotoUrls && item.fotoUrls.length > 0 ? (
                  <div
                    style={{
                      display: "flex",
                      flexWrap: "wrap",
                      gap: "15px",
                      marginBottom: "15px",
                    }}
                  >
                    {item.fotoUrls.map((fotoUrl, index) => (
                      <img
                        key={`${item.id}-${index}`}
                        src={fotoUrl}
                        alt={`Dokumentasi kegiatan ${index + 1}`}
                        style={{
                          width: "300px",
                          maxWidth: "100%",
                          height: "auto",
                          display: "block",
                          borderRadius: "10px",
                        }}
                      />
                    ))}
                  </div>
                ) : (
                  item.fotoUrl && (
                    <img
                      src={item.fotoUrl}
                      alt="Dokumentasi kegiatan"
                      style={{
                        width: "300px",
                        maxWidth: "100%",
                        height: "auto",
                        display: "block",
                        marginBottom: "15px",
                        borderRadius: "10px",
                      }}
                    />
                  )
                )}
                <div className="announcement-date">
                  📅{" "}
                  {new Date(item.date).toLocaleDateString("id-ID", {
                    day: "2-digit",
                    month: "long",
                    year: "numeric",
                  })}
                </div>

                <h3>{item.title}</h3>

                <p>📍 {item.location}</p>

                <p>{item.description}</p>

                <button
                  type="button"
                  className="btn-edit"
                  onClick={() => {
                    setEditingId(item.id);

                    setForm({
                      title: item.title,
                      date: item.date,
                      location: item.location,
                      description: item.description,
                    });

                    setDeletedPhotos([]);

                    const oldPhotos =
                      item.fotoUrls && item.fotoUrls.length > 0
                        ? item.fotoUrls
                        : item.fotoUrl
                          ? [item.fotoUrl]
                          : [];

                    setExistingPhotos(oldPhotos);
                    setSelectedFiles([]);

                    setShowForm(true);
                  }}
                >
                  Edit
                </button>

                <button
                  type="button"
                  className="btn-delete"
                  onClick={async () => {
                    const yakin = window.confirm(
                      "Apakah Anda yakin ingin menghapus dokumentasi kegiatan ini?",
                    );

                    if (!yakin) return;

                    const { error } = await supabase
                      .from("kegiatan_selesai")
                      .delete()
                      .eq("id", item.id);

                    if (error) {
                      console.error("Gagal menghapus kegiatan selesai:", error);

                      alert(
                        "Kegiatan gagal dihapus dari Supabase.\n\n" +
                          error.message,
                      );

                      return;
                    }

                    setCompletedActivities((prev) =>
                      prev.filter((activity) => activity.id !== item.id),
                    );

                    alert("Dokumentasi kegiatan berhasil dihapus.");
                  }}
                >
                  Hapus
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

/* =====================================================
   AI
===================================================== */


function AdminAI() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const [editingId, setEditingId] = useState(null);
  const [pesan, setPesan] = useState("");

  const formAwal = {
    judul: "",
    kategori: "Informasi Umum",
    keywords: "",
    isi: "",
    sumber: "",
    tanggal_mulai: "",
    tanggal_berakhir: "",
    aktif: true,
  };

  const [form, setForm] = useState(formAwal);

  async function loadData() {
    setLoading(true);
    setPesan("");

    const { data, error } = await supabase
      .from("ai_knowledge_tambahan")
      .select("*")
      .order("created_at", { ascending: false });

    if (error) {
      console.error("Gagal memuat Data AI:", error);
      setPesan("Gagal memuat data: " + error.message);
    } else {
      setItems(data || []);
    }

    setLoading(false);
  }

  useEffect(() => {
    loadData();
  }, []);

  function bukaTambah() {
    setEditingId(null);
    setForm({ ...formAwal });
    setPesan("");
    setShowForm(true);
  }

  function bukaEdit(item) {
    setEditingId(item.id);
    setForm({
      judul: item.judul || "",
      kategori: item.kategori || "Informasi Umum",
      keywords: Array.isArray(item.keywords)
        ? item.keywords.join(", ")
        : "",
      isi: item.isi || "",
      sumber: item.sumber || "",
      tanggal_mulai: item.tanggal_mulai || "",
      tanggal_berakhir: item.tanggal_berakhir || "",
      aktif: item.aktif ?? true,
    });
    setPesan("");
    setShowForm(true);
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setSaving(true);
    setPesan("");

    const payload = {
      judul: form.judul.trim(),
      kategori: form.kategori.trim() || "Informasi Umum",
      keywords: form.keywords
        .split(",")
        .map((kata) => kata.trim())
        .filter(Boolean),
      isi: form.isi.trim(),
      sumber: form.sumber.trim() || null,
      tanggal_mulai: form.tanggal_mulai || null,
      tanggal_berakhir: form.tanggal_berakhir || null,
      aktif: form.aktif,
      updated_at: new Date().toISOString(),
    };

    if (!payload.judul || !payload.isi) {
      setPesan("Judul dan isi informasi wajib diisi.");
      setSaving(false);
      return;
    }

    const { error } = editingId
      ? await supabase
          .from("ai_knowledge_tambahan")
          .update(payload)
          .eq("id", editingId)
      : await supabase
          .from("ai_knowledge_tambahan")
          .insert([payload]);

    if (error) {
      console.error("Gagal menyimpan Data AI:", error);
      setPesan("Gagal menyimpan: " + error.message);
    } else {
      setShowForm(false);
      setForm({ ...formAwal });
      setEditingId(null);
      await loadData();
      setPesan("Informasi berhasil disimpan.");
    }

    setSaving(false);
  }

  async function handleHapus(item) {
    const yakin = window.confirm(
      `Hapus informasi "${item.judul}"?`
    );

    if (!yakin) return;

    setPesan("");

    const { error } = await supabase
      .from("ai_knowledge_tambahan")
      .delete()
      .eq("id", item.id);

    if (error) {
      console.error("Gagal menghapus Data AI:", error);
      setPesan("Gagal menghapus: " + error.message);
      return;
    }

    await loadData();
    setPesan("Informasi berhasil dihapus.");
  }

  return (
    <div className="admin-ai">
      
<AdminPageHeader
  title="Data AI RT"
  description="Kelola informasi tambahan yang dapat digunakan AI untuk menjawab pertanyaan warga."
  buttonText="+ Tambah Informasi"
  onClick={bukaTambah}
/>

      {pesan && (
        <div className="admin-ai-message" role="status">
          {pesan}
        </div>
      )}

      {showForm && (
        <form className="admin-ai-form" onSubmit={handleSubmit}>
          <h3>
            {editingId ? "Edit Informasi AI" : "Tambah Informasi AI"}
          </h3>

          <label>Judul Informasi *</label>
          <input
            required
            value={form.judul}
            onChange={(e) =>
              setForm({ ...form, judul: e.target.value })
            }
            placeholder="Contoh: Program Bantuan Kelurahan"
          />

          <label>Kategori</label>
          <input
            value={form.kategori}
            onChange={(e) =>
              setForm({ ...form, kategori: e.target.value })
            }
            placeholder="Contoh: Program Kelurahan"
          />

          <label>Kata Kunci</label>
          <input
            value={form.keywords}
            onChange={(e) =>
              setForm({ ...form, keywords: e.target.value })
            }
            placeholder="bantuan, kelurahan, pendaftaran"
          />
          <small>Pisahkan kata kunci dengan koma.</small>

          <label>Isi Informasi untuk AI *</label>
          <textarea
            required
            rows={7}
            value={form.isi}
            onChange={(e) =>
              setForm({ ...form, isi: e.target.value })
            }
            placeholder="Jelaskan program, persyaratan, cara pengajuan, batas waktu, dan informasi penting lainnya."
          />

          <label>Sumber Informasi</label>
          <input
            value={form.sumber}
            onChange={(e) =>
              setForm({ ...form, sumber: e.target.value })
            }
            placeholder="Contoh: Pengumuman resmi Kelurahan"
          />

          <label>Tanggal Mulai Berlaku</label>
          <input
            type="date"
            value={form.tanggal_mulai}
            onChange={(e) =>
              setForm({ ...form, tanggal_mulai: e.target.value })
            }
          />

          <label>Tanggal Berakhir</label>
          <input
            type="date"
            value={form.tanggal_berakhir}
            onChange={(e) =>
              setForm({ ...form, tanggal_berakhir: e.target.value })
            }
          />

          <label className="admin-ai-checkbox">
            <input
              type="checkbox"
              checked={form.aktif}
              onChange={(e) =>
                setForm({ ...form, aktif: e.target.checked })
              }
            />
            Aktif — dapat digunakan oleh AI
          </label>

          <div className="admin-ai-actions">
            <button type="submit" disabled={saving}>
              {saving ? "Menyimpan..." : "Simpan Informasi"}
            </button>

            <button
              type="button"
              onClick={() => setShowForm(false)}
              disabled={saving}
            >
              Batal
            </button>
          </div>
        </form>
      )}

      {loading ? (
        <p>Memuat Data AI...</p>
      ) : items.length === 0 ? (
        <div className="admin-empty">
          <div>🤖</div>
          <h3>Belum ada informasi tambahan</h3>
          <p>
            Klik Tambah Informasi untuk memasukkan program dan
            informasi baru bagi AI RT.
          </p>
        </div>
      ) : (
        <div className="admin-ai-list">
          {items.map((item) => (
            <div className="admin-ai-card" key={item.id}>
              <div className="admin-ai-card-header">
                <h3>{item.judul}</h3>
                <span>
                  {item.aktif ? "Aktif" : "Nonaktif"}
                </span>
              </div>

              <p><strong>Kategori:</strong> {item.kategori}</p>
              <p className="admin-ai-content">{item.isi}</p>

              {item.keywords?.length > 0 && (
                <p>
                  <strong>Kata kunci:</strong>{" "}
                  {item.keywords.join(", ")}
                </p>
              )}

              {item.sumber && (
                <p><strong>Sumber:</strong> {item.sumber}</p>
              )}

              <div className="admin-ai-actions">
                <button
                  type="button"
                  onClick={() => bukaEdit(item)}
                >
                  Edit
                </button>
                <button
                  type="button"
                  onClick={() => handleHapus(item)}
                >
                  Hapus
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

/* =====================================================
   POLLING
===================================================== */

function AdminPolling() {
  const [showForm, setShowForm] = useState(false);
  const [editingId, setEditingId] = useState(null);
  const [dataPolling, setDataPolling] = useState([]);
  const [loadingPolling, setLoadingPolling] = useState(true);
  const [pemilihPolling, setPemilihPolling] = useState(null);
const [pemilihPollingId, setPemilihPollingId] = useState(null);
const [loadingPemilih, setLoadingPemilih] = useState(false);

  const [judul, setJudul] = useState("");

  const [pilihan, setPilihan] = useState(["", ""]);
  useEffect(() => {
    const loadPolling = async () => {
      const { data, error } = await supabase
        .from("polling")
        .select("*")
        .order("tanggal_mulai", { ascending: false });

      if (error) {
        console.error("Gagal memuat data polling:", error);
        setLoadingPolling(false);
        return;
      }   

      setDataPolling(data || []);
      setLoadingPolling(false);
    };

    loadPolling();
  }, []);

  const tambahPilihan = () => {
    setPilihan((prev) => [...prev, ""]);
  };

  const hapusPilihan = (index) => {
    setPilihan((prev) => prev.filter((_, i) => i !== index));
  };

  const ubahPilihan = (index, value) => {
    setPilihan((prev) => prev.map((item, i) => (i === index ? value : item)));
  };

  const lihatPemilih = async (pollingId) => {
   
    setPemilihPollingId(pollingId);
    setLoadingPemilih(true);
    setPemilihPolling([]);

    const { data, error } = await supabase
      .from("polling_suara")
      .select(
        `
      id,
      polling_id,
      pilihan_id,
      warga_id,
      created_at
    `,
      )
      .eq("polling_id", pollingId)
      .order("created_at", { ascending: true });

    if (error) {
      console.error("Gagal mengambil data pemilih:", error);
      alert(`Data pemilih gagal dimuat.\n\n${error.message}`);
      setLoadingPemilih(false);
      return;
    }

    
    const wargaIds = [
      ...new Set((data || []).map((item) => item.warga_id).filter(Boolean)),
    ];

   

    const { data: wargaData, error: wargaError } = await supabase
      .from("warga")
      .select("auth_user_id, nama")
      .in("auth_user_id", wargaIds);

    if (wargaError) {
      console.error("Gagal mengambil data warga:", wargaError);
      alert(`Data nama warga gagal dimuat.\n\n${wargaError.message}`);
      setLoadingPemilih(false);
      return;
    }    

    const pilihanIds = [
      ...new Set((data || []).map((item) => item.pilihan_id).filter(Boolean)),
    ];

    const { data: pilihanData, error: pilihanError } = await supabase
      .from("polling_pilihan")
      .select("id, jawaban")
      .in("id", pilihanIds);

    if (pilihanError) {
      console.error("Gagal mengambil pilihan polling:", pilihanError);
      alert(`Data pilihan polling gagal dimuat.\n\n${pilihanError.message}`);
      setLoadingPemilih(false);
      return;
    }

    console.log("DATA PILIHAN PEMILIH:", pilihanData);

    const wargaMap = Object.fromEntries(
      (wargaData || []).map((warga) => [warga.auth_user_id, warga.nama]),
    );

    const pilihanMap = Object.fromEntries(
      (pilihanData || []).map((pilihan) => [pilihan.id, pilihan.jawaban]),
    );

    const hasilPemilih = (data || []).map((suara) => ({
      ...suara,
      nama_warga: wargaMap[suara.warga_id] || "Warga tidak ditemukan",
      jawaban: pilihanMap[suara.pilihan_id] || "Pilihan tidak ditemukan",
    }));

    setPemilihPolling(hasilPemilih);
    setLoadingPemilih(false);
  };

  const simpanPolling = async () => {
    const { data: sessionData } = await supabase.auth.getSession();


    const judulBersih = judul.trim();

    const pilihanBersih = pilihan.map((item) => item.trim()).filter(Boolean);

    if (!judulBersih) {
      alert("Pertanyaan polling belum diisi.");
      return;
    }

    if (pilihanBersih.length < 2) {
      alert("Minimal harus ada 2 pilihan jawaban.");
      return;
    }
    if (editingId) {

      const { error: updateError } = await supabase
        .from("polling")
        .update({
          judul: judulBersih,
        })
        .eq("id", editingId);

      if (updateError) {
        console.error("Gagal mengupdate polling:", updateError);
        alert(`Polling gagal diperbarui.\n\n${updateError.message}`);
        return;
      }

      const { error: deletePilihanError } = await supabase
        .from("polling_pilihan")
        .delete()
        .eq("polling_id", editingId);

      if (deletePilihanError) {
        console.error("Gagal menghapus pilihan lama:", deletePilihanError);
        alert(
          `Pilihan lama gagal diperbarui.\n\n${deletePilihanError.message}`,
        );
        return;
      }

      const dataPilihanBaru = pilihanBersih.map((jawaban, index) => ({
        polling_id: editingId,
        jawaban,
        urutan: index + 1,
      }));

      const { error: insertPilihanError } = await supabase
        .from("polling_pilihan")
        .insert(dataPilihanBaru);

      if (insertPilihanError) {
        console.error("Gagal menyimpan pilihan baru:", insertPilihanError);
        alert(`Pilihan baru gagal disimpan.\n\n${insertPilihanError.message}`);
        return;
      }

      alert("Polling berhasil diperbarui.");

      setEditingId(null);
      setJudul("");
      setPilihan(["", ""]);
      setShowForm(false);

      // Muat ulang daftar polling
      const { data: pollingTerbaru, error: reloadError } = await supabase
        .from("polling")
        .select("*")
        .order("tanggal_mulai", { ascending: false });

      if (!reloadError) {
        setDataPolling(pollingTerbaru || []);
      }

      return;
    }

    const { data: pollingBaru, error: pollingError } = await supabase
      .from("polling")
      .insert({
        judul: judulBersih,
        tanggal_mulai: new Date().toISOString().split("T")[0],
        tanggal_selesai: new Date().toISOString().split("T")[0],
        aktif: false,
      })
      .select()
      .single();

    if (pollingError) {
      console.error("Gagal menyimpan polling:", pollingError);
      console.error("Polling error message:", pollingError.message);
      console.error("Polling error details:", pollingError.details);
      console.error("Polling error hint:", pollingError.hint);
      console.error("Polling error code:", pollingError.code);

      alert(
        `Polling gagal disimpan.\n\n${pollingError.message || "Error tidak diketahui"}`,
      );

      return;
    }

    const dataPilihan = pilihanBersih.map((jawaban, index) => ({
      polling_id: pollingBaru.id,
      jawaban,
      urutan: index + 1,
    }));

    const { error: pilihanError } = await supabase
      .from("polling_pilihan")
      .insert(dataPilihan);

    if (pilihanError) {
      console.error("Gagal menyimpan pilihan polling:", pilihanError);

      alert("Polling tersimpan, tetapi pilihan jawaban gagal disimpan.");

      return;
    }

    alert("Polling berhasil dibuat.");

    const { data: pollingTerbaru, error: reloadError } = await supabase
      .from("polling")
      .select("*")
      .order("tanggal_mulai", { ascending: false });

    if (reloadError) {
      console.error("Gagal memuat ulang polling:", reloadError);
    } else {
      setDataPolling(pollingTerbaru || []);
    }
    setJudul("");
    setPilihan(["", ""]);
    setShowForm(false);
  };

  return (
    <div>
      {!showForm ? (
        <>
          <AdminPageHeader
            title="Polling Warga"
            description="Buat dan kelola polling untuk warga."
            buttonText="+ Buat Polling"
            onClick={() => setShowForm(true)}
          />

          {loadingPolling ? (
            <div className="admin-empty">
              <div>⏳</div>

              <h3>Memuat polling...</h3>
            </div>
          ) : dataPolling.length === 0 ? (
            <div className="admin-empty">
              <div>🗳️</div>

              <h3>Belum ada polling</h3>

              <p>Polling yang dibuat akan dapat dijawab oleh warga.</p>
            </div>
          ) : (
            <div className="admin-polling-list">
              {dataPolling.map((item) => (
                <div key={item.id} className="admin-polling-card">
                  <div>
                    <h3>{item.judul}</h3>
                    <p>Mulai: {item.tanggal_mulai}</p>
                    <p>Selesai: {item.tanggal_selesai}</p>
                  </div>

                  <div className="admin-polling-actions">
                    <strong
                      className={
                        item.aktif
                          ? "admin-polling-status aktif"
                          : "admin-polling-status nonaktif"
                      }
                    >
                      {item.aktif ? "● AKTIF" : "○ TIDAK AKTIF"}
                    </strong>

                    <button
                      type="button"
                      className="admin-secondary-button"
                      onClick={async () => {
                        if (item.aktif) {
                          // Menonaktifkan polling ini
                          const { error } = await supabase
                            .from("polling")
                            .update({
                              aktif: false,
                            })
                            .eq("id", item.id);

                          if (error) {
                            console.error(
                              "Gagal menonaktifkan polling:",
                              error,
                            );
                            alert(
                              `Polling gagal dinonaktifkan.\n\n${error.message}`,
                            );
                            return;
                          }

                          setDataPolling((dataLama) =>
                            dataLama.map((polling) =>
                              polling.id === item.id
                                ? { ...polling, aktif: false }
                                : polling,
                            ),
                          );

                          alert("Polling berhasil dinonaktifkan.");
                          return;
                        }

                        // Mengaktifkan polling ini:
                        // nonaktifkan semua polling lain terlebih dahulu
                        const { error: nonaktifkanError } = await supabase
                          .from("polling")
                          .update({
                            aktif: false,
                          })
                          .neq("id", item.id);

                        if (nonaktifkanError) {
                          console.error(
                            "Gagal menonaktifkan polling lainnya:",
                            nonaktifkanError,
                          );
                          alert(
                            `Polling lain gagal dinonaktifkan.\n\n${nonaktifkanError.message}`,
                          );
                          return;
                        }

                        // Aktifkan polling yang dipilih
                        const { error: aktifkanError } = await supabase
                          .from("polling")
                          .update({
                            aktif: true,
                          })
                          .eq("id", item.id);

                        if (aktifkanError) {
                          console.error(
                            "Gagal mengaktifkan polling:",
                            aktifkanError,
                          );
                          alert(
                            `Polling gagal diaktifkan.\n\n${aktifkanError.message}`,
                          );
                          return;
                        }

                        // Perbarui tampilan Admin
                        setDataPolling((dataLama) =>
                          dataLama.map((polling) => ({
                            ...polling,
                            aktif: polling.id === item.id,
                          })),
                        );

                        alert("Polling berhasil diaktifkan.");
                      }}
                    >
                      {item.aktif ? "🔴 Nonaktifkan" : "🟢 Aktifkan"}
                    </button>
                    <button
                      type="button"
                      className="admin-secondary-button"
                      onClick={() => lihatPemilih(item.id)}
                    >
                      👥 Lihat Pemilih
                    </button>
                    <button
                      type="button"
                      className="admin-secondary-button"
                      onClick={async () => {

                        const { data: pilihanData, error } = await supabase
                          .from("polling_pilihan")
                          .select("*")
                          .eq("polling_id", item.id)
                          .order("urutan", { ascending: true });

                        if (error) {
                          console.error(
                            "Gagal mengambil pilihan polling:",
                            error,
                          );
                          alert("Pilihan polling gagal dimuat.");
                          return;
                        }
                        setEditingId(item.id);
                        setJudul(item.judul);
                        setPilihan(
                          (pilihanData || []).map((pilihan) => pilihan.jawaban),
                        );
                        setShowForm(true);
                      }}
                    >
                      ✏️ Edit
                    </button>

                    <button
                      type="button"
                      className="admin-danger-button"
                      onClick={async () => {
                        const yakin = window.confirm(
                          `Apakah Anda yakin ingin menghapus polling "${item.judul}"?`,
                        );

                        if (!yakin) {
                          return;
                        }

                        console.log("MENGHAPUS POLLING:", item.id);

                        const { error } = await supabase
                          .from("polling")
                          .delete()
                          .eq("id", item.id);

                        if (error) {
                          console.error("Gagal menghapus polling:", error);
                          alert(`Polling gagal dihapus.\n\n${error.message}`);
                          return;
                        }

                        alert("Polling berhasil dihapus.");

                        setDataPolling((dataLama) =>
                          dataLama.filter((polling) => polling.id !== item.id),
                        );
                      }}
                    >
                      🗑️ Hapus
                    </button>
                  </div>

                 {pemilihPollingId === item.id &&
  pemilihPolling !== null && (
    <div className="admin-polling-voters">
      <div className="admin-polling-voters-header">
        <strong>👥 Daftar Warga yang Mengisi Polling</strong>

        <button
          type="button"
          className="admin-secondary-button"
          onClick={() => setPemilihPolling(null)}
        >
          ✕ Tutup
        </button>
      </div>

      {loadingPemilih ? (
  <p>⏳ Memuat data pemilih...</p>
) : pemilihPolling.length === 0 ? (
  <p className="admin-polling-no-voters">
    Belum ada warga yang mengisi polling ini.
  </p>
) : (
  <div className="admin-polling-voters-list">
    {pemilihPolling.map((pemilih, index) => (
      <div
        key={pemilih.id}
        className="admin-polling-voter-item"
      >
        <div>
          <strong>
            {index + 1}. {pemilih.nama_warga}
          </strong>

          <div>
            Jawaban: <strong>{pemilih.jawaban}</strong>
          </div>
        </div>

        <small>
          {new Date(pemilih.created_at).toLocaleString("id-ID")}
        </small>
      </div>
    ))}
  </div>
)}
    </div>
  )}     

                </div>
              ))}
            </div>
          )}
        </>
      ) : (
        <div>
          <AdminPageHeader
            title="Buat Polling"
            description="Buat pertanyaan dan pilihan jawaban untuk warga."
          />

          <div className="admin-form-card">
            <div className="admin-form-group">
              <label>Pertanyaan Polling</label>

              <input
                type="text"
                value={judul}
                onChange={(e) => setJudul(e.target.value)}
                placeholder="Contoh: Minggu ini kita kerja bakti melakukan apa?"
              />
            </div>

            <div className="admin-form-group">
              <label>Pilihan Jawaban</label>

              {pilihan.map((item, index) => (
                <div key={index} className="polling-admin-option">
                  <input
                    type="text"
                    value={item}
                    onChange={(e) => ubahPilihan(index, e.target.value)}
                    placeholder={`Pilihan ${index + 1}`}
                  />

                  {pilihan.length > 2 && (
                    <button type="button" onClick={() => hapusPilihan(index)}>
                      −
                    </button>
                  )}
                </div>
              ))}

              <button
                type="button"
                className="admin-secondary-button"
                onClick={tambahPilihan}
              >
                + Tambah Pilihan
              </button>
            </div>

            <div className="admin-form-actions">
              <button
                type="button"
                className="admin-secondary-button"
                onClick={() => setShowForm(false)}
              >
                Batal
              </button>

              <button
                type="button"
                className="admin-primary-button"
                onClick={simpanPolling}
              >
                Simpan Polling
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
/* =====================================================
   HEADER COMPONENT
===================================================== */

function AdminPageHeader({ title, description, buttonText, onClick }) {
  return (
    <div className="admin-page-header">
      <div>
        <p>ADMIN RT</p>

        <h2>{title}</h2>

        <span>{description}</span>
      </div>

      {buttonText && (
        <button className="admin-add-button" onClick={onClick}>
          {buttonText}
        </button>
      )}
    </div>
  );
}

export default Admin;
