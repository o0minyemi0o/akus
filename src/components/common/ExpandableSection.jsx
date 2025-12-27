import { useState } from 'react';
import { Box, Typography, Collapse } from '@mui/material';
import { Plus, Minus } from 'lucide-react';

/**
 * ExpandableSection - 접이식 상세 정보 컴포넌트
 *
 * akus Quiet Interaction:
 * - 경계선으로만 섹션 구분
 * - 아이콘: Plus/Minus (조용한 크기)
 * - 애니메이션: 부드러운 확장/축소
 * - 텍스트: 명도 차이로만 강조
 */
const ExpandableSection = ({
  title,
  children,
  defaultExpanded = false,
  sx,
  ...props
}) => {
  const [expanded, setExpanded] = useState(defaultExpanded);

  const handleToggle = () => {
    setExpanded((prev) => !prev);
  };

  return (
    <Box
      {...props}
      sx={{
        borderTop: '1px solid',
        borderColor: 'secondary.main',
        opacity: 0.4,
        ...sx,
      }}
    >
      {/* Header */}
      <Box
        onClick={handleToggle}
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          py: 3,
          cursor: 'pointer',
          transition: 'opacity 0.2s ease',
          '&:hover': {
            opacity: 0.7,
          },
        }}
      >
        <Typography
          sx={{
            fontSize: '0.75rem',
            fontWeight: 400,
            letterSpacing: '0.15em',
            textTransform: 'uppercase',
            color: 'primary.main',
          }}
        >
          {title}
        </Typography>

        {/* Toggle Icon */}
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'primary.main',
            transition: 'transform 0.3s ease',
          }}
        >
          {expanded ? (
            <Minus size={16} strokeWidth={1.5} />
          ) : (
            <Plus size={16} strokeWidth={1.5} />
          )}
        </Box>
      </Box>

      {/* Content */}
      <Collapse in={expanded} timeout={400}>
        <Box
          sx={{
            pb: 3,
            fontSize: '0.875rem',
            lineHeight: 1.7,
            letterSpacing: '0.01em',
            color: 'text.primary',
            opacity: 0.85,
            '& p': {
              margin: 0,
              mb: 1.5,
              '&:last-child': {
                mb: 0,
              },
            },
            '& ul, & ol': {
              margin: 0,
              pl: 2.5,
              mb: 1.5,
            },
            '& li': {
              mb: 0.5,
            },
          }}
        >
          {children}
        </Box>
      </Collapse>
    </Box>
  );
};

export default ExpandableSection;
