import { useState } from 'react';
import { Box, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import RegisterForm from '../components/auth/RegisterForm';
import BrandWordmark from '../components/typography/BrandWordmark';

/**
 * RegisterPage - 회원가입 페이지
 *
 * akus Editorial Minimalism:
 * - 중앙 정렬 레이아웃
 * - 여백이 많은 구성
 * - 조용한 브랜드 워드마크
 * - 미니멀한 폼
 */
const RegisterPage = () => {
  const navigate = useNavigate();
  const { register } = useAuth();
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleSubmit = (formData) => {
    // 비밀번호 확인
    if (formData.password !== formData.confirmPassword) {
      setError('Passwords do not match');
      setSuccess('');
      return;
    }

    // 회원가입 시도
    const result = register(formData.name, formData.email, formData.password);

    if (result.success) {
      setSuccess('Account created successfully! Redirecting...');
      setError('');
      // 2초 후 로그인 페이지로 이동
      setTimeout(() => {
        navigate('/login');
      }, 2000);
    } else {
      setError(result.error);
      setSuccess('');
    }
  };

  return (
    <Box
      sx={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        bgcolor: 'background.default',
        px: 3,
        py: 6,
      }}
    >
      <Box
        sx={{
          width: '100%',
          maxWidth: 400,
          textAlign: 'center',
        }}
      >
        {/* Brand Wordmark */}
        <Box sx={{ mb: 6 }}>
          <BrandWordmark sx={{ fontSize: '2.5rem', fontWeight: 400 }} />
        </Box>

        {/* Register Title */}
        <Typography
          sx={{
            fontSize: '0.75rem',
            fontWeight: 400,
            letterSpacing: '0.15em',
            textTransform: 'uppercase',
            color: 'secondary.main',
            mb: 5,
          }}
        >
          Create Account
        </Typography>

        {/* Register Form */}
        <RegisterForm onSubmit={handleSubmit} error={error} success={success} />
      </Box>
    </Box>
  );
};

export default RegisterPage;
