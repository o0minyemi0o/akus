import Hero from './Hero';
import BrandWordmark from '../components/typography/BrandWordmark';

export default {
  title: '3. Templates/Hero',
  component: Hero,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
};

export const Default = {
  args: {
    imageSrc: '/src/assets/product/hero.jpg',
  },
};

export const WithBrandMark = {
  args: {
    imageSrc: '/src/assets/product/hero.jpg',
  },
  render: (args) => (
    <Hero {...args}>
      <BrandWordmark sx={{ fontSize: '4rem', color: 'white', textShadow: '0 2px 16px rgba(0,0,0,0.3)' }} />
    </Hero>
  ),
};

export const MinimalHero = {
  args: {
    imageSrc: '/src/assets/product/hero.jpg',
  },
  render: (args) => <Hero {...args} />,
};
