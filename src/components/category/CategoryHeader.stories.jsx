import CategoryHeader from './CategoryHeader';

export default {
  title: '2. Components/Category/CategoryHeader',
  component: CategoryHeader,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
};

export const Default = {
  args: {
    title: 'Ceramic',
    description: 'Hand-formed objects for daily use. Designed to age with grace.',
  },
};

export const WithoutDescription = {
  args: {
    title: 'Textile',
  },
};

export const WithBackgroundImage = {
  args: {
    title: 'Tool',
    description: 'Functional pieces that define space through presence, not decoration.',
    backgroundImage: '/src/assets/product/hero.jpg',
  },
};

export const ShortTitle = {
  args: {
    title: 'Care',
    description: 'Natural formulations for skin and hair. Minimal ingredients, essential function.',
    minHeight: '40vh',
  },
};
