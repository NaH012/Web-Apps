/*
This was created by Mike Julander
https://mikej.tech
*/
var action = "no";
var state = 12;
function format(action){
  var docForm = document.getElementById('form');
  if (action == "switch") {
    if (state == 24) {
      state = 12;
      docForm.innerHTML = "Change to 24 Hour Format"
    }else if (state == 12) {
      state = 24;
      docForm.innerHTML = "Change to 12 Hour Format"
    }
  }
}
var array = [[32,16,8,4,2,1],
[document.getElementById('hours_thritytwo'),document.getElementById('hours_sixteen'),document.getElementById('hours_eight'),document.getElementById('hours_four'),document.getElementById('hours_two'),document.getElementById('hours_one')],
[document.getElementById('minutes_thritytwo'),document.getElementById('minutes_sixteen'),document.getElementById('minutes_eight'),document.getElementById('minutes_four'),document.getElementById('minutes_two'),document.getElementById('minutes_one')],
[document.getElementById('seconds_thritytwo'),document.getElementById('seconds_sixteen'),document.getElementById('seconds_eight'),document.getElementById('seconds_four'),document.getElementById('seconds_two'),document.getElementById('seconds_one')],
[0,0,0,0,0,0],[0,0,0,0,0,0],[0,0,0,0,0,0]];
var am = true;
var color = "am";
var update = [[false, false, false], [0, 0, 0], "am"];
function setTime() {
  date = new Date();
  var timeArray = [0, 0, 0];
  timeArray[0] = date.getHours();
  timeArray[1] = date.getMinutes();
  timeArray[2] = date.getSeconds();
  var t = setTimeout(setTime, 500);
  array = [[32,16,8,4,2,1],
  [document.getElementById('hours_thritytwo'),document.getElementById('hours_sixteen'),document.getElementById('hours_eight'),document.getElementById('hours_four'),document.getElementById('hours_two'),document.getElementById('hours_one')],
  [document.getElementById('minutes_thritytwo'),document.getElementById('minutes_sixteen'),document.getElementById('minutes_eight'),document.getElementById('minutes_four'),document.getElementById('minutes_two'),document.getElementById('minutes_one')],
  [document.getElementById('seconds_thritytwo'),document.getElementById('seconds_sixteen'),document.getElementById('seconds_eight'),document.getElementById('seconds_four'),document.getElementById('seconds_two'),document.getElementById('seconds_one')],
  [0,0,0,0,0,0],[0,0,0,0,0,0],[0,0,0,0,0,0]];
  var form = window.state;
  var helpTotal = 0;
  var helpID = ["hours", "minutes", "seconds"]
  if(form == 12){
    if(timeArray[0] < 12){
      am = true;
    }
    if(timeArray[0] == 12){
      am = false;
    }
    if(timeArray[0] > 12){
      am = false;
      timeArray[0] -= 12;
    }else if(timeArray[0] == 0){
      timeArray[0] = 12;
      am = true;
    }
  }
  if (form == 24) {
    color = "military";
  }else if (!am) {
    color = "pm";
  }else if(am){
    color = "am";
  }
  for(var n = 0; n < 3; n++){
    var helpInfo = "";
    if(!update[0][n] || update[1][n] != timeArray[n] || update[2] != color){
      helpTotal = timeArray[n];
      info(color);

      for (var i = 0; i < array[0].length; i++) {
        if (timeArray[n] >= array[0][i]) {
          array[n + 4][i] = array[0][i];
          helpInfo += array[0][i].toString() + " + ";
          array[n + 1][i].classList = color + " light";
          timeArray[n] -= array[0][i];
        } else {
          array[n+4][i] = 0;
          array[n+1][i].classList = "light";
        }
      }
      if(helpInfo.length > 5){
        helpInfo = helpInfo.substring(0,helpInfo.length - 3);
        helpInfo += " = ";
        helpInfo += helpTotal.toString();
      }else {
        helpInfo = helpTotal.toString();
      }
      document.getElementById(helpID[n]).innerHTML = helpInfo;
      update[0][n] = true;
      update[1][n] = helpTotal;
    }
  }
  update[2] = color;
}
var hidden = true;
function assist() {
  if (hidden) {
    document.getElementById('hourLED').classList.add("shrunk");
    document.getElementById('minLED').classList.add("shrunk");
    document.getElementById('secLED').classList.add("shrunk");
    document.getElementById('info').classList.remove("hidden");
    document.getElementById('hours').classList.remove("hidden");
    document.getElementById('minutes').classList.remove("hidden");
    document.getElementById('seconds').classList.remove("hidden");
    document.getElementById('data').classList.remove("hidden");
    document.getElementById('button').innerHTML = "Hide Help";
    hidden = false;
  } else if (!hidden){
    document.getElementById('button').innerHTML = "Help Calculate";
    document.getElementById('hourLED').classList.remove("shrunk");
    document.getElementById('minLED').classList.remove("shrunk");
    document.getElementById('secLED').classList.remove("shrunk");
    document.getElementById('hours').classList.add("hidden");
    document.getElementById('minutes').classList.add("hidden");
    document.getElementById('seconds').classList.add("hidden");
    document.getElementById('data').classList.add("hidden");
    document.getElementById('info').classList.add("hidden");
    hidden = true;
  }
}
function info(meridian){
  var amInfo = document.getElementById('aminfo');
  var pmInfo = document.getElementById('pminfo');

  if(meridian == "am"){
    amInfo.classList.remove("hidden");
    pmInfo.classList = "hidden";
  }else if(meridian == "pm"){
    amInfo.classList = "hidden";
    pmInfo.classList.remove("hidden");
  }else{
    amInfo.classList = "hidden";
    pmInfo.classList = "hidden";
  }
}
