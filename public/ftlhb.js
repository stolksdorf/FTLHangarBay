(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
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
},{"../data/config":3,"../data/generator":4,"../lib/xo.js":7}],2:[function(require,module,exports){
var xo = require('../lib/xo.js');
var config = require('../data/config.js');


module.exports = xo.view.extend({
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
},{"../data/config.js":3,"../lib/xo.js":7}],3:[function(require,module,exports){
module.exports = {

	"races" : {
		"human"   : ["/img/races/male.png", "/img/races/female.png"],
		"engi"    : ["/img/races/engi.png"],
		"lanius"  : ["/img/races/lanius.png"],
		"rock"    : ["/img/races/rock.png"],
		"crystal" : ["/img/races/crystal.png"],
		"slug"    : ["/img/races/slug.png"],
		"engi"    : ["/img/races/engi.png"],
		"mantis"  : ["/img/races/mantis.png"],
		"zoltan"  : ["/img/races/zoltan.png"]
	},

	"ships" : {
		"kestral" : {
			"typeA" : {
				"image" : "/img/ships/kestral_base.png",
				"mini_image" : "/img/ships/miniship_kestral.png",
				"crew" : ["human", "human", "human"]
			},
			"typeB" : {
				"image" : "/img/ships/kestral_2_base.png",
				"mini_image" : "/img/ships/miniship_kestral_2.png",
				"crew" : ["human", "human", "zoltan", "mantis"]
			},
			"typeC" : {
				"image" : "/img/ships/kestral_3_base.png",
				"mini_image" : "/img/ships/miniship_kestral_3.png",
				"crew" : ["human", "human", "lanius"]
			},
		},
		"stealth":{
			"typeA" : {
				"image" : "/img/ships/stealth.png",
				"mini_image" : "/img/ships/stealth_mini.png",
				"crew" : ["human", "human", "human"]
			},
			"typeB" : {
				"image" : "/img/ships/stealthB.png",
				"mini_image" : "/img/ships/stealthB_mini.png",
				"crew" : ["human", "human", "zoltan"]
			},
			"typeC" : {
				"image" : "/img/ships/stealthC.png",
				"mini_image" : "/img/ships/stealthC_mini.png",
				"crew" : ["human", "rock", "slug"]
			},
		},
		"engi" : {
			"typeA" : {
				"image" : "/img/ships/engi.png",
				"mini_image" : "/img/ships/miniship_circle_cruiser.png",
				"crew" : ["human", "engi", "engi"]
			},
			"typeB" : {
				"image" : "/img/ships/engiB.png",
				"mini_image" : "/img/ships/miniship_circle_cruiser_2.png",
				"crew" : ["engi"]
			},
			"typeC" : {
				"image" : "/img/ships/engiC.png",
				"mini_image" : "/img/ships/miniship_circle_cruiser_3.png",
				"crew" : ["human", "human", "zoltan", "mantis"]
			},
		},
		"fed" : {
			"typeA" : {
				"image" : "/img/ships/fed_cruiser_base.png",
				"mini_image" : "/img/ships/miniship_fed_cruiser.png",
				"crew" : ["human", "mantis", "rock", "engi"]
			},
			"typeB" : {
				"image" : "/img/ships/fed_cruiser_2_base.png",
				"mini_image" : "/img/ships/miniship_fed_cruiser_2.png",
				"crew" : ["human", "slug", "zoltan"]
			},
			"typeC" : {
				"image" : "/img/ships/fed_cruiser_3_base.png",
				"mini_image" : "/img/ships/miniship_fed_cruiser_3.png",
				"crew" : ["human", "zoltan", "zoltan", "mantis"]
			},
		},
		"zoltan" : {
			"typeA" : {
				"image" : "/img/ships/energy_cruiser_base.png",
				"mini_image" : "/img/ships/miniship_energy_cruiser.png",
				"crew" : ["zoltan", "zoltan", "zoltan"]
			},
			"typeB" : {
				"image" : "/img/ships/zoltanB.png",
				"mini_image" : "/img/ships/miniship_energy_cruiser_2.png",
				"crew" : ["zoltan", "zoltan", "zoltan"]
			},
			"typeC" : {
				"image" : "/img/ships/energy_cruiser_3_base.png",
				"mini_image" : "/img/ships/miniship_energy_cruiser_3.png",
				"crew" : ["zoltan", "zoltan", "zoltan", "zoltan"]
			},
		},
		"mantis" : {
			"typeA" : {
				"image" : "/img/ships/mantis_cruiser_base.png",
				"mini_image" : "/img/ships/miniship_mantis_cruiser.png",
				"crew" : ["mantis", "mantis", "mantis", 'engi']
			},
			"typeB" : {
				"image" : "/img/ships/mantis_cruiser_2_base.png",
				"mini_image" : "/img/ships/miniship_mantis_cruiser_2.png",
				"crew" : ["mantis", "mantis"]
			},
			"typeC" : {
				"image" : "/img/ships/mantis_cruiser_3_base.png",
				"mini_image" : "/img/ships/miniship_mantis_cruiser_3.png",
				"crew" : ["engi", "lanius", "mantis"]
			},
		},
		"slug" : {
			"typeA" : {
				"image" : "/img/ships/jelly_cruiser_base.png",
				"mini_image" : "/img/ships/miniship_jelly_cruiser.png",
				"crew" : ["slug", "slug"]
			},
			"typeB" : {
				"image" : "/img/ships/jelly_cruiser_2_base.png",
				"mini_image" : "/img/ships/miniship_jelly_cruiser_2.png",
				"crew" : ["slug", "slug", "slug"]
			},
			"typeC" : {
				"image" : "/img/ships/jelly_cruiser_3_base.png",
				"mini_image" : "/img/ships/miniship_jelly_cruiser_3.png",
				"crew" : ["slug", "slug", "slug"]
			},
		},
		"rock" : {
			"typeA" : {
				"image" : "/img/ships/rock.png",
				"mini_image" : "/img/ships/miniship_rock_cruiser.png",
				"crew" : ["rock", "rock", "rock"]
			},
			"typeB" : {
				"image" : "/img/ships/rockB.png",
				"mini_image" : "/img/ships/miniship_rock_cruiser_2.png",
				"crew" : ["rock", "rock", "rock", "rock"]
			},
			"typeC" : {
				"image" : "/img/ships/rockC.png",
				"mini_image" : "/img/ships/miniship_rock_cruiser_3.png",
				"crew" : ["rock", "rock", "crystal"]
			},
		},
		"lanius" : {
			"typeA" : {
				"image" : "/img/ships/lanius.png",
				"mini_image" : "/img/ships/miniship_anaerobic_cruiser.png",
				"crew" : ["human", "lanius", "lanius"]
			},
			"typeB" : {
				"image" : "/img/ships/laniusB.png",
				"mini_image" : "/img/ships/miniship_anaerobic_cruiser_2.png",
				"crew" : ["lanius", "lanius", "engi"]
			}
		},
		"crystal" : {
			"typeA" : {
				"image" : "/img/ships/crystal.png",
				"mini_image" : "/img/ships/miniship_crystal_cruiser.png",
				"crew" : ["human", "human", "crystal", "crystal"]
			},
			"typeB" : {
				"image" : "/img/ships/crystalB.png",
				"mini_image" : "/img/ships/miniship_crystal_cruiser_2.png",
				"crew" : ["crystal", "crystal", "crystal"]
			}
		}
	}
};
},{}],4:[function(require,module,exports){
var lib = {
	"ship" : {
		"char_limit" : 16,
		"num_words" : [1,2,2,2,2],
		"prefixes" : ["The ", "The ","USS ", "VSS "],
		"general" : ["Boring&", "&Ship"],
		"pirate" : [
			"Rascal's&", "Bane","Captain's&","&Pride","Devil's&","&Death","Horrid&","Red&","Night's&",
			"Knave","Treasure","Pirate's&","Rage","Screaming&","Demon","Black&","Cursed&","Cannon","Doom",
			"Fear","Foul&","Night","&Greed","Greedy&","Poison","Shameful&","Vile&","Jewel","Wandering&","Hangman's&",
			"Hangman","Plunder","Doubloon", "Damned&", "&of the Sky", "&of the Stars", "Howl", "Mystery", "Scurvy&",
			"Calypso's&", "&of the East", "&of the West", "&of the North", "&of the South", "Black&", "Cruel&", "Fall of&"
		],
		"jaeger" : [
				"Titan","Sequoia","Mira","Stampede","Fermi","Nebulae","Helios","Hopper","Yellowstone","Roadrunner",
				"Cherno","Zin","Raptor","Sakura", "Intrepid","Ranger","Discover","Dawn","Endeavor","Pershing","Luna",
				"Vulcan","Spirit","Zeus","Garnet","Blackthorn","Hercules","Amazon","Moonlight","Jade","Zeus","Mustang",
				"Ruby","Tide","Vesta","Sierra","Willow","Cluster","Encanto","Juno","Jet","Emerald","Aurora",
				"Beacon","Hybrid","Lattice","Olympus","Edge","Boomer","Fission","Typhoon","Nimbus","Midway",
				"Brawler","Yukon","Coyote","Alpha","Tango","Horizon","Brave","Romeo","Blue","Tacit",
				"Ronin","Diablo","Intercept","Solar","Prophet","Puma","Real","Eden","Assassin","Gipsy","Danger","Matador",
				"Fury","Shaolin","Rogue","Specter","Chrome","Brutus","Crimson","Striker","Eureka","Nova","Hyperion","Echo",
				"Saber","Mammoth","Apostle","Hydra","Lucky","Yankee","Beta","Omega","Gamma","Delta","Epsilon",
				"Zeta","Theta","Iota","Lambda","Omicron","Pi","Rho","Sigma","Tau","Upsilon",
				"Phi","Psi","Renegade","Bombshell","Swift","Raging","Bravo","Foxtrot","Tango","Victor","Whisky","Zulu",
				"Atlas","Avenger","Banshee","Boomerang","Brigand","Buccaneer","Buffalo","Comet","Coronado","Corsair",
				"Defiant","Devastator","Dominator","Dragon","Eagle","Electra","Envoy","Express","Falcon","Fireball",
				"Firebrand","Firefly","Fox","Gauntlet","Gladiator","Grizzly","Havoc","Hawk","Helldiver","Hotspur","Hurrican",
				"Invader","Lancer","Liberator","Lightning","Mariner","Mars","Master","Mentor","Meteor","Nomad","Orion",
				"Phantom","Proctor","Rapid","Reliant","Scimitar","Sentinel","Shrike","Spitfire","Stirling","Tempest",
				"Thunderbolt","Tornado","Vega","Vindicator","Whirlwind",
				"Wildcat","Zero"
			],
		"starfleet" : [
			"Gryphon","Thunderchild","Geronimo","Dakota","Summit","Ambassador","Enterprise","Excalibur","Gandhi",
			"Sovereign","Andromeda","Drake","Hermes","Ajax","Apollo","Clement","Gage","Bradbury","Centaur","Armstrong","Challenger",
			"Cheyenne","Chimera","Portland","Endeavour","Constellation","Gettysburg","Hathaway","Magellan","Stargazer","Victory",
			"Hood","Intrepid","Lexington","Yorktown","Pegasus","Explorer","Ranger","Carolina",
			"Daedalus","Essex","Lovell","Arcos","Kelvin","Cairo","Charleston","Excelsior","Fredrickson",
			"Lakota","Melbourne","Paris","Roosevelt","Freedom","Voyager","Dauntless","London","Odyssey",
			"Robinson","Venture","Pathfinder", "Vengeance", "Vanguard", "Valiant"
		],
		"silly" : [
			"Apple","Berry","Scoot","Prance","Fruit","Gizmo","Pansy","Pudding","Dove","Slippers",
			"Sunrise","Windbumpkin","Shine","Charity","Fluttering&","Bubble", "Flake","Bonnet","Blissful&",
			"Tickle", "Classy&", "Spoon", "Lemon", "Rumble", "Sauce", "Cotton", "Pillow", "Mahogany&",
			"Sparky&", "Sparkle", "Fizzle", "Mister&", "Shiney&", "Dainty&","Perky&","Precious","Darling",
			"Cuddle","Scrumptious","Dainty&","Clumsy&","Wiggle","Princess"
		]
	},

	"crew" : {
		"char_limit" : 30,
		"num_words" : [1],
		"prefixes" :[""],

		"general" : [
			"Spoons", "Blub Blub", "Blup Blup", "Stick", "Tips", "Nibz", "Notch","Scott","Gumpo","Scoops","Swamps",
			"Spoons","Sticks","Butters","Mullett","Giles","Narth","Hammer","Cake","Kirby","Steve","King","Bear","Brain",
			"Emma","Jamz","Batman","Melon","Franz","Turtle","Hawk","Doc","Bach","Hutz","Zas","West","Marco","Duck","Brakes",
			"Pinz","Fuzz","Castle","Arrow","Slings","Fortune","Mud","Socks","Simba","Bang","Scar","Dragon","Leaf","Elsa",
			"Cats","Ophelia","Snooze","Rum","Frodo","Frak","Fox","Frisbee","Red","Hugz","Hedge","Antler","Spike","Clip",
			"Cabbage","Fang","Zeke","Beans","Ferret","Target","Straws","Grapes","Bolt","Zoom","Cookie","Nugget","Lemon",
			"Jelly","Shark","Poof","Mocha","Han","Minerva","Timber","Sprinkle","Ernesto","Goat","Hippo"
		],
		"lanius"  : [
			"Aluminium","Bismuth","Chromium","Cobalt","Copper","Gallium","Iron","Lead","Magnesium","Mercury",
			"Nickel","Plutonium","Rhodium","Silver","Titanium","Tin","Uranium","Zinc","Zirconium","Lithium",
			"Duralumin","Kryron","Nichrome","Megallium","Vitallium","Brass","Gunmetal","Electrum","Molybdochalkos",
			"Galfenol","Galinstan","Ferrochrome","Spiegeleisen","Steel","Crucible","Damascus", "MetalBro"
		],
		"rock"    : [
			"Basalt","Granite","Scoria","Chert","Gneiss","Tale","Pyrite","Onyx", "Bloodstone", "Spurr","Skaftafell",
			"Thebes","Bornholm","Titanite","Asphalt","Granite","Graphite","Dolomite","Marble","Mica","Olivine","Pumice",
			"Quartz","Salt","Slate","Silica","Talc", "RockBro"
		],
		"crystal" : [
			"Amber","Amethyst","Ametrine","Apatite","Azurite","Beryl","Chrysocolla","Citrine","Diamond","Emerald",
			"Fluorite","Garnet","Heliotrope","Hematite","Hessonite","Iolite","Jade","Jasper","Kunzite","Kyanite","Lazuli",
			"Moonstone","Onyx","Opal","Pearl","Quartz","Rhodolite","Ruby","Sapphire","Sard","Sardonyx","Spinel","Sunstone",
			"Tanzanite","Topaz","Zircon", "CrystalBro"
		],
		"human"   : [
			"Griggs", "Bobert", "Red Shirt", "Jean-Luc", "Picard", "Bully","Debbie","Dusty","Armstrong","Jennings","Chester",
			"Franklin","Price","Robertson","Henderson","Stevens","Jenkins","Palmer", "Kaylee","Mal","Wash","Inara","Jayne",
			"Cap'n","Wheaton","Pavel","Scotty","Spock","Lee","Kara","Sharon","Gaius","Will"
		],
		"slug"    : [
			"SlugBro", "Auditore","Ezio","Booth","Balthasar","Gerard","Gavrilo","Princip","Kubis","Jozef","Gabcik", "Corday",
			"Godse","Yusupov","Oswald","Lugovoi","Brutus","Dismas","Gestas","Turpin","Villon","Peruggia","Abagnale","Mason",
			"Payne", "Gugasian", "Spaggiari", "Mort"
		],
		"engi"    : [
			"EngiBro", "Neer","Gin","Eli","Cylon","Six","Seven","Bit","Enzo","Dozer","Kaylee","Megabyte","Hexadecimal",
			"Mouse","Hack","Slash","Andromeda","Nuts","Bolts","Wrench","TheHammer","Optic", "29-P", "LLori", "HH-34",
			"IC-349", "NGC-7129", "DR-6", "RCW-49", "G11-2-03", "N44F", "N-70", "LH-95", "DEML-71", "SNR-0540-693", "NI-32-D",
			"SN-1987a", "RI-36", "E0102-72"
		],
		"mantis"  : [
			"MantisBro", "B'eggh","Bbo'nats","Bbothont","Boiquaatho","Camokel","Chigosthanta","Chotho","Clinacya","Ctekelllacl",
			"Cyiqushutha","Cysasarug","Dacarngn","Dhogoshu","Dhothosca","Elothaaas","Eno-till","G'halastall","Gghal","Ghubbonthomm",
			"Gnolili","Haakephog","Han-uggggonak","Hatathoarlih","Hul'shakrtha","Iqutthuatl","Ithatin-hot","Ithostha","L'urugotllha",
			"Le'larua","Lithleglog","Lllositac","M'phamothan","Ma'ugotl","Maataraas","Mishazosachu","Mothallza","N'ygghot","Nth-boi",
			"Okekihuaat","Otlaclz","Phokih-sho","Rh'maughl","Rlachlh-kiath","Rlorhulhalog","Rshoaeke","Saguaoig","Som'sa","Thothac",
			"Uggnyibo","Uglho-mosh","Yatlllisaal","Za'yothao","Zogurn-tamm","Zotu-ndats"
		],
		"zoltan"  : [
			"Locke","Epicurus","Zeno","Confucius","Descartes","Aristotle","Plato","Watts","Russell","Hume","Pascal",
			"Nietzsche","Leibniz","Boole","Kant","Marx","Godel","Pythagoras","Socrates","Hobbes","Newton","Gauss","Euler",
			"Riemann","Fermat","Euclid","Lagrange","Archimedes", "EnergyBro"
		]

	}
};

String.prototype.endsWith = function(suffix) {
    return this.indexOf(suffix, this.length - suffix.length) !== -1;
};




var generator = function(type, lists){
	var gen = lib[type];
	var wordlist = gen.general;
	_.each(lists, function(list){
		wordlist = _.union(wordlist, gen[list])
	});
	var num_words = _.sample(gen.num_words);

	var getName = function(r){
		var nw = _.sample(wordlist);
		r.push(nw);
		//if ending in &
		if(nw.endsWith('&')){
			return getName(r);
		}
		//if starts with & on first
		if(r.length == 1 && r[0].indexOf('&') == 0){
			return getName([]);
		}
		//if over char_limit
		if(r.join(" ").length > gen.char_limit){
			return getName([]);
		}
		if(r.length < num_words){
			return getName(r);
		}
		return r.join(" ").replace(/&/g, "");
	}
	var result = getName([]);

	//Add prefix
	if(result.length < gen.char_limit - 4){
		result = _.sample(gen.prefixes) + result;
	}

	return result;

};

module.exports = generator;
},{}],5:[function(require,module,exports){
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


},{"./crewSelector/crewSelector.js":2,"./data/config.js":3,"./shipCrew/shipCrew.js":8,"./shipName/shipName.js":9,"./shipSelector/shipSelector.js":10}],6:[function(require,module,exports){
;(function(){
	//Shim for Object.create, in case the browser doesn't support it
	Object.create = Object.create || function(proto) {
		function Obj(){};
		Obj.prototype = proto;
		return new Obj();
	};
	var archetype_EventCount = new Date().getTime();

	Archetype = archetype ={
		initialize : function(){
			return this;
		},
		create : function(args){
			var obj = this.extend();
			obj.deep('initialize').apply(obj, arguments);
			obj.trigger('created', obj);
			return obj;
		},
		extend : function(methods){
			var obj = Object.create(this);
			obj.events = obj._events.bind({storedEvents : []});
			return obj.mixin(methods);
		},
		mixin : function(methods){
			for(var methodName in methods){
				this[methodName] = methods[methodName];
			}
			return this;
		},
		deep : function(method){
			var self = this;
			var deep = function(){
				if(this[method]) deep.apply(Object.getPrototypeOf(this), arguments);
				if(this.hasOwnProperty(method)) return this[method].apply(self, arguments);
			};
			return deep.bind(this);
		},

		//Events
		_events : function(set, add){
			if(set) this.storedEvents = set;
			if(add) this.storedEvents.push(add);
			return this.storedEvents;
		},
		on : function(eventName, event, once){
			this.events(false, {
				id    : ++archetype_EventCount,
				name  : eventName,
				fn    : event,
				fireOnce  : once || false
			});
			return archetype_EventCount;
		},
		once : function(eventName, event){
			return this.on(eventName, event, true);
		},
		trigger : function(eventIdentifier){
			var evts = this.events();
			var args = [].slice.apply(arguments).slice(1);
			for(var i in evts){
				var evt = evts[i];
				if(eventIdentifier == evt.id || eventIdentifier == evt.name || evt.name === '*'){
					evt.fn.apply(this, args);
					if(evt.fireOnce) this.off(evt.id);
				}
			}
			return this;
		},
		off : function(eventIdentifier){
			//Clear the events if nothing provided
			if(!eventIdentifier) this.events([]);
			var remainingEvents = []
			for(var i in this.events()){
				var evt = this.events()[i];
				if(eventIdentifier != evt.id && eventIdentifier != evt.name){
					remainingEvents.push(evt);
				}
			}
			this.events(remainingEvents);
			return this;
		}
	};
})();

module.exports = archetype;
},{}],7:[function(require,module,exports){
var archetype = require('./archetype');

;(function(){
	var map = function(obj, fn){
		var result = [];
		for(var key in obj){
			if(obj.hasOwnProperty(key)){ result.push(fn(obj[key], key)); }
		}
		return result;
	};
	var reduce = function(obj, fn, memo){
		for(var key in obj){
			if(obj.hasOwnProperty(key)){ memo = fn(memo, obj[key], key); }
		}
		return memo;
	};
	var extend = function(){
		var result = {};
		for(var i in arguments){
			var obj = arguments[i];
			for(var propName in obj){
				if(obj.hasOwnProperty(propName)){ result[propName] = obj[propName]; }
			}
		}
		return result;
	};

	var xo_ajax = function(self, method, callback, data){
		callback = callback || function(){};
		data     = extend(self.toJSON(), data);
		var typeMap = {
			'fetch'  : 'GET',
			'save'   : self.id ? 'PUT' : 'POST',
			'destroy' : 'DELETE'
		};
		var done = function(res){
			self.set(res);
			self.trigger(method, self);
			return callback(undefined, res);
		}

		self.trigger('before:'+method, self);
		if(!self.URL) return done(data);

		$.ajax({
			url     : self.URL() + (self.id ? "/" + self.id : ""),
			type    : typeMap[method],
			data    : data,
			error   : function(req){
				self.trigger('error', self, req.responseText);
				return callback(req.responseText);
			},
			success : function(res){
				done(res);
				return this;
			},
		})
	};

	xo = {};

	//Config
	xo.elementWrapper = $ || function(e){return e;};
	xo.useDataPrefix = false;


xo.view = Archetype.extend({
	view      : undefined,
	schematic : undefined,

	initialize : function(model){
		var self = this;
		this.model = model;
		this.dom = {};
		if(this.view) this.once('created', function(){
			self.setView(self.view);
		});
		return this;
	},
	setView: function(view){
		if(typeof view === 'function'){
			view = view(this.model);
		}
		if(typeof view === 'string'){
			view = document.querySelector('[xo-view="' + view + '"]');
		}
		this.dom.view = view;
		if(!this.dom.view){throw 'XO: View was not set: ' + view;}
		this.getElements();
		this.dom.view = $(this.dom.view);
		this.trigger('before:render');
		this.render();
		this.trigger('render');
		return this;
	},
	getElements: function(){
		var elements = this.dom.view.querySelectorAll('[xo-element]');
		for(var i=0;i<elements.length;i++){
			this.dom[elements[i].getAttribute("xo-element")] = $(elements[i]);
		}
		return this;
	},

	prependTo  : function(target){
		return this.appendTo(target, true);
	},
	appendTo : function(target, prepend){
		if(!target)         throw 'XO: Could not find target';
		if(!this.schematic) throw 'XO: Template not set';
		var newView = $($('[xo-schematic="' + this.schematic + '"]').html())
		target.append(newView)

		this.setView(newView[0]);
		return this;
	},

	render : function(){
		return this;
	}
});

	/*
		MODEL
	 */
	xo.model = Archetype.extend({
		URL : undefined,

		initialize : function(obj){
			this.set(obj);
			this.on('destroy', this.off);
			return this;
		},
		set : function(key, value){
			var changes = {};
			changes[key] = value;
			var hasChanges = false;
			if(typeof key === 'object') changes = key;

			for(var key in changes){
				var val = changes[key];
				if(this[key] !== val){
					this[key] = val;
					hasChanges = true;
					this.trigger('change:' + key, val);
				}
			}
			if(hasChanges) this.trigger('change');
			return this;
		},
		onChange : function(attrName, evt){
			if(typeof attrName === 'object'){
				for(var k in attrName){
					this.onChange(k, attrName[k]);
				}
				return this;
			}
			this.on('change:' + attrName, evt);
			evt(this[attrName]);
			return this;
		},
		toJSON : function(){
			return JSON.parse(JSON.stringify(this));
		},
		save : function(data, callback){
			if(typeof data === 'function') callback = data;
			xo_ajax(this, 'save', callback, data);
			return this;
		},
		fetch : function(callback){
			xo_ajax(this, 'fetch', callback);
			return this;
		},
		destroy : function(callback){
			xo_ajax(this, 'destroy', callback);
			return this;
		}
	}),


	/*
		COLLECTION
	 */
	xo.collection = Archetype.extend({
		URL : undefined,
		model  : xo.model,
		models : [],

		initialize : function(objs){
			this.set(objs);
			this.URL       = this.model.URL || this.URL;
			this.model.URL = this.model.URL || this.URL;

			return this;
		},
		set : function(objs){
			this.models = [];
			for(var i in objs){
				this.add(objs[i])
			}
			return this;
		},
		get : function(id){
			return reduce(this.models, function(result, model){
				if(model.id === id) result = model;
				return result;
			});
		},
		remove : function(arg){
			id = arg.id || arg; //handles models and raw ids
			for(var i in this.models){
				if(id == this.models[i].id){
					this.trigger('remove', this.models[i]);
					this.models.splice(i,1);
				}
			}
			return this;
		},
		add : function(obj){
			if(!this.model.isPrototypeOf(obj)) obj = this.model.create(obj);
			obj.on('destroy', function(obj){
				this.remove(obj);
			}.bind(this));

			this.models.push(obj);
			this.trigger('add', obj);
			return obj;
		},
		each : function(fn){
			return map(this.models, fn);
		},
		toJSON : function(){
			return JSON.parse(JSON.stringify(this.models));
		},

		fetch : function(callback){
			xo_ajax(this, 'fetch', callback);
			return this;
		},
		destroy : function(callback){
			var count = this.models.length, self = this;
			self.trigger('before:destroy');
			map(this.models,function(model){
				model.destroy(function(){
					if(--count === 0){
						self.trigger('destroy');
						callback && callback();
					}
				});
			});
			return this;
		},
		save : function(callback){
			var count = this.models.length, self = this;
			self.trigger('before:save');
			map(this.models,function(model){
				model.save(function(){
					if(--count === 0){
						self.trigger('save');
						callback && callback();
					}
				});
			});
			return this;
		},
	});


	/*
		Router
	*/
	xo.router = Archetype.extend({
		routes : {},
		initialize : function(routes){
			map(routes, function(fn, path){this.add(path,fn)}.bind(this));
			window.addEventListener('hashchange', this.route);
			window.addEventListener('load', this.route);
			return this;
		},
		navigate : function(path){
			window.location.hash = path;
			return this;
		},
		add : function(path, fn){
			path = path.replace('*', '(.*?)').replace(/(\(\?)?:\w+/g, '([^\/]+)') + "$";
			this.routes[path] = fn;
			return this;
		},
		route : function(){
			var URL = location.hash.slice(1) || '';
			for(var path in this.routes){
				var args = (new RegExp(path)).exec(URL);
				if(args) this.routes[path].apply(this, args.slice(1));
			}
		},
	});

})();



module.exports = xo;


},{"./archetype":6}],8:[function(require,module,exports){
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
},{"../crewMember/crewMember":1,"../lib/xo.js":7}],9:[function(require,module,exports){
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
},{"../data/generator.js":4,"../lib/xo.js":7}],10:[function(require,module,exports){
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
},{"../data/config.js":3,"../lib/xo.js":7}]},{},[5])
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlcyI6WyJjOlxcRHJvcGJveFxccm9vdFxcUHJvZ3JhbW1pbmdcXEphdmFzY3JpcHRcXGZ0bGhhbmdhcmJheVxcbm9kZV9tb2R1bGVzXFxndWxwLWJyb3dzZXJpZnlcXG5vZGVfbW9kdWxlc1xcYnJvd3NlcmlmeVxcbm9kZV9tb2R1bGVzXFxicm93c2VyLXBhY2tcXF9wcmVsdWRlLmpzIiwiYzovRHJvcGJveC9yb290L1Byb2dyYW1taW5nL0phdmFzY3JpcHQvZnRsaGFuZ2FyYmF5L3NyYy9jcmV3TWVtYmVyL2NyZXdNZW1iZXIuanMiLCJjOi9Ecm9wYm94L3Jvb3QvUHJvZ3JhbW1pbmcvSmF2YXNjcmlwdC9mdGxoYW5nYXJiYXkvc3JjL2NyZXdTZWxlY3Rvci9jcmV3U2VsZWN0b3IuanMiLCJjOi9Ecm9wYm94L3Jvb3QvUHJvZ3JhbW1pbmcvSmF2YXNjcmlwdC9mdGxoYW5nYXJiYXkvc3JjL2RhdGEvY29uZmlnLmpzIiwiYzovRHJvcGJveC9yb290L1Byb2dyYW1taW5nL0phdmFzY3JpcHQvZnRsaGFuZ2FyYmF5L3NyYy9kYXRhL2dlbmVyYXRvci5qcyIsImM6L0Ryb3Bib3gvcm9vdC9Qcm9ncmFtbWluZy9KYXZhc2NyaXB0L2Z0bGhhbmdhcmJheS9zcmMvZmFrZV85MDAyY2RmMC5qcyIsImM6L0Ryb3Bib3gvcm9vdC9Qcm9ncmFtbWluZy9KYXZhc2NyaXB0L2Z0bGhhbmdhcmJheS9zcmMvbGliL2FyY2hldHlwZS5qcyIsImM6L0Ryb3Bib3gvcm9vdC9Qcm9ncmFtbWluZy9KYXZhc2NyaXB0L2Z0bGhhbmdhcmJheS9zcmMvbGliL3hvLmpzIiwiYzovRHJvcGJveC9yb290L1Byb2dyYW1taW5nL0phdmFzY3JpcHQvZnRsaGFuZ2FyYmF5L3NyYy9zaGlwQ3Jldy9zaGlwQ3Jldy5qcyIsImM6L0Ryb3Bib3gvcm9vdC9Qcm9ncmFtbWluZy9KYXZhc2NyaXB0L2Z0bGhhbmdhcmJheS9zcmMvc2hpcE5hbWUvc2hpcE5hbWUuanMiLCJjOi9Ecm9wYm94L3Jvb3QvUHJvZ3JhbW1pbmcvSmF2YXNjcmlwdC9mdGxoYW5nYXJiYXkvc3JjL3NoaXBTZWxlY3Rvci9zaGlwU2VsZWN0b3IuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUM1REE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDbEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNoTEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2pLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzFEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3JGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDOVNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3REQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3hDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt0aHJvdyBuZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpfXZhciBmPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChmLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGYsZi5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCJ2YXIgeG8gPSByZXF1aXJlKCcuLi9saWIveG8uanMnKTtcbnZhciBnZW5lcmF0b3IgPSByZXF1aXJlKCcuLi9kYXRhL2dlbmVyYXRvcicpO1xudmFyIGNvbmZpZyA9IHJlcXVpcmUoJy4uL2RhdGEvY29uZmlnJyk7XG5cblxubW9kdWxlLmV4cG9ydHMgPSB4by52aWV3LmV4dGVuZCh7XG5cblx0c2NoZW1hdGljIDogJ2NyZXdNZW1iZXInLFxuXG5cblx0aW5pdGlhbGl6ZSA6IGZ1bmN0aW9uKHJhY2Upe1xuXG5cdFx0dGhpcy5yYWNlID0gcmFjZTtcblxuXHRcdHJldHVybiB0aGlzO1xuXHR9LFxuXG5cdHJlbmRlciA6IGZ1bmN0aW9uKCl7XG5cdFx0dmFyIHNlbGYgPSB0aGlzO1xuXG5cdFx0dGhpcy5kb20uaWNvbkJ1dHRvbi5jbGljayhmdW5jdGlvbigpe1xuXHRcdFx0c2VsZi5zd2l0Y2hJY29uKCk7XG5cdFx0fSk7XG5cdFx0dGhpcy5kb20ucmVuYW1lLmNsaWNrKGZ1bmN0aW9uKCl7XG5cdFx0XHRzZWxmLnJlbmFtZSgpO1xuXHRcdH0pO1xuXHRcdHRoaXMuZG9tLnJlbW92ZS5jbGljayhmdW5jdGlvbigpe1xuXHRcdFx0c2VsZi5yZW1vdmUoKTtcblx0XHR9KTtcblxuXG5cblx0XHR0aGlzLmljb25JbmRleCA9IC0xO1xuXG5cdFx0dGhpcy5yZW5hbWUoKTtcblx0XHR0aGlzLnN3aXRjaEljb24oKTtcblx0XHRyZXR1cm4gdGhpcztcblx0fSxcblxuXHRzd2l0Y2hJY29uIDogZnVuY3Rpb24oKXtcblx0XHR2YXIgcmFjZURhdGEgPSBjb25maWcucmFjZXNbdGhpcy5yYWNlXTtcblx0XHR0aGlzLmljb25JbmRleCA9ICh0aGlzLmljb25JbmRleCArIDEpICUgcmFjZURhdGEubGVuZ3RoO1xuXHRcdHRoaXMuZG9tLmltYWdlLmF0dHIoJ3NyYycsIHJhY2VEYXRhW3RoaXMuaWNvbkluZGV4XSk7XG5cdFx0cmV0dXJuIHRoaXM7XG5cdH0sXG5cblx0cmVuYW1lIDogZnVuY3Rpb24oKXtcblx0XHR0aGlzLmRvbS5uYW1lLnRleHQoZ2VuZXJhdG9yKCdjcmV3JywgW3RoaXMucmFjZV0pKTtcblx0XHRyZXR1cm4gdGhpcztcblx0fSxcblxuXHRyZW1vdmUgOiBmdW5jdGlvbigpe1xuXHRcdHRoaXMudHJpZ2dlcigncmVtb3ZlJyk7XG5cdFx0dGhpcy5kb20udmlldy5yZW1vdmUoKTtcblx0XHRyZXR1cm4gdGhpcztcblx0fSxcblxuXG5cblxufSk7IiwidmFyIHhvID0gcmVxdWlyZSgnLi4vbGliL3hvLmpzJyk7XG52YXIgY29uZmlnID0gcmVxdWlyZSgnLi4vZGF0YS9jb25maWcuanMnKTtcblxuXG5tb2R1bGUuZXhwb3J0cyA9IHhvLnZpZXcuZXh0ZW5kKHtcblx0dmlldyA6ICdjcmV3U2VsZWN0b3InLFxuXG5cdHJlbmRlciA6IGZ1bmN0aW9uKCl7XG5cdFx0dmFyIHNlbGYgPSB0aGlzO1xuXHRcdF8uZWFjaChjb25maWcucmFjZXMsIGZ1bmN0aW9uKHJhY2VJbWFnZXMsIHJhY2VOYW1lKXtcblx0XHRcdHZhciB0ZW1wID0gJChcIjxkaXYgY2xhc3M9J25ld0NyZXdDYXJkJz48aW1nIC8+PC9kaXY+XCIpLmFwcGVuZFRvKHNlbGYuZG9tLmNvbnRhaW5lcik7XG5cdFx0XHR0ZW1wLmZpbmQoJ2ltZycpLmF0dHIoJ3NyYycsIHJhY2VJbWFnZXNbMF0pO1xuXHRcdFx0dGVtcC5jbGljayhmdW5jdGlvbigpe1xuXHRcdFx0XHRzZWxmLnRyaWdnZXIoJ3NlbGVjdENyZXcnLCByYWNlTmFtZSk7XG5cdFx0XHR9KTtcblx0XHR9KTtcblx0XHRyZXR1cm4gdGhpcztcblx0fVxufSkiLCJtb2R1bGUuZXhwb3J0cyA9IHtcblxuXHRcInJhY2VzXCIgOiB7XG5cdFx0XCJodW1hblwiICAgOiBbXCIvaW1nL3JhY2VzL21hbGUucG5nXCIsIFwiL2ltZy9yYWNlcy9mZW1hbGUucG5nXCJdLFxuXHRcdFwiZW5naVwiICAgIDogW1wiL2ltZy9yYWNlcy9lbmdpLnBuZ1wiXSxcblx0XHRcImxhbml1c1wiICA6IFtcIi9pbWcvcmFjZXMvbGFuaXVzLnBuZ1wiXSxcblx0XHRcInJvY2tcIiAgICA6IFtcIi9pbWcvcmFjZXMvcm9jay5wbmdcIl0sXG5cdFx0XCJjcnlzdGFsXCIgOiBbXCIvaW1nL3JhY2VzL2NyeXN0YWwucG5nXCJdLFxuXHRcdFwic2x1Z1wiICAgIDogW1wiL2ltZy9yYWNlcy9zbHVnLnBuZ1wiXSxcblx0XHRcImVuZ2lcIiAgICA6IFtcIi9pbWcvcmFjZXMvZW5naS5wbmdcIl0sXG5cdFx0XCJtYW50aXNcIiAgOiBbXCIvaW1nL3JhY2VzL21hbnRpcy5wbmdcIl0sXG5cdFx0XCJ6b2x0YW5cIiAgOiBbXCIvaW1nL3JhY2VzL3pvbHRhbi5wbmdcIl1cblx0fSxcblxuXHRcInNoaXBzXCIgOiB7XG5cdFx0XCJrZXN0cmFsXCIgOiB7XG5cdFx0XHRcInR5cGVBXCIgOiB7XG5cdFx0XHRcdFwiaW1hZ2VcIiA6IFwiL2ltZy9zaGlwcy9rZXN0cmFsX2Jhc2UucG5nXCIsXG5cdFx0XHRcdFwibWluaV9pbWFnZVwiIDogXCIvaW1nL3NoaXBzL21pbmlzaGlwX2tlc3RyYWwucG5nXCIsXG5cdFx0XHRcdFwiY3Jld1wiIDogW1wiaHVtYW5cIiwgXCJodW1hblwiLCBcImh1bWFuXCJdXG5cdFx0XHR9LFxuXHRcdFx0XCJ0eXBlQlwiIDoge1xuXHRcdFx0XHRcImltYWdlXCIgOiBcIi9pbWcvc2hpcHMva2VzdHJhbF8yX2Jhc2UucG5nXCIsXG5cdFx0XHRcdFwibWluaV9pbWFnZVwiIDogXCIvaW1nL3NoaXBzL21pbmlzaGlwX2tlc3RyYWxfMi5wbmdcIixcblx0XHRcdFx0XCJjcmV3XCIgOiBbXCJodW1hblwiLCBcImh1bWFuXCIsIFwiem9sdGFuXCIsIFwibWFudGlzXCJdXG5cdFx0XHR9LFxuXHRcdFx0XCJ0eXBlQ1wiIDoge1xuXHRcdFx0XHRcImltYWdlXCIgOiBcIi9pbWcvc2hpcHMva2VzdHJhbF8zX2Jhc2UucG5nXCIsXG5cdFx0XHRcdFwibWluaV9pbWFnZVwiIDogXCIvaW1nL3NoaXBzL21pbmlzaGlwX2tlc3RyYWxfMy5wbmdcIixcblx0XHRcdFx0XCJjcmV3XCIgOiBbXCJodW1hblwiLCBcImh1bWFuXCIsIFwibGFuaXVzXCJdXG5cdFx0XHR9LFxuXHRcdH0sXG5cdFx0XCJzdGVhbHRoXCI6e1xuXHRcdFx0XCJ0eXBlQVwiIDoge1xuXHRcdFx0XHRcImltYWdlXCIgOiBcIi9pbWcvc2hpcHMvc3RlYWx0aC5wbmdcIixcblx0XHRcdFx0XCJtaW5pX2ltYWdlXCIgOiBcIi9pbWcvc2hpcHMvc3RlYWx0aF9taW5pLnBuZ1wiLFxuXHRcdFx0XHRcImNyZXdcIiA6IFtcImh1bWFuXCIsIFwiaHVtYW5cIiwgXCJodW1hblwiXVxuXHRcdFx0fSxcblx0XHRcdFwidHlwZUJcIiA6IHtcblx0XHRcdFx0XCJpbWFnZVwiIDogXCIvaW1nL3NoaXBzL3N0ZWFsdGhCLnBuZ1wiLFxuXHRcdFx0XHRcIm1pbmlfaW1hZ2VcIiA6IFwiL2ltZy9zaGlwcy9zdGVhbHRoQl9taW5pLnBuZ1wiLFxuXHRcdFx0XHRcImNyZXdcIiA6IFtcImh1bWFuXCIsIFwiaHVtYW5cIiwgXCJ6b2x0YW5cIl1cblx0XHRcdH0sXG5cdFx0XHRcInR5cGVDXCIgOiB7XG5cdFx0XHRcdFwiaW1hZ2VcIiA6IFwiL2ltZy9zaGlwcy9zdGVhbHRoQy5wbmdcIixcblx0XHRcdFx0XCJtaW5pX2ltYWdlXCIgOiBcIi9pbWcvc2hpcHMvc3RlYWx0aENfbWluaS5wbmdcIixcblx0XHRcdFx0XCJjcmV3XCIgOiBbXCJodW1hblwiLCBcInJvY2tcIiwgXCJzbHVnXCJdXG5cdFx0XHR9LFxuXHRcdH0sXG5cdFx0XCJlbmdpXCIgOiB7XG5cdFx0XHRcInR5cGVBXCIgOiB7XG5cdFx0XHRcdFwiaW1hZ2VcIiA6IFwiL2ltZy9zaGlwcy9lbmdpLnBuZ1wiLFxuXHRcdFx0XHRcIm1pbmlfaW1hZ2VcIiA6IFwiL2ltZy9zaGlwcy9taW5pc2hpcF9jaXJjbGVfY3J1aXNlci5wbmdcIixcblx0XHRcdFx0XCJjcmV3XCIgOiBbXCJodW1hblwiLCBcImVuZ2lcIiwgXCJlbmdpXCJdXG5cdFx0XHR9LFxuXHRcdFx0XCJ0eXBlQlwiIDoge1xuXHRcdFx0XHRcImltYWdlXCIgOiBcIi9pbWcvc2hpcHMvZW5naUIucG5nXCIsXG5cdFx0XHRcdFwibWluaV9pbWFnZVwiIDogXCIvaW1nL3NoaXBzL21pbmlzaGlwX2NpcmNsZV9jcnVpc2VyXzIucG5nXCIsXG5cdFx0XHRcdFwiY3Jld1wiIDogW1wiZW5naVwiXVxuXHRcdFx0fSxcblx0XHRcdFwidHlwZUNcIiA6IHtcblx0XHRcdFx0XCJpbWFnZVwiIDogXCIvaW1nL3NoaXBzL2VuZ2lDLnBuZ1wiLFxuXHRcdFx0XHRcIm1pbmlfaW1hZ2VcIiA6IFwiL2ltZy9zaGlwcy9taW5pc2hpcF9jaXJjbGVfY3J1aXNlcl8zLnBuZ1wiLFxuXHRcdFx0XHRcImNyZXdcIiA6IFtcImh1bWFuXCIsIFwiaHVtYW5cIiwgXCJ6b2x0YW5cIiwgXCJtYW50aXNcIl1cblx0XHRcdH0sXG5cdFx0fSxcblx0XHRcImZlZFwiIDoge1xuXHRcdFx0XCJ0eXBlQVwiIDoge1xuXHRcdFx0XHRcImltYWdlXCIgOiBcIi9pbWcvc2hpcHMvZmVkX2NydWlzZXJfYmFzZS5wbmdcIixcblx0XHRcdFx0XCJtaW5pX2ltYWdlXCIgOiBcIi9pbWcvc2hpcHMvbWluaXNoaXBfZmVkX2NydWlzZXIucG5nXCIsXG5cdFx0XHRcdFwiY3Jld1wiIDogW1wiaHVtYW5cIiwgXCJtYW50aXNcIiwgXCJyb2NrXCIsIFwiZW5naVwiXVxuXHRcdFx0fSxcblx0XHRcdFwidHlwZUJcIiA6IHtcblx0XHRcdFx0XCJpbWFnZVwiIDogXCIvaW1nL3NoaXBzL2ZlZF9jcnVpc2VyXzJfYmFzZS5wbmdcIixcblx0XHRcdFx0XCJtaW5pX2ltYWdlXCIgOiBcIi9pbWcvc2hpcHMvbWluaXNoaXBfZmVkX2NydWlzZXJfMi5wbmdcIixcblx0XHRcdFx0XCJjcmV3XCIgOiBbXCJodW1hblwiLCBcInNsdWdcIiwgXCJ6b2x0YW5cIl1cblx0XHRcdH0sXG5cdFx0XHRcInR5cGVDXCIgOiB7XG5cdFx0XHRcdFwiaW1hZ2VcIiA6IFwiL2ltZy9zaGlwcy9mZWRfY3J1aXNlcl8zX2Jhc2UucG5nXCIsXG5cdFx0XHRcdFwibWluaV9pbWFnZVwiIDogXCIvaW1nL3NoaXBzL21pbmlzaGlwX2ZlZF9jcnVpc2VyXzMucG5nXCIsXG5cdFx0XHRcdFwiY3Jld1wiIDogW1wiaHVtYW5cIiwgXCJ6b2x0YW5cIiwgXCJ6b2x0YW5cIiwgXCJtYW50aXNcIl1cblx0XHRcdH0sXG5cdFx0fSxcblx0XHRcInpvbHRhblwiIDoge1xuXHRcdFx0XCJ0eXBlQVwiIDoge1xuXHRcdFx0XHRcImltYWdlXCIgOiBcIi9pbWcvc2hpcHMvZW5lcmd5X2NydWlzZXJfYmFzZS5wbmdcIixcblx0XHRcdFx0XCJtaW5pX2ltYWdlXCIgOiBcIi9pbWcvc2hpcHMvbWluaXNoaXBfZW5lcmd5X2NydWlzZXIucG5nXCIsXG5cdFx0XHRcdFwiY3Jld1wiIDogW1wiem9sdGFuXCIsIFwiem9sdGFuXCIsIFwiem9sdGFuXCJdXG5cdFx0XHR9LFxuXHRcdFx0XCJ0eXBlQlwiIDoge1xuXHRcdFx0XHRcImltYWdlXCIgOiBcIi9pbWcvc2hpcHMvem9sdGFuQi5wbmdcIixcblx0XHRcdFx0XCJtaW5pX2ltYWdlXCIgOiBcIi9pbWcvc2hpcHMvbWluaXNoaXBfZW5lcmd5X2NydWlzZXJfMi5wbmdcIixcblx0XHRcdFx0XCJjcmV3XCIgOiBbXCJ6b2x0YW5cIiwgXCJ6b2x0YW5cIiwgXCJ6b2x0YW5cIl1cblx0XHRcdH0sXG5cdFx0XHRcInR5cGVDXCIgOiB7XG5cdFx0XHRcdFwiaW1hZ2VcIiA6IFwiL2ltZy9zaGlwcy9lbmVyZ3lfY3J1aXNlcl8zX2Jhc2UucG5nXCIsXG5cdFx0XHRcdFwibWluaV9pbWFnZVwiIDogXCIvaW1nL3NoaXBzL21pbmlzaGlwX2VuZXJneV9jcnVpc2VyXzMucG5nXCIsXG5cdFx0XHRcdFwiY3Jld1wiIDogW1wiem9sdGFuXCIsIFwiem9sdGFuXCIsIFwiem9sdGFuXCIsIFwiem9sdGFuXCJdXG5cdFx0XHR9LFxuXHRcdH0sXG5cdFx0XCJtYW50aXNcIiA6IHtcblx0XHRcdFwidHlwZUFcIiA6IHtcblx0XHRcdFx0XCJpbWFnZVwiIDogXCIvaW1nL3NoaXBzL21hbnRpc19jcnVpc2VyX2Jhc2UucG5nXCIsXG5cdFx0XHRcdFwibWluaV9pbWFnZVwiIDogXCIvaW1nL3NoaXBzL21pbmlzaGlwX21hbnRpc19jcnVpc2VyLnBuZ1wiLFxuXHRcdFx0XHRcImNyZXdcIiA6IFtcIm1hbnRpc1wiLCBcIm1hbnRpc1wiLCBcIm1hbnRpc1wiLCAnZW5naSddXG5cdFx0XHR9LFxuXHRcdFx0XCJ0eXBlQlwiIDoge1xuXHRcdFx0XHRcImltYWdlXCIgOiBcIi9pbWcvc2hpcHMvbWFudGlzX2NydWlzZXJfMl9iYXNlLnBuZ1wiLFxuXHRcdFx0XHRcIm1pbmlfaW1hZ2VcIiA6IFwiL2ltZy9zaGlwcy9taW5pc2hpcF9tYW50aXNfY3J1aXNlcl8yLnBuZ1wiLFxuXHRcdFx0XHRcImNyZXdcIiA6IFtcIm1hbnRpc1wiLCBcIm1hbnRpc1wiXVxuXHRcdFx0fSxcblx0XHRcdFwidHlwZUNcIiA6IHtcblx0XHRcdFx0XCJpbWFnZVwiIDogXCIvaW1nL3NoaXBzL21hbnRpc19jcnVpc2VyXzNfYmFzZS5wbmdcIixcblx0XHRcdFx0XCJtaW5pX2ltYWdlXCIgOiBcIi9pbWcvc2hpcHMvbWluaXNoaXBfbWFudGlzX2NydWlzZXJfMy5wbmdcIixcblx0XHRcdFx0XCJjcmV3XCIgOiBbXCJlbmdpXCIsIFwibGFuaXVzXCIsIFwibWFudGlzXCJdXG5cdFx0XHR9LFxuXHRcdH0sXG5cdFx0XCJzbHVnXCIgOiB7XG5cdFx0XHRcInR5cGVBXCIgOiB7XG5cdFx0XHRcdFwiaW1hZ2VcIiA6IFwiL2ltZy9zaGlwcy9qZWxseV9jcnVpc2VyX2Jhc2UucG5nXCIsXG5cdFx0XHRcdFwibWluaV9pbWFnZVwiIDogXCIvaW1nL3NoaXBzL21pbmlzaGlwX2plbGx5X2NydWlzZXIucG5nXCIsXG5cdFx0XHRcdFwiY3Jld1wiIDogW1wic2x1Z1wiLCBcInNsdWdcIl1cblx0XHRcdH0sXG5cdFx0XHRcInR5cGVCXCIgOiB7XG5cdFx0XHRcdFwiaW1hZ2VcIiA6IFwiL2ltZy9zaGlwcy9qZWxseV9jcnVpc2VyXzJfYmFzZS5wbmdcIixcblx0XHRcdFx0XCJtaW5pX2ltYWdlXCIgOiBcIi9pbWcvc2hpcHMvbWluaXNoaXBfamVsbHlfY3J1aXNlcl8yLnBuZ1wiLFxuXHRcdFx0XHRcImNyZXdcIiA6IFtcInNsdWdcIiwgXCJzbHVnXCIsIFwic2x1Z1wiXVxuXHRcdFx0fSxcblx0XHRcdFwidHlwZUNcIiA6IHtcblx0XHRcdFx0XCJpbWFnZVwiIDogXCIvaW1nL3NoaXBzL2plbGx5X2NydWlzZXJfM19iYXNlLnBuZ1wiLFxuXHRcdFx0XHRcIm1pbmlfaW1hZ2VcIiA6IFwiL2ltZy9zaGlwcy9taW5pc2hpcF9qZWxseV9jcnVpc2VyXzMucG5nXCIsXG5cdFx0XHRcdFwiY3Jld1wiIDogW1wic2x1Z1wiLCBcInNsdWdcIiwgXCJzbHVnXCJdXG5cdFx0XHR9LFxuXHRcdH0sXG5cdFx0XCJyb2NrXCIgOiB7XG5cdFx0XHRcInR5cGVBXCIgOiB7XG5cdFx0XHRcdFwiaW1hZ2VcIiA6IFwiL2ltZy9zaGlwcy9yb2NrLnBuZ1wiLFxuXHRcdFx0XHRcIm1pbmlfaW1hZ2VcIiA6IFwiL2ltZy9zaGlwcy9taW5pc2hpcF9yb2NrX2NydWlzZXIucG5nXCIsXG5cdFx0XHRcdFwiY3Jld1wiIDogW1wicm9ja1wiLCBcInJvY2tcIiwgXCJyb2NrXCJdXG5cdFx0XHR9LFxuXHRcdFx0XCJ0eXBlQlwiIDoge1xuXHRcdFx0XHRcImltYWdlXCIgOiBcIi9pbWcvc2hpcHMvcm9ja0IucG5nXCIsXG5cdFx0XHRcdFwibWluaV9pbWFnZVwiIDogXCIvaW1nL3NoaXBzL21pbmlzaGlwX3JvY2tfY3J1aXNlcl8yLnBuZ1wiLFxuXHRcdFx0XHRcImNyZXdcIiA6IFtcInJvY2tcIiwgXCJyb2NrXCIsIFwicm9ja1wiLCBcInJvY2tcIl1cblx0XHRcdH0sXG5cdFx0XHRcInR5cGVDXCIgOiB7XG5cdFx0XHRcdFwiaW1hZ2VcIiA6IFwiL2ltZy9zaGlwcy9yb2NrQy5wbmdcIixcblx0XHRcdFx0XCJtaW5pX2ltYWdlXCIgOiBcIi9pbWcvc2hpcHMvbWluaXNoaXBfcm9ja19jcnVpc2VyXzMucG5nXCIsXG5cdFx0XHRcdFwiY3Jld1wiIDogW1wicm9ja1wiLCBcInJvY2tcIiwgXCJjcnlzdGFsXCJdXG5cdFx0XHR9LFxuXHRcdH0sXG5cdFx0XCJsYW5pdXNcIiA6IHtcblx0XHRcdFwidHlwZUFcIiA6IHtcblx0XHRcdFx0XCJpbWFnZVwiIDogXCIvaW1nL3NoaXBzL2xhbml1cy5wbmdcIixcblx0XHRcdFx0XCJtaW5pX2ltYWdlXCIgOiBcIi9pbWcvc2hpcHMvbWluaXNoaXBfYW5hZXJvYmljX2NydWlzZXIucG5nXCIsXG5cdFx0XHRcdFwiY3Jld1wiIDogW1wiaHVtYW5cIiwgXCJsYW5pdXNcIiwgXCJsYW5pdXNcIl1cblx0XHRcdH0sXG5cdFx0XHRcInR5cGVCXCIgOiB7XG5cdFx0XHRcdFwiaW1hZ2VcIiA6IFwiL2ltZy9zaGlwcy9sYW5pdXNCLnBuZ1wiLFxuXHRcdFx0XHRcIm1pbmlfaW1hZ2VcIiA6IFwiL2ltZy9zaGlwcy9taW5pc2hpcF9hbmFlcm9iaWNfY3J1aXNlcl8yLnBuZ1wiLFxuXHRcdFx0XHRcImNyZXdcIiA6IFtcImxhbml1c1wiLCBcImxhbml1c1wiLCBcImVuZ2lcIl1cblx0XHRcdH1cblx0XHR9LFxuXHRcdFwiY3J5c3RhbFwiIDoge1xuXHRcdFx0XCJ0eXBlQVwiIDoge1xuXHRcdFx0XHRcImltYWdlXCIgOiBcIi9pbWcvc2hpcHMvY3J5c3RhbC5wbmdcIixcblx0XHRcdFx0XCJtaW5pX2ltYWdlXCIgOiBcIi9pbWcvc2hpcHMvbWluaXNoaXBfY3J5c3RhbF9jcnVpc2VyLnBuZ1wiLFxuXHRcdFx0XHRcImNyZXdcIiA6IFtcImh1bWFuXCIsIFwiaHVtYW5cIiwgXCJjcnlzdGFsXCIsIFwiY3J5c3RhbFwiXVxuXHRcdFx0fSxcblx0XHRcdFwidHlwZUJcIiA6IHtcblx0XHRcdFx0XCJpbWFnZVwiIDogXCIvaW1nL3NoaXBzL2NyeXN0YWxCLnBuZ1wiLFxuXHRcdFx0XHRcIm1pbmlfaW1hZ2VcIiA6IFwiL2ltZy9zaGlwcy9taW5pc2hpcF9jcnlzdGFsX2NydWlzZXJfMi5wbmdcIixcblx0XHRcdFx0XCJjcmV3XCIgOiBbXCJjcnlzdGFsXCIsIFwiY3J5c3RhbFwiLCBcImNyeXN0YWxcIl1cblx0XHRcdH1cblx0XHR9XG5cdH1cbn07IiwidmFyIGxpYiA9IHtcblx0XCJzaGlwXCIgOiB7XG5cdFx0XCJjaGFyX2xpbWl0XCIgOiAxNixcblx0XHRcIm51bV93b3Jkc1wiIDogWzEsMiwyLDIsMl0sXG5cdFx0XCJwcmVmaXhlc1wiIDogW1wiVGhlIFwiLCBcIlRoZSBcIixcIlVTUyBcIiwgXCJWU1MgXCJdLFxuXHRcdFwiZ2VuZXJhbFwiIDogW1wiQm9yaW5nJlwiLCBcIiZTaGlwXCJdLFxuXHRcdFwicGlyYXRlXCIgOiBbXG5cdFx0XHRcIlJhc2NhbCdzJlwiLCBcIkJhbmVcIixcIkNhcHRhaW4ncyZcIixcIiZQcmlkZVwiLFwiRGV2aWwncyZcIixcIiZEZWF0aFwiLFwiSG9ycmlkJlwiLFwiUmVkJlwiLFwiTmlnaHQncyZcIixcblx0XHRcdFwiS25hdmVcIixcIlRyZWFzdXJlXCIsXCJQaXJhdGUncyZcIixcIlJhZ2VcIixcIlNjcmVhbWluZyZcIixcIkRlbW9uXCIsXCJCbGFjayZcIixcIkN1cnNlZCZcIixcIkNhbm5vblwiLFwiRG9vbVwiLFxuXHRcdFx0XCJGZWFyXCIsXCJGb3VsJlwiLFwiTmlnaHRcIixcIiZHcmVlZFwiLFwiR3JlZWR5JlwiLFwiUG9pc29uXCIsXCJTaGFtZWZ1bCZcIixcIlZpbGUmXCIsXCJKZXdlbFwiLFwiV2FuZGVyaW5nJlwiLFwiSGFuZ21hbidzJlwiLFxuXHRcdFx0XCJIYW5nbWFuXCIsXCJQbHVuZGVyXCIsXCJEb3VibG9vblwiLCBcIkRhbW5lZCZcIiwgXCImb2YgdGhlIFNreVwiLCBcIiZvZiB0aGUgU3RhcnNcIiwgXCJIb3dsXCIsIFwiTXlzdGVyeVwiLCBcIlNjdXJ2eSZcIixcblx0XHRcdFwiQ2FseXBzbydzJlwiLCBcIiZvZiB0aGUgRWFzdFwiLCBcIiZvZiB0aGUgV2VzdFwiLCBcIiZvZiB0aGUgTm9ydGhcIiwgXCImb2YgdGhlIFNvdXRoXCIsIFwiQmxhY2smXCIsIFwiQ3J1ZWwmXCIsIFwiRmFsbCBvZiZcIlxuXHRcdF0sXG5cdFx0XCJqYWVnZXJcIiA6IFtcblx0XHRcdFx0XCJUaXRhblwiLFwiU2VxdW9pYVwiLFwiTWlyYVwiLFwiU3RhbXBlZGVcIixcIkZlcm1pXCIsXCJOZWJ1bGFlXCIsXCJIZWxpb3NcIixcIkhvcHBlclwiLFwiWWVsbG93c3RvbmVcIixcIlJvYWRydW5uZXJcIixcblx0XHRcdFx0XCJDaGVybm9cIixcIlppblwiLFwiUmFwdG9yXCIsXCJTYWt1cmFcIiwgXCJJbnRyZXBpZFwiLFwiUmFuZ2VyXCIsXCJEaXNjb3ZlclwiLFwiRGF3blwiLFwiRW5kZWF2b3JcIixcIlBlcnNoaW5nXCIsXCJMdW5hXCIsXG5cdFx0XHRcdFwiVnVsY2FuXCIsXCJTcGlyaXRcIixcIlpldXNcIixcIkdhcm5ldFwiLFwiQmxhY2t0aG9yblwiLFwiSGVyY3VsZXNcIixcIkFtYXpvblwiLFwiTW9vbmxpZ2h0XCIsXCJKYWRlXCIsXCJaZXVzXCIsXCJNdXN0YW5nXCIsXG5cdFx0XHRcdFwiUnVieVwiLFwiVGlkZVwiLFwiVmVzdGFcIixcIlNpZXJyYVwiLFwiV2lsbG93XCIsXCJDbHVzdGVyXCIsXCJFbmNhbnRvXCIsXCJKdW5vXCIsXCJKZXRcIixcIkVtZXJhbGRcIixcIkF1cm9yYVwiLFxuXHRcdFx0XHRcIkJlYWNvblwiLFwiSHlicmlkXCIsXCJMYXR0aWNlXCIsXCJPbHltcHVzXCIsXCJFZGdlXCIsXCJCb29tZXJcIixcIkZpc3Npb25cIixcIlR5cGhvb25cIixcIk5pbWJ1c1wiLFwiTWlkd2F5XCIsXG5cdFx0XHRcdFwiQnJhd2xlclwiLFwiWXVrb25cIixcIkNveW90ZVwiLFwiQWxwaGFcIixcIlRhbmdvXCIsXCJIb3Jpem9uXCIsXCJCcmF2ZVwiLFwiUm9tZW9cIixcIkJsdWVcIixcIlRhY2l0XCIsXG5cdFx0XHRcdFwiUm9uaW5cIixcIkRpYWJsb1wiLFwiSW50ZXJjZXB0XCIsXCJTb2xhclwiLFwiUHJvcGhldFwiLFwiUHVtYVwiLFwiUmVhbFwiLFwiRWRlblwiLFwiQXNzYXNzaW5cIixcIkdpcHN5XCIsXCJEYW5nZXJcIixcIk1hdGFkb3JcIixcblx0XHRcdFx0XCJGdXJ5XCIsXCJTaGFvbGluXCIsXCJSb2d1ZVwiLFwiU3BlY3RlclwiLFwiQ2hyb21lXCIsXCJCcnV0dXNcIixcIkNyaW1zb25cIixcIlN0cmlrZXJcIixcIkV1cmVrYVwiLFwiTm92YVwiLFwiSHlwZXJpb25cIixcIkVjaG9cIixcblx0XHRcdFx0XCJTYWJlclwiLFwiTWFtbW90aFwiLFwiQXBvc3RsZVwiLFwiSHlkcmFcIixcIkx1Y2t5XCIsXCJZYW5rZWVcIixcIkJldGFcIixcIk9tZWdhXCIsXCJHYW1tYVwiLFwiRGVsdGFcIixcIkVwc2lsb25cIixcblx0XHRcdFx0XCJaZXRhXCIsXCJUaGV0YVwiLFwiSW90YVwiLFwiTGFtYmRhXCIsXCJPbWljcm9uXCIsXCJQaVwiLFwiUmhvXCIsXCJTaWdtYVwiLFwiVGF1XCIsXCJVcHNpbG9uXCIsXG5cdFx0XHRcdFwiUGhpXCIsXCJQc2lcIixcIlJlbmVnYWRlXCIsXCJCb21ic2hlbGxcIixcIlN3aWZ0XCIsXCJSYWdpbmdcIixcIkJyYXZvXCIsXCJGb3h0cm90XCIsXCJUYW5nb1wiLFwiVmljdG9yXCIsXCJXaGlza3lcIixcIlp1bHVcIixcblx0XHRcdFx0XCJBdGxhc1wiLFwiQXZlbmdlclwiLFwiQmFuc2hlZVwiLFwiQm9vbWVyYW5nXCIsXCJCcmlnYW5kXCIsXCJCdWNjYW5lZXJcIixcIkJ1ZmZhbG9cIixcIkNvbWV0XCIsXCJDb3JvbmFkb1wiLFwiQ29yc2FpclwiLFxuXHRcdFx0XHRcIkRlZmlhbnRcIixcIkRldmFzdGF0b3JcIixcIkRvbWluYXRvclwiLFwiRHJhZ29uXCIsXCJFYWdsZVwiLFwiRWxlY3RyYVwiLFwiRW52b3lcIixcIkV4cHJlc3NcIixcIkZhbGNvblwiLFwiRmlyZWJhbGxcIixcblx0XHRcdFx0XCJGaXJlYnJhbmRcIixcIkZpcmVmbHlcIixcIkZveFwiLFwiR2F1bnRsZXRcIixcIkdsYWRpYXRvclwiLFwiR3JpenpseVwiLFwiSGF2b2NcIixcIkhhd2tcIixcIkhlbGxkaXZlclwiLFwiSG90c3B1clwiLFwiSHVycmljYW5cIixcblx0XHRcdFx0XCJJbnZhZGVyXCIsXCJMYW5jZXJcIixcIkxpYmVyYXRvclwiLFwiTGlnaHRuaW5nXCIsXCJNYXJpbmVyXCIsXCJNYXJzXCIsXCJNYXN0ZXJcIixcIk1lbnRvclwiLFwiTWV0ZW9yXCIsXCJOb21hZFwiLFwiT3Jpb25cIixcblx0XHRcdFx0XCJQaGFudG9tXCIsXCJQcm9jdG9yXCIsXCJSYXBpZFwiLFwiUmVsaWFudFwiLFwiU2NpbWl0YXJcIixcIlNlbnRpbmVsXCIsXCJTaHJpa2VcIixcIlNwaXRmaXJlXCIsXCJTdGlybGluZ1wiLFwiVGVtcGVzdFwiLFxuXHRcdFx0XHRcIlRodW5kZXJib2x0XCIsXCJUb3JuYWRvXCIsXCJWZWdhXCIsXCJWaW5kaWNhdG9yXCIsXCJXaGlybHdpbmRcIixcblx0XHRcdFx0XCJXaWxkY2F0XCIsXCJaZXJvXCJcblx0XHRcdF0sXG5cdFx0XCJzdGFyZmxlZXRcIiA6IFtcblx0XHRcdFwiR3J5cGhvblwiLFwiVGh1bmRlcmNoaWxkXCIsXCJHZXJvbmltb1wiLFwiRGFrb3RhXCIsXCJTdW1taXRcIixcIkFtYmFzc2Fkb3JcIixcIkVudGVycHJpc2VcIixcIkV4Y2FsaWJ1clwiLFwiR2FuZGhpXCIsXG5cdFx0XHRcIlNvdmVyZWlnblwiLFwiQW5kcm9tZWRhXCIsXCJEcmFrZVwiLFwiSGVybWVzXCIsXCJBamF4XCIsXCJBcG9sbG9cIixcIkNsZW1lbnRcIixcIkdhZ2VcIixcIkJyYWRidXJ5XCIsXCJDZW50YXVyXCIsXCJBcm1zdHJvbmdcIixcIkNoYWxsZW5nZXJcIixcblx0XHRcdFwiQ2hleWVubmVcIixcIkNoaW1lcmFcIixcIlBvcnRsYW5kXCIsXCJFbmRlYXZvdXJcIixcIkNvbnN0ZWxsYXRpb25cIixcIkdldHR5c2J1cmdcIixcIkhhdGhhd2F5XCIsXCJNYWdlbGxhblwiLFwiU3RhcmdhemVyXCIsXCJWaWN0b3J5XCIsXG5cdFx0XHRcIkhvb2RcIixcIkludHJlcGlkXCIsXCJMZXhpbmd0b25cIixcIllvcmt0b3duXCIsXCJQZWdhc3VzXCIsXCJFeHBsb3JlclwiLFwiUmFuZ2VyXCIsXCJDYXJvbGluYVwiLFxuXHRcdFx0XCJEYWVkYWx1c1wiLFwiRXNzZXhcIixcIkxvdmVsbFwiLFwiQXJjb3NcIixcIktlbHZpblwiLFwiQ2Fpcm9cIixcIkNoYXJsZXN0b25cIixcIkV4Y2Vsc2lvclwiLFwiRnJlZHJpY2tzb25cIixcblx0XHRcdFwiTGFrb3RhXCIsXCJNZWxib3VybmVcIixcIlBhcmlzXCIsXCJSb29zZXZlbHRcIixcIkZyZWVkb21cIixcIlZveWFnZXJcIixcIkRhdW50bGVzc1wiLFwiTG9uZG9uXCIsXCJPZHlzc2V5XCIsXG5cdFx0XHRcIlJvYmluc29uXCIsXCJWZW50dXJlXCIsXCJQYXRoZmluZGVyXCIsIFwiVmVuZ2VhbmNlXCIsIFwiVmFuZ3VhcmRcIiwgXCJWYWxpYW50XCJcblx0XHRdLFxuXHRcdFwic2lsbHlcIiA6IFtcblx0XHRcdFwiQXBwbGVcIixcIkJlcnJ5XCIsXCJTY29vdFwiLFwiUHJhbmNlXCIsXCJGcnVpdFwiLFwiR2l6bW9cIixcIlBhbnN5XCIsXCJQdWRkaW5nXCIsXCJEb3ZlXCIsXCJTbGlwcGVyc1wiLFxuXHRcdFx0XCJTdW5yaXNlXCIsXCJXaW5kYnVtcGtpblwiLFwiU2hpbmVcIixcIkNoYXJpdHlcIixcIkZsdXR0ZXJpbmcmXCIsXCJCdWJibGVcIiwgXCJGbGFrZVwiLFwiQm9ubmV0XCIsXCJCbGlzc2Z1bCZcIixcblx0XHRcdFwiVGlja2xlXCIsIFwiQ2xhc3N5JlwiLCBcIlNwb29uXCIsIFwiTGVtb25cIiwgXCJSdW1ibGVcIiwgXCJTYXVjZVwiLCBcIkNvdHRvblwiLCBcIlBpbGxvd1wiLCBcIk1haG9nYW55JlwiLFxuXHRcdFx0XCJTcGFya3kmXCIsIFwiU3BhcmtsZVwiLCBcIkZpenpsZVwiLCBcIk1pc3RlciZcIiwgXCJTaGluZXkmXCIsIFwiRGFpbnR5JlwiLFwiUGVya3kmXCIsXCJQcmVjaW91c1wiLFwiRGFybGluZ1wiLFxuXHRcdFx0XCJDdWRkbGVcIixcIlNjcnVtcHRpb3VzXCIsXCJEYWludHkmXCIsXCJDbHVtc3kmXCIsXCJXaWdnbGVcIixcIlByaW5jZXNzXCJcblx0XHRdXG5cdH0sXG5cblx0XCJjcmV3XCIgOiB7XG5cdFx0XCJjaGFyX2xpbWl0XCIgOiAzMCxcblx0XHRcIm51bV93b3Jkc1wiIDogWzFdLFxuXHRcdFwicHJlZml4ZXNcIiA6W1wiXCJdLFxuXG5cdFx0XCJnZW5lcmFsXCIgOiBbXG5cdFx0XHRcIlNwb29uc1wiLCBcIkJsdWIgQmx1YlwiLCBcIkJsdXAgQmx1cFwiLCBcIlN0aWNrXCIsIFwiVGlwc1wiLCBcIk5pYnpcIiwgXCJOb3RjaFwiLFwiU2NvdHRcIixcIkd1bXBvXCIsXCJTY29vcHNcIixcIlN3YW1wc1wiLFxuXHRcdFx0XCJTcG9vbnNcIixcIlN0aWNrc1wiLFwiQnV0dGVyc1wiLFwiTXVsbGV0dFwiLFwiR2lsZXNcIixcIk5hcnRoXCIsXCJIYW1tZXJcIixcIkNha2VcIixcIktpcmJ5XCIsXCJTdGV2ZVwiLFwiS2luZ1wiLFwiQmVhclwiLFwiQnJhaW5cIixcblx0XHRcdFwiRW1tYVwiLFwiSmFtelwiLFwiQmF0bWFuXCIsXCJNZWxvblwiLFwiRnJhbnpcIixcIlR1cnRsZVwiLFwiSGF3a1wiLFwiRG9jXCIsXCJCYWNoXCIsXCJIdXR6XCIsXCJaYXNcIixcIldlc3RcIixcIk1hcmNvXCIsXCJEdWNrXCIsXCJCcmFrZXNcIixcblx0XHRcdFwiUGluelwiLFwiRnV6elwiLFwiQ2FzdGxlXCIsXCJBcnJvd1wiLFwiU2xpbmdzXCIsXCJGb3J0dW5lXCIsXCJNdWRcIixcIlNvY2tzXCIsXCJTaW1iYVwiLFwiQmFuZ1wiLFwiU2NhclwiLFwiRHJhZ29uXCIsXCJMZWFmXCIsXCJFbHNhXCIsXG5cdFx0XHRcIkNhdHNcIixcIk9waGVsaWFcIixcIlNub296ZVwiLFwiUnVtXCIsXCJGcm9kb1wiLFwiRnJha1wiLFwiRm94XCIsXCJGcmlzYmVlXCIsXCJSZWRcIixcIkh1Z3pcIixcIkhlZGdlXCIsXCJBbnRsZXJcIixcIlNwaWtlXCIsXCJDbGlwXCIsXG5cdFx0XHRcIkNhYmJhZ2VcIixcIkZhbmdcIixcIlpla2VcIixcIkJlYW5zXCIsXCJGZXJyZXRcIixcIlRhcmdldFwiLFwiU3RyYXdzXCIsXCJHcmFwZXNcIixcIkJvbHRcIixcIlpvb21cIixcIkNvb2tpZVwiLFwiTnVnZ2V0XCIsXCJMZW1vblwiLFxuXHRcdFx0XCJKZWxseVwiLFwiU2hhcmtcIixcIlBvb2ZcIixcIk1vY2hhXCIsXCJIYW5cIixcIk1pbmVydmFcIixcIlRpbWJlclwiLFwiU3ByaW5rbGVcIixcIkVybmVzdG9cIixcIkdvYXRcIixcIkhpcHBvXCJcblx0XHRdLFxuXHRcdFwibGFuaXVzXCIgIDogW1xuXHRcdFx0XCJBbHVtaW5pdW1cIixcIkJpc211dGhcIixcIkNocm9taXVtXCIsXCJDb2JhbHRcIixcIkNvcHBlclwiLFwiR2FsbGl1bVwiLFwiSXJvblwiLFwiTGVhZFwiLFwiTWFnbmVzaXVtXCIsXCJNZXJjdXJ5XCIsXG5cdFx0XHRcIk5pY2tlbFwiLFwiUGx1dG9uaXVtXCIsXCJSaG9kaXVtXCIsXCJTaWx2ZXJcIixcIlRpdGFuaXVtXCIsXCJUaW5cIixcIlVyYW5pdW1cIixcIlppbmNcIixcIlppcmNvbml1bVwiLFwiTGl0aGl1bVwiLFxuXHRcdFx0XCJEdXJhbHVtaW5cIixcIktyeXJvblwiLFwiTmljaHJvbWVcIixcIk1lZ2FsbGl1bVwiLFwiVml0YWxsaXVtXCIsXCJCcmFzc1wiLFwiR3VubWV0YWxcIixcIkVsZWN0cnVtXCIsXCJNb2x5YmRvY2hhbGtvc1wiLFxuXHRcdFx0XCJHYWxmZW5vbFwiLFwiR2FsaW5zdGFuXCIsXCJGZXJyb2Nocm9tZVwiLFwiU3BpZWdlbGVpc2VuXCIsXCJTdGVlbFwiLFwiQ3J1Y2libGVcIixcIkRhbWFzY3VzXCIsIFwiTWV0YWxCcm9cIlxuXHRcdF0sXG5cdFx0XCJyb2NrXCIgICAgOiBbXG5cdFx0XHRcIkJhc2FsdFwiLFwiR3Jhbml0ZVwiLFwiU2NvcmlhXCIsXCJDaGVydFwiLFwiR25laXNzXCIsXCJUYWxlXCIsXCJQeXJpdGVcIixcIk9ueXhcIiwgXCJCbG9vZHN0b25lXCIsIFwiU3B1cnJcIixcIlNrYWZ0YWZlbGxcIixcblx0XHRcdFwiVGhlYmVzXCIsXCJCb3JuaG9sbVwiLFwiVGl0YW5pdGVcIixcIkFzcGhhbHRcIixcIkdyYW5pdGVcIixcIkdyYXBoaXRlXCIsXCJEb2xvbWl0ZVwiLFwiTWFyYmxlXCIsXCJNaWNhXCIsXCJPbGl2aW5lXCIsXCJQdW1pY2VcIixcblx0XHRcdFwiUXVhcnR6XCIsXCJTYWx0XCIsXCJTbGF0ZVwiLFwiU2lsaWNhXCIsXCJUYWxjXCIsIFwiUm9ja0Jyb1wiXG5cdFx0XSxcblx0XHRcImNyeXN0YWxcIiA6IFtcblx0XHRcdFwiQW1iZXJcIixcIkFtZXRoeXN0XCIsXCJBbWV0cmluZVwiLFwiQXBhdGl0ZVwiLFwiQXp1cml0ZVwiLFwiQmVyeWxcIixcIkNocnlzb2NvbGxhXCIsXCJDaXRyaW5lXCIsXCJEaWFtb25kXCIsXCJFbWVyYWxkXCIsXG5cdFx0XHRcIkZsdW9yaXRlXCIsXCJHYXJuZXRcIixcIkhlbGlvdHJvcGVcIixcIkhlbWF0aXRlXCIsXCJIZXNzb25pdGVcIixcIklvbGl0ZVwiLFwiSmFkZVwiLFwiSmFzcGVyXCIsXCJLdW56aXRlXCIsXCJLeWFuaXRlXCIsXCJMYXp1bGlcIixcblx0XHRcdFwiTW9vbnN0b25lXCIsXCJPbnl4XCIsXCJPcGFsXCIsXCJQZWFybFwiLFwiUXVhcnR6XCIsXCJSaG9kb2xpdGVcIixcIlJ1YnlcIixcIlNhcHBoaXJlXCIsXCJTYXJkXCIsXCJTYXJkb255eFwiLFwiU3BpbmVsXCIsXCJTdW5zdG9uZVwiLFxuXHRcdFx0XCJUYW56YW5pdGVcIixcIlRvcGF6XCIsXCJaaXJjb25cIiwgXCJDcnlzdGFsQnJvXCJcblx0XHRdLFxuXHRcdFwiaHVtYW5cIiAgIDogW1xuXHRcdFx0XCJHcmlnZ3NcIiwgXCJCb2JlcnRcIiwgXCJSZWQgU2hpcnRcIiwgXCJKZWFuLUx1Y1wiLCBcIlBpY2FyZFwiLCBcIkJ1bGx5XCIsXCJEZWJiaWVcIixcIkR1c3R5XCIsXCJBcm1zdHJvbmdcIixcIkplbm5pbmdzXCIsXCJDaGVzdGVyXCIsXG5cdFx0XHRcIkZyYW5rbGluXCIsXCJQcmljZVwiLFwiUm9iZXJ0c29uXCIsXCJIZW5kZXJzb25cIixcIlN0ZXZlbnNcIixcIkplbmtpbnNcIixcIlBhbG1lclwiLCBcIktheWxlZVwiLFwiTWFsXCIsXCJXYXNoXCIsXCJJbmFyYVwiLFwiSmF5bmVcIixcblx0XHRcdFwiQ2FwJ25cIixcIldoZWF0b25cIixcIlBhdmVsXCIsXCJTY290dHlcIixcIlNwb2NrXCIsXCJMZWVcIixcIkthcmFcIixcIlNoYXJvblwiLFwiR2FpdXNcIixcIldpbGxcIlxuXHRcdF0sXG5cdFx0XCJzbHVnXCIgICAgOiBbXG5cdFx0XHRcIlNsdWdCcm9cIiwgXCJBdWRpdG9yZVwiLFwiRXppb1wiLFwiQm9vdGhcIixcIkJhbHRoYXNhclwiLFwiR2VyYXJkXCIsXCJHYXZyaWxvXCIsXCJQcmluY2lwXCIsXCJLdWJpc1wiLFwiSm96ZWZcIixcIkdhYmNpa1wiLCBcIkNvcmRheVwiLFxuXHRcdFx0XCJHb2RzZVwiLFwiWXVzdXBvdlwiLFwiT3N3YWxkXCIsXCJMdWdvdm9pXCIsXCJCcnV0dXNcIixcIkRpc21hc1wiLFwiR2VzdGFzXCIsXCJUdXJwaW5cIixcIlZpbGxvblwiLFwiUGVydWdnaWFcIixcIkFiYWduYWxlXCIsXCJNYXNvblwiLFxuXHRcdFx0XCJQYXluZVwiLCBcIkd1Z2FzaWFuXCIsIFwiU3BhZ2dpYXJpXCIsIFwiTW9ydFwiXG5cdFx0XSxcblx0XHRcImVuZ2lcIiAgICA6IFtcblx0XHRcdFwiRW5naUJyb1wiLCBcIk5lZXJcIixcIkdpblwiLFwiRWxpXCIsXCJDeWxvblwiLFwiU2l4XCIsXCJTZXZlblwiLFwiQml0XCIsXCJFbnpvXCIsXCJEb3plclwiLFwiS2F5bGVlXCIsXCJNZWdhYnl0ZVwiLFwiSGV4YWRlY2ltYWxcIixcblx0XHRcdFwiTW91c2VcIixcIkhhY2tcIixcIlNsYXNoXCIsXCJBbmRyb21lZGFcIixcIk51dHNcIixcIkJvbHRzXCIsXCJXcmVuY2hcIixcIlRoZUhhbW1lclwiLFwiT3B0aWNcIiwgXCIyOS1QXCIsIFwiTExvcmlcIiwgXCJISC0zNFwiLFxuXHRcdFx0XCJJQy0zNDlcIiwgXCJOR0MtNzEyOVwiLCBcIkRSLTZcIiwgXCJSQ1ctNDlcIiwgXCJHMTEtMi0wM1wiLCBcIk40NEZcIiwgXCJOLTcwXCIsIFwiTEgtOTVcIiwgXCJERU1MLTcxXCIsIFwiU05SLTA1NDAtNjkzXCIsIFwiTkktMzItRFwiLFxuXHRcdFx0XCJTTi0xOTg3YVwiLCBcIlJJLTM2XCIsIFwiRTAxMDItNzJcIlxuXHRcdF0sXG5cdFx0XCJtYW50aXNcIiAgOiBbXG5cdFx0XHRcIk1hbnRpc0Jyb1wiLCBcIkInZWdnaFwiLFwiQmJvJ25hdHNcIixcIkJib3Rob250XCIsXCJCb2lxdWFhdGhvXCIsXCJDYW1va2VsXCIsXCJDaGlnb3N0aGFudGFcIixcIkNob3Rob1wiLFwiQ2xpbmFjeWFcIixcIkN0ZWtlbGxsYWNsXCIsXG5cdFx0XHRcIkN5aXF1c2h1dGhhXCIsXCJDeXNhc2FydWdcIixcIkRhY2FybmduXCIsXCJEaG9nb3NodVwiLFwiRGhvdGhvc2NhXCIsXCJFbG90aGFhYXNcIixcIkVuby10aWxsXCIsXCJHJ2hhbGFzdGFsbFwiLFwiR2doYWxcIixcIkdodWJib250aG9tbVwiLFxuXHRcdFx0XCJHbm9saWxpXCIsXCJIYWFrZXBob2dcIixcIkhhbi11Z2dnZ29uYWtcIixcIkhhdGF0aG9hcmxpaFwiLFwiSHVsJ3NoYWtydGhhXCIsXCJJcXV0dGh1YXRsXCIsXCJJdGhhdGluLWhvdFwiLFwiSXRob3N0aGFcIixcIkwndXJ1Z290bGxoYVwiLFxuXHRcdFx0XCJMZSdsYXJ1YVwiLFwiTGl0aGxlZ2xvZ1wiLFwiTGxsb3NpdGFjXCIsXCJNJ3BoYW1vdGhhblwiLFwiTWEndWdvdGxcIixcIk1hYXRhcmFhc1wiLFwiTWlzaGF6b3NhY2h1XCIsXCJNb3RoYWxsemFcIixcIk4neWdnaG90XCIsXCJOdGgtYm9pXCIsXG5cdFx0XHRcIk9rZWtpaHVhYXRcIixcIk90bGFjbHpcIixcIlBob2tpaC1zaG9cIixcIlJoJ21hdWdobFwiLFwiUmxhY2hsaC1raWF0aFwiLFwiUmxvcmh1bGhhbG9nXCIsXCJSc2hvYWVrZVwiLFwiU2FndWFvaWdcIixcIlNvbSdzYVwiLFwiVGhvdGhhY1wiLFxuXHRcdFx0XCJVZ2dueWlib1wiLFwiVWdsaG8tbW9zaFwiLFwiWWF0bGxsaXNhYWxcIixcIlphJ3lvdGhhb1wiLFwiWm9ndXJuLXRhbW1cIixcIlpvdHUtbmRhdHNcIlxuXHRcdF0sXG5cdFx0XCJ6b2x0YW5cIiAgOiBbXG5cdFx0XHRcIkxvY2tlXCIsXCJFcGljdXJ1c1wiLFwiWmVub1wiLFwiQ29uZnVjaXVzXCIsXCJEZXNjYXJ0ZXNcIixcIkFyaXN0b3RsZVwiLFwiUGxhdG9cIixcIldhdHRzXCIsXCJSdXNzZWxsXCIsXCJIdW1lXCIsXCJQYXNjYWxcIixcblx0XHRcdFwiTmlldHpzY2hlXCIsXCJMZWlibml6XCIsXCJCb29sZVwiLFwiS2FudFwiLFwiTWFyeFwiLFwiR29kZWxcIixcIlB5dGhhZ29yYXNcIixcIlNvY3JhdGVzXCIsXCJIb2JiZXNcIixcIk5ld3RvblwiLFwiR2F1c3NcIixcIkV1bGVyXCIsXG5cdFx0XHRcIlJpZW1hbm5cIixcIkZlcm1hdFwiLFwiRXVjbGlkXCIsXCJMYWdyYW5nZVwiLFwiQXJjaGltZWRlc1wiLCBcIkVuZXJneUJyb1wiXG5cdFx0XVxuXG5cdH1cbn07XG5cblN0cmluZy5wcm90b3R5cGUuZW5kc1dpdGggPSBmdW5jdGlvbihzdWZmaXgpIHtcbiAgICByZXR1cm4gdGhpcy5pbmRleE9mKHN1ZmZpeCwgdGhpcy5sZW5ndGggLSBzdWZmaXgubGVuZ3RoKSAhPT0gLTE7XG59O1xuXG5cblxuXG52YXIgZ2VuZXJhdG9yID0gZnVuY3Rpb24odHlwZSwgbGlzdHMpe1xuXHR2YXIgZ2VuID0gbGliW3R5cGVdO1xuXHR2YXIgd29yZGxpc3QgPSBnZW4uZ2VuZXJhbDtcblx0Xy5lYWNoKGxpc3RzLCBmdW5jdGlvbihsaXN0KXtcblx0XHR3b3JkbGlzdCA9IF8udW5pb24od29yZGxpc3QsIGdlbltsaXN0XSlcblx0fSk7XG5cdHZhciBudW1fd29yZHMgPSBfLnNhbXBsZShnZW4ubnVtX3dvcmRzKTtcblxuXHR2YXIgZ2V0TmFtZSA9IGZ1bmN0aW9uKHIpe1xuXHRcdHZhciBudyA9IF8uc2FtcGxlKHdvcmRsaXN0KTtcblx0XHRyLnB1c2gobncpO1xuXHRcdC8vaWYgZW5kaW5nIGluICZcblx0XHRpZihudy5lbmRzV2l0aCgnJicpKXtcblx0XHRcdHJldHVybiBnZXROYW1lKHIpO1xuXHRcdH1cblx0XHQvL2lmIHN0YXJ0cyB3aXRoICYgb24gZmlyc3Rcblx0XHRpZihyLmxlbmd0aCA9PSAxICYmIHJbMF0uaW5kZXhPZignJicpID09IDApe1xuXHRcdFx0cmV0dXJuIGdldE5hbWUoW10pO1xuXHRcdH1cblx0XHQvL2lmIG92ZXIgY2hhcl9saW1pdFxuXHRcdGlmKHIuam9pbihcIiBcIikubGVuZ3RoID4gZ2VuLmNoYXJfbGltaXQpe1xuXHRcdFx0cmV0dXJuIGdldE5hbWUoW10pO1xuXHRcdH1cblx0XHRpZihyLmxlbmd0aCA8IG51bV93b3Jkcyl7XG5cdFx0XHRyZXR1cm4gZ2V0TmFtZShyKTtcblx0XHR9XG5cdFx0cmV0dXJuIHIuam9pbihcIiBcIikucmVwbGFjZSgvJi9nLCBcIlwiKTtcblx0fVxuXHR2YXIgcmVzdWx0ID0gZ2V0TmFtZShbXSk7XG5cblx0Ly9BZGQgcHJlZml4XG5cdGlmKHJlc3VsdC5sZW5ndGggPCBnZW4uY2hhcl9saW1pdCAtIDQpe1xuXHRcdHJlc3VsdCA9IF8uc2FtcGxlKGdlbi5wcmVmaXhlcykgKyByZXN1bHQ7XG5cdH1cblxuXHRyZXR1cm4gcmVzdWx0O1xuXG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGdlbmVyYXRvcjsiLCJ2YXIgU2hpcFNlbGVjdG9yID0gcmVxdWlyZSgnLi9zaGlwU2VsZWN0b3Ivc2hpcFNlbGVjdG9yLmpzJyk7XG52YXIgQ3Jld1NlbGVjdG9yID0gcmVxdWlyZSgnLi9jcmV3U2VsZWN0b3IvY3Jld1NlbGVjdG9yLmpzJyk7XG52YXIgU2hpcE5hbWUgPSByZXF1aXJlKCcuL3NoaXBOYW1lL3NoaXBOYW1lLmpzJyk7XG52YXIgU2hpcENyZXcgPSByZXF1aXJlKCcuL3NoaXBDcmV3L3NoaXBDcmV3LmpzJyk7XG5cbnZhciBjb25maWcgPSByZXF1aXJlKCcuL2RhdGEvY29uZmlnLmpzJyk7XG5cblxuXG5mdGxfaGIgPSB7XG5cblx0c3RhcnQgOiBmdW5jdGlvbigpe1xuXHRcdHZhciBzZWxmID0gdGhpcztcblxuXG5cdFx0dGhpcy5zaGlwSW1hZ2UgPSAkKCdbeG8tZWxlbWVudD1cInNoaXBJbWFnZVwiXScpO1xuXG5cdFx0dGhpcy5zaGlwU2VsZWN0b3IgPSBTaGlwU2VsZWN0b3IuY3JlYXRlKCk7XG5cdFx0dGhpcy5jcmV3U2VsZWN0b3IgPSBDcmV3U2VsZWN0b3IuY3JlYXRlKCk7XG5cdFx0dGhpcy5zaGlwTmFtZSAgICAgPSBTaGlwTmFtZS5jcmVhdGUoKTtcblx0XHR0aGlzLnNoaXBDcmV3ICAgICA9IFNoaXBDcmV3LmNyZWF0ZSgpO1xuXG5cblx0XHR0aGlzLnNoaXBTZWxlY3Rvci5vbignc2VsZWN0U2hpcCcsIGZ1bmN0aW9uKHNoaXBOYW1lLCB0eXBlKXtcblx0XHRcdHNlbGYuY2hhbmdlU2hpcChzaGlwTmFtZSwgdHlwZSk7XG5cdFx0fSk7XG5cblx0XHR0aGlzLmNyZXdTZWxlY3Rvci5vbignc2VsZWN0Q3JldycsIGZ1bmN0aW9uKHJhY2VOYW1lKXtcblx0XHRcdHNlbGYuc2hpcENyZXcuYWRkKHJhY2VOYW1lKTtcblx0XHR9KTtcblxuXHRcdHRoaXMuY2hhbmdlU2hpcCgna2VzdHJhbCcsICd0eXBlQScpO1xuXHRcdHJldHVybiB0aGlzO1xuXHR9LFxuXG5cdGNoYW5nZVNoaXAgOiBmdW5jdGlvbihzaGlwTmFtZSwgdHlwZSl7XG5cdFx0dmFyIHNlbGYgPSB0aGlzO1xuXG5cdFx0dmFyIHNoaXBEYXRhID0gY29uZmlnLnNoaXBzW3NoaXBOYW1lXVt0eXBlXTtcblx0XHR0aGlzLnNoaXBJbWFnZS5hdHRyKCdzcmMnLCBzaGlwRGF0YS5pbWFnZSk7XG5cblx0XHR0aGlzLnNoaXBOYW1lLmdlbmVyYXRlKCk7XG5cblx0XHR0aGlzLnNoaXBDcmV3LnJlbW92ZUFsbCgpO1xuXHRcdF8uZWFjaChzaGlwRGF0YS5jcmV3LCBmdW5jdGlvbihyYWNlTmFtZSl7XG5cdFx0XHRzZWxmLnNoaXBDcmV3LmFkZChyYWNlTmFtZSk7XG5cdFx0fSk7XG5cblx0XHQvL3VwZGF0ZSBjcmV3XG5cdFx0Ly9nZW4gbmV3IG5hbWVcblx0XHRyZXR1cm4gdGhpcztcblx0fSxcblxuXG5cblxufVxuXG4iLCI7KGZ1bmN0aW9uKCl7XHJcblx0Ly9TaGltIGZvciBPYmplY3QuY3JlYXRlLCBpbiBjYXNlIHRoZSBicm93c2VyIGRvZXNuJ3Qgc3VwcG9ydCBpdFxyXG5cdE9iamVjdC5jcmVhdGUgPSBPYmplY3QuY3JlYXRlIHx8IGZ1bmN0aW9uKHByb3RvKSB7XHJcblx0XHRmdW5jdGlvbiBPYmooKXt9O1xyXG5cdFx0T2JqLnByb3RvdHlwZSA9IHByb3RvO1xyXG5cdFx0cmV0dXJuIG5ldyBPYmooKTtcclxuXHR9O1xyXG5cdHZhciBhcmNoZXR5cGVfRXZlbnRDb3VudCA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpO1xyXG5cclxuXHRBcmNoZXR5cGUgPSBhcmNoZXR5cGUgPXtcclxuXHRcdGluaXRpYWxpemUgOiBmdW5jdGlvbigpe1xyXG5cdFx0XHRyZXR1cm4gdGhpcztcclxuXHRcdH0sXHJcblx0XHRjcmVhdGUgOiBmdW5jdGlvbihhcmdzKXtcclxuXHRcdFx0dmFyIG9iaiA9IHRoaXMuZXh0ZW5kKCk7XHJcblx0XHRcdG9iai5kZWVwKCdpbml0aWFsaXplJykuYXBwbHkob2JqLCBhcmd1bWVudHMpO1xyXG5cdFx0XHRvYmoudHJpZ2dlcignY3JlYXRlZCcsIG9iaik7XHJcblx0XHRcdHJldHVybiBvYmo7XHJcblx0XHR9LFxyXG5cdFx0ZXh0ZW5kIDogZnVuY3Rpb24obWV0aG9kcyl7XHJcblx0XHRcdHZhciBvYmogPSBPYmplY3QuY3JlYXRlKHRoaXMpO1xyXG5cdFx0XHRvYmouZXZlbnRzID0gb2JqLl9ldmVudHMuYmluZCh7c3RvcmVkRXZlbnRzIDogW119KTtcclxuXHRcdFx0cmV0dXJuIG9iai5taXhpbihtZXRob2RzKTtcclxuXHRcdH0sXHJcblx0XHRtaXhpbiA6IGZ1bmN0aW9uKG1ldGhvZHMpe1xyXG5cdFx0XHRmb3IodmFyIG1ldGhvZE5hbWUgaW4gbWV0aG9kcyl7XHJcblx0XHRcdFx0dGhpc1ttZXRob2ROYW1lXSA9IG1ldGhvZHNbbWV0aG9kTmFtZV07XHJcblx0XHRcdH1cclxuXHRcdFx0cmV0dXJuIHRoaXM7XHJcblx0XHR9LFxyXG5cdFx0ZGVlcCA6IGZ1bmN0aW9uKG1ldGhvZCl7XHJcblx0XHRcdHZhciBzZWxmID0gdGhpcztcclxuXHRcdFx0dmFyIGRlZXAgPSBmdW5jdGlvbigpe1xyXG5cdFx0XHRcdGlmKHRoaXNbbWV0aG9kXSkgZGVlcC5hcHBseShPYmplY3QuZ2V0UHJvdG90eXBlT2YodGhpcyksIGFyZ3VtZW50cyk7XHJcblx0XHRcdFx0aWYodGhpcy5oYXNPd25Qcm9wZXJ0eShtZXRob2QpKSByZXR1cm4gdGhpc1ttZXRob2RdLmFwcGx5KHNlbGYsIGFyZ3VtZW50cyk7XHJcblx0XHRcdH07XHJcblx0XHRcdHJldHVybiBkZWVwLmJpbmQodGhpcyk7XHJcblx0XHR9LFxyXG5cclxuXHRcdC8vRXZlbnRzXHJcblx0XHRfZXZlbnRzIDogZnVuY3Rpb24oc2V0LCBhZGQpe1xyXG5cdFx0XHRpZihzZXQpIHRoaXMuc3RvcmVkRXZlbnRzID0gc2V0O1xyXG5cdFx0XHRpZihhZGQpIHRoaXMuc3RvcmVkRXZlbnRzLnB1c2goYWRkKTtcclxuXHRcdFx0cmV0dXJuIHRoaXMuc3RvcmVkRXZlbnRzO1xyXG5cdFx0fSxcclxuXHRcdG9uIDogZnVuY3Rpb24oZXZlbnROYW1lLCBldmVudCwgb25jZSl7XHJcblx0XHRcdHRoaXMuZXZlbnRzKGZhbHNlLCB7XHJcblx0XHRcdFx0aWQgICAgOiArK2FyY2hldHlwZV9FdmVudENvdW50LFxyXG5cdFx0XHRcdG5hbWUgIDogZXZlbnROYW1lLFxyXG5cdFx0XHRcdGZuICAgIDogZXZlbnQsXHJcblx0XHRcdFx0ZmlyZU9uY2UgIDogb25jZSB8fCBmYWxzZVxyXG5cdFx0XHR9KTtcclxuXHRcdFx0cmV0dXJuIGFyY2hldHlwZV9FdmVudENvdW50O1xyXG5cdFx0fSxcclxuXHRcdG9uY2UgOiBmdW5jdGlvbihldmVudE5hbWUsIGV2ZW50KXtcclxuXHRcdFx0cmV0dXJuIHRoaXMub24oZXZlbnROYW1lLCBldmVudCwgdHJ1ZSk7XHJcblx0XHR9LFxyXG5cdFx0dHJpZ2dlciA6IGZ1bmN0aW9uKGV2ZW50SWRlbnRpZmllcil7XHJcblx0XHRcdHZhciBldnRzID0gdGhpcy5ldmVudHMoKTtcclxuXHRcdFx0dmFyIGFyZ3MgPSBbXS5zbGljZS5hcHBseShhcmd1bWVudHMpLnNsaWNlKDEpO1xyXG5cdFx0XHRmb3IodmFyIGkgaW4gZXZ0cyl7XHJcblx0XHRcdFx0dmFyIGV2dCA9IGV2dHNbaV07XHJcblx0XHRcdFx0aWYoZXZlbnRJZGVudGlmaWVyID09IGV2dC5pZCB8fCBldmVudElkZW50aWZpZXIgPT0gZXZ0Lm5hbWUgfHwgZXZ0Lm5hbWUgPT09ICcqJyl7XHJcblx0XHRcdFx0XHRldnQuZm4uYXBwbHkodGhpcywgYXJncyk7XHJcblx0XHRcdFx0XHRpZihldnQuZmlyZU9uY2UpIHRoaXMub2ZmKGV2dC5pZCk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHRcdHJldHVybiB0aGlzO1xyXG5cdFx0fSxcclxuXHRcdG9mZiA6IGZ1bmN0aW9uKGV2ZW50SWRlbnRpZmllcil7XHJcblx0XHRcdC8vQ2xlYXIgdGhlIGV2ZW50cyBpZiBub3RoaW5nIHByb3ZpZGVkXHJcblx0XHRcdGlmKCFldmVudElkZW50aWZpZXIpIHRoaXMuZXZlbnRzKFtdKTtcclxuXHRcdFx0dmFyIHJlbWFpbmluZ0V2ZW50cyA9IFtdXHJcblx0XHRcdGZvcih2YXIgaSBpbiB0aGlzLmV2ZW50cygpKXtcclxuXHRcdFx0XHR2YXIgZXZ0ID0gdGhpcy5ldmVudHMoKVtpXTtcclxuXHRcdFx0XHRpZihldmVudElkZW50aWZpZXIgIT0gZXZ0LmlkICYmIGV2ZW50SWRlbnRpZmllciAhPSBldnQubmFtZSl7XHJcblx0XHRcdFx0XHRyZW1haW5pbmdFdmVudHMucHVzaChldnQpO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0XHR0aGlzLmV2ZW50cyhyZW1haW5pbmdFdmVudHMpO1xyXG5cdFx0XHRyZXR1cm4gdGhpcztcclxuXHRcdH1cclxuXHR9O1xyXG59KSgpO1xyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBhcmNoZXR5cGU7IiwidmFyIGFyY2hldHlwZSA9IHJlcXVpcmUoJy4vYXJjaGV0eXBlJyk7XHJcblxyXG47KGZ1bmN0aW9uKCl7XHJcblx0dmFyIG1hcCA9IGZ1bmN0aW9uKG9iaiwgZm4pe1xyXG5cdFx0dmFyIHJlc3VsdCA9IFtdO1xyXG5cdFx0Zm9yKHZhciBrZXkgaW4gb2JqKXtcclxuXHRcdFx0aWYob2JqLmhhc093blByb3BlcnR5KGtleSkpeyByZXN1bHQucHVzaChmbihvYmpba2V5XSwga2V5KSk7IH1cclxuXHRcdH1cclxuXHRcdHJldHVybiByZXN1bHQ7XHJcblx0fTtcclxuXHR2YXIgcmVkdWNlID0gZnVuY3Rpb24ob2JqLCBmbiwgbWVtbyl7XHJcblx0XHRmb3IodmFyIGtleSBpbiBvYmope1xyXG5cdFx0XHRpZihvYmouaGFzT3duUHJvcGVydHkoa2V5KSl7IG1lbW8gPSBmbihtZW1vLCBvYmpba2V5XSwga2V5KTsgfVxyXG5cdFx0fVxyXG5cdFx0cmV0dXJuIG1lbW87XHJcblx0fTtcclxuXHR2YXIgZXh0ZW5kID0gZnVuY3Rpb24oKXtcclxuXHRcdHZhciByZXN1bHQgPSB7fTtcclxuXHRcdGZvcih2YXIgaSBpbiBhcmd1bWVudHMpe1xyXG5cdFx0XHR2YXIgb2JqID0gYXJndW1lbnRzW2ldO1xyXG5cdFx0XHRmb3IodmFyIHByb3BOYW1lIGluIG9iail7XHJcblx0XHRcdFx0aWYob2JqLmhhc093blByb3BlcnR5KHByb3BOYW1lKSl7IHJlc3VsdFtwcm9wTmFtZV0gPSBvYmpbcHJvcE5hbWVdOyB9XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHRcdHJldHVybiByZXN1bHQ7XHJcblx0fTtcclxuXHJcblx0dmFyIHhvX2FqYXggPSBmdW5jdGlvbihzZWxmLCBtZXRob2QsIGNhbGxiYWNrLCBkYXRhKXtcclxuXHRcdGNhbGxiYWNrID0gY2FsbGJhY2sgfHwgZnVuY3Rpb24oKXt9O1xyXG5cdFx0ZGF0YSAgICAgPSBleHRlbmQoc2VsZi50b0pTT04oKSwgZGF0YSk7XHJcblx0XHR2YXIgdHlwZU1hcCA9IHtcclxuXHRcdFx0J2ZldGNoJyAgOiAnR0VUJyxcclxuXHRcdFx0J3NhdmUnICAgOiBzZWxmLmlkID8gJ1BVVCcgOiAnUE9TVCcsXHJcblx0XHRcdCdkZXN0cm95JyA6ICdERUxFVEUnXHJcblx0XHR9O1xyXG5cdFx0dmFyIGRvbmUgPSBmdW5jdGlvbihyZXMpe1xyXG5cdFx0XHRzZWxmLnNldChyZXMpO1xyXG5cdFx0XHRzZWxmLnRyaWdnZXIobWV0aG9kLCBzZWxmKTtcclxuXHRcdFx0cmV0dXJuIGNhbGxiYWNrKHVuZGVmaW5lZCwgcmVzKTtcclxuXHRcdH1cclxuXHJcblx0XHRzZWxmLnRyaWdnZXIoJ2JlZm9yZTonK21ldGhvZCwgc2VsZik7XHJcblx0XHRpZighc2VsZi5VUkwpIHJldHVybiBkb25lKGRhdGEpO1xyXG5cclxuXHRcdCQuYWpheCh7XHJcblx0XHRcdHVybCAgICAgOiBzZWxmLlVSTCgpICsgKHNlbGYuaWQgPyBcIi9cIiArIHNlbGYuaWQgOiBcIlwiKSxcclxuXHRcdFx0dHlwZSAgICA6IHR5cGVNYXBbbWV0aG9kXSxcclxuXHRcdFx0ZGF0YSAgICA6IGRhdGEsXHJcblx0XHRcdGVycm9yICAgOiBmdW5jdGlvbihyZXEpe1xyXG5cdFx0XHRcdHNlbGYudHJpZ2dlcignZXJyb3InLCBzZWxmLCByZXEucmVzcG9uc2VUZXh0KTtcclxuXHRcdFx0XHRyZXR1cm4gY2FsbGJhY2socmVxLnJlc3BvbnNlVGV4dCk7XHJcblx0XHRcdH0sXHJcblx0XHRcdHN1Y2Nlc3MgOiBmdW5jdGlvbihyZXMpe1xyXG5cdFx0XHRcdGRvbmUocmVzKTtcclxuXHRcdFx0XHRyZXR1cm4gdGhpcztcclxuXHRcdFx0fSxcclxuXHRcdH0pXHJcblx0fTtcclxuXHJcblx0eG8gPSB7fTtcclxuXHJcblx0Ly9Db25maWdcclxuXHR4by5lbGVtZW50V3JhcHBlciA9ICQgfHwgZnVuY3Rpb24oZSl7cmV0dXJuIGU7fTtcclxuXHR4by51c2VEYXRhUHJlZml4ID0gZmFsc2U7XHJcblxyXG5cclxueG8udmlldyA9IEFyY2hldHlwZS5leHRlbmQoe1xyXG5cdHZpZXcgICAgICA6IHVuZGVmaW5lZCxcclxuXHRzY2hlbWF0aWMgOiB1bmRlZmluZWQsXHJcblxyXG5cdGluaXRpYWxpemUgOiBmdW5jdGlvbihtb2RlbCl7XHJcblx0XHR2YXIgc2VsZiA9IHRoaXM7XHJcblx0XHR0aGlzLm1vZGVsID0gbW9kZWw7XHJcblx0XHR0aGlzLmRvbSA9IHt9O1xyXG5cdFx0aWYodGhpcy52aWV3KSB0aGlzLm9uY2UoJ2NyZWF0ZWQnLCBmdW5jdGlvbigpe1xyXG5cdFx0XHRzZWxmLnNldFZpZXcoc2VsZi52aWV3KTtcclxuXHRcdH0pO1xyXG5cdFx0cmV0dXJuIHRoaXM7XHJcblx0fSxcclxuXHRzZXRWaWV3OiBmdW5jdGlvbih2aWV3KXtcclxuXHRcdGlmKHR5cGVvZiB2aWV3ID09PSAnZnVuY3Rpb24nKXtcclxuXHRcdFx0dmlldyA9IHZpZXcodGhpcy5tb2RlbCk7XHJcblx0XHR9XHJcblx0XHRpZih0eXBlb2YgdmlldyA9PT0gJ3N0cmluZycpe1xyXG5cdFx0XHR2aWV3ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignW3hvLXZpZXc9XCInICsgdmlldyArICdcIl0nKTtcclxuXHRcdH1cclxuXHRcdHRoaXMuZG9tLnZpZXcgPSB2aWV3O1xyXG5cdFx0aWYoIXRoaXMuZG9tLnZpZXcpe3Rocm93ICdYTzogVmlldyB3YXMgbm90IHNldDogJyArIHZpZXc7fVxyXG5cdFx0dGhpcy5nZXRFbGVtZW50cygpO1xyXG5cdFx0dGhpcy5kb20udmlldyA9ICQodGhpcy5kb20udmlldyk7XHJcblx0XHR0aGlzLnRyaWdnZXIoJ2JlZm9yZTpyZW5kZXInKTtcclxuXHRcdHRoaXMucmVuZGVyKCk7XHJcblx0XHR0aGlzLnRyaWdnZXIoJ3JlbmRlcicpO1xyXG5cdFx0cmV0dXJuIHRoaXM7XHJcblx0fSxcclxuXHRnZXRFbGVtZW50czogZnVuY3Rpb24oKXtcclxuXHRcdHZhciBlbGVtZW50cyA9IHRoaXMuZG9tLnZpZXcucXVlcnlTZWxlY3RvckFsbCgnW3hvLWVsZW1lbnRdJyk7XHJcblx0XHRmb3IodmFyIGk9MDtpPGVsZW1lbnRzLmxlbmd0aDtpKyspe1xyXG5cdFx0XHR0aGlzLmRvbVtlbGVtZW50c1tpXS5nZXRBdHRyaWJ1dGUoXCJ4by1lbGVtZW50XCIpXSA9ICQoZWxlbWVudHNbaV0pO1xyXG5cdFx0fVxyXG5cdFx0cmV0dXJuIHRoaXM7XHJcblx0fSxcclxuXHJcblx0cHJlcGVuZFRvICA6IGZ1bmN0aW9uKHRhcmdldCl7XHJcblx0XHRyZXR1cm4gdGhpcy5hcHBlbmRUbyh0YXJnZXQsIHRydWUpO1xyXG5cdH0sXHJcblx0YXBwZW5kVG8gOiBmdW5jdGlvbih0YXJnZXQsIHByZXBlbmQpe1xyXG5cdFx0aWYoIXRhcmdldCkgICAgICAgICB0aHJvdyAnWE86IENvdWxkIG5vdCBmaW5kIHRhcmdldCc7XHJcblx0XHRpZighdGhpcy5zY2hlbWF0aWMpIHRocm93ICdYTzogVGVtcGxhdGUgbm90IHNldCc7XHJcblx0XHR2YXIgbmV3VmlldyA9ICQoJCgnW3hvLXNjaGVtYXRpYz1cIicgKyB0aGlzLnNjaGVtYXRpYyArICdcIl0nKS5odG1sKCkpXHJcblx0XHR0YXJnZXQuYXBwZW5kKG5ld1ZpZXcpXHJcblxyXG5cdFx0dGhpcy5zZXRWaWV3KG5ld1ZpZXdbMF0pO1xyXG5cdFx0cmV0dXJuIHRoaXM7XHJcblx0fSxcclxuXHJcblx0cmVuZGVyIDogZnVuY3Rpb24oKXtcclxuXHRcdHJldHVybiB0aGlzO1xyXG5cdH1cclxufSk7XHJcblxyXG5cdC8qXHJcblx0XHRNT0RFTFxyXG5cdCAqL1xyXG5cdHhvLm1vZGVsID0gQXJjaGV0eXBlLmV4dGVuZCh7XHJcblx0XHRVUkwgOiB1bmRlZmluZWQsXHJcblxyXG5cdFx0aW5pdGlhbGl6ZSA6IGZ1bmN0aW9uKG9iail7XHJcblx0XHRcdHRoaXMuc2V0KG9iaik7XHJcblx0XHRcdHRoaXMub24oJ2Rlc3Ryb3knLCB0aGlzLm9mZik7XHJcblx0XHRcdHJldHVybiB0aGlzO1xyXG5cdFx0fSxcclxuXHRcdHNldCA6IGZ1bmN0aW9uKGtleSwgdmFsdWUpe1xyXG5cdFx0XHR2YXIgY2hhbmdlcyA9IHt9O1xyXG5cdFx0XHRjaGFuZ2VzW2tleV0gPSB2YWx1ZTtcclxuXHRcdFx0dmFyIGhhc0NoYW5nZXMgPSBmYWxzZTtcclxuXHRcdFx0aWYodHlwZW9mIGtleSA9PT0gJ29iamVjdCcpIGNoYW5nZXMgPSBrZXk7XHJcblxyXG5cdFx0XHRmb3IodmFyIGtleSBpbiBjaGFuZ2VzKXtcclxuXHRcdFx0XHR2YXIgdmFsID0gY2hhbmdlc1trZXldO1xyXG5cdFx0XHRcdGlmKHRoaXNba2V5XSAhPT0gdmFsKXtcclxuXHRcdFx0XHRcdHRoaXNba2V5XSA9IHZhbDtcclxuXHRcdFx0XHRcdGhhc0NoYW5nZXMgPSB0cnVlO1xyXG5cdFx0XHRcdFx0dGhpcy50cmlnZ2VyKCdjaGFuZ2U6JyArIGtleSwgdmFsKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdFx0aWYoaGFzQ2hhbmdlcykgdGhpcy50cmlnZ2VyKCdjaGFuZ2UnKTtcclxuXHRcdFx0cmV0dXJuIHRoaXM7XHJcblx0XHR9LFxyXG5cdFx0b25DaGFuZ2UgOiBmdW5jdGlvbihhdHRyTmFtZSwgZXZ0KXtcclxuXHRcdFx0aWYodHlwZW9mIGF0dHJOYW1lID09PSAnb2JqZWN0Jyl7XHJcblx0XHRcdFx0Zm9yKHZhciBrIGluIGF0dHJOYW1lKXtcclxuXHRcdFx0XHRcdHRoaXMub25DaGFuZ2UoaywgYXR0ck5hbWVba10pO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRyZXR1cm4gdGhpcztcclxuXHRcdFx0fVxyXG5cdFx0XHR0aGlzLm9uKCdjaGFuZ2U6JyArIGF0dHJOYW1lLCBldnQpO1xyXG5cdFx0XHRldnQodGhpc1thdHRyTmFtZV0pO1xyXG5cdFx0XHRyZXR1cm4gdGhpcztcclxuXHRcdH0sXHJcblx0XHR0b0pTT04gOiBmdW5jdGlvbigpe1xyXG5cdFx0XHRyZXR1cm4gSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeSh0aGlzKSk7XHJcblx0XHR9LFxyXG5cdFx0c2F2ZSA6IGZ1bmN0aW9uKGRhdGEsIGNhbGxiYWNrKXtcclxuXHRcdFx0aWYodHlwZW9mIGRhdGEgPT09ICdmdW5jdGlvbicpIGNhbGxiYWNrID0gZGF0YTtcclxuXHRcdFx0eG9fYWpheCh0aGlzLCAnc2F2ZScsIGNhbGxiYWNrLCBkYXRhKTtcclxuXHRcdFx0cmV0dXJuIHRoaXM7XHJcblx0XHR9LFxyXG5cdFx0ZmV0Y2ggOiBmdW5jdGlvbihjYWxsYmFjayl7XHJcblx0XHRcdHhvX2FqYXgodGhpcywgJ2ZldGNoJywgY2FsbGJhY2spO1xyXG5cdFx0XHRyZXR1cm4gdGhpcztcclxuXHRcdH0sXHJcblx0XHRkZXN0cm95IDogZnVuY3Rpb24oY2FsbGJhY2spe1xyXG5cdFx0XHR4b19hamF4KHRoaXMsICdkZXN0cm95JywgY2FsbGJhY2spO1xyXG5cdFx0XHRyZXR1cm4gdGhpcztcclxuXHRcdH1cclxuXHR9KSxcclxuXHJcblxyXG5cdC8qXHJcblx0XHRDT0xMRUNUSU9OXHJcblx0ICovXHJcblx0eG8uY29sbGVjdGlvbiA9IEFyY2hldHlwZS5leHRlbmQoe1xyXG5cdFx0VVJMIDogdW5kZWZpbmVkLFxyXG5cdFx0bW9kZWwgIDogeG8ubW9kZWwsXHJcblx0XHRtb2RlbHMgOiBbXSxcclxuXHJcblx0XHRpbml0aWFsaXplIDogZnVuY3Rpb24ob2Jqcyl7XHJcblx0XHRcdHRoaXMuc2V0KG9ianMpO1xyXG5cdFx0XHR0aGlzLlVSTCAgICAgICA9IHRoaXMubW9kZWwuVVJMIHx8IHRoaXMuVVJMO1xyXG5cdFx0XHR0aGlzLm1vZGVsLlVSTCA9IHRoaXMubW9kZWwuVVJMIHx8IHRoaXMuVVJMO1xyXG5cclxuXHRcdFx0cmV0dXJuIHRoaXM7XHJcblx0XHR9LFxyXG5cdFx0c2V0IDogZnVuY3Rpb24ob2Jqcyl7XHJcblx0XHRcdHRoaXMubW9kZWxzID0gW107XHJcblx0XHRcdGZvcih2YXIgaSBpbiBvYmpzKXtcclxuXHRcdFx0XHR0aGlzLmFkZChvYmpzW2ldKVxyXG5cdFx0XHR9XHJcblx0XHRcdHJldHVybiB0aGlzO1xyXG5cdFx0fSxcclxuXHRcdGdldCA6IGZ1bmN0aW9uKGlkKXtcclxuXHRcdFx0cmV0dXJuIHJlZHVjZSh0aGlzLm1vZGVscywgZnVuY3Rpb24ocmVzdWx0LCBtb2RlbCl7XHJcblx0XHRcdFx0aWYobW9kZWwuaWQgPT09IGlkKSByZXN1bHQgPSBtb2RlbDtcclxuXHRcdFx0XHRyZXR1cm4gcmVzdWx0O1xyXG5cdFx0XHR9KTtcclxuXHRcdH0sXHJcblx0XHRyZW1vdmUgOiBmdW5jdGlvbihhcmcpe1xyXG5cdFx0XHRpZCA9IGFyZy5pZCB8fCBhcmc7IC8vaGFuZGxlcyBtb2RlbHMgYW5kIHJhdyBpZHNcclxuXHRcdFx0Zm9yKHZhciBpIGluIHRoaXMubW9kZWxzKXtcclxuXHRcdFx0XHRpZihpZCA9PSB0aGlzLm1vZGVsc1tpXS5pZCl7XHJcblx0XHRcdFx0XHR0aGlzLnRyaWdnZXIoJ3JlbW92ZScsIHRoaXMubW9kZWxzW2ldKTtcclxuXHRcdFx0XHRcdHRoaXMubW9kZWxzLnNwbGljZShpLDEpO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0XHRyZXR1cm4gdGhpcztcclxuXHRcdH0sXHJcblx0XHRhZGQgOiBmdW5jdGlvbihvYmope1xyXG5cdFx0XHRpZighdGhpcy5tb2RlbC5pc1Byb3RvdHlwZU9mKG9iaikpIG9iaiA9IHRoaXMubW9kZWwuY3JlYXRlKG9iaik7XHJcblx0XHRcdG9iai5vbignZGVzdHJveScsIGZ1bmN0aW9uKG9iail7XHJcblx0XHRcdFx0dGhpcy5yZW1vdmUob2JqKTtcclxuXHRcdFx0fS5iaW5kKHRoaXMpKTtcclxuXHJcblx0XHRcdHRoaXMubW9kZWxzLnB1c2gob2JqKTtcclxuXHRcdFx0dGhpcy50cmlnZ2VyKCdhZGQnLCBvYmopO1xyXG5cdFx0XHRyZXR1cm4gb2JqO1xyXG5cdFx0fSxcclxuXHRcdGVhY2ggOiBmdW5jdGlvbihmbil7XHJcblx0XHRcdHJldHVybiBtYXAodGhpcy5tb2RlbHMsIGZuKTtcclxuXHRcdH0sXHJcblx0XHR0b0pTT04gOiBmdW5jdGlvbigpe1xyXG5cdFx0XHRyZXR1cm4gSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeSh0aGlzLm1vZGVscykpO1xyXG5cdFx0fSxcclxuXHJcblx0XHRmZXRjaCA6IGZ1bmN0aW9uKGNhbGxiYWNrKXtcclxuXHRcdFx0eG9fYWpheCh0aGlzLCAnZmV0Y2gnLCBjYWxsYmFjayk7XHJcblx0XHRcdHJldHVybiB0aGlzO1xyXG5cdFx0fSxcclxuXHRcdGRlc3Ryb3kgOiBmdW5jdGlvbihjYWxsYmFjayl7XHJcblx0XHRcdHZhciBjb3VudCA9IHRoaXMubW9kZWxzLmxlbmd0aCwgc2VsZiA9IHRoaXM7XHJcblx0XHRcdHNlbGYudHJpZ2dlcignYmVmb3JlOmRlc3Ryb3knKTtcclxuXHRcdFx0bWFwKHRoaXMubW9kZWxzLGZ1bmN0aW9uKG1vZGVsKXtcclxuXHRcdFx0XHRtb2RlbC5kZXN0cm95KGZ1bmN0aW9uKCl7XHJcblx0XHRcdFx0XHRpZigtLWNvdW50ID09PSAwKXtcclxuXHRcdFx0XHRcdFx0c2VsZi50cmlnZ2VyKCdkZXN0cm95Jyk7XHJcblx0XHRcdFx0XHRcdGNhbGxiYWNrICYmIGNhbGxiYWNrKCk7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fSk7XHJcblx0XHRcdH0pO1xyXG5cdFx0XHRyZXR1cm4gdGhpcztcclxuXHRcdH0sXHJcblx0XHRzYXZlIDogZnVuY3Rpb24oY2FsbGJhY2spe1xyXG5cdFx0XHR2YXIgY291bnQgPSB0aGlzLm1vZGVscy5sZW5ndGgsIHNlbGYgPSB0aGlzO1xyXG5cdFx0XHRzZWxmLnRyaWdnZXIoJ2JlZm9yZTpzYXZlJyk7XHJcblx0XHRcdG1hcCh0aGlzLm1vZGVscyxmdW5jdGlvbihtb2RlbCl7XHJcblx0XHRcdFx0bW9kZWwuc2F2ZShmdW5jdGlvbigpe1xyXG5cdFx0XHRcdFx0aWYoLS1jb3VudCA9PT0gMCl7XHJcblx0XHRcdFx0XHRcdHNlbGYudHJpZ2dlcignc2F2ZScpO1xyXG5cdFx0XHRcdFx0XHRjYWxsYmFjayAmJiBjYWxsYmFjaygpO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH0pO1xyXG5cdFx0XHR9KTtcclxuXHRcdFx0cmV0dXJuIHRoaXM7XHJcblx0XHR9LFxyXG5cdH0pO1xyXG5cclxuXHJcblx0LypcclxuXHRcdFJvdXRlclxyXG5cdCovXHJcblx0eG8ucm91dGVyID0gQXJjaGV0eXBlLmV4dGVuZCh7XHJcblx0XHRyb3V0ZXMgOiB7fSxcclxuXHRcdGluaXRpYWxpemUgOiBmdW5jdGlvbihyb3V0ZXMpe1xyXG5cdFx0XHRtYXAocm91dGVzLCBmdW5jdGlvbihmbiwgcGF0aCl7dGhpcy5hZGQocGF0aCxmbil9LmJpbmQodGhpcykpO1xyXG5cdFx0XHR3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignaGFzaGNoYW5nZScsIHRoaXMucm91dGUpO1xyXG5cdFx0XHR3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbG9hZCcsIHRoaXMucm91dGUpO1xyXG5cdFx0XHRyZXR1cm4gdGhpcztcclxuXHRcdH0sXHJcblx0XHRuYXZpZ2F0ZSA6IGZ1bmN0aW9uKHBhdGgpe1xyXG5cdFx0XHR3aW5kb3cubG9jYXRpb24uaGFzaCA9IHBhdGg7XHJcblx0XHRcdHJldHVybiB0aGlzO1xyXG5cdFx0fSxcclxuXHRcdGFkZCA6IGZ1bmN0aW9uKHBhdGgsIGZuKXtcclxuXHRcdFx0cGF0aCA9IHBhdGgucmVwbGFjZSgnKicsICcoLio/KScpLnJlcGxhY2UoLyhcXChcXD8pPzpcXHcrL2csICcoW15cXC9dKyknKSArIFwiJFwiO1xyXG5cdFx0XHR0aGlzLnJvdXRlc1twYXRoXSA9IGZuO1xyXG5cdFx0XHRyZXR1cm4gdGhpcztcclxuXHRcdH0sXHJcblx0XHRyb3V0ZSA6IGZ1bmN0aW9uKCl7XHJcblx0XHRcdHZhciBVUkwgPSBsb2NhdGlvbi5oYXNoLnNsaWNlKDEpIHx8ICcnO1xyXG5cdFx0XHRmb3IodmFyIHBhdGggaW4gdGhpcy5yb3V0ZXMpe1xyXG5cdFx0XHRcdHZhciBhcmdzID0gKG5ldyBSZWdFeHAocGF0aCkpLmV4ZWMoVVJMKTtcclxuXHRcdFx0XHRpZihhcmdzKSB0aGlzLnJvdXRlc1twYXRoXS5hcHBseSh0aGlzLCBhcmdzLnNsaWNlKDEpKTtcclxuXHRcdFx0fVxyXG5cdFx0fSxcclxuXHR9KTtcclxuXHJcbn0pKCk7XHJcblxyXG5cclxuXHJcbm1vZHVsZS5leHBvcnRzID0geG87XHJcblxyXG4iLCJ2YXIgeG8gPSByZXF1aXJlKCcuLi9saWIveG8uanMnKTtcbnZhciBDcmV3TWVtYmVyID0gcmVxdWlyZSgnLi4vY3Jld01lbWJlci9jcmV3TWVtYmVyJyk7XG5cblxubW9kdWxlLmV4cG9ydHMgPSB4by52aWV3LmV4dGVuZCh7XG5cdHZpZXcgOiAnc2hpcENyZXcnLFxuXG5cdHJlbmRlciA6IGZ1bmN0aW9uKCl7XG5cdFx0dmFyIHNlbGYgPSB0aGlzO1xuXHRcdHRoaXMuY3JldyA9IFtdO1xuXG5cdFx0dGhpcy5kb20ucmVuYW1lQWxsLmNsaWNrKGZ1bmN0aW9uKCl7XG5cdFx0XHRzZWxmLnJlbmFtZUFsbCgpO1xuXHRcdH0pO1xuXG5cdFx0cmV0dXJuIHRoaXM7XG5cdH0sXG5cblx0YWRkIDogZnVuY3Rpb24ocmFjZSl7XG5cdFx0dmFyIHNlbGYgPSB0aGlzO1xuXHRcdGlmKHRoaXMuY3Jldy5sZW5ndGggPj0gOCkgcmV0dXJuIHRoaXM7XG5cblx0XHR2YXIgbmV3Q3JldyA9IENyZXdNZW1iZXIuY3JlYXRlKHJhY2UpLmFwcGVuZFRvKHRoaXMuZG9tLmNvbnRhaW5lcik7XG5cdFx0dGhpcy5jcmV3LnB1c2gobmV3Q3Jldyk7XG5cblx0XHRuZXdDcmV3Lm9uKCdyZW1vdmUnLCBmdW5jdGlvbigpe1xuXHRcdFx0c2VsZi5jcmV3ID0gXy53aXRob3V0KHNlbGYuY3JldywgbmV3Q3Jldyk7XG5cdFx0fSk7XG5cblx0XHRyZXR1cm4gdGhpcztcblx0fSxcblxuXHRyZW1vdmUgOiBmdW5jdGlvbigpe1xuXG5cdFx0cmV0dXJuIHRoaXM7XG5cdH0sXG5cblx0cmVtb3ZlQWxsIDogZnVuY3Rpb24oKXtcblx0XHRfLmVhY2godGhpcy5jcmV3LCBmdW5jdGlvbihjcmV3KXtcblx0XHRcdGNyZXcucmVtb3ZlKCk7XG5cdFx0fSk7XG5cblx0XHRyZXR1cm4gdGhpcztcblx0fSxcblxuXHRyZW5hbWVBbGwgOiBmdW5jdGlvbigpe1xuXHRcdF8uZWFjaCh0aGlzLmNyZXcsIGZ1bmN0aW9uKGNyZXcpe1xuXHRcdFx0Y3Jldy5yZW5hbWUoKTtcblx0XHR9KTtcblx0XHRyZXR1cm4gdGhpcztcblx0fSxcblxuXG5cbn0pOyIsInZhciB4byA9IHJlcXVpcmUoJy4uL2xpYi94by5qcycpO1xudmFyIGdlbmVyYXRvciA9IHJlcXVpcmUoJy4uL2RhdGEvZ2VuZXJhdG9yLmpzJylcblxubW9kdWxlLmV4cG9ydHMgPSB4by52aWV3LmV4dGVuZCh7XG5cblx0dmlldyA6ICdzaGlwTmFtZScsXG5cblx0cmVuZGVyIDogZnVuY3Rpb24oKXtcblx0XHR2YXIgc2VsZiA9IHRoaXM7XG5cdFx0dGhpcy53b3JkTGlzdHMgPSBbJ2phZWdlcicsICdwaXJhdGUnXTtcblxuXHRcdHRoaXMuZG9tLmdlbkJ1dHRvbi5jbGljayhmdW5jdGlvbihldmVudCl7XG5cdFx0XHRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdFx0c2VsZi5nZW5lcmF0ZSgpO1xuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH0pO1xuXG5cdFx0dGhpcy5kb20udmlldy5maW5kKCcuc2hpcEdlbmVyYXRvck9wdGlvbicpLmNsaWNrKGZ1bmN0aW9uKCl7XG5cblx0XHRcdHZhciBkYXRhID0gJCh0aGlzKS5hdHRyKCd4by1kYXRhJyk7XG5cdFx0XHRpZigkKHRoaXMpLmhhc0NsYXNzKCdzZWxlY3RlZCcpKXtcblx0XHRcdFx0JCh0aGlzKS5yZW1vdmVDbGFzcygnc2VsZWN0ZWQnKTtcblx0XHRcdFx0c2VsZi53b3JkTGlzdHMgPSBfLndpdGhvdXQoc2VsZi53b3JkTGlzdHMsIGRhdGEpO1xuXHRcdFx0fWVsc2V7XG5cdFx0XHRcdCQodGhpcykuYWRkQ2xhc3MoJ3NlbGVjdGVkJyk7XG5cdFx0XHRcdHNlbGYud29yZExpc3RzLnB1c2goZGF0YSk7XG5cdFx0XHR9XG5cdFx0fSk7XG5cblx0XHRyZXR1cm4gdGhpcztcblx0fSxcblxuXG5cdGdlbmVyYXRlIDogZnVuY3Rpb24oKXtcblxuXHRcdHRoaXMuZG9tLm5hbWUudmFsKGdlbmVyYXRvcignc2hpcCcsIHRoaXMud29yZExpc3RzKSk7XG5cdFx0cmV0dXJuIHRoaXM7XG5cdH0sXG5cblxufSkiLCJ2YXIgeG8gPSByZXF1aXJlKCcuLi9saWIveG8uanMnKTtcbnZhciBjb25maWcgPSByZXF1aXJlKCcuLi9kYXRhL2NvbmZpZy5qcycpO1xuXG5cbm1vZHVsZS5leHBvcnRzID0geG8udmlldy5leHRlbmQoe1xuXHR2aWV3IDogJ3NoaXBTZWxlY3RvcicsXG5cblx0cmVuZGVyIDogZnVuY3Rpb24oKXtcblx0XHR2YXIgc2VsZiA9dGhpcztcblx0XHR0aGlzLnNoaXBDaG9pY2VUZW1wbGF0ZSA9IFwiPGRpdiBjbGFzcz0nc2hpcENob2ljZSc+PGltZz48L2ltZz48L2Rpdj4gXCI7XG5cdFx0dGhpcy5jdXJyZW50VHlwZTtcblx0XHR0aGlzLmRvbS4kc2hpcFR5cGVTZWxlY3RvciA9IHRoaXMuZG9tLnZpZXcuZmluZCgnLnNoaXBUeXBlT3B0aW9uJyk7XG5cblx0XHR0aGlzLnNoaXBDaG9pY2VzID0ge307XG5cdFx0dGhpcy5zZXR1cFR5cGVCdXR0b25zKCk7XG5cdFx0dGhpcy5zZXR1cFNoaXBDaG9pY2VzKCk7XG5cdFx0dGhpcy5jaGFuZ2VUeXBlKCd0eXBlQScpO1xuXG5cdFx0cmV0dXJuIHRoaXM7XG5cdH0sXG5cblx0c2V0dXBTaGlwQ2hvaWNlcyA6IGZ1bmN0aW9uKCl7XG5cdFx0dmFyIHNlbGYgPSB0aGlzO1xuXHRcdF8uZWFjaChjb25maWcuc2hpcHMsIGZ1bmN0aW9uKHNoaXBEYXRhLCBzaGlwTmFtZSl7XG5cdFx0XHRfLmVhY2goc2hpcERhdGEsIGZ1bmN0aW9uKGRhdGEsIHR5cGUpe1xuXHRcdFx0XHR2YXIgdGVtcCA9ICQoc2VsZi5zaGlwQ2hvaWNlVGVtcGxhdGUpLmFwcGVuZFRvKHNlbGYuZG9tLmNvbnRhaW5lcik7XG5cdFx0XHRcdHRlbXAuYWRkQ2xhc3ModHlwZSk7XG5cdFx0XHRcdHRlbXAuZmluZCgnaW1nJykuYXR0cignc3JjJywgZGF0YS5taW5pX2ltYWdlKVxuXHRcdFx0XHR0ZW1wLmNsaWNrKGZ1bmN0aW9uKCl7XG5cdFx0XHRcdFx0c2VsZi50cmlnZ2VyKCdzZWxlY3RTaGlwJywgc2hpcE5hbWUsIHR5cGUpO1xuXHRcdFx0XHR9KTtcblx0XHRcdFx0c2VsZi5zaGlwQ2hvaWNlc1tzaGlwTmFtZV0gPSB0ZW1wO1xuXHRcdFx0fSk7XG5cdFx0fSk7XG5cdFx0cmV0dXJuIHRoaXM7XG5cdH0sXG5cblx0c2V0dXBUeXBlQnV0dG9ucyA6IGZ1bmN0aW9uKCl7XG5cdFx0dmFyIHNlbGYgPSB0aGlzO1xuXHRcdHRoaXMuZG9tLiRzaGlwVHlwZVNlbGVjdG9yLmNsaWNrKGZ1bmN0aW9uKCl7XG5cdFx0XHRzZWxmLmNoYW5nZVR5cGUoJCh0aGlzKS5hdHRyKCd4by1lbGVtZW50JykpO1xuXHRcdH0pO1xuXHRcdHJldHVybiB0aGlzO1xuXHR9LFxuXG5cdGNoYW5nZVR5cGUgOiBmdW5jdGlvbihuZXdUeXBlKXtcblx0XHR2YXIgc2VsZiA9IHRoaXM7XG5cdFx0aWYobmV3VHlwZSA9PT0gdGhpcy5jdXJyZW50VHlwZSkgcmV0dXJuO1xuXHRcdHRoaXMuZG9tLmNvbnRhaW5lci5maW5kKCcuc2hpcENob2ljZScpLmhpZGUoKTtcblx0XHR0aGlzLmRvbS5jb250YWluZXIuZmluZCgnLicgKyBuZXdUeXBlKS5zaG93KCk7XG5cdFx0dGhpcy5kb20uJHNoaXBUeXBlU2VsZWN0b3IucmVtb3ZlQ2xhc3MoJ3NlbGVjdGVkJyk7XG5cdFx0dGhpcy5kb21bbmV3VHlwZV0uYWRkQ2xhc3MoJ3NlbGVjdGVkJyk7XG5cdFx0dGhpcy5jdXJyZW50VHlwZSA9IG5ld1R5cGU7XG5cdFx0cmV0dXJuIHRoaXM7XG5cdH0sXG5cblxuXG59KTsiXX0=
