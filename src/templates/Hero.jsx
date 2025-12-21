import { Box } from '@mui/material';
import FullBleed from './layout/FullBleed';
import StaticImage from '../components/media/StaticImage';

const Hero = ({ imageSrc, children, sx, ...props }) => {
  return (
    <FullBleed minHeight="100vh" {...props} sx={{ position: 'relative', overflow: 'hidden', ...sx }}>
      <Box
        sx={{
          width: '100%',
          height: '100vh',
          position: 'relative',
        }}
      >
        <StaticImage
          src={imageSrc}
          alt="Hero"
          sx={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
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
    </FullBleed>
  );
};

export default Hero;
