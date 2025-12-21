import { Typography } from '@mui/material';

const QuietParagraph = ({ children, sx, ...props }) => {
  return (
    <Typography
      variant="body1"
      component="p"
      {...props}
      sx={{
        fontFamily: '"Pretendard Variable", sans-serif',
        fontSize: '1rem',
        fontWeight: 400,
        letterSpacing: '0.01em',
        lineHeight: 1.8,
        color: 'text.secondary',
        maxWidth: '600px',
        ...sx,
      }}
    >
      {children}
    </Typography>
  );
};

export default QuietParagraph;
