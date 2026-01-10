export type Insight = {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  body: string;
};

export const insights: Insight[] = [
  {
    id: 'detail-inspection',
    title: 'Checklist inspeksi premium sebelum titip jual',
    excerpt:
      'Langkah ringan yang memastikan mobil siap konsinyasi dan dipercaya buyer.',
    date: '12 Feb 2024',
    body: 'Tim Gcarsale fokus pada rekam servis, kondisi interior, dan finishing bodi. Ini memastikan unit konsinyasi tampil maksimal saat listing.',
  },
  {
    id: 'paint-protection',
    title: 'Mengapa coating penting untuk mobil konsinyasi',
    excerpt:
      'Coating premium bukan hanya estetika, tapi juga nilai jual lebih tinggi.',
    date: '21 Jan 2024',
    body: 'Lapisan proteksi membuat bodi tetap glossy, mengurangi swirl, dan memudahkan detailer saat proses foto.',
  },
  {
    id: 'trusted-consignment',
    title: 'Standar komunikasi konsinyasi yang transparan',
    excerpt:
      'Update berkala dan dokumentasi lengkap membuat proses jual lebih aman.',
    date: '05 Jan 2024',
    body: 'Setiap tahapan akan dikonfirmasi langsung ke owner. Dokumentasi foto dan laporan harian menjadi standar layanan kami.',
  },
];
