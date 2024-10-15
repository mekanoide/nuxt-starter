/** @type {import('tailwindcss').Config} */
export default {
  mode: 'jit',
  content: [
    './app/components/**/*.{js,vue,ts}',
    './app/layouts/**/*.vue',
    './app/pages/**/*.vue',
    './app/plugins/**/*.{js,ts}',
    './app/app.vue',
    './app/error.vue'
  ],
  theme: {
    fontFamily: {
      sans: ['DM Sans', 'sans-serif']
    },
    extend: {}
  },
  plugins: []
}
