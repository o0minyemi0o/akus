import BrandStorySection from './BrandStorySection';

export default {
  title: '4. Sections/BrandStorySection',
  component: BrandStorySection,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
};

export const Default = {
  args: {
    text: 'Objects shaped by earth, refined for quiet rituals.',
    images: [
      '/src/assets/product/item1.jpg',
      '/src/assets/product/item2.jpg',
      '/src/assets/product/item3.jpg',
      '/src/assets/product/item4.jpg',
      '/src/assets/product/item5.jpg',
      '/src/assets/product/item6.jpg',
      '/src/assets/product/item7.jpg',
    ],
  },
};

export const ShortText = {
  args: {
    text: 'Quiet moments.',
    images: [
      '/src/assets/product/item1.jpg',
      '/src/assets/product/item2.jpg',
      '/src/assets/product/item3.jpg',
      '/src/assets/product/item4.jpg',
    ],
  },
};

export const LongText = {
  args: {
    text: 'Each piece exists quietly within the space, inviting moments of stillness and reflection.',
    images: [
      '/src/assets/product/item1.jpg',
      '/src/assets/product/item2.jpg',
      '/src/assets/product/item3.jpg',
      '/src/assets/product/item4.jpg',
      '/src/assets/product/item5.jpg',
    ],
  },
};

export const DifferentSizes = {
  args: {
    text: 'Objects shaped by earth, refined for quiet rituals.',
    images: [
      '/src/assets/product/item1.jpg',
      '/src/assets/product/item2.jpg',
      '/src/assets/product/item3.jpg',
      '/src/assets/product/item4.jpg',
    ],
    imageWidth: '360px',
    imageHeight: '460px',
  },
};
