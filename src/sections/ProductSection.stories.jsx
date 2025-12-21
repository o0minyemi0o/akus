import ProductSection from './ProductSection';

const sampleProducts = [
  {
    id: 1,
    image: './src/assets/product/collection1.jpg',
    name: 'Stone Soap Dish',
    category: 'CERAMIC',
    price: '48,000',
  },
  {
    id: 2,
    image: './src/assets/product/collection2.jpg',
    name: 'Linen Bath Towel',
    category: 'TEXTILE',
    price: '62,000',
  },
  {
    id: 3,
    image: './src/assets/product/collection3.jpg',
    name: 'Plaster Wall Shelf',
    category: 'TOOL',
    price: '85,000',
  },
  {
    id: 4,
    image: './src/assets/product/collection4.jpg',
    name: 'Clay Vase',
    category: 'CERAMIC',
    price: '72,000',
  },
  {
    id: 5,
    image: './src/assets/product/collection5.jpg',
    name: 'Natural Soap Set',
    category: 'CARE',
    price: '28,000',
  },
  {
    id: 6,
    image: './src/assets/product/collection6.jpg',
    name: 'Stone Tray',
    category: 'CERAMIC',
    price: '55,000',
  },
  {
    id: 7,
    image: './src/assets/product/collection7.jpg',
    name: 'Cotton Robe',
    category: 'TEXTILE',
    price: '98,000',
  },
];

export default {
  title: '4. Sections/ProductSection',
  component: ProductSection,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
};

export const Default = {
  args: {
    subtitle: 'CERAMIC',
    title: 'Essential Objects',
    description: 'Objects shaped by earth, refined for quiet rituals.',
    products: sampleProducts,
  },
};

export const WithoutDescription = {
  args: {
    subtitle: 'NEW COLLECTION',
    title: 'Desert Forms',
    products: sampleProducts,
  },
};

export const Centered = {
  args: {
    subtitle: 'TEXTILE',
    title: 'Natural Weaves',
    description: 'Softness shaped by earth. Linen and cotton in their purest forms.',
    titleAlign: 'center',
    products: sampleProducts.filter((p) => p.category === 'TEXTILE'),
  },
};

export const OnAlternateBackground = {
  args: {
    subtitle: 'CARE',
    title: 'Daily Rituals',
    description: 'Gentle care for quiet moments.',
    products: sampleProducts.filter((p) => p.category === 'CARE'),
    backgroundColor: 'background.paper',
  },
};

export const MultipleCollections = {
  render: () => (
    <>
      <ProductSection
        subtitle="CERAMIC"
        title="Stone & Clay"
        description="Objects shaped by earth, refined for quiet rituals."
        products={sampleProducts.filter((p) => p.category === 'CERAMIC')}
        backgroundColor="background.default"
      />
      <ProductSection
        subtitle="TEXTILE"
        title="Natural Weaves"
        description="Softness shaped by earth. Linen and cotton in their purest forms."
        products={sampleProducts.filter((p) => p.category === 'TEXTILE')}
        backgroundColor="background.paper"
      />
      <ProductSection
        subtitle="TOOL"
        title="Functional Forms"
        description="Tools for daily rituals, designed to exist quietly."
        products={sampleProducts.filter((p) => p.category === 'TOOL')}
        backgroundColor="background.default"
      />
    </>
  ),
};
