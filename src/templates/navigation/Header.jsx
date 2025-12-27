import { Box, IconButton, Badge, Button, Typography } from '@mui/material';
import { ShoppingBag, User, LogOut } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../../contexts/CartContext';
import { useAuth } from '../../contexts/AuthContext';

const Header = ({ transparent = true, sx, ...props }) => {
  const navigate = useNavigate();
  const { getTotalItems } = useCart();
  const { user, logout } = useAuth();
  const totalItems = getTotalItems();

  const handleLogout = () => {
    logout();
    navigate('/');
  };

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
          gap: 2,
        }}
      >
        {/* User Info / Login Button */}
        {user ? (
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
            <Typography
              sx={{
                fontSize: '0.75rem',
                color: 'text.primary',
                letterSpacing: '0.05em',
              }}
            >
              {user.name}
            </Typography>
            <IconButton
              onClick={handleLogout}
              size="small"
              sx={{
                color: 'text.primary',
                '&:hover': {
                  bgcolor: 'action.hover',
                },
              }}
              aria-label="logout"
            >
              <LogOut size={18} />
            </IconButton>
          </Box>
        ) : (
          <Button
            onClick={() => navigate('/login')}
            sx={{
              fontSize: '0.75rem',
              letterSpacing: '0.05em',
              color: 'text.primary',
              textTransform: 'none',
              minWidth: 'auto',
              px: 0,
              '&:hover': {
                bgcolor: 'transparent',
                opacity: 0.7,
              },
            }}
          >
            <User size={18} style={{ marginRight: '6px' }} />
            Login
          </Button>
        )}

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
