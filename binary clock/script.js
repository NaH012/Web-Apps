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
var color = "yellow";
function setTime() {
  date = new Date();
  hour = date.getHours();
  minutes = date.getMinutes();
  seconds = date.getSeconds();
  var t = setTimeout(setTime, 500);
  array = [[32,16,8,4,2,1],
  [document.getElementById('hours_thritytwo'),document.getElementById('hours_sixteen'),document.getElementById('hours_eight'),document.getElementById('hours_four'),document.getElementById('hours_two'),document.getElementById('hours_one')],
  [document.getElementById('minutes_thritytwo'),document.getElementById('minutes_sixteen'),document.getElementById('minutes_eight'),document.getElementById('minutes_four'),document.getElementById('minutes_two'),document.getElementById('minutes_one')],
  [document.getElementById('seconds_thritytwo'),document.getElementById('seconds_sixteen'),document.getElementById('seconds_eight'),document.getElementById('seconds_four'),document.getElementById('seconds_two'),document.getElementById('seconds_one')],
  [0,0,0,0,0,0],[0,0,0,0,0,0],[0,0,0,0,0,0]];
  var form = window.state;
  if(form == 12){
    if(hour < 12){
      am = true;
    }
    if(hour == 12){
      am = false;
    }
    if(hour > 12){
      am = false;
      hour -= 12;
    }else if(hour == 0){
      hour = 12;
      am = true;
    }
  }
  if (form == 24) {
    color = "aqua";
  }else if (!am) {
    color = "#33ff77";
  }else if(am){
    color = "yellow";
  }
  info();
  for (var i = 0; i < array[0].length; i++) {
    if (hour >= array[0][i]) {
      array[4][i] = array[0][i];
      array[1][i].style.backgroundColor = color;
      hour -= array[0][i];
    } else {
      array[4][i] = 0;
      array[1][i].style.backgroundColor = "dimGrey";
    }
  }
  for (var i = 0; i < array[0].length; i++) {
    if (minutes >= array[0][i]) {
      array[5][i] = array[0][i];
      array[2][i].style.backgroundColor = color;
      minutes -= array[0][i];
    } else {
      array[5][i] = 0;
      array[2][i].style.backgroundColor = "dimGrey";
    }
  }
  for (var i = 0; i < array[0].length; i++) {
    if (seconds >= array[0][i]) {
      array[6][i] = array[0][i];
      array[3][i].style.backgroundColor = color;
      seconds -= array[0][i];
    } else {
      array[6][i] = 0;
      array[3][i].style.backgroundColor = "dimGrey";
    }
  }
}
var hidden = true;
function assist() {
  var docHour = document.getElementById('hourLED');
  var docMin = document.getElementById('minLED');
  var docSec = document.getElementById('secLED');
  var docClock = document.getElementById('clock');
  var docAbout = document.getElementById('about');
  var docValue = document.getElementById('value');
  var docSeco = document.getElementById('secs')
  var docButton = document.getElementById('button');
  var docInfo = document.getElementById('info');
  if (hidden) {
    if (window.innerWidth > 550) {
      docHour.style.width = "75%";
      docMin.style.width = "75%";
      docSec.style.width = "75%";
      docValue.style.width = "75%";
    } else{
      docClock.style.width = "100%";
      docAbout.style.width = "100%";
      docSeco.style.width = "100%";
      docValue.style.width = "100%";
    }
    if (window.innerWidth > 400) {
      docValue.style.fontSize = "100%";
      docInfo.style.fontSize = "100%";
    }else{
      docValue.style.fontSize = "80%";
      docInfo.style.fontSize = "85%";
    }
    docButton.innerHTML = "Hide Help";
    docClock.style.color = "#eee";
    docClock.style.fontSize = "100%";
    docAbout.style.color = "#eee";
    docSeco.style.fontSize = "100%";
    docSeco.style.color = "#eee";
    docAbout.style.fontSize = "100%";
    docValue.style.borderColor = "#444";
    docValue.style.color = "#eee";
    docInfo.style.color = "#eee";
    hidden = false;
  } else if (!hidden){
    docInfo.style.fontSize = "0";
    docInfo.style.color = "transparent";
    docButton.innerHTML = "Help Calculate";
    docClock.style.fontSize = "0";
    docAbout.style.fontSize = "0";
    docSeco.style.fontSize = "0";
    docSeco.style.color = "transparent";
    docClock.style.color = "transparent";
    docAbout.style.color = "transparent";
    docValue.style.fontSize = "0";
    docValue.style.color = "transparent";
    docHour.style.width = "100%";
    docMin.style.width = "100%";
    docSec.style.width = "100%";
    docValue.style.borderColor = "transparent";
    hidden = true;
  }
}
function info(){
  var amInfo = document.getElementById('aminfo');
  var pmInfo = document.getElementById('pminfo');
  amInfo.style.color = "transparent";
  pmInfo.style.color = "transparent";
  amInfo.style.fontSize = "0";
  pmInfo.style.fontSize = "0";
  if(!window.hidden){
    if(window.state != 24){
      if (!window.am) {
        pmInfo.style.color = "#eee";
        if (window.innerWidth > 400) {
          pmInfo.style.fontSize = "100%";
        }else{
          pmInfo.style.fontSize = "85%";
        }
      }else if(window.am){
        amInfo.style.color = "#eee";
        if (window.innerWidth > 400) {
          amInfo.style.fontSize = "100%";
        }else {
          amInfo.style.fontSize = "85%";
        }
      }
    }
  }
}
function about() {
  var helpHours = "";
  var helpMin = "";
  var helpSec = "";
  date = new Date();
  hour = date.getHours();
  minutes = date.getMinutes();
  seconds = date.getSeconds();
  var t = setTimeout(about, 500);
  var form = window.state;
  if(form == 12){
    if(hour == 12){
    }
    if(hour > 12){
      hour -= 12;
    }else if(hour == 0){
      hour = 12;
    }
  }
  for (var i = 0; i < array[0].length; i++) {
    if (array[4][i] != 0) {
      helpHours += array[4][i].toString();
      helpHours += " + ";
    }
  }
  if(helpHours.length > 6){
    helpHours = helpHours.substring(0,helpHours.length - 3);
    helpHours += " = ";
    helpHours += hour.toString();
  }else {
    helpHours = hour.toString();
  }
  document.getElementById('hours').innerHTML = helpHours;
  for (var i = 0; i < array[0].length; i++) {
    if (array[5][i] != 0) {
      helpMin += array[5][i].toString();
      helpMin += " + ";
    }
  }
  if (helpMin.length > 6) {
    helpMin = helpMin.substring(0,helpMin.length - 3);
    helpMin += " = ";
    helpMin += minutes.toString();
  }else{
    helpMin = minutes.toString();
  }
  document.getElementById('minutes').innerHTML = helpMin;
  for (var i = 0; i < array[0].length; i++) {
    if (array[6][i] != 0) {
      helpSec += array[6][i].toString();
      helpSec += " + ";
    }
  }
  if (helpSec.length > 6) {
    helpSec = helpSec.substring(0,helpSec.length - 3);
    helpSec += " = ";
    helpSec += seconds.toString();
  }else{
    helpSec = seconds.toString();
  }
  document.getElementById('seconds').innerHTML = helpSec;
}
