import ProductOptions from './ProductOptions';

export default {
  title: '2. Components/Product/ProductOptions',
  component: ProductOptions,
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
  },
};

export const Default = {
  args: {
    colors: [
      { value: 'stone', label: 'Stone', hex: '#E7DECF' },
      { value: 'clay', label: 'Clay', hex: '#C4B5A0' },
      { value: 'sand', label: 'Sand', hex: '#F4F1EC' },
    ],
    sizes: [
      { value: 'small', label: 'S' },
      { value: 'medium', label: 'M' },
      { value: 'large', label: 'L' },
    ],
    onAddToCart: (data) => {
      console.log('Add to cart:', data);
    },
  },
  decorators: [
    // eslint-disable-next-line no-unused-vars
    (Story) => (
      <div style={{ maxWidth: '400px' }}>
        <Story />
      </div>
    ),
  ],
};

export const ColorsOnly = {
  args: {
    colors: [
      { value: 'white', label: 'White', hex: '#F4F1EC' },
      { value: 'beige', label: 'Beige', hex: '#E7DECF' },
      { value: 'brown', label: 'Brown', hex: '#7A6A5C' },
      { value: 'black', label: 'Black', hex: '#141210' },
    ],
    onAddToCart: (data) => {
      console.log('Add to cart:', data);
    },
  },
  decorators: [
    // eslint-disable-next-line no-unused-vars
    (Story) => (
      <div style={{ maxWidth: '400px' }}>
        <Story />
      </div>
    ),
  ],
};

export const SizesOnly = {
  args: {
    sizes: [
      { value: 'xs', label: 'XS' },
      { value: 's', label: 'S' },
      { value: 'm', label: 'M' },
      { value: 'l', label: 'L' },
      { value: 'xl', label: 'XL' },
    ],
    onAddToCart: (data) => {
      console.log('Add to cart:', data);
    },
  },
  decorators: [
    // eslint-disable-next-line no-unused-vars
    (Story) => (
      <div style={{ maxWidth: '400px' }}>
        <Story />
      </div>
    ),
  ],
};
