import type { Meta, StoryObj } from '@storybook/react';
import { CategoryTab } from './CategoryTab';

const meta: Meta<typeof CategoryTab> = {
  title: 'Atoms/CategoryTab',
  component: CategoryTab,
  tags: ['autodocs'],
  argTypes: {
    label: { control: 'text' },
    state: {
      control: 'select',
      options: ['Selected', 'Unselected', 'Disabled'],
    },
  },
};

export default meta;
type Story = StoryObj<typeof CategoryTab>;

export const Selected: Story = {
  args: {
    label: 'Glass',
    state: 'Selected',
  },
};

export const Unselected: Story = {
  args: {
    label: 'Plastic',
    state: 'Unselected',
  },
};

