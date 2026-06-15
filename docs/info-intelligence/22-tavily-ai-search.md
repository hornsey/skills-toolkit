# Tavily AI Search（分类索引版）

> 专为 AI Agent 准备的实时搜索 Skill —— 提供结构化网页搜索、内容提取与研究型查询能力

**Canonical Doc:** [Tavily-AI-Search.md](./Tavily-AI-Search.md)

---

## 🎯 这是什么

这是信息情报分类下为 **Tavily AI Search** 保留的索引版文档，用于和分类页中的编号命名保持一致。

如果你更想看完整的参数说明、安装方式和详细示例，请优先阅读：

- [完整文档：Tavily-AI-Search.md](./Tavily-AI-Search.md)

---

## 🎯 痛点 & 问题

Tavily 主要解决下面几类实时信息获取问题：

- 模型知识有截止日期，拿不到最新事实
- 通用搜索引擎返回的是链接，Agent 还要自己二次清洗
- 研究、核查、新闻追踪需要结构化结果，而不是零散网页片段
- 从网页中提取正文、摘要和证据来源时，普通搜索接口不够顺手

---

## ⚙️ 原理

Tavily 是面向 AI 应用设计的搜索 API，核心能力包括：

- **结构化搜索结果**：返回更适合 Agent 消费的 JSON 内容
- **内容提取**：从指定 URL 中抽取干净正文
- **深度研究模式**：适合研究型、事实核查型任务
- **主题过滤**：可按通用、新闻、金融等主题域搜索

在 OpenClaw 一类运行时中，它通常会被接成默认 Web Search provider，或者作为单独 Skill 调用。

---

## 📖 使用指南

### 安装方式

```bash
# OpenClaw 常见安装方式
/skill install @anthropic/tavily-search
```

或参考完整文档中的其他安装方案与 SDK 用法。

### 常见触发方式

```text
搜索一下今天 AI 行业最重要的新闻
```

```text
用 Tavily 查一下某个公司最近一周的动态
```

```text
提取这个网页的正文并总结重点
```

---

## ✅ 适用场景

- 实时搜索
- 新闻追踪
- 研究调查
- 事实核查
- 网页正文提取

---

## ❌ 不适用场景

- 完全离线环境
- 高并发大规模爬取
- 需要自建通用爬虫系统的场景

---

## ⚠️ 局限 & 风险

- 依赖 Tavily API 可用性
- 搜索结果质量会受到源覆盖面影响
- AI 生成答案仍需人工核验
- 高频调用可能产生费用

---

## 🔗 相关链接

- **完整文档**：./Tavily-AI-Search.md
- **官方文档**：https://docs.tavily.com
- **Python SDK**：https://github.com/tavily-ai/tavily-python
- **Skill 仓库**：https://github.com/veithly/tavily-search

---

## 📝 更新日志

- `2026-06-16` 新增分类索引版文档，补齐分类页缺失链接，并指向完整 Tavily 文档

---

*本文档由 [Skills 工具箱](https://github.com/你的项目地址) 整理维护*