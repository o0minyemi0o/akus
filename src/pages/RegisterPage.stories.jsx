import RegisterPage from './RegisterPage';

/**
 * RegisterPage - 회원가입 페이지
 *
 * akus Editorial Minimalism을 적용한 회원가입 페이지
 * - 중앙 정렬 레이아웃
 * - 여백이 많은 구성
 * - 조용한 브랜드 워드마크
 */
export default {
  title: '5. PAGES/RegisterPage',
  component: RegisterPage,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
};

/**
 * 기본 회원가입 페이지
 *
 * 새 계정을 만들 수 있습니다.
 * 이메일 중복 시 에러 메시지가 표시됩니다.
 */
export const Default = {};
