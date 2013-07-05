Billbo.Collections.Bills = Backbone.Collection.extend({

  model: Billbo.Models.Bill,
  url: "/bills",
  comparator: function (bill) {
    return -bill.get('date');
  }
});
