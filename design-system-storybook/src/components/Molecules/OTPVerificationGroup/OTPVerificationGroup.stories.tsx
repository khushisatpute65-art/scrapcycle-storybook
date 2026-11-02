import type { Meta, StoryObj } from '@storybook/react';
import { OTPVerificationGroup } from './OTPVerificationGroup';

const meta: Meta<typeof OTPVerificationGroup> = {
  title: 'Molecules/OTPVerificationGroup',
  component: OTPVerificationGroup,
  tags: ['autodocs'],
  argTypes: {
    verificationState: {
      control: 'select',
      options: ['Default', 'Error', 'Success', 'Disabled'],
    },
    countdown: { control: 'text' },
  },
};

export default meta;
type Story = StoryObj<typeof OTPVerificationGroup>;

export const Default: Story = {
  args: {
    verificationState: 'Default',
    countdown: '00:12',
  },
};

export const ErrorState: Story = {
  args: {
    verificationState: 'Error',
    countdown: '00:00',
  },
};

