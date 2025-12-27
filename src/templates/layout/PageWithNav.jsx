import { Box } from '@mui/material';

/**
 * PageWithNav - 왼쪽 네비게이션 공간이 있는 페이지 레이아웃
 *
 * 구조:
 * - 왼쪽: 고정 네비게이션 영역 (128px, md 이상)
 * - 오른쪽: 메인 콘텐츠 영역
 *
 * 사용처:
 * - CategoryNav가 있는 메인 페이지
 * - 왼쪽 여백이 필요한 모든 섹션
 */
const PageWithNav = ({ children, navWidth = 138, sx, ...props }) => {
  return (
    <Box
      {...props}
      sx={{
        position: 'relative',
        width: '100%',
        maxWidth: '100%',
        overflow: 'hidden',
        ...sx,
      }}
    >
      {/* Left Navigation Space - Fixed Background */}
      <Box
        sx={{
          position: 'fixed',
          top: 0,
          left: 0,
          bottom: 0,
          width: { xs: 0, md: navWidth },
          bgcolor: 'background.default',
          zIndex: 800,
          pointerEvents: 'none',
        }}
      />

      {/* Main Content Area with Left Margin */}
      <Box
        sx={{
          marginLeft: { xs: 0, md: `${navWidth}px` },
          width: { xs: '100%', md: `calc(100% - ${navWidth}px)` },
          maxWidth: '100%',
        }}
      >
        {children}
      </Box>
    </Box>
  );
};

export default PageWithNav;
