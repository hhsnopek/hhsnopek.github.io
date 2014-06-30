
axis            = require('axis')
autoprefixer    = require('autoprefixer-stylus')
DynamicContent  = require('dynamic-content')
jeet            = require('jeet')
rupture         = require('rupture')

module.exports =
  ignores: ['readme.md', '**/layout.*', '**/_*', '.gitignore']

  extensions: [DynamicContent()]

  stylus:
    use: [axis(), rupture(), jeet(), autoprefixer()]

  locals:
    
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
