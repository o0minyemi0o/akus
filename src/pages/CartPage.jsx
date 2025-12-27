import { Box } from '@mui/material';
import PageWithNav from '../templates/layout/PageWithNav';
import CartSection from '../sections/CartSection';
import Footer from '../templates/Footer';

/**
 * CartPage - 장바구니 페이지
 *
 * akus Minimal Cart:
 * - PageWithNav: 좌측 네비게이션 유지
 * - CartSection: 장바구니 아이템 + 주문 요약
 * - Footer: 전체 너비
 *
 * 구조:
 * 1. PageWithNav (128px 좌측 네비게이션 공간)
 * 2. CartSection
 * 3. Footer
 */
const CartPage = ({
  items = [],
  subtotal = 0,
  shipping = 0,
  total = 0,
  shippingNote,
  onQuantityChange,
  onRemove,
  onCheckout,
  ...props
}) => {
  return (
    <Box {...props}>
      {/* Main Content with Navigation */}
      <PageWithNav>
        {/* Cart Section */}
        <Box
          sx={{
            px: { xs: 3, sm: 4, md: 6, lg: 8 },
            py: { xs: 6, md: 8, lg: 10 },
            minHeight: '60vh',
          }}
        >
          <CartSection
            items={items}
            subtotal={subtotal}
            shipping={shipping}
            total={total}
            shippingNote={shippingNote}
            onQuantityChange={onQuantityChange}
            onRemove={onRemove}
            onCheckout={onCheckout}
          />
        </Box>
      </PageWithNav>

      {/* Footer - Full Width */}
      <Box
        sx={{
          width: '100%',
          position: 'relative',
          zIndex: 900,
        }}
      >
        <Footer />
      </Box>
    </Box>
  );
};

export default CartPage;
