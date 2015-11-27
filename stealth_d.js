var stealth_d = {
	"id"   : "stealth_d",
	"ship" : "stealth",
	"type" : "d",
	"name" : "The Scott",
	"desc" : "",
	"crew"     : ["human","engi","lanius"],
	"weapons"  : ["breach_bomb2"],
	"augments" : ["longranged_scanners","zoltan_shield_bypass"],
	"drones"   : [],
	"power"        : 8,
	"missiles"     : 20,
	"drone_parts"  : 15,
	"drone_slots"  : 2,
	"weapon_slots" : 3,
	"systems" : {
		"shields"        : 0,
		"engines"        : 4,
		"o2"             : 1,
		"weapons"        : 2,
		"medbay"         : 0,
		"clone_bay"      : 1,
		"teleporter"     : 0,
		"cloaking"       : 1,
		"drone_control"  : 0,
		"mind_control"   : 0,
		"hacking"        : 1,
		"artillery_beam" : 0
	},
	"subsystems" : {
		"pilot"          : 1,
		"doors"          : 1,
		"sensors"        : 2,
		"backup_battery" : 0
	}
}

var stats = require('./stats')
var api = require('./api/api');

console.log(stats.ship_cost(api, stealth_d));