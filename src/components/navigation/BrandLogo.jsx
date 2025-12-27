import { Box } from '@mui/material';
import { Link } from 'react-router-dom';
import BrandWordmark from '../typography/BrandWordmark';

const BrandLogo = ({ sx, ...props }) => {
  return (
    <Box
      component={Link}
      to="/"
      {...props}
      sx={{
        textDecoration: 'none',
        display: 'inline-block',
        cursor: 'pointer',
        lineHeight: 1,
        pointerEvents: 'auto',
        ...sx,
      }}
    >
      <BrandWordmark sx={{ fontSize: '1.75rem', fontWeight: 600 }} />
    </Box>
  );
};

export default BrandLogo;
