define(function(require) {
  var $ = require('jquery');
  var _ = require('underscore');
  var Backbone = require('Backbone');

  var ApplicationView = Backbone.View.extend({
    el: $('body'),
    render: function() {
      this.$el.html('I\'m alive!');
      return this;
    }
  });

  return {
    start: function() {
      (new ApplicationView()).render();
    }
  }
});