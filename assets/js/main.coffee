require.config(
  paths:
    underscore: '//cdnjs.cloudflare.com/ajax/libs/underscore.js/1.6.0/underscore-min'
    Backbone: '//cdnjs.cloudflare.com/ajax/libs/backbone.js/1.1.2/backbone-min'
    jquery: '//cdnjs.cloudflare.com/ajax/libs/jquery/2.1.1/jquery.min'
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
], ($, Backbone) ->
  $('body').addClass('loaded')
  activeMenu = false

  $('#navnook').click( () ->
    $('#navbar ul').toggleClass('activeMenu')
    if activeMenu is false
      $('#navnook').removeClass('inactive').addClass('active')
      activeMenu = true
    else
      $('#navnook').removeClass('active').addClass('inactive')
      activeMenu = false
  )

  ###*
   * display page and subpage
   * @param  {String} page    div without hash
   * @param  {String} subpage div without hash
  ###
  display = (page, subpage) ->
    pagenation.set("currentpage", page)
    pagenation.set("currentsubpage", subpage)
    console.log "Displaying #{page} | #{subpage}\n"

    docTitle(page)
    console.log "Changing title to: #{page}"
    $("##{page}").css('display', 'block')

    if subpage is 'list'
      console.log "Changing title to: #{subpage}"
      $("#blog #list").css('display', 'block')
    return if subpage is undefined or subpage is null
    else
      console.log "Changing title to: #{subpage}"
      docTitle(subpage)
      $("##{subpage}").css('display', 'block')


  ###*
   * hide page and subpage
  ###
  hide = ->
    page = pagenation.get("currentpage")
    subpage = pagenation.get("currentsubpage")
    console.log "Previous page: #{page} | #{subpage}"

    if typeof page is 'undefined' && typeof subpage is 'undefined'
      console.log "Hiding nothing"
    else
      $("##{page}").css('display', 'none')
      $("##{subpage}").css('display', 'none')
      console.log "Hiding: #{page} | #{subpage}"


  ###*
   * docTitle updates document.title
   * @param {String} title
  ###
  docTitle = (title) ->
    title = title.replace(/\-/g, ' ')
    document.title = "Henry Snopek | #{title}"


  class pageModel extends Backbone.Model
    currentpage: ""
    currentsubpage: ""

  class postModel extends Backbone.Model
    id: ""

  class indexView extends Backbone.View
    el: 'index'

    constructor: ->
      @render()

    render: ->
      hide()
      display(@el)

  class aboutView extends Backbone.View
    el: 'About'

    constructor: ->
      @render()

    render: ->
      hide()
      display(@el)

  class blogView extends Backbone.View
    el: 'Blog'

    constructor: ->
      @render()

    render: ->
      hide()
      display(@el, blogPost.get("id"))

  class projectsView extends Backbone.View
    el: 'Projects'

    constructor: ->
      @render()

    render: ->
      hide()
      display(@el)

  class router extends Backbone.Router
    routes:
      "":                    "index"
      "About":               "about"
      "Blog":                "blog"
      "Blog/:post":          "blog"
      "Projects":            "projects"

    index: ->
      new indexView()

    about: ->
      new aboutView()

    blog: (post) ->
      blogPost.set("id", post)
      new blogView()

    projects: () ->
      new projectsView()

  pagenation = new pageModel()
  blogPost = new postModel()
  new router()
  Backbone.history.start()
