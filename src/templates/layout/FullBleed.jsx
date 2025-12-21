import { Box } from '@mui/material';

const FullBleed = ({ children, minHeight, sx, ...props }) => {
  return (
    <Box
      {...props}
      sx={{
        width: '100%',
        minHeight,
        position: 'relative',
        ...sx,
      }}
    >
      {children}
    </Box>
  );
};

export default FullBleed;
