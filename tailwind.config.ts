import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        shippori: ["Shippori Mincho", "serif"],
        mono: ["DM Mono", "monospace"],
        sans: ["DM Sans", "sans-serif"],
      },
      colors: {
        bg: "#f7f4ef",
        ink: "#1a1a1a",
        fawn: "#c49858",
        "fawn-light": "#e8cca0",
        "fawn-pale": "#f0e4c8",
        anko: "#1c0c2c",
        "anko-mid": "#3a1c52",
        "anko-soft": "#5a3472",
        muted: "#8a7a60",
      },
    },
  },
  plugins: [],
};

export default config;
