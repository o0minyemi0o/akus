import Footer from './Footer';
import { Box } from '@mui/material';

export default {
  title: '3. Templates/Footer',
  component: Footer,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
};

export const Default = {};

export const WithContent = {
  render: () => (
    <>
      <Box sx={{ minHeight: '80vh', bgcolor: 'background.default', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <p>Page Content</p>
      </Box>
      <Footer />
    </>
  ),
};
