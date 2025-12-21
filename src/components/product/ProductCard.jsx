import { Box, Typography } from '@mui/material';
import ProductImage from './ProductImage';

/**
 * ProductCard - 제품 카드 컴포넌트
 *
 * akus의 Silent Luxury 철학:
 * - 그림자 없음 (elevation 0)
 * - border radius 0
 * - 최소한의 정보만 표시
 * - 여백을 통한 호흡
 */
const ProductCard = ({
  image,
  name,
  category,
  price,
  aspectRatio = '3/4',
  onClick,
  sx,
  ...props
}) => {
  return (
    <Box
      {...props}
      onClick={onClick}
      sx={{
        cursor: onClick ? 'pointer' : 'default',
        '&:hover .product-image': onClick
          ? {
              opacity: 0.85,
              transition: 'opacity 0.3s ease',
            }
          : {},
        ...sx,
      }}
    >
      {/* Product Image */}
      <ProductImage
        src={image}
        alt={name}
        aspectRatio={aspectRatio}
        className="product-image"
        sx={{
          transition: 'opacity 0.3s ease',
        }}
      />

      {/* Product Info */}
      <Box sx={{ mt: 2 }}>
        {/* Category */}
        {category && (
          <Typography
            variant="body2"
            sx={{
              fontSize: '0.75rem',
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
              color: 'text.secondary',
              mb: 0.5,
            }}
          >
            {category}
          </Typography>
        )}

        {/* Name */}
        <Typography
          variant="body1"
          sx={{
            fontSize: '1rem',
            letterSpacing: '0.01em',
            color: 'text.primary',
            mb: 0.5,
          }}
        >
          {name}
        </Typography>

        {/* Price */}
        {price && (
          <Typography
            variant="body2"
            sx={{
              fontSize: '0.875rem',
              letterSpacing: '0.01em',
              color: 'text.secondary',
            }}
          >
            {price}
          </Typography>
        )}
      </Box>
    </Box>
  );
};

export default ProductCard;
