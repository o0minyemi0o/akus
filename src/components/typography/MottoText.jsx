import { Typography } from '@mui/material';

const MottoText = ({ children, sx, ...props }) => {
  return (
    <Typography
      variant="h4"
      component="p"
      {...props}
      sx={{
        fontFamily: 'Georgia, "Times New Roman", serif',
        fontSize: '1.75rem',
        fontWeight: 400,
        letterSpacing: '0.02em',
        lineHeight: 1.6,
        color: 'text.primary',
        textAlign: 'center',
        maxWidth: '800px',
        mx: 'auto',
        ...sx,
      }}
    >
      {children}
    </Typography>
  );
};

export default MottoText;
