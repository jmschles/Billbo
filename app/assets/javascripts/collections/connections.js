Billbo.Collections.Connections = Backbone.Collection.extend({

  model: Billbo.Models.Connection,
  url: '/connections',
  comparator: function (connection) {
  	return connection.get('email');
  }

});
