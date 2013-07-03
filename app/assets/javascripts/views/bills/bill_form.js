Billbo.Views.BillForm = Backbone.View.extend({

  template: JST['bills/new'],

  events: {
  	'click input[type="submit"]': "submit",
    'change select': "appendOption"
  },

  initialize: function (options) {
    var that = this;

    this.connections = options.connections;
    this.cxnCount = 1;
    var $select = $('select');
  },

  render: function () {
  	var renderedContent = this.template({
  		bill: this.model,
      connections: this.connections
  	});

  	this.$el.html(renderedContent);
  	return this;
  },

  submit: function (event) {
  	event.preventDefault();
  	var attrs = $(event.target.form).serializeJSON();

  	function success () {
  		Backbone.history.navigate("", { trigger: true });
  	}

  	this.model.set(attrs);
  	if (this.model.isNew()) {
  		this.collection.create(this.model, {
  			success: success
  		});
  	}
  },

  appendOption: function () {
    var $newOption = $(JST['bills/_connection']({ connections: this.connections }));
    var $newSelect = $('<select>');
    $newSelect.attr('name', 'billings_attributes[' + this.cxnCount + '][participant_id]')
    $newSelect.html($newOption);
    $('#connection_selects').append($('<br />'));
    $('#connection_selects').append($newSelect);
    this.cxnCount += 1;
  }

});
