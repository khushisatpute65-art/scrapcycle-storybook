import type { Meta, StoryObj } from '@storybook/react';
import { UploadSection } from './UploadSection';

const meta: Meta<typeof UploadSection> = {
  title: 'Organisms/UploadSection',
  component: UploadSection,
  tags: ['autodocs'],
  argTypes: {
    uploadState: {
      control: 'select',
      options: ['Empty', 'Uploaded'],
    },
    heading: { control: 'text' },
  },
};

export default meta;
type Story = StoryObj<typeof UploadSection>;

export const Empty: Story = {
  args: {
    uploadState: 'Empty',
    heading: 'Upload Scrap Photos',
  },
};

export const Uploaded: Story = {
  args: {
    uploadState: 'Uploaded',
    heading: 'Uploaded Scrap Photo',
  },
};

