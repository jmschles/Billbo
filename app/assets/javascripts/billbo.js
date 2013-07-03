window.Billbo = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},

  initialize: function($connections, connections) {
    
  	this.installConnectionsBar($connections, connections);

    new Billbo.Routers.Bills({
  		"$rootEl": $("#content"),
      "connections": connections
  	});

  	Backbone.history.start();
  },

  installConnectionsBar: function($connections, connections) {
    var that = this;

    var connectionsView = new Billbo.Views.ConnectionsIndex({
      collection: connections
    });

    $connections.html(connectionsView.render().$el);
  }
};

$(document).ready(function(){
  var $connections = $("#connections");
  console.log($("#userdata"));
  var connections = JSON.parse($("#userdata").html());
  
  Billbo.initialize($connections, connections);
});
