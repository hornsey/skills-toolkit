# Tavily AI Search

> 让 AI 拥有实时网络搜索能力

## 🎯 痛点 & 问题

- **知识截止日期**：LLM 的训练数据有截止日期，无法获取最新信息
- **信息检索困难**：传统搜索引擎返回的是网页链接和摘要，AI 需要二次解析
- **实时性需求**：新闻查询、股价、天气等场景需要实时数据
- **结构化结果需求**：AI 处理非结构化文本效率低，需要结构化的搜索结果
- **API 兼容性**：需要能方便地集成到 AI Agent 工作流中

## ⚙️ 原理

Tavily 是一个专为 AI 应用设计的搜索 API，其核心设计理念是返回 **AI 可直接使用的结构化内容**，而非传统搜索引擎的网页链接列表。

**核心机制：**

1. **AI 优化的搜索索引**：Tavily 构建了专门针对 AI/LLM 消费场景优化的搜索索引
2. **结构化结果返回**：返回 JSON 格式的清洗内容，包含完整文章文本、提取答案、组织数据
3. **搜索深度选项**：
   - `basic`：快速搜索，适合通用查询
   - `advanced`：深度搜索，适合精确研究和事实核查
4. **主题过滤**：支持 `general`、`news`、`finance` 三种主题域
5. **答案提取**：可返回 AI 生成的高质量摘要答案（`include_answer`）
6. **内容提取**：`tavily_extract` 工具支持从 URLs 中提取干净内容，支持 JS 渲染页面

**OpenClaw 集成方式：**

- 通过 `tavily-search` Skill 连接到 OpenClaw Agent
- 内置两个工具：`tavily_search`（搜索）和 `tavily_extract`（提取）
- 支持配置为默认 web search provider，替换内置搜索

**API 端点：**

| 端点 | 功能 |
|------|------|
| `search()` | Web 搜索，返回结构化结果 |
| `extract()` | 从 URLs 提取干净内容 |
| `crawl()` | 遍历网站内容（需邀请） |
| `map()` | 发现网站结构 |
| `research()` | 生成综合研究报告 |

## 📖 使用指南

### 安装方式

**方式一：通过 OpenClaw Chat 安装（推荐）**

```
/skill install @anthropic/tavily-search
```

**方式二：手动安装**

```bash
# 克隆仓库
git clone https://github.com/veithly/tavily-search.git

# 或使用 OpenClaw CLI
openclaw skills install tavily-search
```

**方式三：通过 GitHub URL 直接安装**

```
将整个仓库丢给 OpenClaw → 它会自动安装！
```

### 获取 API Key

1. 访问 [tavily.com](https://tavily.com) 注册账号
2. 在 Dashboard 中生成 API Key（格式：`tvly-xxx`）
3. Free tier：每月 1,000 次搜索

### 配置方式

**方式一：环境变量**

```bash
export TAVILY_API_KEY="tvly-your-api-key-here"
```

**方式二：配置文件（openclaw.json）**

```json
{
  "plugins": {
    "entries": {
      "tavily": {
        "enabled": true,
        "config": {
          "webSearch": {
            "apiKey": "tvly-your-api-key-here",
            "baseUrl": "https://api.tavily.com"
          }
        }
      }
    }
  },
  "tools": {
    "web": {
      "search": {
        "provider": "tavily"
      }
    }
  }
}
```

**方式三：快速配置**

```bash
openclaw configure --section web
```

### 使用示例

**Python SDK 使用：**

```python
from tavily import TavilyClient

# 无 Key 模式（有限制）
client = TavilyClient()

# 有 Key 模式
client = TavilyClient(api_key="tvly-your-api-key")

# 基础搜索
results = client.search(query="最新 AI 模型发布")

# 带答案的搜索
results = client.search(query="什么是量子计算", answer=True)

# 深度搜索
results = client.search(
    query="OpenAI 最新动态",
    search_depth="advanced",
    topic="news",
    max_results=10
)

# 内容提取
results = client.extract(
    urls=["https://example.com/article"],
    query="提取文章要点"
)

# 研究报告
results = client.research(query="AI 在医疗领域的应用")
```

**OpenClaw 对话中使用：**

```
"搜索一下最新关于 GPT-5 的消息"

"用 Tavily 查找今天 AI 行业的新闻"

"提取这个网页的内容：https://example.com/tech-news"
```

### 工具参数说明

**tavily_search 参数：**

| 参数 | 类型 | 默认值 | 说明 |
|------|------|--------|------|
| `query` | string | 必填 | 搜索查询（最多 400 字符） |
| `search_depth` | enum | `basic` | `basic` 或 `advanced` |
| `topic` | enum | `general` | `general`、`news`、`finance` |
| `max_results` | integer | 5 | 结果数量（1-20） |
| `include_answer` | boolean | false | 包含 AI 生成的答案 |
| `time_range` | enum | — | `day`、`week`、`month`、`year` |
| `include_domains` | string[] | — | 白名单域名 |
| `exclude_domains` | string[] | — | 黑名单域名 |

**tavily_extract 参数：**

| 参数 | 类型 | 默认值 | 说明 |
|------|------|--------|------|
| `urls` | string[] | 必填 | 要提取的 URLs（最多 20 个） |
| `query` | string | 可选 | 按相关性重新排序内容块 |
| `extract_depth` | enum | `basic` | `basic` 或 `advanced`（JS 页面） |
| `chunks_per_source` | integer | — | 每 URL 返回的内容块数（需配合 query） |
| `include_images` | boolean | false | 是否包含图片 URL |

## ✅ 适用场景

- **AI Agent 实时问答**：需要获取最新信息的 AI 助手、客服机器人
- **研究调查**：深度研究任务，需要准确、可溯源的搜索结果
- **事实核查**：验证信息真伪，获取权威来源
- **新闻聚合**：构建 AI 新闻应用，追踪特定领域动态
- **内容创作**：辅助写作，获取背景资料和参考信息
- **数据分析**：结构化提取网页数据用于后续分析

## ❌ 不适用场景

- **离线环境**：需要调用 Tavily API，纯离线环境无法使用
- **高频大规模搜索**：免费 tier 限额 1,000 次/月，高频使用需付费
- **通用网页爬取**：不是专业的爬虫工具，复杂爬取需求用 Firecrawl 更合适
- **非英语搜索**：虽然支持多语言，但搜索质量可能不如英语

## ⚠️ 局限 & 风险

- **API 依赖**：需要 Tavily API Key，受 API 可用性影响
- **速率限制**：免费版有严格速率限制，企业级应用需付费
- **内容覆盖**：搜索索引可能不完全，部分冷门内容无法找到
- **成本风险**：高频调用可能产生意外费用，需监控使用量
- **隐私风险**：搜索查询会发送到第三方服务器，敏感场景需注意
- **结果准确性**：AI 生成的答案（`include_answer`）可能存在幻觉，需核实

## 🔗 相关链接

- **GitHub（tavily-search Skill）**：https://github.com/veithly/tavily-search
- **GitHub（Python SDK）**：https://github.com/tavily-ai/tavily-python
- **PyPI 包**：https://pypi.org/project/tavily-python/
- **官方文档**：https://docs.tavily.com
- **OpenClaw Tavily 集成文档**：https://docs.openclaw.ai/tools/tavily
- **ClawHub 页面**：https://lobehub.com/skills/framix-team-openclaw-tavily-tavily-search
- **API 注册**：https://tavily.com

---

## 📝 更新日志

- `2026-06-15` 完善文档（补充完整章节）
- `2026-06-15` 初始化文档

---

*本文档由 [Skills 工具箱](https://github.com/你的项目地址) 自动生成*