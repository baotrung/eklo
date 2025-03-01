import React, { type FC } from "react";
import styles from "./icon.module.css";

interface Props {
  color: "primary" | "secondary" | "tertiary";
}

export const CloseIcon: FC<Props> = ({ color }) => {
  return (
    <svg
      className={styles[`color-${color}`]}
      xmlns="http://www.w3.org/2000/svg"
      height="40px"
      viewBox="0 -960 960 960"
      width="40px"
      fill="#e8eaed"
    >
      <path d="m251.33-204.67-46.66-46.66L433.33-480 204.67-708.67l46.66-46.66L480-526.67l228.67-228.66 46.66 46.66L526.67-480l228.66 228.67-46.66 46.66L480-433.33 251.33-204.67Z" />
    </svg>
  );
};
