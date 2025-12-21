import { Box } from '@mui/material';
import FullBleed from './layout/FullBleed';
import StaticImage from '../components/media/StaticImage';

const Hero = ({ imageSrc, children, sx, ...props }) => {
  return (
    <FullBleed minHeight="100vh" {...props} sx={{ position: 'relative', ...sx }}>
      <StaticImage
        src={imageSrc}
        alt="Hero"
        sx={{
          width: '100%',
          height: '100vh',
          objectFit: 'cover',
        }}
      />
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
