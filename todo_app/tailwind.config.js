/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        xs: "481px"
      },
      backgroundImage: {
        "mobile-bg-light": "url('./src/assets/images/bg-mobile-light.jpg')",
        "desktop-bg-light": "url('./src/assets/images/bg-desktop-light.jpg')",
        "check-bg": "linear-gradient(to right, hsl(192, 100%, 67%), hsl(280, 87%, 65%))",
      },
      colors: {
        primary: {
          "bright-blue": "hsl(220, 98%, 61%)",
          "check-bg": "var(--gradient-check-bg)",
        },
        neutral: {
          light: {
            "very-light-gray": "hsl(0, 0%, 98%)",
            "very-light-grayish-blue": "hsl(236, 33%, 92%)",
            "light-grayish-blue": "hsl(233, 11%, 84%)",
            "dark-grayish-blue": "hsl(236, 9%, 61%)",
            "very-dark-grayish-blue": "hsl(235, 19%, 35%)",
          },
          dark: {
            "very-dark-blue": "hsl(235, 21%, 11%)",
            "very-dark-desaturated-blue": "hsl(235, 24%, 19%)",
            "light-grayish-blue": "hsl(234, 39%, 85%)",
            "light-grayish-blue-hover": "hsl(236, 33%, 92%)",
            "dark-grayish-blue": "hsl(234, 11%, 52%)",
            "very-dark-grayish-blue": "hsl(233, 14%, 35%)",
            "very-dark-grayish-blue-2": "hsl(237, 14%, 26%)",
          },
        },
      },
    },
  },
  plugins: [],
};
