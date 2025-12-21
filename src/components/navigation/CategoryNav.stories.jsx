import CategoryNav from './CategoryNav';
import { Box, Typography } from '@mui/material';

export default {
  title: '2. Components/Navigation/CategoryNav',
  component: CategoryNav,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
};

export const Default = {
  args: {
    onCategoryClick: (category) => console.log('Clicked:', category),
  },
  render: (args) => (
    <Box sx={{ minHeight: '100vh', bgcolor: 'background.default', position: 'relative' }}>
      <CategoryNav {...args} />
    </Box>
  ),
};

export const OnDarkBackground = {
  parameters: {
    backgrounds: {
      default: 'dark',
      values: [
        { name: 'dark', value: '#141210' },
      ],
    },
  },
  args: {
    onCategoryClick: (category) => console.log('Clicked:', category),
  },
  render: (args) => (
    <>
      <CategoryNav
        {...args}
        sx={{
          '& p': {
            color: '#F4F1EC',
          },
        }}
      />
      <Box sx={{ minHeight: '100vh' }} />
      <Box sx={{ minHeight: '100vh', bgcolor: '#1a1816' }} />
      <Box sx={{ minHeight: '100vh' }} />
    </>
  ),
};

export const WithScrollContent = {
  args: {
    onCategoryClick: (category) => console.log('Clicked:', category),
  },
  render: (args) => (
    <>
      <CategoryNav {...args} />
      <Box id="textile" sx={{ minHeight: '100vh', bgcolor: 'background.default', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <Typography variant="h3">TEXTILE Section</Typography>
      </Box>
      <Box id="ceramic" sx={{ minHeight: '100vh', bgcolor: 'background.paper', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <Typography variant="h3">CERAMIC Section</Typography>
      </Box>
      <Box id="care" sx={{ minHeight: '100vh', bgcolor: 'background.default', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <Typography variant="h3">CARE Section</Typography>
      </Box>
      <Box id="tool" sx={{ minHeight: '100vh', bgcolor: 'background.paper', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <Typography variant="h3">TOOL Section</Typography>
      </Box>
    </>
  ),
};
