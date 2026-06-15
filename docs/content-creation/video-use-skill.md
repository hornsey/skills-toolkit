# video-use skill

> 帮你的口播视频剪成成片

## 🎯 痛点 & 问题

- 视频剪辑需要专业软件（Premiere、Final Cut Pro）学习成本高
- 录制了大量口播素材，但不知道如何高效整理和剪辑
- 想要快速将长视频剪成适合发布的短片
- 添加字幕、调色、动画等后期处理需要多项技能
- 视频制作流程碎片化，缺乏系统性
- AI 视频编辑工具大多需要订阅付费，且功能有限

## ⚙️ 原理

基于 **browser-use/video-use** 项目设计理念，通过自然语言对话与 AI Agent 协作完成视频剪辑。

**核心机制：**
- **语音转文字**：使用 ElevenLabs Scribe API 将视频音频转换为高精度文字稿
- **时间轴编辑**：基于文字稿进行精准的时间轴剪辑，支持词级别精度
- **FFmpeg 驱动**：使用 FFmpeg 进行视频处理、合成、编码
- **多轨编辑决策列表（EDL）**：以 JSON 格式记录剪辑决策，便于管理和迭代
- **并行处理**：通过子 Agent 并行处理动画、颜色分级等任务

**核心流程：**
1. **清点（Inventory）**：转录所有素材，建立素材库
2. **预检（Pre-Scan）**：标记口误、重复表达等问题片段
3. **对话理解需求**：与用户确认视频风格、时长、节奏等
4. **策略提案**：制定剪辑策略并等待确认
5. **执行剪辑**：生成 EDL、渲染预览、自我评估
6. **迭代优化**：根据反馈调整直到满意

**依赖工具：**
- FFmpeg（视频处理核心）
- ElevenLabs API Key（Scribe 语音转文字）
- Python 环境（视频-use 项目）
- 可选：yt-dlp（在线视频下载）、HyperFrames/Remotion（动画）、Manim（数学动画）

**核心逻辑：**
通过自然语言描述你的需求，AI Agent 理解后生成剪辑决策，再通过 FFmpeg 执行具体的视频处理操作，实现"说需求 → AI 规划 → 自动剪辑"的流程。

## 📖 使用指南

### 安装方式

```bash
# 克隆到稳定路径
git clone https://github.com/browser-use/video-use ~/Developer/video-use

# 安装 Python 依赖
cd ~/Developer/video-use
uv sync  # 或 pip install -e .

# 安装 ffmpeg
# macOS
brew install ffmpeg
# Debian/Ubuntu
sudo apt-get update && sudo apt-get install -y ffmpeg

# 注册 Skill 到 Claude Code
ln -s ~/Developer/video-use ~/.claude/skills/video-use

# 配置 ElevenLabs API Key
# 在 ~/Developer/video-use/.env 中添加：
# ELEVENLABS_API_KEY=你的API密钥
```

### 使用示例

**触发词：** "edit video"、"剪辑视频"、"cut this footage"、"添加字幕"、"视频后期"

**示例对话：**

```
用户：请帮我把这段口播视频剪成一个 2 分钟的发布视频
AI：我来帮你处理。首先让我了解一下素材：
1. 视频文件在哪里？
2. 目标时长和风格偏好是什么？
3. 需要添加字幕吗？
4. 有没有需要保留或删除的特定片段？

用户：[提供信息]
AI：[开始转录和分析]
...
```

**常用命令：**

```bash
# 转录单个视频
python transcribe.py video.mp4

# 批量转录目录下的所有视频
python transcribe_batch.py ./videos/

# 打包转录文件
python pack_transcripts.py --edit-dir ./edit/

# 渲染预览
python render.py edl.json -o preview.mp4 --preview

# 渲染最终版本
python render.py edl.json -o final.mp4

# 查看时间轴
python timeline_view.py video.mp4 10 30
```

## ✅ 适用场景

- **口播视频剪辑**：将长口播素材剪成精炼的发布版本
- **批量处理多个视频**：统一风格、批量导出
- **添加字幕**：自动生成并烧入字幕
- **颜色调整**：统一视频色调和亮度
- **片头片尾动画**：添加品牌动画效果
- **多机位剪辑**：从多个角度的素材中选择最佳片段
- **视频策划和策略制定**：与 AI 对话确定剪辑方向
- **从在线源下载视频**：使用 yt-dlp 下载 YouTube 等平台视频

## ❌ 不适用场景

- **复杂特效制作**：需要专业特效软件（After Effects、Nuke）的复杂合成效果
- **实时剪辑**：不适用于直播或需要即时输出的场景
- **3D 动画**：除了 Manim 有限支持外，不适合复杂 3D 内容
- **音频处理**：主要处理视频轨道，复杂音频混音需要 Audition 等专业工具
- **极短剪辑周期**：如果只需要快速裁剪，某些手机 App 可能更便捷
- **没有 API Key**：ElevenLabs Scribe API 需要付费订阅

## ⚠️ 局限 & 风险

1. **API 成本**：ElevenLabs Scribe API 按用量收费，转录大量视频可能产生费用
2. **本地资源**：视频渲染需要一定的 CPU/GPU 资源，大文件可能耗时较长
3. **首次配置复杂**：需要安装多个工具和配置环境，对新手不友好
4. **剪辑自主性**：AI 生成的剪辑决策可能不完全符合预期，需要多次迭代
5. **文件管理**：需要手动管理素材文件和输出文件目录结构
6. **平台限制**：某些平台可能有视频格式、大小、时长限制，需要额外处理
7. **动画引擎可选但复杂**：HyperFrames 需要 Node.js 22+，Remotion 配置复杂

## 🔗 相关链接

- **GitHub**：https://github.com/browser-use/video-use
- **SKILL.md**：https://github.com/browser-use/video-use/blob/main/SKILL.md
- **安装指南**：https://github.com/browser-use/video-use/blob/main/install.md
- **browser-use 组织**：https://github.com/browser-use
- **ElevenLabs API**：https://elevenlabs.io/app/settings/api-keys
- **FFmpeg 官网**：https://ffmpeg.org/
- **Skills.sh**：https://skills.sh/browser-use/video-use/video-use

## 📝 更新日志

- `2026-06-15` 初始化文档，补充完整章节信息

---

*本文档由 [Skills 工具箱](https://github.com/你的项目地址) 自动生成*