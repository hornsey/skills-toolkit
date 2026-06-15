# using-superpowers

> 深度思考放大你的能力 — 元技能，确保其他技能真正被使用

## 🎯 痛点 & 问题

安装了各种 Agent Skills，但 AI 助手往往"视而不见"：

- **技能沉睡**：安装了 brainstorming、writing-plans 等技能，但 AI 经常跳过它们直接给出答案
- **理由充分**：AI 会用"这太简单了，不需要"或"让我先收集上下文"等理由回避使用技能
- **行为不一致**：有时用技能，有时不用，结果因问题而异
- **流程被绕过**：本应先设计后实现，但 AI 总是跳过设计直接写代码
- **需要手动触发**：不得不每次都提醒 AI"记得用 xxx 技能"

**using-superpowers 解决的核心问题**：这是一个元技能（meta-skill），专门确保其他技能被正确调用。它像是一个 dispatcher（调度器），强制 AI 在每个用户消息上检查是否有适用的技能，并遵循结构化流程。

## ⚙️ 原理

### 底层机制

`using-superpowers` 是 `obra/superpowers` 技能集合中的核心调度员，基于以下机制设计：

1. **强制技能检查**：在处理每个用户消息时，强制检查是否有匹配的技能
2. **待办事项生成**：从技能清单创建待办事项列表，确保每个步骤都被执行
3. **优先级规则**：当多个技能同时适用时，建立明确的优先级顺序
4. **行为约束**：阻止 AI 用"理性思考"绕过技能，直接进入实现模式

### 依赖工具/接口

- **SKILL.md 格式**：符合 Agent Skills 开放标准
- **skills.sh 兼容**：可与 Vercel 的 skills.sh 技能市场集成
- **支持客户端**：Claude Code（主要）、OpenAI Codex CLI、Cursor、GitHub Copilot 等
- **需要配合其他 superpowers 技能**：brainstorming、writing-plans、subagent-driven-development 等

### 核心逻辑

```
用户消息 → using-superpowers 检查 → 识别适用的技能 → 创建待办事项 → 按优先级执行技能 → 完成任务
```

**without using-superpowers（AI 行为）**：
```
用户：帮我加一个导出功能
AI：好的，我来写代码...[直接实现，跳过设计]
```

**with using-superpowers（AI 行为）**：
```
用户：帮我加一个导出功能
AI：我看到这是一个新功能请求，让我先触发 brainstorming 技能来确保我们设计清楚...
[开始结构化设计流程]
```

## 📖 使用指南

### 安装方式

```bash
npx skills add https://github.com/obra/superpowers --skill using-superpowers
```

或下载到本地：

```bash
wget https://github.com/obra/superpowers/archive/refs/heads/main.zip -O superpowers-using-superpowers.zip
```

### 使用示例

**安装后的典型对话**：

```
用户：帮我规划这个功能

[without using-superpowers]
AI：好的，我来帮你规划...（直接给出一个大概的方案）

[with using-superpowers]
AI：我看到你需要一个功能规划。让我先触发 brainstorming 技能来确保我们从清晰的需求理解开始...
[结构化地提问、澄清需求、形成设计文档]
```

```
用户：我的代码有bug

[without using-superpowers]
AI：让我看看...可能是这个问题...（快速给出猜测的解决方案）

[with using-superpowers]
AI：我来帮你诊断这个问题。首先让我理解一下...
[系统性地复现问题、定位根因、提出解决方案]
```

### 技能激活信号

安装后，当你请求以下类型的任务时，技能会自动激活：

- 计划新功能
- 修改现有代码
- 添加组件或服务
- 重构代码
- 技术决策

### 与其他技能配合

`using-superpowers` 是调度员，其他技能是被调度的资源：

| 技能 | 何时被调用 |
|------|-----------|
| brainstorming | 任何新功能/修改之前 |
| writing-plans | 设计完成之后、实现之前 |
| subagent-driven-development | 需要并行处理多个任务时 |
| improve-codebase-architecture | 发现代码架构问题时 |

## ✅ 适用场景

- **新项目启动**：确保从一开始就使用结构化开发流程
- **复杂功能开发**：涉及多方需求、多种方案时
- **团队协作项目**：需要统一开发流程和文档标准
- **代码审查准备**：在提交代码前确保符合规范
- **技能学习**：帮助团队成员理解何时使用何种技能
- **AI 助手编程**：任何使用 Claude Code、Cursor 等 AI 编程工具的场景

## ❌ 不适用场景

- **纯聊天查询**：只是问一些知识性问题，不需要触发技能
- **简单任务**：如"现在几点了"、"帮我查一下天气"等
- **已有明确指令的简单修改**：如"把这段文字从英文改成中文"
- **紧急响应**：需要立即执行单一命令时
- **非开发任务**：与代码开发无关的任务

## ⚠️ 局限 & 风险

1. **可能拖慢速度**：对于真正简单的任务，强制走流程可能降低效率
2. **需要所有 superpowers 技能配合**：单独安装 using-superpowers 效果有限
3. **上下文占用**：待办事项和技能检查会占用上下文窗口
4. **可能过于教条**：某些情况下 AI 过于死板地遵循流程
5. **学习曲线**：团队需要理解并接受这套工作方式

**缓解建议**：
- 对于简单任务，可以用简短的设计讨论代替完整流程
- 确保团队成员理解流程的价值，避免"形式主义"
- 根据项目类型调整流程严格程度

## 🔗 相关链接

- **GitHub 仓库**：https://github.com/obra/superpowers
- **using-superpowers 详情**：https://skills.sh/obra/superpowers/using-superpowers
- **Skills Marketplace**：https://atcyrus.com/skills/superpowers-using-superpowers
- **Claude Code Marketplaces**：https://claudemarketplaces.com/skills/obra/superpowers/using-superpowers
- **Agent Skills 规范**：https://agentskills.io

## 📝 更新日志

- `2026-06-15` 补充完整文档（安装方式、使用示例、适用场景等）

---

*本文档由 Skills 工具箱 自动生成*