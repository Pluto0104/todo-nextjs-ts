"use client";

import clsx from "clsx";
import React from "react";
import { UseFormRegister } from "react-hook-form";
import { getTextColor, getBorderColor, getTextSize } from "@/utils/Theme";

export interface TextFieldProps
  extends Omit<
    React.InputHTMLAttributes<HTMLInputElement>,
    "size" | "onChange"
  > {
  label: string;
  helperText?: string;
  error?: boolean;
  color?: "success" | "error" | "warning" | "info" | "default";
  size?: "xs" | "sm" | "md" | "lg" | "xl";
  defaultValue?: string | number;
  value?: string | number;
  register?: UseFormRegister<any>;
  required?: boolean;
  onChange?: (value: string | number) => void;
}

const TextField: React.FC<TextFieldProps> = ({
  label,
  helperText = "",
  color = "default",
  size = "md",
  defaultValue,
  value,
  error,
  required,
  register,
  onChange,
  ...rest
}) => {
  if (error) color = "error";

  const handleChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    onChange && onChange(e.target.value);
  };

  return (
    <div className="flex flex-col">
      <div
        className={clsx("flex items-center max-sm:flex-col", {
          "mb-4": !helperText,
        })}
      >
        {label && (
          <label
            className={clsx(
              "block font-bold px-2 max-sm:w-full w-1/6 max-sm:text-left text-right",
              {
                ...getTextSize(color),
                ...getTextColor(color),
              }
            )}
          >
            {`${label}:`}
          </label>
        )}
        <input
          className={clsx(
            "border rounded max-sm:w-full w-5/6 px-2 focus:outline-none bg-transparent transition ease-in-out duration-150",
            {
              "py-1": size === "xs" || size === "sm",
              "py-2": size === "md",
              "py-3": size === "lg",
              "py-4": size === "xl",
              ...getTextSize(size),
              ...getBorderColor(color, true),
            }
          )}
          defaultValue={defaultValue}
          value={value}
          {...(register
            ? register(rest.name || label, {
                required: {
                  value: !!required,
                  message: `${label} is required.`,
                },
              })
            : { onChange: handleChange })}
          {...rest}
        />
      </div>
      {helperText && (
        <p
          className={clsx("text-right mt-1 mb-4 text-xs", getTextColor(color))}
        >
          {helperText}
        </p>
      )}
    </div>
  );
};

export default React.memo(TextField);
