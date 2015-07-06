var Thermostat = function() {
	this.temperature =  20;
};

Thermostat.prototype.increase = function() {
	this.temperature += 1;
};

Thermostat.prototype.decrease = function () {
	if (this.temperature > 10) {
		this.temperature -= 1;
	};
};

