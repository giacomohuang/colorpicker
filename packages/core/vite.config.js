import { defineConfig } from 'vite'
import path from 'path'
import vue from '@vitejs/plugin-vue'

export default defineConfig(({ command }) => {
  const config = {
    plugins: [vue()],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, './src')
      }
    },
    css: {
      preprocessorOptions: {
        scss: {
          charset: false
        }
      }
    }
  }

  if (command === 'build') {
    config.build = {
      lib: {
        entry: 'src/main.js',
        name: 'ColorPicker',
        fileName: (format) => `colorpicker.${format}.js`,
        formats: ['es', 'umd', 'cjs']
      },
      rollupOptions: {
        external: ['vue'],
        output: {
          globals: {
            vue: 'Vue'
          },
          assetFileNames: (assetInfo) => {
            if (assetInfo.name.endsWith('.css')) return 'style.css'
            return assetInfo.name
          }
        }
      },
      cssCodeSplit: false,
      minify: 'terser',
      terserOptions: {
        compress: {
          drop_console: true,
          drop_debugger: true
        }
      }
    }
  } else {
    // 开发模式配置
    config.root = path.resolve(__dirname, './src/demo')
    config.build = {
      outDir: path.resolve(__dirname, './dist')
    }
  }

  return config
})
