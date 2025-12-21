import CollectionGroup from './CollectionGroup';

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
  title: '3. Templates/CollectionGroup',
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
    columns: { xs: 2, sm: 3, md: 4, lg: 4, xl: 4 },
    gap: 2,
    aspectRatio: '3/4',
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

export const ThreeColumns = {
  args: {
    subtitle: 'ESSENTIAL',
    title: 'Compact Grid',
    description: '3열 그리드 레이아웃',
    products: sampleProducts,
    columns: { xs: 2, sm: 2, md: 3 },
  },
};

export const TwoColumns = {
  args: {
    subtitle: 'ESSENTIAL',
    title: 'Wide Layout',
    description: '2열 그리드 레이아웃 (카드가 더 크게 표시됨)',
    products: sampleProducts.slice(0, 4),
    columns: { xs: 1, sm: 2, md: 2 },
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
