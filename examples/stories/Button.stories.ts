import type { Meta, StoryObj } from '@storybook/react';
import { Button, ButtonVariant } from '../../src';

const meta = {
  title: 'Example/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  args: {
    variant: ButtonVariant.CONTAINED,
    label: 'Button',
    size: 'small',
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  argTypes: {
    variant: {
      options: Object.values(ButtonVariant),
      control: {
        type: 'select',
      },
    },
  },
};
