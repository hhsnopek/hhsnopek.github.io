(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  require.config({
    paths: {
      underscore: '//cdnjs.cloudflare.com/ajax/libs/underscore.js/1.6.0/underscore-min',
      Backbone: '//cdnjs.cloudflare.com/ajax/libs/backbone.js/1.1.2/backbone-min',
      jquery: '//cdnjs.cloudflare.com/ajax/libs/jquery/2.1.1/jquery.min',
      Share: '/js/share.min'
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

  require(['jquery', 'Backbone', 'Share'], function($, Backbone, Share) {

    /**
     * display page
     * @param  {String} page    div without hash
     */
    var currentPost, display, docTitle, hide, pageModel, pagenation, postModel, postView, router;
    display = function(page) {
      pagenation.set("currentpage", page);
      if (typeof page === 'undefined' || page === null) {
        $("#list").css('display', 'block');
        return docTitle(page);
      } else {
        $("#list").css('display', 'none');
        docTitle(page);
        return $("#" + page).css('display', 'block');
      }
    };

    /**
     * hide page
     */
    hide = function() {
      var page;
      page = pagenation.get("currentpage");
      if (typeof page === 'undefined' || page === null) {

      } else {
        return $("#" + page).css('display', 'none');
      }
    };

    /**
     * docTitle updates document.title
     * @param {String} title
     */
    docTitle = function(title) {
      if (typeof title === 'undefined' || title === null) {
        return document.title = "Henry Snopek";
      } else {
        title = $("#" + title + " .title").text();
        return document.title = "Henry Snopek | " + title;
      }
    };
    pageModel = (function(_super) {
      __extends(pageModel, _super);

      function pageModel() {
        return pageModel.__super__.constructor.apply(this, arguments);
      }

      pageModel.prototype.currentpage = "";

      return pageModel;

    })(Backbone.Model);
    postModel = (function(_super) {
      __extends(postModel, _super);

      function postModel() {
        return postModel.__super__.constructor.apply(this, arguments);
      }

      postModel.prototype.id = "";

      return postModel;

    })(Backbone.Model);
    postView = (function(_super) {
      __extends(postView, _super);

      function postView() {
        this.render();
      }

      postView.prototype.render = function() {
        var config;
        hide();
        display(currentPost.get("id"));
        config = {
          title: $("#" + (currentPost.get("id")) + " .title").text(),
          description: "Check out this blog post by Henry Snopek",
          ui: {
            flyout: 'middle right'
          },
          networks: {
            twitter: {
              description: "Check out this blog post by Henry Snopek"
            },
            facebook: {
              description: "Check out this blog post by Henry Snopek"
            },
            pinterest: {
              description: "Check out this blog post by Henry Snopek"
            },
            email: {
              description: "Check out this blog post by Henry Snopek"
            }
          }
        };
        return new Share('.share-button', config);
      };

      return postView;

    })(Backbone.View);
    router = (function(_super) {
      __extends(router, _super);

      function router() {
        return router.__super__.constructor.apply(this, arguments);
      }

      router.prototype.routes = {
        "": "index",
        ":post": "index"
      };

      router.prototype.index = function(post) {
        currentPost.set("id", post);
        return new postView();
      };

      return router;

    })(Backbone.Router);
    pagenation = new pageModel();
    currentPost = new postModel();
    new router();
    return Backbone.history.start();
  });

}).call(this);
