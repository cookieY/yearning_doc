import { defineNavbarConfig } from 'vuepress-theme-plume'

export const enNavbar = defineNavbarConfig([
  {
    text: 'Guide',
    icon: 'mdi:routes',
    link: '/notes/usage/yearning.md',
  },
  {
    text: 'FAQ',
    icon: 'wpf:ask-question',
    link: '/notes/faq/faq.md',
  },
  {
    text: 'Development',
    icon: 'icon-park-outline:code',
    link: '/notes/development/declare.md',
  },
  {
    text: 'Change Logs',
    icon: 'grommet-icons:update',
    link: '/notes/update/update.md',
  },
  {
    text: 'About',
    icon: 'mdi:about-circle-outline',
    link: '/notes/about/about.md',
  },
])

export const zhNavbar = defineNavbarConfig([
  {
    text: '开始上手',
    icon: 'mdi:routes',
    link: '/zh/notes/usage/yearning.md',
  },
  {
    text: '常见问题',
    icon: 'wpf:ask-question',
    link: '/zh/notes/faq/faq.md',
  },
  {
    text: '开发',
    icon: 'icon-park-outline:code',
    link: '/zh/notes/development/declare.md',
  },
  {
    text: '更新',
    icon: 'grommet-icons:update',
    link: '/zh/notes/update/update.md',
  },
  {
    text: '关于',
    icon: 'mdi:about-circle-outline',
    link: '/zh/notes/about/about.md',
  },

])

