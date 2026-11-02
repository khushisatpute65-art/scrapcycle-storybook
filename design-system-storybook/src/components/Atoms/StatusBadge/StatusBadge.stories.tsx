import type { Meta, StoryObj } from '@storybook/react';
import { StatusBadge } from './StatusBadge';

const meta: Meta<typeof StatusBadge> = {
  title: 'Atoms/StatusBadge',
  component: StatusBadge,
  tags: ['autodocs'],
  argTypes: {
    status: {
      control: 'select',
      options: ['In Route', 'Completed', 'Pending'],
    },
    size: {
      control: 'select',
      options: ['Small', 'Medium'],
    },
    appearance: {
      control: 'select',
      options: ['Soft', 'Filled'],
    },
  },
};

export default meta;
type Story = StoryObj<typeof StatusBadge>;

export const InRouteSoft: Story = {
  args: {
    status: 'In Route',
    size: 'Small',
    appearance: 'Soft',
  },
};

export const CompletedFilled: Story = {
  args: {
    status: 'Completed',
    size: 'Medium',
    appearance: 'Filled',
  },
};

export const PendingSoft: Story = {
  args: {
    status: 'Pending',
    size: 'Small',
    appearance: 'Soft',
  },
};

