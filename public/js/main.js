(function() {
  require.config({
    paths: {
      jquery: '//cdnjs.cloudflare.com/ajax/libs/jquery/2.0.3/jquery.min',
      moment: '//cdnjs.cloudflare.com/ajax/libs/moment.js/2.1.0/moment.min'
    }
  });

  require(['jquery', 'moment'], function($, moment) {
    $.ajax({
      url: '/data/blog.json',
      cache: false
    }).done(function(data) {
      var date, post, _i, _len, _ref, _results;
      _ref = data['posts'];
      _results = [];
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        post = _ref[_i];
        date = moment(post['datetime']).fromNow();
        _results.push($('#blog').append("<section class=\"post\">\n  <h1 class=\"title\">" + post['title'] + "</h1>\n  <h5 class=\"datetime\">" + date + "</h5>\n  " + post['content'] + "\n<section>"));
      }
      return _results;
    });
    $('#blog-link').click(function() {
      document.getElementById('projects').style.display = 'none';
      return document.getElementById('blog').style.display = 'block';
    });
    return $('#projects-link').click(function() {
      document.getElementById('blog').style.display = 'none';
      return document.getElementById('projects').style.display = 'block';
    });
  });

}).call(this);
