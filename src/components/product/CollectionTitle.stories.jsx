import CollectionTitle from './CollectionTitle';

export default {
  title: '2. Components/Product/CollectionTitle',
  component: CollectionTitle,
  tags: ['autodocs'],
  argTypes: {
    align: {
      control: 'select',
      options: ['left', 'center', 'right'],
    },
  },
};

export const Default = {
  args: {
    title: 'Essential Objects',
    align: 'left',
  },
};

export const WithSubtitle = {
  args: {
    subtitle: 'CERAMIC',
    title: 'Stone & Clay',
    align: 'left',
  },
};

export const WithDescription = {
  args: {
    title: 'Quiet Rituals',
    description: 'Objects designed for daily moments of stillness. Each piece exists quietly within the space.',
    align: 'left',
  },
};

export const Complete = {
  args: {
    subtitle: 'NEW COLLECTION',
    title: 'Desert Forms',
    description: 'Inspired by the textures and tones of desert landscapes. Minimal intervention, maximum presence.',
    align: 'left',
  },
};

export const Centered = {
  args: {
    subtitle: 'TEXTILE',
    title: 'Natural Weaves',
    description: 'Softness shaped by earth. Linen and cotton in their purest forms.',
    align: 'center',
  },
};
