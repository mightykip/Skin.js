define(function(require) {
  var $ = require('jquery');
  var Backbone = require('Backbone');
  var Skin = require('Skin');

  var ApplicationView = Backbone.View.extend({
    el: $('body'),
    render: function() {
      this.$el.html('I\'m alive!<br>Skin.js version: ' + Skin.version());
      return this;
    }
  });

  return {
    start: function() {
      (new ApplicationView()).render();
    }
  }
});