var xo = require('../lib/xo.js');
var config = require('../data/config.js');


module.exports = xo.view.extend({
	view : 'shipSelector',

	render : function(){
		var self =this;
		this.shipChoiceTemplate = "<div class='shipChoice'><img></img></div> ";
		this.currentType;
		this.dom.$shipTypeSelector = this.dom.view.find('.shipTypeOption');

		this.shipChoices = {};
		this.setupTypeButtons();
		this.setupShipChoices();
		this.changeType('typeA');

		return this;
	},

	setupShipChoices : function(){
		var self = this;
		_.each(config.ships, function(shipData, shipName){
			_.each(shipData, function(data, type){
				var temp = $(self.shipChoiceTemplate).appendTo(self.dom.container);
				temp.addClass(type);
				temp.find('img').attr('src', data.mini_image)
				temp.click(function(){
					self.trigger('selectShip', shipName, type);
				});
				self.shipChoices[shipName] = temp;
			});
		});
		return this;
	},

	setupTypeButtons : function(){
		var self = this;
		this.dom.$shipTypeSelector.click(function(){
			self.changeType($(this).attr('xo-element'));
		});
		return this;
	},

	changeType : function(newType){
		var self = this;
		if(newType === this.currentType) return;
		this.dom.container.find('.shipChoice').hide();
		this.dom.container.find('.' + newType).show();
		this.dom.$shipTypeSelector.removeClass('selected');
		this.dom[newType].addClass('selected');
		this.currentType = newType;
		return this;
	},



});