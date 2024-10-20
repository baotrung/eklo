"use client";

import classNames from "classnames";
import { FC } from "react";
import { MenuIcon } from "../../../components/icons/menu";
import { Button } from "../../atoms/button";
import { DropdownMenu } from "../../molecules/dropdown-menu/dropdown-menu";
import styles from "./styles.module.css";

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

interface Props {
  navItems: Array<NavItem>;
  brandLogo: string;
  sticky?: boolean;
}

export const HeaderBar: FC<Props> = ({
  navItems,
  brandLogo,
  sticky = false,
}) => {
  return (
    <div
      className={classNames(styles["header-bar"], {
        [styles.sticky]: sticky,
      })}
    >
      <div className={styles.wrap}>
        <div className={styles.brand}>
          <img src={brandLogo} />
        </div>
        <div className={styles["navbar-destop"]}>
          {navItems.map((navItem, index) => {
            if (navItem.type === "navlink") {
              return (
                <Button
                  key={index}
                  variant="text"
                  onClick={() => {}}
                  style={{ paddingLeft: "0.25rem", paddingRight: "0.25rem" }}
                >
                  {navItem.label}
                </Button>
              );
            }
            return (
              <DropdownMenu
                activator={<Button variant="text">{navItem.label}</Button>}
                key={index}
                items={navItem.items.map((link) => ({
                  id: link.label,
                  label: link.label,
                }))}
                onItemSelected={(i) => {}}
              />
            );
          })}
        </div>
        <div className={styles["mobile-menu"]}>
          <DropdownMenu activator={<MobileButton />} items={[]} />
        </div>
      </div>
    </div>
  );
};

const MobileButton: FC = () => {
  return (
    <Button variant="text">
      <MenuIcon color="primary" />
    </Button>
  );
};
