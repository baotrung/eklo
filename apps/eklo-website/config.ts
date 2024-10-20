import { NavItem } from "eklo-ui";

export const navItems: Array<NavItem> = [
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
]