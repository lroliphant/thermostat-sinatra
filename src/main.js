var thermostat = new Thermostat();
var currentTemp = thermostat.temperature;
document.getElementById('temperature').innerHTML = currentTemp;

function upTemp() {
  thermostat.increase();
  currentTemp = thermostat.temperature;
  document.getElementById('temperature').innerHTML = currentTemp;
  changeColour();
}

var up = document.getElementById('button-up');
up.onclick = upTemp;

// up.onclick = function() {
//   thermostat.increase();
//   currentTemp = thermostat.temperature;
//   document.getElementById('temperature').innerHTML = currentTemp;
//   changeColour();
// }

function downTemp() {
  thermostat.decrease();
  currentTemp = thermostat.temperature;
  document.getElementById('temperature').innerHTML = currentTemp;
  changeColour();
}

var down = document.getElementById('button-down');
down.onclick = downTemp;

function togglePowerSaver() {
  thermostat.powerSaver = !thermostat.powerSaver;
}

var powerSaver = document.getElementById('power-saver');
powerSaver.onclick = togglePowerSaver;

function reset() {
  thermostat.resetTemp();
  currentTemp = thermostat.temperature;
  document.getElementById('temperature').innerHTML = currentTemp;
}

var resetTemp = document.getElementById('reset-button');
resetTemp.onclick = reset;


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
