# 👥 关系模拟

> 模拟各类人际关系进行交互的 Skills 分类，将关系经验蒸馏为可复用的 AI 技能

## 📚 Skills 列表

本文档目录包含以下 **2 个** 关系模拟类 Skills：

---

### 1. 各式关系 Skill

> 蒸馏任何关系为一个 Skill，模拟不同人际角色的思维方式

**核心功能：** 将各类人际关系（同事、老板、父母、导师等）的交互经验蒸馏成独立的 Skills，实现精准的角色扮演。

**支持的关系类型：**

| 关系 | GitHub |
|------|--------|
| 同事 Skill | [titanwings/colleague-skill](https://github.com/titanwings/colleague-skill) |
| 老板 Skill | [vogtsw/boss-skills](https://github.com/vogtsw/boss-skills) |
| 前任 Skill | [perkfly/ex-skill](https://github.com/perkfly/ex-skill) |
| 暗恋对象 Skill | [xiaoheizi8/crush-skills](https://github.com/xiaoheizi8/crush-skills) |
| 自己 Skill | [notdog1998/yourself-skill](https://github.com/notdog1998/yourself-skill) |
| 父母 Skill | [xiaoheizi8/parents-skills](https://github.com/xiaoheizi8/parents-skills) |
| 导师 Skill | [ybq22/supervisor](https://github.com/ybq22/supervisor) |
| 师兄 Skill | [zhanghaichao520/senpai-skill](https://github.com/zhanghaichao520/senpai-skill) |
| 永生 Skill | [agenmod/immortal-skill](https://github.com/agenmod/immortal-skill) |
| 数字人生 Skill | [wildbyteai/digital-life](https://github.com/wildbyteai/digital-life) |
| 重逢 Skill | [yangdongchen66-boop/reunion-skill](https://github.com/yangdongchen66-boop/reunion-skill) |

**安装示例：**
```bash
npx skills add https://github.com/notdog1998/yourself-skill
```

---

### 2. create-yourself

> 蒸馏自己的信息成为一个 AI 插件，打造个人数字分身

**核心功能：** 将个人的思维方式、经验、偏好等信息蒸馏成独立的 AI 技能，打造个人数字分身。

- ✅ 个性化交互体验
- ✅ 保留个人经验与观点
- ✅ 模拟个人决策风格

**安装命令：**
```bash
npx skills add https://github.com/notdog1998/yourself-skill
```

**相关链接：**
- [GitHub](https://github.com/notdog1998/yourself-skill)

---

## 🎯 快速导航

| 场景 | 推荐 Skill |
|------|-----------|
| 职场关系模拟 | [同事 Skill](https://github.com/titanwings/colleague-skill)、[老板 Skill](https://github.com/vogtsw/boss-skills) |
| 家庭关系模拟 | [父母 Skill](https://github.com/xiaoheizi8/parents-skills) |
| 师生关系模拟 | [导师 Skill](https://github.com/ybq22/supervisor)、[师兄 Skill](https://github.com/zhanghaichao520/senpai-skill) |
| 个人数字分身 | [create-yourself](./34-create-yourself.md) |

---

## 📖 通用安装命令格式

```bash
# 通过 npx skills 安装
npx skills add <GitHub URL> --skill <skill-name>

# 通过 OpenClaw 安装
openclaw skills install <skill-name>

# 通过 ClawHub 安装
clawhub install <author/skill-name>
```

---

*最后更新：2026-06-15*