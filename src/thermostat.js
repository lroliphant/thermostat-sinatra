var Thermostat = function() {
	this.temperature =  20;
	this.powerSaver = true;
};

Thermostat.prototype.increase = function() {
	if (this.powerSaver === true){
		if (this.temperature < 25) {
			this.temperature += 1;
		};
	} else {
		this.temperature += 1;
	};
};

Thermostat.prototype.decrease = function () {
	if (this.temperature > 10) {
		this.temperature -= 1;
	};
};

// Thermostat.prototype.powerSavingOff = function () {
// 	this.powerSaver = false;
// };
