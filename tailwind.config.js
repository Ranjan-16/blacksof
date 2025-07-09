/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      // Mobile devices (default, no prefix needed)
      sm: "640px", // Small mobile landscape

      // Tablet devices
      md: "768px", // Tablet portrait
      lg: "1024px", // Tablet landscape / Small laptop

      // Laptop screens
      xl: "1440px", // Large laptop / Small desktop

      // Desktop screens
      "2xl": "1441px", // Desktop and larger

      // Custom breakpoints for specific use cases
      mobile: { max: "767px" }, // Mobile only
      tablet: { min: "768px", max: "1023px" }, // Tablet only
      laptop: { min: "1024px", max: "1440px" }, // Laptop only
      desktop: { min: "1441px" }, // Desktop only
    },
    extend: {
      // Font families
      fontFamily: {
        sans: [
          "Geist",
          "-apple-system",
          "BlinkMacSystemFont",
          "Segoe UI",
          "Roboto",
          "Oxygen",
          "Ubuntu",
          "Cantarell",
          "sans-serif",
        ],
        mono: [
          "Geist Mono",
          "ui-monospace",
          "SFMono-Regular",
          "Monaco",
          "Consolas",
          "Liberation Mono",
          "Courier New",
          "monospace",
        ],
      },

      // Custom spacing for responsive design
      spacing: {
        18: "4.5rem",
        88: "22rem",
        128: "32rem",
      },

      // Custom widths including the 83% desktop header requirement
      width: {
        83: "83%",
        90: "90%",
        95: "95%",
      },

      // Custom max-widths for containers
      maxWidth: {
        "8xl": "88rem",
        "9xl": "96rem",
      },

      // Custom font sizes for responsive typography
      fontSize: {
        xs: ["0.75rem", { lineHeight: "1rem" }],
        sm: ["0.875rem", { lineHeight: "1.25rem" }],
        base: ["1rem", { lineHeight: "1.5rem" }],
        lg: ["1.125rem", { lineHeight: "1.75rem" }],
        xl: ["1.25rem", { lineHeight: "1.75rem" }],
        "2xl": ["1.5rem", { lineHeight: "2rem" }],
        "3xl": ["1.875rem", { lineHeight: "2.25rem" }],
        "4xl": ["2.25rem", { lineHeight: "2.5rem" }],
        "5xl": ["3rem", { lineHeight: "1" }],
        "6xl": ["3.75rem", { lineHeight: "1" }],
        "7xl": ["4.5rem", { lineHeight: "1" }],
        "8xl": ["6rem", { lineHeight: "1" }],
        "9xl": ["8rem", { lineHeight: "1" }],
      },

      // Custom container settings
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
          sm: "2rem",
          lg: "4rem",
          xl: "5rem",
          "2xl": "6rem",
        },
      },
    },
  },
  plugins: [],
};
