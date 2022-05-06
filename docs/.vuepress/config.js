const { defaultTheme } = require('@vuepress/theme-default')
const { searchPlugin } = require('@vuepress/plugin-search')
const { nprogressPlugin } = require('@vuepress/plugin-nprogress')
const { mediumZoomPlugin } = require('@vuepress/plugin-medium-zoom')

module.exports = {
      plugins: [
            mediumZoomPlugin({
                  // 配置项
            }),
            nprogressPlugin(),
            searchPlugin({
                  isSearchable: (page) => page.path !== '/',
                  getExtraFields: (page) => page.frontmatter.tags ?? [],
                  locales: {
                        '/': {
                              placeholder: '搜索文档',
                        },
                  }
            }),
      ],
      head: [['link', { rel: 'icon', href: '/images/favicon.png' }]],
      title: 'Yearning Guide',
      description: 'Yearning官方使用文档',
      theme: defaultTheme({
            navbar: [
                  {
                        text: '指南',
                        link: '/guide/install',
                  },
                  {
                        text: '常见问题',
                        link: '/feeback',
                  },
                  {
                        text: '二次开发',
                        link: '/dev/declare',
                  },
                  {
                        text: '更新日志',
                        link: '/log',
                  },
                  {
                        text: '赞助',
                        link: '/sponsor',
                  },
                  {
                        text: '关于',
                        link: '/about',
                  },
            ],
            sidebar: {
                  '/guide': [
                        {
                              text: '安装',
                              link: '/guide/install'
                        },
                        {
                              text: '快速上手',
                              link: '/guide/getting-started'
                        },
                        {
                              text: '更新',
                              link: '/guide/update'
                        },
                        {
                              text: 'Docker & K8s',
                              link: '/guide/cloud'
                        },
                        {
                              text: '配置',
                              link: '/guide/config',
                              children: [
                                    {
                                          text: '数据源',
                                          link: '/guide/config/source'
                                    },
                                    {
                                          text: '用户',
                                          link: '/guide/config/user'
                                    },
                                    {
                                          text: '权限组',
                                          link: '/guide/config/group'
                                    },
                                    {
                                          text: '工单流程',
                                          link: '/guide/config/flow'
                                    },
                                    {
                                          text: 'LDAP配置',
                                          link: '/guide/config/ldap',
                                    },
                                    {
                                          text: '审核规则',
                                          link: '/guide/config/rule',
                                    }
                              ]
                        },
                        {
                              text: '使用',
                              link: '/guide/get',
                              children: [
                                    {
                                          text: '工单',
                                          link: '/guide/get/order',
                                          children: [
                                                {
                                                      text: '提交',
                                                      link: '/guide/get/order',
                                                },
                                                {
                                                      text: '审核/执行',
                                                      link: '/guide/get/audit',
                                                },
                                          ]
                                    },
                                    {
                                          text: '查询',
                                          link: '/guide/get/query',
                                          children: [
                                                {
                                                      text: '提交',
                                                      link: '/guide/get/query',
                                                },
                                                {
                                                      text: '审核',
                                                      link: '/guide/get/query_audit',
                                                },
                                          ]
                                    }
                              ]
                        }


                  ],
                  '/dev': [
                        {
                              text: '声明',
                              link: '/dev/declare'
                        },
                        {
                              text: '技术栈',
                              link: '/dev/stack'
                        },
                        {
                              text: '目录结构',
                              link: '/dev/catalog',
                              children: [
                                    {
                                          text: '后端',
                                          link: '/dev/catalog',
                                    },
                                    {
                                          text: '前端',
                                          link: '/dev/front',
                                    }
                              ]
                        },
                        {
                              text: 'Juno调用',
                              link: '/dev/callback'
                        },
                        {
                              text: 'API',
                              link: '/dev/api'
                        },
                  ],
            },
            logo: '/images/icon.png',
            repo: 'https://github.com/cookieY/Yearning',
            docsRepo: 'https://github.com/cookieY/Libra-guide',
            docsBranch: 'master',
            docsDir: 'docs',
            editLinkPattern: ':repo/:branch/:path',
      }),
}