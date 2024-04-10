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
        muted: "#344054",
        lightOpacityGreen:"#ECFDF3"
      }  ,
      backgroundImage: {
        heroBg: "url('/LoubbyHeroBgSection.webp')",
        "subtract-1": "url('/Subtract-1.png')",
        gradientBg: "url('/Frame-445-1.png')"
      }
    },
     keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
  },
  plugins: [],
};
export default config;
