const config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter, sans-serif', { fontFeatureSettings: '"cv11"' }],
      },
      colors: {
        black: '#000',
      },
      zIndex: {
        1000: '1000', // 0000-1999: основной контент
        2000: '2000', // 2000-2999: выпадающие списки
        3000: '3000', // 3000-3999: навигация
        4000: '4000', // 4000-4999: шапка и подвал
        5000: '5000', // 5000-7999: другое
        6000: '6000', // 6000-6999: анимации
        7000: '7000',
        8000: '8000', // 8000-8999: модальные окна
        9000: '9000', // 9000-9999: уведомления
        9999: '9999', // 9000-9999: уведомления
      },
    },
  },
  plugins: [],
  darkMode: 'class',
}
/** @type {import('tailwindcss').Config} */
module.exports = config
