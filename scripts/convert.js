#!/usr/bin/env node
/**
 * Skills 工具箱 - 转换脚本
 * 把 Markdown 表格转换为每个 Skill 一个独立的中文 Markdown 文档
 * 输出到分类目录下
 */

const fs = require('fs');
const path = require('path');

// 读取源文档
const sourcePath = path.join(__dirname, '../source/Skills工具箱.md');
const sourceContent = fs.readFileSync(sourcePath, 'utf-8');

// 分类目录映射（中英文）
const categoryDirMap = {
  '开发提效': '开发提效',
  'Agent 增强': 'Agent增强',
  '内容创作': '内容创作',
  '营销商业': '营销商业',
  '信息情报': '信息情报',
  '效率工具': '效率工具',
  '浏览器自动化': '浏览器自动化',
  '关系模拟': '关系模拟',
  '学习教育': '学习教育',
  '多媒体': '多媒体',
  '个人成长': '个人成长',
  '其他': '其他'
};

// 分类 Emoji
const categoryEmoji = {
  '开发提效': '🔧',
  'Agent 增强': '🤖',
  '内容创作': '✍️',
  '营销商业': '📈',
  '信息情报': '📡',
  '效率工具': '⚡',
  '浏览器自动化': '🌐',
  '关系模拟': '👥',
  '学习教育': '📚',
  '多媒体': '🎨',
  '个人成长': '🌱',
  '其他': '📦'
};

// 解析 Markdown 表格
function parseTable(content) {
  const lines = content.split('\n');
  const skills = [];
  let inTable = false;

  for (const line of lines) {
    if (line.includes('|') && line.trim().startsWith('|')) {
      if (line.includes('---|---|') || line.includes('|:--')) {
        inTable = true;
        continue;
      }

      if (inTable) {
        const cells = line.split('|').filter(c => c.trim()).map(c => c.trim());
        if (cells.length >= 5) {
          if (cells[0] === '编号' || cells[0] === '编号') continue;
          
          const skill = {
            id: cells[0],
            name: cells[1].replace(/<[^>]*>/g, '').trim(),
            github: cells[2].match(/https?:\/\/[^\s]+/)?.[0] || '',
            description: cells[3].replace(/<[^>]*>/g, '').trim(),
            installCmd: cells[4].match(/`[^`]+`/)?.[0]?.replace(/`/g, '') || 
                        cells[4].match(/npx[^\n]+/)?.[0] ||
                        cells[4].match(/clawhub[^\n]+/)?.[0] || '',
            example: cells[5]?.replace(/<[^>]*>/g, '').trim() || '',
            docUrl: cells[6]?.match(/https?:\/\/[^\s]+/)?.[0] || ''
          };
          
          if (skill.name && skill.name !== '编号') {
            skills.push(skill);
          }
        }
      }
    }
  }
  
  return skills;
}

// 分类规则
const categories = {
  '开发提效': {
    keywords: ['debugging', '代码', 'git', 'github', 'codebase', 'learn', '学习', 'proactive', 'canvas', 'excalidraw', 'diagram', '设计图', '流程图', 'skill-scanner'],
    desc: ['调试', '代码', 'git', '学习', '规划', '主动', '扫描', '安全']
  },
  'Agent 增强': {
    keywords: ['agent', '工具', 'brainstorming', 'superpower', 'find-skills', 'using', 'agent-tools', 'document-skills', 'superpowers', 'soultrace', 'openclaw', 'optimize'],
    desc: ['Agent', '工具', '头脑风暴', '技能', '增强', '能力放大', '优化']
  },
  '内容创作': {
    keywords: ['copywriting', 'copy', 'write', '文案', '创作', 'content', '文章', 'PPT', 'ppt', 'guizang', '视频', '剪辑', '漫画', 'humanize', '去AI味', 'baoyu', 'content-creator', 'wechat', 'post'],
    desc: ['文案', '写作', '创作', '文章', 'PPT', '视频', '漫画', '去AI味', '发布', '公众号']
  },
  '营销商业': {
    keywords: ['mckinsey', '麦肯锡', '营销', 'marketing', '商业', '咨询', 'validate', 'idea', '创业', '商业计划', '智囊团', 'roundtable', 'board', 'marketing-ideas'],
    desc: ['营销', '商业', '咨询', '创业', '验证', '顾问', '麦肯锡', '私董会']
  },
  '信息情报': {
    keywords: ['ai-news', 'news', '资讯', '情报', 'daily', '日报', 'follow', 'tavily', '搜索', 'hot', '热点', 'aihot', 'tavily'],
    desc: ['资讯', '情报', '日报', '新闻', '热点', '搜索', 'AI资讯']
  },
  '效率工具': {
    keywords: ['knowledge', '知识', 'site', '网站', 'cangjie', '仓颉', 'darwin', '进化', '优化', 'openclaw'],
    desc: ['效率', '工具', '知识', '网站', '优化', '进化', 'OpenClaw']
  },
  '浏览器自动化': {
    keywords: ['browser', '浏览器', '自动', '浏览'],
    desc: ['浏览器', '自动化', '浏览', '爬取']
  },
  '关系模拟': {
    keywords: ['colleague', '同事', 'boss', '老板', 'ex', '前任', 'crush', '暗恋', 'yourself', '自己', 'parents', '父母', 'supervisor', '导师', 'senpai', '师兄', 'immortal', '永生', 'digital', '数字人', 'relation', '关系'],
    desc: ['关系', '模拟', '同事', '老板', '父母', '导师', '师兄', '数字人', '人生']
  },
  '学习教育': {
    keywords: ['nuwa', '女娲', 'cangjie', '仓颉', 'validate', '书本', '知识', 'learn'],
    desc: ['学习', '教育', '书本', '知识蒸馏', '学习规划']
  },
  '多媒体': {
    keywords: ['remotion', '视频', 'audio', '音乐', 'song', 'aetherviz', '3d', '可视化', 'spotify', 'youtube'],
    desc: ['视频', '音乐', '3D', '可视化', '音频', '多媒体']
  },
  '个人成长': {
    keywords: ['self', '自己', '进化', 'improve', 'pua', '成长', '能力'],
    desc: ['成长', '进化', '自我', '能力提升']
  }
};

function categorize(skill) {
  const searchText = `${skill.name} ${skill.description}`.toLowerCase();
  
  let bestCategory = '其他';
  let bestScore = 0;
  
  for (const [category, rules] of Object.entries(categories)) {
    let score = 0;
    
    for (const kw of rules.keywords) {
      if (skill.name.toLowerCase().includes(kw.toLowerCase())) {
        score += 2;
      }
    }
    
    for (const kw of rules.desc) {
      if (skill.description.toLowerCase().includes(kw.toLowerCase())) {
        score += 1;
      }
    }
    
    if (score > bestScore) {
      bestScore = score;
      bestCategory = category;
    }
  }
  
  return bestCategory;
}

// 生成单个 Skill 文档
function generateSkillDoc(skill, category) {
  const installCommand = skill.installCmd || '（请参考官方文档）';
  
  return `# ${skill.name}

> ${skill.description || '暂无描述'}

## 🎯 解决什么问题 & 痛点

${skill.description ? `这个 Skill 帮助解决：${skill.description}` : '（请补充：具体解决什么问题？传统方式的痛点是什么？）'}

## ⚙️ 原理

${skill.description ? `基于 ${skill.name} 的设计理念，` : ''}（请补充：底层机制是什么？依赖哪些工具或接口？核心逻辑是什么？）

## 📖 使用指南

### 安装方式

\`\`\`bash
${installCommand}
\`\`\`

${skill.example ? `### 使用示例

> ${skill.example}
\`\`\`
${skill.example}
\`\`\`` : '### 使用示例\n\n（暂无示例，欢迎补充）'}

## ✅ 适用场景

- （请补充：什么情况下应该用这个 Skill？）

## ❌ 不适用场景

- （请补充：什么情况下不适合用？有什么坑？）

## 🔗 相关链接

- GitHub：${skill.github || '（暂无）'}
- 文档：${skill.docUrl || '（暂无）'}

## 📝 更新日志

- \`${new Date().toISOString().split('T')[0]}\` 初始化文档

---
*本文档由 [Skills 工具箱](https://github.com/你的项目地址) 自动生成*
`;
}

// 创建输出目录
const docsDir = path.join(__dirname, '../docs');

// 确保分类目录存在
for (const dir of Object.values(categoryDirMap)) {
  const catDir = path.join(docsDir, dir);
  if (!fs.existsSync(catDir)) {
    fs.mkdirSync(catDir, { recursive: true });
  }
}

// 解析表格
const skills = parseTable(sourceContent);
console.log(`解析到 ${skills.length} 个 Skills\n`);

// 按分类组织
const categorized = {};

// 处理每个 Skill
skills.forEach((skill, index) => {
  const category = categorize(skill);
  if (!categorized[category]) {
    categorized[category] = [];
  }
  
  // 生成文件名
  const safeName = skill.name.toLowerCase()
    .replace(/[^a-z0-9\u4e00-\u9fa5]+/g, '-')
    .replace(/^-|-$/g, '');
  const filename = `${index + 1}-${safeName}.md`;
  
  // 获取分类目录
  const catDirName = categoryDirMap[category] || '其他';
  const filePath = path.join(docsDir, catDirName, filename);
  
  // 生成文档
  const doc = generateSkillDoc(skill, category);
  fs.writeFileSync(filePath, doc);
  
  // 记录
  categorized[category].push({
    ...skill,
    filename,
    category,
    categoryDir: catDirName
  });
  
  console.log(`✅ [${category}] ${skill.name} → ${catDirName}/${filename}`);
});

// 生成分类索引（每个分类目录下）
for (const [category, categorySkills] of Object.entries(categorized)) {
  const catDirName = categoryDirMap[category] || '其他';
  const emoji = categoryEmoji[category] || '📦';
  
  let indexContent = `# ${emoji} ${category}\n\n`;
  indexContent += `> 该分类下共有 ${categorySkills.length} 个 Skills\n\n`;
  indexContent += `## 📚 Skills 列表\n\n`;
  
  categorySkills.forEach((skill, i) => {
    indexContent += `### ${i + 1}. ${skill.name}\n\n`;
    indexContent += `${skill.description || '暂无描述'}\n\n`;
    indexContent += `- [查看详情](./${skill.filename})\n`;
    if (skill.github) {
      indexContent += `- [GitHub](${skill.github})\n`;
    }
    indexContent += `\n---\n\n`;
  });
  
  indexContent += `\n*最后更新：${new Date().toISOString().split('T')[0]}*\n`;
  
  const indexPath = path.join(docsDir, catDirName, 'README.md');
  fs.writeFileSync(indexPath, indexContent);
  console.log(`📄 索引已生成: ${catDirName}/README.md`);
}

// 生成总索引
let masterIndex = `# Skills 工具箱 - 文档索引

> 本目录包含 ${skills.length} 个 Skills 的中文文档，按类别整理。

![Progress](https://img.shields.io/badge/Skills-40+-blue)
![License](https://img.shields.io/badge/License-MIT-green)

---

## 📚 分类索引

`;

for (const [category, categorySkills] of Object.entries(categorized)) {
  const emoji = categoryEmoji[category] || '📦';
  const catDirName = categoryDirMap[category] || '其他';
  
  masterIndex += `### ${emoji} ${category} (${categorySkills.length} 个)\n\n`;
  masterIndex += `→ [进入分类](./${catDirName}/README.md)\n\n`;
  
  categorySkills.forEach((skill, i) => {
    masterIndex += `- [${skill.name}](./${catDirName}/${skill.filename})`;
    if (skill.description) {
      masterIndex += ` — ${skill.description.substring(0, 40)}${skill.description.length > 40 ? '...' : ''}`;
    }
    masterIndex += '\n';
  });
  
  masterIndex += '\n---\n\n';
}

masterIndex += `\n*最后更新：${new Date().toISOString().split('T')[0]}*\n`;

fs.writeFileSync(path.join(docsDir, 'index.md'), masterIndex);

console.log('\n📄 总索引已生成: docs/index.md');
console.log(`\n✅ 转换完成！共处理 ${skills.length} 个 Skills，分为 ${Object.keys(categorized).length} 个类别`);
console.log('\n分类统计：');
for (const [category, categorySkills] of Object.entries(categorized)) {
  console.log(`  ${category}: ${categorySkills.length} 个`);
}