import { useState } from 'react';
import { Box, TextField, Button, Typography, Alert } from '@mui/material';
import { Link } from 'react-router-dom';

/**
 * RegisterForm - 회원가입 폼 컴포넌트
 *
 * akus Silent Luxury:
 * - 조용한 입력 필드 (경계선만)
 * - 여백이 충분한 레이아웃
 * - 미니멀한 버튼 스타일
 */
const RegisterForm = ({ onSubmit, error, success, sx, ...props }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const handleChange = (field) => (e) => {
    setFormData((prev) => ({ ...prev, [field]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit?.(formData);
  };

  const inputStyles = {
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
      {/* Success Message */}
      {success && (
        <Alert
          severity="success"
          sx={{
            mb: 3,
            bgcolor: 'transparent',
            border: '1px solid',
            borderColor: 'success.main',
            color: 'success.main',
            fontSize: '0.8125rem',
            '& .MuiAlert-icon': {
              color: 'success.main',
            },
          }}
        >
          {success}
        </Alert>
      )}

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

      {/* Name Field */}
      <TextField
        fullWidth
        type="text"
        label="Name"
        value={formData.name}
        onChange={handleChange('name')}
        required
        autoComplete="name"
        sx={inputStyles}
      />

      {/* Email Field */}
      <TextField
        fullWidth
        type="email"
        label="Email"
        value={formData.email}
        onChange={handleChange('email')}
        required
        autoComplete="email"
        sx={inputStyles}
      />

      {/* Password Field */}
      <TextField
        fullWidth
        type="password"
        label="Password"
        value={formData.password}
        onChange={handleChange('password')}
        required
        autoComplete="new-password"
        sx={inputStyles}
      />

      {/* Confirm Password Field */}
      <TextField
        fullWidth
        type="password"
        label="Confirm Password"
        value={formData.confirmPassword}
        onChange={handleChange('confirmPassword')}
        required
        autoComplete="new-password"
        sx={{ ...inputStyles, mb: 3.5 }}
      />

      {/* Register Button */}
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
        Create Account
      </Button>

      {/* Login Link */}
      <Box sx={{ mt: 3, textAlign: 'center' }}>
        <Typography
          sx={{
            fontSize: '0.75rem',
            color: 'secondary.main',
            letterSpacing: '0.05em',
          }}
        >
          Already have an account?{' '}
          <Box
            component={Link}
            to="/login"
            sx={{
              color: 'primary.main',
              textDecoration: 'none',
              '&:hover': {
                opacity: 0.7,
              },
            }}
          >
            Login
          </Box>
        </Typography>
      </Box>
    </Box>
  );
};

export default RegisterForm;
