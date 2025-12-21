import { Box } from '@mui/material';
import MottoText from '../components/typography/MottoText';
import StaticImage from '../components/media/StaticImage';

/**
 * BrandStorySection - 브랜드 스토리를 이미지로 전달하는 섹션
 *
 * Motto 텍스트 아래에 제품/분위기 이미지들이
 * 가로 스크롤로 연결되어 흐르는 섹션
 */
const BrandStorySection = ({
  text,
  images = [],
  imageWidth = '220px',
  imageHeight = '280px',
  gap = 2,
  sx,
  ...props
}) => {
  return (
    <Box
      component="section"
      {...props}
      sx={{
        py: { xs: 8, md: 12 },
        bgcolor: 'background.default',
        ...sx,
      }}
    >
      {/* Motto Text */}
      <Box sx={{ textAlign: 'center', mb: 6 }}>
        <MottoText sx={{ fontSize: { xs: '1.125rem', md: '1.5rem' } }}>
          {text}
        </MottoText>
      </Box>

      {/* Image Row */}
      <Box
        sx={{
          overflowX: 'auto',
          overflowY: 'hidden',
          // 스크롤바 스타일 (최소한으로)
          '&::-webkit-scrollbar': {
            height: '6px',
          },
          '&::-webkit-scrollbar-track': {
            bgcolor: 'transparent',
          },
          '&::-webkit-scrollbar-thumb': {
            bgcolor: 'text.secondary',
            opacity: 0.2,
          },
        }}
      >
        <Box
          sx={{
            display: 'flex',
            gap: gap,
            pl: 4,
            pr: 4,
            pb: 2,
          }}
        >
          {images.map((image, index) => (
            <Box
              key={index}
              sx={{
                flexShrink: 0,
                width: imageWidth,
                height: imageHeight,
              }}
            >
              <StaticImage
                src={image}
                alt={`Brand story ${index + 1}`}
                sx={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                }}
              />
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default BrandStorySection;
