import StaticImage from './StaticImage';

export default {
  title: '2. Components/Media/StaticImage',
  component: StaticImage,
  tags: ['autodocs'],
  argTypes: {
    objectFit: {
      control: { type: 'select' },
      options: ['cover', 'contain', 'fill', 'none'],
    },
    loading: {
      control: { type: 'select' },
      options: ['lazy', 'eager'],
    },
  },
};

export const Default = {
  args: {
    src: '/src/assets/product/item1.jpg',
    alt: 'Product image',
    objectFit: 'cover',
  },
  decorators: [
    (Story) => (
      <div style={{ width: '400px', height: '400px' }}>
        <Story />
      </div>
    ),
  ],
};

export const ObjectFitCover = {
  args: {
    src: '/src/assets/product/item2.jpg',
    alt: 'Product image',
    objectFit: 'cover',
  },
  decorators: [
    (Story) => (
      <div style={{ width: '400px', height: '300px' }}>
        <Story />
      </div>
    ),
  ],
};

export const ObjectFitContain = {
  args: {
    src: '/src/assets/product/item3.jpg',
    alt: 'Product image',
    objectFit: 'contain',
  },
  decorators: [
    (Story) => (
      <div style={{ width: '400px', height: '300px', backgroundColor: '#F4F1EC' }}>
        <Story />
      </div>
    ),
  ],
};
