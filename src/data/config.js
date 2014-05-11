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