var Thermostat = function() {
	this.temperature =  20;
	this.powerSaver = true;
	this.maxTempSaver = 25;
	this.maxTemp = 32;
};

Thermostat.prototype.increase = function() {
	if (this.powerSaver === true){
		if (this.temperature < this.maxTempSaver) {
			this.temperature += 1;
		};
	} else {
		if (this.temperature < this.maxTemp) {
			this.temperature += 1;
		};
	};
};

Thermostat.prototype.decrease = function () {
	if (this.temperature > 10) {
		this.temperature -= 1;
	};
};

Thermostat.prototype.powerSavingOff = function () {
	this.powerSaver = false;
};

Thermostat.prototype.resetTemp = function () {
	this.temperature = 20;
};

Thermostat.prototype.energyUse = function () {
	if (this.temperature < 18){
		return 'low';
	}
	else if (this.temperature < 25) {
		return 'medium';
	}
	else {
		return 'high';
	};
};
