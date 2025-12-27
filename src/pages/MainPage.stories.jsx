import MainPage from './MainPage';

export default {
  title: '5. Pages/MainPage',
  component: MainPage,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: `
# MainPage

메인 랜딩 페이지

## 구조

- HeroSection: 히어로 이미지 + 자체 카테고리 네비게이션
- BrandStorySection: 브랜드 스토리 + 가로 스크롤 이미지
- ProductSection: 제품 컬렉션 그리드

## 특징

- AppShell의 좌측 CategoryNav는 MainPage에서만 숨김
- HeroSection 내부에 자체 카테고리 네비게이션 포함
- 전체 너비를 활용한 레이아웃
        `,
      },
    },
  },
  decorators: [],
};

/**
 * Default: 기본 MainPage (실제 데이터 사용)
 */
export const Default = {
  render: () => <MainPage />,
};
