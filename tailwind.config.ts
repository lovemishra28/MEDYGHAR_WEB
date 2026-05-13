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
        brand: {
          primary: '#1A73E8', // The correct MediGhar Blue
          dark: '#1557B0',    // Darker blue for hovers
          light: '#E8F0FE',   // Soft blue for backgrounds
        },
        gray: {
          text: '#4A4A4A',    // Soft dark gray for sub-headlines
          heading: '#202124', // Near-black for main titles
        }
      },
    },
  },
  plugins: [],
};
export default config;
