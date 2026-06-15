# mckinsey-consultant

> 麦肯锡顾问 — McKinsey Style 商业问题解决系统

## 🎯 痛点 & 问题

- **商业分析无从下手**：面对复杂的商业问题，不知道如何系统性地拆解和分析
- **咨询报告写作耗时**：需要花费大量时间精力才能产出专业的咨询级PPT
- **缺乏结构化方法论**：没有一套成熟的框架来验证假设和形成结论
- **MECE 分解困难**：难以保证问题分解的不重不漏（Mutually Exclusive, Collectively Exhaustive）

这个 Skill 帮助解决以上问题，提供一套经过实战验证的麦肯锡式问题解决方法论。

## ⚙️ 原理

基于 **McKinsey Problem Solving 101/102** 方法论，构建了一套完整的 8 步工作流：

1. **问题定义** — 明确核心问题（Problem Statement）
2. **问题树分解** — 使用 Issue Tree 结构化拆解（MECE 原则）
3. **假设形成** — 建立初始假设（Hypothesis）
4. **数据收集** — 设计信息收集计划（Workplan）
5. **数据分析** — 验证或推翻假设
6. **故事线构建** — 形成 Insights 和 Key Findings
7. **PPT 生成** — 按 McKinsey 7 种页面类型生成幻灯片
8. **质量检查** — 最终检查逻辑完整性和数据一致性

**核心机制**：
- 智能上下文加载：仅在需要时加载方法论文档，避免 token 溢出
- 单页处理模式：逐页生成 PPT，控制内存占用
- Web Search + Excel 数据收集：自动获取真实数据支撑分析

## 📖 使用指南

### 安装方式

```bash
npx skills add https://github.com/fleurytian/awesome-claude-skills --skill mckinsey-consultant
```

### 使用示例

**启动 Skill 进行商业分析：**
```
"请使用 mckinsey-consultant skill，帮我分析中国新能源汽车市场的增长情况和机会"
```

**分析完成后生成 PPT：**
```
"请基于以上分析，生成一份专业的麦肯锡风格 PPT"
```

**查看示例输出：**
仓库中包含 `mckinsey-sample-PPT.pptx` 示例文件，展示 Skill 的标准输出格式。

### 调用方式

在对话开始时明确声明使用该 Skill：
```
"请使用 mckinsey-consultant skill，帮我分析[具体商业问题]"
```

## ✅ 适用场景

- **商业尽职调查**：投资并购前的市场分析和机会评估
- **战略规划**：制定公司或业务单元的战略方向
- **竞争分析**：深入分析竞争对手的市场定位和优劣势
- **市场进入研究**：评估新市场或新产品线的可行性
- **运营优化**：诊断企业运营问题并提出改进建议
- **管理咨询报告**：需要产出咨询级专业 PPT 的场景

## ❌ 不适用场景

- **简单问答**：不需要深度分析的基础问题
- **实时数据要求极高的场景**：需要实时市场数据支撑的交易决策
- **创意发散**：纯粹的头脑风暴，不需要结构化分析
- **情感/创意写作**：与咪蒙写作风格不同，此 Skill 专注于商业分析

## ⚠️ 局限 & 风险

- **上下文窗口限制**：超长分析可能面临 token 限制，需分段处理
- **假设验证机制**：目前主要依赖 AI 推理，缺乏严格的假设验证流程
- **数据时效性**：Web Search 获取的数据可能存在一定延迟
- **输出格式固定**：专注于 McKinsey 风格，不适合其他格式要求

## 🔗 相关链接

- **GitHub**：https://github.com/fleurytian/awesome-claude-skills
- **官方文档**：https://github.com/fleurytian/awesome-claude-skills/tree/main/mckinsey-consultant-11
- **Skill 市场**：https://claudemarketplaces.com/skills/fleurytian/awesome-claude-skills/mckinsey-consultant
- **方法论文档**：包含 `references/methodology.md`、`references/layouts.md`、`references/examples.md` 等详细资料

---

## 📝 更新日志

- `2026-06-15` 补充完整文档（安装命令、使用示例、适用场景等）
- `2026-06-15` 初始化文档

---

*本文档由 [Skills 工具箱](https://github.com/你的项目地址) 自动生成*