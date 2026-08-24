import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#059669", // Emerald Green (Agriculture/Nature)
        secondary: "#f59e0b", // Amber/Gold (Trust/Trade)
        accent: "#2563eb", // Blue (Services/Tech)
        background: "#ffffff",
        foreground: "#0f172a",
      },
      borderRadius: {
        lg: "12px",
        md: "8px",
        sm: "4px",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
export default config;
