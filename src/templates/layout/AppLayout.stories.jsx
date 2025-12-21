import AppLayout from './AppLayout';
import { Box, Typography } from '@mui/material';

export default {
  title: '3. Templates/Layout/AppLayout',
  component: AppLayout,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
};

export const Default = {
  render: () => (
    <AppLayout>
      <Box sx={{ p: 4 }}>
        <Typography variant="h3">App Layout</Typography>
        <Typography variant="body1" sx={{ mt: 2 }}>
          전체 페이지 래퍼. 단일 스크롤 경험을 제공합니다.
        </Typography>
      </Box>
    </AppLayout>
  ),
};

export const WithMultipleSections = {
  render: () => (
    <AppLayout>
      <Box sx={{ height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', bgcolor: 'background.default' }}>
        <Typography variant="h4">Section 1 (Hero)</Typography>
      </Box>
      <Box sx={{ height: '50vh', display: 'flex', alignItems: 'center', justifyContent: 'center', bgcolor: 'background.paper' }}>
        <Typography variant="h4">Section 2 (Motto)</Typography>
      </Box>
      <Box sx={{ height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', bgcolor: 'background.default' }}>
        <Typography variant="h4">Section 3 (Collection)</Typography>
      </Box>
    </AppLayout>
  ),
};
