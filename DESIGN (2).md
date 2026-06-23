# Name: Website Pondok Pesantren Ibnu Abbas Banjarmangu

- **Colors:**
  surface: '#fcf9f8'
  surface-dim: '#dcd9d9'
  surface-bright: '#fcf9f8'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f6f3f2'
  surface-container: '#f0eded'
  surface-container-high: '#eae7e7'
  surface-container-highest: '#e4e2e1'
  on-surface: '#1b1c1c'
  on-surface-variant: '#464653'
  inverse-surface: '#303030'
  inverse-on-surface: '#f3f0f0'
  outline: '#767684'
  outline-variant: '#c6c5d5'
  surface-tint: '#4b53bc'
  primary: '#00003c'
  on-primary: '#ffffff'
  primary-container: '#000080'
  on-primary-container: '#777eea'
  inverse-primary: '#bfc2ff'
  secondary: '#755b00'
  on-secondary: '#ffffff'
  secondary-container: '#fcd66c'
  on-secondary-container: '#755c00'
  tertiary: '#0b0b09'
  on-tertiary: '#ffffff'
  tertiary-container: '#21221f'
  on-tertiary-container: '#8a8985'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#e0e0ff'
  primary-fixed-dim: '#bfc2ff'
  on-primary-fixed: '#00006e'
  on-primary-fixed-variant: '#3239a3'
  secondary-fixed: '#ffe08e'
  secondary-fixed-dim: '#e7c35b'
  on-secondary-fixed: '#241a00'
  on-secondary-fixed-variant: '#584400'
  tertiary-fixed: '#e4e2dd'
  tertiary-fixed-dim: '#c8c6c2'
  on-tertiary-fixed: '#1b1c19'
  on-tertiary-fixed-variant: '#474744'
  background: '#fcf9f8'
  on-background: '#1b1c1c'
  surface-variant: '#e4e2e1'

- **Rounded:**
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
- **Spacing:**
  base: 8px
  container-max: 1280px
  gutter: 24px
  margin-mobile: 16px
  stack-sm: 12px
  stack-md: 24px
  stack-lg: 48px


## Merek & Gaya
Sistem desain ini dibuat untuk mencerminkan dualitas dari pondok pesantren modern: keunggulan akademik dan kedalaman spiritual. Estetika yang diusung adalah **Modern** dengan pengaruh **Minimalis** yang halus, mengutamakan kejelasan, prestise, dan kepercayaan.

Target audiens mencakup calon orang tua murid yang mencari institusi tepercaya dan santri/siswa yang mencari lingkungan belajar yang fokus. UI yang dihadirkan membangkitkan kesan "Ketenangan yang Berwibawa (Authoritative Serenity)"—stabil dan institusional namun tetap hangat serta menyambut. Kami mencapainya melalui tata letak yang terstruktur, ruang kosong (*whitespace*) yang leluasa, dan palet warna kontras tinggi yang menekankan nilai warisan tradisi (*heritage*). 

## Warna
Palet warna diambil langsung dari lambang institusi untuk memastikan kontinuitas merek dan bobot kelembagaan.

- **Utama / Primary (Biru Dongker Tua):** Digunakan untuk header, aksi utama (*primary actions*), dan elemen struktural. Warna ini mempresentasikan otoritas, stabilitas, dan kedalaman ilmu pengetahuan.
- **Sekunder / Secondary (Emas Prestisius):** Digunakan untuk aksen, sorotan (*highlights*), dan ikon. Warna ini melambangkan pencerahan, keunggulan, dan sifat sakral dari kurikulum.
- **Tersier / Tertiary (Perkamen):** Warna putih pudar (*off-white*) yang sangat lembut dan hangat, digunakan untuk latar belakang bagian (*section*) guna mengurangi ketegangan mata dan menambah kesan akademis.
- **Netral / Neutrals:** Rangkaian warna abu-abu mulai dari #2D2D2D untuk teks hingga #F4F4F4 untuk batas (*border*) tipis, memastikan suasana yang kokoh dan profesional.


## Tata Letak & Spasi
Tata letak mengikuti model **Fluid Grid** dengan lebar kontainer maksimal untuk desktop guna memastikan konten tetap nyaman dibaca.

- **Desktop:** Kisi 12 kolom (*12-column grid*) dengan *gutter* 24px. Gunakan margin yang lebar (48px+) untuk memberikan ruang bernapas pada desain, mencerminkan lingkungan yang tenang.
- **Mobile:** Kisi 4 kolom (*4-column grid*) dengan margin 16px. Konten harus ditumpuk secara vertikal dengan fokus pada kemudahan navigasi menggunakan jempol.
- **Ritme:** Spasi mengikuti unit dasar 8px. Bantalan vertikal (*vertical padding*) untuk setiap bagian harus dibuat leluasa (80px–120px) untuk memisahkan area tematik yang berbeda dari informasi sekolah.

## Elevasi & Kedalaman
Untuk mempertahankan kesan profesional dan tepercaya, sistem desain ini menghindari bayangan yang tebal dan lebih memilih **Lapisan Tonal (Tonal Layers)** serta **Garis Luar Kontras Rendah (Low-Contrast Outlines)**.

- **Permukaan / Surfaces:** Gunakan pergeseran halus pada warna latar belakang (dari Putih ke Warna Perkamen Tersier) untuk membedakan blok konten yang berbeda.
- **Bayangan / Shadows:** Jika diperlukan (misalnya: untuk modal aktif atau efek melayang pada kartu), gunakan bayangan yang sangat lembut dan menyebar: `0 4px 20px rgba(0, 0, 80, 0.08)`. Bayangan ini diberi sedikit rona biru dongker utama agar terlihat lebih menyatu.
- **Batas / Borders:** Gunakan garis tepi solid 1px dengan warna netral terang (#E5E5E5) untuk kolom formulir dan item daftar demi menjaga struktur yang rapi dan teratur.

## Bentuk
Bahasa bentuk yang digunakan adalah **Lembut / Soft**. Kami menggunakan radius dasar 4px (0.25rem) untuk menciptakan keseimbangan antara ketegasan presisi lembaga akademik dan pendekatan lembut nan ramah dari sebuah rumah spiritual.

- Kontainer besar atau bagian unggulan dapat menggunakan **rounded-lg** (8px) agar terasa lebih mengundang.
- Tombol ajakan bertindak (*call-to-action*) harus mempertahankan radius lembut yang konsisten dan bukan berbentuk pil utuh (*fully pill-shaped*), guna menjaga nada profesional.

## Komponen
- **Tombol / Buttons:** Tombol utama menggunakan latar belakang Biru Dongker dengan teks Putih. Tombol sekunder menggunakan garis tepi Emas dengan teks Emas. Tombol tersier hanya berupa teks dengan garis bawah (*underline*) saat disorot (*hover*).
- **Kartu / Cards:** Latar belakang putih dengan garis tepi netral 1px. Judul di dalam kartu harus menggunakan warna Emas Sekunder untuk ikon guna menarik perhatian.
- **Kolom Input / Input Fields:** Kotak persegi panjang yang bersih dengan radius halus 4px. Status fokus (*focus states*) harus menggunakan garis tepi Biru Dongker 2px.
- **Chip/Badge:** Digunakan untuk label "Pendaftaran Dibuka" atau "Program Baru". Komponen ini menggunakan latar belakang Emas dengan teks Biru Dongker untuk visibilitas tinggi.
- **Daftar Akademik / Academic Lists:** Gunakan ikon kustom (misalnya: pola geometris Islam atau ikon buku) berwarna Emas sebagai poin bulat (*bullet points*) untuk memperkuat tema.
- **Navigasi / Navigation:** Batang menu atas yang menempel (*sticky top bar*) dengan latar belakang Putih dan garis tepi bawah tipis berwarna Biru Dongker memastikan identitas institusi selalu terlihat.
