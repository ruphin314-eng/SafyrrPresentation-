/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
  extend: {
    colors: {
      background: "#ffffff",
      foreground: "#1a1a1a",
      gold: "#D4AF37",
      "gold-light": "#F7E7A1",
      charcoal: "#1a1a1a",
      border: "#e5e7eb",
    },
    backgroundImage: {
      "gradient-gold": "linear-gradient(90deg, #D4AF37, #F7E7A1)",
    },
    boxShadow: {
      gold: "0 4px 14px rgba(212, 175, 55, 0.4)",
    },
  },
},
  plugins: [],
};