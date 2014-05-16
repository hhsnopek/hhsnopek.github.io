###*
 * roots v3.0.0-rc.6
###

axis            = require('axis')
autoprefixer    = require('autoprefixer-stylus')
DynamicContent  = require('dynamic-content')
jeet            = require('jeet')
rupture         = require('rupture')

module.exports =
  ignores: ['readme.md', '**/layout.*', '**/_*', '.gitignore', 'node_modules']

  extensions: [new DynamicContent]

  stylus:
    use: [rupture(), jeet(), axis(), autoprefixer()]
