import { Button as MuiButton } from '@mui/material';

const Button = ({ children, variant = 'contained', ...props }) => {
  return (
    <MuiButton
      variant={variant}
      {...props}
      sx={{
        textTransform: 'none',
        letterSpacing: '0.01em',
        ...props.sx,
      }}
    >
      {children}
    </MuiButton>
  );
};

export default Button;
