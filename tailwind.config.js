// tailwind.config.js
import tailwindcss from 'tailwindcss';
import autoprefixer from 'autoprefixer';
import vue from '@vitejs/plugin-vue';

export default {
  content: [
    './index.html',
    './src/**/*.{vue,js,ts,jsx,tsx}',
     'node_modules/flowbite-vue/**/*.{js,jsx,ts,tsx,vue}',
    'node_modules/flowbite/**/*.{js,jsx,ts,tsx}'
  ],
  darkMode: 'class', // أو 'media' إذا كنت تريد التفعيل بناءً على تفضيلات النظام
  theme: {
    extend: {},
  },
  plugins: [
    tailwindcss(),
    autoprefixer(),
    vue(),
    // eslint-disable-next-line no-undef
    require('flowbite/plugin'),
  ],

  
};
