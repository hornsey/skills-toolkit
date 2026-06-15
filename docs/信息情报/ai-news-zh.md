# ai-news-zh

> 为你打造一手AI资讯的私人情报专员

## 🎯 痛点 & 问题

- **信息过载**：AI 行业新闻源众多（The Verge、Wired、TechCrunch、Hugging Face 等），手动浏览耗时且容易遗漏
- **语言障碍**：大量优质 AI 资讯来自英文源，阅读效率低
- **推送分散**：需要主动打开多个平台查看更新，无法集中获取
- **时效性差**：手动整理资讯延迟高，热点新闻往往已过时

## ⚙️ 原理

ai-news-zh 是一个基于 OpenClaw 生态的 AI 资讯自动采集与推送 Skill。

**核心机制：**

1. **RSS 订阅源聚合**：内置多个精选英文 AI 资讯 RSS 源，包括 The Verge、Wired、TechCrunch、Marktechpost、TLDR AI 等
2. **定时抓取**：通过 OpenClaw 的 cron 功能实现每日定时自动抓取
3. **机器翻译**：调用 LLM API 将英文资讯自动翻译为中文
4. **分类整理**：按 AI 模型、工具发布、行业动态、研究进展等维度分类
5. **多渠道推送**：支持推送到飞书、Telegram、Discord 等平台

**技术架构：**

- 基于 OpenClaw Skill 格式（SKILL.md + YAML frontmatter）
- 使用 Python 脚本进行 RSS 解析和内容处理
- 通过 OpenClaw 的消息通道集成实现多平台推送

## 📖 使用指南

### 安装方式

```bash
# 方式一：使用 OpenClaw CLI 安装
/skill install @openclaw/ai-news-zh

# 方式二：手动从 GitHub 安装
python "$CODEX_HOME/skills/.system/skill-installer/scripts/install-skill-from-github.py" --repo openclaw/skills --path skills/aizain/ai-news-zh

# 方式三：直接克隆仓库
git clone https://github.com/openclaw/skills.git
# 然后将 skills/aizain/ai-news-zh 目录下的内容复制到 ~/.openclaw/skills/ai-news-zh
```

### 前置要求

- 已安装并配置好 OpenClaw
- 配置好 LLM API（用于翻译）
- 如需推送功能：配置飞书/Telegram/Discord 等渠道的 Webhook

### 使用示例

```
# 手动触发资讯采集
/skill run ai-news-zh

# 或直接对话
"帮我整理今天的 AI 资讯"

# 获取今日简报
"给我一份 AI 行业今日简报"
```

**配置文件示例（openclaw.json）：**

```json
{
  "skills": {
    "ai-news-zh": {
      "feeds": [
        "https://www.theverge.com/rssAI/index.xml",
        "https://www.wired.com/feed/rssAI",
        "https://techcrunch.com/feed/",
        "https://www.marktechpost.com/feed/"
      ],
      "pushChannels": ["telegram", "feishu"],
      "language": "zh-CN"
    }
  }
}
```

## ✅ 适用场景

- **AI 行业从业者**：需要跟踪竞品动态、技术趋势的研究员或产品经理
- **中文社区用户**：偏好阅读中文内容，但关注英文源一手资讯
- **内容创作者**：需要每日 AI 资讯作为选题素材
- **投资人**：关注 AI 领域最新融资、技术突破和行业动向
- **开发者**：跟进模型更新、开源项目和技术文档变化

## ❌ 不适用场景

- **需要深度分析**：仅提供资讯摘要，不适合需要完整报告的场景
- **非 AI 领域**：该 Skill 专注于 AI 行业，不适合泛科技新闻需求
- **离线环境**：需要调用 LLM API 进行翻译，纯离线环境受限
- **实时性要求极高**：定时任务存在延迟，不适合秒级实时需求

## ⚠️ 局限 & 风险

- **依赖 LLM 翻译**：翻译质量受限于所调用的 LLM API 水平
- **RSS 源稳定性**：第三方 RSS 源可能更改格式或失效
- **信息碎片化**：仅提供标题和摘要，可能遗漏细节
- **API 成本**：高频使用可能产生 LLM API 调用费用
- **ClawHub 安全风险**：曾有恶意 Skill 混入 ClawHub，安装前建议验证 Skill 来源

## 🔗 相关链接

- **GitHub（官方 Skill 仓库）**：https://github.com/openclaw/skills（路径：skills/aizain/ai-news-zh）
- **ClawHub 页面**：https://clawhub.ai/aizain/ai-news-zh
- **OpenClaw 官方文档**：https://docs.openclaw.ai
- **AI Agents Directory**：https://aiagentsdirectory.com/skills/openclaw-openclaw-skills-aizainai-news-zh

---

## 📝 更新日志

- `2026-06-15` 完善文档（补充完整章节）
- `2026-06-15` 初始化文档

---

*本文档由 [Skills 工具箱](https://github.com/你的项目地址) 自动生成*