import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: 'Estudoss/CalcValidade/', // 👈 preciso apontar o caminho completo da subpasta
});