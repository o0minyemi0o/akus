import { Box, Typography, Button, Divider } from '@mui/material';

/**
 * OrderSummary - 주문 요약 컴포넌트
 *
 * akus Minimal Summary:
 * - 소계, 배송비, 총계
 * - 조용한 구분선
 * - Checkout 버튼 (조용한 스타일)
 * - 여백 충분
 */
const OrderSummary = ({
  subtotal = 0,
  shipping = 0,
  total = 0,
  shippingNote,
  onCheckout,
  sx,
  ...props
}) => {
  const formatPrice = (price) => {
    if (typeof price === 'number') {
      return `₩${price.toLocaleString()}`;
    }
    return price;
  };

  return (
    <Box
      {...props}
      sx={{
        width: '100%',
        px: { xs: 4, md: 6, lg: 8 },
        py: { xs: 4, md: 5, lg: 6 },
        bgcolor: 'background.paper',
        position: 'sticky',
        top: 24,
        ...sx,
      }}
    >
      {/* Title */}
      <Typography
        sx={{
          fontSize: '0.75rem',
          fontWeight: 400,
          letterSpacing: '0.15em',
          textTransform: 'uppercase',
          color: 'primary.main',
          mb: 3,
        }}
      >
        Order Summary
      </Typography>

      {/* Subtotal */}
      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: 'auto 1fr auto',
          alignItems: 'center',
          mb: 2.5,
        }}
      >
        <Typography
          sx={{
            fontSize: '0.875rem',
            color: 'text.secondary',
          }}
        >
          Subtotal
        </Typography>
        <Box />
        <Typography
          sx={{
            fontSize: '0.875rem',
            color: 'primary.main',
            fontFamily: 'monospace',
            textAlign: 'right',
          }}
        >
          {formatPrice(subtotal)}
        </Typography>
      </Box>

      {/* Shipping */}
      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: 'auto 1fr auto',
          alignItems: 'center',
          mb: 3.5,
        }}
      >
        <Typography
          sx={{
            fontSize: '0.875rem',
            color: 'text.secondary',
          }}
        >
          Shipping
        </Typography>
        <Box />
        <Typography
          sx={{
            fontSize: '0.875rem',
            color: 'primary.main',
            fontFamily: 'monospace',
            textAlign: 'right',
          }}
        >
          {shipping === 0 ? 'Free' : formatPrice(shipping)}
        </Typography>
      </Box>

      {/* Shipping Note */}
      {shippingNote && (
        <Typography
          sx={{
            fontSize: '0.75rem',
            color: 'text.secondary',
            opacity: 0.7,
            mb: 3,
            lineHeight: 1.5,
          }}
        >
          {shippingNote}
        </Typography>
      )}

      {/* Divider */}
      <Divider
        sx={{
          borderColor: 'secondary.main',
          opacity: 0.4,
          mb: 3,
        }}
      />

      {/* Total */}
      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: 'auto 1fr auto',
          alignItems: 'center',
          mb: 5,
        }}
      >
        <Typography
          sx={{
            fontSize: '1rem',
            fontWeight: 400,
            color: 'primary.main',
          }}
        >
          Total
        </Typography>
        <Box />
        <Typography
          sx={{
            fontSize: '1.125rem',
            fontWeight: 400,
            color: 'primary.main',
            fontFamily: 'monospace',
            textAlign: 'right',
          }}
        >
          {formatPrice(total)}
        </Typography>
      </Box>

      {/* Checkout Button */}
      <Button
        onClick={onCheckout}
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
        Checkout
      </Button>
    </Box>
  );
};

export default OrderSummary;
