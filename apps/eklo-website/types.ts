interface NavLink {
  type: "navlink";
  label: string;
  path: string;
}

interface NavItemList {
  type: "list";
  label: string;
  items: Array<NavLink>;
}

export type NavItem = NavLink | NavItemList;
