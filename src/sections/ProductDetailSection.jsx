import { Box, Grid } from '@mui/material';
import ProductImageGallery from '../components/product/ProductImageGallery';
import ProductInfo from '../components/product/ProductInfo';
import ProductOptions from '../components/product/ProductOptions';
import ExpandableSection from '../components/common/ExpandableSection';

/**
 * ProductDetailSection - 제품 상세 페이지 메인 섹션
 *
 * akus Editorial Layout:
 * - 좌우 분할 (60-70% 이미지 / 30-40% 정보)
 * - 좌측: 대형 이미지 갤러리 (여백 충분)
 * - 우측: 제품 정보 + 옵션 + 상세 정보 (스크롤 고정)
 * - 반응형: 모바일에서는 세로 배치
 */
const ProductDetailSection = ({
  images = [],
  name,
  category,
  price,
  description,
  colors,
  sizes,
  details = {},
  onAddToCart,
  sx,
  ...props
}) => {
  return (
    <Box
      {...props}
      sx={{
        width: '100%',
        ...sx,
      }}
    >
      <Grid container spacing={{ xs: 4, md: 3, lg: 4 }}>
        {/* Left: Image Gallery */}
        <Grid size={{ xs: 12, md: 6, lg: 6 }}>
          <ProductImageGallery
            images={images}
            aspectRatio="3/4"
            sx={{
              position: 'sticky',
              top: 0,
              pt: { xs: 0, md: 4 },
              maxWidth: { md: '450px', lg: '500px' },
            }}
          />
        </Grid>

        {/* Right: Product Info */}
        <Grid size={{ xs: 12, md: 6, lg: 5 }}>
          <Box
            sx={{
              pt: { xs: 2, md: 4 },
              pb: 8,
              maxWidth: { md: '400px', lg: '420px' },
            }}
          >
            {/* Basic Info */}
            <ProductInfo
              name={name}
              category={category}
              price={price}
              description={description}
              sx={{ mb: 4 }}
            />

            {/* Options (if provided) */}
            {(colors || sizes) && (
              <ProductOptions
                colors={colors}
                sizes={sizes}
                onAddToCart={onAddToCart}
                sx={{ mb: 4 }}
              />
            )}

            {/* Expandable Details */}
            <Box>
              {details.material && (
                <ExpandableSection title="Material" defaultExpanded>
                  {details.material}
                </ExpandableSection>
              )}

              {details.dimensions && (
                <ExpandableSection title="Dimensions">
                  {details.dimensions}
                </ExpandableSection>
              )}

              {details.care && (
                <ExpandableSection title="Care">{details.care}</ExpandableSection>
              )}

              {details.philosophy && (
                <ExpandableSection title="Philosophy">
                  {details.philosophy}
                </ExpandableSection>
              )}
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default ProductDetailSection;
