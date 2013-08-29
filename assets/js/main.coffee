require.config(
  paths:
    jquery: '//cdnjs.cloudflare.com/ajax/libs/jquery/2.0.3/jquery.min',
    moment: '//cdnjs.cloudflare.com/ajax/libs/moment.js/2.1.0/moment.min'
)

require [
  'jquery',
  'moment',
], ($, moment) ->

  $.ajax(
    url: '/data/blog.json'
    cache: false
    ).done( (data) ->
      for post in data['posts']
        date = moment(post['datetime']).fromNow()
        $('#blog').append(
          """
          <section class="post">
            <h1 class="title">#{post['title']}</h1>
            <h5 class="datetime">#{date}</h5>
            #{post['content']}
          <section>
          """
        )
    )
      
  $('#blog-link').click () ->
    document.getElementById('projects').style.display = 'none'
    document.getElementById('blog').style.display = 'block'

  $('#projects-link').click () ->
    document.getElementById('blog').style.display = 'none'
    document.getElementById('projects').style.display = 'block'
