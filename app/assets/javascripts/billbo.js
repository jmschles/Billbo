window.Billbo = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function() {
    
  	new Billbo.Routers.Bills({
  		"$rootEl": $("#content"),
      "connections": $("#userdata")
  	});
  	Backbone.history.start();
  }
};

$(document).ready(function(){
  Billbo.initialize();
});
