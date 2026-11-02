import type { Meta, StoryObj } from '@storybook/react';
import { PickupLocationSection } from './PickupLocationSection';

const meta: Meta<typeof PickupLocationSection> = {
  title: 'Organisms/PickupLocationSection',
  component: PickupLocationSection,
  tags: ['autodocs'],
  argTypes: {
    heading: { control: 'text' },
    address: { control: 'text' },
    city: { control: 'text' },
  },
};

export default meta;
type Story = StoryObj<typeof PickupLocationSection>;

export const DefaultLocation: Story = {
  args: {
    heading: 'Pickup Address',
    address: '123 Green street, Andheri',
    city: 'Nagpur 411021',
  },
};

