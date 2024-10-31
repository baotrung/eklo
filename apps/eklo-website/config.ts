import { type NavItem } from "./types";

export const navItems: Array<NavItem> = [
  {
    type: "list",
    label: "activities",
    items: [
      {
        type: "navlink",
        label: "toi_ke_chuyen",
        path: "/",
      },
      {
        type: "navlink",
        label: "thu_vien",
        path: "/",
      },
      {
        type: "navlink",
        label: "podcast",
        path: "/",
      },
    ],
  },
  {
    type: "list",
    label: "services",
    items: [
      {
        type: "navlink",
        label: "coaching_1_1",
        path: "/",
      },
      {
        type: "navlink",
        label: "workshop",
        path: "/workshop",
      },
    ],
  },
  {
    type: "navlink",
    label: "blog",
    path: "/",
  },
];
