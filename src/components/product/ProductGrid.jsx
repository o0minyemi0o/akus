import { useState } from 'react';
import { Box, Grid } from '@mui/material';
import ProductCard from './ProductCard';

/**
 * ProductGrid - 제품 그리드 컴포넌트
 *
 * akus Minimal Grid:
 * - 2-3열 그리드 (여백 넉넉히)
 * - 간단한 카테고리 필터 (옵션)
 * - ProductCard 재사용
 * - 호버 효과는 ProductCard에 위임
 */
const ProductGrid = ({
  products = [],
  columns = { xs: 1, sm: 2, md: 2, lg: 3 },
  spacing = { xs: 4, md: 6, lg: 8 },
  onProductClick,
  sx,
  ...props
}) => {
  const [, setHoveredId] = useState(null);

  if (!products || products.length === 0) {
    return (
      <Box
        sx={{
          textAlign: 'center',
          py: 10,
          color: 'text.secondary',
          fontSize: '0.875rem',
          letterSpacing: '0.05em',
        }}
      >
        No products found
      </Box>
    );
  }

  return (
    <Box
      {...props}
      sx={{
        width: '100%',
        ...sx,
      }}
    >
      <Grid container spacing={spacing}>
        {products.map((product) => (
          <Grid key={product.id} size={columns}>
            <ProductCard
              image={product.image}
              name={product.name}
              category={product.category}
              price={product.price}
              onClick={() => onProductClick?.(product)}
              onMouseEnter={() => setHoveredId(product.id)}
              onMouseLeave={() => setHoveredId(null)}
              sx={{
                transition: 'transform 0.3s ease',
                '&:hover': {
                  transform: 'translateY(-4px)',
                },
              }}
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default ProductGrid;
