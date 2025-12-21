import { Typography } from '@mui/material';

const SectionTitle = ({ children, sx, ...props }) => {
  return (
    <Typography
      variant="h3"
      component="h2"
      {...props}
      sx={{
        fontFamily: 'Georgia, "Times New Roman", serif',
        fontSize: '2.5rem',
        fontWeight: 400,
        letterSpacing: '0.03em',
        color: 'text.primary',
        mb: 4,
        ...sx,
      }}
    >
      {children}
    </Typography>
  );
};

export default SectionTitle;
