import { useState } from 'react';
import CartSection from './CartSection';

const sampleCartItems = [
  {
    id: 1,
    image: '/src/assets/product/collection1.jpg',
    name: 'Stone Soap Dish',
    category: 'CERAMIC',
    price: 48000,
    quantity: 1,
    options: {
      color: 'Natural Stone',
    },
  },
  {
    id: 2,
    image: '/src/assets/product/collection2.jpg',
    name: 'Linen Bath Towel',
    category: 'TEXTILE',
    price: 62000,
    quantity: 2,
    options: {
      color: 'Beige',
      size: 'Standard',
    },
  },
  {
    id: 3,
    image: '/src/assets/product/collection4.jpg',
    name: 'Clay Vase',
    category: 'CERAMIC',
    price: 72000,
    quantity: 1,
    options: {
      size: 'Medium',
    },
  },
];

export default {
  title: '4. Sections/CartSection',
  component: CartSection,
  parameters: {
    layout: 'fullscreen',
  },
};

export const Default = {
  render: (args) => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [items, setItems] = useState(sampleCartItems);

    const handleQuantityChange = (id, newQuantity) => {
      setItems((prev) =>
        prev.map((item) =>
          item.id === id ? { ...item, quantity: newQuantity } : item
        )
      );
    };

    const handleRemove = (id) => {
      setItems((prev) => prev.filter((item) => item.id !== id));
    };

    const subtotal = items.reduce((sum, item) => sum + item.price * item.quantity, 0);
    const shipping = subtotal >= 50000 ? 0 : 3000;
    const total = subtotal + shipping;

    return (
      <div style={{ padding: '2rem' }}>
        <CartSection
          {...args}
          items={items}
          subtotal={subtotal}
          shipping={shipping}
          total={total}
          onQuantityChange={handleQuantityChange}
          onRemove={handleRemove}
        />
      </div>
    );
  },
  args: {
    shippingNote: 'Free shipping on orders over ₩50,000',
    onCheckout: () => {
      alert('Proceeding to checkout...');
    },
  },
};

export const SingleItem = {
  render: (args) => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [items, setItems] = useState([sampleCartItems[0]]);

    const handleQuantityChange = (id, newQuantity) => {
      setItems((prev) =>
        prev.map((item) =>
          item.id === id ? { ...item, quantity: newQuantity } : item
        )
      );
    };

    const handleRemove = (id) => {
      setItems((prev) => prev.filter((item) => item.id !== id));
    };

    const subtotal = items.reduce((sum, item) => sum + item.price * item.quantity, 0);
    const shipping = subtotal >= 50000 ? 0 : 3000;
    const total = subtotal + shipping;

    return (
      <div style={{ padding: '2rem' }}>
        <CartSection
          {...args}
          items={items}
          subtotal={subtotal}
          shipping={shipping}
          total={total}
          onQuantityChange={handleQuantityChange}
          onRemove={handleRemove}
        />
      </div>
    );
  },
  args: {
    shippingNote: 'Free shipping on orders over ₩50,000',
    onCheckout: () => {
      alert('Proceeding to checkout...');
    },
  },
};

export const EmptyCart = {
  args: {
    items: [],
  },
  decorators: [
    // eslint-disable-next-line no-unused-vars
    (Story) => (
      <div style={{ padding: '2rem' }}>
        <Story />
      </div>
    ),
  ],
};
