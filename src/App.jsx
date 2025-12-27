import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import AppShell from './templates/layout/AppShell';
import MainPage from './pages/MainPage';
import ProductDetailPage from './pages/ProductDetailPage';
import CategoryPage from './pages/CategoryPage';
import CartPage from './pages/CartPage';

/**
 * ScrollToTop - 페이지 전환 시 스크롤을 맨 위로 이동
 */
function ScrollToTop() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return null;
}

/**
 * AppContent - AppShell과 Routes를 연결
 */
function AppContent() {
  return (
    <>
      <ScrollToTop />
      <AppShell>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/category/:categoryId" element={<CategoryPage />} />
          <Route path="/product/:productId" element={<ProductDetailPage />} />
          <Route path="/cart" element={<CartPage />} />
        </Routes>
      </AppShell>
    </>
  );
}

/**
 * App - akus 메인 애플리케이션
 *
 * 구조:
 * - AppShell: 전역 레이아웃 (CategoryNav, Header, Footer)
 * - Routes: 각 페이지별 라우팅
 *
 * 라우트 구조:
 * - / : MainPage (메인 페이지) - Header, Footer, CategoryNav 모두 숨김
 * - /category/:categoryId : CategoryPage (카테고리 페이지)
 * - /product/:productId : ProductDetailPage (제품 상세)
 * - /cart : CartPage (장바구니)
 */
function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}

export default App;
