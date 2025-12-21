import FullBleed from './FullBleed';
import { Box, Typography } from '@mui/material';
import StaticImage from '../../components/media/StaticImage';

export default {
  title: '3. Templates/Layout/FullBleed',
  component: FullBleed,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
  argTypes: {
    minHeight: {
      control: { type: 'text' },
    },
  },
};

export const Default = {
  args: {
    minHeight: '100vh',
  },
  render: (args) => (
    <FullBleed {...args} sx={{ bgcolor: 'background.paper', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <Typography variant="h3">Full Bleed Section</Typography>
    </FullBleed>
  ),
};

export const HeroExample = {
  args: {
    minHeight: '100vh',
  },
  render: (args) => (
    <FullBleed {...args}>
      <StaticImage src="/src/assets/product/hero.jpg" alt="Hero" sx={{ height: '100vh' }} />
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Typography variant="h2" sx={{ color: 'white', textShadow: '0 2px 8px rgba(0,0,0,0.3)' }}>
          akus
        </Typography>
      </Box>
    </FullBleed>
  ),
};

export const HalfHeight = {
  args: {
    minHeight: '50vh',
  },
  render: (args) => (
    <FullBleed {...args} sx={{ bgcolor: 'background.default', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <Typography variant="h4">Half Viewport Height</Typography>
    </FullBleed>
  ),
};

export const MultipleFullBleed = {
  render: () => (
    <>
      <FullBleed minHeight="100vh" sx={{ bgcolor: 'background.default', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <Typography variant="h2">Section 1 - Full Screen</Typography>
      </FullBleed>
      <FullBleed minHeight="100vh" sx={{ bgcolor: 'background.paper', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <Typography variant="h2">Section 2 - Full Screen</Typography>
      </FullBleed>
      <FullBleed minHeight="100vh" sx={{ bgcolor: 'background.default', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <Typography variant="h2">Section 3 - Full Screen</Typography>
      </FullBleed>
    </>
  ),
};
