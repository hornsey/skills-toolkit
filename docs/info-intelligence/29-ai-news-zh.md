# ai-news-zh（分类索引版）

> 中文 AI 科技日报自动采集与推送 Skill —— 聚合英文 AI 资讯源并整理为中文简报

**Canonical Doc:** [ai-news-zh.md](./ai-news-zh.md)

---

## 🎯 这是什么

这是信息情报分类下为 **ai-news-zh** 保留的索引版文档，用于和分类页中的编号命名保持一致。

如需查看更完整的安装方式、配置示例和详细使用说明，请优先阅读：

- [完整文档：ai-news-zh.md](./ai-news-zh.md)

---

## 🎯 痛点 & 问题

这个 Skill 面向的是“每天要跟 AI 新闻打交道”的人：

- 英文 AI 资讯源很多，人工跟踪成本高
- 想看中文整理结果，不想自己翻译
- 需要定时推送到飞书、Telegram 或 Discord
- 需要把资讯聚合、翻译和简报生成串成固定流程

---

## ⚙️ 原理

`ai-news-zh` 的核心工作流是：

- 从多个英文 AI 资讯源抓取 RSS
- 使用模型将标题或摘要翻译为中文
- 按主题分类整理
- 再推送到既定渠道或输出为日报内容

它适合做“中文 AI 资讯入口”，尤其适合内容团队、研究团队或个人晨报场景。

---

## 📖 使用指南

### 安装方式

```bash
# OpenClaw / SkillHub 生态中的常见安装方式
skillhub install ai-news-zh
```

也可以参考完整文档中的 OpenClaw 安装与配置示例。

### 常见触发方式

```text
帮我整理今天的 AI 资讯
```

```text
给我一份中文 AI 行业今日简报
```

```text
把最新 AI 新闻推送到飞书
```

---

## ✅ 适用场景

- 中文 AI 行业晨报
- RSS 多源资讯聚合
- 飞书 / Telegram / Discord 资讯推送
- 内容选题收集
- 竞品与趋势追踪

---

## ❌ 不适用场景

- 需要秒级实时快讯
- 纯离线环境
- 非 AI 领域的泛新闻聚合

---

## ⚠️ 局限 & 风险

- 依赖 RSS 源稳定性
- 翻译质量取决于所用模型
- 推送链路可能受第三方平台限制
- 资讯摘要不等于完整深度分析

---

## 🔗 相关链接

- **完整文档**：./ai-news-zh.md
- **OpenClaw Skills 仓库**：https://github.com/openclaw/skills
- **ClawHub 页面**：https://clawhub.ai/aizain/ai-news-zh
- **相关 Skill**：`AI Daily Digest`、`Aihot skill`

---

## 📝 更新日志

- `2026-06-16` 新增分类索引版文档，补齐分类页缺失链接，并指向完整 ai-news-zh 文档

---

*本文档由 [Skills 工具箱](https://github.com/你的项目地址) 整理维护*