import type { Config } from "tailwindcss";
const withMT = require("@material-tailwind/react/utils/withMT");

const config: Config = withMT({
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#8F87F1",
          50: "#F5F4FE",
          100: "#EBE9FD",
          200: "#D7D3FB",
          300: "#C3BDF9",
          400: "#AFA7F7",
          500: "#8F87F1",
          600: "#6F67E5",
          700: "#5F57D3",
          800: "#4F47C1",
          900: "#3F37AF",
        },
        secondary: {
          DEFAULT: "#C68EFD",
          50: "#F9F3FF",
          100: "#F3E7FF",
          200: "#E7CFFF",
          300: "#DBB7FF",
          400: "#CF9FFF",
          500: "#C68EFD",
          600: "#B57EFD",
          700: "#A46EFD",
          800: "#935EFD",
          900: "#824EFD",
        },
        accent: {
          DEFAULT: "#E9A5F1",
          50: "#FDF3FE",
          100: "#FBE7FD",
          200: "#F7CFFB",
          300: "#F3B7F9",
          400: "#EF9FF7",
          500: "#E9A5F1",
          600: "#E38BEB",
          700: "#DD71E5",
          800: "#D757DF",
          900: "#D13DD9",
        },
        soft: {
          DEFAULT: "#FED2E2",
          50: "#FFF5F9",
          100: "#FFEBF3",
          200: "#FFD7E7",
          300: "#FFC3DB",
          400: "#FFAFCF",
          500: "#FED2E2",
          600: "#FEBED0",
          700: "#FEAA BE",
          800: "#FE96AC",
          900: "#FE829A",
        },
      },
      backgroundImage: {
        "gradient-primary": "linear-gradient(135deg, #8F87F1 0%, #C68EFD 50%, #E9A5F1 100%)",
        "gradient-secondary": "linear-gradient(135deg, #C68EFD 0%, #E9A5F1 50%, #FED2E2 100%)",
        "gradient-soft": "linear-gradient(135deg, #FED2E2 0%, #E9A5F1 50%, #C68EFD 100%)",
      },
      boxShadow: {
        "glow-primary": "0 0 20px rgba(143, 135, 241, 0.4)",
        "glow-secondary": "0 0 20px rgba(198, 142, 253, 0.4)",
        "glow-accent": "0 0 20px rgba(233, 165, 241, 0.4)",
        "glow-soft": "0 0 30px rgba(254, 210, 226, 0.3)",
        "glow-combined": "0 0 40px rgba(143, 135, 241, 0.2), 0 0 60px rgba(198, 142, 253, 0.15)",
      },
      animation: {
        "float": "float 6s ease-in-out infinite",
        "pulse-slow": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "gradient": "gradient 8s ease infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-20px)" },
        },
        gradient: {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
      },
    },
  },
  plugins: [],
});

export default config;
