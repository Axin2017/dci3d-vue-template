const path = require('path')

module.exports = {
  title: '一张图框架开发文档',
  description: '一张图框架开发文档',
  head: [['link', { rel: 'icon', href: '/logo.png' }]],
  themeConfig: {
    nav: [
      {
        text: '核心框架',
        link: '/framework/',
      }
    ],
    sidebar: {
      '/framework/detailDesign/': [
        ['components/', '公用组件']
      ],
      '/framework/': [
        ['', '核心框架'],
        ['versionLog.md', '版本日志'],
        ['generalDescription/', '总体概述'],
        ['environmentAndSetting.md', '环境/配置'],
        ['developingStanderd.md', '入门/规范约定'],
        ['detailDesign/', '详细设计'],
        ['demandAndBugLog.md', '需求/bug日志'],
        ['document.md', '文档编写']
      ]
    },
    sidebarDepth: 2
  },
  dest: path.resolve('public', 'docs'),
  base: '/docs/'
}
