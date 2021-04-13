import React from 'react';
import vehiclesIMG from './assets/vehicles_desktop2x.png';
import householdIMG from './assets/household-goods_desktop2x.png';
import movesIMG from './assets/moves_desktop2x.png';
import freightIMG from './assets/freight_desktop2x.png';

export const CATEGORIES = [
   {
    title: 'VEHICLES & BOATS',
    subTitle: 'Cars, Motorcycles, RVs, Trailers, Parts',
    image: vehiclesIMG,
    path: '/vehicles',
  },
  {
   title: 'HOUSEHOLD ITEMS',
   subTitle: 'Furniture, Appliances',
   image: householdIMG,
   path: '/household-items',
 },
 {
  title: 'MOVES',
  subTitle: 'Apartment, Home, Office',
  image: movesIMG,
  path: '/moves',
 },
 {
 title: 'FREIGHT',
 subTitle: 'Less-Than-Truckload, Truckload',
 image: freightIMG,
 path: '/freight',
},
]

export const OPTIONS = [
    {
      label:"Select",
      name:"Select",
      key:"Select",
    },
    {
      label:"Coupé",
      name:"Coupé",
      key: "Coupé",
    },
    {
      label:"Estate",
      name:"Estate",
      key: "Estate",
    },
    {
      label:"Hatchback",
      name:"Hatchback",
      key: "Hatchback",
    },
    {
      label:"Microcar",
      name:"Microcar",
      key: "Microcar",
    },
    {
      label:"Mini Van",
      name:"Mini Van",
      key: "Mini Van",
    },
    {
      label:"People Mover",
      name:"People Mover",
      key: "People Mover",
    },
    {
      label:"Saloon",
      name:"Saloon",
      key: "Saloon",
    },
    {
      label:"Pickup Full Size",
      name:"Pickup Full Size",
      key: "Pickup Full Size",
    },
    {
      label:"Pickup Heavy Duty",
      name:"Pickup Heavy Duty",
      key: "Pickup Heavy Duty",
    },
    {
      label:"Pickup Mid Size",
      name:"Pickup Mid Size",
      key: "Pickup Mid Size",
    },
  ]



export const SHIPPING_MODE = [
  {
  name: 'Ocean LCL',
  key: 'Ocean LCL',
  label: 'Ocean LCL',
  },
  {
  name: 'Ocean FCL',
  key: 'Ocean FCL',
  label: 'Ocean FCL',
  },
  {
  name: 'AIR',
  key: 'AIR',
  label: 'AIR',
  },
];

export const SHIPPING_MOVEMENT_TYPE = [
  {
  name: 'Door to Door',
  key: 'Door to Door',
  label: 'Door to Door',
  },
  {
  name: 'Port to Door',
  key: 'Port to Door',
  label: 'Port to Door',
  },
  {
  name: 'Door to Port',
  key: 'Door to Port',
  label: 'Door to Port',
  },
  {
  name: 'Port to Port',
  key: 'Port to Port',
  label: 'Port to Port',
  },
];

export const SHIPPING_INCOTERM = [
  {
  name: 'Not specified',
  key: 'Not specified',
  label: 'Not specified',
  },
  {
  name: 'DAD - Delivered at Place',
  key: 'DAD - Delivered at Place',
  label: 'DAD - Delivered at Place',
  },
  {
  name: 'DDP - Delivered Duty Paid',
  key: 'DDP - Delivered Duty Paid',
  label: 'DDP - Delivered Duty Paid',
  },
  {
  name: 'DPU - Delivered at Place Unloaded',
  key: 'DPU - Delivered at Place Unloaded',
  label: 'DPU - Delivered at Place Unloaded',
  },
  {
  name: 'EXW - ExWorks',
  key: 'EXW - ExWorks',
  label: 'EXW - ExWorks',
  },
];


export const SHIPPING_PACKAGE_TYPE = [
  {
  name: 'Pallets',
  key: 'Pallets',
  label: 'Pallets',
  },
  {
  name: 'Skids',
  key: 'Skids',
  label: 'Skids',
  },
  {
  name: 'Crates',
  key: 'Crates',
  label: 'Crates',
  },
  {
  name: 'Boxes',
  key: 'Boxes',
  label: 'Boxes',
  },
  {
  name: 'Cartons',
  key: 'Cartons',
  label: 'Cartons',
  },
  {
  name: 'Cases',
  key: 'Cases',
  label: 'Cases',
  },
  {
  name: 'Packages',
  key: 'Packages',
  label: 'Packages',
  },
  {
  name: 'Drums',
  key: 'Drums',
  label: 'Drums',
  },
  {
  name: 'Barrels',
  key: 'Barrels',
  label: 'Barrels',
  },
  {
  name: 'Bales non-compressed',
  key: 'Bales non-compressed',
  label: 'Bales non-compressed',
  },
  {
  name: 'Bags',
  key: 'Bags',
  label: 'Bags',
  },
  {
  name: 'Rolls',
  key: 'Rolls',
  label: 'Rolls',
  },
];

export const SHIPPING_UNIT = [
  {
  name: 'KG',
  key: 'KG',
  label: 'KG',
  },
  {
  name: 'LB',
  key: 'LB',
  label: 'LB',
  },
  {
  name: 'TON',
  key: 'TON',
  label: 'TON',
  },
];

export const WEIGHT_UNIT = [
  {
  name: 'CM',
  key: 'CM',
  label: 'CM',
  },
  {
  name: 'IN',
  key: 'IN',
  label: 'IN',
  },
];

export const SIZE_UNIT = [
  {
  name: 'KG',
  key: 'KG',
  label: 'KG',
  },
  {
  name: 'LB',
  key: 'LB',
  label: 'LB',
  },
  {
  name: 'TON',
  key: 'TON',
  label: 'TON',
  },
];

export const HAZARDOUS_GOODS_AND_CLASS = [
  {
  name: '...',
  key: '...',
  label: '...',
  },
  {
  name: 'Explosives',
  key: 'Explosives',
  label: 'Explosives',
  },
  {
  name: 'Gases',
  key: 'Gases',
  label: 'Gases',
  },
  {
  name: 'Flammable Liquids',
  key: 'Flammable Liquids',
  label: 'Flammable Liquids',
  },
  {
  name: 'Flammable Solids',
  key: 'Flammable Solids',
  label: 'Flammable Solids',
  },
  {
  name: 'Oxidizing Substances',
  key: 'Oxidizing Substances',
  label: 'Oxidizing Substances',
  },
  {
  name: 'Toxic and infectious Substances',
  key: 'Toxic and infectious Substances',
  label: 'Toxic and infectious Substances',
  },
  {
  name: 'Radioactive Material',
  key: 'Radioactive Material',
  label: 'Radioactive Material',
  },
  {
  name: 'Corrosives',
  key: 'Corrosives',
  label: 'Corrosives',
  },
  {
  name: 'Others',
  key: 'Others',
  label: 'Others',
  },
];

export const CURRENCY = [
  {
    name: 'USD',
    key: 'USD',
    label: 'USD',
  },
  {
    name: 'EUR',
    key: 'EUR',
    label: 'EUR',
  },
  {
    name: 'GBP',
    key: 'GBP',
    label: 'GBP',
  },
  {
    name: 'AED',
    key: 'AED',
    label: 'AED',
  }
];

export const RESIDENCE_TYPE = [
  {
    name: 'House',
    key: 'House',
    label: 'House',
  },
  {
    name: 'Apartment',
    key: 'Apartment',
    label: 'Apartment',
  },
  {
    name: 'Condo',
    key: 'Condo',
    label: 'Condo',
  },
  {
    name: 'Office',
    key: 'Office',
    label: 'Office',
  },
]

export const PICKUP_FLOOR_TYPE = [
  {
    name: '1',
    key: '1',
    label: '1',
  },
  {
    name: '2',
    key: '2',
    label: '2',
  },
  {
    name: '3+',
    key: '3+',
    label: '3+',
  }
]

export const DELIIVERY_STORIES = [
  {
    name: '1',
    key: '1',
    label: '1',
  },
  {
    name: '2',
    key: '2',
    label: '2',
  },
  {
    name: '3+',
    key: '3+',
    label: '3+',
  }
]

export const NUMBER_OF_BEDROOMS = [
  {
    name: '1',
    key: '1',
    label: '1',
  },
  {
    name: '2',
    key: '2',
    label: '2',
  },
  {
    name: '3',
    key: '3',
    label: '3',
  },
  {
    name: '4',
    key: '4',
    label: '4',
  },
  {
    name: '5+',
    key: '5+',
    label: '5+',
  },
]
