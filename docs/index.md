---
layout: home

hero:
  name: Skills 工具箱
  text: 面向 AI Agent 的 Skills 精选项目集
  tagline: 按类别整理的中文文档，帮助你快速找到适合的 Skill 并落地使用
  image:
    src: /logo.svg
    alt: Skills 工具箱
  actions:
    - theme: brand
      text: 🚀 开始探索
      link: /index
    - theme: alt
      text: 📖 贡献指南
      link: /CONTRIBUTING

features:
  - icon: 🤖
    title: Agent 增强
    details: 任务拆解、头脑风暴、子 Agent 协作，增强 AI 的核心能力
    link: /Agent增强/
  - icon: 🔧
    title: 开发提效
    details: 代码调试、审查、学习规划、设计图生成，让开发快人一步
    link: /开发提效/
  - icon: ✍️
    title: 内容创作
    details: 专业文案、视频剪辑、PPT 生成、去 AI 味，创作无忧
    link: /内容创作/
  - icon: 📈
    title: 营销商业
    details: 麦肯锡顾问、营销方案、创业验证、商业分析
    link: /营销商业/
  - icon: 📡
    title: 信息情报
    details: AI 日报、热点追踪、深度搜索，资讯一网打尽
    link: /信息情报/
  - icon: 🌐
    title: 浏览器自动化
    details: AI 控制浏览器，自动完成网页操作和数据采集
    link: /浏览器自动化/
  - icon: 👥
    title: 关系模拟
    details: 模拟各种人物关系，获得专业建议或情感支持
    link: /关系模拟/
  - icon: 📚
    title: 学习教育
    details: 知识蒸馏、学习规划，助你高效掌握新技能
    link: /学习教育/
  - icon: 🎨
    title: 多媒体
    details: 视频剪辑、3D 可视化，让创意无限延伸
    link: /多媒体/
  - icon: 🌱
    title: 个人成长
    details: 自我进化、能力提升，成为更好的自己
    link: /个人成长/
  - icon: ⚡
    title: 效率工具
    details: 知识网站生成、Skill 优化进化
    link: /效率工具/
  - icon: 📦
    title: 其他
    details: 暂未分类但同样有用的 Skills
    link: /其他/
---

<div class="home-content">

## 📊 项目状态

::: tip 已完善
**14 个 Skills** 拥有完整文档，包含痛点分析、原理说明、使用指南、适用场景和局限说明
:::

::: warning 待完善
**26 个 Skills** 骨架文档已生成，内容待补充。欢迎贡献！
:::

## 🚀 快速开始

### 第一步：找 Skill

根据你的任务类型，从上方分类卡片中找到对应的 Skill。每个分类页面都有详细的 Skill 列表。

### 第二步：安装

以 Claude Code 为例，安装命令：

```bash
npx skills add https://github.com/obra/superpowers --skill systematic-debugging
```

其他平台安装方式请参考 [贡献指南](/CONTRIBUTING)。

### 第三步：使用

直接在对话中描述需求：

> "用 systematic-debugging 的方法帮我排查这个 Bug"

## 🔧 工具链

### 转换脚本

如果你是贡献者，有新的 Skills 数据要添加：

```bash
# 1. 编辑源文件
vim source/Skills工具箱.md

# 2. 运行转换脚本自动生成分类文档
node scripts/convert.js

# 3. 查看生成的文档
ls docs/*/
```

## 🤝 一起完善

本项目欢迎任何人贡献！

- 📝 补充骨架文档的内容
- 🔍 发现问题及时反馈
- ⭐ Start 支持我们

::: details 文档模板说明
每个 Skill 文档建议包含以下章节：

| 章节 | 说明 |
|------|------|
| 🎯 痛点 & 问题 | 具体解决什么问题，不要泛泛而谈 |
| ⚙️ 原理 | 底层机制，至少说明依赖什么工具/接口 |
| 📖 使用指南 | 安装命令 + 至少一个使用示例 |
| ✅ 适用场景 | 具体列举，帮助别人判断是否该用 |
| ❌ 不适用场景 | 诚实说明局限，避免误用 |
| ⚠️ 局限 & 风险 | 额外注意事项 |
| 🔗 相关链接 | GitHub 地址 + 相关 Skills |
:::

</div>

<style>
.home-content {
  max-width: 900px;
  margin: 0 auto;
}

.home-content .tip,
.home-content .warning {
  padding: 1rem 1.5rem;
  border-radius: 8px;
  margin: 1.5rem 0;
}

.home-content .tip {
  background: #e6f7ee;
  border-left: 4px solid #3eaf7c;
}

.home-content .warning {
  background: #fff3e6;
  border-left: 4px solid #ff9800;
}

.VPFeature .icon {
  font-size: 2rem;
}

.VPFeature .title {
  font-size: 1.2rem;
  font-weight: 600;
}

.VPFeature .details {
  font-size: 0.95rem;
  line-height: 1.6;
}
</style>