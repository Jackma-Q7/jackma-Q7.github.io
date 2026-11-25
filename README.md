# 我的技术博客

Hexo + Butterfly，站点地址：https://Jackma-Q7.github.io/

## 安装与预览

安装 [Node.js LTS](https://nodejs.org/zh-cn/download)（22 或 24），重新打开终端后执行：

```powershell
cd C:\Users\qq7\Desktop\my-blog
npm ci
npm run server
```

打开 http://localhost:4000/，按 Ctrl+C 停止预览。端口占用时可改用 `npx hexo server -p 4001`。

## 写文章

```powershell
npx hexo new post "文章标题"
```

编辑 `source/_posts/文章标题.md`，在文件开头设置文章信息：

```yaml
---
title: 文章标题
date: 2026-11-16 15:00:00
categories:
  - 嵌入式开发
tags:
  - STM32
cover: /images/banner.jpg
---
```

把日期换成实际日期，在第二个 `---` 后面写 Markdown 正文。分类、标签、搜索在构建时自动更新。

需要按年份整理时，把文章放到 `source/_posts/2026/`，Hexo 会正常读取。项目根目录的 `2026/` 不会作为文章目录被读取。

图片放到 `source/images/`，正文中引用：

```markdown
![图片说明](/images/图片文件名.jpg)
```

## 更新网站

仓库已配置 GitHub Pages 工作流。首次使用时，到 GitHub 仓库 **Settings → Pages → Source** 选择 **GitHub Actions**。

编辑文章或样式后执行：

```powershell
npm run build
git add .
git commit -m "更新博客"
git push
```

推送到 `main` 后，GitHub Actions 自动安装依赖、构建并发布。在仓库 **Actions** 查看执行结果，也可手动运行 **Deploy Hexo to GitHub Pages**。

## 文件位置

| 路径 | 用途 |
| --- | --- |
| `source/_posts/` | 文章 |
| `source/projects/index.md` | 项目展示页 |
| `source/about/`、`accumulation/`、`gallery/`、`music/`、`movies/`、`links/`、`papers/` | 各栏目页面，编辑对应 `index.md` |
| `source/images/` | 图片与头像 |
| `source/css/custom.css` | 自定义样式 |
| `_config.yml` | 网站地址、标题和 Hexo 配置 |
| `_config.butterfly.yml` | 导航、横幅、侧栏和主题配置 |
| `scaffolds/` | 新文章、页面和草稿模板 |
| `scripts/search-index.js` | 本地搜索索引生成器 |
| `.github/workflows/pages.yml` | 自动发布流程 |
| `package.json`、`package-lock.json` | 构建依赖及版本锁定 |

`node_modules/` 是本地运行所需依赖；`public/` 和 `db.json` 是可再生成的产物，均无需提交到 Git。`npm run clean` 可清理构建产物，随后运行 `npm run build` 重新生成。

布局参考：https://pretne.github.io/accumulation/ 。风景图片来自 Unsplash；主题为 [Butterfly](https://butterfly.js.org/)。
