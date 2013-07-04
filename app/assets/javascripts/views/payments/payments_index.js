Billbo.Views.PaymentsIndex = Backbone.View.extend({

  template: JST['payments/index'],

  initialize: function (options) {
    this.connections = options.connections;
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
});