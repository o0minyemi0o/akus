import ProductDetailPage from './ProductDetailPage';

const sampleImages = [
  '/src/assets/product/collection1.jpg',
  '/src/assets/product/collection2.jpg',
  '/src/assets/product/collection3.jpg',
  '/src/assets/product/collection4.jpg',
  '/src/assets/product/collection5.jpg',
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
  title: '5. Pages/ProductDetailPage',
  component: ProductDetailPage,
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
      alert(`Added to cart: ${JSON.stringify(data, null, 2)}`);
    },
  },
};

export const LinenTowel = {
  args: {
    images: [
      '/src/assets/product/collection2.jpg',
      '/src/assets/product/collection3.jpg',
      '/src/assets/product/collection4.jpg',
    ],
    name: 'Linen Bath Towel',
    category: 'TEXTILE',
    price: 62000,
    description:
      'Portuguese linen with natural texture. Pre-washed for softness, becomes more absorbent over time.',
    colors: [
      { value: 'white', label: 'White', hex: '#F4F1EC' },
      { value: 'beige', label: 'Beige', hex: '#E7DECF' },
      { value: 'brown', label: 'Brown', hex: '#7A6A5C' },
    ],
    details: {
      material: (
        <p>
          100% Portuguese linen, pre-washed. Natural texture with slight irregularities
          that enhance over time.
        </p>
      ),
      dimensions: (
        <div>
          <p>70cm × 140cm</p>
          <p>Weight: ~650g</p>
        </div>
      ),
      care: (
        <ul>
          <li>Machine wash cold</li>
          <li>Tumble dry low or line dry</li>
          <li>Iron while slightly damp if desired</li>
        </ul>
      ),
      philosophy: (
        <p>
          Textiles designed to improve with age. Linen becomes softer and more absorbent
          with each wash, developing a lived-in quality.
        </p>
      ),
    },
    onAddToCart: (data) => {
      console.log('Add to cart:', data);
      alert(`Added to cart: ${JSON.stringify(data, null, 2)}`);
    },
  },
};

export const PlasterShelf = {
  args: {
    images: [
      '/src/assets/product/collection3.jpg',
      '/src/assets/product/collection4.jpg',
    ],
    name: 'Plaster Wall Shelf',
    category: 'TOOL',
    price: 85000,
    description: 'Minimal floating shelf. Handmade plaster finish, mounts flush to wall.',
    details: {
      material: (
        <p>
          Handmade plaster with natural finish. Color variations are inherent to the
          material. Each shelf is unique.
        </p>
      ),
      dimensions: (
        <div>
          <p>Length: 60cm</p>
          <p>Depth: 15cm</p>
          <p>Thickness: 3cm</p>
          <p>Weight: ~1.2kg</p>
        </div>
      ),
      care: (
        <ul>
          <li>Wipe with dry cloth only</li>
          <li>Avoid water contact</li>
          <li>Do not exceed 2kg load capacity</li>
          <li>Wall mounting hardware included</li>
        </ul>
      ),
      philosophy: (
        <p>
          Architectural elements for the home. Designed to blend with the wall rather
          than stand out, creating subtle spatial divisions.
        </p>
      ),
    },
    onAddToCart: (data) => {
      console.log('Add to cart:', data);
      alert(`Added to cart: ${JSON.stringify(data, null, 2)}`);
    },
  },
};

export const ClayVase = {
  args: {
    images: [
      '/src/assets/product/collection4.jpg',
      '/src/assets/product/collection5.jpg',
      '/src/assets/product/collection6.jpg',
    ],
    name: 'Clay Vase',
    category: 'CERAMIC',
    price: 72000,
    description: 'Hand-thrown clay vase. Unglazed exterior, glazed interior for water-tightness.',
    colors: [
      { value: 'natural', label: 'Natural Clay', hex: '#C4B5A0' },
      { value: 'dark', label: 'Dark Clay', hex: '#7A6A5C' },
    ],
    sizes: [
      { value: 'small', label: 'Small (18cm)' },
      { value: 'medium', label: 'Medium (25cm)' },
      { value: 'large', label: 'Large (32cm)' },
    ],
    details: {
      material: (
        <p>
          Stoneware clay, hand-thrown on a pottery wheel. Unglazed exterior shows natural
          clay texture. Glazed interior prevents water seepage.
        </p>
      ),
      dimensions: (
        <div>
          <p>Small: Height 18cm, Diameter 12cm</p>
          <p>Medium: Height 25cm, Diameter 16cm</p>
          <p>Large: Height 32cm, Diameter 20cm</p>
        </div>
      ),
      care: (
        <ul>
          <li>Rinse interior with water</li>
          <li>Wipe exterior with damp cloth if needed</li>
          <li>Handle with care - handmade ceramic</li>
        </ul>
      ),
      philosophy: (
        <p>
          Vessels for daily moments. The unglazed exterior develops a subtle patina over
          time, recording its history of use.
        </p>
      ),
    },
    onAddToCart: (data) => {
      console.log('Add to cart:', data);
      alert(`Added to cart: ${JSON.stringify(data, null, 2)}`);
    },
  },
};
