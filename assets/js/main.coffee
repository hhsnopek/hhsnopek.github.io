require.config(
  paths:
    underscore: '//cdnjs.cloudflare.com/ajax/libs/underscore.js/1.6.0/underscore-min'
    Backbone: '//cdnjs.cloudflare.com/ajax/libs/backbone.js/1.1.2/backbone-min'
    jquery: '//cdnjs.cloudflare.com/ajax/libs/jquery/2.1.1/jquery.min'
    Share: '/js/share.min'
  shim:
    underscore:
      exports: '_'
    Backbone:
      deps: ['underscore', 'jquery']
      exports: 'Backbone'
)

require [
  'jquery',
  'Backbone',
  'Share',
], ($, Backbone, Share) ->

  ###*
   * display page
   * @param  {String} page    div without hash
  ###
  display = (page) ->
    pagenation.set("currentpage", page)

    if typeof page is 'undefined' or page is null
      $("#list").css('display', 'block')
      docTitle(page)
    else
      $("#list").css('display', 'none')
      docTitle(page)
      $("##{page}").css('display', 'block')


  ###*
   * hide page
  ###
  hide = ->
    page = pagenation.get("currentpage")

    if typeof page is 'undefined' or page is null
    else
      $("##{page}").css('display', 'none')


  ###*
   * docTitle updates document.title
   * @param {String} title
  ###
  docTitle = (title) ->
    if typeof title is 'undefined' or title is null
      document.title = "Henry Snopek"
    else
      title = $("##{title} .title").text()
      document.title = "Henry Snopek | #{title}"


  class pageModel extends Backbone.Model
    currentpage: ""

  class postModel extends Backbone.Model
    id: ""


  class postView extends Backbone.View

    constructor: ->
      @render()

    render: ->
      hide()
      display(currentPost.get("id"))

      config = {
        title: $("##{currentPost.get("id")} .title").text()
        description: "Check out this blog post by Henry Snopek"
        ui: {
          flyout: 'middle right'
        }
        networks:
          twitter:
            description: "Check out this blog post by Henry Snopek"
          facebook:
            description: "Check out this blog post by Henry Snopek"
          pinterest:
            description: "Check out this blog post by Henry Snopek"
          email:
            description: "Check out this blog post by Henry Snopek"
      }
      new Share('.share-button', config)


  class router extends Backbone.Router
    routes:
      "":       "index"
      ":post":  "index"

    index: (post) ->
      currentPost.set("id", post)
      new postView()


  pagenation = new pageModel()
  currentPost = new postModel()
  new router()
  Backbone.history.start()
