import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  // build for Github pages
  base: '/colorpicker/',
  locales: {
    root: {
      label: 'English',
      lang: 'en-US',
      title: 'Vue Colorpicker',
      description: 'a vue3.0 base colorpicker component',
      themeConfig: {
        logo: { src: '/logo.png', width: 24, height: 24 },
        // https://vitepress.dev/reference/default-theme-config
        nav: [
          { text: 'Home', link: '/' },
          { text: 'Guides', link: '/guides' },
          { text: 'Examples', link: '/examples' }
        ],

        sidebar: [
          {
            text: 'Guides',
            link: '/guides'
            // items: [
            //   { text: 'Overview', link: '/guides#overview' },
            //   { text: 'Installation', link: '/guides#installation' },
            //   { text: 'How to Use', link: '/guides#how-to-use' },
            //   { text: 'Props', link: '/guides#props' },
            //   { text: 'Events', link: '/guides#events' }
            // ]
          },
          {
            text: 'Examples',
            link: '/examples'
            // items: [
            //   { text: 'Props', link: '/examples' },
            //   { text: 'Events', link: '/examples#events' }
            // ]
          }
        ],

        socialLinks: [{ icon: 'github', link: 'https://github.com/giacomohuang/colorpicker/' }],
        footer: {
          message: 'Released under the MIT License.',
          copyright: 'Copyright © 2022-present, Giacomo Huang, MCI Studio'
        }
      }
    },
    zh: {
      label: '简体中文',
      lang: 'zh-CN',
      title: 'Vue Colorpicker',
      description: '一款基于vue3.0的拾色器插件',
      themeConfig: {
        // https://vitepress.dev/reference/default-theme-config
        logo: { src: '/logo.png', width: 24, height: 24 },
        nav: [
          { text: '首页', link: '/zh/' },
          { text: '开发指南', link: '/zh/guides' },
          { text: '示例', link: '/zh/examples' }
        ],
        sidebar: [
          {
            text: '开发指南',
            link: '/zh/guides'
            // items: [
            //   { text: 'Overview', link: '/guides#overview' },
            //   { text: 'Installation', link: '/guides#installation' },
            //   { text: 'How to Use', link: '/guides#how-to-use' },
            //   { text: 'Props', link: '/guides#props' },
            //   { text: 'Events', link: '/guides#events' }
            // ]
          },
          {
            text: '示例',
            link: '/zh/examples'
            // items: [
            //   { text: 'Props', link: '/examples' },
            //   { text: 'Events', link: '/examples#events' }
            // ]
          }
        ],

        socialLinks: [{ icon: 'github', link: 'https://github.com/giacomohuang/colorpicker/' }],
        footer: {
          message: 'Released under the MIT License.',
          copyright: 'Copyright © 2022-present, Giacomo Huang, MCI Studio'
        }
      }
    }
  }
})
