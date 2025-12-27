import { useState } from 'react';
import { Box, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import LoginForm from '../components/auth/LoginForm';
import BrandWordmark from '../components/typography/BrandWordmark';

/**
 * LoginPage - 로그인 페이지
 *
 * akus Editorial Minimalism:
 * - 중앙 정렬 레이아웃
 * - 여백이 많은 구성
 * - 조용한 브랜드 워드마크
 * - 미니멀한 폼
 */
const LoginPage = () => {
  const navigate = useNavigate();
  const { login } = useAuth();
  const [error, setError] = useState('');

  const handleSubmit = ({ email, password }) => {
    const result = login(email, password);

    if (result.success) {
      // 로그인 성공 시 메인 페이지로 이동
      navigate('/');
    } else {
      setError(result.error);
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

        {/* Login Title */}
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
          Login
        </Typography>

        {/* Login Form */}
        <LoginForm onSubmit={handleSubmit} error={error} />
      </Box>
    </Box>
  );
};

export default LoginPage;
