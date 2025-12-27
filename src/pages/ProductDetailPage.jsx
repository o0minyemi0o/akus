import { Box } from '@mui/material';
import { useParams, useNavigate } from 'react-router-dom';
import { useCart } from '../contexts/CartContext';
import PageWithNav from '../templates/layout/PageWithNav';
import ProductDetailSection from '../sections/ProductDetailSection';
import { getProductById } from '../data/products';

/**
 * ProductDetailPage - 제품 상세 페이지
 *
 * akus Editorial Minimalism:
 * - AppShell: CategoryNav, Header, Footer 관리 (App.jsx에서 적용)
 * - PageWithNav: 좌측 네비게이션 공간 (MainPage와 일관성)
 * - ProductDetailSection: 제품 정보 + 이미지 갤러리
 *
 * 구조:
 * 1. PageWithNav (128px 좌측 네비게이션 공간)
 * 2. ProductDetailSection (좌우 분할 레이아웃)
 */
const ProductDetailPage = ({
  // Storybook props (선택적)
  images: imagesProp,
  name,
  category,
  price,
  description,
  colors,
  sizes,
  details,
  onAddToCart: onAddToCartProp,
}) => {
  const params = useParams();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const productId = params?.productId;
  const product = productId ? getProductById(productId) : null;

  // Storybook mode: props가 제공된 경우 (AppShell 없이 순수 컨텐츠만)
  if (imagesProp) {
    const handleAddToCart = onAddToCartProp || ((selectedColor, selectedSize, quantity) => {
      console.log('Add to cart:', { name, selectedColor, selectedSize, quantity });
      alert(`Added ${quantity} ${name} to cart`);
    });

    return (
      <Box>
        <PageWithNav>
          <Box sx={{ px: { xs: 2, sm: 4, md: 6, lg: 8 }, py: { xs: 4, md: 6, lg: 8 } }}>
            <ProductDetailSection
              images={imagesProp}
              name={name}
              category={category}
              price={price}
              description={description}
              colors={colors}
              sizes={sizes}
              details={details}
              onAddToCart={handleAddToCart}
            />
          </Box>
        </PageWithNav>
      </Box>
    );
  }

  // App mode: URL params 사용
  if (!product) {
    return (
      <Box sx={{ p: 4, textAlign: 'center' }}>
        <p>Product not found</p>
      </Box>
    );
  }

  const handleAddToCart = (selectedColor, selectedSize, quantity) => {
    const options = {};
    if (selectedColor) options.color = selectedColor;
    if (selectedSize) options.size = selectedSize;

    addToCart(
      {
        id: product.id,
        name: product.name,
        category: product.category,
        price: product.price,
        image: product.images[0],
      },
      options,
      quantity
    );

    // 장바구니로 이동할지 물어보기
    const goToCart = window.confirm(`Added ${quantity} ${product.name} to cart.\n\nGo to cart?`);
    if (goToCart) {
      navigate('/cart');
    }
  };

  return (
    <PageWithNav>
      <Box sx={{ px: { xs: 2, sm: 4, md: 6, lg: 8 }, py: { xs: 4, md: 6, lg: 8 } }}>
        <ProductDetailSection
          images={product.images}
          name={product.name}
          category={product.category}
          price={product.price}
          description={product.description}
          colors={product.colors}
          sizes={product.sizes}
          details={product.details}
          onAddToCart={handleAddToCart}
        />
      </Box>
    </PageWithNav>
  );
};

export default ProductDetailPage;
