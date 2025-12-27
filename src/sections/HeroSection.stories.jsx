import HeroSection from './HeroSection';

export default {
  title: '4. Sections/HeroSection',
  component: HeroSection,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
  decorators: [
    (Story) => (
      <div style={{ margin: 0, padding: 0, width: '100vw', overflow: 'hidden' }}>
        <Story />
      </div>
    ),
  ],
};

export const Default = {
  args: {
    imageSrc: '/src/assets/product/hero.jpg',
    showBrandWordmark: false,
    showCategoryNav: false,
    showHeader: false,
  },
};

export const WithBrandWordmark = {
  args: {
    imageSrc: '/src/assets/product/hero.jpg',
    showBrandWordmark: true,
    showCategoryNav: true,
    headerTransparent: true,
    onCategoryClick: (category) => console.log('Category clicked:', category),
  },
};

export const WithoutCategoryNav = {
  args: {
    imageSrc: '/src/assets/product/hero.jpg',
    showBrandWordmark: false,
    showCategoryNav: false,
    headerTransparent: true,
  },
};

export const WithOpaqueHeader = {
  args: {
    imageSrc: '/src/assets/product/hero.jpg',
    showBrandWordmark: false,
    showCategoryNav: true,
    headerTransparent: false,
    onCategoryClick: (category) => console.log('Category clicked:', category),
  },
};
