import ProductRow from './ProductRow';

const sampleProducts = [
  {
    id: 1,
    image: '/src/assets/product/item1.jpg',
    name: 'Stone Soap Dish',
    category: 'CERAMIC',
    price: '48,000',
  },
  {
    id: 2,
    image: '/src/assets/product/item2.jpg',
    name: 'Linen Bath Towel',
    category: 'TEXTILE',
    price: '62,000',
  },
  {
    id: 3,
    image: '/src/assets/product/item3.jpg',
    name: 'Plaster Wall Shelf',
    category: 'TOOL',
    price: '85,000',
  },
  {
    id: 4,
    image: '/src/assets/product/item4.jpg',
    name: 'Clay Vase',
    category: 'CERAMIC',
    price: '72,000',
  },
  {
    id: 5,
    image: '/src/assets/product/item5.jpg',
    name: 'Natural Soap Set',
    category: 'CARE',
    price: '28,000',
  },
  {
    id: 6,
    image: '/src/assets/product/item6.jpg',
    name: 'Stone Tray',
    category: 'CERAMIC',
    price: '55,000',
  },
  {
    id: 7,
    image: '/src/assets/product/item7.jpg',
    name: 'Cotton Robe',
    category: 'TEXTILE',
    price: '98,000',
  },
];

export default {
  title: '2. Components/Product/ProductRow',
  component: ProductRow,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
    backgrounds: {
      default: 'light',
      values: [
        { name: 'light', value: '#F4F1EC' },
      ],
    },
  },
};

export const Default = {
  args: {
    products: sampleProducts,
    cardWidth: '280px',
    gap: 3,
  },
};

export const Narrow = {
  args: {
    products: sampleProducts,
    cardWidth: '220px',
    gap: 2,
  },
};

export const Wide = {
  args: {
    products: sampleProducts,
    cardWidth: '360px',
    gap: 4,
  },
};

export const FewItems = {
  args: {
    products: sampleProducts.slice(0, 3),
    cardWidth: '280px',
    gap: 3,
  },
};
