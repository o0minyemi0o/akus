import { Box } from '@mui/material';
import CollectionTitle from './CollectionTitle';
import ProductRow from './ProductRow';

/**
 * CollectionGroup - 제품 컬렉션 그룹 컴포넌트
 *
 * CollectionTitle + ProductRow의 조합
 * 제품 컬렉션을 제목과 함께 표시
 */
const CollectionGroup = ({
  subtitle,
  title,
  description,
  products = [],
  titleAlign = 'left',
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

      {/* Product Row */}
      <ProductRow
        products={products}
        cardWidth={cardWidth}
        gap={gap}
        aspectRatio={aspectRatio}
        onProductClick={onProductClick}
      />
    </Box>
  );
};

export default CollectionGroup;
