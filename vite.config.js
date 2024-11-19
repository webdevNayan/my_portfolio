import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/my_portfolio/', // This matches your repository name
  plugins: [react()],
});

