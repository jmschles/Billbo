Billbo.Views.ConnectionsIndex = Backbone.View.extend({

  template: JST['connections/index'],

  events: {
  	'click input[type="submit"]': "submit"
  },

  initialize: function () {
    var that = this;

    that.listenTo(that.collection, "add", that.render);
    that.listenTo(that.collection, "remove", that.render);
  },

  render: function () {
  	var that = this;

  	var renderedContent = this.template({
  		connections: that.collection
  	});

  	this.$el.html(renderedContent);
  	return this;
  },

  submit: function (event) {
    var that = this;

  	event.preventDefault();

  	var attrs = $(event.target.form).serializeJSON();

    this.model.set(attrs);
    if (this.model.isNew()) {
      this.collection.create(this.model, {
        error: function () {
          console.log("connection already exists");
          that.collection.remove(that.model);
        }
      });
    }
  }

});
