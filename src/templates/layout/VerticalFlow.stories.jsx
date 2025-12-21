import VerticalFlow from './VerticalFlow';
import { Box, Typography } from '@mui/material';

export default {
  title: '3. Templates/Layout/VerticalFlow',
  component: VerticalFlow,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
  argTypes: {
    gap: {
      control: { type: 'number', min: 0, max: 10, step: 1 },
    },
  },
};

export const Default = {
  args: {
    gap: 0,
  },
  render: (args) => (
    <VerticalFlow {...args}>
      <Box sx={{ py: 12, px: 4, bgcolor: 'background.default', display: 'flex', justifyContent: 'center' }}>
        <Typography variant="h4">Section 1</Typography>
      </Box>
      <Box sx={{ py: 12, px: 4, bgcolor: 'background.paper', display: 'flex', justifyContent: 'center' }}>
        <Typography variant="h4">Section 2</Typography>
      </Box>
      <Box sx={{ py: 12, px: 4, bgcolor: 'background.default', display: 'flex', justifyContent: 'center' }}>
        <Typography variant="h4">Section 3</Typography>
      </Box>
    </VerticalFlow>
  ),
};

export const WithGap = {
  args: {
    gap: 4,
  },
  render: (args) => (
    <VerticalFlow {...args}>
      <Box sx={{ py: 12, px: 4, bgcolor: 'background.default', display: 'flex', justifyContent: 'center' }}>
        <Typography variant="h4">Section 1</Typography>
      </Box>
      <Box sx={{ py: 12, px: 4, bgcolor: 'background.paper', display: 'flex', justifyContent: 'center' }}>
        <Typography variant="h4">Section 2</Typography>
      </Box>
      <Box sx={{ py: 12, px: 4, bgcolor: 'background.default', display: 'flex', justifyContent: 'center' }}>
        <Typography variant="h4">Section 3</Typography>
      </Box>
    </VerticalFlow>
  ),
};

export const SeamlessFlow = {
  args: {
    gap: 0,
  },
  render: (args) => (
    <VerticalFlow {...args}>
      <Box sx={{ height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', bgcolor: 'background.default' }}>
        <Typography variant="h3">Hero Section</Typography>
      </Box>
      <Box sx={{ py: 8, display: 'flex', alignItems: 'center', justifyContent: 'center', bgcolor: 'background.paper' }}>
        <Typography variant="h4">Motto Section</Typography>
      </Box>
      <Box sx={{ py: 12, display: 'flex', alignItems: 'center', justifyContent: 'center', bgcolor: 'background.default' }}>
        <Typography variant="h4">Collection Section</Typography>
      </Box>
    </VerticalFlow>
  ),
};
