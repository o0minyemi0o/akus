import ProductGrid from './ProductGrid';

const sampleProducts = [
  {
    id: 1,
    image: '/src/assets/product/collection1.jpg',
    name: 'Stone Soap Dish',
    category: 'CERAMIC',
    price: '₩48,000',
  },
  {
    id: 2,
    image: '/src/assets/product/collection2.jpg',
    name: 'Linen Bath Towel',
    category: 'TEXTILE',
    price: '₩62,000',
  },
  {
    id: 3,
    image: '/src/assets/product/collection3.jpg',
    name: 'Plaster Wall Shelf',
    category: 'TOOL',
    price: '₩85,000',
  },
  {
    id: 4,
    image: '/src/assets/product/collection4.jpg',
    name: 'Clay Vase',
    category: 'CERAMIC',
    price: '₩72,000',
  },
  {
    id: 5,
    image: '/src/assets/product/collection5.jpg',
    name: 'Natural Soap Set',
    category: 'CARE',
    price: '₩28,000',
  },
  {
    id: 6,
    image: '/src/assets/product/collection6.jpg',
    name: 'Stone Tray',
    category: 'CERAMIC',
    price: '₩55,000',
  },
  {
    id: 7,
    image: '/src/assets/product/collection7.jpg',
    name: 'Cotton Robe',
    category: 'TEXTILE',
    price: '₩98,000',
  },
  {
    id: 8,
    image: '/src/assets/product/collection8.jpg',
    name: 'Ceramic Bowl',
    category: 'CERAMIC',
    price: '₩42,000',
  },
];

export default {
  title: '2. Components/Product/ProductGrid',
  component: ProductGrid,
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
  },
};

export const Default = {
  args: {
    products: sampleProducts,
    onProductClick: (product) => {
      console.log('Product clicked:', product);
    },
  },
};

export const TwoColumns = {
  args: {
    products: sampleProducts,
    columns: { xs: 1, sm: 2, md: 2, lg: 2 },
    onProductClick: (product) => {
      console.log('Product clicked:', product);
    },
  },
};

export const FourColumns = {
  args: {
    products: sampleProducts.slice(0, 4),
    columns: { xs: 2, sm: 2, md: 3, lg: 4 },
    spacing: { xs: 2, md: 3, lg: 4 },
    onProductClick: (product) => {
      console.log('Product clicked:', product);
    },
  },
};

export const EmptyState = {
  args: {
    products: [],
  },
};
