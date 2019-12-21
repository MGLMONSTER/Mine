const { description } = require('../../package')

module.exports = {
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#title
   */
  title: '我的学习空间',
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#description
   */
  description: description,
  base: '/Mine/',

  /**
   * Extra tags to be injected to the page HTML `<head>`
   *
   * ref：https://v1.vuepress.vuejs.org/config/#head
   */
  head: [
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }]
  ],

  /**
   * Theme configuration, here is the default theme configuration for VuePress.
   *
   * ref：https://v1.vuepress.vuejs.org/theme/default-theme-config.html
   */
  themeConfig: {
    repo: '',
    editLinks: false,
    docsDir: '',
    editLinkText: '',
    lastUpdated: false,
    nav: [
      {
        text: 'Vue',
        link: '/vue/',
      },
      {
        text: 'Config',
        link: '/config/'
      },
      {
        text: 'VuePress',
        link: 'https://v1.vuepress.vuejs.org'
      }
    ],
    sidebar: {
      '/vue/': [
        {
          title: 'Vue基础',
          collapsable: false,
          children: [
            'vue-basic-1',
            'vue-basic-2',
            'vue-basic-3',
            'vue-basic-4',
            'vue-basic-5',
            'vue-basic-6',
            'vue-basic-7',
            'vue-basic-8',
            'vue-basic-9',
            'vue-basic-10',
            'vue-basic-11',
            'vue-basic-12',
          ]
        },
        {
          title: 'Vue进阶',
          collapsable: false,
          children: [
            'vue-advance-1',
            'vue-advance-2',
            'vue-advance-3',
            'vue-advance-4',
            'vue-advance-5',
            'vue-advance-6',
            'vue-advance-7',
          ]
        },
        {
          title: 'Vue源码分析',
          collapsable: false,
          children: [
            'vue-code-1',
            'vue-code-2',
            'vue-code-3',
          ]
        },
        {
          title: 'Vue最佳实践',
          collapsable: false,
          children: [
            'vue-practice-1',
            'vue-practice-2',
            'vue-practice-3',
          ]
        },
      ],
    }
  },

  /**
   * Apply plugins，ref：https://v1.vuepress.vuejs.org/zh/plugin/
   */
  plugins: [
    '@vuepress/plugin-back-to-top',
    '@vuepress/plugin-medium-zoom',
  ]
}
