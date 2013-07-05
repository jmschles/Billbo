var FlashMessage = Backbone.View.extend({
  initialize: function () {
    Dispatcher.bind('show_flash_message', this.render);
  },

  render: function (msg) {
    var $errorDiv = $("#errors");
    $errorDiv.show('fast').delay(1500).hide('fast');
    $errorDiv.html('<p>' + msg + '</p>');
  }
});