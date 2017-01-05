#To see a preview of this program visit https://mikej.tech/pages/index.php/binary-clock/
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <link rel="stylesheet" href="stylesheet.css">
  <script type="text/javascript" src="script.js"></script>
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body onload="setTime();about();">
  <div class="column">
    <div id="clock">
      <div class="hours" id="hourLED">
        <div class="light"></div>
        <div class="light"></div>
        <div class="light" id="hours_thritytwo"></div>
        <div class="light" id="hours_sixteen"></div>
        <div class="light" id="hours_eight"></div>
        <div class="light" id="hours_four"></div>
        <div class="light" id="hours_two"></div>
        <div class="light" id="hours_one"></div>
      </div>
      <div id="hours"></div>
    </div>
    <div id="about">
      <div class="minutes" id="minLED">
        <div class="light"></div>
        <div class="light"></div>
        <div class="light" id="minutes_thritytwo"></div>
        <div class="light" id="minutes_sixteen"></div>
        <div class="light" id="minutes_eight"></div>
        <div class="light" id="minutes_four"></div>
        <div class="light" id="minutes_two"></div>
        <div class="light" id="minutes_one"></div>
      </div>
      <div id="minutes"></div>
    </div>
    <div id="value">
      <div id="data"><h2>128</h2></div>
      <div id="data"><h2>64</h2></div>
      <div id="data"><h2>32</h2></div>
      <div id="data"><h2>16</h2></div>
      <div id="data"><h2>8</h2></div>
      <div id="data"><h2>4</h2></div>
      <div id="data"><h2>2</h2></div>
      <div id="data"><h2>1</h2></div>
    </div>
  </div>
  <button type="button" id="button" onclick="assist();">Help Calculate</button>
  <button id="form" onclick="format('switch');">Change to 24 Hour Format</button>
  <div id="info">This is a clock that displays the time in binary.<br>The top row of circles is the hours
    and the bottom row is minutes.<br>The grey circles represent 0 or off and the colored circles are 1 or on.</div>
    <div id="aminfo">When the circles are yellow the time is am.</div>
    <div id="pminfo">When the circles are green the time is pm.</div>
  </body>
  </html>
