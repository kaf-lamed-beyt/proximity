export type User = {
  id: number;
  name: string;
  email: string;
  location: {
    type: string;
    coordinates: [number, number];
  };
};

export const USERS: User[] = [
  {
    id: 1,
    name: "Adeola Adebayo",
    email: "adeola.adebayo@example.com",
    location: {
      type: "Point",
      coordinates: [7.3772, 3.9163], // Ring Road, Ibadan
    },
  },
  {
    id: 2,
    name: "Chinelo Okafor",
    email: "chinelo.okafor@example.com",
    location: {
      type: "Point",
      coordinates: [7.3903, 3.9308], // Bodija Market area
    },
  },
  {
    id: 3,
    name: "Emeka Nwosu",
    email: "emeka.nwosu@example.com",
    location: {
      type: "Point",
      coordinates: [7.3533, 3.9376], // Agodi Gardens
    },
  },
  {
    id: 4,
    name: "Funmi Alade",
    email: "funmi.alade@example.com",
    location: {
      type: "Point",
      coordinates: [7.4052, 3.9115], // University of Ibadan
    },
  },
  {
    id: 5,
    name: "Tunde Balogun",
    email: "tunde.balogun@example.com",
    location: {
      type: "Point",
      coordinates: [7.3452, 3.8844], // Dugbe Market
    },
  },
  {
    id: 6,
    name: "Ngozi Eze",
    email: "ngozi.eze@example.com",
    location: {
      type: "Point",
      coordinates: [7.4173, 3.9712], // Ibadan Airport
    },
  },
  {
    id: 7,
    name: "Kemi Akinwale",
    email: "kemi.akinwale@example.com",
    location: {
      type: "Point",
      coordinates: [7.3826, 3.9301], // Challenge area
    },
  },
  {
    id: 8,
    name: "Yusuf Ibrahim",
    email: "yusuf.ibrahim@example.com",
    location: {
      type: "Point",
      coordinates: [7.4423, 3.8856], // Iwo Road
    },
  },
  {
    id: 9,
    name: "Zainab Bello",
    email: "zainab.bello@example.com",
    location: {
      type: "Point",
      coordinates: [7.3708, 3.9004], // Mokola Roundabout
    },
  },
  {
    id: 10,
    name: "Femi Adeyemi",
    email: "femi.adeyemi@example.com",
    location: {
      type: "Point",
      coordinates: [7.3419, 3.9632], // Eleyele area
    },
  },
  {
    id: 11,
    name: "Aisha Abdullahi",
    email: "aisha.abdullahi@example.com",
    location: {
      type: "Point",
      coordinates: [7.3618, 3.9724], // Oluyole Estate
    },
  },
  {
    id: 12,
    name: "Bayo Oladele",
    email: "bayo.oladele@example.com",
    location: {
      type: "Point",
      coordinates: [7.3883, 3.8889], // Orita Challenge
    },
  },
  {
    id: 13,
    name: "Yetunde Ajayi",
    email: "yetunde.ajayi@example.com",
    location: {
      type: "Point",
      coordinates: [7.4157, 3.9425], // Alakia
    },
  },
  {
    id: 14,
    name: "Segun Adekunle",
    email: "segun.adekunle@example.com",
    location: {
      type: "Point",
      coordinates: [7.3589, 3.9013], // Beere
    },
  },
  {
    id: 15,
    name: "Bukola Obasanjo",
    email: "bukola.obasanjo@example.com",
    location: {
      type: "Point",
      coordinates: [7.4289, 3.9278], // New Gbagi Market
    },
  },
  {
    id: 16,
    name: "Ruth Nwachukwu",
    email: "ruth.nwachukwu@example.com",
    location: {
      type: "Point",
      coordinates: [7.3956, 3.9145], // Mokola Hill
    },
  },
  {
    id: 17,
    name: "Oluwatobi Adeola",
    email: "oluwatobi.adeola@example.com",
    location: {
      type: "Point",
      coordinates: [7.3705, 3.93], // Dugbe
    },
  },
  {
    id: 18,
    name: "Chidera Okonkwo",
    email: "chidera.okonkwo@example.com",
    location: {
      type: "Point",
      coordinates: [7.3629, 3.9171], // Mapo area
    },
  },
  {
    id: 19,
    name: "Seyi Adetola",
    email: "seyi.adetola@example.com",
    location: {
      type: "Point",
      coordinates: [3.9641, 7.431], // Olorunsogo
    },
  },
  {
    id: 20,
    name: "Chisom Nnadi",
    email: "chisom.nnadi@example.com",
    location: {
      type: "Point",
      coordinates: [7.3548, 3.9112], // Alesinloye Market
    },
  },
];
