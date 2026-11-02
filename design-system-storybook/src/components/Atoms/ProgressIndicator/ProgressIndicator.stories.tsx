import type { Meta, StoryObj } from '@storybook/react';
import { ProgressIndicator } from './ProgressIndicator';

const meta: Meta<typeof ProgressIndicator> = {
  title: 'Atoms/ProgressIndicator',
  component: ProgressIndicator,
  tags: ['autodocs'],
  argTypes: {
    step: {
      control: 'select',
      options: ['1', '2', '3'],
    },
  },
};

export default meta;
type Story = StoryObj<typeof ProgressIndicator>;

export const Step1: Story = {
  args: {
    step: '1',
  },
};

export const Step2: Story = {
  args: {
    step: '2',
  },
};

export const Step3: Story = {
  args: {
    step: '3',
  },
};

