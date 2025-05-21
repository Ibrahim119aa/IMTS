/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        'custom': "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px",
      },
      top: {
        '63': '63%',
      },
      screens: {
        'mobile-extra-small': { 'max': '399px' },  // Max width of 399px
        'mobile-small': { 'min': '400px', 'max': '638px' }, // 400px to 638px
        'mobile': { 'min': '639px', 'max': '767px' }, // 639px to 767px
        'tablet': { 'min': '768px', 'max': '1023px' }, // 768px to 1023px
        'large': { 'min': '1024px' }, 
        
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
     
    },
  },
  plugins: [],
};
