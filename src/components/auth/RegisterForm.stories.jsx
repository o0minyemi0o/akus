import RegisterForm from './RegisterForm';

/**
 * RegisterForm - 회원가입 폼 컴포넌트
 *
 * akus Silent Luxury 스타일을 적용한 회원가입 폼
 * - 조용한 입력 필드 (경계선만)
 * - 여백이 충분한 레이아웃
 * - 미니멀한 버튼
 */
export default {
  title: '2. COMPONENTS/RegisterForm',
  component: RegisterForm,
  tags: ['autodocs'],
  argTypes: {
    onSubmit: { action: 'submitted' },
    error: {
      control: 'text',
      description: '회원가입 실패 시 표시할 에러 메시지',
    },
    success: {
      control: 'text',
      description: '회원가입 성공 시 표시할 성공 메시지',
    },
  },
};

/**
 * 기본 회원가입 폼
 */
export const Default = {
  args: {
    error: '',
    success: '',
  },
};

/**
 * 에러 상태
 * 회원가입 실패 시 에러 메시지가 표시됩니다
 */
export const WithError = {
  args: {
    error: 'Email already exists',
    success: '',
  },
};

/**
 * 성공 상태
 * 회원가입 성공 시 성공 메시지가 표시됩니다
 */
export const WithSuccess = {
  args: {
    error: '',
    success: 'Account created successfully! Redirecting...',
  },
};

/**
 * 비밀번호 불일치 에러
 */
export const PasswordMismatch = {
  args: {
    error: 'Passwords do not match',
    success: '',
  },
};
