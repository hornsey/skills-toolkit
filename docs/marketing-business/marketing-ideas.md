# marketing-ideas

> 营销方案设计 Skill —— 围绕产品定位、预算、渠道与增长阶段，为团队快速生成可执行的营销思路

**Source:** [GitHub - coreyhaines31/marketingskills](https://github.com/coreyhaines31/marketingskills)

**Platforms:** Claude Code / OpenClaw / 兼容 SKILL.md 的 Agent 运行时

---

## 🎯 痛点 & 问题

营销最难的地方通常不是“完全没点子”，而是：

- **点子很多，但不知道选哪个**：内容、SEO、渠道合作、社区、裂变、广告都能做，却不知道先做什么
- **预算有限，容错率低**：小团队不能每个方向都试一遍
- **产品和策略脱节**：营销动作看起来热闹，但没有真正连接用户痛点和产品价值
- **缺少系统性框架**：想到一个战术就去做，做完又无法复盘是否值得继续

`marketing-ideas` 的价值，在于帮你先建立“适合你当前阶段的增长选项清单”，再从中筛出更值得优先尝试的方案。

---

## ⚙️ 原理

该 Skill 来自 `marketingskills` 技能库，强调围绕产品上下文来理解营销，而不是凭空给模板。

### 核心机制

1. **先读产品上下文**
   - 优先查看 `.agents/product-marketing.md` 等产品信息文件
   - 先理解产品、用户和定位，再给营销建议

2. **按类别组织营销思路**
   - 例如内容与 SEO、内容格式、低预算增长、产品驱动增长等
   - 方便按阶段、预算和目标筛选方案

3. **策略优先而非纯战术堆砌**
   - 不只是给“发小红书、做 SEO”这种泛化建议
   - 而是尝试把动作与受众、传播路径和业务目标对应起来

4. **可与其他营销 Skill 串联**
   - 可配合 `copywriting`、`cro`、`ab-testing`、`product-marketing` 等一起工作
   - 更适合形成完整增长闭环

### 工作流

```text
读取产品上下文 → 判断阶段与目标 → 生成营销思路池
→ 按预算 / 渠道 / 时间成本筛选 → 输出优先级建议与实验方向
```

---

## 📖 使用指南

### 安装方式

```bash
npx skills add coreyhaines31/marketingskills
```

如需显式指定该 Skill：

```bash
npx skills add https://github.com/coreyhaines31/marketingskills --skill marketing-ideas
```

### 常见触发方式

```text
请使用 marketing-ideas，帮我设计一个低预算增长方案
```

```text
我们是一款面向中小企业的 SaaS，有什么适合冷启动的营销策略？
```

```text
我只有 5000 预算，想验证获客渠道，应该先做什么？
```

### 使用示例

#### 场景 1：SaaS 冷启动

```text
用户：我们是项目管理 SaaS，刚上线，预算很少，应该怎么做营销？
AI：我会先从产品定位、用户痛点和可承受成本出发，优先筛低预算高反馈的动作，比如内容验证、社区渗透和产品驱动增长。
```

#### 场景 2：内容营销方向选择

```text
用户：我想做内容营销，但不知道博客、播客还是视频更适合。
AI：我会根据受众习惯、产能和分发渠道，帮你比较不同形式的投入产出比。
```

#### 场景 3：寻找下一步实验

```text
用户：我们已经做过 SEO 和投放了，还有什么能试？
AI：适合用 marketing-ideas 生成下一阶段的实验池，再结合现有数据排优先级。
```

---

## ✅ 适用场景

- **SaaS / 数字产品营销**：尤其适合产品导向型增长场景
- **低预算增长探索**：需要从有限资源里找高优先级实验
- **内容与 SEO 规划**：寻找长期可复用的内容增长路径
- **冷启动阶段试错**：帮助建立更有边界的营销实验池
- **需要与其他营销 Skill 组合**：形成从想法到执行再到复盘的闭环

---

## ❌ 不适用场景

- **要立即执行落地页文案**：更适合用 `copywriting`
- **需要严谨实验设计**：更适合配合 `ab-testing` 或 CRO 类 Skill
- **偏线下或品牌公关场景**：该 Skill 更偏数字营销和产品增长
- **完全没有产品定位**：若产品价值和目标用户都不清晰，营销想法很难有效

---

## ⚠️ 局限 & 风险

1. **想法不等于效果**：输出的是策略候选，不是已验证结果
2. **依赖产品上下文质量**：上下文越模糊，建议越容易泛化
3. **平台变化快**：渠道算法、SEO 规则和投放环境都可能迅速变化
4. **容易忽略执行成本**：再好的营销思路，也要回到团队产能现实中判断

---

## 🔗 相关链接

- **GitHub 仓库**：https://github.com/coreyhaines31/marketingskills
- **Skill 源文件**：https://github.com/coreyhaines31/marketingskills/blob/main/skills/marketing-ideas/SKILL.md
- **官方网站**：https://marketing-skills.com
- **相关 Skill**：`copywriting`、`content-strategy`、`validate-idea`

---

## 📝 更新日志

- `2026-06-16` 重写并扩充文档，补强产品上下文依赖、策略逻辑与选型边界
- `2026-06-15` 初始化文档

---

*本文档由 [Skills 工具箱](https://github.com/你的项目地址) 整理维护*