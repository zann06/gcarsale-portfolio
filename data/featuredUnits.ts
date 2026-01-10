export type FeaturedUnit = {
  id: string;
  name: string;
  year: string;
  price: string;
  status: 'AVAILABLE' | 'SOLD';
  image: string;
  highlights: string[];
  description: string;
};

export const featuredUnits: FeaturedUnit[] = [
  {
    id: 'mercedes-s-class',
    name: 'Mercedes-Benz S-Class',
    year: '2022',
    price: 'Rp 2,4 M',
    status: 'AVAILABLE',
    image: '/units/unit-1.jpg',
    highlights: ['Full service record', 'Miles rendah', 'Interior immaculate'],
    description:
      'Unit flagship dengan perawatan bengkel detail, siap inspeksi penuh dan test drive terjadwal.',
  },
  {
    id: 'bmw-m4',
    name: 'BMW M4 Competition',
    year: '2021',
    price: 'Rp 2,1 M',
    status: 'SOLD',
    image: '/units/unit-2.jpg',
    highlights: ['Track-ready', 'Carbon package', 'Detailing premium'],
    description:
      'Mobil performa tinggi dengan catatan servis lengkap dan QC ketat dari tim Gcarsale.',
  },
  {
    id: 'porsche-macan',
    name: 'Porsche Macan',
    year: '2020',
    price: 'Rp 1,5 M',
    status: 'AVAILABLE',
    image: '/units/unit-3.jpg',
    highlights: ['Adaptive suspension', 'Interior suede', 'Full coating'],
    description:
      'SUV premium dengan detail interior premium dan inspeksi bengkel berlapis.',
  },
];
