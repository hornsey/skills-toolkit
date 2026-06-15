---
layout: home

hero:
  name: "🧰 Skills 工具箱"
  text: "面向 AI Agent 的 Skills 精选项目集"
  tagline: "按类别整理的中文文档，帮助你快速找到适合的 Skill 并落地使用"
  actions:
    - theme: brand
      text: "📚 浏览文档"
      link: "/index"
    - theme: alt
      text: "📝 CHANGELOG"
      link: "/CHANGELOG"
    - theme: alt
      text: "🤝 贡献指南"
      link: "/CONTRIBUTING"

features:
  - icon: 🤖
    title: 🤖 Agent 增强
    details: "增强 AI Agent 的任务拆解、头脑风暴等核心能力"
    link: /Agent增强/
    linkText: 浏览 6 个 Skills

  - icon: 🔧
    title: 🔧 开发提效
    details: "调试、代码审查、学习规划、设计图生成"
    link: /开发提效/
    linkText: 浏览 6 个 Skills

  - icon: ✍️
    title: ✍️ 内容创作
    details: "文案写作、视频剪辑、PPT 生成、去 AI 味"
    link: /内容创作/
    linkText: 浏览 8 个 Skills

  - icon: 📈
    title: 📈 营销商业
    details: "麦肯锡顾问、营销方案、创业验证、私董会"
    link: /营销商业/
    linkText: 浏览 4 个 Skills

  - icon: 📡
    title: 📡 信息情报
    details: "AI 日报、资讯订阅、热点追踪、AI 搜索"
    link: /信息情报/
    linkText: 浏览 4 个 Skills

  - icon: 🌐
    title: 🌐 浏览器自动化
    details: "浏览器操作自动化"
    link: /浏览器自动化/
    linkText: 浏览 1 个 Skills

  - icon: 👥
    title: 👥 关系模拟
    details: "模拟各种人物关系的 Skill"
    link: /关系模拟/
    linkText: 浏览 2 个 Skills

  - icon: 📚
    title: 📚 学习教育
    details: "知识蒸馏、学习规划"
    link: /学习教育/
    linkText: 浏览 2 个 Skills

  - icon: 🎨
    title: 🎨 多媒体
    details: "视频剪辑、3D 可视化"
    link: /多媒体/
    linkText: 浏览 2 个 Skills

  - icon: 🌱
    title: 🌱 个人成长
    details: "自我进化、能力提升"
    link: /个人成长/
    linkText: 浏览 2 个 Skills

  - icon: ⚡
    title: ⚡ 效率工具
    details: "知识网站生成、Skill 优化进化"
    link: /效率工具/
    linkText: 浏览 2 个 Skills

  - icon: 📦
    title: 📦 其他
    details: "暂未分类的 Skills"
    link: /其他/
    linkText: 浏览 1 个 Skills
---

<div align="center">

## 📊 文档完善度

**已完善（15 个）：** 有完整文档（痛点、原理、使用场景、局限）

**待完善（25 个）：** 骨架文档，需补充内容

</div>

---

## 🚀 快速开始

### 1. 找 Skill

根据你的任务类型，从上方分类中找到对应的 Skill。

### 2. 安装

每个文档里都有安装命令，例如：

```bash
npx skills add https://github.com/obra/superpowers --skill systematic-debugging
```

### 3. 使用

直接用自然语言描述需求：

> "用 systematic-debugging 的方法帮我排查 XXX 问题"

---

## 🔧 工具

### 转换脚本

如果你有新的 Skills 表格数据，可以运行转换脚本自动生成文档：

```bash
# 1. 编辑源文件
vim source/Skills工具箱.md

# 2. 运行转换脚本
node scripts/convert.js

# 3. 查看生成的文档
ls docs/
```

---

## 🤝 如何贡献

欢迎提交 PR 完善 Skills 文档！

### 文档规范

每个 Skill 文档需包含：
1. ✅ 痛点 & 问题 — 具体场景，不要泛泛而谈
2. ✅ 原理 — 至少说明依赖什么工具/接口
3. ✅ 使用指南 — 含安装命令和至少一个示例
4. ✅ 适用/不适用场景 — 帮助别人判断是否该用
5. ⚠️ 局限 & 风险 — 诚实说明不足

### 贡献流程

1. Fork 本项目
2. 在对应分类目录下创建或完善 `.md` 文件
3. 更新 `docs/index.md` 中的索引
4. 更新 `CHANGELOG.md` 记录变更
5. 提交 PR