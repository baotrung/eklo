"use client";

import React, { FC, ReactNode, useEffect, useRef, useState } from "react";
import styles from "./dropdown-menu.module.scss";

interface MenuItem {
  id: string;
  label: string;
  onSelected?: () => void;
}

export interface Props {
  items: Array<MenuItem>;
  activator: ReactNode;
  onItemSelected?: (item: MenuItem) => void;
}

export const DropdownMenu: FC<Props> = ({
  items,
  activator,
  onItemSelected,
}) => {
  const [expand, setExpand] = useState<boolean>(false);
  const [rightAligned, setRightAligned] = useState<boolean>(false);

  const menuRef = useRef<HTMLDivElement>(null);
  const activatorRef = useRef<HTMLDivElement>(null);

  function handleOnMenuItemClicked(item: MenuItem) {
    setExpand(false);
    item.onSelected?.();
    onItemSelected?.(item);
  }

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setExpand(false);
      }
    };

    const handleResize = () => {
      if (activatorRef.current) {
        const rect = activatorRef.current.getBoundingClientRect();
        const spaceOnRight = window.innerWidth - rect.right;
        setRightAligned(spaceOnRight < 160); // 160px is the min-width of the dropdown
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    window.addEventListener("resize", handleResize);
    handleResize(); // Call once to set initial alignment

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className={styles.menu} ref={menuRef}>
      <div onClick={() => setExpand(!expand)} ref={activatorRef}>
        {activator}
      </div>

      {expand && (
        <div
          className={`
            ${styles["item-list"]} 
            ${rightAligned ? styles["right-aligned"] : ""}
          `}
        >
          {items.map((item) => (
            <div
              className={styles["menu-item"]}
              key={item.id}
              onClick={() => handleOnMenuItemClicked(item)}
            >
              {item.label}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
