import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Must match your GitHub repo name (path after github.io). Change if repo is renamed.
const GH_PAGES_BASE = '/saimposter/'

export default defineConfig(({ command }) => ({
  // Dev: '/' so http://localhost:4000/ works. Build: subpath for GitHub Pages project sites.
  base: command === 'build' ? GH_PAGES_BASE : '/',
  plugins: [react()],
  server: {
    host: '0.0.0.0',
    port: 4000,
  },
}))

