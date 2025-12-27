import { useState } from 'react';
import { Box, IconButton } from '@mui/material';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import ProductImage from './ProductImage';

/**
 * ProductImageGallery - 제품 이미지 갤러리 컴포넌트
 *
 * akus Editorial Minimalism:
 * - 대형 이미지 중심, 여백 충분
 * - 조용한 네비게이션 (숫자 인디케이터 + 화살표)
 * - 클릭/드래그로 이미지 전환
 * - 호버 시 미세한 명도 변화만
 */
const ProductImageGallery = ({
  images = [],
  aspectRatio = '4/5',
  sx,
  ...props
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  if (!images || images.length === 0) {
    return null;
  }

  return (
    <Box
      {...props}
      sx={{
        position: 'relative',
        width: '100%',
        ...sx,
      }}
    >
      {/* Main Image */}
      <ProductImage
        src={images[currentIndex]}
        alt={`Product image ${currentIndex + 1}`}
        aspectRatio={aspectRatio}
        sx={{
          transition: 'opacity 0.4s ease',
        }}
      />

      {/* Navigation Arrows - Only show if multiple images */}
      {images.length > 1 && (
        <>
          {/* Previous Button */}
          <IconButton
            onClick={handlePrevious}
            sx={{
              position: 'absolute',
              left: { xs: 8, md: 16 },
              top: '50%',
              transform: 'translateY(-50%)',
              bgcolor: 'rgba(244, 241, 236, 0.8)', // Plaster White with transparency
              color: 'primary.main',
              width: 40,
              height: 40,
              opacity: 0,
              transition: 'opacity 0.3s ease',
              '&:hover': {
                bgcolor: 'rgba(244, 241, 236, 0.95)',
              },
              ':hover&': {
                opacity: 1,
              },
              'div:hover > &': {
                opacity: 1,
              },
            }}
          >
            <ChevronLeft size={20} strokeWidth={1.5} />
          </IconButton>

          {/* Next Button */}
          <IconButton
            onClick={handleNext}
            sx={{
              position: 'absolute',
              right: { xs: 8, md: 16 },
              top: '50%',
              transform: 'translateY(-50%)',
              bgcolor: 'rgba(244, 241, 236, 0.8)',
              color: 'primary.main',
              width: 40,
              height: 40,
              opacity: 0,
              transition: 'opacity 0.3s ease',
              '&:hover': {
                bgcolor: 'rgba(244, 241, 236, 0.95)',
              },
              'div:hover > &': {
                opacity: 1,
              },
            }}
          >
            <ChevronRight size={20} strokeWidth={1.5} />
          </IconButton>
        </>
      )}

      {/* Image Indicator - Always visible */}
      {images.length > 1 && (
        <Box
          sx={{
            position: 'absolute',
            bottom: { xs: 12, md: 24 },
            right: { xs: 12, md: 24 },
            px: 2,
            py: 1,
            bgcolor: 'rgba(244, 241, 236, 0.9)',
            color: 'primary.main',
            fontSize: { xs: '0.75rem', md: '0.875rem' },
            fontFamily: 'monospace',
            letterSpacing: '0.05em',
            fontWeight: 400,
          }}
        >
          {currentIndex + 1}/{images.length}
        </Box>
      )}

      {/* Thumbnail Dots Navigation */}
      {images.length > 1 && (
        <Box
          sx={{
            display: 'flex',
            gap: 1,
            justifyContent: 'center',
            mt: 3,
          }}
        >
          {images.map((_, index) => (
            <Box
              key={index}
              onClick={() => setCurrentIndex(index)}
              sx={{
                width: currentIndex === index ? 32 : 8,
                height: 2,
                bgcolor: currentIndex === index ? 'primary.main' : 'secondary.main',
                opacity: currentIndex === index ? 1 : 0.3,
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                '&:hover': {
                  opacity: currentIndex === index ? 1 : 0.6,
                },
              }}
            />
          ))}
        </Box>
      )}
    </Box>
  );
};

export default ProductImageGallery;
