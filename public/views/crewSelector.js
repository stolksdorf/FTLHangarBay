CrewSelector = xo.view.extend({
	view : 'crewSelector',

	render : function(){
		var self = this;
		_.each(config.races, function(raceImages, raceName){
			var temp = $("<div class='newCrewCard'><img /></div>").appendTo(self.dom.container);
			temp.find('img').attr('src', raceImages[0]);
			temp.click(function(){
				self.trigger('selectCrew', raceName);
			});
		});
		return this;
	}
})