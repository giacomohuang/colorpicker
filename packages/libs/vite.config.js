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
    }
  }

  if (command === 'build') {
    config.build = {
      lib: {
        entry: path.resolve(__dirname, './src/main.js'),
        name: 'ColorPicker',
        fileName: (format) => `colorpicker.${format}.js`,
        formats: ['es', 'umd']
      },
      rollupOptions: {
        external: ['vue'],
        output: {
          globals: {
            vue: 'Vue'
          }
        }
      },
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
