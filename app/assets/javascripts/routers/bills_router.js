Billbo.Routers.Bills = Backbone.Router.extend({

	routes: {
		"": "index",
		"bills/new": "new"
	},

	initialize: function (options) {
		this.$rootEl = options.$rootEl;
		this.$connectionsEl = options.$connectionsEl;
	},

	index: function () {
		var that = this;

		Billbo.billsColl = new Billbo.Collections.Bills();
		Billbo.connectionsColl = new Billbo.Collections.Connections();
		Billbo.billsColl.fetch({
			success: function () {
				var indexView = new Billbo.Views.BillsIndex({
					collection: Billbo.billsColl
				});

				that.$rootEl.html(indexView.render().$el);
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

	}

});
