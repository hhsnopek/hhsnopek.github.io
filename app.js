import cssnext from 'postcss-cssnext'
import fonts from 'postcss-font-magician'

export default {
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
