import { Box, Typography } from '@mui/material';

export default {
  title: '1. Style/Colors',
  parameters: {
    docs: {
      page: () => <ColorsDoc />,
    },
  },
};

const ColorsDoc = () => {
  return (
    <Box sx={{ p: 4 }}>
      <Typography variant="body1" sx={{ mb: 2 }}>
        akus 컬러 시스템: 소수의 색만 사용. 그래디언트 / 글로우 / 블러 효과 금지.
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
{`theme.palette
├── primary.main       // Warm Stone Black (#141210)
├── secondary.main     // Clay Shadow (#7A6A5C)
├── background
│   ├── default        // Plaster White (#F4F1EC)
│   └── paper          // Sand Beige (#E7DECF)
└── text
    ├── primary        // Warm Stone Black (#141210)
    └── secondary      // Clay Shadow (#7A6A5C)`}
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
              <th>토큰명</th>
              <th>컬러명</th>
              <th>값</th>
              <th>용도</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <code>background.default</code>
              </td>
              <td>Plaster White</td>
              <td>
                <Box
                  component="span"
                  sx={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: 1,
                  }}
                >
                  <Box
                    sx={{
                      width: 20,
                      height: 20,
                      bgcolor: '#F4F1EC',
                      border: '1px solid',
                      borderColor: 'divider',
                    }}
                  />
                  <code>#F4F1EC</code>
                </Box>
              </td>
              <td>기본 배경, 여백 영역</td>
            </tr>
            <tr>
              <td>
                <code>background.paper</code>
              </td>
              <td>Sand Beige</td>
              <td>
                <Box
                  component="span"
                  sx={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: 1,
                  }}
                >
                  <Box
                    sx={{
                      width: 20,
                      height: 20,
                      bgcolor: '#E7DECF',
                      border: '1px solid',
                      borderColor: 'divider',
                    }}
                  />
                  <code>#E7DECF</code>
                </Box>
              </td>
              <td>서브 배경, 섹션 구분</td>
            </tr>
            <tr>
              <td>
                <code>primary.main</code>
              </td>
              <td>Warm Stone Black</td>
              <td>
                <Box
                  component="span"
                  sx={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: 1,
                  }}
                >
                  <Box
                    sx={{
                      width: 20,
                      height: 20,
                      bgcolor: '#141210',
                    }}
                  />
                  <code>#141210</code>
                </Box>
              </td>
              <td>텍스트, 주요 대비</td>
            </tr>
            <tr>
              <td>
                <code>secondary.main</code>
              </td>
              <td>Clay Shadow</td>
              <td>
                <Box
                  component="span"
                  sx={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: 1,
                  }}
                >
                  <Box
                    sx={{
                      width: 20,
                      height: 20,
                      bgcolor: '#7A6A5C',
                    }}
                  />
                  <code>#7A6A5C</code>
                </Box>
              </td>
              <td>제한적 보조 톤</td>
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
{`<Box sx={{ bgcolor: 'background.default', p: 3 }}>
  <Typography sx={{ color: 'text.primary' }}>
    Main Text (Warm Stone Black)
  </Typography>
  <Typography sx={{ color: 'text.secondary' }}>
    Secondary Text (Clay Shadow)
  </Typography>
</Box>

<Box sx={{ bgcolor: 'background.paper', p: 3 }}>
  Section Background (Sand Beige)
</Box>`}
        </Box>
      </Box>

      {/* Vibe Coding Prompt */}
      <Box sx={{ mt: 5, p: 3, bgcolor: 'background.paper' }}>
        <Typography variant="h6" gutterBottom>
          Vibe Coding Prompt (AI용)
        </Typography>
        <Typography variant="body2" component="pre" sx={{ whiteSpace: 'pre-wrap', fontFamily: 'monospace' }}>
{`akus 컬러 시스템:
- Plaster White (#F4F1EC): 기본 배경, 여백
- Sand Beige (#E7DECF): 서브 배경, 섹션 구분
- Warm Stone Black (#141210): 텍스트, 주요 대비
- Clay Shadow (#7A6A5C): 제한적 보조 톤

철학:
- 사막 건축과 욕실 공간의 재질 온도 반영
- 순백/순흑 금지, 실제 벽면·석재에 가까운 색
- 색으로 감정 자극 금지, 공간의 밀도 유지
- 그래디언트 / 글로우 / 블러 효과 금지
- 명도 차이로만 대비 생성`}
        </Typography>
      </Box>
    </Box>
  );
};

export const Default = {};
