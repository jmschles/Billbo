Billbo.Views.BillsIndex = Backbone.View.extend({

  template: JST['bills/index'],

  initialize: function(options) {
  	this.connections = options.connections;
  	this.collection = options.collection;
  },

  render: function () {
  	var renderedContent = this.template({
  		bills: this.collection,
  		connections: this.connections
  	});

  	this.$el.html(renderedContent);
  	return this;
  }

});
