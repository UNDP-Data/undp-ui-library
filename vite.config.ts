 
import path from 'path';

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import eslint from 'vite-plugin-eslint';
import dts from 'vite-plugin-dts';
import tailwindcss from '@tailwindcss/vite';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    dts({ rollupTypes: true }), 
    react(), 
    eslint(),
    tailwindcss(),
  ],
  /*
  define: {
    'process.env.NODE_ENV': JSON.stringify('production'),
  },
  */
  build: {
    cssCodeSplit: false,
    lib: {
      entry: 'src/index.ts',
      name: 'undpDesignSystem',
      fileName: format => {
        if (format === 'es') return 'index.js'; // ES Module
        if (format === 'cjs') return 'index.cjs'; // CommonJS Module
        return 'index.umd.js'; // UMD Module
      },
      formats: ['es', 'cjs', 'umd'],
    },
    rollupOptions: {
      external: ['react', 'react-dom' ],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
        },
        assetFileNames: (assetInfo) => {
          if (assetInfo.names && assetInfo.names.includes('undp-design-system-react.css')) {
            return 'style.css';
          }
          return 'assets/[name][extname]';
        },
      },
    },
    sourcemap: true,
    emptyOutDir: true,
  },
  server: {
    cors: {
      origin: '*',
      methods: ['GET'],
      preflightContinue: false,
      optionsSuccessStatus: 204,
    },
  },
  resolve: { alias: { '@': path.resolve(__dirname, './src') } },
});
