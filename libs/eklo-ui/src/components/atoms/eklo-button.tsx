"use client";

import React, { ButtonHTMLAttributes, FC } from "react";
import styles from "./eklo-button.module.css";

export interface EkloButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  label: string;
  variant?: "default" | "outlined" | "text";
  color?: "primary" | "secondary" | "tertiary";
}

export const EkloButton: FC<EkloButtonProps> = (props) => {
  const { label, variant = "default", color = "primary" } = props;
  return (
    <button
      {...props}
      type="button"
      className={`
      ${styles.button}
      ${styles[`${variant}-${color}`]}
    `}
    >
      {label}
    </button>
  );
};
