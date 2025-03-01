"use client";

import classNames from "classnames";
import React, { type FC, type PropsWithChildren } from "react";
import { Button } from "../../atoms/button";
import { CloseIcon } from "../../icons/close";
import styles from "./modal.module.scss";

interface ModalProps extends PropsWithChildren {
  fullScreen?: boolean;
  isOpen: boolean;
  onClose?: () => void;
}

export const Modal: FC<ModalProps> = ({
  isOpen,
  fullScreen = false,
  children,
  onClose,
}) => {
  return (
    isOpen && (
      <div
        className={classNames(styles.overlay, {
          [styles["ovelay-invisible"]]: fullScreen,
        })}
        onClick={onClose}
      >
        <div
          className={classNames(styles.modal, {
            [styles["modal-fullscreen"]]: fullScreen,
          })}
          onClick={(event) => {
            event.stopPropagation();
          }}
        >
          <div className={styles.header}>
            <Button
              onClick={onClose}
              className={styles.closeButton}
              variant="text"
            >
              <CloseIcon color="primary" />
            </Button>
          </div>
          <div className={classNames(styles.content)}>{children}</div>
        </div>
      </div>
    )
  );
};
