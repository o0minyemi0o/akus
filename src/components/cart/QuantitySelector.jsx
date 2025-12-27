import { Box, IconButton, Typography } from '@mui/material';
import { Minus, Plus } from 'lucide-react';

/**
 * QuantitySelector - 수량 선택 컴포넌트
 *
 * akus Quiet Control:
 * - 조용한 버튼 (경계선만)
 * - 숫자 중앙 정렬
 * - 미니멀 아이콘 (Plus/Minus)
 * - 최소 수량 1
 */
const QuantitySelector = ({
  value = 1,
  onChange,
  min = 1,
  max = 99,
  size = 'medium',
  sx,
  ...props
}) => {
  const handleDecrement = () => {
    if (value > min) {
      onChange?.(value - 1);
    }
  };

  const handleIncrement = () => {
    if (value < max) {
      onChange?.(value + 1);
    }
  };

  const buttonSize = size === 'small' ? 32 : size === 'large' ? 40 : 36;
  const iconSize = size === 'small' ? 14 : size === 'large' ? 18 : 16;
  const fontSize = size === 'small' ? '0.75rem' : size === 'large' ? '0.875rem' : '0.8125rem';

  return (
    <Box
      {...props}
      sx={{
        display: 'flex',
        alignItems: 'center',
        gap: 1.5,
        ...sx,
      }}
    >
      {/* Decrement Button */}
      <IconButton
        onClick={handleDecrement}
        disabled={value <= min}
        size="small"
        sx={{
          width: buttonSize,
          height: buttonSize,
          border: '1px solid',
          borderColor: 'secondary.main',
          color: 'primary.main',
          bgcolor: 'transparent',
          transition: 'all 0.2s ease',
          '&:hover': {
            bgcolor: 'transparent',
            borderColor: 'primary.main',
          },
          '&:disabled': {
            opacity: 0.3,
            borderColor: 'secondary.main',
          },
        }}
      >
        <Minus size={iconSize} strokeWidth={1.5} />
      </IconButton>

      {/* Quantity Display */}
      <Typography
        sx={{
          minWidth: 32,
          textAlign: 'center',
          fontSize,
          fontFamily: 'monospace',
          fontWeight: 400,
          color: 'primary.main',
        }}
      >
        {value}
      </Typography>

      {/* Increment Button */}
      <IconButton
        onClick={handleIncrement}
        disabled={value >= max}
        size="small"
        sx={{
          width: buttonSize,
          height: buttonSize,
          border: '1px solid',
          borderColor: 'secondary.main',
          color: 'primary.main',
          bgcolor: 'transparent',
          transition: 'all 0.2s ease',
          '&:hover': {
            bgcolor: 'transparent',
            borderColor: 'primary.main',
          },
          '&:disabled': {
            opacity: 0.3,
            borderColor: 'secondary.main',
          },
        }}
      >
        <Plus size={iconSize} strokeWidth={1.5} />
      </IconButton>
    </Box>
  );
};

export default QuantitySelector;
