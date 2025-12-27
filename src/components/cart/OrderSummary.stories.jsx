import { Box } from '@mui/material';
import OrderSummary from './OrderSummary';

export default {
  title: '2. Components/Cart/OrderSummary',
  component: OrderSummary,
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
  },
};

export const Default = {
  args: {
    subtotal: 182000,
    shipping: 0,
    total: 182000,
    shippingNote: 'Free shipping on orders over ₩50,000',
    onCheckout: () => {
      alert('Proceeding to checkout...');
    },
  },
  decorators: [
    // eslint-disable-next-line no-unused-vars
    (Story) => (
      <Box sx={{ maxWidth: 400 }}>
        <Story />
      </Box>
    ),
  ],
};

export const WithShippingFee = {
  args: {
    subtotal: 48000,
    shipping: 3000,
    total: 51000,
    shippingNote: 'Free shipping on orders over ₩50,000',
    onCheckout: () => {
      alert('Proceeding to checkout...');
    },
  },
  decorators: [
    // eslint-disable-next-line no-unused-vars
    (Story) => (
      <Box sx={{ maxWidth: 400 }}>
        <Story />
      </Box>
    ),
  ],
};

export const LargeOrder = {
  args: {
    subtotal: 456000,
    shipping: 0,
    total: 456000,
    shippingNote: 'Free shipping on orders over ₩50,000',
    onCheckout: () => {
      alert('Proceeding to checkout...');
    },
  },
  decorators: [
    // eslint-disable-next-line no-unused-vars
    (Story) => (
      <Box sx={{ maxWidth: 400 }}>
        <Story />
      </Box>
    ),
  ],
};

export const WithoutNote = {
  args: {
    subtotal: 125000,
    shipping: 0,
    total: 125000,
    onCheckout: () => {
      alert('Proceeding to checkout...');
    },
  },
  decorators: [
    // eslint-disable-next-line no-unused-vars
    (Story) => (
      <Box sx={{ maxWidth: 400 }}>
        <Story />
      </Box>
    ),
  ],
};
