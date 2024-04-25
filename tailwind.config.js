import plugin from "tailwindcss/plugin";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "5fcac7": "#5fcac7",
        ffc43a: "#ffc43a",
        "574c44": "#574c44",
        fff3d6: "#fff3d6",
        ff91a4: "#ff91a4",
      },
      fontSize: {
        9: "9px",
        11: "11px",
        13: "13px",
      },
    },
    keyframes: {
      swing: {
        "0%": { transform: "rotate(-3deg)" },
        "50%": { transform: "rotate(3deg)" },
        "100%": { transform: "rotate(-3deg)" },
      },
    },
    animation: {
      swing: "swing 2s ease-in-out infinite",
    },
  },
  plugins: [
    plugin(function ({ addUtilities }) {
      const newUtilities = {
        ".scrollbar-hide::-webkit-scrollbar": { display: "none" },
        ".scrollbar-hide": {
          "scrollbar-width": "none",
          "-ms-overflow-style": "none",
        },
      };
      addUtilities(newUtilities);
    }),
  ],
};
