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
        primary: "#132277",
        secondary: "#4052c6",
        text: "#525762",
        blue: "#3a7df4",
        orange: "#ff823b",
        red: "#fa5352",
        green: "#28c064",
      },
    },
  },
  plugins: [],
};
export default config;
