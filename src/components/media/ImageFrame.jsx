import { Box } from '@mui/material';
import StaticImage from './StaticImage';

const ImageFrame = ({
  src,
  alt = '',
  aspectRatio = '1 / 1',
  objectFit = 'cover',
  children,
  sx,
  ...props
}) => {
  return (
    <Box
      {...props}
      sx={{
        position: 'relative',
        width: '100%',
        aspectRatio,
        overflow: 'hidden',
        bgcolor: 'background.paper',
        ...sx,
      }}
    >
      {src ? (
        <StaticImage src={src} alt={alt} objectFit={objectFit} />
      ) : (
        children
      )}
    </Box>
  );
};

export default ImageFrame;
