"use client";

import classNames from "classnames";
import React, { useEffect, useState } from "react";
import { Button } from "../../atoms/button";
import styles from "./modal.module.css";

interface ModalProps {
  trigger: React.ReactNode;
  children: React.ReactNode;
  title?: string;
  fullscreen?: boolean;
}

export const Modal = ({
  trigger,
  children,
  title,
  fullscreen = false,
}: ModalProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        closeModal();
      }
    };

    if (isOpen) {
      document.addEventListener("keydown", handleEscape);
      document.body.style.overflow = "hidden";
      // Trigger animation after a short delay
      setTimeout(() => setIsVisible(true), 50);
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  const closeModal = () => {
    setIsVisible(false);
    setTimeout(() => setIsOpen(false), 300); // Wait for animation to finish
  };

  if (!isOpen) {
    return (
      <div onClick={() => setIsOpen(true)} className={styles.trigger}>
        {trigger}
      </div>
    );
  }

  return (
    <div
      className={classNames(styles.overlay, {
        [styles.overlayVisible]: isVisible,
      })}
    >
      <div
        className={`${styles.modal} ${isVisible ? styles.modalVisible : ""} ${
          fullscreen ? styles.modalFullscreen : ""
        }`}
      >
        <div className={styles.header}>
          <h2 className={styles.title}>{title}</h2>
          <Button
            onClick={closeModal}
            className={styles.closeButton}
            variant="text"
          >
            <span style={{ fontSize: "2rem" }}>x</span>
          </Button>
        </div>
        <div
          className={`${styles.content} ${
            fullscreen ? styles.contentFullscreen : ""
          }`}
        >
          {children}
        </div>
      </div>
    </div>
  );
};
