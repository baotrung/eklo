import { type NavItem } from "./types";

export const navItems: Array<NavItem> = [
  {
    type: "list",
    label: "services",
    items: [
      {
        type: "navlink",
        label: "coaching_1_1",
        path: "/services/coaching",
      },
      {
        type: "navlink",
        label: "workshop",
        path: "/services/workshop",
      },
      {
        type: "navlink",
        label: "public_speaking",
        path: "/services/public-speaking",
      },
    ],
  },
  {
    type: "navlink",
    label: "activities",
    path: "/activities",
  },
  {
    type: "navlink",
    label: "blog",
    path: "/",
  },
];
