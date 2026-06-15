# systematic-debugging

> 让 AI 进行科学的代码故障排查，避免盲目的试错修复

**Source:** [GitHub - NousResearch/hermes-agent](https://github.com/NousResearch/hermes-agent/blob/main/skills/software-development/systematic-debugging/SKILL.md)

**Version:** 1.1.0 | **License:** MIT | **Platforms:** Linux, macOS, Windows

---

## 🎯 痛点 & 问题

在代码调试过程中，开发者经常面临以下问题：

- **盲目试错**：看到错误信息后直接尝试修复，不深究根本原因
- **治标不治本**：修复了表面症状，但问题很快以另一种形式重现
- **引入新 Bug**：快速补丁掩盖了潜在问题，导致更多 bug
- **重复修复失败**：同一个问题反复出现，每次都是"临时解决方案"
- **多人协作困惑**：团队成员遇到相同问题，无法系统化地共享调试经验

**核心痛点：** 随机修复浪费时间，而且会创造新的 bug。

---

## ⚙️ 原理：底层机制

Systematic Debugging Skill 基于一个核心原则：

> **铁律：永远先找到根本原因，再尝试修复。症状修复等于失败。**
> ```
> NO FIXES WITHOUT ROOT CAUSE INVESTIGATION FIRST
> ```

### 四阶段调试法

该 Skill 将调试过程分为四个严格顺序的阶段，每个阶段必须完成才能进入下一阶段：

| 阶段 | 名称 | 核心活动 |
|------|------|----------|
| **Phase 1** | 根本原因调查 | 读取错误信息、重现问题、检查变更、收集证据、追踪数据流 |
| **Phase 2** | 模式分析 | 找到工作的例子、对比差异、理解依赖 |
| **Phase 3** | 假设与测试 | 形成单一假设、最小化测试、一次只改一个变量 |
| **Phase 4** | 实施修复 | 创建回归测试、修复根本原因、验证修复 |

### 依赖工具/接口

调试过程中使用的 Hermes Agent 工具：

- `read_file` - 读取源代码文件
- `search_files` - 在代码库中搜索错误字符串或模式
- `terminal` - 运行测试或触发 bug
- `web_search` / `web_extract` - 搜索外部资料
- `delegate_task` - 复杂问题时派遣调查子代理
- `test-driven-development` - 集成 TDD 工作流

---

## 📖 使用指南

### 安装方式

systematic-debugging 是 Hermes Agent 内置的 Bundled Skill，默认已安装，无需额外安装。

如需从 Skills Hub 安装可选版本：
```bash
hermes skills install official/software-development/systematic-debugging
```

### 使用示例

**触发 Skill：**
```
使用 systematic-debugging skill 来帮我分析这个错误
```

**典型对话流程：**

1. **提供错误信息**
   ```
   我在运行 `npm test` 时遇到这个错误：
   TypeError: Cannot read property 'map' of undefined
   at Array.forEach (<anonymous>)
   ```

2. **AI 进入 Phase 1 - 根本原因调查**
   - 读取相关源文件
   - 搜索 `Cannot read property 'map'` 在代码库中的位置
   - 尝试重现问题
   - 检查最近的代码变更

3. **AI 进入 Phase 2-4**
   - 分析模式，找到类似工作的代码
   - 形成假设并测试
   - 创建回归测试，修复根本原因

### Phase 1 详细步骤

| 步骤 | 操作 | 工具 |
|------|------|------|
| 1 | 仔细阅读错误信息 | `read_file`, `search_files` |
| 2 | 一致地重现问题 | `terminal` |
| 3 | 检查最近的变更 | — |
| 4 | 收集证据 | 在每个组件边界添加诊断埋点 |
| 5 | 追踪数据流 | `search_files` |

---

## ✅ 适用场景

- **复杂 Bug 调试**：当一个问题反复出现或涉及多个组件时
- **回归问题**：代码突然不工作了，需要找到哪个变更导致
- **生产环境问题**：需要快速但准确地定位问题根因
- **团队知识共享**：建立标准化的调试流程，新成员可遵循
- **关键系统维护**：不允许临时补丁，需要彻底解决问题

---

## ❌ 不适用场景

- **简单明显的问题**：如拼写错误、缺少分号等一眼能看出的问题
- **需要立即止血的情况**：紧急情况下的临时修复（但事后仍需用此方法彻底解决）
- **探索性编码**：还不确定代码应该如何工作，只是尝试
- **性能优化**：这不是性能分析的工具，需要专门的 profiling 工具

---

## ⚠️ 局限 & 风险

- **耗时较长**：系统性调试比快速试错需要更多时间，但长期更有效
- **依赖上下文**：如果提供的错误信息或上下文不足，调查效果会打折扣
- **无法保证修复**：方法论不能保证100%解决问题，有些架构性问题需要重构
- **需要配合测试框架**：Phase 4 的回归测试需要项目有测试基础设施

---

## 🔗 相关链接

- **GitHub (SKILL.md):** https://github.com/NousResearch/hermes-agent/blob/main/skills/software-development/systematic-debugging/SKILL.md
- **Skills Catalog:** https://github.com/NousResearch/hermes-agent/blob/main/website/docs/reference/skills-catalog.md
- **Hermes Agent 官方文档:** https://hermes-agent.nousresearch.com/docs/
- **相关 Skill - python-debugpy:** https://github.com/NousResearch/hermes-agent/blob/main/skills/software-development/python-debugpy/SKILL.md
- **相关 Skill - node-inspect-debugger:** https://github.com/NousResearch/hermes-agent/blob/main/skills/software-development/node-inspect-debugger/SKILL.md
- **相关 Skill - test-driven-development:** https://github.com/NousResearch/hermes-agent/blob/main/skills/software-development/test-driven-development/SKILL.md

---

## 📝 更新日志

- `2026-06-15` 补充完整文档（基于官方 SKILL.md v1.1.0）

---

*本文档由 [Skills 工具箱](https://github.com/你的项目地址) 自动生成*