axis = require 'axis'
rupture = require 'rupture'
autoprefixer = require 'autoprefixer-stylus'
browserify = require 'roots-browserify'
dynamicContent = require 'dynamic-content'
marked = require 'marked'
moment = require 'moment'

module.exports =
  ignores: ['README.md', '**/*layout.*', '**/_*', '.gitignore', '.DS_Store']

  extensions: [dynamicContent()]

  stylus:
    use: [axis(), rupture(), autoprefixer()]

  jade:
    pretty: true

  server:
    clean_urls: true

  locals:
    title: "Henry Snopek - Web Developer, Programmer & University Student"
    author: "Henry Snopek"
    description: "Web Developer, Programmer & University Student"

    humanDate: (date) ->
      moment(date).format("MMMM DD, YYYY")

    sort: (ary, opts) ->
      opts ||= {}
      opts.by = opts.by || 'order'

      if opts.order == 'asc'
        fn = (a, b) -> if (a[opts.by] > b[opts.by]) then -1 else 1
      else
        fn = (a, b) -> if (a[opts.by] < b[opts.by]) then -1 else 1

      if opts.by == 'date'
        fn = (a,b) -> if (new Date(a[opts.by]) > new Date(b[opts.by])) then -1 else 1

      if opts.fn then fn = opts.fn

      ary.sort(fn)
