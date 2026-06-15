# Skills工具箱



**Skills** 是一种**模块化的能力扩展包**，能让 **AI Agent（如 Claude Code、OpenClaw）**在识别到特定任务时**自动加载并执行封装好的工作流程**。

它通常以文件夹形式存在，包含**核心指令文件（SKILL\.md）、可执行脚本、参考文档**和**素材资源**，将领域知识、操作步骤和工具调用逻辑打包成可复用的“技能包”。

其核心设计是**渐进式加载机制**：仅预先加载技能的元数据（名称和描述），当用户请求匹配时才加载详细指令，并按需调用脚本或资源，从而兼顾上下文效率与功能深度。



使用 Skills 非常简单。

如果你是普通用户，可以在支持 Skills 的平台（如 Claude Code、扣子 Coze、OpenClaw）中直接安装社区或官方提供的技能包，安装后只需用自然语言描述需求，AI 便会自动匹配并调用相应技能。

如果你是开发者或想创建自定义技能，可以利用内置的 skill\-creator 等工具，通过自然语言描述你的工作流程和方法，AI 会协助生成符合规范的技能文件，之后将其部署到相应目录即可让 Agent 使用。



欢迎私我，加入 **乐天AI学习交流群。**群内每日分享 **最新AI资讯、技术和工具，**不定期分享各种**AI学习资料**。

![Image](https://internal-api-drive-stream.feishu.cn/space/api/box/stream/download/authcode/?code=NGU5MWM1OTJlZTEyMTJiN2VhZTgzODY5YjY3OTllNzRfMWU4ZjYwNTM5ZDYwNzdjOGQ3OTg4ZjA2ZWY5Y2ZhM2RfSUQ6NzY0OTc0Mzg1MzI4MDU5NTE1NV8xNzgxNDg2MDA1OjE3ODE1NzI0MDVfVjM)



![Image](https://internal-api-drive-stream.feishu.cn/space/api/box/stream/download/authcode/?code=OWQ0NjE2ZmJkMmJlN2UxZTI2ZGIwMDgyNjNjMDI2ZjlfZDBjZWMyZmVlYWVkYjM0MjIxNWVmZDQ4ODEwZjU3MTlfSUQ6NzYxNDMxMDk4MDMyMzEzNDQxN18xNzgxNDg2MDA2OjE3ODE1NzI0MDZfVjM)







# 技能包分享

|编号|名称|开源地址|功能|安装指令|使用示例|介绍地址|
|---|---|---|---|---|---|---|
|1|document\-skills <br>|https://github\.com/anthropics/skills/tree/main|文档技能包<br>|终端执行命令<br>npx skills add https://github\.com/anthropics/skills |||
|2|remotion\-skills|https://github\.com/remotion\-dev/skills|AI 视频剪辑<br>|终端执行命令<br>npx skills add remotion\-dev/skills|用 Remotion Skill 基于这个文案为我生成一段视频：XXX||
|3|brainstorming<br>|https://github\.com/obra/superpowers<br>|结构化头脑风暴技能包<br>|终端执行命令<br>npx skills add https://github\.com/obra/superpowers \-\-skill brainstorming|||
|4|mckinsey\-consultant|https://github\.com/fleurytian/awesome\-claude\-skills |麦肯锡顾问|npx skills add https://github\.com/fleurytian/awesome\-claude\-skills \-\-skill mckinsey\-consultant|||
|5|canvas\-design<br>|https://github\.com/anthropics/skills |一句话生成设计图|npx skills add https://github\.com/anthropics/skills \-\-skill canvas\-design|||
|6|copywriting|https://github\.com/coreyhaines31/marketingskills|专业营销文案写手<br>|npx skills add https://github\.com/coreyhaines31/marketingskills \-\-skill copywriting|||
|7|baoyu\-post\-to\-wechat|https://github\.com/jimliu/baoyu\-skills |公众号自动发布|npx skills add https://github\.com/jimliu/baoyu\-skills \-\-skill baoyu\-post\-to\-wechat|||
|8|browser\-use <br>|https://github\.com/browser\-use/browser\-use |浏览器自动化操作<br>|npx skills add https://github\.com/browser\-use/browser\-use \-\-skill browser\-use|使用 browser\-use  skill, \-\-browser real 模式, 为我搜集小红书的AI相关图文帖，并将点赞最高的10个帖子信息记录下来，保存到Excel文档里||
|9|agent\-tools|https://skills\.sh/inferen\-sh/skills/agent\-tools|任务自动拆分并分配给子Agent|npx skills add https://github\.com/inferen\-sh/skills \-\-skill agent\-tools|用 agent\-tools 为我研究 OpenClaw 的赚钱机会，并为我生成一篇文档||
|10|find\-skills|https://github\.com/vercel\-labs/skills|帮你查找合适的skills|npx skills add https://github\.com/vercel\-labs/skills \-\-skill find\-skills|找 sendance 提示词生成 Skills||
|11|skill\-scanner<br>|https://github\.com/bvinci1\-design/skill\-scanner|Skill 代码安全审查|OpenClaw 服务器命令安装<br>clawhub install skill\-scanner|用 skill\-scanner 扫描 openclaw\-github\-assistant 的安全问题||
|12|AetherViz Master|https://github\.com/andyhuo520/aetherviz\-master|把内容变成3D可视化呈现|npx skills add https://github\.com/andyhuo520/aetherviz\-master \-\-skill aetherviz\-master|使用 AetherViz Master skill  为我生成一个介绍 电磁感应 的展示页面 ||
|13|AI Daily Digest|https://github\.com/vigorx777/ai\-daily\-digest |自动生成AI信息日报|npx skills add https://github\.com/vigorx777/ai\-daily\-digest \-\-skill ai\-daily\-digest|生成AI日报||
|14|using\-superpowers<br>|https://github\.com/obra/superpowers |深度思考放大你的能力<br>|npx skills add https://github\.com/obra/superpowers \-\-skill using\-superpowers<br>|\(直接给AI下达指令，AI会自动调用这个技能）|https://skills\.sh/obra/superpowers/using\-superpowers|
|15|self\-improving\-agent|[https://github\.com/charon\-fan/agent\-playbook](https://github.com/charon-fan/agent-playbook)|让你的AI每日持续进化|npx skills add [https://github\.com/charon\-fan/agent\-playbook](https://github.com/charon-fan/agent-playbook) \-\-skill self\-improving\-agent|||
|16|systematic\-debugging |[https://github\.com/obra/superpowers](https://github.com/obra/superpowers) |让AI进行科学的代码故障排查|npx skills add [https://github\.com/obra/superpowers](https://github.com/obra/superpowers) \-\-skill systematic\-debugging |||
|18|ship\-learn\-next |[https://github\.com/softaworks/agent\-toolkit](https://github.com/softaworks/agent-toolkit) |让AI进行学习行动规划 |npx skills add [https://github\.com/softaworks/agent\-toolkit](https://github.com/softaworks/agent-toolkit) \-\-skill ship\-learn\-next |||
|19|excalidraw\-diagram\-generator|[https://github\.com/github/awesome\-copilot](https://github.com/github/awesome-copilot) |让AI画流程图等知识图谱|npx skills add [https://github\.com/github/awesome\-copilot](https://github.com/github/awesome-copilot) \-\-skill excalidraw\-diagram\-generator|||
|20|Proactive Agent <br>|[https://github\.com/halthelobster/proactive\-agent](https://github.com/halthelobster/proactive-agent) |让AI拥有主动性|npx skills add [https://github\.com/halthelobster/proactive\-agent](https://github.com/halthelobster/proactive-agent) \-\-skill proactive\-agent|||
|21|PUA Skill|[https://github\.com/tanweai/pua](https://github.com/tanweai/pua) |让AI迸发活力提升能动性|npx skills add https://github\.com/tanweai/pua \-\-skill pua|||
|22|**OpenClaw Agent O**ptimize|https://clawhub\.ai/phenomenoner/openclaw\-agent\-optimize|优化你的Agent|请先检查是否已安装 SkillHub 商店，若未安装，请根据 https://skillhub\-1388575217\.cos\.ap\-guangzhou\.myqcloud\.com/install/skillhub\.md 安装Skillhub商店，但是只安装CLI，然后安装openclaw\-agent\-optimize技能。<br>若已安装，则直接安装openclaw\-agent\-optimize技能。<br>---<br>skillhub install openclaw\-agent\-optimize|||
|23|Tavily AI Search|[https://clawhub\.ai/bert\-builder/tavily](https://clawhub.ai/bert-builder/tavily) |让AI增加搜索功能|请先检查是否已安装 SkillHub 商店，若未安装，请根据 https://skillhub\-1388575217\.cos\.ap\-guangzhou\.myqcloud\.com/install/skillhub\.md 安装Skillhub商店，但是只安装CLI，然后安装tavily技能。<br>若已安装，则直接安装tavily技能。<br>---<br>skillhub install tavily|||
|24|content\-strategy|[https://clawhub\.ai/JK\-0001/content\-strategy](https://clawhub.ai/JK-0001/content-strategy)  |内容策略生成器|请先检查是否已安装 SkillHub 商店，若未安装，请根据 https://skillhub\-1388575217\.cos\.ap\-guangzhou\.myqcloud\.com/install/skillhub\.md 安装Skillhub商店，但是只安装CLI，然后安装content\-strategy技能。<br>若已安装，则直接安装content\-strategy技能。<br>---<br>skillhub install content\-strategy|||
|25<br>|[humanize\-ai\-text](https://clawhub.ai/moltbro/humanize-ai-text) <br>|[https://clawhub\.ai/moltbro/humanize\-ai\-text](https://clawhub.ai/moltbro/humanize-ai-text) |使文案内容去AI味<br>|请先检查是否已安装 SkillHub 商店，若未安装，请根据 https://skillhub\-1388575217\.cos\.ap\-guangzhou\.myqcloud\.com/install/skillhub\.md 安装Skillhub商店，但是只安装CLI，然后安装humanize\-ai\-text技能。<br>若已安装，则直接安装humanize\-ai\-text技能。<br>---<br>skillhub install humanize\-ai\-text|||
|26|baoyu\-comic|[https://github\.com/jimliu/baoyu\-skills](https://github.com/jimliu/baoyu-skills)|让你的干货内容变成漫画更有传播力|npx skills add [https://github\.com/jimliu/baoyu\-skills](https://github.com/jimliu/baoyu-skills) \-\-skill baoyu\-comic|||
|27|validate\-idea|[https://github\.com/slavingia/skills](https://github.com/slavingia/skills) |帮你验证创业想法少走弯路 |npx skills add [https://github\.com/slavingia/skills](https://github.com/slavingia/skills) \-\-skill validate\-idea|||
|28|marketing\-ideas  |[https://github\.com/coreyhaines31/marketingskills](https://github.com/coreyhaines31/marketingskills)|让AI为你设计营销方案|npx skills add [https://github\.com/coreyhaines31/marketingskills](https://github.com/coreyhaines31/marketingskills) \-\-skill marketing\-ideas|||
|29|roundtable|[https://clawhub\.ai/robbyczgw\-cla/roundtable](https://clawhub.ai/robbyczgw-cla/roundtable)  |一个智囊团帮你分析复杂问题|请先检查是否已安装 SkillHub 商店，若未安装，请根据 https://skillhub\-1388575217\.cos\.ap\-guangzhou\.myqcloud\.com/install/skillhub\.md 安装Skillhub商店，但是只安装CLI，然后安装roundtable技能。<br><br>若已安装，则直接安装roundtable技能。<br>---<br>skillhub install roundtable|||
|30|ai\-news\-zh<br>|https://clawhub\.ai/aizain/ai\-news\-zh<br>|为你打造一手AI资讯的私人情报专员<br>|请先检查是否已安装 SkillHub 商店，若未安装，请根据 https://skillhub\-1388575217\.cos\.ap\-guangzhou\.myqcloud\.com/install/skillhub\.md 安装Skillhub商店，但是只安装CLI，然后安装ai\-news\-zh技能。<br>若已安装，则直接安装ai\-news\-zh技能。<br>---<br>skillhub install ai\-news\-zh|||
|31|Content Creator|https://skillhub\.tencent\.com/skills/content\-creator\-cn|内容创作助手<br>|请先检查是否已安装 SkillHub 商店，若未安装，请根据 https://skillhub\.cn/install/skillhub\.md 安装Skillhub商店，但是只安装CLI，然后安装content\-creator\-cn技能。<br>若已安装，则直接安装content\-creator\-cn技能。<br>---<br>skillhub install content\-creator\-cn|||
|32|**SoulTrace**|https://github\.com/soultrace\-ai/soultrace\-skill|性格测试技能|npx skills add https://github\.com/soultrace\-ai/soultrace\-skill \-\-skill soultrace|||
|33<br>|女娲|https://github\.com/alchaincyf/nuwa\-skill<br>                           |蒸馏高手的思维方式|npx skills add alchaincyf/nuwa\-skill|||
|34|各式关系 Skill|同事\.Skill：https://github\.com/titanwings/colleague\-skill、<br>老板\.Skill：https://github\.com/vogtsw/boss\-skills、<br>前任\.Skill：https://github\.com/perkfly/ex\-skill、<br>暗恋对象\.SKill：https://github\.com/xiaoheizi8/crush\-skills、<br>自己\.Skill：https://github\.com/notdog1998/yourself\-skill、<br>父母\.SKill：https://github\.com/xiaoheizi8/parents\-skills、<br>导师\.Skill：https://github\.com/ybq22/supervisor、<br>师兄\.SKill：https://github\.com/zhanghaichao520/senpai\-skill、<br>永生\.SKill：https://github\.com/agenmod/immortal\-skill、<br>数字人生\.Skill：https://github\.com/wildbyteai/digital\-life、<br>重逢\.SKill：https://github\.com/yangdongchen66\-boop/reunion\-skill|蒸馏任何关系为一个Skill<br>|npx skills add https://github\.com/notdog1998/yourself\-skill<br>……<br>|||
|35|create\-yourself|自己\.Skill：https://github\.com/notdog1998/yourself\-skill|蒸馏自己的信息成为一个AI插件|npx skills add https://github\.com/notdog1998/yourself\-skill|||
|36|darwin\-skill<br>|https://github\.com/alchaincyf/darwin\-skill|自动评测优化让你的Skill进化|npx skills add alchaincyf/darwin\-skill|||
|37|**cangjie\-skill**|[https://github\.com/kangarooking/cangjie\-skill](https://github.com/kangarooking/cangjie-skill)|将书本转换为Skills|npx skills add [kangarooking/cangjie\-skill](https://github.com/kangarooking/cangjie-skill)|||
|38|knowledge\-site\-creator|[https://github\.com/joeseesun/qiaomu\-knowledge\-site\-creator](https://github.com/joeseesun/qiaomu-knowledge-site-creator)|将知识生成学习网站|npx skills add joeseesun/knowledge\-site\-creator|||
|39|video\-use skill|[https://skills\.sh/browser\-use/video\-use/video\-use](https://skills.sh/browser-use/video-use/video-use)|帮你的口播视频剪成成片|npx skills add [https://github\.com/browser\-use/video\-use](https://github.com/browser-use/video-use) \-\-skill video\-use |||
|40|Aihot skill|https://github\.com/KKKKhazix/khazix\-skills<br>|帮你整理每日AI资讯|npx skills add https://github\.com/KKKKhazix/khazix\-skills \-\-skill aihot <br>---<br>帮我安装这个 skill：https://aihot\.virxact\.com/aihot\-skill/|||
|41|Guizang PPT Skill|[https://github\.com/op7418/guizang\-ppt\-skill](https://github.com/op7418/guizang-ppt-skill) |将文章一键快速变成有设计感的PPT |npx skills add [https://github\.com/op7418/guizang\-ppt\-skill](https://github.com/op7418/guizang-ppt-skill) \-\-skill guizang\-ppt\-skill|||
|42|follow\-builders|https://github\.com/zarazhangrui/follow\-builders|跟踪AI大咖||||
|43|[private\-board\-meeting\-skill](https://github.com/mastercodeai/private-board-meeting-skill) |[https://github\.com/mastercodeai/private\-board\-meeting\-skill](https://github.com/mastercodeai/private-board-meeting-skill) |商业大佬私董会||||
||||||||



**注意**

最近分享的很多 Skill 都是从 OpenClaw 的Skills 仓库找的，OpenClaw的 官方仓库是 ClawHub ，使用不太稳定。因此，我会给出国内替代方案 SkillHub的安装命令。

你可以把这句话直接丢给AI，让它自行安装：

`请先检查是否已安装 SkillHub 商店，若未安装，请根据 ``https://skillhub-1388575217.cos.ap-guangzhou.myqcloud.com/install/skillhub.md`` 安装Skillhub商店，但是只安装CLI，然后安装content-strategy技能。`

`若已安装，则直接安装content-strategy技能。`



也可以在终端命令行执行命令（前提是已安装 skillhub，否则需要安装下），例如：

`skillhub install content-strategy`







# 技能安装\(Claude Code等AI编程Agent\)

**AI编程类Agent****都支持 Skills，但不同工具存储的目录存在小的差异，安装时工具会自动选择对应的目录。下面仅以ClaudeCode为例。**



### 命令行安装（Claude Code外部）

```Plain Text
# 进入目录
cd your-project

# 安装指定技能
npx skills add https://github.com/obra/superpowers --skill brainstorming
```



### 命令行安装（Claude Code内部）

```Plain Text
# 进入目录
cd your-project

# 从官方市场安装skills集合
/plugin marketplace add anthropics/skills

# 安装官方技能包
/plugin install document-skills@anthropic-agent-skills

# 安装社区技能包
/plugin install superpowers
```





### 手动安装

手动到代码库下载源码，把Skil文件夹放到以下路径之一:

个人技能: \~/\.claude/skills/\(所有项目可用\)

项目技能: \.claude/skills/\(仅当前项目可用）



# 技能安装\(OpenClaw\)



### 主要安装方式



### 命令行安装示例



```Plain Text
# 安装SEO审计技能
npx skills add coreyhaines31/marketingskills/seo-audit

# 简写（如果仓库只有一个技能）
npx skills add coreyhaines31/marketingskills

# 安装到特定AI工具
npx skills add <owner>/<repo> -a openclaw  # 指定OpenClaw


# 安装A股股票分析工具
clawhub install a-stock-analysis
```



### 安装位置 

- **全局共享目录**：`~/.openclaw/skills/`（所有Agent共用）

- **工作空间目录**：`~/.openclaw/workspace/skills/`（当前Agent独享）

- **优先级**：工作区技能 \> 全局技能 \> 捆绑技能

## 



# Skills市场

|平台|网址|Skills数量|特点|
|---|---|---|---|
|SkillsMP|https://skillsmp\.com/|78\.5W<br>|全球最大，跨平台兼容（Claude/Cursor），质量评分|
|Smithery\.ai|https://smithery\.ai/skills|13\.2W|社区驱动，显示激活次数、GitHub Stars|
|Skills\.sh|https://skills\.sh/|9\.2W|Vercel 推出，命令行一键安装，热门排行|



# OpenClaw Skills市场

### 

|平台|网址|Skills数量|特点|
|---|---|---|---|
|ClawHub|https://clawhub\.ai/|<br>4\.8W|OpenClaw 的**官方技能市场**，类似于 iOS 的 App Store, 位于国外，访问有时受限，不稳定|
|SkillHub|https://skillhub\.tencent\.com/\#categories|3\.3W|腾讯针对中国用户推出的本土化技能社区|
|||||





# 热门Skills 

## 开源仓库地址

### 1、官方Skills仓库

https://github\.com/anthropics/skills 

### 2、社区精选Skills（33K Star）

https://github\.com/ComposioHQ/awesome\-claude\-skills 

### 3、社区精选Skills 文档（5\.6K Star）

https://github\.com/BehiSecc/awesome\-claude\-skills

### 4、社区精选Skills 文档（10\.8K Star）

https://github\.com/travisvn/awesome\-claude\-skills

### 5、社区精选Skills 文档（6\.5K Star）

https://github\.com/VoltAgent/awesome\-agent\-skills



## 



