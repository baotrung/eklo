import type { Meta, StoryObj } from '@storybook/react';

import { DropdownMenu } from './dropdown-menu';

const meta = {
  title: 'Eklo UI/molecules/Dropdown',
  component: DropdownMenu,
  tags: ['autodocs'],
} satisfies Meta<typeof DropdownMenu>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    items: [
      {
        id: "1",
        label: "toto"
      },
      {
        id: "2",
        label: "tata"
      },
      {
        id: "3",
        label: "titi"
      }
    ]
  }
};
