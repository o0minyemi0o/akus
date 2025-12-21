import { Box } from '@mui/material';
import ProductCard from '../components/product/ProductCard';

/**
 * ProductRow - 제품들을 가로로 나열하는 컴포넌트
 *
 * 특징:
 * - 가로 스크롤 지원
 * - 균등한 간격
 * - 최소한의 스크롤바 스타일
 */
const ProductRow = ({
  products = [],
  cardWidth = '280px',
  gap = 3,
  aspectRatio = '3/4',
  onProductClick,
  sx,
  ...props
}) => {
  return (
    <Box
      {...props}
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
        ...sx,
      }}
    >
      <Box
        sx={{
          display: 'flex',
          gap: gap,
          pb: 2,
          pl: 4,
          pr: 4,
        }}
      >
        {products.map((product, index) => (
          <Box
            key={product.id || index}
            sx={{
              flexShrink: 0,
              width: cardWidth,
            }}
          >
            <ProductCard
              image={product.image}
              name={product.name}
              category={product.category}
              price={product.price}
              aspectRatio={aspectRatio}
              onClick={onProductClick ? () => onProductClick(product) : undefined}
            />
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default ProductRow;
