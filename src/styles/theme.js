import { createTheme } from '@mui/material/styles';

// akus Key Visual Direction
// ref: .design_rules/key-visual-direction.mdc

const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#141210', // Warm Stone Black
    },
    secondary: {
      main: '#7A6A5C', // Clay Shadow
    },
    background: {
      default: '#F4F1EC', // Plaster White
      paper: '#E7DECF', // Sand Beige
    },
    text: {
      primary: '#141210', // Warm Stone Black
      secondary: '#7A6A5C', // Clay Shadow
    },
  },
  typography: {
    fontFamily: '"Pretendard Variable", -apple-system, BlinkMacSystemFont, system-ui, sans-serif',
    h1: {
      fontFamily: 'Georgia, "Times New Roman", serif',
      letterSpacing: '0.02em',
    },
    h2: {
      fontFamily: 'Georgia, "Times New Roman", serif',
      letterSpacing: '0.02em',
    },
    h3: {
      fontFamily: 'Georgia, "Times New Roman", serif',
      letterSpacing: '0.02em',
    },
    h4: {
      fontFamily: 'Georgia, "Times New Roman", serif',
      letterSpacing: '0.02em',
    },
    h5: {
      fontFamily: 'Georgia, "Times New Roman", serif',
      letterSpacing: '0.02em',
    },
    h6: {
      fontFamily: 'Georgia, "Times New Roman", serif',
      letterSpacing: '0.02em',
    },
    body1: {
      letterSpacing: '0.01em',
    },
    body2: {
      letterSpacing: '0.01em',
    },
  },
  shape: {
    borderRadius: 0,
  },
  shadows: [
    'none',
    '0px 0px 16px rgba(0, 0, 0, 0.08)',
    '0px 0px 20px rgba(0, 0, 0, 0.08)',
    '0px 0px 24px rgba(0, 0, 0, 0.08)',
    '0px 0px 28px rgba(0, 0, 0, 0.08)',
    '0px 0px 32px rgba(0, 0, 0, 0.10)',
    '0px 0px 36px rgba(0, 0, 0, 0.10)',
    '0px 0px 40px rgba(0, 0, 0, 0.10)',
    '0px 0px 44px rgba(0, 0, 0, 0.10)',
    '0px 0px 48px rgba(0, 0, 0, 0.12)',
    '0px 0px 52px rgba(0, 0, 0, 0.12)',
    '0px 0px 56px rgba(0, 0, 0, 0.12)',
    '0px 0px 60px rgba(0, 0, 0, 0.12)',
    '0px 0px 64px rgba(0, 0, 0, 0.14)',
    '0px 0px 68px rgba(0, 0, 0, 0.14)',
    '0px 0px 72px rgba(0, 0, 0, 0.14)',
    '0px 0px 76px rgba(0, 0, 0, 0.14)',
    '0px 0px 80px rgba(0, 0, 0, 0.16)',
    '0px 0px 84px rgba(0, 0, 0, 0.16)',
    '0px 0px 88px rgba(0, 0, 0, 0.16)',
    '0px 0px 92px rgba(0, 0, 0, 0.16)',
    '0px 0px 96px rgba(0, 0, 0, 0.18)',
    '0px 0px 100px rgba(0, 0, 0, 0.18)',
    '0px 0px 104px rgba(0, 0, 0, 0.18)',
    '0px 0px 108px rgba(0, 0, 0, 0.18)',
  ],
});

export default theme;
