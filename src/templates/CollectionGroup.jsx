import { Box, Grid } from '@mui/material';
import CollectionTitle from '../components/product/CollectionTitle';
import ProductCard from '../components/product/ProductCard';

/**
 * CollectionGroup - 제품 컬렉션 그룹 컴포넌트
 *
 * 특징:
 * - CollectionTitle + 그리드 레이아웃
 * - 반응형: 화면 크기에 따라 열 개수 자동 조정
 * - 특정 개수가 차면 아래로 줄바꿈
 */
const CollectionGroup = ({
  subtitle,
  title,
  description,
  products = [],
  titleAlign = 'left',
  columns = { xs: 2, sm: 3, md: 4 },
  gap = 3,
  aspectRatio = '1/1',
  onProductClick,
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
      {/* Collection Title */}
      <CollectionTitle
        subtitle={subtitle}
        title={title}
        description={description}
        align={titleAlign}
        sx={{ mb: 4 }}
      />

      {/* Product Grid */}
      <Grid container spacing={gap}>
        {products.map((product, index) => (
          <Grid
            key={product.id || index}
            size={columns}
          >
            <ProductCard
              image={product.image}
              name={product.name}
              category={product.category}
              price={product.price}
              aspectRatio={aspectRatio}
              onClick={onProductClick ? () => onProductClick(product) : undefined}
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default CollectionGroup;
