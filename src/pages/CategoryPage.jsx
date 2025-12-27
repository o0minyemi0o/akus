import { Box } from '@mui/material';
import { useParams, useNavigate } from 'react-router-dom';
import PageWithNav from '../templates/layout/PageWithNav';
import CategoryHeader from '../components/category/CategoryHeader';
import ProductGrid from '../components/product/ProductGrid';
import { getCategoryById, getProductsByCategory } from '../data/products';

/**
 * CategoryPage - 카테고리별 제품 리스트 페이지
 *
 * akus Editorial Grid:
 * - AppShell: CategoryNav, Header, Footer 관리 (App.jsx에서 적용)
 * - PageWithNav: 좌측 네비게이션 공간
 * - CategoryHeader: 카테고리명 + 설명
 * - ProductGrid: 2-3열 제품 그리드
 *
 * 구조:
 * 1. PageWithNav (128px 좌측 네비게이션 공간)
 * 2. CategoryHeader
 * 3. ProductGrid
 */
const CategoryPage = ({
  // Storybook props (선택적)
  categoryTitle,
  categoryDescription,
  categoryBackgroundImage,
  products: productsProp,
  onProductClick: onProductClickProp,
  // 실제 앱에서는 URL params 사용
}) => {
  const params = useParams();
  const navigate = useNavigate();

  // Storybook에서는 props 사용, 실제 앱에서는 URL params 사용
  const categoryId = params?.categoryId;
  const category = categoryId ? getCategoryById(categoryId) : null;
  const rawProducts = categoryId ? getProductsByCategory(categoryId) : [];

  // Storybook mode: props가 제공된 경우 (AppShell 없이 순수 컨텐츠만)
  if (productsProp) {
    return (
      <Box>
        <PageWithNav>
          <CategoryHeader
            title={categoryTitle}
            description={categoryDescription}
            backgroundImage={categoryBackgroundImage}
          />
          <Box sx={{ px: { xs: 3, sm: 4, md: 3, lg: 4 }, py: { xs: 6, md: 8, lg: 10 } }}>
            <ProductGrid
              products={productsProp}
              columns={{ xs: 1, sm: 2, md: 2, lg: 3 }}
              spacing={{ xs: 4, md: 6, lg: 8 }}
              onProductClick={onProductClickProp}
            />
          </Box>
        </PageWithNav>
      </Box>
    );
  }

  // App mode: URL params 사용
  if (!category) {
    return (
      <Box sx={{ p: 4, textAlign: 'center' }}>
        <p>Category not found</p>
      </Box>
    );
  }

  const products = rawProducts.map(product => ({
    id: product.id,
    image: product.images[0],
    name: product.name,
    category: product.category,
    price: `₩${product.price.toLocaleString()}`,
  }));

  const handleProductClick = (product) => {
    navigate(`/product/${product.id}`);
  };

  return (
    <PageWithNav>
      {/* Category Header */}
      <CategoryHeader
        title={category.title}
        description={category.description}
        backgroundImage={category.backgroundImage}
      />

      {/* Product Grid */}
      <Box
        sx={{
          px: { xs: 3, sm: 4, md: 3, lg: 4 },
          py: { xs: 6, md: 8, lg: 10 },
        }}
      >
        <ProductGrid
          products={products}
          columns={{ xs: 1, sm: 2, md: 2, lg: 3 }}
          spacing={{ xs: 4, md: 6, lg: 8 }}
          onProductClick={handleProductClick}
        />
      </Box>
    </PageWithNav>
  );
};

export default CategoryPage;
