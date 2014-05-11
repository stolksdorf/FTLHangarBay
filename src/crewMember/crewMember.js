var xo = require('../lib/xo.js');
var generator = require('../data/generator');
var config = require('../data/config');


module.exports = xo.view.extend({

	schematic : 'crewMember',


	initialize : function(race){

		this.race = race;

		return this;
	},

	render : function(){
		var self = this;

		this.dom.iconButton.click(function(){
			self.switchIcon();
		});
		this.dom.rename.click(function(){
			self.rename();
		});
		this.dom.remove.click(function(){
			self.remove();
		});



		this.iconIndex = -1;

		this.rename();
		this.switchIcon();
		return this;
	},

	switchIcon : function(){
		var raceData = config.races[this.race];
		this.iconIndex = (this.iconIndex + 1) % raceData.length;
		this.dom.image.attr('src', raceData[this.iconIndex]);
		return this;
	},

	rename : function(){
		this.dom.name.text(generator('crew', [this.race]));
		return this;
	},

	remove : function(){
		this.trigger('remove');
		this.dom.view.remove();
		return this;
	},




});