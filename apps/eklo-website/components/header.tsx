"use client";

import { FC, useState } from "react";
import styles from "./header.module.css";
import classNames from "classnames";
import Link from "next/link";

interface NavSubItems {
  type: "subItems";
  label: string;
  children: Array<NavLink>;
}

interface NavLink {
  type: "navlink";
  label: string;
  path: string;
}

interface Props {
  navItems: Array<NavLink | NavSubItems>;
}

export const Header: FC<Props> = ({ navItems }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  const toggleDropdown = (item: string) => {
    setOpenDropdown((prev) => (prev === item ? null : item));
  };

  return (
    <nav className={styles.header}>
      <a className={styles["header_logo"]} href="#">
        Logo
      </a>
      <button
        className={styles["header_mobile-menu-button"]}
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
      >
        ☰
      </button>
      <ul
        className={`
        ${styles["navbar"]} 
        ${mobileMenuOpen ? styles["navbar--open"] : ""}
        `}
      >
        {navItems.map((item, index) => (
          <li className={styles["nav-item"]} key={index}>
            {item.type === "navlink" && (
              <Link href={item.path} className={styles["nav-link"]}>
                {item.label}
              </Link>
            )}
            {item.type === "subItems" && (
              <>
                <div className={styles["nav-link"]}>{item.label}</div>
              </>
            )}
          </li>
        ))}

        {/* <NavItem>
          <NavLink href="#">Home</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="#" onClick={() => toggleDropdown("products")}>
            Products {openDropdown === "products" ? "▲" : "▼"}
          </NavLink>
          <DropdownContent isOpen={openDropdown === "products"}>
            <DropdownItem>
              <NavLink href="#">Product 1</NavLink>
            </DropdownItem>
            <DropdownItem>
              <NavLink href="#">Product 2</NavLink>
            </DropdownItem>
            <DropdownItem>
              <NavLink href="#">Product 3</NavLink>
            </DropdownItem>
          </DropdownContent>
        </NavItem>
        <NavItem>
          <NavLink href="#" onClick={() => toggleDropdown("services")}>
            Services {openDropdown === "services" ? "▲" : "▼"}
          </NavLink>
          <DropdownContent isOpen={openDropdown === "services"}>
            <DropdownItem>
              <NavLink href="#">Service 1</NavLink>
            </DropdownItem>
            <DropdownItem>
              <NavLink href="#">Service 2</NavLink>
            </DropdownItem>
          </DropdownContent>
        </NavItem>
        <NavItem>
          <NavLink href="#">Contact</NavLink>
        </NavItem> */}
      </ul>
    </nav>
  );
};
