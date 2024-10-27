import { type NavItem } from "./types";

export const navItems: Array<NavItem> = [
  {
    type: "navlink",
    label: "about",
    path: "/about",
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
];
