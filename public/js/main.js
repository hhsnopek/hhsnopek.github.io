(function() {
  require.config({
    paths: {
      jquery: '//cdnjs.cloudflare.com/ajax/libs/jquery/2.0.3/jquery',
      underscore: '//cdnjs.cloudflare.com/ajax/libs/underscore.js/1.5.1/underscore',
      Backbone: '//cdnjs.cloudflare.com/ajax/libs/backbone.js/1.0.0/backbone',
      waypoints: '/components/jquery-waypoints/waypoints.min'
    },
    shim: {
      underscore: {
        exports: '_'
      },
      Backbone: {
        deps: ['underscore', 'jquery'],
        exports: 'Backbone'
      },
      waypoints: {
        deps: ['jquery']
      }
    }
  });

  require(['jquery', 'underscore', 'Backbone', 'waypoints'], function($, _, Backbone) {
    if ($('#projects').css("width") !== "100%") {
      return $('#blog').waypoint(function() {
        $('#blognav').toggleClass("active");
        return $('#blognavStatic').css("display", "none");
      });
    }
  });

}).call(this);
