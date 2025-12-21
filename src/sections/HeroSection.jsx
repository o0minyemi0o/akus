import { Box } from '@mui/material';
import Hero from '../templates/Hero';
import Header from '../templates/navigation/Header';
import CategoryNav from '../components/navigation/CategoryNav';
import BrandWordmark from '../components/typography/BrandWordmark';

/**
 * HeroSection - Hero 이미지와 Header, CategoryNav를 조합한 섹션
 *
 * 페이지 최상단에 사용되는 히어로 섹션
 * - Hero: 전체 화면 이미지
 * - Header: 상단 고정 헤더 (centered logo)
 * - CategoryNav: 왼쪽 고정 카테고리 네비게이션
 * - 옵션: 중앙 오버레이 텍스트 (BrandWordmark 등)
 */
const HeroSection = ({
  imageSrc,
  showBrandWordmark = false,
  showCategoryNav = true,
  headerTransparent = true,
  onCategoryClick,
  sx,
  ...props
}) => {
  return (
    <Box
      component="section"
      {...props}
      sx={{
        position: 'relative',
        ...sx,
      }}
    >
      {/* Category Navigation */}
      {showCategoryNav && <CategoryNav onCategoryClick={onCategoryClick} />}

      {/* Header */}
      <Header transparent={headerTransparent} />

      {/* Hero with optional overlay */}
      <Hero
        imageSrc={imageSrc}
        sx={{
          pl: showCategoryNav ? { xs: 0, md: 16 } : 0,
        }}
      >
        {showBrandWordmark && (
          <BrandWordmark
            sx={{
              fontSize: { xs: '3rem', md: '4rem' },
              color: 'white',
              textShadow: '0 2px 16px rgba(0,0,0,0.3)',
            }}
          />
        )}
      </Hero>
    </Box>
  );
};

export default HeroSection;
