import { Typography } from '@mui/material';

const BrandWordmark = ({ sx, ...props }) => {
  return (
    <Typography
      component="h1"
      {...props}
      sx={{
        fontFamily: 'Georgia, "Times New Roman", serif',
        fontSize: '2rem',
        fontWeight: 400,
        letterSpacing: '0.05em',
        color: 'text.primary',
        textTransform: 'lowercase',
        ...sx,
      }}
    >
      akus
    </Typography>
  );
};

export default BrandWordmark;
