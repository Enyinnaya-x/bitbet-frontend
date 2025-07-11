/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bitPurple: '#6C2BD9',
        bitGold: '#FFD700',
        bitRed: '#E30613',
    },
  },
  plugins: [],
}
};
