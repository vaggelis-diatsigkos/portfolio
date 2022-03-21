module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./core/**/*.{js,ts}"
  ],
  theme: {
    extend: {
      animation: {
        blob: "blob 6s infinite",
        tilt: 'tilt 10s infinite linear',
      },
      keyframes: {
        blob: {
          "0%": {
            transform: "translate(0px, 0px) scale(1.05)",
          },
          "33%": {
            transform: "translate(50px, -50px) scale(1.3)",
          },
          "66%": {
            transform: "translate(-50px, 20px) scale(1.1)",
          },
          "100%": {
            transform: "tranlate(0px, 0px) scale(1.05)",
          },
        },
        tilt: {
          '0%, 50%, 100%': {
            transform: 'rotate(0deg)',
          },
          '25%': {
            transform: 'rotate(0.5deg)',
          },
          '75%': {
            transform: 'rotate(-0.5deg)',
          },
        },
      },
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
