# excalidraw-diagram-generator

> 让 AI 生成手绘风格的 Excalidraw 图表（架构图、流程图、序列图等）

**Source:** [Bundled Skill - Hermes Agent](https://github.com/NousResearch/hermes-agent/blob/main/skills/creative/excalidraw)

**Version:** 1.0.0 | **License:** MIT | **Platforms:** Linux, macOS, Windows

---

## 🎯 痛点 & 问题

在技术文档和沟通过程中，开发者经常面临以下问题：

- **图表绘制耗时**：用 GUI 工具绘制架构图、流程图需要大量时间
- **团队格式不统一**：每人用不同的工具，样式杂乱
- **代码即图表**：想要用代码/文本描述生成图表，而不是拖拽操作
- **快速迭代困难**：修改图表需要打开设计软件，不够敏捷
- **缺乏版本控制**：图片格式无法有效进行版本控制

**核心痛点：** 需要快速生成可视化图表，但不想学习复杂的设计工具。

---

## ⚙️ 原理：底层机制

Excalidraw Skill 的核心原理是：**通过生成标准 Excalidraw JSON 格式文件，让 AI 直接创建可编辑的图表**。

### 技术实现

1. **输出格式**：生成 `.excalidraw` JSON 文件
2. **查看方式**：文件可直接拖拽到 [excalidraw.com](https://excalidraw.com) 查看和编辑
3. **无需 API**：不需要任何账户、API Key 或渲染库
4. **手绘风格**：Excalidraw 的标志性手绘/素描风格

### 文件格式

```json
{
  "type": "excalidraw",
  "version": 2,
  "source": "hermes-agent",
  "elements": [...],
  "appState": {
    "viewBackgroundColor": "#ffffff"
  }
}
```

### 元素类型

| 元素类型 | 用途 | 关键属性 |
|----------|------|----------|
| `rectangle` | 矩形框、容器 | `roundness: { type: 3 }` 圆角 |
| `ellipse` | 椭圆、圆形 | — |
| `diamond` | 菱形、决策节点 | — |
| `arrow` | 箭头、连接线 | `points`, `endArrowhead` |
| `text` | 文本标签 | `fontFamily: 1` (手绘字体) |

### 依赖工具/接口

- `write_file` - 将 JSON 写入 `.excalidraw` 文件
- `terminal` - 可选：使用 `scripts/upload.py` 上传获取分享链接

---

## 📖 使用指南

### 安装方式

excalidraw 是 Hermes Agent 内置的 Bundled Skill，默认已安装，无需额外安装。

### 使用示例

**触发 Skill：**
```
使用 excalidraw skill 帮我画一个微服务架构图
```

**生成简单的用户认证流程图：**

```json
{
  "type": "excalidraw",
  "version": 2,
  "source": "hermes-agent",
  "elements": [
    {
      "type": "rectangle",
      "id": "r1",
      "x": 100,
      "y": 100,
      "width": 200,
      "height": 80,
      "roundness": { "type": 3 },
      "backgroundColor": "#a5d8ff",
      "fillStyle": "solid",
      "boundElements": [{ "id": "t_r1", "type": "text" }]
    },
    {
      "type": "text",
      "id": "t_r1",
      "x": 105,
      "y": 110,
      "width": 190,
      "height": 25,
      "text": "用户浏览器",
      "fontSize": 20,
      "fontFamily": 1,
      "strokeColor": "#1e1e1e",
      "textAlign": "center",
      "verticalAlign": "middle",
      "containerId": "r1",
      "originalText": "用户浏览器",
      "autoResize": true
    },
    {
      "type": "arrow",
      "id": "a1",
      "x": 300,
      "y": 140,
      "width": 150,
      "height": 0,
      "points": [[0, 0], [150, 0]],
      "endArrowhead": "arrow",
      "startBinding": { "elementId": "r1", "fixedPoint": [0.5, 0] },
      "endBinding": { "elementId": "r2", "fixedPoint": [0.5, 0] }
    },
    {
      "type": "rectangle",
      "id": "r2",
      "x": 450,
      "y": 100,
      "width": 200,
      "height": 80,
      "roundness": { "type": 3 },
      "backgroundColor": "#dcfce7",
      "fillStyle": "solid",
      "boundElements": [{ "id": "t_r2", "type": "text" }]
    },
    {
      "type": "text",
      "id": "t_r2",
      "x": 455,
      "y": 110,
      "width": 190,
      "height": 25,
      "text": "API 网关",
      "fontSize": 20,
      "fontFamily": 1,
      "strokeColor": "#1e1e1e",
      "textAlign": "center",
      "verticalAlign": "middle",
      "containerId": "r2",
      "originalText": "API 网关",
      "autoResize": true
    }
  ],
  "appState": {
    "viewBackgroundColor": "#ffffff"
  }
}
```

**保存文件：**
```
~/diagrams/auth-flow.excalidraw
```

**使用方式：**
1. 下载生成的 `.excalidraw` 文件
2. 打开 [excalidraw.com](https://excalidraw.com)
3. 将文件拖拽到页面即可查看和编辑

### 常用属性默认值

| 属性 | 默认值 | 说明 |
|------|--------|------|
| `strokeColor` | `#1e1e1e` | 描边颜色 |
| `backgroundColor` | `transparent` | 背景色 |
| `fillStyle` | `solid` | 填充样式 |
| `strokeWidth` | `2` | 描边宽度 |
| `roughness` | `1` | 手绘粗糙度 |
| `fontFamily` | `1` | 手绘字体 (Virgil) |

---

## ✅ 适用场景

- **架构图**：微服务架构、系统组件关系
- **流程图**：业务流程、算法流程
- **序列图**：API 调用顺序、时序图
- **概念图**：知识图谱、思维导图
- **技术文档**：READMEs、API 文档、Design Docs
- **团队协作**：统一风格的图表分享

---

## ❌ 不适用场景

- **精确技术图纸**：如电路图、CAD 等需要精确尺寸的图
- **实时数据可视化**：需要动态数据的仪表板
- **动画图表**：需要动画效果的演示
- **大量数据图表**：如柱状图、折线图等（用专业图表库更合适）
- **像素级精确设计**：Excalidraw 的手绘风格不适合精确对齐

---

## ⚠️ 局限 & 风险

- **手绘风格限制**：无法生成完全精确或正式风格的图表
- **复杂图表繁琐**：大型图表的 JSON 手工编写困难
- **无自动布局**：需要手动指定每个元素的位置
- **文件格式特殊**：`.excalidraw` 不是通用格式，外部工具支持有限
- **协作限制**：无法实时协作（需要 Excalidraw 本身的功能）

---

## 🔗 相关链接

- **Excalidraw 官网:** https://excalidraw.com
- **GitHub (Bundled Skills):** https://github.com/NousResearch/hermes-agent/blob/main/skills/creative/excalidraw
- **Documentation:** https://github.com/NousResearch/hermes-agent/blob/main/website/docs/user-guide/skills/bundled/creative/creative-excalidraw.md
- **Skills Catalog:** https://github.com/NousResearch/hermes-agent/blob/main/website/docs/reference/skills-catalog.md
- **相关 Skill - architecture-diagram:** https://github.com/NousResearch/hermes-agent/blob/main/skills/creative/architecture-diagram/SKILL.md
- **相关 Skill - concept-diagrams:** https://hermes-agent.nousresearch.com/docs/user-guide/skills/optional/creative/creative-concept-diagrams

---

## 📝 更新日志

- `2026-06-15` 补充完整文档（基于官方文档）

---

*本文档由 [Skills 工具箱](https://github.com/你的项目地址) 自动生成*