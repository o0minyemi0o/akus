import { Box } from '@mui/material';
import StaticImage from '../components/media/StaticImage';

const Hero = ({ imageSrc, children, sx, ...props }) => {
  return (
    <Box
      {...props}
      sx={{
        position: 'relative',
        width: '100%',
        maxWidth: '100%',
        height: '100vh',
        overflow: 'hidden',
        ...sx,
      }}
    >
      <Box
        sx={{
          width: '100%',
          maxWidth: '100%',
          height: '100%',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <StaticImage
          src={imageSrc}
          alt="Hero"
          sx={{
            width: '100%',
            height: '100%',
            maxWidth: '100%',
            objectFit: 'cover',
            objectPosition: 'center',
            display: 'block',
          }}
        />
      </Box>
      {children && (
        <Box
          sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          {children}
        </Box>
      )}
    </Box>
  );
};

export default Hero;
