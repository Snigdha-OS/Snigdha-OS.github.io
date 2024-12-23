export default {
  content: [
    "./src/**/*.{html,js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#6495ed',
      },
    },
  },
  plugins: [],
  corePlugins: {
    preflight: true,
  },
};
