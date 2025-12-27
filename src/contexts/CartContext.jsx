import { createContext, useContext, useState, useEffect } from 'react';
import { useAuth } from './AuthContext';

const CartContext = createContext();

export function CartProvider({ children }) {
  const { user } = useAuth();

  // 사용자별 localStorage 키 생성
  const getCartKey = () => {
    return user ? `akus-cart-${user.id}` : 'akus-cart';
  };

  const loadCart = () => {
    const cartKey = getCartKey();
    const savedCart = localStorage.getItem(cartKey);
    if (!savedCart) return [];

    try {
      const parsed = JSON.parse(savedCart);

      // 데이터 마이그레이션 및 정리
      return parsed
        .map(item => {
          if (!item || typeof item.id === 'undefined') return null;

          // 잘못된 형식: options에 quantity가 포함된 경우
          if (item.options && typeof item.options === 'object') {
            const { quantity: optionsQuantity, color, size } = item.options;

            // quantity가 options 안에 있으면 꺼내기
            const fixedItem = {
              ...item,
              quantity: optionsQuantity || item.quantity || 1,
              options: color || size ? { color, size } : {},
            };

            return fixedItem;
          }

          // quantity가 없으면 기본값 설정
          if (typeof item.quantity !== 'number') {
            return { ...item, quantity: 1 };
          }

          return item;
        })
        .filter(item => item !== null);
    } catch (e) {
      console.warn('Failed to parse cart data:', e);
      return [];
    }
  };

  const [items, setItems] = useState(loadCart);

  // 사용자 변경 시 장바구니 다시 로드
  useEffect(() => {
    setItems(loadCart());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user]);

  // 장바구니 변경 시 localStorage에 저장 (사용자별 키 사용)
  useEffect(() => {
    const cartKey = getCartKey();
    localStorage.setItem(cartKey, JSON.stringify(items));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [items]);

  const addToCart = (product, options = {}, quantity = 1) => {
    setItems((prev) => {
      // 동일한 제품과 옵션이 있는지 확인
      const existingItemIndex = prev.findIndex(
        (item) =>
          item.id === product.id &&
          JSON.stringify(item.options) === JSON.stringify(options)
      );

      if (existingItemIndex > -1) {
        // 이미 있으면 수량 증가
        const updated = [...prev];
        updated[existingItemIndex].quantity += quantity;
        return updated;
      } else {
        // 새 아이템 추가
        return [
          ...prev,
          {
            id: product.id,
            image: product.image,
            name: product.name,
            category: product.category,
            price: product.price,
            quantity,
            options,
          },
        ];
      }
    });
  };

  const updateQuantity = (id, options, newQuantity) => {
    if (newQuantity <= 0) {
      removeItem(id, options);
      return;
    }

    setItems((prev) =>
      prev.map((item) =>
        item.id === id && JSON.stringify(item.options) === JSON.stringify(options)
          ? { ...item, quantity: newQuantity }
          : item
      )
    );
  };

  const removeItem = (id, options) => {
    setItems((prev) =>
      prev.filter(
        (item) =>
          !(item.id === id && JSON.stringify(item.options) === JSON.stringify(options))
      )
    );
  };

  const clearCart = () => {
    setItems([]);
  };

  const getTotalItems = () => {
    return items.reduce((sum, item) => sum + item.quantity, 0);
  };

  const getSubtotal = () => {
    return items.reduce((sum, item) => sum + item.price * item.quantity, 0);
  };

  const value = {
    items,
    addToCart,
    updateQuantity,
    removeItem,
    clearCart,
    getTotalItems,
    getSubtotal,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within CartProvider');
  }
  return context;
}
