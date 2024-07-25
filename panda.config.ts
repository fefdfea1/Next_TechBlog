import { defineConfig } from "@pandacss/dev";

export default defineConfig({
  // Whether to use css reset
  preflight: true,

  // Where to look for your css declarations
  include: ["./app/**/*.{js,jsx,ts,tsx}", "./pages/**/*.{js,jsx,ts,tsx}"],

  // Files to exclude
  exclude: [],

  // Useful for theme customization
  theme: {
    extend: {
      tokens: {
        colors: {
          PostTitleColor: { value: "black" },
          MainBg: { value: "#F5F4F0" },
          PostDescColor: { value: "#999" },
          Primary: { value: "#ADB5DB" },
          TagBg: { value: "#FF5721" },
          HeaderTitleColor: { value: "black" },
          placeHolder: { value: "#7E7F7A" },
          searchBg: { value: "rgba(173,181,219, 0.2)" },
          LoadingBg: { value: "rgba(217,217,217,0.6)" },
        },
      },
    },
  },

  // The output directory for your css system
  outdir: "styled-system",
});
