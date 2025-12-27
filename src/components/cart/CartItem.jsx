import { Box, Typography, IconButton } from '@mui/material';
import { X } from 'lucide-react';
import ProductImage from '../product/ProductImage';
import QuantitySelector from './QuantitySelector';

/**
 * CartItem - 장바구니 아이템 컴포넌트
 *
 * akus Minimal Cart Item:
 * - 좌측: 작은 썸네일 이미지
 * - 중앙: 제품명, 옵션, 가격
 * - 우측: 수량 조절 + 삭제 버튼
 * - 조용한 구분선
 */
const CartItem = ({
  image,
  name,
  category,
  price,
  quantity = 1,
  options,
  onQuantityChange,
  onRemove,
  sx,
  ...props
}) => {
  return (
    <Box
      {...props}
      sx={{
        display: 'flex',
        gap: { xs: 2, md: 3 },
        py: 4,
        borderBottom: '1px solid',
        borderColor: 'secondary.main',
        borderBottomOpacity: 0.3,
        position: 'relative',
        ...sx,
      }}
    >
      {/* Product Image */}
      <Box
        sx={{
          flexShrink: 0,
          width: { xs: 80, sm: 100, md: 120 },
        }}
      >
        <ProductImage
          src={image}
          alt={name}
          aspectRatio="4/5"
        />
      </Box>

      {/* Product Info */}
      <Box
        sx={{
          flex: 1,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          minWidth: 0,
        }}
      >
        {/* Top Section: Name & Category */}
        <Box>
          {category && (
            <Typography
              sx={{
                fontSize: '0.6875rem',
                letterSpacing: '0.15em',
                textTransform: 'uppercase',
                color: 'secondary.main',
                mb: 0.5,
              }}
            >
              {category}
            </Typography>
          )}
          <Typography
            sx={{
              fontSize: { xs: '0.9375rem', md: '1rem' },
              fontWeight: 400,
              color: 'primary.main',
              mb: 1,
              lineHeight: 1.4,
            }}
          >
            {name}
          </Typography>

          {/* Options */}
          {options && (
            <Box sx={{ display: 'flex', gap: 1.5, flexWrap: 'wrap', mb: 1 }}>
              {options.color && (
                <Typography
                  sx={{
                    fontSize: '0.75rem',
                    color: 'text.secondary',
                    opacity: 0.7,
                  }}
                >
                  Color: {options.color}
                </Typography>
              )}
              {options.size && (
                <Typography
                  sx={{
                    fontSize: '0.75rem',
                    color: 'text.secondary',
                    opacity: 0.7,
                  }}
                >
                  Size: {options.size}
                </Typography>
              )}
            </Box>
          )}
        </Box>

        {/* Bottom Section: Price & Quantity */}
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: 2,
            mt: 2,
          }}
        >
          {/* Price */}
          <Typography
            sx={{
              fontSize: '0.9375rem',
              fontWeight: 400,
              color: 'primary.main',
            }}
          >
            {typeof price === 'number' ? `₩${price.toLocaleString()}` : price}
          </Typography>

          {/* Quantity Selector */}
          <QuantitySelector
            value={quantity}
            onChange={onQuantityChange}
            size="small"
          />
        </Box>
      </Box>

      {/* Remove Button */}
      <IconButton
        onClick={onRemove}
        size="small"
        sx={{
          position: 'absolute',
          top: 12,
          right: 0,
          width: 32,
          height: 32,
          color: 'secondary.main',
          transition: 'all 0.2s ease',
          '&:hover': {
            color: 'primary.main',
            bgcolor: 'transparent',
          },
        }}
      >
        <X size={16} strokeWidth={1.5} />
      </IconButton>
    </Box>
  );
};

export default CartItem;
