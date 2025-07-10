import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/Estudoss/CalcValidade/', // 👈 caminho completo da subpasta
});