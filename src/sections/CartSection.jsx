import { Box, Grid, Typography } from '@mui/material';
import CartItem from '../components/cart/CartItem';
import OrderSummary from '../components/cart/OrderSummary';

/**
 * CartSection - 장바구니 섹션
 *
 * akus Cart Layout:
 * - 좌우 분할 (60-70% 아이템 리스트 / 30-40% 주문 요약)
 * - 좌측: 장바구니 아이템 목록
 * - 우측: 주문 요약 (sticky)
 * - 반응형: 모바일에서는 세로 배치
 */
const CartSection = ({
  items = [],
  subtotal = 0,
  shipping = 0,
  total = 0,
  shippingNote,
  onQuantityChange,
  onRemove,
  onCheckout,
  sx,
  ...props
}) => {
  // Empty cart state
  if (!items || items.length === 0) {
    return (
      <Box
        sx={{
          textAlign: 'center',
          py: 10,
          px: 4,
          ...sx,
        }}
      >
        <Typography
          sx={{
            fontSize: '1rem',
            color: 'text.secondary',
            letterSpacing: '0.05em',
            mb: 1,
          }}
        >
          Your cart is empty
        </Typography>
        <Typography
          sx={{
            fontSize: '0.875rem',
            color: 'text.secondary',
            opacity: 0.7,
          }}
        >
          Add items to get started
        </Typography>
      </Box>
    );
  }

  return (
    <Box
      {...props}
      sx={{
        width: '100%',
        ...sx,
      }}
    >
      <Grid container spacing={{ xs: 4, md: 6, lg: 8 }}>
        {/* Left: Cart Items */}
        <Grid size={{ xs: 12, md: 7, lg: 8 }}>
          <Box>
            {/* Cart Title */}
            <Typography
              sx={{
                fontSize: '0.75rem',
                fontWeight: 400,
                letterSpacing: '0.15em',
                textTransform: 'uppercase',
                color: 'primary.main',
                mb: 4,
              }}
            >
              Shopping Cart ({items.length} {items.length === 1 ? 'item' : 'items'})
            </Typography>

            {/* Cart Items List */}
            <Box>
              {items.map((item, index) => (
                <CartItem
                  key={`${item.id}-${index}`}
                  image={item.image}
                  name={item.name}
                  category={item.category}
                  price={item.price}
                  quantity={item.quantity}
                  options={item.options}
                  onQuantityChange={(newQuantity) =>
                    onQuantityChange?.(item.id, item.options, newQuantity)
                  }
                  onRemove={() => onRemove?.(item.id, item.options)}
                />
              ))}
            </Box>
          </Box>
        </Grid>

        {/* Right: Order Summary */}
        <Grid size={{ xs: 12, md: 5, lg: 4 }}>
          <Box
            sx={{
              pt: { xs: 0, md: 7 },
              display: 'flex',
              justifyContent: { xs: 'center', md: 'flex-start' },
            }}
          >
            <Box sx={{ maxWidth: 400, width: '100%' }}>
              <OrderSummary
                subtotal={subtotal}
                shipping={shipping}
                total={total}
                shippingNote={shippingNote}
                onCheckout={onCheckout}
              />
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default CartSection;
