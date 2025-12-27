import { useState } from 'react';
import { Box, Typography, Button } from '@mui/material';

/**
 * ProductOptions - 제품 옵션 선택 컴포넌트
 *
 * akus Minimal Interaction:
 * - 색상/사이즈 선택: 명도 차이로만 구분
 * - 버튼: 조용한 경계선 스타일 (배경 채우기 ❌)
 * - 수량: 최소 UI
 * - 호버: 미세한 변화만
 */
const ProductOptions = ({
  colors = [],
  sizes = [],
  onAddToCart,
  sx,
  ...props
}) => {
  const [selectedColor, setSelectedColor] = useState(colors[0]?.value || null);
  const [selectedSize, setSelectedSize] = useState(sizes[0]?.value || null);
  const [quantity, setQuantity] = useState(1);

  const handleAddToCart = () => {
    if (onAddToCart) {
      onAddToCart({
        color: selectedColor,
        size: selectedSize,
        quantity,
      });
    }
  };

  const handleQuantityChange = (delta) => {
    setQuantity((prev) => Math.max(1, prev + delta));
  };

  return (
    <Box
      {...props}
      sx={{
        ...sx,
      }}
    >
      {/* Color Selection */}
      {colors && colors.length > 0 && (
        <Box sx={{ mb: 3 }}>
          <Typography
            sx={{
              fontSize: '0.625rem',
              fontWeight: 400,
              letterSpacing: '0.15em',
              textTransform: 'uppercase',
              color: 'secondary.main',
              mb: 1.5,
            }}
          >
            Color
          </Typography>
          <Box sx={{ display: 'flex', gap: 1 }}>
            {colors.map((color) => (
              <Box
                key={color.value}
                onClick={() => setSelectedColor(color.value)}
                sx={{
                  width: 36,
                  height: 36,
                  bgcolor: color.hex || 'background.paper',
                  border: '1px solid',
                  borderColor:
                    selectedColor === color.value ? 'primary.main' : 'transparent',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease',
                  '&:hover': {
                    borderColor: 'primary.main',
                    opacity: 0.8,
                  },
                }}
                title={color.label}
              />
            ))}
          </Box>
        </Box>
      )}

      {/* Size Selection */}
      {sizes && sizes.length > 0 && (
        <Box sx={{ mb: 3 }}>
          <Typography
            sx={{
              fontSize: '0.625rem',
              fontWeight: 400,
              letterSpacing: '0.15em',
              textTransform: 'uppercase',
              color: 'secondary.main',
              mb: 1.5,
            }}
          >
            Size
          </Typography>
          <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap' }}>
            {sizes.map((size) => (
              <Box
                key={size.value}
                onClick={() => setSelectedSize(size.value)}
                sx={{
                  px: 2.5,
                  py: 1.25,
                  border: '1px solid',
                  borderColor:
                    selectedSize === size.value ? 'primary.main' : 'secondary.main',
                  bgcolor:
                    selectedSize === size.value ? 'primary.main' : 'transparent',
                  color: selectedSize === size.value ? 'background.default' : 'primary.main',
                  fontSize: '0.8125rem',
                  letterSpacing: '0.05em',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease',
                  opacity: selectedSize === size.value ? 1 : 0.6,
                  '&:hover': {
                    opacity: 1,
                    borderColor: 'primary.main',
                  },
                }}
              >
                {size.label}
              </Box>
            ))}
          </Box>
        </Box>
      )}

      {/* Quantity Selector */}
      <Box sx={{ mb: 3 }}>
        <Typography
          sx={{
            fontSize: '0.625rem',
            fontWeight: 400,
            letterSpacing: '0.15em',
            textTransform: 'uppercase',
            color: 'secondary.main',
            mb: 1.5,
          }}
        >
          Quantity
        </Typography>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
          <Button
            onClick={() => handleQuantityChange(-1)}
            disabled={quantity <= 1}
            sx={{
              minWidth: 36,
              width: 36,
              height: 36,
              p: 0,
              border: '1px solid',
              borderColor: 'secondary.main',
              color: 'primary.main',
              bgcolor: 'transparent',
              fontSize: '1rem',
              '&:hover': {
                bgcolor: 'transparent',
                borderColor: 'primary.main',
              },
              '&:disabled': {
                opacity: 0.3,
                borderColor: 'secondary.main',
              },
            }}
          >
            −
          </Button>
          <Typography
            sx={{
              minWidth: 40,
              textAlign: 'center',
              fontSize: '0.875rem',
              fontFamily: 'monospace',
            }}
          >
            {quantity}
          </Typography>
          <Button
            onClick={() => handleQuantityChange(1)}
            sx={{
              minWidth: 36,
              width: 36,
              height: 36,
              p: 0,
              border: '1px solid',
              borderColor: 'secondary.main',
              color: 'primary.main',
              bgcolor: 'transparent',
              fontSize: '1rem',
              '&:hover': {
                bgcolor: 'transparent',
                borderColor: 'primary.main',
              },
            }}
          >
            +
          </Button>
        </Box>
      </Box>

      {/* Add to Cart Button - Quiet Style */}
      <Button
        onClick={handleAddToCart}
        fullWidth
        sx={{
          py: 2,
          border: '1px solid',
          borderColor: 'primary.main',
          color: 'primary.main',
          bgcolor: 'transparent',
          fontSize: '0.8125rem',
          fontWeight: 400,
          letterSpacing: '0.1em',
          textTransform: 'uppercase',
          transition: 'all 0.25s ease',
          '&:hover': {
            bgcolor: 'primary.main',
            color: 'background.default',
          },
        }}
      >
        Add to Cart
      </Button>
    </Box>
  );
};

export default ProductOptions;
