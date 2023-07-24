import path from 'node:path'
import process from 'node:process'
import { defineConfig, loadEnv } from 'vite'
import { createVitePlugins, entryPoints, proxy } from './build/vite'
import type { ConfigEnv, UserConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig(({ command, mode }: ConfigEnv): UserConfig => {
  const root = process.cwd()
  const isBuild = command === 'build'
  const isProd = mode === 'production'
  const env = loadEnv(mode, root) as ImportMetaEnv

  return {
    base: './',
    root: path.resolve(root, 'src/pages'),
    publicDir: path.resolve(root, 'public'),
    resolve: {
      alias: [
        {
          find: /@\//,
          replacement: `${path.resolve(__dirname, './src')}/`,
        },
      ],
    },
    server: {
      host: '0.0.0.0',
      port: env.VITE_DEV_PORT,
      https: false,
      proxy,
      // open: '/__nav__.html',
    },
    plugins: createVitePlugins(env, isBuild),
    esbuild: {
      drop: isProd ? ['console', 'debugger'] : [],
    },
    build: {
      emptyOutDir: true,
      outDir: path.resolve(root, env.VITE_BUILD_OUTPUT_DIR),
      chunkSizeWarningLimit: 2000,
      rollupOptions: {
        input: entryPoints(),
        output: {
          manualChunks: {
            vue: ['vue', '@vueuse/core'],
          },
        },
      },
    },
  }
})
