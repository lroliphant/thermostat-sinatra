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

$(document).ready(function() {

// AJAX request for London temp
  $.get( "http://api.openweathermap.org/data/2.5/find?q=London&units=metric", function(data) {
    $(".result").html(data);
      $('.city').html(data.list[0].name);
      $('.temp').html(data.list[0].main.temp);
  });

// AJAX request for a particular city
  $('#city-select').change(function(){

    var url = 'http://api.openweathermap.org/data/2.5/find?q=' + this.value + '&units=metric';
    // this.value is essential returning same as document.getElementById('city-select').value

    $.get(url, function(data){
      $('.city').html(data.list[0].name);
      $('.temp').html(data.list[0].main.temp);
    });
    // $.ajax({url: url, success: function(data){
    //   $('.city').html(data.list[0].name);
    //   $('.temp').html(data.list[0].main.temp);
    // }

  });

});
