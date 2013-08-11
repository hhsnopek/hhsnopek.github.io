require.config(
	paths:
		jquery: '../components/jquery/jquery.min'
		underscore: '../components/underscore/underscore'
		Backbone: '../components/backbone/backbone'
		JSONP: '../js/jsonp'

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
	'JSONP',
], ($, Backbone, JSONP) ->
	console.log "Loaded: main.coffee"

	jsonp.get("#{BACKEND_URL}/?json=1", {}, (data) ->
		console.log data
		for post in data['posts']
			$('body').append(
				"""
				<section>
					<h1 class="title">#{post['title']}</h1>
					<span class="author">by #{post['author']['name']}</span>
					#{post['content']}
				<section>
				"""
			)
	)

# Scroll effects
	$(window).scroll ->
		height = $(window).scrollTop()
		#displayimages() if height > 1000
		
	console.log height
