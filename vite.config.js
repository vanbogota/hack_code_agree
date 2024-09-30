import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import mkcert from 'vite-plugin-mkcert';

export default defineConfig({
  plugins: [react(), mkcert()],
  server: {
    watch: {
      usePolling: true
    },
    host: true,
    strictPort: true,
    https: true,
    port: 5173
  }
});
