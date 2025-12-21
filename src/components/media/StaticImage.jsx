import { Box } from '@mui/material';

const StaticImage = ({
  src,
  alt = '',
  objectFit = 'cover',
  loading = 'lazy',
  sx,
  ...props
}) => {
  return (
    <Box
      component="img"
      src={src}
      alt={alt}
      loading={loading}
      {...props}
      sx={{
        width: '100%',
        height: '100%',
        objectFit,
        display: 'block',
        ...sx,
      }}
    />
  );
};

export default StaticImage;
