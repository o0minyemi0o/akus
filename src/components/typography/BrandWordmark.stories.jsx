import BrandWordmark from './BrandWordmark';

export default {
  title: '2. Components/Typography/BrandWordmark',
  component: BrandWordmark,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
};

export const Default = {};

export const OnDarkBackground = {
  decorators: [
    (Story) => (
      <div style={{ padding: '32px', backgroundColor: '#141210' }}>
        <Story />
      </div>
    ),
  ],
  args: {
    sx: { color: '#F4F1EC' },
  },
};
