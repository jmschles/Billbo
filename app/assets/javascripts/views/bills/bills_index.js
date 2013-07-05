Billbo.Views.BillsIndex = Backbone.View.extend({

  template: JST['bills/index'],

  events: {
    'click .bill_row': "show"
  },

  initialize: function(options) {
    this.connections = options.connections;
    this.payments = options.payments;
    this.collection = options.collection;
  },

  render: function () {
    var renderedContent = this.template({
      bills: this.collection,
      connections: this.connections,
      debts: this.getDebts()
    });

    this.$el.html(renderedContent);
    return this;
  },

  show: function (event) {
    var id = $(event.target).parent().attr('data-id');
    Backbone.history.navigate('bills/' + id, { trigger: true });
  },

  getDebts: function () {
    var that = this;

    var paymentsHash = {};
    var current_user_id = $("#current_user_data").html();

    this.collection.each(function (bill) {
      var payer_id = bill.get('user_id');
      if (payer_id != current_user_id) {
        var payer = that.connections.get(payer_id);
        var payer_email = payer.get('email');
      }

      var share = parseFloat(bill.get('amount') / (bill.get('billings').length + 1));

      if (payer_id == current_user_id) {
        _(bill.get('billings')).each(function (billing) {
          var participant_id = billing.participant_id;
          var connection = that.connections.get(participant_id);
          var connection_email = connection.get('email');

          if (paymentsHash[connection_email]) {
            paymentsHash[connection_email] -= share;
          } else {
            paymentsHash[connection_email] = (0 - share);
          }
        });
      } else {
        if (paymentsHash[payer_email]) {
          paymentsHash[payer_email] += share;
        } else {
          paymentsHash[payer_email] = share;
        }
      }

    });

    this.payments.each(function (payment) {
      var payer_id = payment.get('payer_id');
      var recipient_id = payment.get('recipient_id');
      var amount = payment.get('amount');

      if (payer_id == current_user_id) {
        var recipient = that.connections.get(recipient_id);
        var recipient_email = recipient.get('email');

        if (paymentsHash[recipient_email]) {
          paymentsHash[recipient_email] -= amount;
        } else {
          paymentsHash[recipient_email] = (0 - amount);
        }
      } else {
        var payer = that.connections.get(payer_id);
        var payer_email = payer.get('email');

        if (paymentsHash[payer_email]) {
          paymentsHash[payer_email] += amount;
        } else {
          paymentsHash[payer_email] = amount;
        }

      }

    });

  return _.pairs(paymentsHash);
  }

});
