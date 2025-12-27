import { Box } from '@mui/material';

const Header = ({ transparent = true, sx, ...props }) => {
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
          pl: 4,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'flex-end',
        }}
      >
        {/* Reserved for future use: search, cart, user menu */}
      </Box>
    </Box>
  );
};

export default Header;
