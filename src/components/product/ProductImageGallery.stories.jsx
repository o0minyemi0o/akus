import ProductImageGallery from './ProductImageGallery';

const sampleImages = [
  '/src/assets/product/collection1.jpg',
  '/src/assets/product/collection2.jpg',
  '/src/assets/product/collection3.jpg',
  '/src/assets/product/collection4.jpg',
  '/src/assets/product/collection5.jpg',
];

export default {
  title: '2. Components/Product/ProductImageGallery',
  component: ProductImageGallery,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
};

export const Default = {
  args: {
    images: sampleImages,
    aspectRatio: '4/5',
  },
  decorators: [
    // eslint-disable-next-line no-unused-vars
    (Story) => (
      <div style={{ width: '600px', maxWidth: '100%' }}>
        <Story />
      </div>
    ),
  ],
};

export const SingleImage = {
  args: {
    images: [sampleImages[0]],
    aspectRatio: '4/5',
  },
  decorators: [
    // eslint-disable-next-line no-unused-vars
    (Story) => (
      <div style={{ width: '600px', maxWidth: '100%' }}>
        <Story />
      </div>
    ),
  ],
};

export const SquareAspectRatio = {
  args: {
    images: sampleImages.slice(0, 3),
    aspectRatio: '1/1',
  },
  decorators: [
    // eslint-disable-next-line no-unused-vars
    (Story) => (
      <div style={{ width: '500px', maxWidth: '100%' }}>
        <Story />
      </div>
    ),
  ],
};
