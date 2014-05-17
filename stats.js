var _ = require('underscore');

var arraySum = function(arr, index){
	var result = 0;
	for(var i =0; i < index; i++){
		result += arr[i];
	}
	return result;
}


var ship_cost = function(api, ship_data){
	var result = {}
	_.each(['systems', 'subsystems'], function(part){
		result[part] = _.reduce(ship_data[part], function(sum, power_bars, system){
			return sum + arraySum(api[part][system].cost, power_bars);
		}, 0);
	});
	_.each(["augments", "drones", "weapons"], function(part){
		result[part] = _.reduce(ship_data[part], function(sum, part_id){
			return sum + api[part][part_id].cost;
		}, 0);
	});
	result.crew = _.reduce(ship_data.crew, function(sum, crewRace){
		return sum + api.races[crewRace].cost;
	},0);
	result.power = arraySum(api.subsystems.reactor.cost, ship_data.power);
	//result.missiles = ship_data.missiles * 4;
	//result.drone_parts = ship_data.drone_parts * 8;

	result.total = _.reduce(result, function(sum, val){
		return sum + val;
	}, 0)
	return result;
}


var all_ship_cost = function(api){
	var result = {};
	_.each(api.ships, function(ship_data, ship_id){
		result[ship_id] = ship_cost(api, ship_data)
	});
	return result;
}



module.exports = {
	all_ship_cost : all_ship_cost,
	ship_cost : ship_cost
};