/* Keep TeX intact until Butterfly's MathJax loader typesets the article. */
const { escapeHTML } = require('hexo-util');

hexo.extend.filter.register('marked:extensions', function (extensions) {
  extensions.push({
    name: 'displayMath',
    level: 'block',
    start(src) {
      return src.match(/^ {0,3}\$\$/m)?.index;
    },
    tokenizer(src) {
      const match = /^ {0,3}\$\$[ \t]*\n([\s\S]+?)\n {0,3}\$\$[ \t]*(?:\n|$)/.exec(src);
      if (match) {
        return { type: 'displayMath', raw: match[0], tex: match[1] };
      }
    },
    renderer(token) {
      return `<div class="math-display">$$\n${escapeHTML(token.tex)}\n$$</div>\n`;
    }
  }, {
    name: 'inlineMath',
    level: 'inline',
    start(src) {
      return src.indexOf('$');
    },
    tokenizer(src) {
      const match = /^\$(?!\$)((?:\\[^\n]|[^\\$\n])+?)\$(?!\$)/.exec(src);
      if (match) {
        return { type: 'inlineMath', raw: match[0], tex: match[1].trim() };
      }
    },
    renderer(token) {
      return `<span class="math-inline">$${escapeHTML(token.tex)}$</span>`;
    }
  });
});
