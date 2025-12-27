import { useState } from 'react';
import QuantitySelector from './QuantitySelector';

export default {
  title: '2. Components/Cart/QuantitySelector',
  component: QuantitySelector,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
};

export const Default = {
  render: (args) => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [value, setValue] = useState(1);
    return <QuantitySelector {...args} value={value} onChange={setValue} />;
  },
};

export const WithInitialValue = {
  render: (args) => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [value, setValue] = useState(5);
    return <QuantitySelector {...args} value={value} onChange={setValue} />;
  },
};

export const SmallSize = {
  render: (args) => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [value, setValue] = useState(1);
    return <QuantitySelector {...args} value={value} onChange={setValue} size="small" />;
  },
};

export const LargeSize = {
  render: (args) => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [value, setValue] = useState(3);
    return <QuantitySelector {...args} value={value} onChange={setValue} size="large" />;
  },
};

export const WithLimits = {
  render: (args) => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [value, setValue] = useState(5);
    return (
      <QuantitySelector
        {...args}
        value={value}
        onChange={setValue}
        min={1}
        max={10}
      />
    );
  },
};
