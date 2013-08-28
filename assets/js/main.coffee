require.config(
  paths:
    jquery: '//cdnjs.cloudflare.com/ajax/libs/jquery/2.0.3/jquery.min',
    moment: '//cdnjs.cloudflare.com/ajax/libs/moment.js/2.1.0/moment.min'
)

require [
  'jquery',
  'moment',
], ($, moment) ->
  console.log "Loaded: main.coffee"

  $.ajax(
    url: '/data/blog.json'
    cache: false
  ).done(
    (data) ->
      for post in data['posts']
        date = moment().from(post['datetime'])
        $('#blog').append(
          """
          <section>
            <h1 class="title">#{post['title']}</h1>
            <h5 class="datetime">#{date}</h5>
            <p>#{post['content']}</p>
          <section>
          """
        )
  )
