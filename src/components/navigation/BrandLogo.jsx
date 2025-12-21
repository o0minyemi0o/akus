import { Box } from '@mui/material';
import BrandWordmark from '../typography/BrandWordmark';

const BrandLogo = ({ sx, ...props }) => {
  return (
    <Box
      component="a"
      href="/"
      {...props}
      sx={{
        textDecoration: 'none',
        display: 'inline-block',
        cursor: 'pointer',
        ...sx,
      }}
    >
      <BrandWordmark sx={{ fontSize: '1.5rem', fontWeight: 600 }} />
    </Box>
  );
};

export default BrandLogo;
