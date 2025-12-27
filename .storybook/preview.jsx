import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { BrowserRouter } from 'react-router-dom';
import { AuthProvider } from '../src/contexts/AuthContext';
import { CartProvider } from '../src/contexts/CartContext';
import theme from '../src/styles/theme';
import '../src/index.css';

/** @type { import('@storybook/react').Preview } */
const preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    options: {
      storySort: {
        order: ['1. Style', '2. Components', '3. Templates', '4. Sections'],
      },
    },
  },
  decorators: [
    (Story) => (
      <BrowserRouter>
        <AuthProvider>
          <CartProvider>
            <ThemeProvider theme={theme}>
              <CssBaseline />
              <Story />
            </ThemeProvider>
          </CartProvider>
        </AuthProvider>
      </BrowserRouter>
    ),
  ],
};

export default preview;
