# PersonalLib

HawZZ 的个人知识库与 GitHub Pages 站点。

当前分支是 Astro 版本预览：把原先的 Docsify 文档站改造成更直观的 Personal Knowledge Atlas。

## 本地预览

```bash
npm install
npm run dev
```

## 构建

```bash
npm run build
```

构建产物输出到 `docs/`，用于 GitHub Pages 发布。

## 内容结构

- `src/pages/`：Astro 页面
- `src/content/notes/`：Markdown 笔记
- `src/data/knowledge.ts`：能力、项目模式、知识地图数据
- `public/styles/global.css`：视觉系统，作为静态资源复制到 `docs/styles/`
- `docs/`：构建产物
