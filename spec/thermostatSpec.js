// -Thermostat starts at 20 degrees
// -You can increase the temp with the up button
// -You can decrease the temp with the down button
// -The minimum temperature is 10 degrees
// -If power saving mode is on, the maximum temperature is 25 degrees
// -If power saving mode is off, the maximum temperature is 32 degrees
// -Power saving mode is on by default
// You can reset the temperature to 20 by hitting the reset button
// The thermostat should colour the display based on energy usage - < 18 is green, < 25 is yellow, otherwise red

describe('Thermostat', function() {
	var thermostat;

	beforeEach(function() {
		thermostat = new Thermostat();
	});

	describe('when initialized', function() {
		it('starts at 20 degrees', function(){
			expect(thermostat.temperature).toEqual(20)
		});
	});

	describe('temperature change', function(){
		it('can increase', function(){
			thermostat.increase();
			expect(thermostat.temperature).toEqual(21);
		});

		it('can decrease', function(){
			thermostat.decrease();
			expect(thermostat.temperature).toEqual(19);
		});
	});

	describe('has a minimum temp',function(){
		it('minimum is 10 degrees', function(){
			thermostat.temperature = 10;
			thermostat.decrease();
			expect(thermostat.temperature).toEqual(10);
		});
	});

	describe('power saving mode on', function() {
		it('max temperature is 25 degrees', function() {
			thermostat.temperature = 25;
			thermostat.increase();
			expect(thermostat.temperature).toEqual(25);
		});
	});

	describe('power saving mode off', function() {
		it('max temperature is 32 degrees', function() {
			thermostat.powerSavingOff();
			thermostat.temperature = 32;
			thermostat.increase();
			expect(thermostat.temperature).toEqual(32);
		});
	});

	describe('reset button', function(){
		it('resets it to twenty',function(){
			thermostat.temperature = 25;
			thermostat.resetTemp();
			expect(thermostat.temperature).toEqual(20);
		});
	});

});
