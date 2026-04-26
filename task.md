# Task List: Website Pondok Pesantren Ibnu Abbas

> **Role Saya:** Orang B (Design System, Konten & Visual)
> **Target Branch Kerja:** `fariz` (menunggu sinkronisasi dari `waly`)

---

## ⚡ Fase 0: Pra-Task — Fondasi Bersama (Dikerjakan Orang A)
- [ ] **Setup Routing** — Install `react-router-dom`, konfigurasi di `main.jsx`
- [ ] **Update `App.jsx`** — Atur routing: `/` = Homepage, `/ppdb` = Halaman PPDB Center
- [ ] **Buat halaman PPDB terpisah** — Pindahkan `PPDBDashboard` dari homepage ke page `/ppdb`
- [ ] **Restrukturisasi Navbar** — Menu: Beranda, Profil, Tentang Kami, Kontak Kami
- [ ] **Commit & push** fondasi bersama

---

## 👤 Orang B (Tugas Kamu) — Design System, Konten & Visual
*Files: `index.css`, `Hero.jsx`, `About.jsx`, `Teachers.jsx`, `Facilities.jsx`*

### B1: Design System & CSS Polish
- [ ] Tambahkan CSS variables tambahan (shadow, radius, spacing)
- [ ] Tambahkan `scroll-behavior: smooth` pada `html`
- [ ] Tambahkan utility class `.bg-mint` (belum didefinisikan)
- [ ] Perkuat section title styling (garis gold di bawah heading)
- [ ] Tambahkan responsive font sizing
- [ ] Tambahkan subtle background textures/patterns

### B2: Hero Section Enhancement
- [ ] Generate gambar/ilustrasi pesantren (Ganti placeholder icon)
- [ ] Hubungkan tombol "Daftar Sekarang (PPDB)" ke `/ppdb`
- [ ] Hubungkan tombol "Pelajari Program" ke section `#profil`
- [ ] Tambahkan stagger animation yang lebih dramatis
- [ ] Perbaiki responsive sizing circle element di mobile

### B3: About / Profil Section Polish
- [ ] Tambahkan scroll-triggered animation (`whileInView`)
- [ ] Tambahkan icon per item di "Kenapa Memilih Kami"
- [ ] Pastikan responsive layout di tablet & mobile

### B4: Teachers Directory Enhancement (F02)
- [ ] Generate/ganti avatar pengajar yang representatif
- [ ] Tambahkan hover effect pada card (overlay info)
- [ ] Perbaiki layout: 2 kolom di tablet, 1 kolom di mobile

### B5: Facilities Gallery + Carousel (F03)
- [ ] Tambahkan **Bootstrap Carousel** sebagai slideshow utama
- [ ] Pertahankan grid foto di bawah sebagai thumbnail gallery
- [ ] Tambahkan lightbox/modal saat foto diklik
- [ ] Generate gambar fasilitas pesantren yang representatif
- [ ] Tambahkan caption deskriptif per foto

---

## 🤝 Fase Akhir: Final Polish — Bersama
- [ ] **Responsiveness Audit** — Test di 375px, 768px, 1200px
- [ ] Fix semua layout issues
- [ ] Pastikan font sizing responsif
- [ ] Tambahkan scroll-to-top button di `App.jsx`
- [ ] Final review visual keseluruhan
