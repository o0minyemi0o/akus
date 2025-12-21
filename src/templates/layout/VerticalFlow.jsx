import { Box } from '@mui/material';

const VerticalFlow = ({ children, gap = 0, sx, ...props }) => {
  return (
    <Box
      {...props}
      sx={{
        display: 'flex',
        flexDirection: 'column',
        gap,
        ...sx,
      }}
    >
      {children}
    </Box>
  );
};

export default VerticalFlow;
