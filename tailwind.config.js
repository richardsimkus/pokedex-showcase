import daisyui from "daisyui";

import customColors from "./src/util/customColors.js";

module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  daisyui: {
    themes: [
      "light",
      "dark",
      "default",
      "valentine",
      "cyberpunk",
      "retro",
      "aqua",
    ],
  },
  extend: {
    colors: customColors, // Extend the TailwindCSS theme with custom colors
  },
  plugins: [daisyui],
  theme: {},
};
