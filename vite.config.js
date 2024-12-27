import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'
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
        entry: './src/main.js',
        name: 'ColorPicker',
        fileName: 'colorpicker'
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
    config.root = './src/demo'
    config.build = {
      outDir: './dist'
    }
  }

  return config
})
