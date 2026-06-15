# copywriting

> 专业营销文案写手

## 🎯 痛点 & 问题

- 写不出有感染力的营销文案，转化率低
- 不确定文案方向：围绕产品特点还是用户收益？
- 不知道如何撰写有效的标题、副标题和 CTA（行动号召）
- 文案缺乏清晰结构，逻辑混乱
- 使用过多行业术语或空洞的营销套话
- 不了解不同页面类型（落地页、产品页、关于页等）的文案差异

## ⚙️ 原理

基于 **marketingskills** 项目的设计理念，copywriting Skill 提供一套完整的市场营销文案写作框架：

**核心机制：**
- **上下文收集**：先收集页面目的、受众画像、产品/服务和流量来源
- **写作原则**：清晰优于花哨、收益优于功能、具体优于模糊、客户语言优于公司语言
- **页面结构框架**：提供从首屏到 CTA 的完整页面文案模板
- **质量检查清单**：快速自检文案质量

**依赖工具：**
- AI Agent（Claude Code、OpenClaw 等）
- 市场文案语料库（references/copy-frameworks.md、references/natural-transitions.md）

**核心逻辑：**
遵循"先理解再创作"的流程，通过收集关键上下文信息，结合验证过的文案框架和写作规则，生成符合营销最佳实践的专业文案。

## 📖 使用指南

### 安装方式

```bash
npx skills add https://github.com/coreyhaines31/marketingskills --skill copywriting
```

或者通过 ClawHub 安装（适用于 OpenClaw）：

```bash
openclaw skills install copywriting
```

### 使用示例

**触发词：** "write copy for"、"improve this copy"、"rewrite this page"、"marketing copy"、"headline help"、"CTA copy"、"value proposition"、"tagline"

**示例对话：**

```
用户：帮我写一个落地页的文案，推广我们的项目管理软件
AI：好的，我需要先了解一些背景信息：
1. 这个落地页的主要目标是什么？（如：获取免费试用、预约演示等）
2. 目标用户是谁？他们最大的痛点是什么？
3. 你的产品核心优势是什么？有什么数据可以证明效果？
4. 流量主要来自哪里？（广告、SEO、邮件等）
```

**输出示例（部分）：**

```markdown
## 标题
[解决问题] 而不必 [痛苦点]

## 副标题
[1-2句话扩展核心价值主张]

## 行动按钮
[具体动词] + [用户获得的具体东西]
例：Start Your Free 14-Day Trial
```

## ✅ 适用场景

- 编写或优化任何营销页面的文案（首页、落地页、产品页、关于页）
- 创建有效的标题、副标题和行动号召（CTA）
- 撰写价值主张和 tagline
- 优化现有文案的可读性和转化率
- 制定内容策略中的文案部分
- 需要遵循清晰、具体、以用户为中心的写作风格

## ❌ 不适用场景

- **非营销场景**：内部文档、技术规格说明书、新闻稿等需要不同写作风格的内容
- **需要专业知识**：法律、医疗、金融等需要执照的专业建议内容
- **长篇内容**：博客文章、白皮书、电子书等长内容创作（更适合用专门的内容创作 Skill）
- **图片/视频脚本**：视频广告脚本或视觉内容脚本（需要专门的视频脚本 Skill）
- **社交媒体内容**：推文、LinkedIn 帖子等短内容（更适合用社交媒体 Skill）

## ⚠️ 局限 & 风险

1. **AI 幻觉风险**：AI 可能生成虚假的统计数据或 testimonial，需要人工核实
2. **创意局限**：生成的文案可能偏向保守，缺乏突破性的创意概念
3. **品牌一致性**：需要提供足够的品牌语境，否则生成文案可能偏离品牌调性
4. **文化差异**：默认采用西方营销惯例，可能需要调整以适应中文市场
5. **效果验证**：生成的文案未经 A/B 测试验证，实际效果需上线后监测

## 🔗 相关链接

- **GitHub**：https://github.com/coreyhaines31/marketingskills
- **Copywriting Skill 源码**：https://github.com/coreyhaines31/marketingskills/blob/main/skills/copywriting/SKILL.md
- **文案框架参考**：https://github.com/coreyhaines31/marketingskills/blob/main/skills/copywriting/references/copy-frameworks.md
- **自然过渡短语**：https://github.com/coreyhaines31/marketingskills/blob/main/skills/copywriting/references/natural-transitions.md
- **作者**：Corey Haines - https://github.com/coreyhaines31

## 📝 更新日志

- `2026-06-15` 初始化文档，补充完整章节信息

---

*本文档由 [Skills 工具箱](https://github.com/你的项目地址) 自动生成*