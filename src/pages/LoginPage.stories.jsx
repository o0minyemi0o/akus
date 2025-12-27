import LoginPage from './LoginPage';

/**
 * LoginPage - 로그인 페이지
 *
 * akus Editorial Minimalism을 적용한 로그인 페이지
 * - 중앙 정렬 레이아웃
 * - 여백이 많은 구성
 * - 조용한 브랜드 워드마크
 */
export default {
  title: '5. PAGES/LoginPage',
  component: LoginPage,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
};

/**
 * 기본 로그인 페이지
 *
 * 테스트 계정:
 * - test@akus.com / 1234
 * - demo@akus.com / demo
 */
export const Default = {};
