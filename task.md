# Task List: Website Pondok Pesantren Ibnu Abbas

> **Role Saya:** Orang B (Design System, Konten & Visual)
> **Target Branch Kerja:** `fariz` (menunggu sinkronisasi dari `waly`)

---

## ⚡ Fase 0: Pra-Task — Fondasi Bersama (Dikerjakan Orang A)
- [x] **Setup Routing** — Install `react-router-dom`, konfigurasi di `main.jsx`
- [x] **Update `App.jsx`** — Atur routing: `/` = Homepage, `/ppdb` = Halaman PPDB Center
- [x] **Buat halaman PPDB terpisah** — Pindahkan `PPDBDashboard` dari homepage ke page `/ppdb`
- [x] **Restrukturisasi Navbar** — Menu: Beranda, Profil, Tentang Kami, Kontak Kami
- [x] **Commit & push** fondasi bersama

---

## 👤 Orang B (Tugas Kamu) — Design System, Konten & Visual
*Files: `index.css`, `Hero.jsx`, `About.jsx`, `Teachers.jsx`, `Facilities.jsx`*

### B1: Design System & CSS Polish
- [x] Tambahkan CSS variables tambahan (shadow, radius, spacing)
- [x] Tambahkan `scroll-behavior: smooth` pada `html`
- [x] Tambahkan utility class `.bg-mint` (belum didefinisikan)
- [x] Perkuat section title styling (garis gold di bawah heading)
- [x] Tambahkan responsive font sizing
- [ ] Tambahkan subtle background textures/patterns

### B2: Hero Section Enhancement
- [x] Tambahkan gambar asrama baru (Pengganti icon)
- [x] Hubungkan tombol "Daftar Sekarang (PPDB)" ke `/ppdb`
- [x] Hubungkan tombol "Pelajari Program" ke section `#profil`
- [x] Tambahkan stagger animation yang lebih dramatis
- [ ] Perbaiki responsive sizing circle element di mobile

### B3: About / Profil Section Polish
- [x] Tambahkan scroll-triggered animation (`whileInView`)
- [x] Tambahkan icon per item di "Kenapa Memilih Kami"
- [x] Pastikan responsive layout di tablet & mobile

### B4: Teachers Directory Enhancement (F02)
- [x] Generate/ganti avatar pengajar yang representatif
- [x] Tambahkan hover effect pada card (overlay info)
- [x] Perbaiki layout: 2 kolom di tablet, 1 kolom di mobile

### B5: Facilities Gallery + Carousel (F03)
- [x] Tambahkan **Bootstrap Carousel** sebagai slideshow utama
- [x] Pertahankan grid foto di bawah sebagai thumbnail gallery
- [x] Tambahkan lightbox/modal saat foto diklik
- [x] Generate gambar fasilitas pesantren yang representatif
- [x] Tambahkan caption deskriptif per foto

---

## 🤝 Fase Akhir: Final Polish — Bersama
- [x] **Responsiveness Audit** — Test di 375px, 768px, 1200px
- [x] Fix semua layout issues
- [x] Pastikan font sizing responsif
- [x] Tambahkan scroll-to-top button di `App.jsx`
- [x] Final review visual keseluruhan
