import { Box } from '@mui/material';
import HeroSection from '../sections/HeroSection';
import BrandStorySection from '../sections/BrandStorySection';
import ProductSection from '../sections/ProductSection';
import Footer from '../templates/Footer';
import PageWithNav from '../templates/layout/PageWithNav';

/**
 * MainPage - 메인 랜딩 페이지
 *
 * 구조:
 * - PageWithNav: 왼쪽 네비게이션 공간(128px) + 메인 콘텐츠 영역
 *
 * 구성:
 * 1. HeroSection - 히어로 이미지 + 헤더 + 카테고리 네비게이션
 * 2. BrandStorySection - 브랜드 모토 + 가로 스크롤 이미지
 * 3. ProductSection - 제품 컬렉션 그리드
 * 4. Footer - 푸터
 */
const MainPage = ({
  heroImage = '/src/assets/product/hero.jpg',
  brandStoryText = 'Objects shaped by earth, designed for quiet rituals.',
  brandStoryImages = [],
  productSubtitle = 'NEW COLLECTION',
  productTitle = 'Essential Objects',
  productDescription = 'For spaces that stay still',
  products = [],
  onCategoryClick,
  onProductClick,
  ...props
}) => {
  return (
    <Box {...props}>
      {/* Main Content with Navigation */}
      <PageWithNav>
        {/* Hero Section - 네비게이션 포함 */}
        <HeroSection
          imageSrc={heroImage}
          showBrandWordmark={false}
          showCategoryNav={true}
          headerTransparent={true}
          onCategoryClick={onCategoryClick}
        />

        {/* Brand Story Section */}
        <BrandStorySection text={brandStoryText} images={brandStoryImages} />

        {/* Product Section */}
        <ProductSection
          subtitle={productSubtitle}
          title={productTitle}
          description={productDescription}
          products={products}
          titleAlign="left"
          onProductClick={onProductClick}
        />
      </PageWithNav>

      {/* Footer - 전체 너비 사용, nav 영역 무시 */}
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

export default MainPage;
