var xo = require('../lib/xo.js');
var CrewMember = require('../crewMember/crewMember');


module.exports = xo.view.extend({
	view : 'shipCrew',

	render : function(){
		var self = this;
		this.crew = [];

		this.dom.renameAll.click(function(){
			self.renameAll();
		});

		return this;
	},

	add : function(race){
		var self = this;
		if(this.crew.length >= 8) return this;

		var newCrew = CrewMember.create(race).appendTo(this.dom.container);
		this.crew.push(newCrew);

		newCrew.on('remove', function(){
			self.crew = _.without(self.crew, newCrew);
		});

		return this;
	},

	remove : function(){

		return this;
	},

	removeAll : function(){
		_.each(this.crew, function(crew){
			crew.remove();
		});

		return this;
	},

	renameAll : function(){
		_.each(this.crew, function(crew){
			crew.rename();
		});
		return this;
	},



});