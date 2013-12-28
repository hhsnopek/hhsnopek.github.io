(function() {
  require.config({
    paths: {
      jquery: '//cdnjs.cloudflare.com/ajax/libs/jquery/2.0.3/jquery',
      underscore: '//cdnjs.cloudflare.com/ajax/libs/underscore.js/1.5.1/underscore',
      Backbone: '//cdnjs.cloudflare.com/ajax/libs/backbone.js/1.0.0/backbone'
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

  require(['jquery', 'underscore', 'Backbone'], function($, _, Backbone) {
    return console.log("ello mate");
  });

}).call(this);
