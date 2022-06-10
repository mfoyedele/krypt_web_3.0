import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

import reactIcons from 'vite-plugin-react-icons';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),

    reactIcons({
      scale: 1, // Scale of icons against 1em
      defaultStyle: '', // Style apply to icons
      defaultClass: '', // Class names apply to icons
    }),
  ],
});
