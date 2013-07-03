window.Billbo = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},

  initialize: function() {
    
  	// this.installConnectionsBar($connections, connections);

    new Billbo.Routers.Bills({
  		"$rootEl": $("#content"),
      "$connectionsEl": $("#connections")
      // "connections": connections
  	});

  	Backbone.history.start();
  },

  // installConnectionsBar: function($connections, connections) {
  //   var that = this;

  //   var connectionsView = new Billbo.Views.ConnectionsIndex({
  //     collection: connections
  //   });

  //   $connections.html(connectionsView.render().$el);
  // }
};

$(document).ready(function(){
  // var $connections = $("#connections");

  // var connections = JSON.parse($("#userdata").html());
  // old params for below: $connections, connections

  Billbo.initialize();
});
