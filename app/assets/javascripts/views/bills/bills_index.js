Billbo.Views.BillsIndex = Backbone.View.extend({

  template: JST['bills/index'],

  initialize: function(options) {
  	this.connections = options.connections;
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

  getDebts: function () {
  	var that = this;

  	var paymentsHash = {};

  	this.collection.each(function (bill) {
  		var payer_id = bill.get('user_id');
  		if (payer_id != $("#current_user_data").html()) {
	  		var payer = that.connections.get(payer_id);
	  		var payer_email = payer.get('email');
  		}

  		var share = parseFloat(bill.get('amount') / (bill.get('billings').length + 1));

  		if (payer_id == $("#current_user_data").html()) {
  			_(bill.get('billings')).each(function (billing) {
  				var participant_id = billing.participant_id;
  				var connection = that.connections.get(participant_id);
  				var connection_email = connection.get('email');

	  			if (paymentsHash[connection_email]) {
	  				paymentsHash[connection_email] -= share;
	  			} else {
	  				console.log("went here");
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
 	console.log(paymentsHash);
	return _.pairs(paymentsHash);
  }

});
