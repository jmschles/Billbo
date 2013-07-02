Billbo.Routers.Bills = Backbone.Router.extend({

	routes: {
		"": "index",
		"bills/new": "new"
	},

	initialize: function (options) {
		this.$rootEl = options.$rootEl;
		this.connections = options.connections.html();
	},

	index: function () {
		var that = this;

		Billbo.billsColl = new Billbo.Collections.Bills();

		Billbo.billsColl.fetch({
			success: function () {
				var indexView = new Billbo.Views.BillsIndex({
					collection: Billbo.billsColl
				});

				that.$rootEl.html(indexView.render().$el);
			}
		});
	},

	new: function () {
		var that = this;

		Billbo.billsColl = new Billbo.Collections.Bills();

		var newBill = new Billbo.Models.Bill();
		var formView = new Billbo.Views.BillForm({
			connections: JSON.parse(this.connections),
			model: newBill,
			collection: Billbo.billsColl
		});

		that.$rootEl.html(formView.render().$el);
	}

});
