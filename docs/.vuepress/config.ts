import { viteBundler } from '@vuepress/bundler-vite'
import { defineUserConfig } from 'vuepress'
import { plumeTheme } from 'vuepress-theme-plume'

export default defineUserConfig({
  base: '/',
  lang: 'en-US',
  locales: {
    '/': {
      title: 'Yearning Guide',
      lang: 'en-US',
      description: 'Get started with Yearning',
    },
    '/zh/': {
      title: 'Yearning Guide',
      lang: 'zh-CN',
      description: 'Get started with Yearning',
    },
  },
  head: [["link", { rel: "icon", href: "/images/favicon.png" }]],
  
  bundler: viteBundler(),

  theme: plumeTheme({
    // 添加您的部署域名
    hostname: 'https://next.yearning.io',
    locales: {
      '/': {
        logo: "/images/icon.png",
      },
      '/zh/': {
        logo: "/images/icon.png",
      },
    },
    footer: {
      message: "",
      copyright: "AGPL-3.0 Licensed | Copyright © 2017-present Henry Yee"
    },

    plugins: {
      /**
       * Shiki 代码高亮
       * @see https://theme-plume.vuejs.press/config/plugins/code-highlight/
       */
      shiki: {
        languages: ['go','shell', 'bash', 'typescript', 'javascript','json','yaml','sql','markdown','html','css'],
      },

      /**
       * markdown enhance
       * @see https://theme-plume.vuejs.press/config/plugins/markdown-enhance/
       */
      markdownEnhance: {
        demo: true,
      //   include: true,
      //   chart: true,
      //   echarts: true,
      //   mermaid: true,
      //   flowchart: true,
      },

      /**
       *  markdown power
       * @see https://theme-plume.vuejs.press/config/plugin/markdown-power/
       */
      // markdownPower: {
      //   pdf: true,
      //   caniuse: true,
      //   plot: true,
      //   bilibili: true,
      //   youtube: true,
      //   icons: true,
      //   codepen: true,
      //   replit: true,
      //   codeSandbox: true,
      //   jsfiddle: true,
      //   repl: {
      //     go: true,
      //     rust: true,
      //     kotlin: true,
      //   },
      // },

      /**
       * 评论 comments
       * @see https://theme-plume.vuejs.press/guide/features/comments/
       */
      comment: {
        provider: 'Giscus', // "Artalk" | "Giscus" | "Twikoo" | "Waline"
        comment: true,
        repo: 'cookieY/Yearning',
        repoId: 'MDEwOlJlcG9zaXRvcnkxMDc0MTcxMTM=',
        category: 'FAQ',
        categoryId: 'DIC_kwDOBmcOGc4Cj9d1',
        mapping: 'pathname',
        reactionsEnabled: true,
        inputPosition: 'top',
      },
    },
  }),
})
