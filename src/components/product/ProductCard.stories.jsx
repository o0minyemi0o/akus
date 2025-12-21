import ProductCard from './ProductCard';
import { Box } from '@mui/material';

export default {
  title: '2. Components/Product/ProductCard',
  component: ProductCard,
  tags: ['autodocs'],
  argTypes: {
    aspectRatio: {
      control: 'select',
      options: ['1/1', '3/4', '4/3'],
    },
  },
};

export const Default = {
  args: {
    image: '/src/assets/product/collection1.jpg',
    name: 'Stone Soap Dish',
    category: 'CERAMIC',
    price: '48,000',
    aspectRatio: '3/4',
  },
  decorators: [
    (Story) => (
      <Box sx={{ maxWidth: '320px' }}>
        <Story />
      </Box>
    ),
  ],
};

export const WithoutCategory = {
  args: {
    image: '/src/assets/product/collection2.jpg',
    name: 'Linen Bath Towel',
    price: '62,000',
    aspectRatio: '3/4',
  },
  decorators: [
    (Story) => (
      <Box sx={{ maxWidth: '320px' }}>
        <Story />
      </Box>
    ),
  ],
};

export const WithoutPrice = {
  args: {
    image: '/src/assets/product/collection3.jpg',
    name: 'Plaster Wall Shelf',
    category: 'TOOL',
    aspectRatio: '3/4',
  },
  decorators: [
    (Story) => (
      <Box sx={{ maxWidth: '320px' }}>
        <Story />
      </Box>
    ),
  ],
};

export const Clickable = {
  args: {
    image: '/src/assets/product/collection4.jpg',
    name: 'Ceramic Bowl',
    category: 'CERAMIC',
    price: '38,000',
    onClick: () => alert('Product clicked'),
    aspectRatio: '3/4',
  },
  decorators: [
    (Story) => (
      <Box sx={{ maxWidth: '320px' }}>
        <Story />
      </Box>
    ),
  ],
};

export const InGrid = {
  render: () => (
    <Box
      sx={{
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        gap: 4,
        maxWidth: '1200px',
      }}
    >
      <ProductCard
        image="/src/assets/product/collection1.jpg"
        name="Stone Soap Dish"
        category="CERAMIC"
        price="48,000"
      />
      <ProductCard
        image="/src/assets/product/collection2.jpg"
        name="Linen Bath Towel"
        category="TEXTILE"
        price="62,000"
      />
      <ProductCard
        image="/src/assets/product/collection3.jpg"
        name="Plaster Wall Shelf"
        category="TOOL"
        price="85,000"
      />
    </Box>
  ),
};
