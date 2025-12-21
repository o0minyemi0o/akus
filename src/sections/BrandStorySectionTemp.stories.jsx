import BrandStorySectionTemp from './BrandStorySectionTemp';

export default {
  title: '4. Sections/BrandStorySectionTemp',
  component: BrandStorySectionTemp,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
  argTypes: {
    layout: {
      control: 'select',
      options: ['textOnly', 'imageTop', 'imageBottom', 'sideBySide'],
    },
  },
};

export const TextOnly = {
  args: {
    text: 'Objects shaped by earth, refined for quiet rituals.',
    layout: 'textOnly',
  },
};

export const ImageTop = {
  args: {
    text: 'Each piece exists quietly within the space, inviting moments of stillness.',
    imageSrc: '/src/assets/product/collection1.jpg',
    layout: 'imageTop',
  },
};

export const ImageBottom = {
  args: {
    text: 'Objects designed for daily moments of stillness.',
    imageSrc: '/src/assets/product/collection2.jpg',
    layout: 'imageBottom',
  },
};

export const SideBySide = {
  args: {
    text: 'Inspired by the textures and tones of desert landscapes. Minimal intervention, maximum presence.',
    imageSrc: '/src/assets/product/collection3.jpg',
    layout: 'sideBySide',
  },
};

export const OnAlternateBackground = {
  args: {
    text: 'Softness shaped by earth. Linen and cotton in their purest forms.',
    imageSrc: '/src/assets/product/collection4.jpg',
    layout: 'imageTop',
    backgroundColor: 'background.paper',
  },
};
