/** @type {import('postcss-load-config').Config} */
const config = {
  plugins: {
    '@tailwindcss/postcss': {},
    autoprefixer: {}, // Recommended to include autoprefixer with Tailwind CSS
  },
};

export default config;