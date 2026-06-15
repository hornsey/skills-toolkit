# humanize-ai-text

> 使文案内容去 AI 味

## 🎯 痛点 & 问题

- AI 生成的文案被检测工具识别为机器生成，影响信任度
- 文案读起来太"正式"或太"机械"，缺乏人情味
- AI 写作常见的模式化表达：过度使用"首先、其次、此外"等连接词
- 过度使用"卓越"、"创新"、"突破性"等夸张词汇
- 不自然的意义强调和虚假的专业术语堆砌
- 想要让 AI 文案更像真人写作风格

## ⚙️ 原理

基于 **humanize-ai-text** Skill 设计理念，通过检测和重写 AI 生成文本的典型特征，使其读起来更自然、更像真人写作。

**核心机制：**
- **AI 特征检测**：识别常见的 AI 写作模式（如过度使用特定词汇、夸张表达、机械连接词等）
- **风格迁移**：将检测到的 AI 写作特征替换为更自然的表达方式
- **基于 Wikipedia AI Writing 指南**：参考 Wikipedia 的"Signs of AI writing"指南建立的检测和修正模式库

**检测的 AI 写作特征包括：**
- 意义夸大（inflated symbolism）
- 促销性语言（promotional language）
- 肤浅的 -ing 分析（superficial -ing analyses）
- 模糊归属（vague attributions）
- 破折号过度使用（em dash overuse）
- 三点法则滥用（rule of three）
- AI 特有词汇（AI vocabulary words）
- 负面平行结构（negative parallelisms）
- 过度使用连接词（excessive conjunctive phrases）

**依赖工具：**
- AI Agent（Claude Code、OpenClaw 等）
- 自然语言处理能力

**核心逻辑：**
通过系统性地识别文本中的 AI 写作模式，并将其重写为更自然的人类表达方式，实现去 AI 化的效果。

## 📖 使用指南

### 安装方式

通过 ClawHub 安装（适用于 OpenClaw）：

```bash
openclaw skills install humanize-ai-text
```

或者：

```bash
clawhub install humanize-ai-text
```

### 使用示例

**触发词：** "humanize"、"去 AI 味"、"make it sound natural"、"remove AI patterns"、"pass AI detection"

**示例对话：**

```
用户：请帮我把这篇 AI 生成的文案变得更自然：
"在当今快速发展的商业环境中，企业必须不断适应变化的市场趋势。本文将深入探讨创新的重要性，以及如何通过卓越的解决方案实现突破性增长。"

AI：[使用 humanize-ai-text Skill 重写]

输出：
"市场变化越来越快，企业需要随时调整策略。这篇文章聊聊创新为什么重要，以及怎么找到真正管用的解决办法。"
```

**使用场景示例：**

```markdown
# 直接请求重写
请帮我把这段文字去 AI 味：

[粘贴 AI 生成的文本]

# 提供写作风格样本
请参考我的写作风格来改写这段文本：
我的写作风格：[粘贴一段你自己的文字]
需要改写的文本：[粘贴 AI 文本]
```

## ✅ 适用场景

- AI 生成的营销文案需要发布到公开平台
- 担心被 AI 检测工具识别影响可信度
- 需要将 AI 辅助写作的内容打磨得更自然
- 内容需要保持一致的人类写作风格
- 博客文章、社交媒体内容、邮件营销等需要人性化表达的场景
- SEO 内容（Google 对过于 AI 化的内容可能降权）
- 需要绕过 AI 检测器的场景（如某些平台限制 AI 生成内容）

## ❌ 不适用场景

- **正式法律/学术文档**：这类文档本身就要求正式、严谨的表达风格
- **技术API文档**：技术文档需要精确、专业，不适合过度"人性化"
- **纯信息性内容**：只需要信息传达清晰，不需要情感化表达
- **品牌调性要求**：某些高端品牌可能本身就要求正式、权威的语气
- **需要保留AI特征**：某些场景下适度的正式表达反而是品牌调性的体现
- **已经足够自然的内容**：如果原文已经读起来自然，没必要过度处理

## ⚠️ 局限 & 风险

1. **检测局限**：AI 检测和去 AI 化是一个持续演进的领域，新的检测器不断出现
2. **过度改写**：过度追求"去 AI 化"可能导致内容失去准确性或变得不自然
3. **语义变化**：重写过程可能微妙改变原意，需要仔细校对
4. **风格不匹配**：去 AI 化后的风格可能与你的品牌调性不匹配
5. **非百分百通过**：不能保证 100% 绕过所有 AI 检测器
6. **道德争议**：使用去 AI 化技术可能涉及道德问题（尤其在学术或新闻领域）

## 🔗 相关链接

- **ClawHub**：https://clawhub.ai/moltbro/humanize-ai-text
- **SkillHub（腾讯云）**：https://skillhub.cloud.tencent.com/skills/humanize-ai-text
- **LLMBase**：https://llmbase.ai/openclaw/humanize-ai-text
- **类似工具 - Humanizer（Claude Code）**：https://github.com/blader/humanizer
- **Wikipedia AI Writing 指南**：参考"Signs of AI writing"相关资源

## 📝 更新日志

- `2026-06-15` 初始化文档，补充完整章节信息

---

*本文档由 [Skills 工具箱](https://github.com/你的项目地址) 自动生成*