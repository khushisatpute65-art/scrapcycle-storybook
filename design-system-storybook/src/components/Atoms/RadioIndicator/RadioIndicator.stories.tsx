import type { Meta, StoryObj } from '@storybook/react';
import { RadioIndicator } from './RadioIndicator';

const meta: Meta<typeof RadioIndicator> = {
  title: 'Atoms/RadioIndicator',
  component: RadioIndicator,
  tags: ['autodocs'],
  argTypes: {
    selected: {
      control: 'select',
      options: ['No', 'Yes'],
    },
    state: {
      control: 'select',
      options: ['Default', 'Disabled'],
    },
  },
};

export default meta;
type Story = StoryObj<typeof RadioIndicator>;

export const Unselected: Story = {
  args: {
    selected: 'No',
    state: 'Default',
  },
};

export const Selected: Story = {
  args: {
    selected: 'Yes',
    state: 'Default',
  },
};

