import type { Meta, StoryObj } from '@storybook/react';
import { CategoryTab } from './Category Tab';

const meta: Meta<typeof CategoryTab> = {
  title: 'Atoms/Category Tab',
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
