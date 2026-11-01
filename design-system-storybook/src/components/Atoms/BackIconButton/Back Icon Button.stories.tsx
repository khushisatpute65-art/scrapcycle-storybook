import type { Meta, StoryObj } from '@storybook/react';
import { BackIconButton } from './Back Icon Button';

const meta: Meta<typeof BackIconButton> = {
  title: 'Atoms/Back Icon Button',
  component: BackIconButton,
  tags: ['autodocs'],
  argTypes: {
    styleVariant: {
      control: 'select',
      options: ['Outline', 'Primary', 'Secondary'],
    },
    size: {
      control: 'select',
      options: ['Small', 'Medium', 'Large'],
    },
    state: {
      control: 'select',
      options: ['Default', 'Focus', 'Hover', 'Pressed', 'Disabled'],
    },
    shape: {
      control: 'select',
      options: ['Rounded', 'Square', 'Circular'],
    },
  },
};

export default meta;
type Story = StoryObj<typeof BackIconButton>;

export const DefaultOutline: Story = {
  args: {
    styleVariant: 'Outline',
    size: 'Medium',
    state: 'Default',
    shape: 'Rounded',
  },
};

export const CircularPrimary: Story = {
  args: {
    styleVariant: 'Primary',
    size: 'Large',
    state: 'Default',
    shape: 'Circular',
  },
};
