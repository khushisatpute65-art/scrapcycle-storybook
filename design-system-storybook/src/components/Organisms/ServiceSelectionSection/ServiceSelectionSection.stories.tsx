import type { Meta, StoryObj } from '@storybook/react';
import { ServiceSelectionSection } from './ServiceSelectionSection';

const meta: Meta<typeof ServiceSelectionSection> = {
  title: 'Organisms/ServiceSelectionSection',
  component: ServiceSelectionSection,
  tags: ['autodocs'],
  argTypes: {
    selectedCategory: {
      control: 'select',
      options: ['None', 'Scrap Materials', 'Furniture', 'Electronics', 'Mixed Items'],
    },
  },
};

export default meta;
type Story = StoryObj<typeof ServiceSelectionSection>;

export const DefaultSelection: Story = {
  args: {
    selectedCategory: 'Scrap Materials',
  },
};

export const NoneSelected: Story = {
  args: {
    selectedCategory: 'None',
  },
};

