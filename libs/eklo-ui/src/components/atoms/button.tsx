"use client";

import classNames from "classnames";
import { ButtonHTMLAttributes, forwardRef, ReactNode } from "react";
import styles from "./button.module.css";

export interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "outlined" | "text";
  color?: "primary" | "secondary" | "tertiary";
  fontSize?: "sm" | "md" | "lg";
  children?: ReactNode;
}

export const Button = forwardRef<HTMLButtonElement, Props>((props, ref) => {
  const {
    children,
    variant = "default",
    color = "primary",
    fontSize = "md",
  } = props;
  return (
    <button
      {...props}
      type="button"
      className={classNames(
        styles.button,
        styles[`${variant}-${color}`],
        styles[`fontSize-${fontSize}`]
      )}
      ref={ref}
    >
      {children}
    </button>
  );
});
