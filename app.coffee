cssnext = require 'postcss-cssnext'
fonts = require 'postcss-font-magician'

browserify = require 'roots-browserify'
dynamicContent = require 'dynamic-content'
marked = require 'marked'
moment = require 'moment'

module.exports =
  ignores: [
    'README.md',
    '**/*layout.*',
    '**/_*',
    '.gitignore',
    '.DS_Store'
  ]

  extensions: [
    browserify(
      files: [
        'assets/js/tracking.coffee',
        'assets/js/main.coffee'
      ],
      out: 'js/build.js'
    )
  ]

  postcss:
    use: [
      cssnext(),
      fonts()
    ]

  jade:
    pretty: true

  server:
    clean_urls: true

  locals:
    author: "Henry Snopek"
    description: "Web Developer, Programmer & University Student"
