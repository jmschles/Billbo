Billbo.Views.BillsIndex = Backbone.View.extend({

  template: JST['bills/index'],

  render: function () {
  	var renderedContent = this.template({
  		bills: this.collection
  	});

  	this.$el.html(renderedContent);
  	return this;
  }

});
