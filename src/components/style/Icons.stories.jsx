import { Box, Typography } from '@mui/material';
import { Home, Search, User, ShoppingBag, Heart, Menu, X, ChevronRight, ArrowRight, Minus, Plus } from 'lucide-react';

export default {
  title: '1. Style/Icons',
  parameters: {
    docs: {
      page: () => <IconsDoc />,
    },
  },
};

const IconsDoc = () => {
  const commonIcons = [
    { Icon: Home, name: 'Home' },
    { Icon: Search, name: 'Search' },
    { Icon: User, name: 'User' },
    { Icon: ShoppingBag, name: 'ShoppingBag' },
    { Icon: Heart, name: 'Heart' },
    { Icon: Menu, name: 'Menu' },
    { Icon: X, name: 'X' },
    { Icon: ChevronRight, name: 'ChevronRight' },
    { Icon: ArrowRight, name: 'ArrowRight' },
    { Icon: Minus, name: 'Minus' },
    { Icon: Plus, name: 'Plus' },
  ];

  return (
    <Box sx={{ p: 4 }}>
      <Typography variant="body1" sx={{ mb: 2 }}>
        아이콘은 브랜드를 표현하지 않는다. 정보만 전달한다.
      </Typography>

      {/* Library */}
      <Box sx={{ mt: 4, mb: 3 }}>
        <Typography variant="h6" gutterBottom>
          Library
        </Typography>
        <Typography variant="body2" sx={{ mb: 2 }}>
          <code>lucide-react</code>
        </Typography>
        <Typography variant="body2" sx={{ mb: 2 }}>
          선택 이유:
        </Typography>
        <Box component="ul" sx={{ pl: 2, '& li': { mb: 1 } }}>
          <li>스트로크 기반 아이콘으로 시각적 소음 최소화</li>
          <li>라운드 캡 사용 시 브랜드 곡률과 조화</li>
          <li>경량 구조로 UI 존재감 최소화</li>
        </Box>
      </Box>

      {/* 아이콘 샘플 */}
      <Box sx={{ mt: 4, mb: 3 }}>
        <Typography variant="h6" gutterBottom>
          Common Icons
        </Typography>
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(120px, 1fr))',
            gap: 2,
            mt: 2,
          }}
        >
          {commonIcons.map(({ Icon, name }) => (
            <Box
              key={name}
              sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                p: 2,
                bgcolor: 'background.paper',
                gap: 1,
              }}
            >
              <Icon size={24} strokeWidth={1.5} />
              <Typography variant="caption" sx={{ textAlign: 'center', fontFamily: 'monospace' }}>
                {name}
              </Typography>
            </Box>
          ))}
        </Box>
      </Box>

      {/* 사용 예시 */}
      <Box sx={{ mt: 4, mb: 3 }}>
        <Typography variant="h6" gutterBottom>
          사용 예시
        </Typography>
        <Box
          component="pre"
          sx={{
            p: 2,
            bgcolor: 'background.paper',
            overflow: 'auto',
            fontFamily: 'monospace',
            fontSize: '0.875rem',
          }}
        >
{`import { Search, User } from 'lucide-react';

<Search size={24} strokeWidth={1.5} />
<User size={20} strokeWidth={1.5} />

// 기본 스타일 권장
size: 20~24
strokeWidth: 1.5
color: theme.palette.text.primary (기본)`}
        </Box>
      </Box>

      {/* Size & Stroke Width */}
      <Box sx={{ mt: 4, mb: 3 }}>
        <Typography variant="h6" gutterBottom>
          Size & Stroke Width
        </Typography>
        <Box sx={{ display: 'flex', gap: 4, mt: 2 }}>
          <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 1 }}>
            <Search size={16} strokeWidth={1.5} />
            <Typography variant="caption" sx={{ fontFamily: 'monospace' }}>
              size=16
            </Typography>
          </Box>
          <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 1 }}>
            <Search size={20} strokeWidth={1.5} />
            <Typography variant="caption" sx={{ fontFamily: 'monospace' }}>
              size=20 (권장)
            </Typography>
          </Box>
          <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 1 }}>
            <Search size={24} strokeWidth={1.5} />
            <Typography variant="caption" sx={{ fontFamily: 'monospace' }}>
              size=24 (권장)
            </Typography>
          </Box>
          <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 1 }}>
            <Search size={32} strokeWidth={1.5} />
            <Typography variant="caption" sx={{ fontFamily: 'monospace' }}>
              size=32
            </Typography>
          </Box>
        </Box>

        <Box sx={{ display: 'flex', gap: 4, mt: 3 }}>
          <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 1 }}>
            <Search size={24} strokeWidth={1} />
            <Typography variant="caption" sx={{ fontFamily: 'monospace' }}>
              strokeWidth=1
            </Typography>
          </Box>
          <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 1 }}>
            <Search size={24} strokeWidth={1.5} />
            <Typography variant="caption" sx={{ fontFamily: 'monospace' }}>
              strokeWidth=1.5 (권장)
            </Typography>
          </Box>
          <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 1 }}>
            <Search size={24} strokeWidth={2} />
            <Typography variant="caption" sx={{ fontFamily: 'monospace' }}>
              strokeWidth=2
            </Typography>
          </Box>
        </Box>
      </Box>

      {/* Vibe Coding Prompt */}
      <Box sx={{ mt: 5, p: 3, bgcolor: 'background.paper' }}>
        <Typography variant="h6" gutterBottom>
          Vibe Coding Prompt (AI용)
        </Typography>
        <Typography variant="body2" component="pre" sx={{ whiteSpace: 'pre-wrap', fontFamily: 'monospace' }}>
{`akus 아이콘 시스템:
- Library: lucide-react
- 기본 size: 20~24px
- 기본 strokeWidth: 1.5
- 컬러: theme.palette.text.primary (기본)

철학:
- 아이콘은 브랜드를 표현하지 않는다
- 정보만 전달한다
- 시각적 소음 최소화
- UI 존재감 최소화`}
        </Typography>
      </Box>
    </Box>
  );
};

export const Default = {};
