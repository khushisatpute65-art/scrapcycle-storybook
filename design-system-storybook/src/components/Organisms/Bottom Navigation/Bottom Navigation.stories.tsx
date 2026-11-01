import type { Meta, StoryObj } from '@storybook/react';
import { BottomNavigation } from './Bottom Navigation';

const meta: Meta<typeof BottomNavigation> = {
  title: 'Organisms/Bottom Navigation',
  component: BottomNavigation,
  tags: ['autodocs'],
  argTypes: {
    active: {
      control: 'select',
      options: ['Home', 'Categories', 'Orders', 'Impact'],
    },
    hasNotification: { control: 'boolean' },
  },
};

export default meta;
type Story = StoryObj<typeof BottomNavigation>;

export const HomeActive: Story = {
  args: {
    active: 'Home',
    hasNotification: true,
  },
};

export const OrdersActive: Story = {
  args: {
    active: 'Orders',
    hasNotification: false,
  },
};
