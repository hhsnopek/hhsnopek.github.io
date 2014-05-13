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

    if subpage is 'none' or 'list'
      docTitle(page)
      $("##{page}").css('display', 'block')
    else
      docTitle(subpage)
      console.log "displaying ##{subpage}"
      $("##{subpage}").css('display', 'block')

  ###*
   * hide page and subpage
  ###
  hide = ->
    page = pagenation.get("currentpage")
    subpage = pagenation.get("currentsubpage")
    console.log "Previous page: #{page} | #{subpage}"

    if typeof page is 'undefined' and typeof subpage is 'undefined'
      console.log "Hiding nothing"
    else
      $("##{page}").css('display', 'none')
      $("##{subpage}").css('display', 'none') unless subpage is null
      console.log "Hiding #{page} | #{subpage}"

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

  class ppModel extends Backbone.Model
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
      display(@el, ppInfo.get("id"))

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
      post = 'list' if post is null
      ppInfo.set("id", post)
      new blogView()

    projects: () ->
      new projectsView()

  pagenation = new pageModel()
  ppInfo = new ppModel()
  new router()
  Backbone.history.start()
