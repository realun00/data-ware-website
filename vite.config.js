import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import eslint from 'vite-plugin-eslint';

export default defineConfig({
  plugins: [
    react(),
    {
      ...eslint({
        failOnWarning: true,
        failOnError: true,
      }),
      apply: 'build',
    },
    {
      ...eslint({
        failOnWarning: false,
        failOnError: true,
      }),
      apply: 'serve',
      enforce: 'post',
    },
  ],
  resolve: {
    alias: {
      assets: '/src/assets',
      router: '/src/router',
      components: '/src/components',
      translations: '/src/translations', // Update this line
      hooks: '/src/hooks',
    },
  },
});
