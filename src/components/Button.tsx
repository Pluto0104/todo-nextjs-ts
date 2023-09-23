"use client";

import clsx from "clsx";
import Link from "next/link";
import React, { AnchorHTMLAttributes } from "react";

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
    "transition duration-150 ease-in-out rounded",
    {
      "bg-blue-500 hover:bg-blue-400 text-white": color === "info",
      "bg-green-500 hover:bg-green-400 text-white": color === "success",
      "bg-yellow-500 hover:bg-yellow-400 text-white": color === "warning",
      "bg-red-500 hover:bg-red-400 text-white": color === "error",
      "py-1 px-2 text-xs": size === "xs",
      "py-1 px-3 text-sm": size === "sm",
      "py-2 px-4 text-md": size === "md",
      "py-3 px-5 text-lg": size === "lg",
      "py-4 px-6 text-xl": size === "xl",
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
