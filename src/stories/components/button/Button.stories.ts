import type { Meta, StoryObj } from '@storybook/react';
import { Button } from '../../../components';

const meta = {
  title: 'Example/Button',
  component: Button,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs'],
  args: {
    variant: 'contained',
    label: 'Button',
    size: 'small'
  }
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    variant: 'contained',
    label: 'Button',
    size: 'small'
  }
};
