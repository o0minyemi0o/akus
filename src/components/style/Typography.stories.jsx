import { Box, Typography } from '@mui/material';

export default {
  title: '1. Style/Typography',
  tags: ['!autodocs'],
  parameters: {
    docs: {
      page: () => <TypographyDoc />,
    },
  },
};

const TypographyDoc = () => {
  return (
    <Box sx={{ p: 4 }}>
      <Typography variant="body1" sx={{ mb: 2 }}>
        타이포그래피는 읽히기보다 머무는 요소로 존재한다.
      </Typography>

      {/* 토큰 구조 */}
      <Box sx={{ mt: 4, mb: 3 }}>
        <Typography variant="h6" gutterBottom>
          토큰 구조
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
{`theme.typography
├── h1~h6              // Display / Brand (Serif)
│   ├── fontFamily     // Georgia, Times New Roman
│   └── letterSpacing  // 0.02em (기본보다 넓게)
└── body1, body2       // Body Text (Sans)
    ├── fontFamily     // Pretendard Variable
    └── letterSpacing  // 0.01em`}
        </Box>
      </Box>

      {/* Typography 샘플 */}
      <Box sx={{ mt: 4, mb: 3 }}>
        <Typography variant="h6" gutterBottom>
          타이포그래피 샘플
        </Typography>
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3, mt: 2 }}>
          <Box>
            <Typography variant="caption" sx={{ color: 'text.secondary', mb: 0.5, display: 'block' }}>
              variant="h1"
            </Typography>
            <Typography variant="h1">The Space Itself</Typography>
            <Typography variant="caption" sx={{ color: 'text.secondary', fontFamily: 'monospace' }}>
              Georgia / letterSpacing: 0.02em
            </Typography>
          </Box>

          <Box>
            <Typography variant="caption" sx={{ color: 'text.secondary', mb: 0.5, display: 'block' }}>
              variant="h2"
            </Typography>
            <Typography variant="h2">Silent Luxury</Typography>
          </Box>

          <Box>
            <Typography variant="caption" sx={{ color: 'text.secondary', mb: 0.5, display: 'block' }}>
              variant="h3"
            </Typography>
            <Typography variant="h3">Desert Modernism</Typography>
          </Box>

          <Box>
            <Typography variant="caption" sx={{ color: 'text.secondary', mb: 0.5, display: 'block' }}>
              variant="h4"
            </Typography>
            <Typography variant="h4">조명·세면·거울</Typography>
          </Box>

          <Box>
            <Typography variant="caption" sx={{ color: 'text.secondary', mb: 0.5, display: 'block' }}>
              variant="body1"
            </Typography>
            <Typography variant="body1">
              akus의 키 비주얼은 제품을 설명하기 위한 이미지가 아니라 공간의 온도, 재질, 밀도를 전달하는 장면이다.
            </Typography>
            <Typography variant="caption" sx={{ color: 'text.secondary', fontFamily: 'monospace' }}>
              Pretendard Variable / letterSpacing: 0.01em
            </Typography>
          </Box>

          <Box>
            <Typography variant="caption" sx={{ color: 'text.secondary', mb: 0.5, display: 'block' }}>
              variant="body2"
            </Typography>
            <Typography variant="body2">
              곡면이 살아있는 세리프 서체와 정확하지만 느슨한 정렬, 그리고 과감한 여백을 통해 고요한 공간의 품격을 유지한다.
            </Typography>
          </Box>
        </Box>
      </Box>

      {/* 토큰 값 테이블 */}
      <Box sx={{ mt: 4, mb: 3 }}>
        <Typography variant="h6" gutterBottom>
          토큰 값
        </Typography>
        <Box
          component="table"
          sx={{
            width: '100%',
            borderCollapse: 'collapse',
            '& th, & td': {
              p: 1.5,
              textAlign: 'left',
              borderBottom: '1px solid',
              borderColor: 'divider',
            },
            '& th': {
              fontWeight: 600,
              bgcolor: 'background.paper',
            },
          }}
        >
          <thead>
            <tr>
              <th>Variant</th>
              <th>Font Family</th>
              <th>Letter Spacing</th>
              <th>용도</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><code>h1 ~ h6</code></td>
              <td>Georgia, Times New Roman (Serif)</td>
              <td>0.02em</td>
              <td>Display / Brand</td>
            </tr>
            <tr>
              <td><code>body1, body2</code></td>
              <td>Pretendard Variable (Sans)</td>
              <td>0.01em</td>
              <td>본문 텍스트</td>
            </tr>
          </tbody>
        </Box>
      </Box>

      {/* 사용 예시 */}
      <Box sx={{ mt: 4, mb: 3 }}>
        <Typography variant="h6" gutterBottom>
          사용 예시 (MUI sx)
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
{`<Typography variant="h1">
  Headline Text
</Typography>

<Typography variant="body1">
  본문 텍스트는 Pretendard Variable을 사용합니다.
</Typography>

<Typography variant="body2" sx={{ color: 'text.secondary' }}>
  보조 정보는 secondary 컬러를 사용합니다.
</Typography>`}
        </Box>
      </Box>

      {/* 타이포그래피 규칙 */}
      <Box sx={{ mt: 5, p: 3, bgcolor: 'background.paper' }}>
        <Typography variant="h6" gutterBottom>
          타이포그래피 규칙
        </Typography>
        <Box component="ul" sx={{ pl: 2, '& li': { mb: 1 } }}>
          <li>자간은 기본값보다 넓게 (letterSpacing)</li>
          <li>굵기 변화 최소화</li>
          <li>컬러·이탤릭 강조 금지</li>
          <li>Serif: 빛과 재질의 부드러운 확산 연상</li>
          <li>Pretendard: 한글/영문 혼용 안정성, 감정 과잉 없는 중립성</li>
        </Box>
      </Box>

      {/* Vibe Coding Prompt */}
      <Box sx={{ mt: 5, p: 3, bgcolor: 'background.paper' }}>
        <Typography variant="h6" gutterBottom>
          Vibe Coding Prompt (AI용)
        </Typography>
        <Typography variant="body2" component="pre" sx={{ whiteSpace: 'pre-wrap', fontFamily: 'monospace' }}>
{`akus 타이포그래피:
- Display/Brand: Serif (Georgia, Times New Roman)
  - 곡률이 살아있는 타입
  - letterSpacing: 0.02em (기본보다 넓게)

- Body: Pretendard Variable (Sans)
  - 한글/영문 혼용 안정성
  - letterSpacing: 0.01em

규칙:
- 굵기 변화 최소화
- 컬러·이탤릭 강조 금지
- 읽히기보다 머무는 요소로 존재`}
        </Typography>
      </Box>
    </Box>
  );
};

export const Default = {
  render: () => <TypographyDoc />,
};
