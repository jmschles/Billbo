window.Billbo = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function() {
    
  	new Billbo.Routers.Bills({
  		"$rootEl": $("#content")
  	});
  	Backbone.history.start();
  }
};

$(document).ready(function(){
  Billbo.initialize();
});
