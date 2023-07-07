const MarkdownIt = require('markdown-it')
const parse = require('html-react-parser')

let md = MarkdownIt({
  breaks: true,
  html: true,
})

module.exports = {
  name: 'markdown',
  type: 'postProcessor',

  process(value, key, options, translator) {
    return parse(md.renderInline(value))
  },
}
