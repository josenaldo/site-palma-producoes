const MarkdownIt = require('markdown-it')
const parse = require('html-react-parser')

let md = MarkdownIt({
  breaks: true,
  html: true,
})

// ------------------------------------------------------------
// This is a workaround (pt: gambiarra) for open links in new tab.
// This code don't verify if the link is a internal link or a
// external link.
// ------------------------------------------------------------
var defaultRender =
  md.renderer.rules.link_open ||
  function (tokens, idx, options, env, self) {
    return self.renderToken(tokens, idx, options)
  }

md.renderer.rules.link_open = function (tokens, idx, options, env, self) {
  // If you are sure other plugins can't add `target` - drop check below
  var aIndex = tokens[idx].attrIndex('target')

  if (aIndex < 0) {
    tokens[idx].attrPush(['target', '_blank']) // add new attribute
  } else {
    tokens[idx].attrs[aIndex][1] = '_blank' // replace value of existing attr
  }

  // pass token to default renderer.
  return defaultRender(tokens, idx, options, env, self)
}

module.exports = {
  name: 'markdown',
  type: 'postProcessor',

  process(value, key, options, translator) {
    return parse(md.renderInline(value))
  },
}
