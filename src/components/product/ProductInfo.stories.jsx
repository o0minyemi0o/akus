import ProductInfo from './ProductInfo';

export default {
  title: '2. Components/Product/ProductInfo',
  component: ProductInfo,
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
  },
};

export const Default = {
  args: {
    name: 'Stone Soap Dish',
    category: 'CERAMIC',
    price: 48000,
    description: 'Hand-carved natural stone. Designed for bar soap, slight slope for water drainage.',
  },
};

export const WithoutCategory = {
  args: {
    name: 'Plaster Wall Shelf',
    price: 85000,
    description: 'Minimal floating shelf. Handmade plaster finish, mounts flush to wall.',
  },
};

export const LongDescription = {
  args: {
    name: 'Linen Bath Towel',
    category: 'TEXTILE',
    price: 62000,
    description:
      'Portuguese linen with natural texture. Pre-washed for softness, becomes more absorbent over time. 70×140cm.',
  },
};
