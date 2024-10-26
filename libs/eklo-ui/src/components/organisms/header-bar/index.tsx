"use client";

import classNames from "classnames";
import React, { FC } from "react";
import { Button } from "../../atoms/button";
import { MenuIcon } from "../../icons/menu";
import { DropdownMenu } from "../../molecules/dropdown-menu/dropdown-menu";
import { Modal } from "../../molecules/modal/modal";
import { useModal } from "../../molecules/modal/useModal";
import styles from "./styles.module.scss";

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
  const mobileNavModal = useModal();

  return (
    <>
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
                    <span className={styles.navItemDesktop}>
                      {navItem.label}
                    </span>
                  </Button>
                );
              }
              return (
                <DropdownMenu
                  activator={
                    <Button variant="text">
                      <span className={styles.navItemDesktop}>
                        {navItem.label}
                      </span>
                    </Button>
                  }
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
            <Button variant="text" onClick={mobileNavModal.openModal}>
              <MenuIcon color="primary" />
            </Button>
          </div>
        </div>
      </div>
      <Modal
        isOpen={mobileNavModal.isOpen}
        onClose={mobileNavModal.closeModal}
        fullScreen
      >
        <div className={styles.mobileNav}>
          {navItems.map((item) => {
            if (item.type === "navlink") {
              return (
                <div className={styles["mobileNav-item-wrap"]} key={item.label}>
                  <div>________________________________________________</div>
                  <div className={styles["mobileNav-item"]}>{item.label}</div>
                </div>
              );
            }
            return (
              <div className={styles["mobileNav-item-wrap"]} key={item.label}>
                <div>________________________________________________</div>
                <div className={styles["mobileNav-group"]}>{item.label}</div>
                {item.items.map((subItem) => (
                  <div className={styles["mobileNav-item"]} key={subItem.label}>
                    {subItem.label}
                  </div>
                ))}
              </div>
            );
          })}
        </div>
      </Modal>
    </>
  );
};
