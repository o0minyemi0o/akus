import { Box } from '@mui/material';
import CollectionGroup from '../templates/CollectionGroup';

/**
 * ProductSection - 제품 컬렉션을 표시하는 섹션
 */
const ProductSection = ({
  subtitle,
  title,
  description,
  products = [],
  titleAlign = 'left',
  columns = { xs: 4, sm: 2.4, md: 2.4 },
  gap = 2,
  aspectRatio = '3/4',
  onProductClick,
  backgroundColor = 'background.default',
  sx,
  ...props
}) => {
  return (
    <Box
      component="section"
      {...props}
      sx={{
        width: '100%',
        maxWidth: '100%',
        py: { xs: 8, md: 12 },
        bgcolor: backgroundColor,
        ...sx,
      }}
    >
      <CollectionGroup
        subtitle={subtitle}
        title={title}
        description={description}
        products={products}
        titleAlign={titleAlign}
        columns={columns}
        gap={gap}
        aspectRatio={aspectRatio}
        onProductClick={onProductClick}
      />
    </Box>
  );
};

export default ProductSection;
