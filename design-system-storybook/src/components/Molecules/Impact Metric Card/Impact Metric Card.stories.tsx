import type { Meta, StoryObj } from '@storybook/react';
import { ImpactMetricCard } from './Impact Metric Card';

const meta: Meta<typeof ImpactMetricCard> = {
  title: 'Molecules/Impact Metric Card',
  component: ImpactMetricCard,
  tags: ['autodocs'],
  argTypes: {
    heading: { control: 'text' },
    value: { control: 'text' },
    description: { control: 'text' },
    metricType: {
      control: 'select',
      options: ['CO2', 'Trees', 'Recycled', 'Default'],
    },
  },
};

export default meta;
type Story = StoryObj<typeof ImpactMetricCard>;

export const CO2Saved: Story = {
  args: {
    heading: 'CO2 Saved',
    value: '125 kg',
    description: 'Earned this month',
    metricType: 'CO2',
  },
};

export const TreesSaved: Story = {
  args: {
    heading: 'Trees Planted',
    value: '14 Trees',
    description: 'Lifetime impact',
    metricType: 'Trees',
  },
};
