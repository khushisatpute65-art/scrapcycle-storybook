import type { Meta, StoryObj } from '@storybook/react';
import { OTPCell } from './OTPCell';

const meta: Meta<typeof OTPCell> = {
  title: 'Atoms/OTPCell',
  component: OTPCell,
  tags: ['autodocs'],
  argTypes: {
    digit: { control: 'text' },
    state: {
      control: 'select',
      options: ['Empty', 'Filled', 'Focused', 'Error', 'Disabled'],
    },
  },
};

export default meta;
type Story = StoryObj<typeof OTPCell>;

export const Empty: Story = {
  args: {
    digit: '',
    state: 'Empty',
  },
};

export const Focused: Story = {
  args: {
    digit: '',
    state: 'Focused',
  },
};

export const Filled: Story = {
  args: {
    digit: '8',
    state: 'Filled',
  },
};

export const ErrorState: Story = {
  args: {
    digit: '9',
    state: 'Error',
  },
};

