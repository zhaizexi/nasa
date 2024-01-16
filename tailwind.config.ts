import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
    },
    extend: {
      maxWidth: {
        "screen-3xl": "1800px",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        "jpl-red": "rgb(227, 25, 55)",
        "jpl-red-light": "rgb(231,59,84)",
        "dark-blue": "rgb(0,69,98)",
        "gray-mid-dark": "rgb(111,111,111)"
      },
      screens: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xs: "1000px",
        xl: "1280px",
        "2xl": "1440px",
        // '3xl': '1800px',
      },
      padding: {
        "22": "5.5rem",
        "18": "4.5rem"
      },
      keyframes: {
        "slide-in": {
          from: {
            transform: "translateX(-100%)",
            opacity: "0",
          },
          to: {
            transform: "translateX(0)",
            opacity: "1",
          },
        },
        "slide-out": {
          from: {
            transform: "translateX(0)",
            opacity: "1",
          },
          to: {
            transform: "translateX(100%)",
            opacity: "0",
          },
        },
      },
      animation: {
        'slide-in': 'slide-in 7s linear',
      }
    },
    fontSize: {
      "xs": "0.75rem",
      "sm": "0.875rem",
      "xl": "1.25rem",
      "2xl": "1.375rem",
      "3xl": "1.5rem",
      "4xl": "1.625rem",
      "5xl": "1.75rem",
      "6xl": "2rem",
      "7xl": "2.5rem",
      "8xl": "7.75rem",
      "9xl": "3.5rem",
      
    },
  },
  plugins: [],
};
export default config;
