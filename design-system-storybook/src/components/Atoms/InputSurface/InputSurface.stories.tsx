import type { Meta, StoryObj } from '@storybook/react';
import { InputSurface } from './InputSurface';

const meta: Meta<typeof InputSurface> = {
  title: 'Atoms/InputSurface',
  component: InputSurface,
  tags: ['autodocs'],
  argTypes: {
    inputState: {
      control: 'select',
      options: ['Default', 'Focus', 'Filled', 'Error', 'Disabled', 'Success'],
    },
    placeholder: { control: 'text' },
  },
};

export default meta;
type Story = StoryObj<typeof InputSurface>;

export const Default: Story = {
  args: {
    inputState: 'Default',
    placeholder: 'Enter your email address',
  },
};

export const ErrorState: Story = {
  args: {
    inputState: 'Error',
    value: 'invalid-email@',
  },
};

export const SuccessState: Story = {
  args: {
    inputState: 'Success',
    value: 'user@example.com',
  },
};

