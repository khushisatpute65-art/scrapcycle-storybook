import type { Meta, StoryObj } from '@storybook/react';
import { SearchBar } from './SearchBar';

const meta: Meta<typeof SearchBar> = {
  title: 'Molecules/SearchBar',
  component: SearchBar,
  tags: ['autodocs'],
  argTypes: {
    state: {
      control: 'select',
      options: ['Default', 'Focus', 'Filled', 'Disabled'],
    },
    placeholder: { control: 'text' },
  },
};

export default meta;
type Story = StoryObj<typeof SearchBar>;

export const Default: Story = {
  args: {
    state: 'Default',
    placeholder: 'Search scrap items (e.g. Iron, Plastic)...',
  },
};

export const Filled: Story = {
  args: {
    state: 'Filled',
    value: 'Aluminum Cans',
  },
};

export const Disabled: Story = {
  args: {
    state: 'Disabled',
    placeholder: 'Search unavailable',
  },
};

