// 🔒 Original config (kept for reference)
/*
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
})
*/

// ✅ Updated config (allows access from mobile devices on same Wi-Fi)
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    host: true, // 👈 This allows access via local network IP (like http://192.168.X.X:5173)
  },
});
