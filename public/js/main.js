(function() {
  require.config({
    paths: {
      jquery: '//cdnjs.cloudflare.com/ajax/libs/jquery/2.0.3/jquery.min',
      moment: '//cdnjs.cloudflare.com/ajax/libs/moment.js/2.1.0/moment.min'
    }
  });

  require(['jquery', 'moment'], function($, moment) {
    console.log("Loaded: main.coffee");
    return $.ajax({
      url: '/data/blog.json',
      cache: false
    }).done(function(data) {
      var date, post, _i, _len, _ref, _results;
      console.log(data['posts']);
      _ref = data['posts']['post'];
      _results = [];
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        post = _ref[_i];
        console.log(post['datetime']);
        date = moment().from(post['datetime']);
        console.log('Worked');
        _results.push($('body').append("<section>\n  <h1 class=\"title\">" + post['title'] + "</h1>\n  <h5 class=\"datetime\">" + date + "</h5>\n  <p>" + post['content'] + "</p>\n<section>"));
      }
      return _results;
    });
  });

}).call(this);
