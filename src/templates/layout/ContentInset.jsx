import { Box } from '@mui/material';

const ContentInset = ({ children, maxWidth = '1200px', px = 4, py = 0, sx, ...props }) => {
  return (
    <Box
      {...props}
      sx={{
        maxWidth,
        mx: 'auto',
        px,
        py,
        ...sx,
      }}
    >
      {children}
    </Box>
  );
};

export default ContentInset;
