# browser-use

> 让 AI 代理能够控制浏览器的开源库，通过自然语言指令完成网页自动化任务

## 🎯 痛点 & 问题

在 browser-use 出现之前，浏览器自动化面临以下挑战：

- **传统自动化脚本脆弱**：基于 XPath 或 CSS 选择器的脚本在网站 UI 变化时极易失效
- **需要编程基础**：Selenium/Playwright 等工具需要编写大量代码才能完成简单任务
- **难以处理动态内容**：单页应用、无限滚动、懒加载等场景处理复杂
- **登录与认证状态管理麻烦**：维持登录态、处理 Cookie、绕过验证码都是难题
- **多步骤任务难以编排**：如"搜索 → 筛选 → 提取数据 → 保存"这类工作流需要大量胶水代码

**browser-use 的核心价值**：用自然语言描述任务，AI 自动规划并执行一系列浏览器操作，将高层指令转换为可执行的网页交互。

## ⚙️ 原理

browser-use 的核心架构分为两层：

### 传统 Python 版本
```
自然语言指令 → LLM (理解意图) → 规划操作序列 → Browser Agent → Playwright/CDP → 浏览器
```

1. **LLM 推理层**：接收自然语言任务，使用大语言模型理解用户意图
2. **规划器**：将任务分解为可执行的浏览器操作（如点击、输入、滚动、截图）
3. **执行层**：通过 Playwright 或 Chrome DevTools Protocol (CDP) 控制真实浏览器
4. **反馈循环**：执行结果反馈给 LLM，必要时进行重试或调整策略

### 新版 Beta (0.13+)
```
Python API → Rust Core → Browser Harness → 浏览器
```

- **Rust Core**：用 Rust 重写核心逻辑，提升执行速度和稳定性
- **Browser Harness**：轻量级的自愈式浏览器控制层，能自动应对页面变化

**支持的主流 LLM 提供商**：
- Anthropic (Claude)
- OpenAI (GPT 系列)
- Google Gemini
- 本地模型（如 Ollama）

## 📖 使用指南

### 安装方式

```bash
# 推荐使用 uv
uv add "browser-use[core]"

# 或使用 pip
pip install "browser-use[core]"
```

### 使用示例

#### 基础 Python 用法

```python
from browser_use.beta import Agent, BrowserProfile, ChatBrowserUse
import asyncio

async def main():
    agent = Agent(
        task="Find the number of stars of the browser-use repo",
        llm=ChatBrowserUse(model='bu-3-max'),
        browser_profile=BrowserProfile(
            headless=False,
            allowed_domains=["*.github.com"],
        ),
    )
    history = await agent.run()
    print(history.final_result())

if __name__ == "__main__":
    asyncio.run(main())
```

#### 使用现有 Python Agent（兼容旧版）

```python
from browser_use import Agent

agent = Agent(
    task="帮我填写这份求职申请，简历信息在 resume.txt 中",
    llm=llm,
    browser=browser,
)
await agent.run()
```

#### CLI 用法

```bash
# 打开网页
browser-use open https://example.com

# 查看可交互元素
browser-use state

# 点击元素（按索引）
browser-use click 5

# 输入文本
browser-use type "Hello World"

# 截图
browser-use screenshot page.png

# 关闭浏览器
browser-use close
```

#### 初始化项目模板

```bash
uvx browser-use init --template default
```

可用的模板：
- `default` - 最小配置，快速上手
- `advanced` - 完整配置选项，附详细注释
- `tools` - 自定义工具和扩展示例

#### Claude Code 集成

```bash
mkdir -p ~/.claude/skills/browser-use
curl -o ~/.claude/skills/browser-use/SKILL.md \
  https://raw.githubusercontent.com/browser-use/browser-use/main/skills/browser-use/SKILL.md
```

### 环境配置

创建 `.env` 文件：

```bash
# Browser Use Cloud API Key（可选）
BROWSER_USE_API_KEY=your-key

# LLM API Keys（根据你使用的模型选填）
GOOGLE_API_KEY=your-key
ANTHROPIC_API_KEY=your-key
OPENAI_API_KEY=your-key
```

### 使用真实浏览器配置文件（保留登录态）

```python
from browser_use import Agent

agent = Agent(
    task="帮我完成 LinkedIn 求职申请",
    browser_profile=BrowserProfile(
        browser="chrome",
        chrome_profile_path="/path/to/your/chrome/profile",  # 保留已登录状态
    ),
)
```

## ✅ 适用场景

- **数据采集与研究**：抓取电商评论、社交媒体内容、房产信息、职位列表等
- **表单自动填写**：求职申请、调查问卷、注册流程、订单处理
- **价格监控与比较**：多平台价格追踪、竞品分析
- **内容发布与管理**：定时发帖、内容搬运、评论回复
- **个人效率助手**：行程规划、机票酒店预订、会议安排
- **测试与监控**：网页可用性监测、截图对比、端到端测试
- **需要登录态的操作**：访问需认证的内部系统、会员专属内容

## ❌ 不适用场景

- **需要验证码的场景**：开源版本无法处理 CAPTCHA（需使用 Browser Use Cloud 的隐身浏览器）
- **极度复杂的交互**：如拖拽排序、canvas 操作、实时协作编辑
- **对稳定性要求极高的生产环境**：自托管版本可能需要额外的容错机制
- **资源受限环境**：每个浏览器实例占用内存较大（通常 300MB+）
- **需要处理文件上传/下载**：需要额外配置，且行为不稳定
- **高频短时任务**：启动浏览器开销大，不适合秒级频繁任务

## ⚠️ 局限 & 风险

### 技术局限

| 问题 | 说明 |
|------|------|
| **页面变化脆弱** | 网站 UI 改版后可能需要调整提示词 |
| **成功率非 100%** | BU-3 模型在 100 个真实任务中达到 78% 准确率 |
| **速度较慢** | 每次操作都需要 LLM 推理，比直接脚本慢数倍 |
| **内存占用高** | 每个浏览器实例占用大量内存 |

### 风险提示

1. **反爬虫检测**：网站可能检测并封禁自动化浏览器
2. **API 成本**：LLM 调用会产生 token 费用
3. **数据安全**：使用云端 API 时，数据会发送到第三方
4. **法律合规**：某些网站的自动化访问可能违反其服务条款

## 🔗 相关链接

- **GitHub 仓库**：https://github.com/browser-use/browser-use
- **官方文档**：https://docs.browser-use.com/
- **官网**：https://browser-use.com
- **Cloud 平台**：https://cloud.browser-use.com/
- **官方博客**：https://browser-use.com/posts
- **Discord 社区**：https://link.browser-use.com/discord
- **Benchmark 项目**：https://github.com/browser-use/benchmark
- **Web UI 项目**：https://github.com/browser-use/web-ui
- **Browser Harness**：https://github.com/browser-use/browser-harness

---

## 📝 更新日志

- `2026-06-15` 补充完整文档（安装、使用示例、适用场景、局限等）

---

*本文档由 [Skills 工具箱](https://github.com/你的项目地址) 自动生成*