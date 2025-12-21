import { Box } from '@mui/material';
import Motto from '../templates/Motto';
import StaticImage from '../components/media/StaticImage';
import ContentInset from '../templates/layout/ContentInset';

/**
 * BrandStorySectionTemp - 브랜드 스토리를 전달하는 섹션 (임시)
 *
 * Motto 텍스트와 이미지를 조합하여
 * 브랜드의 철학과 감성을 전달
 *
 * 레이아웃 옵션:
 * - textOnly: 텍스트만
 * - imageTop: 이미지 위 + 텍스트 아래
 * - imageBottom: 텍스트 위 + 이미지 아래
 * - sideBySide: 이미지와 텍스트 좌우 배치
 */
const BrandStorySectionTemp = ({
  text,
  imageSrc,
  layout = 'imageTop',
  backgroundColor = 'background.default',
  sx,
  ...props
}) => {
  return (
    <Box
      component="section"
      {...props}
      sx={{
        bgcolor: backgroundColor,
        ...sx,
      }}
    >
      {/* Image Top Layout */}
      {layout === 'imageTop' && imageSrc && (
        <>
          <Box
            sx={{
              width: '100%',
              height: { xs: '50vh', md: '60vh' },
            }}
          >
            <StaticImage
              src={imageSrc}
              alt="Brand Story"
              sx={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
              }}
            />
          </Box>
          <Motto text={text} />
        </>
      )}

      {/* Image Bottom Layout */}
      {layout === 'imageBottom' && (
        <>
          <Motto text={text} />
          {imageSrc && (
            <Box
              sx={{
                width: '100%',
                height: { xs: '50vh', md: '60vh' },
              }}
            >
              <StaticImage
                src={imageSrc}
                alt="Brand Story"
                sx={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                }}
              />
            </Box>
          )}
        </>
      )}

      {/* Text Only Layout */}
      {layout === 'textOnly' && <Motto text={text} />}

      {/* Side by Side Layout */}
      {layout === 'sideBySide' && (
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            minHeight: { md: '80vh' },
          }}
        >
          {imageSrc && (
            <Box
              sx={{
                width: { xs: '100%', md: '50%' },
                height: { xs: '50vh', md: 'auto' },
              }}
            >
              <StaticImage
                src={imageSrc}
                alt="Brand Story"
                sx={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                }}
              />
            </Box>
          )}
          <Box
            sx={{
              width: { xs: '100%', md: '50%' },
              display: 'flex',
              alignItems: 'center',
              py: { xs: 8, md: 12 },
            }}
          >
            <ContentInset maxWidth="600px">
              <Motto text={text} sx={{ py: 0 }} />
            </ContentInset>
          </Box>
        </Box>
      )}
    </Box>
  );
};

export default BrandStorySectionTemp;
