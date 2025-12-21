import QuietParagraph from './QuietParagraph';
import { Box } from '@mui/material';

export default {
  title: '2. Components/Typography/QuietParagraph',
  component: QuietParagraph,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
};

export const Default = {
  args: {
    children:
      'akus designs objects for the bathroom. Each piece exists quietly within the space.',
  },
  decorators: [
    (Story) => (
      <Box sx={{ width: '100%', maxWidth: '800px', p: 4 }}>
        <Story />
      </Box>
    ),
  ],
};

export const ShortText = {
  args: {
    children: 'Only what is necessary.',
  },
  decorators: [
    (Story) => (
      <Box sx={{ width: '100%', maxWidth: '800px', p: 4 }}>
        <Story />
      </Box>
    ),
  ],
};
