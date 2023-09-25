"use client";

import clsx from "clsx";
import Link from "next/link";
import React, { AnchorHTMLAttributes } from "react";
import { getBgColor, getTextSize } from "@/utils/Theme";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  color?: "default" | "info" | "success" | "warning" | "error";
  size?: "xs" | "sm" | "md" | "lg" | "xl";
  className?: string;
  href?: string;
  children: React.ReactNode;
  onClick?: VoidFunction;
}

const Button: React.FC<ButtonProps> = ({
  color = "default",
  size = "md",
  className,
  href,
  children,
  onClick,
  ...rest
}) => {
  const handleClick = () => {
    onClick && onClick();
  };

  const btnClassNames = clsx(
    "transition duration-150 ease-in-out rounded text-white",
    {
      ...getBgColor(color, true),
      ...getTextSize(size),
      "py-1 px-2": size === "xs",
      "py-1 px-3": size === "sm",
      "py-2 px-4": size === "md",
      "py-3 px-5": size === "lg",
      "py-4 px-6": size === "xl",
    },
    className
  );

  return href ? (
    <Link
      href={href}
      className={btnClassNames}
      {...(rest as AnchorHTMLAttributes<HTMLAnchorElement>)}
    >
      {children}
    </Link>
  ) : (
    <button className={btnClassNames} onClick={handleClick} {...rest}>
      {children}
    </button>
  );
};

export default React.memo(Button);
