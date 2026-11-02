import type { Meta, StoryObj } from '@storybook/react';
import { ScrapCategoryTile } from './ScrapCategoryTile';

const meta: Meta<typeof ScrapCategoryTile> = {
  title: 'Molecules/ScrapCategoryTile',
  component: ScrapCategoryTile,
  tags: ['autodocs'],
  argTypes: {
    category: {
      control: 'select',
      options: ['Paper', 'Plastic', 'Metal', 'Glass', 'E-Waste', 'Textile'],
    },
    state: {
      control: 'select',
      options: ['Unselected', 'Selected'],
    },
  },
};

export default meta;
type Story = StoryObj<typeof ScrapCategoryTile>;

export const PaperUnselected: Story = {
  args: {
    category: 'Paper',
    state: 'Unselected',
  },
};

export const PlasticSelected: Story = {
  args: {
    category: 'Plastic',
    state: 'Selected',
  },
};

