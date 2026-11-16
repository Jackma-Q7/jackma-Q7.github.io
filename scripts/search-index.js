/* Supply Butterfly's built-in search dialog with a local JSON index. */
hexo.extend.generator.register('local-search-index', function (locals) {
  const { escapeHTML, url_for } = require('hexo-util');
  const entries = locals.posts.sort('-date').toArray().concat(locals.pages.toArray())
    .filter(page => page.title && page.search !== false)
    .map(page => ({
      title: escapeHTML(page.title),
      content: page.content || '',
      url: url_for.call(this, page.path)
    }));

  return { path: this.config.search.path, data: JSON.stringify(entries) };
});
