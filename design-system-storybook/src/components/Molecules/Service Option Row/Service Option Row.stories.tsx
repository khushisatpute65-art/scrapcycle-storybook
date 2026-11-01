import type { Meta, StoryObj } from '@storybook/react';
import { ServiceOptionRow } from './Service Option Row';

const meta: Meta<typeof ServiceOptionRow> = {
  title: 'Molecules/Service Option Row',
  component: ServiceOptionRow,
  tags: ['autodocs'],
  argTypes: {
    category: {
      control: 'select',
      options: ['Scrap Materials', 'Furniture', 'Electronics', 'Mixed Items'],
    },
    state: {
      control: 'select',
      options: ['Unselected', 'Selected', 'Disabled'],
    },
  },
};

export default meta;
type Story = StoryObj<typeof ServiceOptionRow>;

export const ScrapMaterialsUnselected: Story = {
  args: {
    category: 'Scrap Materials',
    state: 'Unselected',
  },
};

export const ScrapMaterialsSelected: Story = {
  args: {
    category: 'Scrap Materials',
    state: 'Selected',
  },
};

export const ElectronicsRow: Story = {
  args: {
    category: 'Electronics',
    state: 'Selected',
  },
};
