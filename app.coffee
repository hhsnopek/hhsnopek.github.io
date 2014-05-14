###*
 * roots v3.0.0-rc.6
###

axis            = require('axis-css')
autoprefixer    = require('autoprefixer-stylus')
DynamicContent  = require('dynamic-content')
Jeet            = require('jeet')
rupture         = require('rupture')

module.exports =
  ignores: ['readme.md', '**/layout.*', '**/_*', '.gitignore']

  extensions: [new DynamicContent]

  stylus:
    use: [axis(), autoprefixer(), Jeet(), rupture()]
