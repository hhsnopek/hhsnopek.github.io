const sugarss = require('sugarss')
const fonts = require('postcss-font-magician')
const cssnano = require('cssnano')
const cssnext = require('postcss-cssnext')
const html = require('reshape-standard')
const locals = {
  author: 'Henry Snopek',
  description: 'Web Developer, Programmer & Coffee Enthusiast'
}

module.exports = {
  matchers: {
    html: '*(**/)*.sgr',
    css: '*(**/)*.sss'
  },
  postcss: {
    parser: sugarss,
    plugins: [fonts, cssnext({ warnForDuplicates: false }), cssnano]
  },
  reshape: (ctx) => {
    return html({
      webpack: ctx,
      locals: locals,
      minify: true
    })
  },
  ignore: [
    'README.md',
    '**/*layout.*',
    '**/_*',
    '.gitignore',
    '.DS_Store'
  ]
}
