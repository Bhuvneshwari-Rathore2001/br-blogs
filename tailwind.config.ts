/* eslint-disable import/no-extraneous-dependencies */
import tailwindTypography from '@tailwindcss/typography';
import type { Config } from 'tailwindcss';
import { fontFamily } from 'tailwindcss/defaultTheme';

export default {
  darkMode: ['class'],
  content: ['src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    fontFamily: {
      sans: ['var(--font-sans)', ...fontFamily.sans],
    },
    colors: {
      // Also we can use like this
      // gray: {
      //   lightGray: '#6C757D',
      //   darkGray: '#495057',
      // },

      lightGray: '#6C757D',
      darkGray: '#495057',
      white: '#FFFFFF',
    },
  },
  plugins: [tailwindTypography],
} satisfies Config;
