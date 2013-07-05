Billbo.Views.BillView = Backbone.View.extend({

  template: JST['bills/show'],

  initialize: function (options) {
    this.connections = options.connections;
  },

  render: function () {
    var that = this;

    var renderedContent = this.template({
      bill: that.model,
      connections: that.connections
    });

    this.$el.html(renderedContent);
    return this;
  }
});