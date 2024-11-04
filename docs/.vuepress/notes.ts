import { defineNoteConfig, defineNotesConfig } from 'vuepress-theme-plume'

/* =================== locale: en-US ======================= */

const enGetStartedNote = defineNoteConfig({
  dir: 'usage',
  link: '/usage/',
  sidebar: [
    'Installation',
    'Getting Started',
  ],
})

export const enNotes = defineNotesConfig({
  dir: 'notes',
  link: '/',
  notes: [enGetStartedNote],
})

/* =================== locale: zh-CN ======================= */

const zhGetStartedNote = defineNoteConfig({
  dir: 'usage',
  link: '/usage/',
  sidebar: [
    {
      text: '什么是Yearning?',
      link: '/zh/usage/ptbzchak/',
    },
    {
      text: '部署方式',
      icon: 'entypo:light-bulb',
      items: [
        {
          text: '二进制部署',
          link: '/zh/usage/ixah25xr/',
        },
        {
          text: 'Docker部署',
          link: '/zh/usage/lphvwwj3/',
        },
        {
          text: 'k8s部署',
          link: '/zh/usage/hf1nqbio/',
        },
        {
          text: '如何更新？',
          link: '/zh/usage/q8mdejgq/',
        },
      ]
    },
    {
      text: '配置',
      icon: 'icon-park-outline:config',
      items: [
        {
          text: '快速上手',
          link: '/zh/usage/tv2glbkw/',
        },
        {
          text: 'RBAC',
          link: '/zh/usage/ms7zdn29/',
        },
        {
          text: '数据源',
          link: '/zh/usage/ocdsdf1t/',
        },
        {
          text: '用户',
          link: '/zh/usage/cz6ua30z/',
        },
        {
          text: '权限组',
          link: '/zh/usage/r9ztsdkl/',
        },
        {
          text: '流程',
          link: '/zh/usage/6vo8fvzk/',
        },
        {
          text: 'PT-OSC/GH-OST',
          link: '/zh/usage/cgd82cua/',
        },
        {
          text: '登录认证',
          items: [
            {
              text: 'OIDC',
              link: '/zh/usage/boccobus/',
            },
            {
              text: 'LDAP/AD',
              link: '/zh/usage/xp6epr8b/',
            }
          ]
        },
      ]
    },
    {
      text: '使用',
      icon: 'icon-park-outline:data-user',
      items: [
        {
          text: 'SQL工单',
          items: [
            {
              text: '提交',
              link: '/zh/usage/oa6oxmp4/',
            },
            {
              text: '审核',
              link: '/zh/usage/76kpl0j9/',
            }
          ]
        },
        {
          text: '查询工单',
          items: [
            {
              text: '提交',
              link: '/zh/usage/zz18pjdz/',
            },
            {
              text: '审核',
              link: '/zh/usage/saofd1yf/',
            }
          ]
        },
        {
          text: '审计',
          link: '/zh/usage/d7l2yt9g/',
        }
      ]
    }
  ],
})

const zhAboutNote = defineNoteConfig({
  dir: 'about',
  link: '/about/',
  sidebar: [
    {
      text: '关于 Yearning',
      link: '/zh/about/rtm9eg85/',
    },
    {
      text: '赞助版本',
      items: [
        {
          text: '如何赞助 Yearning？',
          link: '/zh/about/w5jt71jw/',
        },
        {
          text: '赞助版本功能',
          link: '/zh/about/d57hveaj/',
        },
        {
          text: '移动端审核功能',
          link: '/zh/about/euh91vwp/',
        },
        {
          text: 'Client端查询',
          link: '/zh/about/qtes3mwi/',
        },
      ]
    }
  ],
})

const zhDevelopmentNote = defineNoteConfig({
  dir: 'development',
  link: '/development/',
  sidebar: [
    {
      text: '开发许可',
      icon: 'fluent-mdl2:permissions',
      items:[
        {
          text: '开源声明',
          link: '/zh/development/u13ykizb/',
        }
      ],
    },
    {
      text: '开发指南',
      icon: 'icon-park-outline:code',
      items: [
        {
          text: 'API',
          link: '/zh/development/5ns3pe40/',
        },
        {
          text: '后端目录结构',
          link: '/zh/development/4mvjiei9/',
        },
        {
          text: '前端目录结构',
          link: '/zh/development/jr4p9oiu/',
        },
        {
          text: 'Juno 调用',
          link: '/zh/development/16e5vp2y/',
        },
      ]
    }
  ],
})

export const zhNotes = defineNotesConfig({
  dir: 'zh/notes',
  link: '/zh/',
  notes: [zhGetStartedNote, zhAboutNote,zhDevelopmentNote],
})

