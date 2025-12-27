import { useState } from 'react';
import { Box, TextField, Button, Typography, Alert } from '@mui/material';
import { Link } from 'react-router-dom';

/**
 * LoginForm - 로그인 폼 컴포넌트
 *
 * akus Silent Luxury:
 * - 조용한 입력 필드 (경계선만)
 * - 여백이 충분한 레이아웃
 * - 미니멀한 버튼 스타일
 */
const LoginForm = ({ onSubmit, error, sx, ...props }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit?.({ email, password });
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      {...props}
      sx={{
        width: '100%',
        maxWidth: 400,
        ...sx,
      }}
    >
      {/* Error Message */}
      {error && (
        <Alert
          severity="error"
          sx={{
            mb: 3,
            bgcolor: 'transparent',
            border: '1px solid',
            borderColor: 'error.main',
            color: 'error.main',
            fontSize: '0.8125rem',
            '& .MuiAlert-icon': {
              color: 'error.main',
            },
          }}
        >
          {error}
        </Alert>
      )}

      {/* Email Field */}
      <TextField
        fullWidth
        type="email"
        label="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
        autoComplete="email"
        sx={{
          mb: 2.5,
          '& .MuiOutlinedInput-root': {
            bgcolor: 'transparent',
            '& fieldset': {
              borderColor: 'secondary.main',
              borderWidth: '1px',
            },
            '&:hover fieldset': {
              borderColor: 'primary.main',
            },
            '&.Mui-focused fieldset': {
              borderColor: 'primary.main',
              borderWidth: '1px',
            },
          },
          '& .MuiInputLabel-root': {
            fontSize: '0.8125rem',
            letterSpacing: '0.05em',
            color: 'secondary.main',
            '&.Mui-focused': {
              color: 'primary.main',
            },
          },
          '& .MuiInputBase-input': {
            fontSize: '0.875rem',
            py: 1.75,
            px: 2,
          },
        }}
      />

      {/* Password Field */}
      <TextField
        fullWidth
        type="password"
        label="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
        autoComplete="current-password"
        sx={{
          mb: 3.5,
          '& .MuiOutlinedInput-root': {
            bgcolor: 'transparent',
            '& fieldset': {
              borderColor: 'secondary.main',
              borderWidth: '1px',
            },
            '&:hover fieldset': {
              borderColor: 'primary.main',
            },
            '&.Mui-focused fieldset': {
              borderColor: 'primary.main',
              borderWidth: '1px',
            },
          },
          '& .MuiInputLabel-root': {
            fontSize: '0.8125rem',
            letterSpacing: '0.05em',
            color: 'secondary.main',
            '&.Mui-focused': {
              color: 'primary.main',
            },
          },
          '& .MuiInputBase-input': {
            fontSize: '0.875rem',
            py: 1.75,
            px: 2,
          },
        }}
      />

      {/* Login Button */}
      <Button
        type="submit"
        fullWidth
        sx={{
          py: 2,
          border: '1px solid',
          borderColor: 'primary.main',
          color: 'primary.main',
          bgcolor: 'transparent',
          fontSize: '0.8125rem',
          fontWeight: 400,
          letterSpacing: '0.1em',
          textTransform: 'uppercase',
          transition: 'all 0.25s ease',
          '&:hover': {
            bgcolor: 'primary.main',
            color: 'background.default',
          },
        }}
      >
        Login
      </Button>

      {/* Register Link */}
      <Box sx={{ mt: 3, textAlign: 'center' }}>
        <Typography
          sx={{
            fontSize: '0.75rem',
            color: 'secondary.main',
            letterSpacing: '0.05em',
          }}
        >
          Don't have an account?{' '}
          <Box
            component={Link}
            to="/register"
            sx={{
              color: 'primary.main',
              textDecoration: 'none',
              '&:hover': {
                opacity: 0.7,
              },
            }}
          >
            Sign up
          </Box>
        </Typography>
      </Box>

      {/* Demo Credentials Hint */}
      <Box sx={{ mt: 2, textAlign: 'center' }}>
        <Typography
          sx={{
            fontSize: '0.6875rem',
            color: 'secondary.main',
            opacity: 0.7,
            letterSpacing: '0.05em',
          }}
        >
          Demo: test@akus.com / 1234
        </Typography>
      </Box>
    </Box>
  );
};

export default LoginForm;
