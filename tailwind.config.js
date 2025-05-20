/** @type {import('tailwindcss').Config} */
import plugin from "tailwindcss/plugin";

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      container: {
        center: true, // تخلي الحاوية تتوسّط تلقائياً

        padding: {
          DEFAULT: "15px", // padding يمين ويسار فقط (X axis)
          sm: "20px", // لما الشاشة تكون sm أو أكبر
          lg: "30px", // لما الشاشة تكون lg أو أكبر
        },
      },

      screens: {
        md: "750px", // نفس media query: min-width: 768px
        lg: "970px", // نفس media query: min-width: 992px
        xl: "1170px", // نفس media query: min-width: 1200px
      },

      colors: {
        midnight: "#121063",
        tahiti: "#3ab7bf",
        bermuda: "#78dcca",
      },

      fontFamily: {
        // sans: ["Playwrite DK Loopet", "sans-serif"], // استبدال الخط الرئيسي
        Coral: "Coral Pixels",
      },
      fontSize: {
        tobic: "25px",
      },
    },
  },
  plugins: [
    require("@tailwindcss/forms")({
      // strategy: "base", // only generate global styles
      strategy: "class", // only generate classes
    }),
  ],
};
