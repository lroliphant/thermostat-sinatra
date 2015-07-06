var Thermostat = function() {
	this.temperature =  20;
};

Thermostat.prototype.increase = function(temperature) {
	this.temperature += 1;
};

