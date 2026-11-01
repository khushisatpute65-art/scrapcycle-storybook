import type { Meta, StoryObj } from '@storybook/react';
import { LabeledFormField } from './Labeled Form Field';

const meta: Meta<typeof LabeledFormField> = {
  title: 'Molecules/Labeled Form Field',
  component: LabeledFormField,
  tags: ['autodocs'],
  argTypes: {
    inputType: {
      control: 'select',
      options: ['Email', 'Pincode', 'Condition'],
    },
    state: {
      control: 'select',
      options: ['Default', 'Filled', 'Focus', 'Error', 'Disabled', 'Success'],
    },
    label: { control: 'text' },
    helperText: { control: 'text' },
  },
};

export default meta;
type Story = StoryObj<typeof LabeledFormField>;

export const EmailDefault: Story = {
  args: {
    inputType: 'Email',
    state: 'Default',
    label: 'Enter Gmail',
    helperText: 'Verification code will be sent here.',
  },
};

export const EmailError: Story = {
  args: {
    inputType: 'Email',
    state: 'Error',
    value: 'test@invalid',
    label: 'Enter Gmail',
    helperText: 'Please enter a valid Gmail address.',
  },
};

export const ConditionDropdown: Story = {
  args: {
    inputType: 'Condition',
    state: 'Default',
    label: 'Material Condition',
    helperText: 'Select clean, separated or mixed.',
  },
};
