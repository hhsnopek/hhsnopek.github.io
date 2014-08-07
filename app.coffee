
axis = require('axis')
jeet = require('jeet')
rupture = require('rupture')
autoprefixer = require('autoprefixer-stylus')
DynamicContent = require('dynamic-content')

module.exports =
  ignores: [
    'Makefile'
    'readme.md',
    '**/layout.*',
    '**/_*',
    '.gitignore',
    '.DS_Store'
  ]

  extensions: [DynamicContent()]

  stylus:
    use: [axis(), rupture(), jeet(), autoprefixer()]

  locals:

    sort: (ary, opts) ->
      opts or= {}
      opts.by = opts.by or 'order'

      if opts.order is 'asc'
        fn = (a, b) -> if (a[opts.by] > b[opts.by]) then -1 else 1
      else
        fn = (a, b) -> if (a[opts.by] < b[opts.by]) then -1 else 1

      if opts.by is 'date'
        fn = (a,b) -> if (new Date(a[opts.by]) > new Date(b[opts.by])) then -1 else 1

      if opts.fn then fn = opts.fn

      ary.sort(fn)
