import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      'xs': '280px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1440px',
      '3xl': '1536px',
      '4xl': '1736px',
      '5xl': '1920px',
    },
    extend: {
      colors: {
        primary: {
          DEFAULT: "#FF7D29",
          50: "#FDEEE9",
          100: "#EA5326",
          200: "#EB2926",
          
        },
        secondary: {
          DEFAULT: "#00B047",
          50: "#9A9CAA",
          100: "#575858",
          200: "#FDFDFE",
        },
        dark: {
          DEFAULT: "#000000",
          50: "#334A55",
          100: "#232323",
          200: "#758888",
          300: "#1D242D",
          400: "#1A1A1A",
          500: "#666666",
          600: "#1A1A1A",
          700: "#727272",
          800: "#808080",
          900: "#4D4D4D",
        },
        gray: {
          DEFAULT: "#F8FAFC",
          50: "#BBBBBB",
          100: "#F8FAFC",
          200: "#758888",
          300: "#F8FAFC",
          400: "#DFE1E3",
          500: "#F2F2F2",
          600: "#999999",
          700: "#333333",
          800: "#B3B3B3",
          900: "#272343",
        },
        
      },
      // fontFamily: {
      //   montserrat: ['var(--font-montserrat)'],
      // },
    },
  },
  plugins: [],
} satisfies Config;

