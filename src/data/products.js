/**
 * 샘플 제품 데이터
 */

export const products = [
  {
    id: 1,
    name: 'Stone Soap Dish',
    category: 'CERAMIC',
    price: 48000,
    description: 'Handcrafted natural stone soap dish with a minimalist design. Perfect for bathroom organization.',
    images: [
      '/src/assets/product/collection1.jpg',
      '/src/assets/product/collection2.jpg',
      '/src/assets/product/collection3.jpg',
    ],
    colors: [
      { label: 'Natural Stone', value: 'natural', hex: '#D4C5B0' },
      { label: 'Dark Clay', value: 'dark', hex: '#7A6A5C' },
    ],
    sizes: [],
    details: {
      material: 'Natural stone, hand-finished surface',
      dimensions: '12cm × 9cm × 2cm (W × D × H)',
      care: 'Wipe clean with a damp cloth. Avoid harsh chemicals.',
      philosophy: 'Every piece is unique due to the natural variations in stone.',
    },
  },
  {
    id: 2,
    name: 'Linen Bath Towel',
    category: 'TEXTILE',
    price: 62000,
    description: 'Premium Belgian linen bath towel. Soft, absorbent, and naturally antibacterial.',
    images: [
      '/src/assets/product/collection2.jpg',
      '/src/assets/product/collection1.jpg',
      '/src/assets/product/collection3.jpg',
    ],
    colors: [
      { label: 'Natural Beige', value: 'beige', hex: '#E7DECF' },
      { label: 'Stone Grey', value: 'grey', hex: '#B8AFA3' },
    ],
    sizes: [
      { label: 'Standard', value: 'standard' },
      { label: 'Large', value: 'large' },
    ],
    details: {
      material: '100% Belgian linen',
      dimensions: 'Standard: 70cm × 140cm / Large: 100cm × 150cm',
      care: 'Machine wash cold. Tumble dry low or line dry.',
      philosophy: 'Linen becomes softer and more beautiful with each wash.',
    },
  },
  {
    id: 3,
    name: 'Clay Vase',
    category: 'CERAMIC',
    price: 72000,
    description: 'Minimalist clay vase with organic texture. Perfect for dried flowers or as a standalone piece.',
    images: [
      '/src/assets/product/collection4.jpg',
      '/src/assets/product/collection5.jpg',
      '/src/assets/product/collection6.jpg',
    ],
    colors: [
      { label: 'Natural Clay', value: 'clay', hex: '#C4B5A0' },
    ],
    sizes: [
      { label: 'Small', value: 'small' },
      { label: 'Medium', value: 'medium' },
      { label: 'Large', value: 'large' },
    ],
    details: {
      material: 'Stoneware clay, unglazed exterior',
      dimensions: 'Small: 15cm H / Medium: 22cm H / Large: 30cm H',
      care: 'Wipe with soft cloth. Not waterproof - use liner for fresh flowers.',
      philosophy: 'Each vase shows unique firing marks and color variations.',
    },
  },
  {
    id: 4,
    name: 'Natural Soap Set',
    category: 'CARE',
    price: 28000,
    description: 'Set of three handmade natural soaps. Gentle on skin, scented with essential oils.',
    images: [
      '/src/assets/product/collection5.jpg',
      '/src/assets/product/collection6.jpg',
      '/src/assets/product/collection1.jpg',
    ],
    colors: [],
    sizes: [],
    details: {
      material: 'Olive oil, coconut oil, shea butter, essential oils',
      dimensions: 'Each bar: 8cm × 6cm × 3cm',
      care: 'Store in a dry place between uses.',
      philosophy: 'Made in small batches using traditional cold process method.',
    },
  },
  {
    id: 5,
    name: 'Stone Tray',
    category: 'CERAMIC',
    price: 55000,
    description: 'Versatile stone tray for organizing small items or serving.',
    images: [
      '/src/assets/product/collection6.jpg',
      '/src/assets/product/collection1.jpg',
      '/src/assets/product/collection2.jpg',
    ],
    colors: [
      { label: 'Natural Stone', value: 'natural', hex: '#D4C5B0' },
    ],
    sizes: [
      { label: 'Small', value: 'small' },
      { label: 'Large', value: 'large' },
    ],
    details: {
      material: 'Natural stone with matte finish',
      dimensions: 'Small: 20cm × 15cm / Large: 30cm × 20cm',
      care: 'Wipe with damp cloth. Avoid prolonged water contact.',
      philosophy: 'Natural stone patterns make each tray one-of-a-kind.',
    },
  },
  {
    id: 6,
    name: 'Ceramic Candle Holder',
    category: 'CERAMIC',
    price: 38000,
    description: 'Minimalist ceramic candle holder with architectural form.',
    images: [
      '/src/assets/product/collection3.jpg',
      '/src/assets/product/collection4.jpg',
      '/src/assets/product/collection5.jpg',
    ],
    colors: [
      { label: 'Cream', value: 'cream', hex: '#F4F1EC' },
      { label: 'Clay', value: 'clay', hex: '#C4B5A0' },
    ],
    sizes: [],
    details: {
      material: 'High-fired ceramic with matte glaze',
      dimensions: '10cm diameter × 5cm height',
      care: 'Wipe clean. Do not leave burning candles unattended.',
      philosophy: 'Designed to cast beautiful shadows when candle is lit.',
    },
  },
  {
    id: 7,
    name: 'Plaster Wall Shelf',
    category: 'TOOL',
    price: 85000,
    description: 'Architectural wall shelf with plaster finish. Minimal, functional design.',
    images: [
      '/src/assets/product/collection3.jpg',
      '/src/assets/product/collection7.jpg',
      '/src/assets/product/collection8.jpg',
    ],
    colors: [
      { label: 'Natural Plaster', value: 'plaster', hex: '#F4F1EC' },
    ],
    sizes: [
      { label: 'Small', value: 'small' },
      { label: 'Large', value: 'large' },
    ],
    details: {
      material: 'Plaster-coated wood',
      dimensions: 'Small: 40cm × 20cm / Large: 60cm × 25cm',
      care: 'Wipe with soft dry cloth. Avoid water.',
      philosophy: 'Designed to blend seamlessly with walls.',
    },
  },
];

export const categories = [
  {
    id: 'textile',
    name: 'TEXTILE',
    title: 'Textile',
    description: 'Natural fibers, timeless comfort',
    backgroundImage: '/src/assets/product/collection2.jpg',
  },
  {
    id: 'ceramic',
    name: 'CERAMIC',
    title: 'Ceramic',
    description: 'Handcrafted ceramic pieces for mindful living',
    backgroundImage: '/src/assets/product/collection1.jpg',
  },
  {
    id: 'care',
    name: 'CARE',
    title: 'Care',
    description: 'Essential products for daily rituals',
    backgroundImage: '/src/assets/product/collection5.jpg',
  },
  {
    id: 'tool',
    name: 'TOOL',
    title: 'Tool',
    description: 'Functional objects for everyday use',
    backgroundImage: '/src/assets/product/collection3.jpg',
  },
];

// Helper functions
export const getProductById = (id) => {
  return products.find((product) => product.id === parseInt(id));
};

export const getProductsByCategory = (categoryId) => {
  const category = categories.find((cat) => cat.id === categoryId);
  if (!category) return [];
  return products.filter((product) => product.category === category.name);
};

export const getCategoryById = (id) => {
  return categories.find((cat) => cat.id === id);
};
