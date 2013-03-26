#= require "_helper"

# Add scripts to load to this array. These can be loaded remotely like jquery
# is below, or can use file paths, like 'vendor/underscore'
js = ["http://ajax.googleapis.com/ajax/libs/jquery/1.8.3/jquery.min.js"]

# this will fire once the required scripts have been loaded
require js, ->
  $ ->
    var Workspace = Backbone.Router.extend({
		routes: {
			"Biography":			"Biography",
			"Resume":				"Resume",
			"Career_Aspirations"	"Career_Aspirations", //Career_Aspirations
		},
	});

	Backbone.history.start();