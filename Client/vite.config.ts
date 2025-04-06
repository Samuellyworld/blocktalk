import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react';
import svgr from 'vite-plugin-svgr';
import path from 'path';

export default defineConfig({
  plugins: [
    svgr({ 
      svgrOptions: {
        ref: true,
        exportType: 'named',
        namedExport: 'ReactComponent'
      },
      include: '**/*.svg'
    }),
    react(),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
})
