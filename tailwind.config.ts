import type { Config } from "tailwindcss";

const colors = {
  maize: "#FFC806",
  umblue: "#02306E",
  offwhite: "#FAF9F6",
};

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        maize: colors.maize,
        umblue: colors.umblue,
        offwhite: colors.offwhite,
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [],
} satisfies Config;
