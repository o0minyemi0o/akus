import { Box, IconButton, Badge } from '@mui/material';
import { ShoppingBag } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../../contexts/CartContext';

const Header = ({ transparent = true, sx, ...props }) => {
  const navigate = useNavigate();
  const { getTotalItems } = useCart();
  const totalItems = getTotalItems();

  return (
    <Box
      component="header"
      {...props}
      sx={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        bgcolor: transparent ? 'transparent' : 'background.default',
        borderBottom: transparent ? 'none' : '1px solid',
        borderColor: 'divider',
        transition: 'background-color 0.3s, border-color 0.3s',
        ...sx,
      }}
    >
      <Box
        sx={{
          py: 2,
          pr: 4,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'flex-end',
        }}
      >
        {/* Cart Icon */}
        <IconButton
          onClick={() => navigate('/cart')}
          sx={{
            color: 'text.primary',
            '&:hover': {
              bgcolor: 'action.hover',
            },
          }}
          aria-label="cart"
        >
          <Badge
            badgeContent={totalItems}
            color="primary"
            sx={{
              '& .MuiBadge-badge': {
                bgcolor: 'primary.main',
                color: 'background.paper',
              },
            }}
          >
            <ShoppingBag size={20} />
          </Badge>
        </IconButton>
      </Box>
    </Box>
  );
};

export default Header;
