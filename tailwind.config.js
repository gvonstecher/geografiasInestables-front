/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/flowbite-react/**/*.js",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        oldStandard: 'var(--font-old_standard)',
        martel: 'var(--font-martel)',
        work: 'var(--font-work)',
        noto: 'var(--font-noto)',
        mono: 'var(--font-mono)',
      },
      colors: {
        light: {
          "verde-claro": "#26A69A",
          "verde-oscuro": "#083731",
          "verde": "#00695C",
          "gris":"#F3F3F3",
          "gris-oscuro":"#d3d3d3",
        },
        dark: {
          "verde-claro": "#26A69A",
          "verde-oscuro": "#002C26",
          "verde": "#00695C",
          "gris": "#f2f2f2",
          "blancuzco": "#F5FFFE",
        },
      },
    },
  },
  darkMode: 'class',
  plugins: [
    require("flowbite/plugin")
  ],
}