import { BookOpen, GraduationCap, Library, Users } from 'lucide-react';
import React from 'react';

const programs = [
  {
    slug: 'tarbiyah-awlad',
    title: 'TA (Tarbiytul Awlad)',
    icon: React.createElement(Users, { size: 40, className: 'text-accent-gold mb-3' }),
    description:
      "Program TA dirancang khusus sebagai pondasi awal anak untuk tumbuh menjadi pribadi yang cerdas dan beradab. Dengan memadukan Kurikulum Nasional (Kemdikbud) dan nilai dasar kepesantrenan, kami membangun kesiapan akademik sekaligus membentuk akhlak mulia sejak dini.",
    ageGroup: '5 – 6 tahun',
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
        className: 'TA A',
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
        className: 'TA B',
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
    ],
  },

  {
    slug: 'madrasah-ibtida\'i',
    title: 'Madrasah Ibtida\'i',
    icon: React.createElement(GraduationCap, { size: 40, className: 'text-accent-gold mb-3' }),
    description:
      "Pendidikan tingkat dasar yang menggabungkan kurikulum nasional (Kemdikbud) dengan kurikulum kepesantrenan, membentuk santri yang cerdas, mandiri, dan religius.",
    ageGroup: '7 – 12 tahun (Setara Kelas 1, 2, 3, 4, 5, 6)',
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
        className: 'Kelas 1',
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
        className: 'Kelas 2',
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
        className: 'Kelas 3',
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
      {
        className: 'Kelas 4',
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
      {
        className: 'Kelas 5',
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
      {
        className: 'Kelas 6',
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

  
];

export default programs;
