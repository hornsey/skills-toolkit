# Aihot skill

> 帮你整理每日 AI 资讯 —— 通过一句话获取 aihot.virxact.com 的 AI HOT 日报和动态汇总

**Source:** [GitHub - KKKKhazix/khazix-skills](https://github.com/KKKKhazix/khazix-skills)

**Platforms:** Claude Code / 兼容 SKILL.md 的 Agent 运行时 | **API Key:** 通常无需单独配置

---

## 🎯 痛点 & 问题

很多“AI 资讯 Skill”都能搜索新闻，但真正日常使用时，大家更常见的是这些需求：

- **想快速看今天发生了什么**：不想自己筛几十条新闻，只想要一份现成日报
- **只想自然语言问一句**：不想装 MCP、不想配复杂 API，只想一句话拿结果
- **希望兼顾日报与原始动态**：既想看整理好的摘要，也想按日期追具体更新
- **中文用户需要本地化入口**：很多海外资讯服务接入成本高，中文体验一般

`Aihot skill` 的定位更偏“资讯成品入口”：直接帮你拿到 AI HOT 日报或指定日期的 AI 动态结果。

---

## ⚙️ 原理

根据 `khazix-skills` 仓库 README，可确认 `aihot` 的关键特点如下：

### 核心机制

1. **对接 aihot.virxact.com**
   - Skill 的内容来源是 `aihot.virxact.com`
   - 可获取每日 AI HOT 日报与完整 AI 动态

2. **自然语言直接查询**
   - README 明确强调：支持 SKILL.md 的 Agent 可以通过“最自然的中文一句话”获取结果
   - 无需额外搭建 MCP Server

3. **无需 API Key**
   - 这是它和很多资讯 / 搜索型工具的明显区别
   - 更适合轻量接入与日常高频查看

4. **支持按日期查看**
   - 不只是“今天的日报”
   - 也支持查询指定日期的 AI 日报内容

### 工作流

```text
用户一句话提问 → Skill 请求 aihot 数据来源 → 返回日报或指定日期动态 → Agent 做进一步整理或转述
```

---

## 📖 使用指南

### 安装方式

仓库 README 中给出了安装脚本：

```bash
curl -fsSL https://aihot.virxact.com/aihot-skill/install.sh | bash
```

如果你使用支持 `npx skills` 的环境，也可以根据仓库后续说明选择标准安装方式。

### 典型触发方式

```text
帮我看看今天的 AI HOT 日报
```

```text
看一下 5 月 6 号的 AI 日报
```

```text
帮我整理最近几天最值得关注的 AI 动态
```

### 使用示例

#### 场景 1：看今日摘要

```text
用户：今天 AI 圈有什么值得关注的？
AI：我可以调用 Aihot skill，直接获取今天的 AI HOT 日报并帮你提炼重点。
```

#### 场景 2：查指定日期

```text
用户：看一下 5 月 6 号的 AI 日报。
AI：适合使用 Aihot skill，直接按日期拉取对应日报内容。
```

#### 场景 3：做二次整理

```text
用户：把今天的 AI HOT 日报压缩成 5 条适合团队群同步的消息。
AI：我会先拿到原始日报，再帮你压缩成更适合内部沟通的版本。
```

---

## ✅ 适用场景

- **快速看今日 AI 动态**：一句话拿到成品日报
- **按日期回看资讯**：查某天发生了什么
- **中文团队晨报**：把已有日报再整理成内部同步信息
- **内容选题参考**：从日报里快速发现值得扩写的话题
- **轻量接入场景**：不想自己搭建搜索、抓取和推送链路

---

## ❌ 不适用场景

- **需要原始全网搜索**：它更适合看整理结果，不是通用搜索引擎替代品
- **需要深度事实核查**：如果要严谨交叉验证，建议配合 Tavily 等搜索 Skill
- **离线环境**：依赖在线服务获取日报内容
- **需要自定义大规模源抓取**：它不是通用 RSS 管理器或情报平台搭建工具

---

## ⚠️ 局限 & 风险

1. **依赖单一数据服务**：如果 aihot 数据服务不可用，Skill 能力会受影响
2. **信息视角有限**：日报是整理结果，不等于完整全网覆盖
3. **二次传播仍需校验**：若要公开发布，建议再核对来源和原始表述
4. **公开资料主要来自 README**：更细的内部行为仍应以实际 SKILL.md 为准

---

## 🔗 相关链接

- **GitHub 仓库**：https://github.com/KKKKhazix/khazix-skills
- **AIHOT 网站**：https://aihot.virxact.com
- **Agent 接入指南**：https://aihot.virxact.com/agent
- **相关 Skill**：`AI Daily Digest`、`ai-news-zh`、`Tavily AI Search`

---

## 📝 更新日志

- `2026-06-16` 新增完整文档，补充数据来源、使用方式与适用边界

---

*本文档由 [Skills 工具箱](https://github.com/你的项目地址) 整理维护*