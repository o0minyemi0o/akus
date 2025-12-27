import { Box } from '@mui/material';
import PageWithNav from '../templates/layout/PageWithNav';
import ProductDetailSection from '../sections/ProductDetailSection';
import Footer from '../templates/Footer';

/**
 * ProductDetailPage - 제품 상세 페이지
 *
 * akus Editorial Minimalism:
 * - PageWithNav: 좌측 네비게이션 유지 (MainPage와 일관성)
 * - ProductDetailSection: 제품 정보 + 이미지 갤러리
 * - Footer: 전체 너비
 *
 * 구조:
 * 1. PageWithNav (128px 좌측 네비게이션 공간)
 * 2. ProductDetailSection (좌우 분할 레이아웃)
 * 3. Footer (전체 너비)
 */
const ProductDetailPage = ({
  images,
  name,
  category,
  price,
  description,
  colors,
  sizes,
  details,
  onAddToCart,
  ...props
}) => {
  return (
    <Box {...props}>
      {/* Main Content with Navigation */}
      <PageWithNav>
        {/* Product Detail Section */}
        <Box
          sx={{
            px: { xs: 2, sm: 4, md: 6, lg: 8 },
            py: { xs: 4, md: 6, lg: 8 },
          }}
        >
          <ProductDetailSection
            images={images}
            name={name}
            category={category}
            price={price}
            description={description}
            colors={colors}
            sizes={sizes}
            details={details}
            onAddToCart={onAddToCart}
          />
        </Box>
      </PageWithNav>

      {/* Footer - Full Width */}
      <Box
        sx={{
          width: '100%',
          position: 'relative',
          zIndex: 900,
        }}
      >
        <Footer />
      </Box>
    </Box>
  );
};

export default ProductDetailPage;
