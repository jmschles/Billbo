Billbo.Views.ConnectionsIndex = Backbone.View.extend({

  template: JST['connections/index'],

  events: {
  	'click input[type="submit"]': "submit"
  },

  render: function () {
  	var that = this;
  	console.log(that.collection);

  	var renderedContent = this.template({
  		connections: that.collection
  	});

  	this.$el.html(renderedContent);
  	return this;
  },

  submit: function (event) {
  	event.preventDefault();

  	var attrs = $(event.target.form).serializeJSON();

  	// TODO: connections need to be a model/collection for this to work...
  }

});
