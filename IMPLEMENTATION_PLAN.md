# Rencana Implementasi: Pembaruan Teks Header & Fitur Jadwal Penjengukan

## Gambaran Umum

Dua perubahan yang diminta:

1. **Teks Header**: Mengubah "Ibnu Abbas" → "Ibnu Abbas Banjarnegara"
2. **Jadwal Penjengukan**: Menambahkan fitur jadwal kunjungan untuk menarik minat pengunjung

---

## Perubahan 1: Pembaruan Teks Header

### File Target

- `src/components/Navbar.jsx` — baris 62

### Kode Saat Ini (baris 62)

```jsx
Ibnu Abbas

```

### Perubahan yang Diperlukan

```jsx
Ibnu Abbas Banjarnegara

```

### Penilaian Dampak

- **Cakupan**: Perubahan satu baris pada tag span `Navbar.Brand`
- **Risiko**: Tidak ada (hanya perubahan teks)
- **Pengujian**: Verifikasi visual di semua halaman (Home, Profil, Program, Fasilitas, Artikel, PPDB)
- **Responsif**: Pastikan teks tidak meluap (_overflow_) pada tampilan seluler (menggunakan class `fs-4` dan `fw-bold` saat ini)

---

## Perubahan 2: Fitur Jadwal Penjengukan

### Definisi Fitur

**"Jadwal Penjengukan"** = Jadwal kunjungan bagi calon santri/orang tua untuk berkunjung ke pesantren. Mencakup:

- Jam kunjungan (hari & waktu)
- Informasi pendaftaran/kontak untuk menjadwalkan kunjungan
- Hal yang akan didapatkan selama kunjungan (tur, bertemu ustadz, melihat fasilitas)
- Tombol ajakan bertindak (_call-to-action_) untuk memesan jadwal kunjungan

### Opsi Penempatan yang Direkomendasikan

| Opsi                     | Lokasi                                                         | Kelebihan                                                                                                                 | Kekurangan                                                              |
| :----------------------- | :------------------------------------------------------------- | :------------------------------------------------------------------------------------------------------------------------ | :---------------------------------------------------------------------- |
| **A (Direkomendasikan)** | Home.jsx — setelah `KalenderPendidikan`, sebelum `ContactHome` | Visibilitas tinggi, alur logis (kalender → jadwal kunjungan → kontak), memanfaatkan trafik halaman beranda yang sudah ada | Menambah panjang halaman beranda                                        |
| **B**                    | Halaman khusus baru `/jadwal-penjengukan` + tautan di Navbar   | Pemisahan yang rapi, ramah SEO, dapat dikembangkan di kemudian hari                                                       | Memerlukan rute (_route_) baru, potensi ditemukan pengguna lebih rendah |
| **C**                    | ProfilPage.jsx — setelah komponen About                        | Sesuai konteks (mempelajari profil → berkunjung)                                                                          | Trafik lebih rendah daripada Halaman Beranda                            |
| **D**                    | Bagian Hero CTA (Hero.jsx)                                     | Visibilitas maksimal                                                                                                      | Memadati bagian hero, lebih baik untuk CTA utama saja                   |

### Rekomendasi: **Opsi A** — Dimasukkan dalam Home.jsx setelah KalenderPendidikan

**Alasan**:

1. KalenderPendidikan menampilkan kalender akademik → transisi alami menuju ajakan "kunjungi kami"
2. Diikuti oleh ContactHome → pengguna dapat langsung memesan jadwal/menghubungi admin
3. Tidak memerlukan rute baru, memanfaatkan trafik Halaman Beranda yang sudah ada
4. Konsisten dengan pola komposisi komponen di `Home.jsx`

---

### Detail Implementasi

#### 2.1 Membuat Komponen Baru: `src/components/JadwalPenjengukan.jsx`

**Struktur**:

```jsx
// Pembungkus Section dengan gaya desain yang konsisten
<section className="section-padding bg-white bg-pattern-islamic">
  <Container>
    {/* Header */}
    <motion.div className="text-center mb-5" ...>
      <h5 className="text-accent-gold fw-bold mb-2">Kunjungi Kami</h5>
      <h2 className="display-5 fw-bold section-title text-center text-primary-green">
        Jadwal Penjengukan
      </h2>
      <p className="text-muted mt-3" style={{maxWidth: "700px", margin: "0 auto"}}>
        Datang dan rasakan langsung suasana Ma'had Ibnu Abbas Banjarnegara
      </p>
    </motion.div>

    {/* Kisi Konten (Content Grid) */}
    <Row className="align-items-center gy-5">
      {/* Kiri: Kartu Informasi */}
      <Col lg={6}>
        <Row className="g-4">
          {/* Kartu 1: Hari & Jam */}
          <Col md={6}>
            <Card className="pondok-card h-100 p-4 border-0 text-center">
              <Calendar className="text-accent-gold mb-3" size={40} />
              <Card.Title className="fw-bold">Hari Kunjungan</Card.Title>
              <Card.Text className="text-muted">
                Senin – Sabtu<br />
                (Minggu & Hari Libur Nasional: Tutup)
              </Card.Text>
            </Card>
          </Col>
          {/* Kartu 2: Waktu */}
          <Col md={6}>
            <Card className="pondok-card h-100 p-4 border-0 text-center">
              <Clock className="text-accent-gold mb-3" size={40} />
              <Card.Title className="fw-bold">Jam Kunjungan</Card.Title>
              <Card.Text className="text-muted">
                08:00 – 11:00 WIB<br />
                13:30 – 16:00 WIB
              </Card.Text>
            </Card>
          </Col>
          {/* Kartu 3: Durasi */}
          <Col md={6}>
            <Card className="pondok-card h-100 p-4 border-0 text-center">
              <Timer className="text-accent-gold mb-3" size={40} />
              <Card.Title className="fw-bold">Durasi</Card.Title>
              <Card.Text className="text-muted">
                ± 60 – 90 menit<br />
                (Termasuk tur fasilitas & tanya jawab)
              </Card.Text>
            </Card>
          </Col>
          {/* Kartu 4: Kuota */}
          <Col md={6}>
            <Card className="pondok-card h-100 p-4 border-0 text-center">
              <Users className="text-accent-gold mb-3" size={40} />
              <Card.Title className="fw-bold">Maksimal</Card.Title>
              <Card.Text className="text-muted">
                10 orang per sesi<br />
                (Grup >10: hubungi admin)
              </Card.Text>
            </Card>
          </Col>
        </Row>
      </Col>

      {/* Kanan: Apa yang Didapat + CTA */}
      <Col lg={6}>
        <Card className="pondok-card h-100 p-4 p-md-5 border-0 bg-primary-green text-white shadow-xl">
          <h3 className="text-accent-gold fw-bold mb-4">Apa yang Didapat Saat Penjengukan?</h3>
          <ul className="list-unstyled mb-4">
            {[
              "Tur fasilitas: asrama, masjid, kelas, maktabah, lapangan",
              "Temu langsung dengan ustadz/pendamping santri",
              "Lihat langsung kegiatan belajar santri (jika jam pelajaran)",
              "Konsultasi gratis program & biaya pendidikan",
              "Makan ringan & minuman disediakan",
            ].map((item, i) => (
              <motion.li key={i} initial={{opacity:0, x:20}} whileInView={{opacity:1, x:0}} transition={{delay: i*0.1}} className="mb-3 d-flex align-items-start">
                <CheckCircle2 className="text-accent-gold me-3 mt-1" size={20} />
                <div>{item}</div>
              </motion.li>
            ))}
          </ul>
          <Button
            as={Link}
            to="/ppdb"
            className="btn-accent-pondok d-inline-flex align-items-center justify-content-center shadow-lg w-100 w-md-auto"
          >
            Jadwalkan Kunjungan <ArrowRight className="ms-2" size={18} />
          </Button>
        </Card>
      </Col>
    </Row>

    {/* Catatan/Pemberitahuan */}
    <motion.div initial={{opacity:0}} whileInView={{opacity:1}} viewport={{once:true}} className="text-center mt-5 text-muted small">
      <p>Jadwal dapat berubah sewaktu-waktu. Konfirmasi ke admin WhatsApp sebelum datang.</p>
      <a href="https://wa.me/628xxxxxxxxxx" target="_blank" rel="noopener noreferrer" className="text-primary-green fw-medium">
        Hubungi Admin via WhatsApp
      </a>
    </motion.div>
  </Container>
</section>

```

**Dependensi yang Harus Diimpor**:

- `Container, Row, Col, Card, Button` dari `react-bootstrap`
- `motion` dari `framer-motion`
- `Calendar, Clock, Timer, Users, CheckCircle2, ArrowRight` dari `lucide-react`
- `Link` dari `react-router-dom`

**Gaya Desain (Styling)**: Menggunakan kelas yang sudah ada:

- `section-padding` — jarak vertikal yang konsisten
- `bg-pattern-islamic` — pola latar belakang islami
- `pondok-card` — gaya desain kartu (digunakan di About.jsx, KalenderPendidikan)
- `text-accent-gold`, `text-primary-green` — warna merek (_brand colors_)
- `btn-accent-pondok` — gaya desain tombol utama

#### 2.2 Memperbarui `src/pages/Home.jsx`

**Sebelumnya**:

```jsx
import KalenderPendidikan from "../components/KalenderPendidikan";
import ContactHome from "../components/ContactHome";

const Home = () => {
  return (
    <>
      <Hero />
      <IntroStats />
      <AboutHome />
      <FeaturedPrograms />
      <FacilitiesHome />
      <KalenderPendidikan />
      <ContactHome />
    </>
  );
};
```

**Sesudahnya**:

```jsx
import KalenderPendidikan from "../components/KalenderPendidikan";
import JadwalPenjengukan from "../components/JadwalPenjengukan";
import ContactHome from "../components/ContactHome";

const Home = () => {
  return (
    <>
      <Hero />
      <IntroStats />
      <AboutHome />
      <FeaturedPrograms />
      <FacilitiesHome />
      <KalenderPendidikan />
      <JadwalPenjengukan />
      <ContactHome />
    </>
  );
};
```

---

## Hasil Akhir yang Diharapkan

### Hasil Visual

1. **Header**: Semua halaman menampilkan "Ibnu Abbas Banjarnegara" pada bagian merek navbar
2. **Halaman Beranda**: Bagian baru di antara "Kalender Pendidikan" dan "Kontak Kami" yang menampilkan:

- 4 kartu informasi (Hari, Jam, Durasi, Kuota)
- Panel kanan: Daftar periksa "Apa yang Didapat" + tombol CTA ke halaman PPDB
- Tautan kontak WhatsApp untuk konfirmasi

### Alur Pengguna (User Journey)

```
Pengunjung masuk ke Halaman Beranda
 → Membaca Hero (proposisi nilai)
 → Melihat Statistik (kredibilitas)
 → Membaca AboutHome (identitas)
 → Melihat Program & Fasilitas (penawaran)
 → Melihat Kalender Pendidikan (jadwal akademik)
 → BARU: Melihat Jadwal Penjengukan (jadwal kunjungan + keuntungan)
 → Mengklik "Jadwalkan Kunjungan" → Beralih ke halaman PPDB
 → ATAU mengklik WhatsApp → Kontak langsung ke admin

```

### Metrik Keberhasilan

- Rasio klik (_click-through rate_) pada tombol "Jadwalkan Kunjungan"
- Pertanyaan WhatsApp yang merujuk pada kata "penjengukan"
- Registrasi PPDB yang berasal dari pemesanan kunjungan

---

## Ringkasan Perubahan File

| File                                   | Jenis Perubahan               | Baris    |
| -------------------------------------- | ----------------------------- | -------- |
| `src/components/Navbar.jsx`            | Modifikasi                    | 62       |
| `src/components/JadwalPenjengukan.jsx` | Pembuatan (baru)              | ~120     |
| `src/pages/Home.jsx`                   | Modifikasi (impor + komponen) | +2 baris |

---

## Daftar Periksa Pengujian (Testing Checklist)

- [ ] Teks header merender dengan benar di semua halaman (desktop & seluler)
- [ ] Warna teks header berfungsi baik dalam kondisi transparan (bagian atas beranda) maupun saat digulir (_scrolled_ / warna solid)
- [ ] JadwalPenjengukan merender di halaman Beranda tanpa adanya pergeseran tata letak (_layout shift_)
- [ ] Animasi (framer-motion) berfungsi: _fade-in_, kartu bertahap (_stagger_), efek _hover_
- [ ] Responsif: kartu tersusun vertikal di seluler, berdampingan di desktop
- [ ] Tombol CTA mengarah ke tautan `/ppdb` dengan benar
- [ ] Tautan WhatsApp terbuka di tab baru
- [ ] Tidak ada kesalahan pada konsol (_console errors_)
- [ ] Proses pembuatan aplikasi berhasil (`npm run build`)

---
