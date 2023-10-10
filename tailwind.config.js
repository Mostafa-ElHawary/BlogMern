/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontSize: {
        'clamp': ['clamp(13px, 1.2vw, 22px)', 'line-height'],
      },
      fontBut: {
        'clampBut': ['clamp(12px, 1vw, 20px)', 'line-height'],
      },
      fontSize: {
        'fontintroName': ['clamp(10px, 1vw, 20px)', 'line-height'],
      },
    },
  },
  plugins: [],
  darkMode: "class",
}
