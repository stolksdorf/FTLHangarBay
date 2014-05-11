var xo = require('../lib/xo.js');
var generator = require('../data/generator.js')

module.exports = xo.view.extend({

	view : 'shipName',

	render : function(){
		var self = this;
		this.wordLists = ['jaeger', 'pirate'];

		this.dom.genButton.click(function(event){
			event.preventDefault();
			self.generate();
			return false;
		});

		this.dom.view.find('.shipGeneratorOption').click(function(){

			var data = $(this).attr('xo-data');
			if($(this).hasClass('selected')){
				$(this).removeClass('selected');
				self.wordLists = _.without(self.wordLists, data);
			}else{
				$(this).addClass('selected');
				self.wordLists.push(data);
			}
		});

		return this;
	},


	generate : function(){

		this.dom.name.val(generator('ship', this.wordLists));
		return this;
	},


})