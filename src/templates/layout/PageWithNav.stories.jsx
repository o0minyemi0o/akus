import { Box, Typography } from '@mui/material';
import PageWithNav from './PageWithNav';

export default {
  title: '3. Templates/Layout/PageWithNav',
  component: PageWithNav,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
};

/**
 * 기본 사용 예시
 * 왼쪽에 128px 네비게이션 공간, 오른쪽에 메인 콘텐츠
 */
export const Default = {
  args: {
    children: (
      <Box>
        <Box
          sx={{
            py: 8,
            px: 4,
            bgcolor: 'background.paper',
            minHeight: '100vh',
          }}
        >
          <Typography variant="h4" sx={{ mb: 4 }}>
            Main Content Area
          </Typography>
          <Typography variant="body1" sx={{ mb: 2 }}>
            왼쪽에 128px의 네비게이션 공간이 확보되어 있습니다.
          </Typography>
          <Typography variant="body1" sx={{ mb: 2 }}>
            이 영역은 자동으로 왼쪽 여백이 적용됩니다.
          </Typography>
          <Typography variant="body2" color="text.secondary">
            모바일(xs)에서는 여백이 0으로 설정되어 전체 너비를 사용합니다.
          </Typography>
        </Box>
      </Box>
    ),
  },
};

/**
 * 여러 섹션을 포함한 예시
 */
export const MultipleSections = {
  args: {
    children: (
      <Box>
        <Box
          sx={{
            py: 8,
            px: 4,
            bgcolor: 'background.default',
          }}
        >
          <Typography variant="h5" sx={{ mb: 2 }}>
            Section 1
          </Typography>
          <Typography variant="body1">
            첫 번째 섹션 콘텐츠
          </Typography>
        </Box>

        <Box
          sx={{
            py: 8,
            px: 4,
            bgcolor: 'background.paper',
          }}
        >
          <Typography variant="h5" sx={{ mb: 2 }}>
            Section 2
          </Typography>
          <Typography variant="body1">
            두 번째 섹션 콘텐츠
          </Typography>
        </Box>

        <Box
          sx={{
            py: 8,
            px: 4,
            bgcolor: 'background.default',
          }}
        >
          <Typography variant="h5" sx={{ mb: 2 }}>
            Section 3
          </Typography>
          <Typography variant="body1">
            세 번째 섹션 콘텐츠
          </Typography>
        </Box>
      </Box>
    ),
  },
};

/**
 * 커스텀 네비게이션 너비
 */
export const CustomNavWidth = {
  args: {
    navWidth: 200,
    children: (
      <Box
        sx={{
          py: 8,
          px: 4,
          bgcolor: 'background.paper',
          minHeight: '100vh',
        }}
      >
        <Typography variant="h4" sx={{ mb: 4 }}>
          Custom Nav Width (200px)
        </Typography>
        <Typography variant="body1">
          navWidth prop을 사용하여 네비게이션 너비를 조정할 수 있습니다.
        </Typography>
      </Box>
    ),
  },
};
