require 'page'
$ = require 'jquery'

console.log 'main loaded'

# canvas fullscreen
canvas = document.getElementById('mainCanvas')
context = canvas.getContext('2d')

window.addEventListener('resize', resizeCanvas, false)

render = (type) ->
  if type is "canvas"
    console.log "Screen width is: #{window.innerWidth}"
    console.log "Displaying Canvas"
  else
    console.log "Screen width is: #{window.innerWidth}"
    console.log "Displaying Image"

  $(window).resize(()->
    resizeCanvas()
  )

resizeCanvas = ->
  canvas.width = window.innerWidth
  canvas.height = window.innerHeight
  unless window.innerWidth <= "500" then render("canvas") else render("image")


#TODO
# create view structure w/page.js
# animation on mobile(<= 500px) site

resizeCanvas()
