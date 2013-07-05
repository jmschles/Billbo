Billbo.Routers.Bills = Backbone.Router.extend({

  routes: {
    "": "index",
    "bills/new": "new",
    "bills/:id": "showBill",
    "payments": "payments",
    "payments/new": "newPayment"
  },

  initialize: function (options) {
    this.$rootEl = options.$rootEl;
    this.$connectionsEl = options.$connectionsEl;
  },

  index: function () {
    var that = this;

    Billbo.billsColl = new Billbo.Collections.Bills();
    Billbo.connectionsColl = new Billbo.Collections.Connections();
    Billbo.paymentsColl = new Billbo.Collections.Payments();

    Billbo.billsColl.fetch({
      success: function () {
        Billbo.connectionsColl.fetch({
          success: function () {
            Billbo.paymentsColl.fetch({
              success: function () {
                var indexView = new Billbo.Views.BillsIndex({
                  collection: Billbo.billsColl,
                  connections: Billbo.connectionsColl,
                  payments: Billbo.paymentsColl
                });

                that.$rootEl.html(indexView.render().$el);
              }
            });
          }
        });
      }
    });

    Billbo.connectionsColl.fetch({
      success: function () {
        var newConnection = new Billbo.Models.Connection();
        var connectionsView = new Billbo.Views.ConnectionsIndex({
          collection: Billbo.connectionsColl,
          model: newConnection
        });

        that.$connectionsEl.html(connectionsView.render().$el);
      }
    });
  },

  new: function () {
    var that = this;

    Billbo.billsColl = new Billbo.Collections.Bills();
    Billbo.connectionsColl = new Billbo.Collections.Connections();

    Billbo.connectionsColl.fetch({
      success: function () {
        var newBill = new Billbo.Models.Bill();
        var formView = new Billbo.Views.BillForm({
          connections: Billbo.connectionsColl,
          model: newBill,
          collection: Billbo.billsColl
        });

        that.$rootEl.html(formView.render().$el);
      }
    });

  },

  newPayment: function () {
    var that = this;

    Billbo.paymentsColl = new Billbo.Collections.Payments();
    Billbo.connectionsColl = new Billbo.Collections.Connections();

    Billbo.connectionsColl.fetch({
      success: function () {
        var payment = new Billbo.Models.Payment();
        var paymentView = new Billbo.Views.PaymentForm({
          connections: Billbo.connectionsColl,
          model: payment,
          collection: Billbo.paymentsColl
        });

        that.$rootEl.html(paymentView.render().$el);
      }
    });
  },

  payments: function () {
    var that = this;
    Billbo.paymentsColl = new Billbo.Collections.Payments();
    Billbo.connectionsColl = new Billbo.Collections.Connections();

    Billbo.paymentsColl.fetch({
      success: function () {
        Billbo.connectionsColl.fetch({
          success: function () {
            var paymentsView = new Billbo.Views.PaymentsIndex({
              collection: Billbo.paymentsColl,
              connections: Billbo.connectionsColl
            });

            that.$rootEl.html(paymentsView.render().$el);
          }
        });
      }
    });
  },

  showBill: function (id) {
    var that = this;

    Billbo.connectionsColl = new Billbo.Collections.Connections();
    Billbo.billsColl = new Billbo.Collections.Bills();

    Billbo.billsColl.fetch({
      success: function () {
        Billbo.connectionsColl.fetch({
          success: function () {
            var bill = Billbo.billsColl.get(id);

            var billView = new Billbo.Views.BillView({
              model: bill,
              connections: Billbo.connectionsColl
            });

            that.$rootEl.html(billView.render().$el);
          }
        });
      }
    });
  }

});
