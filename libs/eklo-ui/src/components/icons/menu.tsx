import { FC } from "react";
import styles from "./menu.module.css";

interface Props {
  color: "primary" | "secondary" | "tertiary";
}

export const MenuIcon: FC<Props> = ({ color }) => {
  return (
    <svg
      className={styles[`color-${color}`]}
      xmlns="http://www.w3.org/2000/svg"
      height="40px"
      viewBox="0 -960 960 960"
      width="40px"
      fill="#e8eaed"
    >
      <path d="M120-240v-66.67h720V-240H120Zm0-206.67v-66.66h720v66.66H120Zm0-206.66V-720h720v66.67H120Z" />
    </svg>
  );
};