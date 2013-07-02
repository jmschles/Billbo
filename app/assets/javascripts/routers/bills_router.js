Billbo.Routers.Bills = Backbone.Router.extend({

	routes: {
		"": "index"
	},

	initialize: function (options) {
		this.$rootEl = options.$rootEl;
	},

	index: function() {
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
	}

});
