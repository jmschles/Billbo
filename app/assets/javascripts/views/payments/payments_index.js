Billbo.Views.PaymentsIndex = Backbone.View.extend({

  template: JST['payments/index'],

  events: {
    "click a.delete": "delete"
  },

  initialize: function (options) {
    this.connections = options.connections;
    this.listenTo(this.collection, "remove", this.render);
  },

  render: function () {
    var that = this;

    var renderedContent = this.template({
      payments: that.collection,
      connections: that.connections
    });

    this.$el.html(renderedContent);
    return this;
  },

  delete: function (event) {
    event.preventDefault();
    var id = $(event.target).attr('data-id');
    var payment = this.collection.get(id);
    payment.destroy({ wait: true});
  }
});