###*
 * roots v3.0.0-rc.6
###

axis            = require('axis-css')
autoprefixer    = require('autoprefixer-stylus')
DynamicContent  = require('dynamic-content')
jeet            = require('jeet')
rupture         = require('rupture')

module.export =
  ignores: ['readme.md', '**/layout.*', '**/_*', '.gitignore']

  extensions: [new DynamicContent]

  stylus:
    user: [axis(), autoprefixer(), jeet(), rupture()]
