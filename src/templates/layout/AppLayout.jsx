import { Box } from '@mui/material';

const AppLayout = ({ children, sx, ...props }) => {
  return (
    <Box
      {...props}
      sx={{
        minHeight: '100vh',
        bgcolor: 'background.default',
        overflowX: 'hidden',
        ...sx,
      }}
    >
      {children}
    </Box>
  );
};

export default AppLayout;
