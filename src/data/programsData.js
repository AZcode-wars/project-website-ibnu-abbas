import { BookOpen, GraduationCap, Library, Users } from 'lucide-react';
import React from 'react';

const programs = [
  {
    slug: 'tarbiyatul-aulad',
    title: 'Tarbiyatul Aulad',
    subtitle: 'Banin & Banat',
    icon: React.createElement(Users, { size: 40, className: 'text-accent-gold mb-3' }),
    description:
      "Pendidikan untuk anak usia dini (5-6 tahun) yang terfokus pada sisi pembentukan kebiasaan baik, penanaman adab, dan kemandirian sebagai fondasi kepribadian Islami.",
    ageGroup: '5 – 6 tahun',
    generalCurriculum: [
      'Hafalan Surat Pendek',
      'Hafalan Do\'a Harian',
      'Praktek Shalat',
      
    ],
    classCurriculum: [
      {
        className: 'TA A',
        subjects: [
            { subject: "Doa Pagi & Hafalan", hoursPerWeek: 0 },
            { subject: "Praktek Sholat", hoursPerWeek: 0 },
            { subject: "Menulis & Membaca", hoursPerWeek: 0 },
            { subject: "Berbahasa", hoursPerWeek: 0 },
            { subject: "Aqidah", hoursPerWeek: 0 },
            { subject: "Adab/Ahlak", hoursPerWeek: 0 },
            { subject: "Fisik Motorik", hoursPerWeek: 0 },
            { subject: "Berhitung", hoursPerWeek: 0 },
            { subject: "Bahasa Arab", hoursPerWeek: 0 },
            { subject: "Kognitif", hoursPerWeek: 0 },
            { subject: "Seni", hoursPerWeek: 0 },
            { subject: "Belajar di Rumah", hoursPerWeek: 0 },
            { subject: "Doa Pagi", hoursPerWeek: 0 },
            { subject: "EXTRA", hoursPerWeek: 0 },
            { subject: "Siroh", hoursPerWeek: 0 },
]
      },
      {
        className: 'TA B',
        subjects: [
          { subject: "Doa Pagi & Hafalan", hoursPerWeek: 0 },
            { subject: "Praktek Sholat", hoursPerWeek: 0 },
            { subject: "Menulis & Membaca", hoursPerWeek: 0 },
            { subject: "Berbahasa", hoursPerWeek: 0 },
            { subject: "Aqidah", hoursPerWeek: 0 },
            { subject: "Adab/Ahlak", hoursPerWeek: 0 },
            { subject: "Fisik Motorik", hoursPerWeek: 0 },
            { subject: "Berhitung", hoursPerWeek: 0 },
            { subject: "Bahasa Arab", hoursPerWeek: 0 },
            { subject: "Kognitif", hoursPerWeek: 0 },
            { subject: "Seni", hoursPerWeek: 0 },
            { subject: "Belajar di Rumah", hoursPerWeek: 0 },
            { subject: "Doa Pagi", hoursPerWeek: 0 },
            { subject: "EXTRA", hoursPerWeek: 0 },
            { subject: "Siroh", hoursPerWeek: 0 },
        ],
      },
    ],
  },

  // Madrasah Ibtidaiyah
  {
    slug: 'marhalah-ibtida\'i',
    title: 'Marhalah Ibtida\'i',
    subtitle: 'Banin & Banat',
    icon: React.createElement(GraduationCap, { size: 40, className: 'text-accent-gold mb-3' }),
    description:
      "Pendidikan untuk anak usia 7-12 tahun yang menekankan tentang penguatan karakter, pembiasaan ibadah, kedisiplinan, dan dasar dasar ilmu sebagai bekal menjadi muslim yang salih.",
    ageGroup: '7 – 12 tahun (Setara Kelas 1, 2, 3, 4, 5, 6)',
    generalCurriculum: [
      'Hifzul Qur\'an',
      'Tajwid dan Tahsinul Qira\'ah'
    ],
    classCurriculum: [
      {
        className: 'Kelas 1',
        subjects: [
          { subject: 'Akidah', hoursPerWeek: 0 },
          { subject: 'Fikih', hoursPerWeek: 0 },
          { subject: 'Bahasa Arab', hoursPerWeek: 0 },
          { subject: 'Siroh', hoursPerWeek: 0 },
          { subject: 'Akhlak', hoursPerWeek: 0 },
          { subject: 'Bahasa Indonesia', hoursPerWeek: 0 },
          { subject: 'Matematika', hoursPerWeek: 0 },
        ],
      },
      {
        className: 'Kelas 2',
        subjects: [
          { subject: 'Akidah', hoursPerWeek: 0 },
          { subject: 'Fikih', hoursPerWeek: 0 },
          { subject: 'Bahasa Arab', hoursPerWeek: 0 },
          { subject: 'Siroh', hoursPerWeek: 0 },
          { subject: 'Akhlak', hoursPerWeek: 0 },
          { subject: 'Bahasa Indonesia', hoursPerWeek: 0 },
          { subject: 'Matematika', hoursPerWeek: 0 },
        ],
      },
      {
        className: 'Kelas 3',
        subjects: [
          { subject: 'Akidah', hoursPerWeek: 0 },
          { subject: 'Fikih', hoursPerWeek: 0 },
          { subject: 'Bahasa Arab', hoursPerWeek: 0 },
          { subject: 'Siroh', hoursPerWeek: 0 },
          { subject: 'Akhlak', hoursPerWeek: 0 },
          { subject: 'Bahasa Indonesia', hoursPerWeek: 0 },
          { subject: 'Matematika', hoursPerWeek: 0 },
        ],
      },
      {
        className: 'Kelas 4',
        subjects: [
          { subject: 'Akidah', hoursPerWeek: 0 },
          { subject: 'Fikih', hoursPerWeek: 0 },
          { subject: 'Bahasa Arab', hoursPerWeek: 0 },
          { subject: 'Siroh', hoursPerWeek: 0 },
          { subject: 'Akhlak', hoursPerWeek: 0 },
          { subject: 'Bahasa Indonesia', hoursPerWeek: 0 },
          { subject: 'Matematika', hoursPerWeek: 0 },
          { subject: 'IPAS', hoursPerWeek: 0 },
        ],
      },
      {
        className: 'Kelas 5',
        subjects: [
          { subject: 'Akidah', hoursPerWeek: 0 },
          { subject: 'Fikih', hoursPerWeek: 0 },
          { subject: 'Bahasa Arab', hoursPerWeek: 0 },
          { subject: 'Siroh', hoursPerWeek: 0 },
          { subject: 'Akhlak', hoursPerWeek: 0 },
          { subject: 'Bahasa Indonesia', hoursPerWeek: 0 },
          { subject: 'Matematika', hoursPerWeek: 0 },
          { subject: 'IPAS', hoursPerWeek: 0 },
        ],
      },
      {
        className: 'Kelas 6',
        subjects: [
          { subject: 'Akidah', hoursPerWeek: 0 },
          { subject: 'Fikih', hoursPerWeek: 0 },
          { subject: 'Bahasa Arab', hoursPerWeek: 0 },
          { subject: 'Siroh', hoursPerWeek: 0 },
          { subject: 'Akhlak', hoursPerWeek: 0 },
          { subject: 'Bahasa Indonesia', hoursPerWeek: 0 },
          { subject: 'Matematika', hoursPerWeek: 0 },
          { subject: 'IPAS', hoursPerWeek: 0 },
        ],
      },
    ],
  },

  
  {
    slug: 'mutawasithoh',
    title: 'Marhalah Wustho',
    subtitle: 'Banin',
    icon: React.createElement(BookOpen, { size: 40, className: 'text-accent-gold mb-3' }),
    description:
      "Pendidikan untuk anak usia 13-15 tahun yang menargetkan terbentuknya pribadi muslim yang berintegritas, bertanggung jawab, dan siap melanjutkan pendidikannya.",
    ageGroup: '12 - 15 tahun (Program 3 Tahun)',
    generalCurriculum: [
      'Aqidah & Akhlaq',
      'Fiqih Ibadah & Mu\'amalah',
      'Tafsir & Ilmu Tafsir',
      'Hadits & Ilmu Hadits',
      'Ushul Fiqh & Kaidah Fiqhiyyah',
      'Balaghah & Sastra Arab',
      'Nahwu-Sharaf',
      'Ilmu Manthiq',
      'Sejarah Islam & Peradaban',
      'Bahasa Arab Lisan & Tulisan',
      'Bahasa Inggris',
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
