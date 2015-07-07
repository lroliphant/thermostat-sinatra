var thermostat = new Thermostat();
var currentTemp = thermostat.temperature;
document.getElementById('temperature').innerHTML = currentTemp;

function upTemp() {
  thermostat.increase();
  currentTemp = thermostat.temperature;
  document.getElementById('temperature').innerHTML = currentTemp;
  changeColour();
}

function downTemp() {
  thermostat.decrease();
  currentTemp = thermostat.temperature;
  document.getElementById('temperature').innerHTML = currentTemp;
  changeColour();
}

function togglePowerSaver() {
  thermostat.powerSaver = !thermostat.powerSaver;
}

function reset() {
  thermostat.resetTemp();
  currentTemp = thermostat.temperature;
  document.getElementById('temperature').innerHTML = currentTemp;
}

function changeColour() {
  if (thermostat.energyUse() === 'low') {
    document.getElementById('temperature').className = 'low';
  }
  else if (thermostat.energyUse() === 'high') {
    document.getElementById('temperature').className = 'high';
  }
  else {
    document.getElementById('temperature').className = 'medium';
  };
}



//
// document.getElementById("button-up").onclick = upTemp;
