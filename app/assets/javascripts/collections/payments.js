Billbo.Collections.Payments = Backbone.Collection.extend({

  model: Billbo.Models.Payment,
  url: "/payments",
  comparator: function (payment) {
    return -payment.get('date');
  }

});