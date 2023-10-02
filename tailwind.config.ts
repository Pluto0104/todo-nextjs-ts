import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  safelist: [
    {
      pattern: /border-(red|green|blue|yellow|gray)-(300|400|500)/, // You can display all the colors that you need
      variants: ["focus"], // Optional
    },
    {
      pattern: /bg-(red|green|blue|yellow|gray)-(300|400|500)/,
      variants: ["hover"],
    },
    {
      pattern: /text-(red|green|blue|yellow|gray)-(300|500)/,
    },
    {
      pattern: /text-(xs|sm|md|lg|xl)/,
    },
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;
