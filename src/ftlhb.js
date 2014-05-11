var ShipSelector = require('./shipSelector/shipSelector.js');
var CrewSelector = require('./crewSelector/crewSelector.js');
var ShipName = require('./shipName/shipName.js');
var ShipCrew = require('./shipCrew/shipCrew.js');

var config = require('./data/config.js');



ftl_hb = {

	start : function(){
		var self = this;


		this.shipImage = $('[xo-element="shipImage"]');

		this.shipSelector = ShipSelector.create();
		this.crewSelector = CrewSelector.create();
		this.shipName     = ShipName.create();
		this.shipCrew     = ShipCrew.create();


		this.shipSelector.on('selectShip', function(shipName, type){
			self.changeShip(shipName, type);
		});

		this.crewSelector.on('selectCrew', function(raceName){
			self.shipCrew.add(raceName);
		});

		this.changeShip('kestral', 'typeA');
		return this;
	},

	changeShip : function(shipName, type){
		var self = this;

		var shipData = config.ships[shipName][type];
		this.shipImage.attr('src', shipData.image);

		this.shipName.generate();

		this.shipCrew.removeAll();
		_.each(shipData.crew, function(raceName){
			self.shipCrew.add(raceName);
		});

		//update crew
		//gen new name
		return this;
	},




}

