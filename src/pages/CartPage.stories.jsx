import { useState } from 'react';
import CartPage from './CartPage';

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
  title: '5. Pages/CartPage',
  component: CartPage,
  parameters: {
    layout: 'fullscreen',
  },
};

export const Default = {
  render: (args) => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [items, setItems] = useState(sampleCartItems);

    const handleQuantityChange = (id, options, newQuantity) => {
      setItems((prev) =>
        prev.map((item) =>
          item.id === id && JSON.stringify(item.options) === JSON.stringify(options)
            ? { ...item, quantity: newQuantity }
            : item
        )
      );
    };

    const handleRemove = (id, options) => {
      setItems((prev) =>
        prev.filter(
          (item) =>
            !(item.id === id && JSON.stringify(item.options) === JSON.stringify(options))
        )
      );
    };

    const subtotal = items.reduce((sum, item) => sum + item.price * item.quantity, 0);
    const shipping = subtotal >= 50000 ? 0 : 3000;
    const total = subtotal + shipping;

    return (
      <CartPage
        {...args}
        items={items}
        subtotal={subtotal}
        shipping={shipping}
        total={total}
        onQuantityChange={handleQuantityChange}
        onRemove={handleRemove}
      />
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

    const handleQuantityChange = (id, options, newQuantity) => {
      setItems((prev) =>
        prev.map((item) =>
          item.id === id && JSON.stringify(item.options) === JSON.stringify(options)
            ? { ...item, quantity: newQuantity }
            : item
        )
      );
    };

    const handleRemove = (id, options) => {
      setItems((prev) =>
        prev.filter(
          (item) =>
            !(item.id === id && JSON.stringify(item.options) === JSON.stringify(options))
        )
      );
    };

    const subtotal = items.reduce((sum, item) => sum + item.price * item.quantity, 0);
    const shipping = subtotal >= 50000 ? 0 : 3000;
    const total = subtotal + shipping;

    return (
      <CartPage
        {...args}
        items={items}
        subtotal={subtotal}
        shipping={shipping}
        total={total}
        onQuantityChange={handleQuantityChange}
        onRemove={handleRemove}
      />
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
    subtotal: 0,
    shipping: 0,
    total: 0,
  },
};

export const LargeOrder = {
  render: (args) => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [items, setItems] = useState([
      ...sampleCartItems,
      {
        id: 4,
        image: '/src/assets/product/collection5.jpg',
        name: 'Natural Soap Set',
        category: 'CARE',
        price: 28000,
        quantity: 3,
        options: {},
      },
      {
        id: 5,
        image: '/src/assets/product/collection6.jpg',
        name: 'Stone Tray',
        category: 'CERAMIC',
        price: 55000,
        quantity: 2,
        options: {},
      },
    ]);

    const handleQuantityChange = (id, options, newQuantity) => {
      setItems((prev) =>
        prev.map((item) =>
          item.id === id && JSON.stringify(item.options) === JSON.stringify(options)
            ? { ...item, quantity: newQuantity }
            : item
        )
      );
    };

    const handleRemove = (id, options) => {
      setItems((prev) =>
        prev.filter(
          (item) =>
            !(item.id === id && JSON.stringify(item.options) === JSON.stringify(options))
        )
      );
    };

    const subtotal = items.reduce((sum, item) => sum + item.price * item.quantity, 0);
    const shipping = 0; // Free shipping
    const total = subtotal + shipping;

    return (
      <CartPage
        {...args}
        items={items}
        subtotal={subtotal}
        shipping={shipping}
        total={total}
        onQuantityChange={handleQuantityChange}
        onRemove={handleRemove}
      />
    );
  },
  args: {
    shippingNote: 'Free shipping on orders over ₩50,000',
    onCheckout: () => {
      alert('Proceeding to checkout...');
    },
  },
};
