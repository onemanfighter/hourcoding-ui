import type { Meta, StoryObj } from '@storybook/react';
import { GenericIcon, HourcodingIcon, Icon } from '../src/components';
import { CommonIcon } from '../src/components/icon/types';

const meta = {
  title: 'Example/Icon',
  component: Icon,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs'],
  argTypes: {
    category: { options: ['generic', 'hourcoding', 'common'], control: { type: 'inline-radio' } },
    variant: {
      options: ['filled', 'outlined'],
      control: { type: 'inline-radio' },
      if: { arg: 'category', eq: 'generic' }
    },
    icon: {
      options: [
        ...Object.values(HourcodingIcon).map((icon) => icon),
        ...Object.values(GenericIcon).map((icon) => icon),
        ...Object.values(CommonIcon).map((icon) => icon)
      ],
      control: { type: 'select' }
    },
    size: { options: ['small', 'medium', 'large'], control: { type: 'select' } },
    color: { options: ['primary', 'secondary', 'tertiary'], control: { type: 'select' } }
  }
} satisfies Meta<typeof Icon>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    variant: 'filled',
    size: 'medium',
    category: 'generic',
    icon: GenericIcon.HOME
  }
};
