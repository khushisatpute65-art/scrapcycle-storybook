import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './Button';

const markdownSpecsTable = `
### 📐 Figma Component Specs & Layer Mapping

| Property | Figma Specification | Bound Token / CSS Rule |
| :--- | :--- | :--- |
| **Component Set** | \`Button\` (node \`53:27\`) | Root Component |
| **Variants** | \`state=Default\`, \`state=hover\`, \`state=pressed\`, \`state=Disabled\` | \`figma-button--state-{state}\` |
| **Width & Height** | \`211px\` × \`58px\` | Fixed dimensions from layout bounding box |
| **Padding** | \`12px 16px\` | \`padding: 12px 16px\` |
| **Corner Radius** | \`12px\` (VariableID:16:12) | \`var(--uedp-rounded-xl, 12px)\` |
| **Item Spacing** | \`34px\` | \`gap: 34px\` |
| **Font Family** | \`SF Pro Display\` | \`SF Pro Display\`, system-ui, sans-serif |
| **Font Size / Weight** | \`21px\` / \`Bold (700)\` | \`font-size: 21px; font-weight: 700\` |
| **Letter Spacing** | \`0.42px\` | \`letter-spacing: 0.42px\` |
| **Default Background** | \`#F97316\` (VariableID:17:75) | \`var(--uedp-orange-500, #f97316)\` |
| **Hover Background** | \`#EA580C\` (VariableID:17:46) | \`var(--uedp-orange-600, #ea580c)\` |
| **Pressed Background**| \`#FDBA74\` (VariableID:17:77) | \`var(--uedp-orange-300, #fdba74)\` |
| **Disabled Background**|\`#CBD5E1\` (VariableID:17:48) | \`var(--uedp-slate-300, #cbd5e1)\` |
| **Text Color (Default)**|\`#FFFFFF\` (VariableID:17:35) | \`var(--uedp-base-white, #ffffff)\` |
| **Text Color (Disabled)**|\`#94A3B8\` (VariableID:17:64) | \`var(--uedp-slate-400, #94a3b8)\` |
`;

const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `Interactive, high-fidelity Button component generated from the ScrapCycle Figma Design System library (node \`53:27\`).\n\n${markdownSpecsTable}`,
      },
    },
  },
  argTypes: {
    state: {
      control: { type: 'select' },
      options: ['Default', 'hover', 'pressed', 'Disabled'],
      description: 'The Figma variant state.',
      table: {
        type: { summary: "'Default' | 'hover' | 'pressed' | 'Disabled'" },
        defaultValue: { summary: 'Default' },
      },
    },
    label: {
      control: 'text',
      description: 'Button text label (default: "Get Started")',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'Get Started' },
      },
    },
    disabled: {
      control: 'boolean',
      description: 'Whether the button is disabled (maps to Disabled state)',
    },
    onClick: { action: 'clicked' },
  },
  args: {
    state: 'Default',
    label: 'Get Started',
    disabled: false,
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Default: Story = {
  args: {
    state: 'Default',
    label: 'Get Started',
  },
};

export const HoverState: Story = {
  args: {
    state: 'hover',
    label: 'Get Started',
  },
};

export const PressedState: Story = {
  args: {
    state: 'pressed',
    label: 'Get Started',
  },
};

export const DisabledState: Story = {
  args: {
    state: 'Disabled',
    label: 'Get Started',
    disabled: true,
  },
};

export const AllStatesMatrix: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', padding: '16px' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '24px' }}>
        <span style={{ width: '100px', fontWeight: 600, color: '#64748b' }}>Default:</span>
        <Button state="Default" label="Get Started" />
      </div>
      <div style={{ display: 'flex', alignItems: 'center', gap: '24px' }}>
        <span style={{ width: '100px', fontWeight: 600, color: '#64748b' }}>Hover:</span>
        <Button state="hover" label="Get Started" />
      </div>
      <div style={{ display: 'flex', alignItems: 'center', gap: '24px' }}>
        <span style={{ width: '100px', fontWeight: 600, color: '#64748b' }}>Pressed:</span>
        <Button state="pressed" label="Get Started" />
      </div>
      <div style={{ display: 'flex', alignItems: 'center', gap: '24px' }}>
        <span style={{ width: '100px', fontWeight: 600, color: '#64748b' }}>Disabled:</span>
        <Button state="Disabled" label="Get Started" disabled />
      </div>
    </div>
  ),
  parameters: {
    controls: { disable: true },
  },
};
