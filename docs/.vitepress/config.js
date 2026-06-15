import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'Skills 工具箱',
  description: '面向 AI Agent 的 Skills 精选项目集 — 按类别整理的中文文档',
  srcDir: '.',
  
  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }],
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'og:type', content: 'website' }],
    ['meta', { name: 'og:title', content: 'Skills 工具箱' }],
    ['meta', { name: 'og:description', content: '面向 AI Agent 的 Skills 精选项目集' }],
  ],

  themeConfig: {
    logo: '/logo.svg',
    siteTitle: 'Skills 工具箱',

    nav: [
      { text: '🏠 首页', link: '/' },
      { text: '📚 文档索引', link: '/index' },
      { text: '📝 CHANGELOG', link: '/CHANGELOG' },
      {
        text: '📂 分类',
        items: [
          { text: '🤖 Agent增强', link: '/Agent增强/' },
          { text: '🔧 开发提效', link: '/开发提效/' },
          { text: '✍️ 内容创作', link: '/内容创作/' },
          { text: '📈 营销商业', link: '/营销商业/' },
          { text: '📡 信息情报', link: '/信息情报/' },
          { text: '⚡ 效率工具', link: '/效率工具/' },
          { text: '🌐 浏览器自动化', link: '/浏览器自动化/' },
          { text: '👥 关系模拟', link: '/关系模拟/' },
          { text: '📚 学习教育', link: '/学习教育/' },
          { text: '🎨 多媒体', link: '/多媒体/' },
          { text: '🌱 个人成长', link: '/个人成长/' },
          { text: '📦 其他', link: '/其他/' },
        ]
      }
    ],

    sidebar: {
      '/Agent增强/': [
        {
          text: '🤖 Agent增强',
          items: [
            { text: '概览', link: '/Agent增强/' },
            { text: 'brainstorming', link: '/Agent增强/brainstorming' },
            { text: 'agent-tools', link: '/Agent增强/agent-tools' },
            { text: 'using-superpowers', link: '/Agent增强/using-superpowers' },
          ]
        }
      ],
      '/开发提效/': [
        {
          text: '🔧 开发提效',
          items: [
            { text: '概览', link: '/开发提效/' },
            { text: 'systematic-debugging', link: '/开发提效/systematic-debugging' },
            { text: 'excalidraw-diagram-generator', link: '/开发提效/excalidraw-diagram-generator' },
          ]
        }
      ],
      '/内容创作/': [
        {
          text: '✍️ 内容创作',
          items: [
            { text: '概览', link: '/内容创作/' },
            { text: 'copywriting', link: '/内容创作/copywriting' },
            { text: 'content-strategy', link: '/内容创作/content-strategy' },
            { text: 'humanize-ai-text', link: '/内容创作/humanize-ai-text' },
            { text: 'video-use-skill', link: '/内容创作/video-use-skill' },
          ]
        }
      ],
      '/营销商业/': [
        {
          text: '📈 营销商业',
          items: [
            { text: '概览', link: '/营销商业/' },
            { text: 'mckinsey-consultant', link: '/营销商业/mckinsey-consultant' },
            { text: 'validate-idea', link: '/营销商业/validate-idea' },
            { text: 'marketing-ideas', link: '/营销商业/marketing-ideas' },
          ]
        }
      ],
      '/信息情报/': [
        {
          text: '📡 信息情报',
          items: [
            { text: '概览', link: '/信息情报/' },
            { text: 'ai-news-zh', link: '/信息情报/ai-news-zh' },
            { text: 'Tavily-AI-Search', link: '/信息情报/Tavily-AI-Search' },
          ]
        }
      ],
      '/效率工具/': [{ text: '⚡ 效率工具', items: [{ text: '概览', link: '/效率工具/' }] }],
      '/浏览器自动化/': [{ text: '🌐 浏览器自动化', items: [{ text: '概览', link: '/浏览器自动化/' }, { text: 'browser-use', link: '/浏览器自动化/browser-use' }] }],
      '/关系模拟/': [{ text: '👥 关系模拟', items: [{ text: '概览', link: '/关系模拟/' }] }],
      '/学习教育/': [{ text: '📚 学习教育', items: [{ text: '概览', link: '/学习教育/' }] }],
      '/多媒体/': [{ text: '🎨 多媒体', items: [{ text: '概览', link: '/多媒体/' }] }],
      '/个人成长/': [{ text: '🌱 个人成长', items: [{ text: '概览', link: '/个人成长/' }] }],
      '/其他/': [{ text: '📦 其他', items: [{ text: '概览', link: '/其他/' }] }],
      '/': [
        { text: '🏠 首页', link: '/' },
        { text: '📚 文档索引', link: '/index' },
      ]
    },

    search: {
      provider: 'local',
      options: {
        placeholder: '搜索 Skills...',
        translations: {
          button: {
            buttonText: '搜索',
            buttonAriaLabel: '搜索'
          }
        }
      }
    },

    footer: {
      message: '基于 MIT License 开源',
      copyright: 'Copyright © 2026 Skills 工具箱'
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/your-github/skills-toolkit' }
    ]
  },

  markdown: {
    theme: {
      light: 'github-light',
      dark: 'github-dark'
    }
  },

  ignoreDeadLinks: true,

  vite: {
    server: {
      port: 3000
    }
  }
})