(function() {
  require.config({
    paths: {
      jquery: '../components/jquery/jquery.min',
      underscore: '../components/underscore/underscore',
      Backbone: '../components/backbone/backbone',
      JSONP: '../js/jsonp'
    },
    shim: {
      underscore: {
        exports: '_'
      },
      Backbone: {
        deps: ['underscore', 'jquery'],
        exports: 'Backbone'
      }
    }
  });

  require(['jquery', 'Backbone', 'JSONP'], function($, Backbone, JSONP) {
    console.log("Loaded: main.coffee");
    jsonp.get("" + BACKEND_URL + "/?json=1", {}, function(data) {
      var post, _i, _len, _ref, _results;
      console.log(data);
      _ref = data['posts'];
      _results = [];
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        post = _ref[_i];
        _results.push($('body').append("<section>\n	<h1 class=\"title\">" + post['title'] + "</h1>\n	<span class=\"author\">by " + post['author']['name'] + "</span>\n	" + post['content'] + "\n<section>"));
      }
      return _results;
    });
    $(window).scroll(function() {
      var height;
      return height = $(window).scrollTop();
    });
    return console.log(height);
  });

}).call(this);
