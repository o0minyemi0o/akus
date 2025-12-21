import { Box } from '@mui/material';
import CollectionGroup from '../templates/CollectionGroup';
import ContentInset from '../templates/layout/ContentInset';

/**
 * ProductSection - 제품 컬렉션을 표시하는 섹션
 *
 * CollectionGroup을 ContentInset으로 감싸서
 * 페이지 내에서 적절한 여백과 함께 제품을 표시
 */
const ProductSection = ({
  subtitle,
  title,
  description,
  products = [],
  titleAlign = 'left',
  cardWidth = '280px',
  gap = 3,
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
        py: { xs: 8, md: 12 },
        bgcolor: backgroundColor,
        ...sx,
      }}
    >
      <ContentInset maxWidth="1600px">
        <CollectionGroup
          subtitle={subtitle}
          title={title}
          description={description}
          products={products}
          titleAlign={titleAlign}
          cardWidth={cardWidth}
          gap={gap}
          aspectRatio={aspectRatio}
          onProductClick={onProductClick}
        />
      </ContentInset>
    </Box>
  );
};

export default ProductSection;
