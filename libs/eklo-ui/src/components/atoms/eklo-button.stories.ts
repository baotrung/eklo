import type { Meta, StoryObj } from '@storybook/react';

import { EkloButton } from './eklo-button';

const meta = {
  title: 'Eklo UI/atoms/Eklo Button',
  component: EkloButton,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: "select",
      options: ["default", "outlined", "text"]
    },
    color: {
      control: "select",
      options: ["primary", "secondary", "tertiary"]
    },
  }
} satisfies Meta<typeof EkloButton>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    label: "Button",
    variant: "default",
    color: "primary",
  }
};
