# agent-tools

> 任务自动拆分并分配给子Agent — 通过 inference.sh CLI 调用 250+ AI 应用和模型

## 🎯 痛点 & 问题

在 AI 代理开发中，常见以下困扰：

- **单一模型能力有限**：需要一个能调用多种模型的代理能力，但集成麻烦
- **GPU 资源受限**：本地运行大模型需要高端 GPU，成本高
- **多工具切换割裂**：需要图片生成、视频制作、搜索、LLM 调用时，要在多个平台间切换
- **API 集成复杂**：每个服务有不同的 API 文档、认证方式、响应格式
- **缺乏统一接口**：没有标准化的方式来组合不同 AI 能力完成复杂任务

**agent-tools 解决的核心问题**：通过 inference.sh 的 `belt` CLI，提供统一的接口来调用 250+ AI 应用（图像生成、视频制作、LLM 调用、网页搜索、Twitter 自动化等），让 AI 代理可以像使用本地工具一样使用云端 AI 能力。

## ⚙️ 原理

### 底层机制

agent-tools 是 `inference-sh/skills` 技能集合中的核心工具集，基于以下机制：

1. **inference.sh 云平台**：提供 250+ AI 应用的云端 API，无需本地 GPU
2. **belt CLI**：统一的命令行工具，屏蔽底层差异
3. **SKILL.md 标准化**：符合 Agent Skills 开放标准，AI 可自动识别和调用
4. **allowed-tools 权限**：可指定 AI 可使用的工具（如 `Bash(belt *)`）

### 依赖工具/接口

- **inference.sh CLI (`belt`)**：核心命令行工具
- **inference.sh 账号**：需要 API key 来调用服务
- **支持客户端**：Claude Code、OpenAI Codex CLI、Cursor 等 Agent Skills 兼容客户端
- **API 端点**：https://api.inference.sh

### 核心功能模块

| 类别 | 能力 |
|------|------|
| **图像生成** | FLUX、 Gemini 3 Pro、 Grok Imagine、 Seedream 4.5、 Reve、 Topaz Upscaler 等 50+ 模型 |
| **视频生成** | Veo 3.1、 Seedance 1.5、 Wan 2.5、 OmniHuman、 Fabric 等 40+ 模型 |
| **LLM 调用** | Claude Opus/Sonnet/Haiku、 Gemini 3 Pro、 Kimi K2、 GLM-4、任何 OpenRouter 模型 |
| **网页搜索** | Tavily Search、 Tavily Extract、 Exa Search、 Exa Answer、 Exa Extract |
| **3D 生成** | Rodin 3D Generator |
| **Twitter/X** | post-tweet、 post-create、 dm-send、 user-follow、 post-like、 post-retweet |
| **工具类** | 媒体合并、视频字幕、图片拼接、音频提取等 |

### 工作流程

```
用户请求 → AI 识别需要调用 AI 能力 → 通过 belt CLI 调用 inference.sh API → 返回结果给用户
```

## 📖 使用指南

### 安装方式

**安装 belt CLI**：

```bash
npx skills add belt-sh/cli
```

**安装 agent-tools 技能**：

```bash
npx skills add https://github.com/inference-sh/skills --skill agent-tools
```

或通过 Claude Code 插件方式安装：

```
/inference-sh:agent-tools
```

### 使用示例

**场景 1：生成图片**

```
用户：帮我生成一张科技感十足的封面图

AI：
我来使用 FLUX 模型帮你生成...
[调用 belt app run]
```

**场景 2：复杂研究任务**

```
用户：帮我研究 OpenClaw 的赚钱机会，并生成一篇文档

AI（触发 agent-tools）：
好的，我来分解这个任务：
1. 搜索 OpenClaw 相关资料
2. 分析商业模式
3. 整理成文档
[使用 Tavily Search 搜索 → 分析 → 生成报告]
```

**场景 3：视频生成**

```
用户：我想做一个产品介绍视频

AI：
我来帮你生成...首先需要确定视频内容和风格，然后调用 Veo 3.1 模型...
```

### 常用命令

| 任务 | 命令 |
|------|------|
| 浏览应用商店 | `belt app store` |
| 搜索应用 | `belt app store search "flux"` |
| 按类别筛选 | `belt app store --category image` |
| 获取应用详情 | `belt app get google/veo-3-1-fast` |
| 生成示例输入 | `belt app sample google/veo-3-1-fast --save input.json` |
| 运行应用 | `belt app run google/veo-3-1-fast --input input.json` |
| 非阻塞运行 | `belt app run <app> --input input.json --no-wait` |
| 查看任务状态 | `belt task get <task-id>` |

### 本地文件上传

CLI 支持自动上传本地文件：

```bash
# 直接使用本地文件路径，CLI 会自动处理上传
belt app run <app> --input /path/to/local/file.json
```

## ✅ 适用场景

- **需要多种 AI 能力的任务**：如同时需要搜索、图像生成、文本生成的工作流
- **没有本地 GPU**：需要调用云端大模型但没有高端显卡
- **快速原型开发**：需要快速验证 AI 能力组合的效果
- **社交媒体运营**：自动化 Twitter/X 发帖、管理互动
- **内容创作**：批量生成图像、视频、文案
- **市场研究**：搜索 + 分析 + 报告生成一体化
- **多模型对比**：同一任务用不同模型尝试，对比结果

## ❌ 不适用场景

- **实时性要求极高的任务**：网络延迟可能影响体验
- **需要完全离线工作**：依赖云端 API，必须有网络连接
- **成本敏感场景**：大量调用可能产生较高 API 费用
- **数据隐私要求极高**：所有数据都需要上传到 inference.sh 处理
- **需要微调的模型**：inference.sh 提供的是预置模型，无法进行 fine-tuning

## ⚠️ 局限 & 风险

1. **网络依赖**：完全依赖云端服务，离线无法使用
2. **API 费用**：使用云端 API 需要付费，成本随调用量增加
3. **数据隐私**：上传的数据由 inference.sh 处理，需确认隐私政策
4. **速率限制**：可能有 API 速率限制，高频调用可能受限
5. **错误处理**：第三方 API 稳定性影响服务可用性
6. **上下文限制**：某些模型有输入大小限制

**缓解建议**：
- 重要任务先做小规模测试，评估效果和成本
- 检查 inference.sh 的隐私政策和服务条款
- 关注 API 速率限制，考虑实现重试机制
- 定期监控 API 使用量和费用

## 🔗 相关链接

- **GitHub 仓库**：https://github.com/inference-sh/skills
- **agent-tools 源码**：https://github.com/inference-sh/skills/blob/main/tools/agent-tools/SKILL.md
- **inference.sh 官网**：https://inference.sh
- **inference.sh 文档**：https://inference.sh/docs
- **App Store**：https://app.inference.sh
- **Skills.sh 页面**：https://skills.sh/inferen-sh/skills/agent-tools

## 📝 更新日志

- `2026-06-15` 补充完整文档（安装方式、使用示例、适用场景等）

---

*本文档由 Skills 工具箱 自动生成*