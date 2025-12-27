import CategoryPage from './CategoryPage';

const ceramicProducts = [
  {
    id: 1,
    image: '/src/assets/product/collection1.jpg',
    name: 'Stone Soap Dish',
    category: 'CERAMIC',
    price: '₩48,000',
  },
  {
    id: 4,
    image: '/src/assets/product/collection4.jpg',
    name: 'Clay Vase',
    category: 'CERAMIC',
    price: '₩72,000',
  },
  {
    id: 6,
    image: '/src/assets/product/collection6.jpg',
    name: 'Stone Tray',
    category: 'CERAMIC',
    price: '₩55,000',
  },
  {
    id: 8,
    image: '/src/assets/product/collection8.jpg',
    name: 'Ceramic Bowl',
    category: 'CERAMIC',
    price: '₩42,000',
  },
];

const textileProducts = [
  {
    id: 2,
    image: '/src/assets/product/collection2.jpg',
    name: 'Linen Bath Towel',
    category: 'TEXTILE',
    price: '₩62,000',
  },
  {
    id: 7,
    image: '/src/assets/product/collection7.jpg',
    name: 'Cotton Robe',
    category: 'TEXTILE',
    price: '₩98,000',
  },
];

const allProducts = [
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
];

export default {
  title: '5. Pages/CategoryPage',
  component: CategoryPage,
  parameters: {
    layout: 'fullscreen',
  },
};

export const Ceramic = {
  args: {
    categoryTitle: 'Ceramic',
    categoryDescription: 'Hand-formed objects for daily use. Designed to age with grace.',
    products: ceramicProducts,
    onProductClick: (product) => {
      console.log('Product clicked:', product);
      alert(`Viewing: ${product.name}`);
    },
  },
};

export const Textile = {
  args: {
    categoryTitle: 'Textile',
    categoryDescription:
      'Natural fibers. Pre-washed and ready to soften over time.',
    products: textileProducts,
    onProductClick: (product) => {
      console.log('Product clicked:', product);
      alert(`Viewing: ${product.name}`);
    },
  },
};

export const Tool = {
  args: {
    categoryTitle: 'Tool',
    categoryDescription:
      'Functional pieces that define space through presence, not decoration.',
    categoryBackgroundImage: '/src/assets/product/hero.jpg',
    products: [
      {
        id: 3,
        image: '/src/assets/product/collection3.jpg',
        name: 'Plaster Wall Shelf',
        category: 'TOOL',
        price: '₩85,000',
      },
    ],
    onProductClick: (product) => {
      console.log('Product clicked:', product);
      alert(`Viewing: ${product.name}`);
    },
  },
};

export const AllProducts = {
  args: {
    categoryTitle: 'All',
    categoryDescription: 'Objects shaped by earth, designed for quiet rituals.',
    products: allProducts,
    onProductClick: (product) => {
      console.log('Product clicked:', product);
      alert(`Viewing: ${product.name}`);
    },
  },
};

export const EmptyCategory = {
  args: {
    categoryTitle: 'Coming Soon',
    categoryDescription: 'New pieces arriving soon.',
    products: [],
  },
};
