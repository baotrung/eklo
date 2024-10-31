import { ButtonHTMLAttributes, forwardRef, ReactNode } from "react";
import { twMerge } from "tailwind-merge";

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
      className={twMerge(
        "border-none  rounded-md",
        "py-sm px-md m-0",
        `bg-${color} text-white font-body font-normal text-${fontSize}`,
        "flex items-center justify-center",

        // variant === "default" && `border-none bg-${color} text-white`,
        variant === "text" && `bg-transparent text-${color}`,
        variant === "outlined" &&
          `border border-${color} bg-transparent text-${color}`,

        props.className
      )}
      ref={ref}
    >
      {children}
    </button>
  );
});

Button.displayName = "ui-button";
