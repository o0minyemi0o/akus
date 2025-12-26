import MainPage from './MainPage';

const sampleBrandStoryImages = [
  '/src/assets/product/item1.jpg',
  '/src/assets/product/item2.jpg',
  '/src/assets/product/item3.jpg',
  '/src/assets/product/item4.jpg',
  '/src/assets/product/item5.jpg',
  '/src/assets/product/item7.jpg',
];

const sampleProducts = [
  {
    id: 1,
    image: '/src/assets/product/collection1.jpg',
    name: 'Stone Soap Dish',
    category: 'CERAMIC',
    price: '48,000',
  },
  {
    id: 2,
    image: '/src/assets/product/collection2.jpg',
    name: 'Linen Bath Towel',
    category: 'TEXTILE',
    price: '62,000',
  },
  {
    id: 3,
    image: '/src/assets/product/collection3.jpg',
    name: 'Plaster Wall Shelf',
    category: 'TOOL',
    price: '85,000',
  },
  {
    id: 4,
    image: '/src/assets/product/collection4.jpg',
    name: 'Clay Vase',
    category: 'CERAMIC',
    price: '72,000',
  },
  {
    id: 5,
    image: '/src/assets/product/collection5.jpg',
    name: 'Natural Soap Set',
    category: 'CARE',
    price: '28,000',
  },
  {
    id: 6,
    image: '/src/assets/product/collection6.jpg',
    name: 'Stone Tray',
    category: 'CERAMIC',
    price: '55,000',
  },
  {
    id: 7,
    image: '/src/assets/product/collection7.jpg',
    name: 'Cotton Robe',
    category: 'TEXTILE',
    price: '98,000',
  },
  {
    id: 8,
    image: '/src/assets/product/collection8.jpg',
    name: 'Ceramic Bowl',
    category: 'CERAMIC',
    price: '42,000',
  },
];

export default {
  title: '4. Pages/MainPage',
  component: MainPage,
  parameters: {
    layout: 'fullscreen',
  },
};

export const Default = {
  args: {
    heroImage: '/src/assets/product/hero.jpg',
    brandStoryText: 'Objects shaped by earth, designed for quiet rituals.',
    brandStoryImages: sampleBrandStoryImages,
    productSubtitle: 'NEW COLLECTION',
    productTitle: 'Essential Objects',
    productDescription: 'For spaces that stay still',
    products: sampleProducts,
  },
};

export const MinimalContent = {
  args: {
    heroImage: '/src/assets/product/hero.jpg',
    brandStoryText: 'Quiet forms for daily rituals.',
    brandStoryImages: sampleBrandStoryImages.slice(0, 4),
    productSubtitle: 'ESSENTIAL',
    productTitle: 'Core Collection',
    products: sampleProducts,
  },
};
