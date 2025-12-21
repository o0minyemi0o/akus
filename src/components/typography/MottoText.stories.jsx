import MottoText from './MottoText';
import { Box } from '@mui/material';

export default {
  title: '2. Components/Typography/MottoText',
  component: MottoText,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
};

export const Default = {
  args: {
    children: 'Objects shaped by earth, refined for quiet rituals.',
  },
  decorators: [
    (Story) => (
      <Box sx={{ width: '100%', maxWidth: '1200px', p: 4 }}>
        <Story />
      </Box>
    ),
  ],
};

export const MultiLine = {
  args: {
    children: 'Objects shaped by earth,\nrefined for quiet rituals.',
  },
  decorators: [
    (Story) => (
      <Box sx={{ width: '100%', maxWidth: '1200px', p: 4 }}>
        <Story />
      </Box>
    ),
  ],
};
