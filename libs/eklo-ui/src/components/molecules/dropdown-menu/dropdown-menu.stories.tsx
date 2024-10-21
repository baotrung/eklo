import type { Meta } from "@storybook/react";
import React from "react";
import { DropdownMenu } from "./dropdown-menu";

const meta = {
  title: "Eklo UI/molecules/Dropdown",
  component: DropdownMenu,
  tags: ["autodocs"],
} satisfies Meta<typeof DropdownMenu>;

export default meta;

export function Example() {
  return (
    <DropdownMenu
      activator={<button>Open Menu</button>}
      items={[
        {
          id: "1",
          label: "toto",
        },
        {
          id: "2",
          label: "tata",
        },
      ]}
    />
  );
}
