# 写文章与发布到 GitHub Pages

## 1. 准备本地环境

本次检查时，终端中还没有可直接使用的 `node` 和 `npm` 命令。请先从 https://nodejs.org/zh-cn/download 安装 Node.js LTS（22 或 24），然后重开 VS Code 和终端。

在 PowerShell 中执行：

```powershell
cd C:\Users\qq7\my-blog
node -v
npm -v
npm ci
```

## 2. 增加文章

```powershell
npx hexo new post "我的第一篇技术笔记"
```

编辑生成的 `source/_posts/我的第一篇技术笔记.md`。文件开头的两行 `---` 之间是文章信息，第二行 `---` 后面写正文。例如：

```markdown
---
title: 我的第一篇技术笔记
date: 2026-11-16 15:00:00
categories:
  - 嵌入式开发
tags:
  - STM32
  - C语言
cover: /images/banner.jpg
description: 记录这次学习的目标、实践步骤和遇到的问题。
---

## 学习目标

这里开始写正文。

## 实践记录

记录过程、代码和解决方法。
```

日期请使用文章的实际日期。分类、标签页面和本地搜索会在构建时自动更新，不需要手动修改导航。

图片放到 `source/images/`，例如 `source/images/stm32-board.jpg`，正文这样引用：

```markdown
![STM32 开发板](/images/stm32-board.jpg)
```

相册、音乐、影视、积累等栏目直接编辑 `source/对应目录/index.md`，普通文章写在 `source/_posts/`。

本地预览：

```powershell
npm run server
```

打开 http://localhost:4000/ 。终端按 Ctrl+C 停止预览。如果 4000 端口已被占用，可以运行 `npx hexo server -p 4001`，然后打开 http://localhost:4001/ 。

## 3. 第一次发布

以下以 GitHub 用户名 `YOUR_USERNAME` 为例，执行前把所有 `YOUR_USERNAME` 替换成你的真实 GitHub 用户名，不是显示昵称。

1. 登录 GitHub，新建公开仓库，仓库名必须是 `YOUR_USERNAME.github.io`。如果同名仓库已经有网站，先检查原有内容再决定如何合并；不要覆盖已有网站。新建空仓库时，不勾选初始化 README、.gitignore 或 License。
2. 编辑博客根目录的 `_config.yml`，将 `url: http://example.com` 改成下面的实际地址，`root` 使用 `/`：

```yaml
url: https://YOUR_USERNAME.github.io
root: /
```

这里采用 GitHub 用户站点根地址。仓库若叫 `my-blog`，地址会变成 `https://YOUR_USERNAME.github.io/my-blog/`，还需要调整站点路径和自定义资源链接，不适用本说明的根目录配置。

3. 本地检查构建：

```powershell
npm run build
```

4. 当前目录还没有初始化 Git，首次上传执行：

```powershell
cd C:\Users\qq7\my-blog
git init -b main
git add .
git commit -m "Initialize blog"
git remote add origin https://github.com/YOUR_USERNAME/YOUR_USERNAME.github.io.git
git push -u origin main
```

如果 Git 提示缺少提交身份，先用自己的信息配置后，再执行提交和推送：

```powershell
git config user.name "你的名字"
git config user.email "你的 GitHub 邮箱或 GitHub 提供的 noreply 邮箱"
```

推送时若弹出 GitHub 登录页面，按提示登录授权。

5. 打开 GitHub 仓库的 **Settings → Pages → Build and deployment → Source**，选择 **GitHub Actions**。
6. 打开仓库的 **Actions**，找到 **Deploy Hexo to GitHub Pages**。如果首次推送时尚未启用 Pages 而失败，重新运行该流程，或使用 **Run workflow** 手动触发。成功后打开 `https://YOUR_USERNAME.github.io/`。

项目已提供 `.github/workflows/pages.yml`：推送到 `main` 会自动安装依赖、生成 `public/` 并部署到 Pages。无需安装 `hexo-deployer-git`，也无需为此填写 `_config.yml` 中的 `deploy` 配置或新建个人访问令牌。此流程不使用 `npm run deploy`。

GitHub 仓库保存源码，GitHub Pages 展示构建出的网页。`node_modules/` 和 `public/` 已由 `.gitignore` 排除，无需提交。

## 4. 日常更新

完成文章后，在项目目录执行：

```powershell
npm run build
git add .
git commit -m "Add a new post"
git push
```

Actions 显示部署成功后，刷新网站即可看到更新。修改已有文章、更新图片和调整主题也使用相同流程。
