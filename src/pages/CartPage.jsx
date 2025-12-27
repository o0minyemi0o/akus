import { useState } from 'react';
import { Box } from '@mui/material';
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
const CartPage = () => {
  // TODO: 실제 장바구니 상태 관리로 교체 (Context API, Redux, Zustand 등)
  const [items, setItems] = useState([
    {
      id: 1,
      image: '/src/assets/product/collection1.jpg',
      name: 'Stone Soap Dish',
      category: 'CERAMIC',
      price: 48000,
      quantity: 1,
      options: { color: 'Natural Stone' },
    },
    {
      id: 2,
      image: '/src/assets/product/collection2.jpg',
      name: 'Linen Bath Towel',
      category: 'TEXTILE',
      price: 62000,
      quantity: 2,
      options: { color: 'Beige', size: 'Standard' },
    },
    {
      id: 3,
      image: '/src/assets/product/collection4.jpg',
      name: 'Clay Vase',
      category: 'CERAMIC',
      price: 72000,
      quantity: 1,
      options: { size: 'Medium' },
    },
  ]);

  const handleQuantityChange = (id, newQuantity) => {
    setItems((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  const handleRemove = (id) => {
    setItems((prev) => prev.filter((item) => item.id !== id));
  };

  const handleCheckout = () => {
    console.log('Checkout:', items);
    alert('Proceeding to checkout...');
    // TODO: 실제 체크아웃 페이지로 이동
  };

  const subtotal = items.reduce((sum, item) => sum + item.price * item.quantity, 0);
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
