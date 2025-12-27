import LoginForm from './LoginForm';

/**
 * LoginForm - 로그인 폼 컴포넌트
 *
 * akus Silent Luxury 스타일을 적용한 로그인 폼
 * - 조용한 입력 필드 (경계선만)
 * - 여백이 충분한 레이아웃
 * - 미니멀한 버튼
 */
export default {
  title: '2. COMPONENTS/LoginForm',
  component: LoginForm,
  tags: ['autodocs'],
  argTypes: {
    onSubmit: { action: 'submitted' },
    error: {
      control: 'text',
      description: '로그인 실패 시 표시할 에러 메시지',
    },
  },
};

/**
 * 기본 로그인 폼
 */
export const Default = {
  args: {
    error: '',
  },
};

/**
 * 에러 상태
 * 로그인 실패 시 에러 메시지가 표시됩니다
 */
export const WithError = {
  args: {
    error: 'Invalid email or password',
  },
};

/**
 * 긴 에러 메시지
 */
export const WithLongError = {
  args: {
    error: 'Your account has been temporarily locked due to multiple failed login attempts. Please try again in 15 minutes.',
  },
};
