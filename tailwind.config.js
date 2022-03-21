module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./core/**/*.{js,ts}"
  ],
  theme: {
    extend: {
    },
    fontFamily: {
      'sans': ['Inter', 'sans-serif'],
      'mono': ['JetBrains Mono', 'monospace']
    }
  },
  plugins: [],
  darkMode: 'class',
  important: true
}
