import type { Meta, StoryObj } from "@storybook/react";
import { HeaderBar } from "./index";
import logo from "../../../assets/logo-eklo.svg";
import React from "react";

const meta = {
  title: "Eklo UI/organism/Header Menu",
  component: HeaderBar,
  tags: ["autodocs"],
  argTypes: {},

  decorators: [
    (Story) => (
      <div>
        {/* 👇 Decorators in Storybook also accept a function. Replace <Story/> with Story() to enable it  */}
        <Story />
        <div
          style={{
            display: "flex",
            width: "100%",
            height: "30px",
            backgroundColor: "cyan",
          }}
        >
          under
        </div>
      </div>
    ),
  ],
} satisfies Meta<typeof HeaderBar>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Example: Story = {
  args: {
    brandLogo: logo,
    navItems: [
      {
        type: "list",
        label: "services",
        items: [
          {
            type: "navlink",
            label: "coaching",
            path: "/",
          },
          {
            type: "navlink",
            label: "follow",
            path: "/",
          },
        ],
      },
      {
        type: "navlink",
        label: "about",
        path: "/",
      },
      {
        type: "navlink",
        label: "blog",
        path: "/",
      },
      {
        type: "list",
        label: "services",
        items: [
          {
            type: "navlink",
            label: "coaching",
            path: "/",
          },
          {
            type: "navlink",
            label: "follow",
            path: "/",
          },
        ],
      },
    ],
  },
};
