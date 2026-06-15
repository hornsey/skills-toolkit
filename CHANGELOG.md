# Changelog

所有 Skill 的新增、更新、删除都会记录在此。

---

## [版本号] - 日期

### 🎉 新增 Skills

| 序号 | 名称 | 分类 | 说明 |
|------|------|------|------|
| - | - | - | - |

### 📝 更新 Skills

| 序号 | 名称 | 更新内容 |
|------|------|---------|
| - | - | - |

### 🔧 优化

- （任何项目结构、脚本、文档的优化）

---

## [2026-06-15] - 初始化项目

### 🎉 新增 Skills (40 个)

| 序号 | 名称 | 分类 | 说明 |
|------|------|------|------|
| 1 | document-skills | Agent增强 | 文档技能包 |
| 2 | remotion-skills | 多媒体 | AI 视频剪辑 |
| 3 | brainstorming | Agent增强 | 结构化头脑风暴技能包 |
| 4 | mckinsey-consultant | 营销商业 | 麦肯锡顾问 |
| 5 | canvas-design | 开发提效 | 一句话生成设计图 |
| 6 | copywriting | 内容创作 | 专业营销文案写手 |
| 7 | baoyu-post-to-wechat | 内容创作 | 公众号自动发布 |
| 8 | browser-use | 浏览器自动化 | 浏览器自动化操作 |
| 9 | agent-tools | Agent增强 | 任务自动拆分并分配给子Agent |
| 10 | find-skills | 其他 | 帮你查找合适的skills |
| 11 | skill-scanner | 开发提效 | Skill 代码安全审查 |
| 12 | AetherViz Master | 多媒体 | 把内容变成3D可视化呈现 |
| 13 | AI Daily Digest | 信息情报 | 自动生成AI信息日报 |
| 14 | using-superpowers | Agent增强 | 深度思考放大你的能力 |
| 15 | self-improving-agent | 个人成长 | 让你的AI每日持续进化 |
| 16 | systematic-debugging | 开发提效 | 让AI进行科学的代码故障排查 |
| 17 | ship-learn-next | 开发提效 | 让AI进行学习行动规划 |
| 18 | excalidraw-diagram-generator | 开发提效 | 让AI画流程图等知识图谱 |
| 19 | Proactive Agent | 开发提效 | 让AI拥有主动性 |
| 20 | PUA Skill | 个人成长 | 让AI迸发活力提升能动性 |
| 21 | OpenClaw Agent Optimize | Agent增强 | 优化你的Agent |
| 22 | Tavily AI Search | 信息情报 | 让AI增加搜索功能 |
| 23 | content-strategy | 内容创作 | 内容策略生成器 |
| 24 | humanize-ai-text | 内容创作 | 使文案内容去AI味 |
| 25 | baoyu-comic | 内容创作 | 让你的干货内容变成漫画更有传播力 |
| 26 | validate-idea | 营销商业 | 帮你验证创业想法少走弯路 |
| 27 | marketing-ideas | 营销商业 | 让AI为你设计营销方案 |
| 28 | roundtable | 营销商业 | 一个智囊团帮你分析复杂问题 |
| 29 | ai-news-zh | 信息情报 | 为你打造一手AI资讯的私人情报专员 |
| 30 | Content Creator | 内容创作 | 内容创作助手 |
| 31 | SoulTrace | Agent增强 | 性格测试技能 |
| 32 | 女娲 | 学习教育 | 蒸馏高手的思维方式 |
| 33 | 各式关系 Skill | 关系模拟 | 蒸馏任何关系为一个Skill |
| 34 | create-yourself | 关系模拟 | 蒸馏自己的信息成为一个AI插件 |
| 35 | darwin-skill | 效率工具 | 自动评测优化让你的Skill进化 |
| 36 | cangjie-skill | 学习教育 | 将书本转换为Skills |
| 37 | knowledge-site-creator | 效率工具 | 将知识生成学习网站 |
| 38 | video-use skill | 内容创作 | 帮你的口播视频剪成成片 |
| 39 | Aihot skill | 信息情报 | 帮你整理每日AI资讯 |
| 40 | Guizang PPT Skill | 内容创作 | 将文章一键快速变成有设计感的PPT |

### 📝 完善文档 (15 个)

以下 Skills 已补充完整文档（包含痛点、原理、使用场景、局限）：

| 序号 | 名称 | 分类 |
|------|------|------|
| 3 | brainstorming | Agent增强 |
| 4 | mckinsey-consultant | 营销商业 |
| 6 | copywriting | 内容创作 |
| 8 | browser-use | 浏览器自动化 |
| 9 | agent-tools | Agent增强 |
| 14 | using-superpowers | Agent增强 |
| 16 | systematic-debugging | 开发提效 |
| 18 | excalidraw-diagram-generator | 开发提效 |
| 22 | Tavily AI Search | 信息情报 |
| 23 | content-strategy | 内容创作 |
| 24 | humanize-ai-text | 内容创作 |
| 26 | validate-idea | 营销商业 |
| 27 | marketing-ideas | 营销商业 |
| 29 | ai-news-zh | 信息情报 |
| 38 | video-use | 内容创作 |

### 🔧 项目结构

```
skills-toolkit/
├── docs/                      # 按类别整理的文档
│   ├── index.md              # 总索引
│   ├── Agent增强/
│   ├── 开发提效/
│   ├── 内容创作/
│   ├── 营销商业/
│   ├── 信息情报/
│   └── ...
├── scripts/
│   └── convert.js            # 表格→Markdown 转换脚本
├── source/
│   └── Skills工具箱.md       # 源数据
├── README.md
├── CONTRIBUTING.md
└── CHANGELOG.md
```

### 📚 分类统计

| 分类 | 数量 |
|------|------|
| Agent 增强 | 6 |
| 开发提效 | 6 |
| 内容创作 | 8 |
| 营销商业 | 4 |
| 信息情报 | 4 |
| 个人成长 | 2 |
| 学习教育 | 2 |
| 关系模拟 | 2 |
| 效率工具 | 2 |
| 多媒体 | 2 |
| 浏览器自动化 | 1 |
| 其他 | 1 |
| **总计** | **40** |

---

*每新增或更新一个 Skill，请在此文件添加对应记录。*