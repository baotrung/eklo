"use client";
import brandLogo from "@/assets/logo-eklo.svg";
import { MaxWidthContainer } from "@/components/MaxWidthContainer";
import {
  Button,
  DropdownMenu,
  MenuIcon,
  Modal,
  useModal,
} from "@/components/ui";
import { navItems } from "@/config";
import { Link, useRouter } from "@/i18n/routing";
import { useTranslations } from "next-intl";
import Image from "next/image";
import type { FC } from "react";
import styles from "./Header.module.scss";

export const Header: FC = () => {
  const router = useRouter();
  const mobileNavModal = useModal();
  const t = useTranslations("header");

  return (
    <>
      <MaxWidthContainer
        containerClassName={styles.container}
        wrapperClassname={styles.wrapper}
      >
        {/* brand */}
        <Image
          src={brandLogo}
          alt="brand"
          className={styles.brand}
          onClick={() => {
            router.push("/");
          }}
        />

        {/* Navbar desktop */}
        <div className={styles["navbar-lg"]}>
          {navItems.map((navItem, index) => {
            if (navItem.type === "navlink") {
              return (
                <Button
                  key={index}
                  variant="text"
                  onClick={() => {
                    router.push(navItem.path);
                  }}
                  className={styles["nav-item"]}
                >
                  {t(navItem.label)}
                </Button>
              );
            }
            return (
              <DropdownMenu
                activator={
                  <Button variant="text" className={styles["nav-item"]}>
                    {t(navItem.label)}
                  </Button>
                }
                key={index}
                items={navItem.items.map((link) => ({
                  id: link.label,
                  label: t(link.label),
                  onSelected: () => {
                    router.push(link.path);
                  },
                }))}
              />
            );
          })}
        </div>

        {/* trigger button for mobile menu  */}
        <Button
          variant="text"
          onClick={mobileNavModal.openModal}
          className={styles["menu-btn"]}
        >
          <MenuIcon color="primary" />
        </Button>
      </MaxWidthContainer>

      {/* modal for navmenu in smallscreen */}
      <Modal
        isOpen={mobileNavModal.isOpen}
        onClose={mobileNavModal.closeModal}
        fullScreen
      >
        <div className={styles.mobileNav}>
          <div className={styles["item-wrap"]}>
            <Link
              href={"/"}
              className={styles["item"]}
              onClick={mobileNavModal.closeModal}
            >
              {t("home")}
            </Link>
          </div>
          {navItems.map((item) => {
            if (item.type === "navlink") {
              return (
                <div className={styles["item-wrap"]} key={item.label}>
                  <Link
                    href={item.path}
                    className={styles["item"]}
                    onClick={mobileNavModal.closeModal}
                  >
                    {t(item.label)}
                  </Link>
                </div>
              );
            }
            return (
              <div className={styles["group"]} key={item.label}>
                <div className={styles.name}>{t(item.label)}</div>
                <div className={styles["items"]}>
                  {item.items.map((subItem) => (
                    <Link
                      href={subItem.path}
                      className={styles["item-wrap"]}
                      key={subItem.label}
                      onClick={mobileNavModal.closeModal}
                    >
                      {t(subItem.label)}
                    </Link>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </Modal>
    </>
  );
};
