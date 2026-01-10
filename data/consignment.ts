export type ConsignmentUnit = {
  id: string;
  name: string;
  year: string;
  price: string;
  image: string;
};

export const consignmentUnits: ConsignmentUnit[] = [
  {
    id: 'range-rover',
    name: 'Range Rover Evoque',
    year: '2022',
    price: 'Rp 1,1 M',
    image: '/units/unit-4.jpg',
  },
  {
    id: 'lexus-rx',
    name: 'Lexus RX 350',
    year: '2021',
    price: 'Rp 1,4 M',
    image: '/units/unit-5.jpg',
  },
  {
    id: 'toyota-supra',
    name: 'Toyota GR Supra',
    year: '2020',
    price: 'Rp 1,2 M',
    image: '/units/unit-6.jpg',
  },
  {
    id: 'audi-q7',
    name: 'Audi Q7',
    year: '2019',
    price: 'Rp 1,3 M',
    image: '/units/unit-7.jpg',
  },
  {
    id: 'tesla-model-3',
    name: 'Tesla Model 3',
    year: '2023',
    price: 'Rp 1,6 M',
    image: '/units/unit-8.jpg',
  },
];
