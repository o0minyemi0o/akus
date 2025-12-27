import { Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import CategoryNav from '../../components/navigation/CategoryNav';
import Header from '../navigation/Header';
import Footer from '../Footer';

/**
 * AppShell - 애플리케이션 전역 레이아웃
 *
 * 모든 페이지에서 공통으로 사용하는 레이아웃:
 * - CategoryNav (왼쪽 고정)
 * - Header (상단)
 * - Children (메인 콘텐츠)
 * - Footer (하단 전체 너비)
 *
 * hideAll prop을 true로 설정하면 모든 공통 요소(Header, Footer, CategoryNav)를 숨김
 * hideCategoryNav prop을 true로 설정하면 CategoryNav만 숨김
 * hideHeader prop을 true로 설정하면 Header만 숨김
 */
const AppShell = ({
  children,
  hideAll = false,
  hideCategoryNav = false,
  hideHeader = false,
}) => {
  const navigate = useNavigate();

  const handleCategoryClick = (category) => {
    const categoryId = category.toLowerCase();
    navigate(`/category/${categoryId}`);
  };

  // hideAll이 true면 children만 렌더링
  if (hideAll) {
    return <Box>{children}</Box>;
  }

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', width: '100vw', maxWidth: '100vw', overflow: 'hidden' }}>
      {/* Left Navigation Area - Fixed */}
      {!hideCategoryNav && (
        <Box
          sx={{
            width: 130,
            position: 'fixed',
            left: 0,
            top: 0,
            height: '100vh',
            bgcolor: 'background.default',
            zIndex: 1000,
          }}
        >
          <CategoryNav onCategoryClick={handleCategoryClick} />
        </Box>
      )}

      {/* Main Content Area with Left Margin */}
      <Box
        sx={{
          marginLeft: !hideCategoryNav ? '130px' : 0,
          minHeight: '100vh',
          display: 'flex',
          flexDirection: 'column',
          flex: 1,
          maxWidth: !hideCategoryNav ? 'calc(100% - 130px)' : '100%',
        }}
      >
        {/* Header */}
        {!hideHeader && <Header />}

        {/* Main Content */}
        <Box
          component="main"
          sx={{
            flex: 1,
            width: '100%',
            maxWidth: '100%',
            overflow: 'hidden',
            '& > *': {
              maxWidth: '100%',
            }
          }}
        >
          {children}
        </Box>
      </Box>

      {/* Footer - Full Width, Above CategoryNav */}
      <Footer
        sx={{
          position: 'relative',
          width: '100%',
          zIndex: 1100,
        }}
      />
    </Box>
  );
};

export default AppShell;
