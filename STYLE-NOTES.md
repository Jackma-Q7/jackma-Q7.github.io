# 博客样式维护

参考：https://pretne.github.io/accumulation/

博客沿用 Hexo + Butterfly，导航、移动端菜单、文章目录、夜间模式与回到顶部均使用主题原有功能。

- `_config.butterfly.yml`：菜单分组、横幅、封面、作者卡片、搜索与页脚。
- `source/css/custom.css`：透明卡片、背景、悬停效果和移动端细节。
- `source/images/`：横幅、背景与头像。风景图片来自 Unsplash，与参考站点使用同一图片来源。
- `source/gallery/`、`music/`、`movies/`、`accumulation/`、`links/`：新增栏目，直接编辑各自的 `index.md` 即可更新。
- `scripts/search-index.js`：生成文章和页面搜索数据；页面设置 `search: false` 可排除。

原文章和关于页面内容保留；不包含参考站点作者的评论账号、统计账号、音乐列表或个人资料。

安装 Node.js 后，在项目目录运行 `npm run build` 生成静态页面，运行 `npm run server` 本地预览（默认 http://localhost:4000）。

正式发布前，请在 `_config.yml` 中把 `url: http://example.com` 换成你的实际站点地址。
