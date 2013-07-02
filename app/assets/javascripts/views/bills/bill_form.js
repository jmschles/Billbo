Billbo.Views.BillForm = Backbone.View.extend({

  template: JST['bills/new'],

  events: {
  	'click input[type="submit"]': "submit"
  },

  initialize: function (options) {
    this.connections = options.connections;
  },

  render: function () {
  	var renderedContent = this.template({
  		bill: this.model,
      connections: this.connections
  	});

  	this.$el.html(renderedContent);
  	return this;
  },

  submit: function (event) {
  	event.preventDefault();
  	var attrs = $(event.target.form).serializeJSON();
  	console.log(attrs);

  	function success () {
  		Backbone.history.navigate("", { trigger: true });
  	}

  	this.model.set(attrs);
  	if (this.model.isNew()) {
  		this.collection.create(this.model, {
  			success: success
  		});
  	}
  }

});
