module.exports = {
  purge: {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    safelist: [
      'from-blue-500',
      'to-blue-600',
      'from-red-500',
      'to-red-600',
      'from-yellow-500',
      'to-yellow-600',
      'from-purple-500',
      'to-purple-600',
      'from-pink-500',
      'to-pink-600',
      'from-gray-500',
      'to-gray-600',
      'from-green-500',
      'to-green-600',
    ],
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
