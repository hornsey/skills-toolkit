import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'Skills 工具箱',
  description: '面向 AI Agent 的 Skills 精选项目集 — 按类别整理的中文文档',
  
  head: [
    ['link', { rel: 'icon', href: '/logo.svg' }],
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
  ],

  themeConfig: {
    logo: '/logo.svg',
    siteTitle: '🧰 Skills 工具箱',

    nav: [
      { text: '🏠 首页', link: '/' },
      { text: '📚 文档索引', link: '/index' },
      { text: '📝 CHANGELOG', link: '/CHANGELOG' },
      { text: '🤝 贡献指南', link: '/CONTRIBUTING' },
    ],

    sidebar: {},

    socialLinks: [
      { icon: 'github', link: 'https://github.com/hornsey/skills-toolkit' }
    ],

    search: {
      provider: 'local',
      options: {
        detailedView: true
      }
    },

    footer: {
      message: '基于 MIT License 开源',
      copyright: 'Copyright © 2026 Skills 工具箱'
    }
  },

  markdown: {
    theme: {
      light: 'github-light',
      dark: 'github-dark'
    }
  },

  cleanUrls: true,

  ignoreDeadLinks: true,

  vite: {
    server: {
      port: 3000
    }
  }
})