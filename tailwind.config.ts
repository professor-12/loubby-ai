import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        lightOpacityBlue: "#EAF3FF",
        hoverBlue: "#0047A4",
        SpecialBlue: "#1A73E8",
        primaryOrange: "#DC6803",
        primaryBlue: "#1A73E8",
        primaryGreen: "#039855",
        grayishAsh: "#98A2B3",
        lightGray: "#D0D5DD",
      }
    },
  },
  plugins: [],
};
export default config;
