import SectionTitle from './SectionTitle';

export default {
  title: '2. Components/Typography/SectionTitle',
  component: SectionTitle,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
};

export const Default = {
  args: {
    children: 'Collection',
  },
};

export const CategoryExamples = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
      <SectionTitle>Textile</SectionTitle>
      <SectionTitle>Ceramic</SectionTitle>
      <SectionTitle>Care</SectionTitle>
      <SectionTitle>Tool</SectionTitle>
    </div>
  ),
};
