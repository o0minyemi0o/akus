import { useState } from 'react';
import { Box } from '@mui/material';
import CartItem from './CartItem';

export default {
  title: '2. Components/Cart/CartItem',
  component: CartItem,
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
  },
};

export const Default = {
  render: (args) => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [quantity, setQuantity] = useState(1);
    return (
      <Box sx={{ maxWidth: 600 }}>
        <CartItem
          {...args}
          quantity={quantity}
          onQuantityChange={setQuantity}
          onRemove={() => alert('Item removed')}
        />
      </Box>
    );
  },
  args: {
    image: '/src/assets/product/collection1.jpg',
    name: 'Stone Soap Dish',
    category: 'CERAMIC',
    price: 48000,
    options: {
      color: 'Natural Stone',
      size: 'Standard',
    },
  },
};

export const WithoutOptions = {
  render: (args) => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [quantity, setQuantity] = useState(2);
    return (
      <Box sx={{ maxWidth: 600 }}>
        <CartItem
          {...args}
          quantity={quantity}
          onQuantityChange={setQuantity}
          onRemove={() => alert('Item removed')}
        />
      </Box>
    );
  },
  args: {
    image: '/src/assets/product/collection2.jpg',
    name: 'Linen Bath Towel',
    category: 'TEXTILE',
    price: 62000,
  },
};

export const MultipleItems = {
  render: () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [items, setItems] = useState([
      {
        id: 1,
        image: '/src/assets/product/collection1.jpg',
        name: 'Stone Soap Dish',
        category: 'CERAMIC',
        price: 48000,
        quantity: 1,
        options: { color: 'Natural Stone' },
      },
      {
        id: 2,
        image: '/src/assets/product/collection2.jpg',
        name: 'Linen Bath Towel',
        category: 'TEXTILE',
        price: 62000,
        quantity: 2,
        options: { color: 'Beige', size: 'Standard' },
      },
      {
        id: 3,
        image: '/src/assets/product/collection4.jpg',
        name: 'Clay Vase',
        category: 'CERAMIC',
        price: 72000,
        quantity: 1,
        options: { size: 'Medium' },
      },
    ]);

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

    return (
      <Box sx={{ maxWidth: 600 }}>
        {items.map((item) => (
          <CartItem
            key={item.id}
            image={item.image}
            name={item.name}
            category={item.category}
            price={item.price}
            quantity={item.quantity}
            options={item.options}
            onQuantityChange={(newQuantity) =>
              handleQuantityChange(item.id, newQuantity)
            }
            onRemove={() => handleRemove(item.id)}
          />
        ))}
      </Box>
    );
  },
};
