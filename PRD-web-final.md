Berikut adalah **Product Requirements Document (PRD)** lengkap yang telah menggabungkan fitur fungsional, alur aplikasi, serta ketentuan UI/UX final dengan palet warna *Deep Green*.

---

# Product Requirements Document (PRD)
**Proyek:** Website Profil & PPDB Center Pondok Pesantren  
**Versi:** 1.4 (Final Version - Vanilla Stack & Bootstrap 5)  
**Status:** Siap Eksekusi

---

## 1. Pendahuluan
### **1.1 Tujuan (Objective)**
Membangun platform digital sebagai wajah resmi pondok pesantren untuk memperkuat branding, menyediakan informasi edukasi bagi publik, serta mengoptimalkan konversi calon pendaftar santri baru melalui informasi PPDB yang transparan dan akses komunikasi langsung.

### **1.2 Persona Pengguna**
* **Calon Wali Santri:** Orang tua yang mencari informasi kredibel tentang kurikulum, fasilitas, dan biaya melalui HP.
* **Admin Pondok:** Pengurus yang mengelola pendaftaran dan merespons pertanyaan via WhatsApp.

---

## 2. Kebutuhan Fungsional (Functional Requirements)

### **A. Modul Profil (Branding)**
| ID | Fitur | Deskripsi Teknis | Prioritas |
| :--- | :--- | :--- | :--- |
| F01 | **Sejarah & Visi Misi** | Narasi statis menggunakan sistem Grid Bootstrap untuk tata letak yang rapi. | High |
| F02 | **Direktori Pengajar** | List staff menggunakan **Bootstrap Cards**. Data ditarik dari array JavaScript (Vanilla). | High |
| F03 | **Galeri Fasilitas** | Grid foto responsif dengan komponen **Carousel** untuk dokumentasi lingkungan pondok. | Medium |

### **B. Modul Dashboard PPDB**
| ID | Fitur | Deskripsi Teknis | Prioritas |
| :--- | :--- | :--- | :--- |
| F04 | **Kuota Real-time** | Penanda sisa kursi menggunakan **Bootstrap Badges** yang nilainya dimanipulasi via DOM JS. | High |
| F05 | **Statistik Jenjang** | Visualisasi persentase santri menggunakan **Bootstrap Progress Bars** yang lebar isiannya diatur via JS. | High |
| F06 | **Panduan Daftar** | Informasi syarat dan prosedur menggunakan komponen **Accordion** agar hemat ruang. | High |

### **C. Integrasi Komunikasi**
| ID | Fitur | Deskripsi Teknis | Prioritas |
| :--- | :--- | :--- | :--- |
| F07 | **WhatsApp CTA** | Tombol pendaftaran utama dengan *pre-filled message* ke admin. | High |
| F08 | **Floating Chat** | Tombol melayang di pojok kanan bawah menggunakan `position: fixed` pada CSS. | Medium |

---

## 3. Ketentuan UI/UX (Design Guidelines)

### **3.1 Palet Warna (Nusantara Emerald)**
| Elemen | Warna | Hex Code |
| :--- | :--- | :--- |
| **Utama (Primary)** | Deep Green | `#064E3B` |
| **Aksen (Accent)** | Warm Gold | `#D97706` |
| **Latar Belakang** | Mint Green | `#ECFDF5` |
| **Teks Utama** | Dark Gray | `#374151` |

### **3.2 Tipografi**
* **Heading (Judul):** Menggunakan font tipe Serif (Contoh: *Lora* atau *Times New Roman*) untuk kesan formal dan berwibawa.
* **Body (Isi):** Menggunakan font tipe Sans-serif (Contoh: *Inter* atau *Segoe UI*) agar mudah dibaca di perangkat mobile.

### **3.3 Prinsip UX**
* **Mobile First:** Navigasi harus mudah dioperasikan dengan satu tangan.
* **Scannable:** Konten dibagi per section dengan jarak yang cukup (`py-5` di Bootstrap) agar tidak terasa sesak.
* **Visual Hierarchy:** Tombol pendaftaran harus menggunakan warna **Warm Gold** agar menonjol dari background **Deep Green**.

---

## 4. Alur Pengguna (App Flow)
1.  **Entry Point:** Pengunjung mendarat di Homepage, disambut visual fasilitas dan visi misi.
2.  **Validation:** Pengunjung menuju menu Profil Pengajar untuk melihat kualitas tenaga pendidik.
3.  **Evaluation:** Pengunjung masuk ke halaman PPDB untuk melihat sisa kuota dan persentase sebaran santri.
4.  **Conversion:** Pengunjung menekan tombol WhatsApp untuk melakukan pendaftaran atau tanya jawab.

---

## 5. Spesifikasi Teknis (Tech Stack)
* **Struktur:** HTML5 (Semantic Tags).
* **Framework CSS:** Bootstrap 5.3 (Gunakan CDN untuk kemudahan awal).
* **Styling Tambahan:** Vanilla CSS untuk kustomisasi warna Deep Green dan Gold.
* **Interaksi:** Vanilla JavaScript (DOM Manipulation).
* **Data:** File JSON lokal atau Array variabel di JavaScript untuk menyimpan data kuota dan staff.

---

Dokumen ini sekarang bisa menjadi panduan utama kamu dalam melakukan *coding*. Apakah kamu ingin mulai dengan menyusun struktur HTML dasar atau langsung ke bagian CSS untuk mengunci palet warna *Deep Green* ini?