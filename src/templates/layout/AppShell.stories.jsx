import { Box, Typography } from '@mui/material';
import AppShell from './AppShell';

export default {
  title: '3. Templates/Layout/AppShell',
  component: AppShell,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: `
# AppShell

애플리케이션 전역 레이아웃 컴포넌트

## 구조

- **CategoryNav**: 좌측 고정 카테고리 네비게이션 (130px, 고정 배경 포함)
- **Header**: 상단 고정 헤더 (브랜드 로고)
- **Children**: 메인 콘텐츠 영역 (각 페이지 컴포넌트, 자동으로 네비게이션 제외)
- **Footer**: 하단 전체 너비 푸터

## 사용

모든 페이지는 App.jsx에서 AppShell로 감싸져 있습니다.

\`\`\`jsx
<BrowserRouter>
  <AppShell>
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/category/:categoryId" element={<CategoryPage />} />
      ...
    </Routes>
  </AppShell>
</BrowserRouter>
\`\`\`
        `,
      },
    },
  },
};

/**
 * Default: 간단한 콘텐츠로 AppShell 구조 확인
 */
export const Default = {
  args: {
    hideAll: false,
  },
  render: (args) => (
    <AppShell {...args}>
      <Box
        sx={{
          minHeight: '100vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Typography variant="h3" sx={{ color: 'text.secondary' }}>
          Main Content Area
        </Typography>
      </Box>
    </AppShell>
  ),
};

/**
 * WithPageContent: 실제 페이지 콘텐츠와 유사한 구조
 */
export const WithPageContent = {
  args: {
    hideAll: false,
  },
  render: (args) => (
    <AppShell {...args}>
      <Box
        sx={{
          pt: 8,
          pb: 8,
        }}
      >
        {/* Hero Section */}
        <Box
          sx={{
            height: '60vh',
            bgcolor: 'background.paper',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            mb: 8,
          }}
        >
          <Typography variant="h2" sx={{ color: 'text.secondary' }}>
            Hero Section
          </Typography>
        </Box>

        {/* Content Section */}
        <Box
          sx={{
            px: { xs: 3, sm: 4, md: 6, lg: 8 },
            py: { xs: 6, md: 8, lg: 10 },
          }}
        >
          <Typography variant="h4" gutterBottom>
            Page Content
          </Typography>
          <Typography variant="body1" paragraph sx={{ maxWidth: '800px' }}>
            이 영역에 실제 페이지 콘텐츠가 들어갑니다. CategoryNav, Header, Footer는
            AppShell에서 관리되므로 각 페이지는 순수하게 콘텐츠만 렌더링합니다.
          </Typography>
          <Typography variant="body1" paragraph sx={{ maxWidth: '800px' }}>
            좌측의 CategoryNav를 클릭하면 해당 카테고리 페이지로 이동하며, 상단의
            브랜드 로고를 클릭하면 메인 페이지로 이동합니다.
          </Typography>

          {/* Dummy content to show scrolling */}
          <Box sx={{ mt: 8 }}>
            {[1, 2, 3, 4, 5].map((i) => (
              <Box
                key={i}
                sx={{
                  height: '200px',
                  bgcolor: 'background.paper',
                  mb: 4,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  borderRadius: 1,
                }}
              >
                <Typography variant="h5" sx={{ color: 'text.secondary' }}>
                  Content Block {i}
                </Typography>
              </Box>
            ))}
          </Box>
        </Box>
      </Box>
    </AppShell>
  ),
};

/**
 * MinimalContent: 최소한의 콘텐츠로 레이아웃 구조 확인
 */
export const MinimalContent = {
  args: {
    hideAll: false,
  },
  render: (args) => (
    <AppShell {...args}>
      <Box
        sx={{
          pt: 12,
          px: { xs: 3, sm: 4, md: 6, lg: 8 },
          minHeight: '80vh',
        }}
      >
        <Typography variant="h3" gutterBottom>
          Minimal Page
        </Typography>
        <Typography variant="body1" sx={{ color: 'text.secondary', maxWidth: '600px' }}>
          CategoryNav, Header, Footer가 자동으로 포함된 최소 페이지 구조입니다.
        </Typography>
      </Box>
    </AppShell>
  ),
};
