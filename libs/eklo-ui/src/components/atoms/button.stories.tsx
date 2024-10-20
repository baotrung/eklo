import type { Meta, StoryObj } from "@storybook/react";

import { Button } from "./button";

const meta = {
  title: "Eklo UI/atoms/Button",
  component: Button,
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: ["default", "outlined", "text"],
    },
    color: {
      control: "select",
      options: ["primary", "secondary", "tertiary"],
    },
    fontSize: {
      control: "select",
      options: ["sm", "md", "lg"],
    },
  },
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    label: "Button",
    variant: "default",
    color: "primary",
    fontSize: undefined,
  },
};
