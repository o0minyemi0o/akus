import CollectionGroup from './CollectionGroup';

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
  title: '2. Components/Product/CollectionGroup',
  component: CollectionGroup,
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
  },
};

export const Default = {
  args: {
    title: 'Essential Objects',
    products: sampleProducts,
  },
};

export const WithSubtitle = {
  args: {
    subtitle: 'CERAMIC',
    title: 'Stone & Clay',
    products: sampleProducts.filter((p) => p.category === 'CERAMIC'),
  },
};

export const WithDescription = {
  args: {
    subtitle: 'NEW COLLECTION',
    title: 'Desert Forms',
    description: 'Inspired by the textures and tones of desert landscapes. Minimal intervention, maximum presence.',
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

export const MultipleCollections = {
  render: () => (
    <>
      <CollectionGroup
        subtitle="CERAMIC"
        title="Stone & Clay"
        description="Objects shaped by earth, refined for quiet rituals."
        products={sampleProducts.filter((p) => p.category === 'CERAMIC')}
        sx={{ mb: 8 }}
      />
      <CollectionGroup
        subtitle="TEXTILE"
        title="Natural Weaves"
        description="Softness shaped by earth. Linen and cotton in their purest forms."
        products={sampleProducts.filter((p) => p.category === 'TEXTILE')}
        sx={{ mb: 8 }}
      />
      <CollectionGroup
        subtitle="TOOL"
        title="Functional Forms"
        description="Tools for daily rituals, designed to exist quietly."
        products={sampleProducts.filter((p) => p.category === 'TOOL')}
      />
    </>
  ),
};
