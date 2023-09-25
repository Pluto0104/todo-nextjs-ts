export const getBorderColor = (color: string, focusable?: boolean) => ({
  "border-gray-300": color === "default",
  "border-blue-500": color === "info",
  "border-green-500": color === "success",
  "border-yellow-500": color === "warning",
  "border-red-500": color === "error",
  ...(focusable && {
    "focus:border-white": color === "default",
    "focus:border-blue-400": color === "info",
    "focus:border-green-400": color === "success",
    "focus:border-yellow-400": color === "warning",
    "focus:border-red-400": color === "error",
  }),
});

export const getBgColor = (color: string, hoverable?: boolean) => ({
  "bg-blue-500": color === "info",
  "bg-green-500": color === "success",
  "bg-yellow-500": color === "warning",
  "bg-red-500": color === "error",
  ...(hoverable && {
    "hover:bg-blue-400": color === "info",
    "hover:bg-green-400": color === "success",
    "hover:bg-yellow-400": color === "warning",
    "hover:bg-red-400": color === "error",
  }),
});

export const getTextColor = (color: string) => ({
  "text-gray-300 ": color === "default",
  "text-blue-500": color === "info",
  "text-green-500": color === "success",
  "text-yellow-500": color === "warning",
  "text-red-500": color === "error",
});

export const getTextSize = (size: string) => ({
  "text-xs": size === "xs",
  "text-sm": size === "sm",
  "text-md": size === "md",
  "text-lg": size === "lg",
  "text-xl": size === "xl",
});
