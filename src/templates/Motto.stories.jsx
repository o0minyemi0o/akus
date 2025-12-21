import Motto from './Motto';

export default {
  title: '3. Templates/Motto',
  component: Motto,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
};

export const Default = {
  args: {
    text: 'Objects shaped by earth, refined for quiet rituals.',
  },
};

export const MultiLine = {
  args: {
    text: 'Objects shaped by earth,\nrefined for quiet rituals.',
  },
};

export const Alternative = {
  args: {
    text: 'Each piece exists quietly within the space.',
  },
};
