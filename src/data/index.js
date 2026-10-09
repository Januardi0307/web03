// ============================================================
// AI KNOWLEDGE BASE - RT 03 / RW 07 KARET - SETIABUDI
// ============================================================

import { KB01_KTP } from "./KB01_KTP";
import { KB02_KK } from "./KB02_KK";
import { KB03_Kelahiran } from "./KB03_Kelahiran";
import { KB04_Kematian } from "./KB04_Kematian";
import { KB05_Pindah } from "./KB05_Pindah";
import { KB06_Pernikahan } from "./KB06_Pernikahan";
import { KB07_Kepolisian } from "./KB07_SKCK";
import { KB08_Sosial } from "./KB08_Sosial";
import { KB09_UsahaLingkungan } from "./KB09_UsahaLingkungan";
import { KB10_SuratRT } from "./KB10_SuratRT";


// ============================================================
// GABUNGKAN SEMUA KNOWLEDGE BASE
// ============================================================

export const AI_KNOWLEDGE = [
  ...KB01_KTP,
  ...KB02_KK,
  ...KB03_Kelahiran,
  ...KB04_Kematian,
  ...KB05_Pindah,
  ...KB06_Pernikahan,
  ...KB07_Kepolisian,
  ...KB08_Sosial,
  ...KB09_UsahaLingkungan,
  ...KB10_SuratRT,
];

// ============================================================
// INFORMASI KNOWLEDGE BASE
// ============================================================

export const AI_KNOWLEDGE_INFO = {
  nama: "AI Knowledge RT 03 / RW 07 Karet - Setiabudi",

  versi: "1.0",

  jumlahKB: 10,

  kategori: [
    "KTP & Identitas",
    "KK & Susunan Keluarga",
    "Kelahiran & Anak",
    "Kematian & Pemakaman",
    "Pindah, Pendatang, Kost & Domisili",
    "Pernikahan & Perceraian",
    "Kepolisian & SKCK",
    "Sosial, Sekolah & Kesehatan",
    "Usaha, Rumah & Lingkungan",
    "Surat Umum RT/RW",
  ],
};