Billbo.Views.PaymentForm = Backbone.View.extend({

  template: JST['payments/new'],

  events: {
    'click input[type="submit"]': "submit",
  },

  initialize: function (options) {
    var that = this;

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

    function success () {
      Backbone.history.navigate("", { trigger: true });
    }

    this.model.set(attrs);
    if (this.model.isNew()) {
      this.collection.create(this.model, {
        success: success
      });
    }
  },
});