import { Box } from '@mui/material';
import { useCart } from '../contexts/CartContext';
import PageWithNav from '../templates/layout/PageWithNav';
import CartSection from '../sections/CartSection';

/**
 * CartPage - 장바구니 페이지
 *
 * akus Minimal Cart:
 * - AppShell: CategoryNav, Header, Footer 관리 (App.jsx에서 적용)
 * - PageWithNav: 좌측 네비게이션 공간
 * - CartSection: 장바구니 아이템 + 주문 요약
 *
 * 구조:
 * 1. PageWithNav (128px 좌측 네비게이션 공간)
 * 2. CartSection
 */
const CartPage = ({
  // Storybook props (선택적)
  items: itemsProp,
  subtotal: subtotalProp,
  shipping: shippingProp,
  total: totalProp,
  shippingNote,
  onQuantityChange: onQuantityChangeProp,
  onRemove: onRemoveProp,
  onCheckout: onCheckoutProp,
}) => {
  const cartContext = useCart();

  // Storybook mode: props가 제공된 경우
  if (itemsProp !== undefined) {
    return (
      <PageWithNav>
        <Box
          sx={{
            px: { xs: 3, sm: 4, md: 6, lg: 8 },
            py: { xs: 6, md: 8, lg: 10 },
            minHeight: '60vh',
          }}
        >
          <CartSection
            items={itemsProp}
            subtotal={subtotalProp}
            shipping={shippingProp}
            total={totalProp}
            shippingNote={shippingNote}
            onQuantityChange={onQuantityChangeProp}
            onRemove={onRemoveProp}
            onCheckout={onCheckoutProp}
          />
        </Box>
      </PageWithNav>
    );
  }

  // App mode: CartContext 사용
  const { items, updateQuantity, removeItem, getSubtotal } = cartContext;

  const handleQuantityChange = (id, options, newQuantity) => {
    updateQuantity(id, options, newQuantity);
  };

  const handleRemove = (id, options) => {
    removeItem(id, options);
  };

  const handleCheckout = () => {
    console.log('Checkout:', items);
    alert('Proceeding to checkout...');
    // TODO: 실제 체크아웃 페이지로 이동
  };

  const subtotal = getSubtotal();
  const shipping = subtotal >= 50000 ? 0 : 3000;
  const total = subtotal + shipping;

  return (
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
          shippingNote="Free shipping on orders over ₩50,000"
          onQuantityChange={handleQuantityChange}
          onRemove={handleRemove}
          onCheckout={handleCheckout}
        />
      </Box>
    </PageWithNav>
  );
};

export default CartPage;
