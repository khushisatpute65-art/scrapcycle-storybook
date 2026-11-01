import type { Meta, StoryObj } from '@storybook/react';
import { OrderCard } from './Order Card';

const meta: Meta<typeof OrderCard> = {
  title: 'Molecules/Order Card',
  component: OrderCard,
  tags: ['autodocs'],
  argTypes: {
    status: {
      control: 'select',
      options: ['In Route', 'Completed', 'Pending'],
    },
  },
};

export default meta;
type Story = StoryObj<typeof OrderCard>;

export const InRoute: Story = {
  args: {
    status: 'In Route',
    orderNumber: 'Order #12344',
    itemsDescription: '5 kg aluminum & plastic',
    earnedAmount: '₹320',
  },
};

export const Completed: Story = {
  args: {
    status: 'Completed',
    orderNumber: 'Order #12340',
    itemsDescription: '12 kg mixed waste',
    earnedAmount: '₹840',
    pickupStatus: 'Delivered to recycling center',
  },
};
