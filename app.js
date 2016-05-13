const cssnext = require('postcss-cssnext')
const fonts = require('postcss-font-magician')

module.exports = {
  postcss: {
    plugins: [cssnext, fonts]
  },
  locals: {
    author: 'Henry Snopek',
    description: 'Web Developer, Programmer & Coffee Enthusiast'
  },
  ignore: [
    'README.md',
    '**/*layout.*',
    '**/_*',
    '.gitignore',
    '.DS_Store'
  ]
}
