import Header from './Header';
import { Box, Typography } from '@mui/material';
import FullBleed from '../layout/FullBleed';

export default {
  title: '3. Templates/Navigation/Header',
  component: Header,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
  argTypes: {
    transparent: {
      control: 'boolean',
    },
  },
};

export const Transparent = {
  args: {
    transparent: true,
  },
  render: (args) => (
    <>
      <Header {...args} />
      <FullBleed minHeight="100vh" sx={{ bgcolor: 'background.default', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <Typography variant="h3">Transparent Header on Light Background</Typography>
      </FullBleed>
    </>
  ),
};

export const Solid = {
  args: {
    transparent: false,
  },
  render: (args) => (
    <>
      <Header {...args} />
      <FullBleed minHeight="100vh" sx={{ bgcolor: 'background.paper', display: 'flex', alignItems: 'center', justifyContent: 'center', pt: 8 }}>
        <Typography variant="h3">Solid Header with Background</Typography>
      </FullBleed>
    </>
  ),
};

export const OnHeroImage = {
  args: {
    transparent: true,
  },
  render: (args) => (
    <>
      <Header {...args} sx={{ '& h1': { color: 'white' } }} />
      <Box
        sx={{
          minHeight: '100vh',
          background: 'linear-gradient(to bottom, rgba(0,0,0,0.3), rgba(0,0,0,0.1)), url(/src/assets/product/hero.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Typography variant="h2" sx={{ color: 'white', textShadow: '0 2px 8px rgba(0,0,0,0.5)' }}>
          akus
        </Typography>
      </Box>
    </>
  ),
};

export const ScrollBehavior = {
  args: {
    transparent: true,
  },
  render: (args) => (
    <>
      <Header {...args} />
      <FullBleed minHeight="100vh" sx={{ bgcolor: 'background.default', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <Typography variant="h3">Scroll Down to See Header Behavior</Typography>
      </FullBleed>
      <FullBleed minHeight="100vh" sx={{ bgcolor: 'background.paper', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <Typography variant="h4">Section 2</Typography>
      </FullBleed>
      <FullBleed minHeight="100vh" sx={{ bgcolor: 'background.default', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <Typography variant="h4">Section 3</Typography>
      </FullBleed>
    </>
  ),
};
