import { Box } from '@mui/material';
import PageWithNav from '../templates/layout/PageWithNav';
import CategoryHeader from '../components/category/CategoryHeader';
import ProductGrid from '../components/product/ProductGrid';
import Footer from '../templates/Footer';

/**
 * CategoryPage - 카테고리별 제품 리스트 페이지
 *
 * akus Editorial Grid:
 * - PageWithNav: 좌측 네비게이션 유지
 * - CategoryHeader: 카테고리명 + 설명
 * - ProductGrid: 2-3열 제품 그리드
 * - Footer: 전체 너비
 *
 * 구조:
 * 1. PageWithNav (128px 좌측 네비게이션 공간)
 * 2. CategoryHeader
 * 3. ProductGrid
 * 4. Footer
 */
const CategoryPage = ({
  categoryTitle,
  categoryDescription,
  categoryBackgroundImage,
  products = [],
  onProductClick,
  ...props
}) => {
  return (
    <Box {...props}>
      {/* Main Content with Navigation */}
      <PageWithNav>
        {/* Category Header */}
        <CategoryHeader
          title={categoryTitle}
          description={categoryDescription}
          backgroundImage={categoryBackgroundImage}
        />

        {/* Product Grid */}
        <Box
          sx={{
            px: { xs: 3, sm: 4, md: 6, lg: 8 },
            py: { xs: 6, md: 8, lg: 10 },
          }}
        >
          <ProductGrid
            products={products}
            columns={{ xs: 1, sm: 2, md: 2, lg: 3 }}
            spacing={{ xs: 4, md: 6, lg: 8 }}
            onProductClick={onProductClick}
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

export default CategoryPage;
