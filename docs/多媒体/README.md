# 🎨 多媒体

> 音视频与视觉内容创作的 Skills 分类，涵盖视频剪辑、3D 可视化等专业创作工具

## 📚 Skills 列表

本文档目录包含以下 **2 个** 多媒体类 Skills：

---

### 1. remotion-skills

> AI 视频剪辑，让你的创意视频化

**核心功能：** 基于 Remotion 框架，通过代码描述快速生成专业视频内容。

- ✅ 代码驱动视频生成
- ✅ 精准控制视频元素
- ✅ 批量视频模板化生产

**安装命令：**
```bash
npx skills add remotion-dev/skills
```

**使用示例：**
```
用 Remotion Skill 基于这个文案为我生成一段视频：XXX
```

**相关链接：**
- [GitHub](https://github.com/remotion-dev/skills)

---

### 2. AetherViz Master

> 把内容变成 3D 可视化呈现，打造沉浸式视觉体验

**核心功能：** 将各类内容（文案、数据、概念等）转换为 3D 可视化展示页面。

- ✅ 3D 场景自动生成
- ✅ 交互式展示效果
- ✅ 多领域内容可视化

**安装命令：**
```bash
npx skills add https://github.com/andyhuo520/aetherviz-master --skill aetherviz-master
```

**使用示例：**
```
使用 AetherViz Master skill 为我生成一个介绍电磁感应的展示页面
```

**相关链接：**
- [GitHub](https://github.com/andyhuo520/aetherviz-master)

---

## 🎯 快速导航

| 功能类型 | 推荐 Skill |
|---------|-----------|
| AI 视频剪辑 | [remotion-skills](./2-remotion-skills.md) |
| 3D 可视化 | [AetherViz Master](./12-aetherviz-master.md) |

---

## 📖 通用安装命令格式

```bash
# 通过 npx skills 安装
npx skills add <GitHub URL> --skill <skill-name>

# 通过 OpenClaw 安装
openclaw skills install <skill-name>

# 通过 ClawHub 安装
clawhub install <author/skill-name>

# 直接克隆到本地
git clone <repo-url> ~/path/to/skill
```

---

*最后更新：2026-06-15*