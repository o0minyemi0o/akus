import { Box, Typography } from '@mui/material';

/**
 * CollectionTitle - 제품 컬렉션 제목 컴포넌트
 *
 * akus의 Silent Luxury 철학:
 * - 절제된 타이포그래피
 * - 여백을 통한 호흡
 * - 옵션: 영문 제목 + 한글 설명
 */
const CollectionTitle = ({
  title,
  subtitle,
  description,
  align = 'left',
  sx,
  ...props
}) => {
  return (
    <Box
      {...props}
      sx={{
        textAlign: align,
        ...sx,
      }}
    >
      {/* Subtitle (카테고리 등) */}
      {subtitle && (
        <Typography
          variant="body2"
          sx={{
            fontSize: '0.75rem',
            letterSpacing: '0.08em',
            textTransform: 'uppercase',
            color: 'text.secondary',
            mb: 1,
          }}
        >
          {subtitle}
        </Typography>
      )}

      {/* Main Title */}
      <Typography
        variant="h3"
        sx={{
          fontFamily: 'Georgia, "Times New Roman", serif',
          fontSize: { xs: '2rem', md: '2.5rem' },
          fontWeight: 400,
          letterSpacing: '0.02em',
          color: 'text.primary',
          mb: description ? 2 : 0,
        }}
      >
        {title}
      </Typography>

      {/* Description */}
      {description && (
        <Typography
          variant="body1"
          sx={{
            fontSize: '1rem',
            lineHeight: 1.8,
            letterSpacing: '0.01em',
            color: 'text.secondary',
            maxWidth: '600px',
            mx: align === 'center' ? 'auto' : 0,
          }}
        >
          {description}
        </Typography>
      )}
    </Box>
  );
};

export default CollectionTitle;
