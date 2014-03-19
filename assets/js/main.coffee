require.config(
  paths:
    jquery: '//cdnjs.cloudflare.com/ajax/libs/jquery/2.0.3/jquery'
    underscore: '//cdnjs.cloudflare.com/ajax/libs/underscore.js/1.5.1/underscore'
    Backbone: '//cdnjs.cloudflare.com/ajax/libs/backbone.js/1.0.0/backbone'
    snap: '//cdnjs.cloudflare.com/ajax/libs/snap.svg/0.1.0/snap.svg-min'
  shim:
    underscore:
      exports: '_'
    Backbone:
      deps: ['underscore', 'jquery']
      exports: 'Backbone'
)

require [
  'jquery',
  'underscore',
  'Backbone',
  'snap',
], ($, _, Backbone) ->
  console.log 'main loaded'

#TODO
# create Backbone structure
# create svg animation for site opener
# no svg animation on mobile(<= 500px) site
