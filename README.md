# Gcarsale Portfolio

## Menjalankan Project

```bash
npm install
npm run dev
```

Buka `http://localhost:3000`.

## Update Data

Semua konten bersifat data-driven dari folder `/data`:
- `data/site.ts` untuk brand, meta, stats, WhatsApp, dan Instagram.
- `data/featuredUnits.ts` untuk 3 unit utama.
- `data/consignment.ts` untuk unit titipan.
- `data/insights.ts` untuk artikel insight.

## Ganti Gambar

Taruh gambar di folder `/public`:
- `public/hero.jpg`
- `public/merch.jpg`
- `public/owner.jpg`
- `public/units/*.jpg` untuk unit kendaraan.

Nama file bisa diganti, tetapi pastikan path di data/komponen sesuai. Jika file belum ada,
otomatis akan memakai `public/placeholder.svg` sebagai fallback.
