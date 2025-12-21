import ContentInset from './ContentInset';
import { Box, Typography } from '@mui/material';

export default {
  title: '3. Templates/Layout/ContentInset',
  component: ContentInset,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
  argTypes: {
    maxWidth: {
      control: { type: 'text' },
    },
    px: {
      control: { type: 'number', min: 0, max: 10, step: 1 },
    },
    py: {
      control: { type: 'number', min: 0, max: 10, step: 1 },
    },
  },
};

export const Default = {
  args: {
    maxWidth: '1200px',
    px: 4,
    py: 0,
  },
  render: (args) => (
    <Box sx={{ bgcolor: 'background.paper', py: 8, minHeight: '60vh' }}>
      <ContentInset {...args}>
        <Typography variant="h4" gutterBottom>
          Content with Inset
        </Typography>
        <Typography variant="body1" sx={{ mb: 4 }}>
          Content is centered with maximum width of 1200px. Side margins appear automatically on wide screens.
        </Typography>
        <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 3, mt: 4 }}>
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <Box key={i} sx={{ height: 160, bgcolor: 'background.default', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <Typography>Item {i}</Typography>
            </Box>
          ))}
        </Box>
      </ContentInset>
    </Box>
  ),
};

export const NarrowContent = {
  args: {
    maxWidth: '800px',
    px: 4,
    py: 8,
  },
  render: (args) => (
    <Box sx={{ bgcolor: 'background.default', minHeight: '50vh', display: 'flex', alignItems: 'center' }}>
      <ContentInset {...args} sx={{ width: '100%' }}>
        <Typography variant="h5" gutterBottom>
          Narrow Content Area
        </Typography>
        <Typography variant="body1" sx={{ mb: 3 }}>
          Optimized width for text readability. Maximum 800px width keeps paragraphs comfortable to read.
        </Typography>
        <Typography variant="body1">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.
        </Typography>
      </ContentInset>
    </Box>
  ),
};

export const WideContent = {
  args: {
    maxWidth: '1600px',
    px: 6,
    py: 12,
  },
  render: (args) => (
    <Box sx={{ bgcolor: 'background.paper', minHeight: '70vh' }}>
      <ContentInset {...args}>
        <Typography variant="h4" gutterBottom>
          Wide Content Area
        </Typography>
        <Typography variant="body1" sx={{ mb: 6 }}>
          Wider layout for product grids and collections. Maximum 1600px.
        </Typography>
        <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: 4 }}>
          {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
            <Box key={i} sx={{ aspectRatio: '1 / 1', bgcolor: 'background.default', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <Typography variant="h6">Item {i}</Typography>
            </Box>
          ))}
        </Box>
      </ContentInset>
    </Box>
  ),
};
