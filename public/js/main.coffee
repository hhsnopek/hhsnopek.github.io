require.config(
  paths:
    jquery: '//cdnjs.cloudflare.com/ajax/libs/jquery/2.0.3/jquery'
    underscore: '//cdnjs.cloudflare.com/ajax/libs/underscore.js/1.5.1/underscore'
    Backbone: '//cdnjs.cloudflare.com/ajax/libs/backbone.js/1.0.0/backbone'
    waypoints: '/components/jquery-waypoints/waypoints.min'
  shim:
    underscore:
      exports: '_'
    Backbone:
      deps: ['underscore', 'jquery']
      exports: 'Backbone'
    waypoints:
      deps : ['jquery']
)

require [
  'jquery',
  'underscore',
  'Backbone',
  'waypoints',
], ($, _, Backbone) ->

  #waypoint navbar
  unless $('#projects').css("width") is "100%"
    $('#blog').waypoint ->
      $('#blognav').toggleClass "active"
      $('#blognavStatic').css "display", "none"
