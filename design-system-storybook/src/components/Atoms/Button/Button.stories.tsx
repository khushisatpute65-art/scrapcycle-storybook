import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './Button';

const meta: Meta<typeof Button> = {
  title: 'Atoms/Button',
  component: Button,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'Interactive, high-fidelity Button component generated from the ScrapCycle Figma Design System library (node `90:931`).',
      },
    },
  },
  argTypes: {
    label: { control: 'text' },
    variant: {
      control: 'select',
      options: ['Primary Filled', 'Secondary Filled', 'Outline', 'Text/Ghost'],
    },
    size: {
      control: 'select',
      options: ['Small', 'Medium', 'Large'],
    },
    state: {
      control: 'select',
      options: ['Default', 'Hover', 'Pressed/Active', 'Focus', 'Disabled'],
    },
    icon: {
      control: 'select',
      options: ['None', 'Leading', 'Trailing'],
    },
    shape: {
      control: 'select',
      options: ['Standard', 'Rounded'],
    },
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

export const PrimaryLarge: Story = {
  args: {
    label: 'Get Started',
    variant: 'Primary Filled',
    size: 'Large',
    state: 'Default',
    icon: 'None',
    shape: 'Standard',
  },
};

export const SecondaryMedium: Story = {
  args: {
    label: 'View Categories',
    variant: 'Secondary Filled',
    size: 'Medium',
    state: 'Default',
    icon: 'None',
    shape: 'Standard',
  },
};

export const OutlineWithIcon: Story = {
  args: {
    label: 'Proceed',
    variant: 'Outline',
    size: 'Medium',
    state: 'Default',
    icon: 'Trailing',
    shape: 'Rounded',
  },
};

export const Disabled: Story = {
  args: {
    label: 'Get Started',
    variant: 'Primary Filled',
    size: 'Large',
    state: 'Disabled',
  },
};

