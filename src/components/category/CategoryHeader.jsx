import { Box, Typography } from '@mui/material';

/**
 * CategoryHeader - 카테고리 페이지 헤더
 *
 * akus Editorial Minimalism:
 * - 대제목 (Serif)
 * - 한 줄 설명 (선택)
 * - 여백 충분
 * - 배경 이미지 옵션 (있으면 오버레이)
 */
const CategoryHeader = ({
  title,
  description,
  backgroundImage,
  minHeight = '30vh',
  sx,
  ...props
}) => {
  return (
    <Box
      {...props}
      sx={{
        position: 'relative',
        width: '100%',
        minHeight,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'flex-start',
        px: { xs: 3, sm: 4, md: 6, lg: 8 },
        py: { xs: 6, md: 8, lg: 10 },
        bgcolor: backgroundImage ? 'transparent' : 'background.paper',
        overflow: 'hidden',
        ...sx,
      }}
    >
      {/* Background Image (optional) */}
      {backgroundImage && (
        <>
          <Box
            sx={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              backgroundImage: `url(${backgroundImage})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              opacity: 0.15,
              zIndex: 0,
            }}
          />
          {/* Subtle gradient overlay */}
          <Box
            sx={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              background: 'linear-gradient(to bottom, rgba(244, 241, 236, 0.6), rgba(244, 241, 236, 0.9))',
              zIndex: 1,
            }}
          />
        </>
      )}

      {/* Content */}
      <Box
        sx={{
          position: 'relative',
          zIndex: 2,
          maxWidth: '800px',
        }}
      >
        {/* Category Title */}
        <Typography
          variant="h1"
          component="h1"
          sx={{
            fontSize: { xs: '2.5rem', md: '3.5rem', lg: '4rem' },
            fontWeight: 400,
            lineHeight: 1.2,
            letterSpacing: '0.02em',
            color: 'primary.main',
            mb: description ? 3 : 0,
          }}
        >
          {title}
        </Typography>

        {/* Description (optional) */}
        {description && (
          <Typography
            sx={{
              fontSize: { xs: '1rem', md: '1.125rem' },
              fontWeight: 300,
              lineHeight: 1.6,
              letterSpacing: '0.01em',
              color: 'text.primary',
              opacity: 0.85,
              maxWidth: '600px',
            }}
          >
            {description}
          </Typography>
        )}
      </Box>
    </Box>
  );
};

export default CategoryHeader;
