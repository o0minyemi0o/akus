import ProductDetailSection from './ProductDetailSection';

const sampleImages = [
  '/src/assets/product/collection1.jpg',
  '/src/assets/product/collection2.jpg',
  '/src/assets/product/collection3.jpg',
  '/src/assets/product/collection4.jpg',
];

const sampleColors = [
  { value: 'stone', label: 'Stone', hex: '#E7DECF' },
  { value: 'clay', label: 'Clay', hex: '#C4B5A0' },
  { value: 'sand', label: 'Sand', hex: '#F4F1EC' },
];

const sampleSizes = [
  { value: 'small', label: 'S' },
  { value: 'medium', label: 'M' },
  { value: 'large', label: 'L' },
];

export default {
  title: '4. Sections/ProductDetailSection',
  component: ProductDetailSection,
  parameters: {
    layout: 'fullscreen',
  },
};

export const Default = {
  args: {
    images: sampleImages,
    name: 'Stone Soap Dish',
    category: 'CERAMIC',
    price: 48000,
    description:
      'Hand-carved natural stone. Designed for bar soap, slight slope for water drainage.',
    colors: sampleColors,
    sizes: sampleSizes,
    details: {
      material: (
        <p>
          Natural stone with porous surface. Each piece varies slightly in color and
          texture due to natural material properties.
        </p>
      ),
      dimensions: (
        <div>
          <p>Width: 12cm</p>
          <p>Depth: 8cm</p>
          <p>Height: 2.5cm</p>
          <p>Weight: ~400g</p>
        </div>
      ),
      care: (
        <ul>
          <li>Rinse with water after each use</li>
          <li>Allow to air dry completely</li>
          <li>Avoid harsh chemical cleaners</li>
          <li>Natural discoloration may occur over time</li>
        </ul>
      ),
      philosophy: (
        <p>
          Objects designed for daily rituals. Each piece is made to age gracefully,
          developing character through use.
        </p>
      ),
    },
    onAddToCart: (data) => {
      console.log('Add to cart:', data);
    },
  },
};

export const WithoutOptions = {
  args: {
    images: sampleImages.slice(0, 3),
    name: 'Plaster Wall Shelf',
    category: 'TOOL',
    price: 85000,
    description: 'Minimal floating shelf. Handmade plaster finish, mounts flush to wall.',
    details: {
      material: <p>Handmade plaster with natural finish. Color variations are inherent to the material.</p>,
      dimensions: (
        <div>
          <p>Length: 60cm</p>
          <p>Depth: 15cm</p>
          <p>Thickness: 3cm</p>
        </div>
      ),
      care: (
        <ul>
          <li>Wipe with dry cloth only</li>
          <li>Avoid water contact</li>
          <li>Do not exceed 2kg load capacity</li>
        </ul>
      ),
    },
  },
};

export const MinimalDetails = {
  args: {
    images: [sampleImages[0], sampleImages[1]],
    name: 'Linen Bath Towel',
    category: 'TEXTILE',
    price: 62000,
    description: 'Portuguese linen with natural texture. Pre-washed for softness.',
    colors: [
      { value: 'white', label: 'White', hex: '#F4F1EC' },
      { value: 'beige', label: 'Beige', hex: '#E7DECF' },
    ],
    details: {
      material: <p>100% Portuguese linen, pre-washed.</p>,
      care: (
        <ul>
          <li>Machine wash cold</li>
          <li>Tumble dry low or line dry</li>
        </ul>
      ),
    },
    onAddToCart: (data) => {
      console.log('Add to cart:', data);
    },
  },
};
