import { Box, Typography } from '@mui/material';

/**
 * ProductInfo - 제품 핵심 정보 블록
 *
 * akus Silent Luxury:
 * - 제품명: Serif, 조용한 크기
 * - 카테고리: 작은 태그 (명도 차이로만 구분)
 * - 가격: 숫자 중심, 통화 기호 최소화
 * - 설명: 한 줄, 에디토리얼 톤
 */
const ProductInfo = ({
  name,
  category,
  price,
  description,
  sx,
  ...props
}) => {
  return (
    <Box
      {...props}
      sx={{
        ...sx,
      }}
    >
      {/* Category Tag */}
      {category && (
        <Typography
          component="span"
          sx={{
            display: 'inline-block',
            fontSize: '0.6875rem', // 11px
            fontWeight: 400,
            letterSpacing: '0.15em',
            textTransform: 'uppercase',
            color: 'secondary.main',
            mb: 2,
          }}
        >
          {category}
        </Typography>
      )}

      {/* Product Name */}
      <Typography
        variant="h4"
        component="h1"
        sx={{
          fontSize: { xs: '1.75rem', md: '2rem' },
          fontWeight: 400,
          lineHeight: 1.3,
          color: 'primary.main',
          mb: 3,
        }}
      >
        {name}
      </Typography>

      {/* Price */}
      {price && (
        <Typography
          sx={{
            fontSize: '1.125rem',
            fontWeight: 400,
            letterSpacing: '0.02em',
            color: 'primary.main',
            mb: 4,
          }}
        >
          ₩{typeof price === 'number' ? price.toLocaleString() : price}
        </Typography>
      )}

      {/* Description - Editorial tone */}
      {description && (
        <Typography
          sx={{
            fontSize: '0.9375rem', // 15px
            fontWeight: 300,
            lineHeight: 1.6,
            letterSpacing: '0.01em',
            color: 'text.primary',
            opacity: 0.85,
          }}
        >
          {description}
        </Typography>
      )}
    </Box>
  );
};

export default ProductInfo;
