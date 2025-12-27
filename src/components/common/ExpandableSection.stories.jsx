import ExpandableSection from './ExpandableSection';

export default {
  title: '2. Components/Common/ExpandableSection',
  component: ExpandableSection,
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
  },
};

export const Default = {
  args: {
    title: 'Material',
    children: (
      <p>
        Hand-carved natural stone with porous surface. Each piece varies slightly in
        color and texture due to natural material properties.
      </p>
    ),
  },
  decorators: [
    // eslint-disable-next-line no-unused-vars
    (Story) => (
      <div style={{ maxWidth: '500px' }}>
        <Story />
      </div>
    ),
  ],
};

export const DefaultExpanded = {
  args: {
    title: 'Dimensions',
    defaultExpanded: true,
    children: (
      <div>
        <p>Width: 12cm</p>
        <p>Depth: 8cm</p>
        <p>Height: 2.5cm</p>
        <p>Weight: ~400g</p>
      </div>
    ),
  },
  decorators: [
    // eslint-disable-next-line no-unused-vars
    (Story) => (
      <div style={{ maxWidth: '500px' }}>
        <Story />
      </div>
    ),
  ],
};

export const WithList = {
  args: {
    title: 'Care Instructions',
    children: (
      <ul>
        <li>Rinse with water after each use</li>
        <li>Allow to air dry completely</li>
        <li>Avoid harsh chemical cleaners</li>
        <li>Natural discoloration may occur over time</li>
      </ul>
    ),
  },
  decorators: [
    // eslint-disable-next-line no-unused-vars
    (Story) => (
      <div style={{ maxWidth: '500px' }}>
        <Story />
      </div>
    ),
  ],
};

export const MultipleSection = {
  render: () => (
    <div style={{ maxWidth: '500px' }}>
      <ExpandableSection title="Material" defaultExpanded>
        <p>
          Portuguese linen, pre-washed. Natural texture with slight irregularities that
          enhance over time.
        </p>
      </ExpandableSection>
      <ExpandableSection title="Dimensions">
        <p>70cm × 140cm</p>
        <p>Weight: ~650g</p>
      </ExpandableSection>
      <ExpandableSection title="Care">
        <ul>
          <li>Machine wash cold</li>
          <li>Tumble dry low or line dry</li>
          <li>Iron while slightly damp if desired</li>
        </ul>
      </ExpandableSection>
      <ExpandableSection title="Philosophy">
        <p>
          Objects designed for daily rituals. Each piece is made to age gracefully,
          developing character through use.
        </p>
      </ExpandableSection>
    </div>
  ),
};
