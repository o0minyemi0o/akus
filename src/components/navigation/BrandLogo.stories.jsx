import BrandLogo from './BrandLogo';
import { Box } from '@mui/material';

export default {
  title: '2. Components/Navigation/BrandLogo',
  component: BrandLogo,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
};

export const Default = {};

export const OnDarkBackground = {
  decorators: [
    (Story) => (
      <Box sx={{ p: 4, bgcolor: '#141210' }}>
        <Story />
      </Box>
    ),
  ],
  args: {
    sx: {
      '& h1': { color: '#F4F1EC' },
    },
  },
};
