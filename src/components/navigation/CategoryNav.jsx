import { Box, Typography } from '@mui/material';
import BrandLogo from './BrandLogo';

const categories = ['TEXTILE', 'CERAMIC', 'CARE', 'TOOL'];

const CategoryNav = ({ onCategoryClick, showLogo = true, sx, ...props }) => {
  return (
    <>
      {/* Brand Logo - Fixed at top */}
      {showLogo && (
        <Box
          sx={{
            position: 'fixed',
            left: 28,
            top: 32,
            zIndex: 1100,
            pointerEvents: 'auto',
          }}
        >
          <BrandLogo />
        </Box>
      )}

      {/* Category List - Fixed at middle */}
      <Box
        component="nav"
        {...props}
        sx={{
          position: 'fixed',
          left: 28,
          top: '50%',
          transform: 'translateY(-50%)',
          zIndex: 900,
          display: 'flex',
          flexDirection: 'column',
          gap: 2,
          pointerEvents: 'auto',
          ...sx,
        }}
      >
        {categories.map((category) => (
        <Box
          key={category}
          component="a"
          href={`#${category.toLowerCase()}`}
          onClick={(e) => {
            if (onCategoryClick) {
              e.preventDefault();
              onCategoryClick(category);
            }
          }}
          sx={{
            textDecoration: 'none',
            cursor: 'pointer',
            transition: 'opacity 0.2s',
            '&:hover': {
              opacity: 0.6,
            },
          }}
        >
          <Typography
            variant="body2"
            sx={{
              fontFamily: '"Pretendard Variable", sans-serif',
              fontSize: '0.95rem',
              fontWeight: 500,
              letterSpacing: '0.05em',
              color: 'text.primary',
            }}
          >
            {category}
          </Typography>
        </Box>
      ))}
      </Box>
    </>
  );
};

export default CategoryNav;
