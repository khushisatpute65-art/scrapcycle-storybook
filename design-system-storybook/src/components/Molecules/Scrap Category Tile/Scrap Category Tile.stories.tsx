import type { Meta, StoryObj } from '@storybook/react';
import { ScrapCategoryTile } from './Scrap Category Tile';

const meta: Meta<typeof ScrapCategoryTile> = {
  title: 'Molecules/Scrap Category Tile',
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
