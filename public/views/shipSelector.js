ShipSelector = xo.view.extend({

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
			var temp = $(self.shipChoiceTemplate).appendTo(self.dom.container);
			temp.click(function(){
				self.trigger('selectShip', shipName, self.currentType);
			});
			self.shipChoices[shipName] = temp;
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

		_.each(this.shipChoices, function(shipElement, shipName){
			var shipData = config.ships[shipName][newType]
			shipElement.find('img').attr('src', shipData.mini_image);
		});

		this.dom.$shipTypeSelector.removeClass('selected');
		this.dom[newType].addClass('selected');

		this.currentType = newType;
		return this;
	},



});