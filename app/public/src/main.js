var thermostat = new Thermostat();
// var currentTemp = thermostat.temperature;
document.getElementById('temperature').innerHTML = thermostat.temperature;
thermostat.temperature = $('#temperature').text();


var up = document.getElementById('button-up');
up.onclick = upTemp;

function upTemp() {
  thermostat.increase();
  // currentTemp = thermostat.temperature;
  document.getElementById('temperature').innerHTML = thermostat.temperature;
  $.post("/", {temp: thermostat.temperature}, function(){});
  changeColour();
};

var down = document.getElementById('button-down');
down.onclick = downTemp;

function downTemp() {
  thermostat.decrease();
  // currentTemp = thermostat.temperature;
  document.getElementById('temperature').innerHTML = thermostat.temperature;
  $.post("/", {temp: thermostat.temperature}, function(){});
  changeColour();
}

function updateTemp() {
  
}


function getTemp() {
  $.get("/temperature", function(data){
      // console.log(data);
    $('#temperature').html(data);
  });
};

getTemp();

//run into asyn issue

function togglePowerSaver() {
  thermostat.powerSaver = !thermostat.powerSaver;
}

var powerSaver = document.getElementById('power-saver');
powerSaver.onclick = togglePowerSaver;

function reset() {
  thermostat.resetTemp();
  // currentTemp = thermostat.temperature;
  document.getElementById('temperature').innerHTML = thermostat.temperature;
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

// AJAX request for London temp - no longer used
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
