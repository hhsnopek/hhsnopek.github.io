
page = require 'page.js'
$ = require 'jquery'
activeMenu = true;

$( () ->
  $('body').addClass('loaded')
)


# views
indexView = ->
  console.log '\trendering : index view'
  $('#index').show()

aboutView = ->
  console.log '\trendering : about view'
  $('#about').show()

projectsView = ->
  console.log '\trendering : projects view'
  $('#projects').show()

notfoundView = ->
  console.log '\trendering : 404 page'
  $('#404').show()



$('#navicon').click( () ->
  $('#navbar ul').toggleClass('activeMenu')
  if activeMenu is true
    $('#navicon').removeClass('inactive').addClass('active')
    activeMenu = false
  else
    $('#navicon').removeClass('active').addClass('inactive')
    activeMenu = true
)


# page.js router
page '/', indexView
page '/about', aboutView
page '/projects', projectsView
page '*', notfoundView
page()


# TODO
# create view structure w/page.js
# canvas is larger than window, css: `overflow-x: none;` for fix?
