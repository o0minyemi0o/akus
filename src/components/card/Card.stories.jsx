import Card from './Card';

export default {
  title: '2. Components/Card',
  component: Card,
  tags: ['autodocs'],
  argTypes: {
    elevation: {
      control: { type: 'range', min: 0, max: 24, step: 1 },
    },
  },
};

export const Default = {
  args: {
    title: 'Card Title',
    description: 'This is a card description. Cards contain content and actions about a single subject.',
    elevation: 1,
  },
};

export const WithImage = {
  args: {
    image: '/src/assets/product/item1.jpg',
    title: 'Product Card',
    description: 'Product description text',
    elevation: 1,
  },
  decorators: [
    (Story) => (
      <div style={{ maxWidth: '320px' }}>
        <Story />
      </div>
    ),
  ],
};

export const ImageOnly = {
  args: {
    image: '/src/assets/product/item2.jpg',
    elevation: 1,
  },
  decorators: [
    (Story) => (
      <div style={{ maxWidth: '320px' }}>
        <Story />
      </div>
    ),
  ],
};
