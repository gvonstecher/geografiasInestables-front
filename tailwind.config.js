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
        "green": "var(--green)",
        "light-green": "var(--light-green)",
        "dark-green": "var(--dark-green)",
      },
    },
  },
  plugins: [
    require("flowbite/plugin")
  ],
}