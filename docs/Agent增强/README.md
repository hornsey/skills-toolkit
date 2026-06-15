# 🤖 Agent 增强

> 本分类收录用于增强 AI Agent 能力的 Skills，包括任务规划、协作思考、工具调用等维度。

## 📚 Skills 列表

### 1. brainstorming

**结构化头脑风暴技能包** — 在动手实现任何创意之前，先把设计想清楚

- [查看详情](./brainstorming.md)
- [GitHub](https://github.com/obra/superpowers)
- **安装**：`npx skills add https://github.com/obra/superpowers --skill brainstorming`

---

### 2. using-superpowers

**深度思考放大你的能力** — 元技能，确保其他技能真正被使用

- [查看详情](./using-superpowers.md)
- [GitHub](https://github.com/obra/superpowers)
- **安装**：`npx skills add https://github.com/obra/superpowers --skill using-superpowers`

---

### 3. agent-tools

**任务自动拆分并分配给子Agent** — 通过 inference.sh CLI 调用 250+ AI 应用和模型

- [查看详情](./agent-tools.md)
- [GitHub](https://github.com/inference-sh/skills)
- **安装**：`npx skills add https://github.com/inference-sh/skills --skill agent-tools`

---

### 4. document-skills

**文档技能包** — 文档创建和管理的技能集合

- [查看详情](./1-document-skills.md)
- [GitHub](https://github.com/anthropics/skills/tree/main)

---

### 5. OpenClaw Agent Optimize

**优化你的Agent** — 提升 Agent 性能和效率的技能

- [查看详情](./21-openclaw-agent-o-ptimize.md)
- [GitHub](https://clawhub.ai/phenomenoner/openclaw-agent-optimize)

---

### 6. SoulTrace

**性格测试技能** — 基于性格分析的任务分配和协作

- [查看详情](./31-soultrace.md)
- [GitHub](https://github.com/soultrace-ai/soultrace-skill)

---

## 📖 关于 Agent Skills

### 什么是 Agent Skills？

Agent Skills 是一个轻量级、开放的格式，用于扩展 AI Agent 的能力。它基于 Anthropic 提出的标准（SKILL.md），现已被 OpenAI、Cursor、GitHub Copilot、Vercel 等广泛采用。

**核心概念**：
- **SKILL.md**：每个技能的核心文件，包含元数据（name、description）和指令
- **按需加载**：只有当任务匹配技能描述时，Agent 才会读取完整的技能指令
- **跨平台复用**：一次构建，可用于多个支持 Agent Skills 的平台

### 技能来源

| 来源 | 特点 |
|------|------|
| **obra/superpowers** | 结构化开发框架，强调 TDD、设计优先 |
| **inference-sh/skills** | 250+ 云端 AI 应用集成 |
| **anthropic/skills** | Anthropic 官方技能集合 |
| **skills.sh 社区** | 社区贡献的多样化技能 |

## 🔧 安装与管理

### 全局安装 skills CLI

```bash
npm install -g @skills/cli
```

### 安装技能示例

```bash
# 从 GitHub 安装单个技能
npx skills add https://github.com/obra/superpowers --skill brainstorming

# 从 skills.sh 安装
npx skills add skills.sh/obra/superpowers/brainstorming

# 列出已安装技能
npx skills list

# 更新技能
npx skills update <skill-name>
```

## 📝 文档贡献

本文档由 Skills 工具箱 自动生成和维护。
如果你发现文档有误或需要补充，请提交 PR 或 Issue。

---

*最后更新：2026-06-15*