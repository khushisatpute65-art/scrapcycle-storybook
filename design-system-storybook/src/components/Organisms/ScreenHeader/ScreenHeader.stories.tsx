import type { Meta, StoryObj } from '@storybook/react';
import { ScreenHeader } from './ScreenHeader';

const meta: Meta<typeof ScreenHeader> = {
  title: 'Organisms/ScreenHeader',
  component: ScreenHeader,
  tags: ['autodocs'],
  argTypes: {
    title: { control: 'text' },
    subtitle: { control: 'text' },
    showBack: { control: 'boolean' },
  },
};

export default meta;
type Story = StoryObj<typeof ScreenHeader>;

export const Default: Story = {
  args: {
    title: 'Select Scrap Items',
    subtitle: 'Choose materials for doorstep pickup',
    showBack: true,
  },
};

export const WithoutBack: Story = {
  args: {
    title: 'Dashboard',
    subtitle: 'Welcome back, Khush',
    showBack: false,
  },
};

