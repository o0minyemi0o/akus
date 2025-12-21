import ImageFrame from './ImageFrame';

export default {
  title: '2. Components/Media/ImageFrame',
  component: ImageFrame,
  tags: ['autodocs'],
  argTypes: {
    aspectRatio: {
      control: { type: 'select' },
      options: ['1 / 1', '3 / 4', '4 / 3', '16 / 9', '2 / 3'],
    },
    objectFit: {
      control: { type: 'select' },
      options: ['cover', 'contain', 'fill'],
    },
  },
};

export const Default = {
  args: {
    src: '/src/assets/product/item1.jpg',
    alt: 'Product image',
    aspectRatio: '1 / 1',
    objectFit: 'cover',
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
    src: '/src/assets/product/item2.jpg',
    alt: 'Product image',
    aspectRatio: '1 / 1',
  },
  decorators: [
    (Story) => (
      <div style={{ maxWidth: '400px' }}>
        <Story />
      </div>
    ),
  ],
};

export const Portrait = {
  args: {
    src: '/src/assets/product/item3.jpg',
    alt: 'Product image',
    aspectRatio: '3 / 4',
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
    src: '/src/assets/product/item4.jpg',
    alt: 'Product image',
    aspectRatio: '16 / 9',
  },
  decorators: [
    (Story) => (
      <div style={{ maxWidth: '600px' }}>
        <Story />
      </div>
    ),
  ],
};

export const MultipleFrames = {
  render: () => (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '16px', maxWidth: '800px' }}>
      <ImageFrame src="/src/assets/product/item1.jpg" alt="Item 1" aspectRatio="1 / 1" />
      <ImageFrame src="/src/assets/product/item2.jpg" alt="Item 2" aspectRatio="1 / 1" />
      <ImageFrame src="/src/assets/product/item3.jpg" alt="Item 3" aspectRatio="1 / 1" />
    </div>
  ),
};
