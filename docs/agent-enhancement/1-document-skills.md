# document-skills

> Anthropic 官方文档技能包集合 —— 让 Agent 具备创建、编辑与解析 DOCX / PDF / PPTX / XLSX 等文件的能力

**Source:** [GitHub - anthropics/skills](https://github.com/anthropics/skills)

**Type:** Skills 集合（非单一 Skill） | **Platforms:** Claude Code / 兼容 Agent Skills 的运行时

---

## 🎯 痛点 & 问题

很多 AI Agent 在“能回答问题”和“能交付文档”之间，存在明显断层：

- **只能给文本，不能给文件**：分析做完了，却无法直接产出 DOCX、PPT 或表格文件
- **复杂办公格式处理难**：Word、Excel、PowerPoint、PDF 这类格式不仅是文本，还有结构、样式和元数据
- **业务场景需要可交付成果**：汇报材料、报价表、表单解析、数据表格等都要求标准文件输出
- **不同文档类型流程差异大**：写 PPT、改 Word、解析 PDF、生成 Excel 的工作流完全不同

`document-skills` 解决的问题不是“写一段文字”，而是让 Agent 能在办公文档场景中更接近真实交付流程。

---

## ⚙️ 原理

根据 `anthropics/skills` 仓库 README，`document-skills` 更准确地说是一个**文档相关 Skills 集合**，而不是单个功能点。

### 核心组成

Anthropic 在仓库中公开了与文档处理相关的多个技能目录，重点包括：

| Skill / 子目录 | 作用 |
|----------------|------|
| `docx` | 创建与编辑 Word 文档 |
| `pdf` | 解析、提取与处理 PDF 文档 |
| `pptx` | 生成或编辑演示文稿 |
| `xlsx` | 处理电子表格、表格型数据与结构化输出 |

README 还明确说明，这些文档技能就是 Claude 文档能力背后的参考实现之一。

### 核心机制

1. **按需加载**
   - Agent 不会一开始就加载所有文档逻辑
   - 只有当用户任务涉及 PDF、PPT、表格或文档创建时，才会调入对应 Skill

2. **文件类型分工明确**
   - 与“万能文档助手”不同，这套能力按文件格式拆分，职责更清晰
   - 这样更适合复杂文件任务，也更便于后续扩展

3. **从文本答案走向文件交付**
   - 不止提供建议，还强调创建、编辑、提取、转换等实际动作
   - 更适合企业办公、汇报、资料整理和文档自动化场景

### 许可与边界

Anthropic README 说明：

- 仓库中很多 Skill 是开源的（Apache 2.0）
- 但文档技能中的 `docx` / `pdf` / `pptx` / `xlsx` 属于 **source-available** 参考实现，而非传统意义上的完全开源

这是一个很重要的使用边界，文档中应如实说明。

---

## 📖 使用指南

### 安装方式

Anthropic README 给出的安装方式是安装官方技能插件，然后在其中启用 `document-skills`：

```text
/plugin install document-skills@anthropic-agent-skills
```

如果你使用的是支持 `npx skills` 的环境，也可以先安装 Anthropic 官方技能仓库，再按运行时规则启用对应文档能力。

### 使用示例

#### 场景 1：提取 PDF 信息

```text
请使用 document-skills 里的 PDF 能力，帮我提取这个合同里的关键字段
```

#### 场景 2：生成演示文稿

```text
把这份行业分析整理成一套演示稿，输出为 PPT 文档结构
```

#### 场景 3：生成表格

```text
根据这批销售数据帮我生成一个可继续编辑的 Excel 表格
```

#### 场景 4：创建品牌化 Word 文档

```text
根据这份会议纪要，整理成正式的项目说明文档
```

### 适合的调用方式

当用户已经明确文件类型时，效果通常更好：

- “用 PDF 技能提取表单字段”
- “用 PPTX 技能做演示稿”
- “用 XLSX 技能整理预算表”
- “用 DOCX 技能输出正式文档”

---

## ✅ 适用场景

- **办公文档自动化**：报告、表格、演示稿、合同等文件处理
- **企业资料交付**：希望拿到文件而不是纯文本建议
- **表单与资料解析**：从 PDF 或 Office 文件中提取结构化信息
- **知识输出格式化**：把研究、分析结果沉淀成可共享、可归档文档
- **品牌化内容生成**：按照固定格式或规范输出文档成品

---

## ❌ 不适用场景

- **只需要简短文本回答**：如果不涉及文件交付，使用文档技能会偏重
- **完全离线但缺少本地依赖**：复杂文件处理通常需要运行时支持相应工具链
- **极度复杂排版设计**：专业出版级排版仍可能需要人工处理
- **未知文件格式任务**：如果用户自己也不清楚要 Word、Excel 还是 PDF，先做需求澄清更合适

---

## ⚠️ 局限 & 风险

1. **格式复杂度高**：Office / PDF 文件远比纯文本复杂，边角格式问题常见
2. **运行时差异明显**：不同 Agent 环境对文档 Skill 的支持度可能不同
3. **许可边界需注意**：文档技能中的部分内容是 source-available，不应误写为完全开源
4. **大文件成本与性能**：超大 PDF、复杂表格或高页数 PPT 处理成本更高
5. **人工校对仍必要**：正式交付给客户或领导前，建议人工复核排版与内容准确性

---

## 🔗 相关链接

- **GitHub 仓库**：https://github.com/anthropics/skills
- **Anthropic 文档能力说明**：https://www.anthropic.com/news/create-files
- **相关目录**：仓库中的 `skills/docx`、`skills/pdf`、`skills/pptx`、`skills/xlsx`
- **Agent Skills 标准**：https://agentskills.io

---

## 📝 更新日志

- `2026-06-16` 新增完整文档，说明 document-skills 的集合性质与文档处理边界

---

*本文档由 [Skills 工具箱](https://github.com/你的项目地址) 整理维护*