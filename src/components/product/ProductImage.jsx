import { Box } from '@mui/material';
import StaticImage from '../media/StaticImage';

/**
 * ProductImage - 제품 이미지 표시 컴포넌트
 *
 * akus의 Silent Luxury 철학에 따라:
 * - 깔끔한 이미지 표시
 * - 여백을 통한 호흡
 * - 최소한의 장식
 */
const ProductImage = ({
  src,
  alt = 'Product',
  aspectRatio = '3/4',
  sx,
  ...props
}) => {
  return (
    <Box
      {...props}
      sx={{
        position: 'relative',
        width: '100%',
        aspectRatio: aspectRatio,
        overflow: 'hidden',
        bgcolor: 'background.paper',
        ...sx,
      }}
    >
      <StaticImage
        src={src}
        alt={alt}
        sx={{
          width: '100%',
          height: '100%',
          objectFit: 'cover',
        }}
      />
    </Box>
  );
};

export default ProductImage;
