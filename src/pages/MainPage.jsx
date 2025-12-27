import { Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import HeroSection from '../sections/HeroSection';
import BrandStorySection from '../sections/BrandStorySection';
import ProductSection from '../sections/ProductSection';
import { products as allProducts } from '../data/products';

/**
 * MainPage - 메인 랜딩 페이지
 *
 * 구조:
 * - AppShell: CategoryNav, Header, Footer 관리 (App.jsx에서 적용)
 * - MainPage: 좌측 네비게이션 없이 전체 너비 사용
 *
 * 구성:
 * 1. HeroSection - 히어로 이미지 + 헤더 + 카테고리 네비게이션
 * 2. BrandStorySection - 브랜드 모토 + 가로 스크롤 이미지
 * 3. ProductSection - 제품 컬렉션 그리드
 */
const MainPage = (props) => {
  const navigate = useNavigate();

  // MainPage.stories.jsx의 Default args와 동일한 데이터
  const heroImage = '/src/assets/product/hero.jpg';
  const brandStoryText = 'Objects shaped by earth, designed for quiet rituals.';
  const brandStoryImages = [
    '/src/assets/product/item1.jpg',
    '/src/assets/product/item2.jpg',
    '/src/assets/product/item3.jpg',
    '/src/assets/product/item4.jpg',
    '/src/assets/product/item5.jpg',
    '/src/assets/product/item7.jpg',
  ];
  const productSubtitle = 'NEW COLLECTION';
  const productTitle = 'Essential Objects';
  const productDescription = 'For spaces that stay still';

  // 제품 데이터를 stories와 동일한 형식으로 변환
  const products = allProducts.map(product => ({
    id: product.id,
    image: product.images[0],
    name: product.name,
    category: product.category,
    price: product.price.toLocaleString(),
  }));

  const handleProductClick = (productId) => {
    navigate(`/product/${productId}`);
  };

  return (
    <Box
      {...props}
      sx={{
        width: '100%',
        maxWidth: '100%',
        overflowX: 'hidden',
        ...props.sx,
      }}
    >
      {/* Hero Section */}
      <HeroSection
        imageSrc={heroImage}
        showBrandWordmark={false}
        showCategoryNav={false}
        showHeader={false}
      />

      {/* Brand Story Section */}
      <BrandStorySection
        text={brandStoryText}
        images={brandStoryImages}
        sx={{ px: { xs: 3, sm: 4, md: 6, lg: 8 } }}
      />

      {/* Product Section */}
      <ProductSection
        subtitle={productSubtitle}
        title={productTitle}
        description={productDescription}
        products={products}
        titleAlign="left"
        onProductClick={handleProductClick}
        sx={{ px: { xs: 3, sm: 4, md: 6, lg: 8 } }}
      />
    </Box>
  );
};

export default MainPage;
