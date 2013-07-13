window.Billbo = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},

  initialize: function() {
    new Billbo.Routers.Bills({
      "$rootEl": $("#content"),
      "$connectionsEl": $("#connections")
    });

    Dispatcher = _.extend({}, Backbone.Events);
    new FlashMessage();

    Backbone.history.start();
  },
};

$(document).ready(function(){
  var url = window.location.href;
  if (url.indexOf('session') == -1 && url.indexOf('user') == -1) {
    Billbo.initialize();
  }
});
