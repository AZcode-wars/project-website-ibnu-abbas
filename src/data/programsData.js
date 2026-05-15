import { BookOpen, GraduationCap, Library, Users } from 'lucide-react';
import React from 'react';

const programs = [
  {
    slug: 'smp-terpadu',
    title: 'SMP Terpadu',
    icon: React.createElement(Users, { size: 40, className: 'text-accent-gold mb-3' }),
    description:
      "Pendidikan menengah pertama yang menggabungkan kurikulum nasional (Kemdikbud) dengan kurikulum kepesantrenan dasar, membentuk santri yang cerdas secara akademik dan beradab.",
    ageGroup: '12 – 15 tahun (Setara Kelas 7, 8, 9)',
    generalCurriculum: [
      'Kurikulum Nasional (Kemdikbud)',
      'Bahasa Arab Aktif & Komunikatif',
      'Tahfizh Al-Qur\'an (Target 5 Juz)',
      'Akidah & Akhlak Islami',
      'Kitab Kuning Dasar (Aqidatul Awam, Safinah)',
      'Tahsin & Tajwid Al-Qur\'an',
      'Bahasa Inggris Komunikatif',
      'Ekstrakurikuler & Olahraga',
    ],
    classCurriculum: [
      {
        className: 'Kelas 7',
        subjects: [
          { subject: 'Matematika', hoursPerWeek: 5 },
          { subject: 'Bahasa Indonesia', hoursPerWeek: 4 },
          { subject: 'IPA (Fisika & Biologi)', hoursPerWeek: 5 },
          { subject: 'IPS Terpadu', hoursPerWeek: 4 },
          { subject: 'Bahasa Inggris', hoursPerWeek: 4 },
          { subject: 'Bahasa Arab', hoursPerWeek: 6 },
          { subject: 'Al-Qur\'an & Tahfizh', hoursPerWeek: 6 },
          { subject: 'Akidah & Akhlak', hoursPerWeek: 2 },
          { subject: 'Fiqih Dasar', hoursPerWeek: 2 },
          { subject: 'PPKn', hoursPerWeek: 2 },
        ],
      },
      {
        className: 'Kelas 8',
        subjects: [
          { subject: 'Matematika', hoursPerWeek: 5 },
          { subject: 'Bahasa Indonesia', hoursPerWeek: 4 },
          { subject: 'IPA (Fisika & Biologi)', hoursPerWeek: 5 },
          { subject: 'IPS Terpadu', hoursPerWeek: 4 },
          { subject: 'Bahasa Inggris', hoursPerWeek: 4 },
          { subject: 'Bahasa Arab', hoursPerWeek: 6 },
          { subject: 'Al-Qur\'an & Tahfizh', hoursPerWeek: 6 },
          { subject: 'Nahwu-Sharaf Dasar', hoursPerWeek: 2 },
          { subject: 'Hadits Arbain', hoursPerWeek: 2 },
          { subject: 'PPKn', hoursPerWeek: 2 },
        ],
      },
      {
        className: 'Kelas 9',
        subjects: [
          { subject: 'Matematika', hoursPerWeek: 6 },
          { subject: 'Bahasa Indonesia', hoursPerWeek: 4 },
          { subject: 'IPA (Fisika & Biologi)', hoursPerWeek: 6 },
          { subject: 'IPS Terpadu', hoursPerWeek: 4 },
          { subject: 'Bahasa Inggris', hoursPerWeek: 5 },
          { subject: 'Bahasa Arab', hoursPerWeek: 6 },
          { subject: 'Al-Qur\'an & Tahfizh', hoursPerWeek: 6 },
          { subject: 'Nahwu-Sharaf Lanjutan', hoursPerWeek: 2 },
          { subject: 'Fiqih Muamalah', hoursPerWeek: 2 },
          { subject: 'Persiapan UN/Ujian Pesantren', hoursPerWeek: 3 },
        ],
      },
    ],
  },

  {
    slug: 'sma-terpadu',
    title: 'SMA Terpadu',
    icon: React.createElement(GraduationCap, { size: 40, className: 'text-accent-gold mb-3' }),
    description:
      "Pendidikan menengah atas dengan peminatan MIPA dan IPS, dibekali dengan kemampuan bahasa Arab & Inggris aktif serta tahfizh Al-Qur'an berkelanjutan.",
    ageGroup: '15 – 18 tahun (Setara Kelas 10, 11, 12)',
    generalCurriculum: [
      'Kurikulum Nasional (Kemdikbud) – Peminatan MIPA & IPS',
      'Bahasa Arab Aktif Tingkat Lanjut',
      'Tahfizh Al-Qur\'an (Target 10 Juz akumulatif)',
      'Studi Kitab Kuning Lanjutan',
      'Nahwu-Sharaf Tingkat Menengah',
      'Bahasa Inggris Akademik & Percakapan',
      'Muhadharah (Latihan Pidato 3 Bahasa)',
      'Persiapan Perguruan Tinggi & Beasiswa Timur Tengah',
    ],
    classCurriculum: [
      {
        className: 'Kelas 10',
        subjects: [
          { subject: 'Matematika Wajib', hoursPerWeek: 4 },
          { subject: 'Fisika / Ekonomi (Peminatan)', hoursPerWeek: 4 },
          { subject: 'Kimia / Sosiologi (Peminatan)', hoursPerWeek: 4 },
          { subject: 'Biologi / Geografi (Peminatan)', hoursPerWeek: 4 },
          { subject: 'Bahasa Inggris', hoursPerWeek: 4 },
          { subject: 'Bahasa Arab', hoursPerWeek: 6 },
          { subject: 'Al-Qur\'an & Tahfizh', hoursPerWeek: 6 },
          { subject: 'Ushul Fiqh Dasar', hoursPerWeek: 2 },
          { subject: 'Tafsir Al-Qur\'an', hoursPerWeek: 2 },
          { subject: 'PPKn & Sejarah', hoursPerWeek: 4 },
        ],
      },
      {
        className: 'Kelas 11',
        subjects: [
          { subject: 'Matematika Peminatan', hoursPerWeek: 5 },
          { subject: 'Fisika / Ekonomi (Peminatan)', hoursPerWeek: 5 },
          { subject: 'Kimia / Sosiologi (Peminatan)', hoursPerWeek: 5 },
          { subject: 'Biologi / Geografi (Peminatan)', hoursPerWeek: 5 },
          { subject: 'Bahasa Inggris', hoursPerWeek: 4 },
          { subject: 'Bahasa Arab Lanjutan', hoursPerWeek: 6 },
          { subject: 'Al-Qur\'an & Tahfizh', hoursPerWeek: 6 },
          { subject: 'Ilmu Musthalah Hadits', hoursPerWeek: 2 },
          { subject: 'Balaghah & Sastra Arab', hoursPerWeek: 2 },
        ],
      },
      {
        className: 'Kelas 12',
        subjects: [
          { subject: 'Matematika Peminatan', hoursPerWeek: 5 },
          { subject: 'Fisika / Ekonomi (Peminatan)', hoursPerWeek: 5 },
          { subject: 'Kimia / Sosiologi (Peminatan)', hoursPerWeek: 5 },
          { subject: 'Biologi / Geografi (Peminatan)', hoursPerWeek: 5 },
          { subject: 'Bahasa Inggris Akademik', hoursPerWeek: 4 },
          { subject: 'Bahasa Arab Tingkat Tinggi', hoursPerWeek: 6 },
          { subject: 'Al-Qur\'an & Tahfizh', hoursPerWeek: 6 },
          { subject: 'Karya Tulis Ilmiah (KTI)', hoursPerWeek: 2 },
          { subject: 'Persiapan SNBT & Beasiswa', hoursPerWeek: 3 },
        ],
      },
    ],
  },

  {
    slug: 'tahfizh-intensif',
    title: "Tahfizh Al-Qur'an Intensif",
    icon: React.createElement(BookOpen, { size: 40, className: 'text-accent-gold mb-3' }),
    description:
      "Program khusus bagi santri yang memiliki minat dan bakat dalam menghafal Al-Qur'an 30 Juz dengan target capaian mutqin bersanad.",
    ageGroup: '13 – 20 tahun (Program 3 Tahun)',
    generalCurriculum: [
      'Menghafal Al-Qur\'an 30 Juz (Target Mutqin)',
      'Sanad Tilawah & Riwayat Hafs',
      'Ilmu Tajwid Teoritis & Praktis',
      'Tahsin Qira\'ah (perbaikan bacaan)',
      'Tafsir Juz Amma & Ayat-Ayat Pilihan',
      'Murajaah Terstruktur (Pengulangan Hafalan)',
      'Adab Hamalat Al-Qur\'an',
      'Bahasa Arab Dasar untuk Memahami Al-Qur\'an',
    ],
    classCurriculum: [
      {
        className: 'Tingkat 1',
        subjects: [
          { subject: 'Hafalan Baru (Ziyadah)', hoursPerWeek: 10 },
          { subject: 'Murajaah Hafalan Lama', hoursPerWeek: 6 },
          { subject: 'Tajwid & Makharijul Huruf', hoursPerWeek: 4 },
          { subject: 'Bahasa Arab Dasar', hoursPerWeek: 4 },
          { subject: 'Tafsir Juz Amma', hoursPerWeek: 2 },
          { subject: 'Akidah & Adab', hoursPerWeek: 2 },
          { subject: 'Fiqih Ibadah Yaumiyah', hoursPerWeek: 2 },
        ],
      },
      {
        className: 'Tingkat 2',
        subjects: [
          { subject: 'Hafalan Baru (Ziyadah)', hoursPerWeek: 10 },
          { subject: 'Murajaah & Tasmi\' (Setoran Ulang)', hoursPerWeek: 8 },
          { subject: 'Tajwid Lanjutan & Qira\'at', hoursPerWeek: 4 },
          { subject: 'Bahasa Arab Menengah', hoursPerWeek: 4 },
          { subject: 'Tafsir Tematik', hoursPerWeek: 2 },
          { subject: 'Ilmu Ulumul Qur\'an', hoursPerWeek: 2 },
        ],
      },
      {
        className: 'Tingkat 3',
        subjects: [
          { subject: 'Murajaah Total 30 Juz', hoursPerWeek: 12 },
          { subject: 'Tasmi\' Bil-Ghaib (Ujian Hafalan)', hoursPerWeek: 6 },
          { subject: 'Sanad Periwayatan Hafs', hoursPerWeek: 4 },
          { subject: 'Bahasa Arab Lanjutan', hoursPerWeek: 4 },
          { subject: 'Tafsir Ibnu Katsir Pilihan', hoursPerWeek: 2 },
          { subject: 'Persiapan Sertifikasi Hafizh', hoursPerWeek: 2 },
        ],
      },
    ],
  },

  {
    slug: 'madrasah-diniyah',
    title: 'Madrasah Diniyah',
    icon: React.createElement(Library, { size: 40, className: 'text-accent-gold mb-3' }),
    description:
      "Program pendalaman ilmu agama dan kitab kuning (Turots) untuk mencetak kader ulama masa depan yang tafaqquh fid-diin.",
    ageGroup: '13 – 20 tahun (Program 3 Jenjang)',
    generalCurriculum: [
      'Kitab Kuning (Turots Ulama Klasik)',
      'Nahwu & Sharaf (Gramatika Arab)',
      'Fiqih Syafi\'i & Perbandingan Madzhab',
      'Akidah Ahlus Sunnah wal Jama\'ah',
      'Hadits & Ilmu Musthalalah Hadits',
      'Tafsir Al-Qur\'an Klasik',
      'Ushul Fiqh & Kaidah Fiqhiyyah',
      'Tarikh Islam & Sirah Nabawiyah',
    ],
    classCurriculum: [
      {
        className: 'Tingkat Ula (Dasar)',
        subjects: [
          { subject: 'Nahwu (Kitab Al-Ajurumiyah)', hoursPerWeek: 4 },
          { subject: 'Sharaf (Matan Bina & Amtsilah)', hoursPerWeek: 4 },
          { subject: 'Fiqih (Safinah & Taqrib)', hoursPerWeek: 4 },
          { subject: 'Akidah (Aqidatul Awam)', hoursPerWeek: 2 },
          { subject: 'Hadits Arbain Nawawi', hoursPerWeek: 2 },
          { subject: 'Tarikh Islam Dasar', hoursPerWeek: 2 },
          { subject: 'Tahsin & Al-Qur\'an', hoursPerWeek: 4 },
        ],
      },
      {
        className: 'Tingkat Wustho (Menengah)',
        subjects: [
          { subject: 'Nahwu (Alfiyah Ibnu Malik)', hoursPerWeek: 6 },
          { subject: 'Sharaf Lanjutan (Qawa\'id)', hoursPerWeek: 4 },
          { subject: 'Fiqih (Minhaj Al-Thalibin)', hoursPerWeek: 6 },
          { subject: 'Akidah (Aqidah Thahawiyah)', hoursPerWeek: 2 },
          { subject: 'Musthalah Hadits', hoursPerWeek: 2 },
          { subject: 'Tafsir Jalalain', hoursPerWeek: 4 },
          { subject: 'Ushul Fiqh Dasar (Waraqat)', hoursPerWeek: 2 },
        ],
      },
      {
        className: 'Tingkat Ulya (Tinggi)',
        subjects: [
          { subject: 'Alfiyah Ibnu Malik Lanjutan', hoursPerWeek: 6 },
          { subject: 'Balaghah (Jawahir Al-Balaghah)', hoursPerWeek: 4 },
          { subject: 'Fiqih Muqaran (Perbandingan Madzhab)', hoursPerWeek: 6 },
          { subject: 'Akidah (Syarh Aqidah Thahawiyah)', hoursPerWeek: 2 },
          { subject: 'Ulumul Qur\'an Lanjutan', hoursPerWeek: 2 },
          { subject: 'Tafsir Ibnu Katsir', hoursPerWeek: 4 },
          { subject: 'Ushul Fiqh Lanjutan (Jam\' Al-Jawami\')', hoursPerWeek: 4 },
        ],
      },
    ],
  },
];

export default programs;
