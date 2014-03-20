# Component Compilation
roots = require 'roots'
fs = require 'fs'
Builder = require 'component-builder'
ComponentCoffee = require 'component-coffee'

roots.compiler.on('finished', (err) ->
  builder = new Builder('./')
  builder.use(ComponentCoffee)
  builder.build((err, res) ->
    if err
      console.log(err)
    else
      fs.writeFile("./public/main.js", res.require + res.js, (err) ->
        if err
          console.log(err)
        else
          console.log('built public/main.js')
      )
  )
)

# roots settings
ignore_files: ['_*', 'readme*', '.gitignore', '.DS_Store', '*.log']
ignore_folders: ['.git', 'node_modules']

# layouts/templates
exports.layouts =
  default: 'layout.jade'

# roots locals
locals:
  title: 'Henry Snopek'
