import type { Meta, StoryObj } from '@storybook/react';
import SearchBtn from './SearchBtn';

const meta: Meta<typeof SearchBtn> = {
  title: 'Components/SearchBtn',
  component: SearchBtn,
  tags: ['autodocs'],
  argTypes: {},
  parameters: {
    backgrounds: {
      default: 'default',
      values: [{ name: 'default', value: '#100e19' }],
    },
  },
};

export default meta;
type Story = StoryObj<typeof SearchBtn>;

export const Large: Story = {
  args: {
    type: 'large',
  },
};

export const Small: Story = {
  args: {
    type: 'small',
  },
};
