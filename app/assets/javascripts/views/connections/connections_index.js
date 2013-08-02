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
    var newConnection = new Billbo.Models.Connection();

    var that = this;

    event.preventDefault();

    var attrs = $(event.target.form).serializeJSON();

    newConnection.set(attrs);
    if (newConnection.isNew()) {
      this.collection.create(newConnection, {
        wait: true,
        error: function (resp) {
          var email = resp.get('email');
          var cxnFound = false;
          that.collection.each(function (connection) {
            if (connection.get('email') === email) {
              cxnFound = true;
            }
          });
          if (cxnFound) {
            Dispatcher.trigger('show_flash_message', 'Connection already exists.');
          } else {
            Dispatcher.trigger('show_flash_message', 'User not found.');
          }
        }
      });
    }
  }

});
