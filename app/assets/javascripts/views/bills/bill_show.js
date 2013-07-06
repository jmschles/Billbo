Billbo.Views.BillView = Backbone.View.extend({

  template: JST['bills/show'],

  events: {
    'click a.delete': 'delete'
  },

  initialize: function (options) {
    this.connections = options.connections;
  },

  delete: function (event) {
    event.preventDefault();
    this.model.destroy({
      success: function () {
        Backbone.history.navigate("", { trigger: true });
      }
    });
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