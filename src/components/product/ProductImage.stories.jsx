import ProductImage from './ProductImage';

export default {
  title: '2. Components/Product/ProductImage',
  component: ProductImage,
  tags: ['autodocs'],
  argTypes: {
    aspectRatio: {
      control: 'select',
      options: ['1/1', '3/4', '4/3', '16/9'],
    },
  },
};

export const Default = {
  args: {
    src: '/src/assets/product/collection1.jpg',
    alt: 'Product Image',
    aspectRatio: '3/4',
  },
  decorators: [
    (Story) => (
      <div style={{ maxWidth: '400px' }}>
        <Story />
      </div>
    ),
  ],
};

export const Square = {
  args: {
    src: '/src/assets/product/collection2.jpg',
    alt: 'Product Image',
    aspectRatio: '1/1',
  },
  decorators: [
    (Story) => (
      <div style={{ maxWidth: '400px' }}>
        <Story />
      </div>
    ),
  ],
};

export const Landscape = {
  args: {
    src: '/src/assets/product/collection3.jpg',
    alt: 'Product Image',
    aspectRatio: '16/9',
  },
  decorators: [
    (Story) => (
      <div style={{ maxWidth: '600px' }}>
        <Story />
      </div>
    ),
  ],
};
