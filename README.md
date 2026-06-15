# 🧰 Skills 工具箱

> 面向 AI Agent 的 Skills 精选项目集 — 按类别整理的中文文档，帮助你快速找到适合的 Skill 并落地使用。

![Skills](https://img.shields.io/badge/Skills-40+-blue) ![License](https://img.shields.io/badge/License-MIT-green) ![Last Updated](https://img.shields.io/badge/Last%20Updated-2026--06--15-blue)

---

## 🎯 这个项目做什么？

将 Skills 按**任务类型**分类，每个 Skill 有独立的中文 Markdown 文档，包含：

| 文档章节 | 内容 |
|---------|------|
| 🎯 痛点 & 问题 | 这个 Skill 解决什么具体问题？为什么传统方式做不好？ |
| ⚙️ 原理 | 底层机制、依赖工具、核心逻辑 |
| 📖 使用指南 | 安装命令、使用示例、关键参数 |
| ✅ 适用场景 | 什么时候该用 |
| ❌ 不适用场景 | 什么时候不该用、有什么坑 |
| ⚠️ 局限 & 风险 | 诚实说明不足 |
| 🔗 相关链接 | GitHub 地址、配套 Skills |

---

## 📚 文档分类

| 分类 | Emoji | 数量 | 说明 |
|------|-------|------|------|
| [Agent增强](./docs/Agent增强/README.md) | 🤖 | 6 | 增强 AI Agent 的任务拆解、头脑风暴等核心能力 |
| [开发提效](./docs/开发提效/README.md) | 🔧 | 6 | 调试、代码审查、学习规划、设计图生成 |
| [内容创作](./docs/内容创作/README.md) | ✍️ | 8 | 文案写作、视频剪辑、PPT 生成、去 AI 味 |
| [营销商业](./docs/营销商业/README.md) | 📈 | 4 | 麦肯锡顾问、营销方案、创业验证、私董会 |
| [信息情报](./docs/信息情报/README.md) | 📡 | 4 | AI 日报、资讯订阅、热点追踪、AI 搜索 |
| [效率工具](./docs/效率工具/README.md) | ⚡ | 2 | 知识网站生成、Skill 优化进化 |
| [浏览器自动化](./docs/浏览器自动化/README.md) | 🌐 | 1 | 浏览器操作自动化 |
| [关系模拟](./docs/关系模拟/README.md) | 👥 | 2 | 模拟各种人物关系的 Skill |
| [学习教育](./docs/学习教育/README.md) | 📚 | 2 | 知识蒸馏、学习规划 |
| [多媒体](./docs/多媒体/README.md) | 🎨 | 2 | 视频剪辑、3D 可视化 |
| [个人成长](./docs/个人成长/README.md) | 🌱 | 2 | 自我进化、能力提升 |
| [其他](./docs/其他/README.md) | 📦 | 1 | 暂未分类的 Skills |

**[👉 浏览完整索引](./docs/index.md)**

---

## ✅ 文档完善度

**已完善（15 个）：** 有完整文档（痛点、原理、使用场景、局限）

**待完善（25 个）：** 骨架文档，需补充内容

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

## 🗂️ 项目结构

```
skills-toolkit/
├── docs/                      # 按类别整理的文档
│   ├── index.md              # 总索引
│   ├── Agent增强/
│   │   ├── README.md        # 分类索引
│   │   └── *.md             # 各 Skill 文档
│   ├── 开发提效/
│   ├── 内容创作/
│   ├── 营销商业/
│   └── ...（其他分类）
├── scripts/
│   └── convert.js            # 表格→Markdown 转换脚本
├── source/
│   └── Skills工具箱.md       # 源数据
├── README.md
├── CONTRIBUTING.md
├── CHANGELOG.md              # 变更记录
└── .gitignore
```

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

---

## 📖 相关资源

| 资源 | 地址 |
|------|------|
| Anthropic 官方 Skills | https://github.com/anthropics/skills |
| 社区精选 Skills (33K ⭐) | https://github.com/ComposioHQ/awesome-claude-skills |
| Skills.sh | https://skills.sh |
| ClawHub (OpenClaw 市场) | https://clawhub.ai |
| SkillHub (腾讯中国) | https://skillhub.tencent.com |

---

## 📄 License

MIT License

---

## 📝 CHANGELOG

所有变更记录在 [CHANGELOG.md](./CHANGELOG.md)

---

*维护者：Skills 工具箱团队 | 最后更新：2026-06-15*