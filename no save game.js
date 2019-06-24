var pButton = false;

var phase = 0;

var level;

var frames = 0;

var musicplaying = "music1";

var grayTimer = 0;

var fakePause = false;

var teleportation = false;

var clrNum = 1;

var crcClr = "rgba(000, 000, 255, 1.0)";

var levelAccom = 1;

var debug = document.getElementById("debug");

var color1; var color2; var color3; var color4; var color5; var color6; var color7; var color8; var color9; var color10; var color11; var color12; var color13; var color14; var color15;

var clicks;

function music(musicid) {
	if (musicid != "music1") {document.getElementById("music1").currentTime = 0;}
	if (musicid != "music2") {document.getElementById("music2").currentTime = 0;}
	if (musicid != "music3") {document.getElementById("music3").currentTime = 0;}
	if (musicid != "music4") {document.getElementById("music4").currentTime = 0;}
	if (musicid != "music5") {document.getElementById("music5").currentTime = 0;}
	if (musicid != "music6") {document.getElementById("music6").currentTime = 0;}
	if (musicid != "music7") {document.getElementById("music7").currentTime = 0;}
	if (musicid != "music8") {document.getElementById("music8").currentTime = 0;}
	if (musicid == "music0") {
		document.getElementById("music1").pause();
		document.getElementById("music2").pause();
		document.getElementById("music3").pause();
		document.getElementById("music4").pause();
		document.getElementById("music5").pause();
		document.getElementById("music6").pause();
		document.getElementById("music7").pause();
		document.getElementById("music8").pause();
		return;
}
	if (document.getElementById("music1").paused == false && "music1" != musicid) {document.getElementById("music1").pause();}
	if (document.getElementById("music2").paused == false && "music2" != musicid) {document.getElementById("music2").pause();}
	if (document.getElementById("music3").paused == false && "music3" != musicid) {document.getElementById("music3").pause();}
	if (document.getElementById("music4").paused == false && "music4" != musicid) {document.getElementById("music4").pause();}
	if (document.getElementById("music5").paused == false && "music5" != musicid) {document.getElementById("music5").pause();}
	if (document.getElementById("music6").paused == false && "music6" != musicid) {document.getElementById("music6").pause();}
	if (document.getElementById("music7").paused == false && "music7" != musicid) {document.getElementById("music7").pause();}
	if (document.getElementById("music8").paused == false && "music8" != musicid) {document.getElementById("music8").pause();}
	if (document.getElementById(musicid).paused == true) {document.getElementById(musicid).play();}
	musicplaying = musicid;
}

//repeating keypress detection
var keys = {};
window.onkeyup = function(e) { keys[e.keyCode] = false; }
window.onkeydown = function(e) { keys[e.keyCode] = true; }

var board = document.getElementById("game");

board.style.backgroundColor = "white";

x = 100;
y = board.height - 100;

var drc = 135;
var radius = 20;

var rec = board.getContext("2d");

var crl = board.getContext("2d");
crl.beginPath();
crl.arc(x, y, radius, 0, 2 * Math.PI);

var ttl = board.getContext("2d");
ttl.font = "75px Arial";
ttl.textAlign = "center";
ttl.fillText("Circle Maneuver", board.width / 2, 125);

ttl.font = "30px Arial";
ttl.textAlign = "center";
ttl.fillText("A Ben Pitt Stoller Game", board.width / 2, board.height - 50);

frameRate = 1/60
frameRate *= 1000

var button = 0

var gloMode;

function start(mode) {
	if (mode == "easy") {gloMode = "e";}
	else {gloMode = "h";}
	button = document.getElementById("button");
	button2 = document.getElementById("button2");
	crl.clearRect(0, 0, board.width, board.height);
	button.style.visibility = "hidden";
	button2.style.visibility = "hidden";
	clicks = 0;
	if (levelAccom > 0) {
		clicks = 10000;
		level = 1;
			ttl.font = "40px Arial";
			ttl.textAlign = "center";
			ttl.fillText("Now entering the planet Cimoo", board.width / 2, board.height / 2);
			setTimeout(function() {
				pauseResume(false);
				document.getElementById('paus').style.visibility = 'initial';
				document.getElementById('paus').style.left = window.innerWidth / 2 - board.width / 2 + 50 + "px";
				document.getElementById('arrow').style.left = window.innerWidth / 2 + board.width / 2 - 100 + "px";
				document.getElementById("plus").style.left = window.innerWidth / 2 + board.width / 2 - 225 + "px"
				document.getElementById("minus").style.left = window.innerWidth / 2 - board.width / 2 + 150 + "px"
			}, 2000);
		level = levelAccom;
		if (level == 50) {reset(); phase = 1;}
		return;
	}
	var svg1 = document.getElementById("s1");
	var svg4 = document.getElementById("s4")
	crl.drawImage(svg1, 0, 0);
	crl.drawImage(svg4, 0, 350);
}

var level;

function canvasClicked() {
	if (button != 0 && clicks != 10000) {
		clicks++
		crl.clearRect(0, 0, board.width, board.height);
		if (clicks == 1) {
			var svg2 = document.getElementById("s2");
			var svg4 = document.getElementById("s4")
			crl.drawImage(svg2, 0, 0);
			crl.drawImage(svg4, 0, 350);
		}
		else if (clicks == 2) {
			var svg3 = document.getElementById("s3");
			var svg4 = document.getElementById("s4")
			crl.drawImage(svg3, 0, 0);
			crl.drawImage(svg4, 0, 350);
		}
		else if (clicks == 3) {
			clicks = 10000;
			level = 1;
			ttl.font = "40px Arial";
			ttl.textAlign = "center";
			ttl.fillText("Now entering the planet Cimoo", board.width / 2, board.height / 2);
			setTimeout(function() {
				pauseResume(false);
				document.getElementById('paus').style.visibility = 'initial';
				document.getElementById('paus').style.left = window.innerWidth / 2 - board.width / 2 + 50 + "px";
				document.getElementById('arrow').style.left = window.innerWidth / 2 + board.width / 2 - 100 + "px";
				document.getElementById("plus").style.left = window.innerWidth / 2 + board.width / 2 - 225 + "px"
				document.getElementById("minus").style.left = window.innerWidth / 2 - board.width / 2 + 150 + "px"
			}, 2000);
		}
	}
}

var runGame;

function pauseResume(pause) {
	if (pause == false) {
		runGame = setInterval(gameFrame, frameRate);
	}
	if (pause == true) {
		crl.clearRect(0, 0, board.width, board.height);
		clearInterval(runGame);
	}
}

function gameFrame() {
	frames++
	//level memory stuff
	if (levelAccom <= level) {levelAccom = level;};
	//debug stuff
	//level = document.getElementById("debugSlide").value;
	//debug.innerHTML = "Level " + level
	//keypress stuff
	if (keys[37] || keys[65]) {drc += 5}
	if (keys[39] || keys[68]) {drc -= 5}
	if (drc > 360) {drc = 1}
	if (drc < 1) {drc = 360}
	//arrow
	drc180 = 180 - drc + 180
	document.getElementById("arrow").style.visibility = "initial";
	document.getElementById("arrow").style.transform = "rotate(" + drc180 + "deg)";
	//this is a debug for displaying the direction of the circle -> debug.innerHTML = drc;
	//clearing the prev. frame
	crl.clearRect(0, 0, board.width, board.height);
	//moving code
	if (drc >= 0 && drc <= 90) {
		xspd = drc / 9
		yspd = 10 - drc / 9
	}
	if (drc >= 91 && drc <= 180) {
		drc -= 90
		xspd = 10 - drc / 9
		yspd = drc / 9 / -1
		drc += 90
	}
	if (drc >= 181 && drc <= 270) {
		drc -= 180
		xspd = drc / 9 / -1
		yspd = 10 - drc / 9
		yspd /= -1
		drc += 180
	}
	if (drc >= 271 && drc <= 360) {
		drc -= 270
		xspd = 10 - drc / 9
		xspd /= -1
		yspd = drc / 9
		drc += 270
	}
	if (x + xspd > board.width) {xspd = board.width - x}
	if (y + yspd > board.height) {yspd = board.height - y}
	if (x + xspd < 0) {xspd = 0 - x}
	if (y + yspd < 0) {yspd = 0 - y}
	if (x <= board.width && y <= board.height && x > -1  && y > -1) {
		if (xspd > 7.5) {xspd = 7.5}
		if (xspd < -7.5) {xspd = -7.5}
		if (yspd > 7.5) {yspd = 7.5}
		if (yspd < -7.5) {yspd = -7.5}
		if (radius == 10) {xspd /= 2; yspd /= 2;}
		if (gloMode == "e") {xspd /= 2; yspd /= 2;}
		x += xspd
		y += yspd
	}
	levelDraw();
	collision();
	if (grayTimer > 0) {
		grayTimer--
		if (gloMode == "h") {
			if (grayTimer > 60) {opacity = 0.5}
			else if (grayTimer % 10 == 5) {opacity = 0.75}
			else if (grayTimer % 10 == 0) {opacity = 0.5}
		}
		else if (gloMode == "e") {
			if (grayTimer > 120) {opacity = 0.5}
			else if (grayTimer % 20 == 10) {opacity = 0.75}
			else if (grayTimer % 20 == 0) {opacity = 0.5}

		}
	}
	else if (teleportation == false) {opacity = 1.0}
	crl = board.getContext("2d");
	crl.beginPath();
	crl.arc(x, y, radius, 0, 2 * Math.PI);
	crl.fillStyle = crcClr.substring(0, 20) + opacity + ")";
	crl.fill();
	if (crcClr == "rgba(255, 140, 000, 1.0)" && board.style.backgroundColor == "rgb(255, 140, 0)") {circlestroke();}
	document.getElementById("plus").style.visibility = "hidden";
	document.getElementById("minus").style.visibility = "hidden";
}
function recta(rectID, color, rectX, rectY, rectW, rectH) {
	rec = board.getContext("2d");
	window.collision = collision;
	if (color == "purple" && keyDoor == "open") {
		return;
	}
	if (color == "saddlebrown" && keyDoor == "open") {
		return;
	}
	if (rectID == 1) {rectX1 = rectX; rectY1 = rectY; rectW1 = rectW; rectH1 = rectH; color1 = color;
	rec.beginPath();
	rec.rect(rectX, rectY, rectW, rectH);
	rec.fillStyle = color;
	rec.fill();}
	if (rectID == 2) {rectX2 = rectX; rectY2 = rectY; rectW2 = rectW; rectH2 = rectH; color2 = color;
	rec.beginPath();
	rec.rect(rectX, rectY, rectW, rectH);
	rec.fillStyle = color;
	rec.fill();}
	if (rectID == 3) {rectX3 = rectX; rectY3 = rectY; rectW3 = rectW; rectH3 = rectH; color3 = color;
	rec.beginPath();
	rec.rect(rectX, rectY, rectW, rectH);
	rec.fillStyle = color;
	rec.fill();}
	if (rectID == 4) {rectX4 = rectX; rectY4 = rectY; rectW4 = rectW; rectH4 = rectH; color4 = color;
	rec.beginPath();
	rec.rect(rectX, rectY, rectW, rectH);
	rec.fillStyle = color;
	rec.fill();}
	if (rectID == 5) {rectX5 = rectX; rectY5 = rectY; rectW5 = rectW; rectH5 = rectH; color5 = color;
	rec.beginPath();
	rec.rect(rectX, rectY, rectW, rectH);
	rec.fillStyle = color;
	rec.fill();}
	if (rectID == 6) {rectX6 = rectX; rectY6 = rectY; rectW6 = rectW; rectH6 = rectH; color6 = color;
	rec.beginPath();
	rec.rect(rectX, rectY, rectW, rectH);
	rec.fillStyle = color;
	rec.fill();}
	if (rectID == 7) {rectX7 = rectX; rectY7 = rectY; rectW7 = rectW; rectH7 = rectH; color7 = color;
	rec.beginPath();
	rec.rect(rectX, rectY, rectW, rectH);
	rec.fillStyle = color;
	rec.fill();}
	if (rectID == 8) {rectX8 = rectX; rectY8 = rectY; rectW8 = rectW; rectH8 = rectH; color8 = color;
	rec.beginPath();
	rec.rect(rectX, rectY, rectW, rectH);
	rec.fillStyle = color;
	rec.fill();}
	if (rectID == 9) {rectX9 = rectX; rectY9 = rectY; rectW9 = rectW; rectH9 = rectH; color9 = color;
	rec.beginPath();
	rec.rect(rectX, rectY, rectW, rectH);
	rec.fillStyle = color;
	rec.fill();}
	if (rectID == 10) {rectX10 = rectX; rectY10 = rectY; rectW10 = rectW; rectH10 = rectH; color10 = color;
	rec.beginPath();
	rec.rect(rectX, rectY, rectW, rectH);
	rec.fillStyle = color;
	rec.fill();}
	if (rectID == 11) {rectX11 = rectX; rectY11 = rectY; rectW11 = rectW; rectH11 = rectH; color11 = color;
	rec.beginPath();
	rec.rect(rectX, rectY, rectW, rectH);
	rec.fillStyle = color;
	rec.fill();}
	if (rectID == 12) {rectX12 = rectX; rectY12 = rectY; rectW12 = rectW; rectH12 = rectH; color12 = color;
	rec.beginPath();
	rec.rect(rectX, rectY, rectW, rectH);
	rec.fillStyle = color;
	rec.fill();}
	if (rectID == 13) {rectX13 = rectX; rectY13 = rectY; rectW13 = rectW; rectH13 = rectH; color13 = color;
	rec.beginPath();
	rec.rect(rectX, rectY, rectW, rectH);
	rec.fillStyle = color;
	rec.fill();}
	if (rectID == 14) {rectX14 = rectX; rectY14 = rectY; rectW14 = rectW; rectH14 = rectH; color14 = color;
	rec.beginPath();
	rec.rect(rectX, rectY, rectW, rectH);
	rec.fillStyle = color;
	rec.fill();}
	if (rectID == 15) {rectX15 = rectX; rectY15 = rectY; rectW15 = rectW; rectH15 = rectH; color15 = color;
	rec.beginPath();
	rec.rect(rectX, rectY, rectW, rectH);
	rec.fillStyle = color;
	rec.fill();}
function collision () {
	if (teleportation == false) {
		if (grayTimer == 0) {
			if (color1 == "red") {if (x + radius >= rectX1 && x - radius <= rectX1 + rectW1 && y + radius >= rectY1 && y - radius <= rectY1 + rectH1) {reset();}}
			if (color2 == "red") {if (x + radius >= rectX2 && x - radius <= rectX2 + rectW2 && y + radius >= rectY2 && y - radius <= rectY2 + rectH2) {reset();}}
			if (color3 == "red") {if (x + radius >= rectX3 && x - radius <= rectX3 + rectW3 && y + radius >= rectY3 && y - radius <= rectY3 + rectH3) {reset();}}
			if (color4 == "red") {if (x + radius >= rectX4 && x - radius <= rectX4 + rectW4 && y + radius >= rectY4 && y - radius <= rectY4 + rectH4) {reset();}}
			if (color5 == "red") {if (x + radius >= rectX5 && x - radius <= rectX5 + rectW5 && y + radius >= rectY5 && y - radius <= rectY5 + rectH5) {reset();}}
			if (color6 == "red") {if (x + radius >= rectX6 && x - radius <= rectX6 + rectW6 && y + radius >= rectY6 && y - radius <= rectY6 + rectH6) {reset();}}
			if (color7 == "red") {if (x + radius >= rectX7 && x - radius <= rectX7 + rectW7 && y + radius >= rectY7 && y - radius <= rectY7 + rectH7) {reset();}}
			if (color8 == "red") {if (x + radius >= rectX8 && x - radius <= rectX8 + rectW8 && y + radius >= rectY8 && y - radius <= rectY8 + rectH8) {reset();}}
			if (color9 == "red") {if (x + radius >= rectX9 && x - radius <= rectX9 + rectW9 && y + radius >= rectY9 && y - radius <= rectY9 + rectH9) {reset();}}
			if (color10 == "red") {if (x + radius >= rectX10 && x - radius <= rectX10 + rectW10 && y + radius >= rectY10 && y - radius <= rectY10 + rectH10) {reset();}}
			if (color11 == "red") {if (x + radius >= rectX11 && x - radius <= rectX11 + rectW11 && y + radius >= rectY11 && y - radius <= rectY11 + rectH11) {reset();}}
			if (color12 == "red") {if (x + radius >= rectX12 && x - radius <= rectX12 + rectW12 && y + radius >= rectY12 && y - radius <= rectY12 + rectH12) {reset();}}
			if (color13 == "red") {if (x + radius >= rectX13 && x - radius <= rectX13 + rectW13 && y + radius >= rectY13 && y - radius <= rectY13 + rectH13) {reset();}}
			if (color14 == "red") {if (x + radius >= rectX14 && x - radius <= rectX14 + rectW14 && y + radius >= rectY14 && y - radius <= rectY14 + rectH14) {reset();}}
			if (color15 == "red") {if (x + radius >= rectX15 && x - radius <= rectX15 + rectW15 && y + radius >= rectY15 && y - radius <= rectY15 + rectH15) {reset();}}
		}
		if (color1 == "magenta") {if (x + radius >= rectX1 && x - radius <= rectX1 + rectW1 && y + radius >= rectY1 && y - radius <= rectY1 + rectH1) {reset();}}
		if (color2 == "magenta") {if (x + radius >= rectX2 && x - radius <= rectX2 + rectW2 && y + radius >= rectY2 && y - radius <= rectY2 + rectH2) {reset();}}
		if (color3 == "magenta") {if (x + radius >= rectX3 && x - radius <= rectX3 + rectW3 && y + radius >= rectY3 && y - radius <= rectY3 + rectH3) {reset();}}
		if (color4 == "magenta") {if (x + radius >= rectX4 && x - radius <= rectX4 + rectW4 && y + radius >= rectY4 && y - radius <= rectY4 + rectH4) {reset();}}
		if (color5 == "magenta") {if (x + radius >= rectX5 && x - radius <= rectX5 + rectW5 && y + radius >= rectY5 && y - radius <= rectY5 + rectH5) {reset();}}
		if (color6 == "magenta") {if (x + radius >= rectX6 && x - radius <= rectX6 + rectW6 && y + radius >= rectY6 && y - radius <= rectY6 + rectH6) {reset();}}
		if (color7 == "magenta") {if (x + radius >= rectX7 && x - radius <= rectX7 + rectW7 && y + radius >= rectY7 && y - radius <= rectY7 + rectH7) {reset();}}
		if (color8 == "magenta") {if (x + radius >= rectX8 && x - radius <= rectX8 + rectW8 && y + radius >= rectY8 && y - radius <= rectY8 + rectH8) {reset();}}
		if (color9 == "magenta") {if (x + radius >= rectX9 && x - radius <= rectX9 + rectW9 && y + radius >= rectY9 && y - radius <= rectY9 + rectH9) {reset();}}
		if (color10 == "magenta") {if (x + radius >= rectX10 && x - radius <= rectX10 + rectW10 && y + radius >= rectY10 && y - radius <= rectY10 + rectH10) {reset();}}
		if (color11 == "magenta") {if (x + radius >= rectX11 && x - radius <= rectX11 + rectW11 && y + radius >= rectY11 && y - radius <= rectY11 + rectH11) {reset();}}
		if (color12 == "magenta") {if (x + radius >= rectX12 && x - radius <= rectX12 + rectW12 && y + radius >= rectY12 && y - radius <= rectY12 + rectH12) {reset();}}
		if (color13 == "magenta") {if (x + radius >= rectX13 && x - radius <= rectX13 + rectW13 && y + radius >= rectY13 && y - radius <= rectY13 + rectH13) {reset();}}
		if (color14 == "magenta") {if (x + radius >= rectX14 && x - radius <= rectX14 + rectW14 && y + radius >= rectY14 && y - radius <= rectY14 + rectH14) {reset();}}
		if (color15 == "magenta") {if (x + radius >= rectX15 && x - radius <= rectX15 + rectW15 && y + radius >= rectY15 && y - radius <= rectY15 + rectH15) {reset();}}
		if (color1 == "lime") {if (x + radius >= rectX1 && x - radius <= rectX1 + rectW1 && y + radius >= rectY1 && y - radius <= rectY1 + rectH1) {reset("l"); grayTimer = 0; nextLevel();}}
		if (color2 == "lime") {if (x + radius >= rectX2 && x - radius <= rectX2 + rectW2 && y + radius >= rectY2 && y - radius <= rectY2 + rectH2) {reset("l"); grayTimer = 0; nextLevel();}}
		if (color3 == "lime") {if (x + radius >= rectX3 && x - radius <= rectX3 + rectW3 && y + radius >= rectY3 && y - radius <= rectY3 + rectH3) {reset("l"); grayTimer = 0; nextLevel();}}
		if (color4 == "lime") {if (x + radius >= rectX4 && x - radius <= rectX4 + rectW4 && y + radius >= rectY4 && y - radius <= rectY4 + rectH4) {reset("l"); grayTimer = 0; nextLevel();}}
		if (color5 == "lime") {if (x + radius >= rectX5 && x - radius <= rectX5 + rectW5 && y + radius >= rectY5 && y - radius <= rectY5 + rectH5) {reset("l"); grayTimer = 0; nextLevel();}}
		if (color6 == "lime") {if (x + radius >= rectX6 && x - radius <= rectX6 + rectW6 && y + radius >= rectY6 && y - radius <= rectY6 + rectH6) {reset("l"); grayTimer = 0; nextLevel();}}
		if (color7 == "lime") {if (x + radius >= rectX7 && x - radius <= rectX7 + rectW7 && y + radius >= rectY7 && y - radius <= rectY7 + rectH7) {reset("l"); grayTimer = 0; nextLevel();}}
		if (color8 == "lime") {if (x + radius >= rectX8 && x - radius <= rectX8 + rectW8 && y + radius >= rectY8 && y - radius <= rectY8 + rectH8) {reset("l"); grayTimer = 0; nextLevel();}}
		if (color9 == "lime") {if (x + radius >= rectX9 && x - radius <= rectX9 + rectW9 && y + radius >= rectY9 && y - radius <= rectY9 + rectH9) {reset("l"); grayTimer = 0; nextLevel();}}
		if (color10 == "lime") {if (x + radius >= rectX10 && x - radius <= rectX10 + rectW10 && y + radius >= rectY10 && y - radius <= rectY10 + rectH10) {reset(); grayTimer = 0; nextLevel();}}
		if (color11 == "lime") {if (x + radius >= rectX11 && x - radius <= rectX11 + rectW11 && y + radius >= rectY11 && y - radius <= rectY11 + rectH11) {reset(); grayTimer = 0; nextLevel();}}
		if (color12 == "lime") {if (x + radius >= rectX12 && x - radius <= rectX12 + rectW12 && y + radius >= rectY12 && y - radius <= rectY12 + rectH12) {reset(); grayTimer = 0; nextLevel();}}
		if (color13 == "lime") {if (x + radius >= rectX13 && x - radius <= rectX13 + rectW13 && y + radius >= rectY13 && y - radius <= rectY13 + rectH13) {reset(); grayTimer = 0; nextLevel();}}
		if (color14 == "lime") {if (x + radius >= rectX14 && x - radius <= rectX14 + rectW14 && y + radius >= rectY14 && y - radius <= rectY14 + rectH14) {reset(); grayTimer = 0; nextLevel();}}
		if (color15 == "lime") {if (x + radius >= rectX15 && x - radius <= rectX15 + rectW15 && y + radius >= rectY15 && y - radius <= rectY15 + rectH15) {reset(); grayTimer = 0; nextLevel();}}
		if (color1 == "yellow") {if (x + radius >= rectX1 && x - radius <= rectX1 + rectW1 && y + radius >= rectY1 && y - radius <= rectY1 + rectH1) {radius = 10;circlestroke();}}
		if (color2 == "yellow") {if (x + radius >= rectX2 && x - radius <= rectX2 + rectW2 && y + radius >= rectY2 && y - radius <= rectY2 + rectH2) {radius = 10;circlestroke();}}
		if (color3 == "yellow") {if (x + radius >= rectX3 && x - radius <= rectX3 + rectW3 && y + radius >= rectY3 && y - radius <= rectY3 + rectH3) {radius = 10;circlestroke();}}
		if (color4 == "yellow") {if (x + radius >= rectX4 && x - radius <= rectX4 + rectW4 && y + radius >= rectY4 && y - radius <= rectY4 + rectH4) {radius = 10;circlestroke();}}
		if (color5 == "yellow") {if (x + radius >= rectX5 && x - radius <= rectX5 + rectW5 && y + radius >= rectY5 && y - radius <= rectY5 + rectH5) {radius = 10;circlestroke();}}
		if (color6 == "yellow") {if (x + radius >= rectX6 && x - radius <= rectX6 + rectW6 && y + radius >= rectY6 && y - radius <= rectY6 + rectH6) {radius = 10;circlestroke();}}
		if (color7 == "yellow") {if (x + radius >= rectX7 && x - radius <= rectX7 + rectW7 && y + radius >= rectY7 && y - radius <= rectY7 + rectH7) {radius = 10;circlestroke();}}
		if (color8 == "yellow") {if (x + radius >= rectX8 && x - radius <= rectX8 + rectW8 && y + radius >= rectY8 && y - radius <= rectY8 + rectH8) {radius = 10;circlestroke();}}
		if (color9 == "yellow") {if (x + radius >= rectX9 && x - radius <= rectX9 + rectW9 && y + radius >= rectY9 && y - radius <= rectY9 + rectH9) {radius = 10;circlestroke();}}
		if (color10 == "yellow") {if (x + radius >= rectX10 && x - radius <= rectX10 + rectW10 && y + radius >= rectY10 && y - radius <= rectY10 + rectH10) {radius = 10;circlestroke();}}
		if (color11 == "yellow") {if (x + radius >= rectX11 && x - radius <= rectX11 + rectW11 && y + radius >= rectY11 && y - radius <= rectY11 + rectH11) {radius = 10;circlestroke();}}
		if (color12 == "yellow") {if (x + radius >= rectX12 && x - radius <= rectX12 + rectW12 && y + radius >= rectY12 && y - radius <= rectY12 + rectH12) {radius = 10;circlestroke();}}
		if (color13 == "yellow") {if (x + radius >= rectX13 && x - radius <= rectX13 + rectW13 && y + radius >= rectY13 && y - radius <= rectY13 + rectH13) {radius = 10;circlestroke();}}
		if (color14 == "yellow") {if (x + radius >= rectX14 && x - radius <= rectX14 + rectW14 && y + radius >= rectY14 && y - radius <= rectY14 + rectH14) {radius = 10;circlestroke();}}
		if (color15 == "yellow") {if (x + radius >= rectX15 && x - radius <= rectX15 + rectW15 && y + radius >= rectY15 && y - radius <= rectY15 + rectH15) {radius = 10;circlestroke();}}
		if (color1 == "aqua") {if (x + radius >= rectX1 && x - radius <= rectX1 + rectW1 && y + radius >= rectY1 && y - radius <= rectY1 + rectH1) {teleportation = true; circlestroke(); grayTimer = 0; opacity = 0.5;}}
		if (color2 == "aqua") {if (x + radius >= rectX2 && x - radius <= rectX2 + rectW2 && y + radius >= rectY2 && y - radius <= rectY2 + rectH2) {teleportation = true; circlestroke(); grayTimer = 0; opacity = 0.5;}}
		if (color3 == "aqua") {if (x + radius >= rectX3 && x - radius <= rectX3 + rectW3 && y + radius >= rectY3 && y - radius <= rectY3 + rectH3) {teleportation = true; circlestroke(); grayTimer = 0; opacity = 0.5;}}
		if (color4 == "aqua") {if (x + radius >= rectX4 && x - radius <= rectX4 + rectW4 && y + radius >= rectY4 && y - radius <= rectY4 + rectH4) {teleportation = true; circlestroke(); grayTimer = 0; opacity = 0.5;}}
		if (color5 == "aqua") {if (x + radius >= rectX5 && x - radius <= rectX5 + rectW5 && y + radius >= rectY5 && y - radius <= rectY5 + rectH5) {teleportation = true; circlestroke(); grayTimer = 0; opacity = 0.5;}}
		if (color6 == "aqua") {if (x + radius >= rectX6 && x - radius <= rectX6 + rectW6 && y + radius >= rectY6 && y - radius <= rectY6 + rectH6) {teleportation = true; circlestroke(); grayTimer = 0; opacity = 0.5;}}
		if (color7 == "aqua") {if (x + radius >= rectX7 && x - radius <= rectX7 + rectW7 && y + radius >= rectY7 && y - radius <= rectY7 + rectH7) {teleportation = true; circlestroke(); grayTimer = 0; opacity = 0.5;}}
		if (color8 == "aqua") {if (x + radius >= rectX8 && x - radius <= rectX8 + rectW8 && y + radius >= rectY8 && y - radius <= rectY8 + rectH8) {teleportation = true; circlestroke(); grayTimer = 0; opacity = 0.5;}}
		if (color9 == "aqua") {if (x + radius >= rectX9 && x - radius <= rectX9 + rectW9 && y + radius >= rectY9 && y - radius <= rectY9 + rectH9) {teleportation = true; circlestroke(); grayTimer = 0; opacity = 0.5;}}
		if (color10 == "aqua") {if (x + radius >= rectX10 && x - radius <= rectX10 + rectW10 && y + radius >= rectY10 && y - radius <= rectY10 + rectH10) {teleportation = true; circlestroke(); grayTimer = 0; opacity = 0.5;}}
		if (color11 == "aqua") {if (x + radius >= rectX11 && x - radius <= rectX11 + rectW11 && y + radius >= rectY11 && y - radius <= rectY11 + rectH11) {teleportation = true; circlestroke(); grayTimer = 0; opacity = 0.5;}}
		if (color12 == "aqua") {if (x + radius >= rectX12 && x - radius <= rectX12 + rectW12 && y + radius >= rectY12 && y - radius <= rectY12 + rectH12) {teleportation = true; circlestroke(); grayTimer = 0; opacity = 0.5;}}
		if (color13 == "aqua") {if (x + radius >= rectX13 && x - radius <= rectX13 + rectW13 && y + radius >= rectY13 && y - radius <= rectY13 + rectH13) {teleportation = true; circlestroke(); grayTimer = 0; opacity = 0.5;}}
		if (color14 == "aqua") {if (x + radius >= rectX14 && x - radius <= rectX14 + rectW14 && y + radius >= rectY14 && y - radius <= rectY14 + rectH14) {teleportation = true; circlestroke(); grayTimer = 0; opacity = 0.5;}}
		if (color15 == "aqua") {if (x + radius >= rectX15 && x - radius <= rectX15 + rectW15 && y + radius >= rectY15 && y - radius <= rectY15 + rectH15) {teleportation = true; circlestroke(); grayTimer = 0; opacity = 0.5;}}
		if (color1 == "lightgray") {if (x + radius >= rectX1 && x - radius <= rectX1 + rectW1 && y + radius >= rectY1 && y - radius <= rectY1 + rectH1) {grayTimer = 120; if (gloMode == "e") {grayTimer *= 2}}}
		if (color2 == "lightgray") {if (x + radius >= rectX2 && x - radius <= rectX2 + rectW2 && y + radius >= rectY2 && y - radius <= rectY2 + rectH2) {grayTimer = 120; if (gloMode == "e") {grayTimer *= 2}}}
		if (color3 == "lightgray") {if (x + radius >= rectX3 && x - radius <= rectX3 + rectW3 && y + radius >= rectY3 && y - radius <= rectY3 + rectH3) {grayTimer = 120; if (gloMode == "e") {grayTimer *= 2}}}
		if (color4 == "lightgray") {if (x + radius >= rectX4 && x - radius <= rectX4 + rectW4 && y + radius >= rectY4 && y - radius <= rectY4 + rectH4) {grayTimer = 120; if (gloMode == "e") {grayTimer *= 2}}}
		if (color5 == "lightgray") {if (x + radius >= rectX5 && x - radius <= rectX5 + rectW5 && y + radius >= rectY5 && y - radius <= rectY5 + rectH5) {grayTimer = 120; if (gloMode == "e") {grayTimer *= 2}}}
		if (color6 == "lightgray") {if (x + radius >= rectX6 && x - radius <= rectX6 + rectW6 && y + radius >= rectY6 && y - radius <= rectY6 + rectH6) {grayTimer = 120; if (gloMode == "e") {grayTimer *= 2}}}
		if (color7 == "lightgray") {if (x + radius >= rectX7 && x - radius <= rectX7 + rectW7 && y + radius >= rectY7 && y - radius <= rectY7 + rectH7) {grayTimer = 120; if (gloMode == "e") {grayTimer *= 2}}}
		if (color8 == "lightgray") {if (x + radius >= rectX8 && x - radius <= rectX8 + rectW8 && y + radius >= rectY8 && y - radius <= rectY8 + rectH8) {grayTimer = 120; if (gloMode == "e") {grayTimer *= 2}}}
		if (color9 == "lightgray") {if (x + radius >= rectX9 && x - radius <= rectX9 + rectW9 && y + radius >= rectY9 && y - radius <= rectY9 + rectH9) {grayTimer = 120; if (gloMode == "e") {grayTimer *= 2}}}
		if (color10 == "lightgray") {if (x + radius >= rectX10 && x - radius <= rectX10 + rectW10 && y + radius >= rectY10 && y - radius <= rectY10 + rectH10) {grayTimer = 120; if (gloMode == "e") {grayTimer *= 2}}}
		if (color11 == "lightgray") {if (x + radius >= rectX11 && x - radius <= rectX11 + rectW11 && y + radius >= rectY11 && y - radius <= rectY11 + rectH11) {grayTimer = 120; if (gloMode == "e") {grayTimer *= 2}}}
		if (color12 == "lightgray") {if (x + radius >= rectX12 && x - radius <= rectX12 + rectW12 && y + radius >= rectY12 && y - radius <= rectY12 + rectH12) {grayTimer = 120; if (gloMode == "e") {grayTimer *= 2}}}
		if (color13 == "lightgray") {if (x + radius >= rectX13 && x - radius <= rectX13 + rectW13 && y + radius >= rectY13 && y - radius <= rectY13 + rectH13) {grayTimer = 120; if (gloMode == "e") {grayTimer *= 2}}}
		if (color14 == "lightgray") {if (x + radius >= rectX14 && x - radius <= rectX14 + rectW14 && y + radius >= rectY14 && y - radius <= rectY14 + rectH14) {grayTimer = 120; if (gloMode == "e") {grayTimer *= 2}}}
		if (color15 == "lightgray") {if (x + radius >= rectX15 && x - radius <= rectX15 + rectW15 && y + radius >= rectY15 && y - radius <= rectY15 + rectH15) {grayTimer = 120; if (gloMode == "e") {grayTimer *= 2}}}
		if (color1 == "purple") {if (x + radius >= rectX1 && x - radius <= rectX1 + rectW1 && y + radius >= rectY1 && y - radius <= rectY1 + rectH1) {keyDoor = "open"}}
		if (color2 == "purple") {if (x + radius >= rectX2 && x - radius <= rectX2 + rectW2 && y + radius >= rectY2 && y - radius <= rectY2 + rectH2) {keyDoor = "open"}}
		if (color3 == "purple") {if (x + radius >= rectX3 && x - radius <= rectX3 + rectW3 && y + radius >= rectY3 && y - radius <= rectY3 + rectH3) {keyDoor = "open"}}
		if (color4 == "purple") {if (x + radius >= rectX4 && x - radius <= rectX4 + rectW4 && y + radius >= rectY4 && y - radius <= rectY4 + rectH4) {keyDoor = "open"}}
		if (color5 == "purple") {if (x + radius >= rectX5 && x - radius <= rectX5 + rectW5 && y + radius >= rectY5 && y - radius <= rectY5 + rectH5) {keyDoor = "open"}}
		if (color6 == "purple") {if (x + radius >= rectX6 && x - radius <= rectX6 + rectW6 && y + radius >= rectY6 && y - radius <= rectY6 + rectH6) {keyDoor = "open"}}
		if (color7 == "purple") {if (x + radius >= rectX7 && x - radius <= rectX7 + rectW7 && y + radius >= rectY7 && y - radius <= rectY7 + rectH7) {keyDoor = "open"}}
		if (color8 == "purple") {if (x + radius >= rectX8 && x - radius <= rectX8 + rectW8 && y + radius >= rectY8 && y - radius <= rectY8 + rectH8) {keyDoor = "open"}}
		if (color9 == "purple") {if (x + radius >= rectX9 && x - radius <= rectX9 + rectW9 && y + radius >= rectY9 && y - radius <= rectY9 + rectH9) {keyDoor = "open"}}
		if (color10 == "purple") {if (x + radius >= rectX10 && x - radius <= rectX10 + rectW10 && y + radius >= rectY10 && y - radius <= rectY10 + rectH10) {keyDoor = "open"}}
		if (color11 == "purple") {if (x + radius >= rectX11 && x - radius <= rectX11 + rectW11 && y + radius >= rectY11 && y - radius <= rectY11 + rectH11) {keyDoor = "open"}}
		if (color12 == "purple") {if (x + radius >= rectX12 && x - radius <= rectX12 + rectW12 && y + radius >= rectY12 && y - radius <= rectY12 + rectH12) {keyDoor = "open"}}
		if (color13 == "purple") {if (x + radius >= rectX13 && x - radius <= rectX13 + rectW13 && y + radius >= rectY13 && y - radius <= rectY13 + rectH13) {keyDoor = "open"}}
		if (color14 == "purple") {if (x + radius >= rectX14 && x - radius <= rectX14 + rectW14 && y + radius >= rectY14 && y - radius <= rectY14 + rectH14) {keyDoor = "open"}}
		if (color15 == "purple") {if (x + radius >= rectX15 && x - radius <= rectX15 + rectW15 && y + radius >= rectY15 && y - radius <= rectY15 + rectH15) {keyDoor = "open"}}
		if (color1 == "saddlebrown") {if (x + radius >= rectX1 && x - radius <= rectX1 + rectW1 && y + radius >= rectY1 && y - radius <= rectY1 + rectH1) {if (keyDoor == "closed") {reset();}}}
		if (color2 == "saddlebrown") {if (x + radius >= rectX2 && x - radius <= rectX2 + rectW2 && y + radius >= rectY2 && y - radius <= rectY2 + rectH2) {if (keyDoor == "closed") {reset();}}}
		if (color3 == "saddlebrown") {if (x + radius >= rectX3 && x - radius <= rectX3 + rectW3 && y + radius >= rectY3 && y - radius <= rectY3 + rectH3) {if (keyDoor == "closed") {reset();}}}
		if (color4 == "saddlebrown") {if (x + radius >= rectX4 && x - radius <= rectX4 + rectW4 && y + radius >= rectY4 && y - radius <= rectY4 + rectH4) {if (keyDoor == "closed") {reset();}}}
		if (color5 == "saddlebrown") {if (x + radius >= rectX5 && x - radius <= rectX5 + rectW5 && y + radius >= rectY5 && y - radius <= rectY5 + rectH5) {if (keyDoor == "closed") {reset();}}}
		if (color6 == "saddlebrown") {if (x + radius >= rectX6 && x - radius <= rectX6 + rectW6 && y + radius >= rectY6 && y - radius <= rectY6 + rectH6) {if (keyDoor == "closed") {reset();}}}
		if (color7 == "saddlebrown") {if (x + radius >= rectX7 && x - radius <= rectX7 + rectW7 && y + radius >= rectY7 && y - radius <= rectY7 + rectH7) {if (keyDoor == "closed") {reset();}}}
		if (color8 == "saddlebrown") {if (x + radius >= rectX8 && x - radius <= rectX8 + rectW8 && y + radius >= rectY8 && y - radius <= rectY8 + rectH8) {if (keyDoor == "closed") {reset();}}}
		if (color9 == "saddlebrown") {if (x + radius >= rectX9 && x - radius <= rectX9 + rectW9 && y + radius >= rectY9 && y - radius <= rectY9 + rectH9) {if (keyDoor == "closed") {reset();}}}
		if (color10 == "saddlebrown") {if (x + radius >= rectX10 && x - radius <= rectX10 + rectW10 && y + radius >= rectY10 && y - radius <= rectY10 + rectH10) {if (keyDoor == "closed") {reset();}}}
		if (color11 == "saddlebrown") {if (x + radius >= rectX11 && x - radius <= rectX11 + rectW11 && y + radius >= rectY11 && y - radius <= rectY11 + rectH11) {if (keyDoor == "closed") {reset();}}}
		if (color12 == "saddlebrown") {if (x + radius >= rectX12 && x - radius <= rectX12 + rectW12 && y + radius >= rectY12 && y - radius <= rectY12 + rectH12) {if (keyDoor == "closed") {reset();}}}
		if (color13 == "saddlebrown") {if (x + radius >= rectX13 && x - radius <= rectX13 + rectW13 && y + radius >= rectY13 && y - radius <= rectY13 + rectH13) {if (keyDoor == "closed") {reset();}}}
		if (color14 == "saddlebrown") {if (x + radius >= rectX14 && x - radius <= rectX14 + rectW14 && y + radius >= rectY14 && y - radius <= rectY14 + rectH14) {if (keyDoor == "closed") {reset();}}}
		if (color15 == "saddlebrown") {if (x + radius >= rectX15 && x - radius <= rectX15 + rectW15 && y + radius >= rectY15 && y - radius <= rectY15 + rectH15) {if (keyDoor == "closed") {reset();}}}
	}
	if (teleportation == true) {
		if (color1 == "darkblue") {if (x + radius >= rectX1 && x - radius <= rectX1 + rectW1 && y + radius >= rectY1 && y - radius <= rectY1 + rectH1) {teleportation = false; x = rectX1 + rectW1 / 2; y = rectY1 + rectH1 / 2; circlestroke(); opacity = 1.0;}}
		if (color2 == "darkblue") {if (x + radius >= rectX2 && x - radius <= rectX2 + rectW2 && y + radius >= rectY2 && y - radius <= rectY2 + rectH2) {teleportation = false; x = rectX2 + rectW2 / 2; y = rectY2 + rectH2 / 2; circlestroke(); opacity = 1.0;}}
		if (color3 == "darkblue") {if (x + radius >= rectX3 && x - radius <= rectX3 + rectW3 && y + radius >= rectY3 && y - radius <= rectY3 + rectH3) {teleportation = false; x = rectX3 + rectW3 / 2; y = rectY3 + rectH3 / 2; circlestroke(); opacity = 1.0;}}
		if (color4 == "darkblue") {if (x + radius >= rectX4 && x - radius <= rectX4 + rectW4 && y + radius >= rectY4 && y - radius <= rectY4 + rectH4) {teleportation = false; x = rectX4 + rectW4 / 2; y = rectY4 + rectH4 / 2; circlestroke(); opacity = 1.0;}}
		if (color5 == "darkblue") {if (x + radius >= rectX5 && x - radius <= rectX5 + rectW5 && y + radius >= rectY5 && y - radius <= rectY5 + rectH5) {teleportation = false; x = rectX5 + rectW5 / 2; y = rectY5 + rectH5 / 2; circlestroke(); opacity = 1.0;}}
		if (color6 == "darkblue") {if (x + radius >= rectX6 && x - radius <= rectX6 + rectW6 && y + radius >= rectY6 && y - radius <= rectY6 + rectH6) {teleportation = false; x = rectX6 + rectW6 / 2; y = rectY6 + rectH6 / 2; circlestroke(); opacity = 1.0;}}
		if (color7 == "darkblue") {if (x + radius >= rectX7 && x - radius <= rectX7 + rectW7 && y + radius >= rectY7 && y - radius <= rectY7 + rectH7) {teleportation = false; x = rectX7 + rectW7 / 2; y = rectY7 + rectH7 / 2; circlestroke(); opacity = 1.0;}}
		if (color8 == "darkblue") {if (x + radius >= rectX8 && x - radius <= rectX8 + rectW8 && y + radius >= rectY8 && y - radius <= rectY8 + rectH8) {teleportation = false; x = rectX8 + rectW8 / 2; y = rectY8 + rectH8 / 2; circlestroke(); opacity = 1.0;}}
		if (color9 == "darkblue") {if (x + radius >= rectX9 && x - radius <= rectX9 + rectW9 && y + radius >= rectY9 && y - radius <= rectY9 + rectH9) {teleportation = false; x = rectX9 + rectW9 / 2; y = rectY9 + rectH9 / 2; circlestroke(); opacity = 1.0;}}
		if (color10 == "darkblue") {if (x + radius >= rectX10 && x - radius <= rectX10 + rectW10 && y + radius >= rectY10 && y - radius <= rectY10 + rectH10) {teleportation = false; x = rectX10 + rectW10 / 2; y = rectY10 + rectH10 / 2; circlestroke(); opacity = 1.0;}}
		if (color11 == "darkblue") {if (x + radius >= rectX11 && x - radius <= rectX11 + rectW11 && y + radius >= rectY11 && y - radius <= rectY11 + rectH11) {teleportation = false; x = rectX11 + rectW11 / 2; y = rectY11 + rectH11 / 2; circlestroke(); opacity = 1.0;}}
		if (color12 == "darkblue") {if (x + radius >= rectX12 && x - radius <= rectX12 + rectW12 && y + radius >= rectY12 && y - radius <= rectY12 + rectH12) {teleportation = false; x = rectX12 + rectW12 / 2; y = rectY12 + rectH12 / 2; circlestroke(); opacity = 1.0;}}
		if (color13 == "darkblue") {if (x + radius >= rectX13 && x - radius <= rectX13 + rectW13 && y + radius >= rectY13 && y - radius <= rectY13 + rectH13) {teleportation = false; x = rectX13 + rectW13 / 2; y = rectY13 + rectH13 / 2; circlestroke(); opacity = 1.0;}}
		if (color14 == "darkblue") {if (x + radius >= rectX14 && x - radius <= rectX14 + rectW14 && y + radius >= rectY14 && y - radius <= rectY14 + rectH14) {teleportation = false; x = rectX14 + rectW14 / 2; y = rectY14 + rectH14 / 2; circlestroke(); opacity = 1.0;}}
		if (color15 == "darkblue") {if (x + radius >= rectX15 && x - radius <= rectX15 + rectW15 && y + radius >= rectY15 && y - radius <= rectY15 + rectH15) {teleportation = false; x = rectX15 + rectW15 / 2; y = rectY15 + rectH15 / 2; circlestroke(); opacity = 1.0;}}
	}
}
}
function levelDraw() {
	if (level > 0 && level <= 10) {board.style.backgroundColor = "white"; music("music2");}
	if (level == 1) {
		recta(1, "red", 0, 150, 300, 100);
		recta(2, "red", board.width - 150, 150, 150, 100)
		recta(3, "lime", 0, 0, board.width, 100)
		ttl.font = "25px Helvetica";
		ttl.textAlign = "center";
		ttl.fillStyle = "black";
		ttl.fillText("Use the left and right arrow keys to turn!", board.width / 2, board.height - 100);
		ttl.fillText("Red hurts you!", 150, 200);
		ttl.fillText("Touch green to go to the next level!", board.width / 2, 50);
	}
	if (level == 2) {
		recta(1, "red", 0, 150, 300, 150);
		recta(2, "lime", 0, 100, 300, 100);
		recta(3, "red", 275, 100, 25, 100);
		recta(4, "red", 300, 150, 200, 25);
	}
	if (level == 3) {
		recta(1, "red", 200, board.height - 300, 25, 300);
		// recta(2, "red", 400, board.height - 300, 25, 200);
		recta(3, "red", 200, 150, 225, 180);
		recta(4, "lime", 225, 330, 175, board.height - 330);
	}
	if (level == 4) {
		recta(1, "red", 0, 0, board.width, 300);
		recta(2, "lime", 400, 50, 300, 300);
		recta(3, "red", 300, board.height - 50, 340, 50);
	}
	if (level == 5) {
		recta(1, "lime", 0, 0, 150, 100);
		recta(2, "red", 0, 150, 250, 100);
		recta(3, "red", 250, 50, 200, 300);
	}
	if (level == 6) {
		recta(1, "lime", 0, 0, board.width, 15);
		recta(2, "red", 0, 150, board.width / 2 - 100, 15);
		recta(3, "red", board.width / 2 + 100, 150, board.width/ 2 - 100, 15);
		recta(4, "red", 0, 250, board.width / 2 - 100, 15);
		recta(5, "red", board.width / 2 + 100, 250, board.width/ 2 - 100, 15);
		// recta(6, "red", board.width / 2 + 50, board.height / 2 - 100, 40, 30);
	}
	if (level == 7) {
		recta(1, "lime", 0, 0, 90, 120,);
		recta(2, "red", 0, 250, 350, 50);
		recta(3, "red", board.width - 300, 0, 300, 75);
	}
	if (level == 8) {
		recta(1, "red", 0, 0, 450, 100);
		recta(2, "lime", 450, 0, board.width - 450, 100);
		recta(3, "red", 0, 200, 350, 75);
		recta(4, "red", 550, 200, board.width - 550, 75);
	}
	if (level == 9) {
		recta(1, "red", board.width - 250, 150, 25, board.height - 150);
		recta(2, "red", board.width - 250, 350, 75, 50);
		recta(3, "lime", board.width - 50, board.height - 50, 50, 50);
		recta(4, "red", board.width - 50, 200, 75, 50);
	}
	if (level == 10) {
		recta(1, "red", 0, 0, 500, 300);
		recta(2, "lime", 500, 0, 25, 300);
		recta(3, "red", 500, 275, 50, 25);
	}
	if (level > 10 && level <= 20) {board.style.backgroundColor = "black"; music("music3");}
	if (level == 11) {
		recta(1, "red", 15, 0, 25, 75);
		recta(2, "lime", 0, 0, 15, 15)
		recta(3, "red", 0, 200, 500, 100);
		recta(4, "yellow", 250, 250, 100, 150);
		ttl.font = "25px Helvetica";
		ttl.textAlign = "center";
		ttl.fillStyle = "white";
		ttl.fillText("Yellow makes you shrink!", board.width / 2, board.height - 50);
	}
	if (level == 12) {
		recta(1, "lime", 0, 150, 150, 100);
		recta(2, "red", 0, 250, 350, 50);
		recta(3, "red", 150, 50, 100, 200);
		recta(4, "red", 350, 50, board.width - 350, 25);
		recta(5, "yellow", board.width - 90, board.height - 120, 90, 120);
	}
	if (level == 13) {
		recta(1, "red", 0, 275, 500, 25);
		recta(3, "yellow", 125, 75, 375, 200);
		recta(4, "red", 100, 50, 400, 25);
		recta(5, "red", 500, 50, 25, 250);
		recta(2, "red", board.width - 100, board.height - 30, 100, 15);
		recta(6, "lime", board.width - 100, board.height - 15, 100, 15);
	}
	if (level == 14) {
		recta(1, "yellow", 0, 0, 50, 100);
		recta(2, "red", 0, 100, 200, 20);
		recta(4, "red", 0, 300, 500, 10);
		recta(5, "red", 0, 100, 25, 100);
		recta(6, "lime", 25, 115, 150, 25);
		recta(7, "red", 175, 100, 25, 100);
		recta(8, "red", board.width - 150, 0, 150, 150);
	}
	if (level == 15) {
		recta(1, "lime", 0, 0, 15, 15)
		recta(2, "red", 0, 125, 250, 100)
		recta(3, "red", 0, 150, 350, 100)
		recta(4, "red", 0, 200, 450, 100)
		recta(5, "red", 225, 0, board.width - 225, 25)
	}
	if (level == 16) {
		recta(1, "lime", 0, 0, 15, 15)
		recta(2, "red", 0, 15, 15, 15)
		recta(3, "red", 0, 100, 500, 150)
		recta(4, "red", 0, 250, 50, 75)
		recta(5, "yellow", 50, 250, 300, 25)
		// recta(6, "red", 250, 250, 50, 75)
	}
	if (level == 17) {
		recta(1, "lime", 0, 0, 20, 75)
		recta(2, "red", 0, 100, 450, 25)
		recta(3, "red", 300, 100, 15, 150)
		recta(4, "red", 300, 400, 15, board.width - 400)
		recta(5, "red", board.width - 30, 100, 30, 25)
	}
	if (level == 18) {
		recta(1, "red", 200, 100, 225, 25)
		recta(2, "red", 200, 125, 25, board.width - 125)
		recta(3, "red", 400, 125, 25, 175)
		recta(4, "red", 400, board.height - 50, 25, 50)
		recta(5, "lime", 225, board.height - 50, 175, 50)
	}
	if (level == 19) {
		recta(1, "lime", 370, 0, 30, 40)
		recta(2, "red", 400, 0, board.width - 400, board.height)
		recta(3, "red", 0, 200, 100, 100)
		recta(4, "red", 200, 100, 100, 100)
		recta(5, "red", 310, 300, 100, 100)
	}
	if (level == 20) {
		recta(1, "red", 0, 0, 100, board.height - 200)
		recta(2, "yellow", 100, 0, 90, 120)
		recta(3, "red", 100, 120, 90, 50)
		recta(4, "red", 350, 15, board.width - 365, board.height - 15)
		recta(5, "lime", board.width - 15, board.height - 15, 15, 15)
	}
	if (level > 20 && level <= 30) {board.style.backgroundColor = "#ff8c00"; music("music4");}
	if (level == 21) {
		recta(1, "aqua", 0, 0, board.width / 2, 100)
		recta(2, "darkblue", board.width / 2 + 25, 0, board.width / 2 - 25, 300)
		recta(3, "red", board.width / 2, 0, 25, board.height)
		recta(4, "lime", board.width / 2 + 25, board.height - 100, board.width / 2 - 25, 100)
		ttl.font = "25px Helvetica";
		ttl.textAlign = "center";
		ttl.fillStyle = "black";
		ttl.fillText("Use light blue to enter", 150, board.height - 75);
		ttl.fillText("teleportation mode!", 150, board.height - 30);
		if (teleportation == true) {
			ttl.font = "25px Helvetica";
			ttl.textAlign = "center";
			ttl.fillStyle = "white";
			ttl.fillText("Touch dark blue to exit", board.width - 150, 75);
			ttl.fillText("teleportation mode!", board.width - 150, 115);
		}
	}
	if (level == 23) {
		recta(1, "red", board.width / 2 - 50, 75, 100, board.height - 75)
		recta(2, "red", board.width / 2 - 50, 300, 250, 100)
		recta(3, "lime", board.width / 2 + 50, 250, 100, 75)
		recta(4, "red", board.width / 2 + 125, 250, 75, 100)
	}
	if (level == 25) {
		recta(1, "lime", 0, 0, 100, 100)
		recta(2, "red", 0, 100, 500, 50)
		recta(3, "red", 200, 100, 15, 125)
		recta(4, "red", 200, 375, 15, board.height - 375)
		recta(5, "red", 400, 100, 15, board.height - 200)
	}
	if (level == 22) {
		recta(1, "lime", 0, 0, 100, 15)
		recta(2, "red", 0, 100, board.width, 175)
		recta(3, "aqua", board.width - 100, 275, 100, board.height - 275)
		recta(4, "darkblue", board.width - 100, 0, 100, 100)
		recta(5, "yellow", 350, 0, 100, 25)
		recta(6, "red", 0, 15, 100, 100)
	}
	if (level == 26) {
		recta(1, "red", 250, 100, 100, 380)
		recta(2, "lime", 350, 150, 50, 50)
		recta(3, "red", 350, 100, 150, 50)
		recta(4, "red", 500, 100, 50, 225)
		recta(5, "red", 480, 325, 70, 50)
	}
	if (level == 27) {
		recta(1, "lime", 0, 0, 100, 100)
		recta(2, "red", 0, 100, 150, 25)
		recta(3, "red", 300, 25, 25, 25)
		recta(4, "red", 0, 300, 400, 25)
		recta(5, "red", 300, 175, board.width - 300, 10)
	}
	if (level == 24) {
		recta(1, "red", 0, 100, 100, 25)
		recta(2, "red", 0, 100, 25, 200)
		recta(3, "aqua", 25, 125, 75, 100)
		recta(4, "red", 0, 300, 500, 25)
		recta(5, "red", 300, 100, 225, 25)
		recta(6, "red", 300, 100, 25, 225)
		recta(7, "red", 500, 100, 25, 225)
		recta(8, "darkblue", 400, 150, 25, 25)
		recta(9, "lime", 325, 250, 175, 50)
	}
	if (level == 28) {
		recta(1, "red", 0, 0, 300, 10)
		recta(2, "red", 0, 0, 10, 150)
		recta(3, "red", 0, 150, 300, 10)
		recta(4, "red", 300, 150, board.width - 400, board.height - 350)
		recta(5, "red", 0, 280, 540, 10)
		recta(6, "aqua", 50, 75, 50, 50)
		recta(7, "darkblue", 60, 230, 15, 15)
		recta(8, "lime", 120, 220, 25, 25)
	}
	if (level == 29) {
		recta(1, "aqua", 0, 0, 100, 100)
		recta(2, "lime",0, board.height - 15, 100, 15)
		recta(3, "red", 0, board.height - 30, 100, 15)
		recta(4, "darkblue", board.width - 100, board.height - 100, 100, 100)
		recta(5, "red", 0, 100, 300, 175)
		recta(6, "red", board.width - 200, 0, 10, 200)
		recta(7, "red", board.width - 200, 200, 200, 10)
		recta(8, "yellow", board.width - 25, 0, 25, 25)
		recta(9, "aqua", board.width - 25, 100, 25, 25)
		recta(10, "darkblue", board.width - 125, 0, 25, 25)
	}
	if (level == 30) {
		recta(1, "red", 200, 150, 150, board.height - 150)
		recta(2, "red", 450, 150, 50, 250)
		recta(3, "red", 200, 150, 250, 10)
		recta(4, "lime", 350, 160, 100, 50)
	}
	if (level > 30 && level <= 40) {board.style.backgroundColor = "lightcyan"; music("music5");}
	if (level == 31) {
		recta(1, "lightgray", 0, 0, 100, 100)
		recta(2, "red", 0, 100, 400, 10)
		recta(3, "red", 0, 100, 10, 210)
		recta(4, "red", 0, 300, 410, 10)
		recta(5, "red", 400, 100, 10, 200)
		recta(6, "lime", 10, 200, 100, 100)
		ttl.font = "25px Helvetica";
		ttl.textAlign = "center";
		ttl.fillStyle = "black";
		ttl.fillText("Gray makes you invincible for a short period of time!", 300, board.height - 100);
	}
	if (level == 32) {
		recta(1, "lime", 0, 0, 100, 100)
		recta(2, "red", 0, 150, 475, 150)
		recta(3, "red", 150, 0, 50, 50)
		recta(4, "red", 250, 25, 50, 50)
		recta(5, "red", 180, 75, 50, 50)
		recta(6, "red", 360, 0, 50, 50)
		recta(7, "red", 450, 25, 50, 50)
		recta(8, "red", 380, 75, 50, 50)
		recta(9, "lightgray", board.width - 100, board.height - 100, 100, 100)
	}
	if (level == 33) {
		recta(1, "lime", 0, 0, 100, 100)
		recta(2, "red", 0, 200, 450, 75)
		recta(3, "red", 200, 0, 100, 200)
		recta(4, "yellow", 0, board.height - 100, 50, 100)
		recta(5, "lightgray", board.width - 15, 0, 15, 100)
		recta(6, "red", board.width - 30, 0, 15, 100)
	}
	if (level == 34) {
		recta(1, "lightgray", 0, 0, 100, 100)
		recta(2, "red", 0, 100, 100, 175)
		recta(3, "red", 100, 0, 250, 10)
		recta(4, "red", 250, 0, 150, 50)
		recta(5, "red", 100, 150, 100, 75)
		recta(6, "red", 0, 275, 300, 10)
		recta(7, "red", 400, 0, 10, 225)
		recta(8, "red", board.width - 150, 0, 150, 150)
		recta(9, "lime", board.width - 100, 0, 100, 100)
	}
	if (level == 35) {
		recta(1, "red", 0, 0, board.width, board.height - 150)
		recta(2, "magenta", 0, 150, 300, 100);
		recta(3, "magenta", board.width - 150, 150, 150, 100)
		recta(4, "lime", 0, 0, board.width, 100)
		recta(5, "lightgray", 0, board.height - 150, board.width, 150)	
		ttl.font = "25px Helvetica";
		ttl.textAlign = "center";
		ttl.fillStyle = "black";
		ttl.fillText("Pink hurts you even when you are invincible!", board.width / 2, board.height / 2 + 50);
	}
	if (level == 36) {
		recta(1, "magenta", 0, 0, board.width - 150, 50)
		recta(2, "red", 0, 50, board.width - 200, 150)
		recta(3, "magenta", 0, 200, board.width - 150, 100)
		recta(4, "lightgray", board.width - 100, 0, 100, 100)
		recta(5, "lime", 0, 50, 100, 150)
	}
	if (level == 37) {
		recta(1, "darkblue", 0, 0, 50, 25)
		recta(2, "lime", 50, 0, 50, 25)
		recta(3, "magenta", 0, 25, 100, 25)
		recta(4, "magenta", 100, 0, 25, 50)
		recta(5, "magenta", 15, 125, 225, 200)
		recta(6, "yellow", 350, board.height - 100, 50, 50)
		recta(7, "lightgray", board.width - 100, 0, 100, 100)
		recta(12, "red", 240, 125, board.width, 200)
		recta(8, "aqua", 240, 200, 125, 125)
		recta(9, "magenta", 240, 300, 200, 25)
		recta(10, "magenta", 400, 300, board.width - 340, board.height - 300)
		recta(11, "magenta", 240, 125, board.width - 340, 10)
	}
	if (level == 38) {
		recta(1, "red", 0, 100, 300, 200)
		recta(2, "red", 390, 100, 10, 200)
		recta(3, "lime", 0, 200, 100, 50)
		recta(4, "lightgray", 300, 290, 90, 10)
		recta(5, "red", 0, 300, 400, 10)
	}
	if (level == 39) {
		recta(2, "red", 0, 0, board.width, board.height - 150)
		recta(5, "red", 150, 0, board.width - 150, board.height)
		recta(1, "lime", 0, 0, 100, 100)
		recta(3, "magenta", 0, 200, board.width - 225, 50)
		recta(4, "lightgray", 0, board.height - 150, 150, 150)
	}
	if (level == 40) {
		recta(1, "magenta", 0, 0, 10, board.height - 150)
		recta(2, "lightgray", 0, board.height - 150, 150, 150)
		recta(3, "red", 10, 10, 140, board.height - 160)
		recta(4, "magenta", 0, 0, board.width, 10)
		recta(5, "red", 160, 10, 140, board.height - 10)
		recta(6, "lime", 160, board.height - 10, 150, 10)
		recta(7, "magenta", 290, 0, board.width - 290, board.height)
		recta(8, "magenta", 150, 100, 10, board.width - 100)
		recta(9, "red", 150, 10, 10, 90)
	}
	if (level > 40 && level < 50) {board.style.backgroundColor = "green"; music("music6");}
	if (level > 40 && level <= 50) {board.style.backgroundColor = "green";}
	if (level == 41) {
		recta(1, "lime", 0, 0, board.width, 100)
		recta(2, "red", 0, 100, board.width / 2 - 100, 25)
		recta(3, "red", board.width / 2 + 100, 100, board.width / 2 - 100, 25)
		recta(4, "saddlebrown", board.width / 2 - 100, 100, 200, 25)
		recta(5, "purple", board.width - 100, board.height / 2, 100, 100)
		ttl.font = "25px Helvetica";
		ttl.textAlign = "center";
		ttl.fillStyle = "black";
		ttl.fillText("Touch purple to remove brown!", board.width / 2 - 75, board.height / 2 + 50);
	}
	if (level == 42) {
		recta(1, "red", 200, 100, 100, board.height - 100)
		recta(2, "saddlebrown", 300, 100, 175, 15)
		recta(3, "red", 475, 100, board.width - 490, board.height - 100)
		recta(4, "purple", board.width - 15, 100, 15, board.height - 100)
		recta(5, "yellow", 0, board.height - 50, 50, 50)
		recta(6, "lime", 300, board.height - 50, 175, 50)
	}
	if (level == 43) {
		recta(1, "red", 0, 50, 450, 200)
		recta(2, "purple", 0, 0, 15, 50)
		recta(3, "lime", 175, 100, 50, 50)
		recta(4, "saddlebrown", board.width - 100, board.height - 100, 100, 100)
		recta(5, "lightgray", board.width - 50, board.height - 50, 50, 50)
	}
	if (level == 44) {
		recta(1, "red", 200, 75, 15, board.height - 75)
		recta(2, "yellow", board.width - 100, 0, 100, 75)
		recta(3, "red", 350, 75, 15, board.height - 150)
		recta(4, "saddlebrown", board.width - 100, board.height - 100, 100, 100)
		recta(5, "lime", board.width - 50, board.height - 50, 50, 50)
		recta(6, "purple", board.width - 15, 90, 15, 100)
		recta(7, "red", 350, 75, board.width - 350, 15)
		recta(8, "red", board.width - 30, 90, 15, 100)
	}
	if (level == 45) {
		recta(1, "lime", 0, 0, 100, 100)
		recta(2, "saddlebrown", 100, 0, 10, 100)
		recta(3, "red", 0, 100, board.width - 100, 25)
		recta(4, "yellow", board.width - 50, 0, 50, 50)
		recta(5, "purple", 0, 125, 100, 175)
		recta(6, "red", 0, 300, board.width - 100, 25)
		recta(7, "red", 100, 225, 50, 75)
		recta(8, "red", 250, 125, 50, 75)
	}
	if (level == 46) {
		recta(1, "red", 0, 0, board.width - 175, 300)
		recta(2, "lightgray", board.width - 175, 0, 100, 100)
		recta(3, "magenta", 0, 250, board.width - 75, 50)
		recta(4, "magenta", board.width - 175, 100, 100, 75)
		recta(5, "lime", board.width - 175, 175, 50, 75)
		recta(6, "magenta", board.width - 125, 175, 50, 75)
	}
	if (level == 47) {
		recta(1, "saddlebrown", board.width - 100, 0, 100, 100)
		recta(2, "lime", board.width - 75, 0, 75, 75)
		recta(3, "red", board.width - 260, board.height - 75, 25, 75)
		recta(4, "red", board.width - 25, board.height - 75, 25, 75)
		recta(5, "purple", board.width - 235, board.height - 50, 210, 50)
	}
	if (level == 48) {
		recta(6, "saddlebrown", 0, 0, 125, 125)
		recta(1, "yellow", 0, 0, 50, 50)
		recta(2, "red", 0, 150, board.width - 15, 25)
		recta(3, "lime", 0, board.height - 15, 100, 15)
		recta(4, "red", 0, board.height - 30, 100, 15)
		recta(5, "purple", board.width - 100, board.height - 100, 100, 100)
		recta(7, "aqua", 0, 175, 100, 100)
		recta(8, "darkblue", board.width / 2 - 50, 0, 100, 100)
	}
	if (level == 49) {
		recta(1, "magenta", 0, 0, board.width / 2 - 75, 100)
		recta(2, "magenta", board.width / 2 + 75, 0, board.width / 2 - 75, 100)
		recta(3, "red", 0, 100, board.width, 50)
		recta(4, "saddlebrown", board.width / 2 - 75, 100, 150, 50)
		recta(5, "lime", board.width / 2 - 75, 0, 150, 100)
		recta(6, "purple", board.width - 15, 150, 15, 50)
		recta(7, "magenta", board.width - 30, 150, 15, 50)
		recta(8, "aqua", 0, 150, 90, 90)
		recta(9, "yellow", 0, 250, 90, 90)
		recta(10, "red", board.width - 130, board.height - 115, 130, 15)
		recta(11, "red", board.width - 130, board.height - 115, 15, 115)
		recta(12, "darkblue", board.width - 115, board.height - 100, 115, 100)
		recta(13, "lightgray", board.width - 100, board.height - 100, 100, 100)
	}
	// if (level == 49) {
	// 	music('music0')
	// 	recta(1, "lime", 0, 0, 100, 100)
	// 	ttl.font = "30px Helvetica";
	// 	ttl.textAlign = "center";
	// 	ttl.fillStyle = "black";
	// 	ttl.fillText("?̵̧̢̧̡̢̡̡̨̡̨̨̧̢̢̨̡̡̡̨̢̡̢̧̡̢̧̤̮͙͈͙̜̱̬̱̱̣̱̱̯͓̹̦͍͙̳͙̹̼̣̫̤̙̱̼̫̮̪̟̳͍̯̙̦͙̥̟̲͍̼͎̞̘͍̭͍̲̹͕͈̞̜̜̱̣͉͇̭͚̘̮̲̺̫̮̹̪̤̖̭̝̲̣̤͎̪̳̦̝̝̟͚̦̬̹̖͚̬̝̖̥̝̠͙͈͎̱͎̟̘̫̦͖͇̦̲͈̩̦̠̥̪̞̠͚͔̱̭̱̙̫̜̟͈͈̜̺̮̪̖͔̗̬͈͙̗̩̺̙͖͎̣̩͉̹̜̞̬̲͖͓̇̇̍̽̉̀̔̿͑̐̈́̿̐̍̀̽̀̋̍̽̿̆̅̐̏̆͆̾̒̀̐͌͘͜͜͜͝ͅͅͅ?̵̧̢̧̡̢̡̡̨̡̨̨̧̢̢̨̡̡̡̨̢̡̢̧̡̢̧̤̮͙͈͙̜̱̬̱̱̣̱̱̯͓̹̦͍͙̳͙̹̼̣̫̤̙̱̼̫̮̪̟̳͍̯̙̦͙̥̟̲͍̼͎̞̘͍̭͍̲̹͕͈̞̜̜̱̣͉͇̭͚̘̮̲̺̫̮̹̪̤̖̭̝̲̣̤͎̪̳̦̝̝̟͚̦̬̹̖͚̬̝̖̥̝̠͙͈͎̱͎̟̘̫̦͖͇̦̲͈̩̦̠̥̪̞̠͚͔̱̭̱̙̫̜̟͈͈̜̺̮̪̖͔̗̬͈͙̗̩̺̙͖͎̣̩͉̹̜̞̬̲͖͓̇̇̍̽̉̀̔̿͑̐̈́̿̐̍̀̽̀̋̍̽̿̆̅̐̏̆͆̾̒̀̐͌͘͜͜͜͝ͅͅͅ?̵̧̢̧̡̢̡̡̨̡̨̨̧̢̢̨̡̡̡̨̢̡̢̧̡̢̧̤̮͙͈͙̜̱̬̱̱̣̱̱̯͓̹̦͍͙̳͙̹̼̣̫̤̙̱̼̫̮̪̟̳͍̯̙̦͙̥̟̲͍̼͎̞̘͍̭͍̲̹͕͈̞̜̜̱̣͉͇̭͚̘̮̲̺̫̮̹̪̤̖̭̝̲̣̤͎̪̳̦̝̝̟͚̦̬̹̖͚̬̝̖̥̝̠͙͈͎̱͎̟̘̫̦͖͇̦̲͈̩̦̠̥̪̞̠͚͔̱̭̱̙̫̜̟͈͈̜̺̮̪̖͔̗̬͈͙̗̩̺̙͖͎̣̩͉̹̜̞̬̲͖͓̇̇̍̽̉̀̔̿͑̐̈́̿̐̍̀̽̀̋̍̽̿̆̅̐̏̆͆̾̒̀̐͌͘͜͜͜͝ͅͅͅ?̵̧̢̧̡̢̡̡̨̡̨̨̧̢̢̨̡̡̡̨̢̡̢̧̡̢̧̤̮͙͈͙̜̱̬̱̱̣̱̱̯͓̹̦͍͙̳͙̹̼̣̫̤̙̱̼̫̮̪̟̳͍̯̙̦͙̥̟̲͍̼͎̞̘͍̭͍̲̹͕͈̞̜̜̱̣͉͇̭͚̘̮̲̺̫̮̹̪̤̖̭̝̲̣̤͎̪̳̦̝̝̟͚̦̬̹̖͚̬̝̖̥̝̠͙͈͎̱͎̟̘̫̦͖͇̦̲͈̩̦̠̥̪̞̠͚͔̱̭̱̙̫̜̟͈͈̜̺̮̪̖͔̗̬͈͙̗̩̺̙͖͎̣̩͉̹̜̞̬̲͖͓̇̇̍̽̉̀̔̿͑̐̈́̿̐̍̀̽̀̋̍̽̿̆̅̐̏̆͆̾̒̀̐͌͘͜͜͜͝ͅͅͅ?̵̧̢̧̡̢̡̡̨̡̨̨̧̢̢̨̡̡̡̨̢̡̢̧̡̢̧̤̮͙͈͙̜̱̬̱̱̣̱̱̯͓̹̦͍͙̳͙̹̼̣̫̤̙̱̼̫̮̪̟̳͍̯̙̦͙̥̟̲͍̼͎̞̘͍̭͍̲̹͕͈̞̜̜̱̣͉͇̭͚̘̮̲̺̫̮̹̪̤̖̭̝̲̣̤͎̪̳̦̝̝̟͚̦̬̹̖͚̬̝̖̥̝̠͙͈͎̱͎̟̘̫̦͖͇̦̲͈̩̦̠̥̪̞̠͚͔̱̭̱̙̫̜̟͈͈̜̺̮̪̖͔̗̬͈͙̗̩̺̙͖͎̣̩͉̹̜̞̬̲͖͓̇̇̍̽̉̀̔̿͑̐̈́̿̐̍̀̽̀̋̍̽̿̆̅̐̏̆͆̾̒̀̐͌͘͜͜͜͝ͅͅͅ?̵̧̢̧̡̢̡̡̨̡̨̨̧̢̢̨̡̡̡̨̢̡̢̧̡̢̧̤̮͙͈͙̜̱̬̱̱̣̱̱̯͓̹̦͍͙̳͙̹̼̣̫̤̙̱̼̫̮̪̟̳͍̯̙̦͙̥̟̲͍̼͎̞̘͍̭͍̲̹͕͈̞̜̜̱̣͉͇̭͚̘̮̲̺̫̮̹̪̤̖̭̝̲̣̤͎̪̳̦̝̝̟͚̦̬̹̖͚̬̝̖̥̝̠͙͈͎̱͎̟̘̫̦͖͇̦̲͈̩̦̠̥̪̞̠͚͔̱̭̱̙̫̜̟͈͈̜̺̮̪̖͔̗̬͈͙̗̩̺̙͖͎̣̩͉̹̜̞̬̲͖͓̇̇̍̽̉̀̔̿͑̐̈́̿̐̍̀̽̀̋̍̽̿̆̅̐̏̆͆̾̒̀̐͌͘͜͜͜͝ͅͅͅ?̵̧̢̧̡̢̡̡̨̡̨̨̧̢̢̨̡̡̡̨̢̡̢̧̡̢̧̤̮͙͈͙̜̱̬̱̱̣̱̱̯͓̹̦͍͙̳͙̹̼̣̫̤̙̱̼̫̮̪̟̳͍̯̙̦͙̥̟̲͍̼͎̞̘͍̭͍̲̹͕͈̞̜̜̱̣͉͇̭͚̘̮̲̺̫̮̹̪̤̖̭̝̲̣̤͎̪̳̦̝̝̟͚̦̬̹̖͚̬̝̖̥̝̠͙͈͎̱͎̟̘̫̦͖͇̦̲͈̩̦̠̥̪̞̠͚͔̱̭̱̙̫̜̟͈͈̜̺̮̪̖͔̗̬͈͙̗̩̺̙͖͎̣̩͉̹̜̞̬̲͖͓̇̇̍̽̉̀̔̿͑̐̈́̿̐̍̀̽̀̋̍̽̿̆̅̐̏̆͆̾̒̀̐͌͘͜͜͜͝ͅͅͅ?̵̧̢̧̡̢̡̡̨̡̨̨̧̢̢̨̡̡̡̨̢̡̢̧̡̢̧̤̮͙͈͙̜̱̬̱̱̣̱̱̯͓̹̦͍͙̳͙̹̼̣̫̤̙̱̼̫̮̪̟̳͍̯̙̦͙̥̟̲͍̼͎̞̘͍̭͍̲̹͕͈̞̜̜̱̣͉͇̭͚̘̮̲̺̫̮̹̪̤̖̭̝̲̣̤͎̪̳̦̝̝̟͚̦̬̹̖͚̬̝̖̥̝̠͙͈͎̱͎̟̘̫̦͖͇̦̲͈̩̦̠̥̪̞̠͚͔̱̭̱̙̫̜̟͈͈̜̺̮̪̖͔̗̬͈͙̗̩̺̙͖͎̣̩͉̹̜̞̬̲͖͓̇̇̍̽̉̀̔̿͑̐̈́̿̐̍̀̽̀̋̍̽̿̆̅̐̏̆͆̾̒̀̐͌͘͜͜͜͝ͅͅͅ?̵̧̢̧̡̢̡̡̨̡̨̨̧̢̢̨̡̡̡̨̢̡̢̧̡̢̧̤̮͙͈͙̜̱̬̱̱̣̱̱̯͓̹̦͍͙̳͙̹̼̣̫̤̙̱̼̫̮̪̟̳͍̯̙̦͙̥̟̲͍̼͎̞̘͍̭͍̲̹͕͈̞̜̜̱̣͉͇̭͚̘̮̲̺̫̮̹̪̤̖̭̝̲̣̤͎̪̳̦̝̝̟͚̦̬̹̖͚̬̝̖̥̝̠͙͈͎̱͎̟̘̫̦͖͇̦̲͈̩̦̠̥̪̞̠͚͔̱̭̱̙̫̜̟͈͈̜̺̮̪̖͔̗̬͈͙̗̩̺̙͖͎̣̩͉̹̜̞̬̲͖͓̇̇̍̽̉̀̔̿͑̐̈́̿̐̍̀̽̀̋̍̽̿̆̅̐̏̆͆̾̒̀̐͌͘͜͜͜͝ͅͅͅ?̵̧̢̧̡̢̡̡̨̡̨̨̧̢̢̨̡̡̡̨̢̡̢̧̡̢̧̤̮͙͈͙̜̱̬̱̱̣̱̱̯͓̹̦͍͙̳͙̹̼̣̫̤̙̱̼̫̮̪̟̳͍̯̙̦͙̥̟̲͍̼͎̞̘͍̭͍̲̹͕͈̞̜̜̱̣͉͇̭͚̘̮̲̺̫̮̹̪̤̖̭̝̲̣̤͎̪̳̦̝̝̟͚̦̬̹̖͚̬̝̖̥̝̠͙͈͎̱͎̟̘̫̦͖͇̦̲͈̩̦̠̥̪̞̠͚͔̱̭̱̙̫̜̟͈͈̜̺̮̪̖͔̗̬͈͙̗̩̺̙͖͎̣̩͉̹̜̞̬̲͖͓̇̇̍̽̉̀̔̿͑̐̈́̿̐̍̀̽̀̋̍̽̿̆̅̐̏̆͆̾̒̀̐͌͘͜͜͜͝ͅͅͅ", board.width / 2, board.height / 2);
	// }



	if (level == 50) {music("music7")}
	if (level == 50 && phase == 1) {
		recta(1, "red", 0, 0, board.width, 10)
		recta(2, "red", 0, 0, 10, board.height)
		recta(3, "red", board.width - 10, 0, 10, board.height)
		recta(4, "red", 125, 125, board.width - 250, board.height - 125)
		recta(5, "lime", board.width - 125, board.height - 100, 115, 100)
	}
	if (level == 50 && phase == 2) {
		recta(1, "red", 0, 0, board.width, 15)
		recta(2, "red", 0, 0, 15, board.height)
		recta(3, "red", board.width - 15, 0, 15, board.height)
		recta(4, "red", 125, 125, board.width - 250, board.height - 125)
		recta(5, "lime", 10, board.height - 15, 50, 15)
		recta(6, "red", 10, board.height - 100, 50, 85)
		recta(7, "yellow", 125, 15, board.width - 250, 110)
	}
	if (level == 50 && phase == 3) {
		recta(1, "red", 0, 0, board.width, 25)
		recta(2, "red", 0, 0, 25, board.height)
		recta(3, "red", board.width - 25, 0, 25, board.height)
		recta(4, "red", 125, 125, board.width - 250, 25)
		recta(5, "aqua", board.width - 125, board.height - 100, 100, 100)
		recta(6, "darkblue", 150, 150, board.width - 300, 177)
		recta(7, "lime", 150, 327, board.width - 300, board.height - 327)
		recta(8, "red", 125, 125, 25, board.height - 125)
		recta(9, "red", 490, 125, 25, board.height - 125)
	}
	if (level == 50 && phase == 4) {
		recta(9, "red", 0, 0, 150, board.height)
		recta(10, "red", 0, 0, board.width, 175)
		recta(11, "red", board.width - 150, 0, 150, board.height)
		recta(1, "magenta", 0, 0, board.width, 25)
		recta(2, "magenta", 0, 0, 25, board.height)
		recta(3, "magenta", board.width - 25, 0, 25, board.height)
		recta(4, "red", 125, 125, board.width - 250, 25)
		recta(5, "magenta", 125, 125, 25, board.height - 125)
		recta(6, "magenta", 490, 125, 25, board.height - 125)
		recta(7, "lightgray", 150, 150, board.width - 300, board.height - 150)
		recta(8, "lime", 25, board.height - 100, 100, 100)
	}
	if (level == 50 && phase == 5) {
		recta(6, "saddlebrown", 340, 0, board.width - 340, board.height)	
		recta(8, "lime", 365, 0, board.width - 365, board.height)
		recta(1, "magenta", 0, 0, board.width, 25)
		recta(2, "magenta", 0, 0, 25, board.height)
		recta(3, "magenta", board.width - 25, 0, 25, board.height)
		recta(4, "magenta", 125, 175, 125, board.height - 125)
		recta(7, "purple", 250, board.height - 100, 90, 100)
		recta(9, "magenta", 340, 0, 25, board.height - 50)
	}
}
function nextLevel() {
	keyDoor = "closed"
	grayTimer = 0;
	level++;
	teleportation = false;
	opacity = 1.0;
	//document.getElementById("debugSlide").value++
	recta(1, "white", 0, 0, 0, 0)
	recta(2, "white", 0, 0, 0, 0)
	recta(3, "white", 0, 0, 0, 0)
	recta(4, "white", 0, 0, 0, 0)
	recta(5, "white", 0, 0, 0, 0)
	recta(6, "white", 0, 0, 0, 0)
	recta(7, "white", 0, 0, 0, 0)
	recta(8, "white", 0, 0, 0, 0)
	recta(9, "white", 0, 0, 0, 0)
	recta(10, "white", 0, 0, 0, 0)
	if (level == 11) {
		audioFade("music2")
		fakePause = true;
		pauseResume(true);
		board.style.backgroundColor = "black";
		ttl.font = "40px Arial";
		ttl.textAlign = "center";
		ttl.fillStyle = "white";
		setTimeout("crl.clearRect(0, 0, board.width, board.height)", frameRate + 1)
		setTimeout("ttl.fillStyle = 'white';", frameRate + 1)
		setTimeout("ttl.fillText('Now entering the planet Norph', board.width / 2, board.height / 2);", frameRate + 1)
		setTimeout("pauseResume(false);", 2000);
		setTimeout("fakePause = false;", 2000);
	}
	if (level == 21) {
		audioFade("music3")
		fakePause = true;
		pauseResume(true);
		board.style.backgroundColor = "#ff8c00";
		ttl.font = "40px Arial";
		ttl.textAlign = "center";
		ttl.fillStyle = "black";
		setTimeout("crl.clearRect(0, 0, board.width, board.height)", frameRate + 1)
		setTimeout("ttl.fillStyle = 'black';", frameRate + 1)
		setTimeout("ttl.fillText('Now entering the planet Foyria', board.width / 2, board.height / 2);", frameRate + 1)
		setTimeout("pauseResume(false);", 2000);
		setTimeout("fakePause = false;", 2000);
	}
	if (level == 31) {
		audioFade("music4")
		fakePause = true;
		pauseResume(true);
		board.style.backgroundColor = "lightcyan";
		ttl.font = "40px Arial";
		ttl.textAlign = "center";
		ttl.fillStyle = "black";
		setTimeout("crl.clearRect(0, 0, board.width, board.height)", frameRate + 1)
		setTimeout("ttl.fillStyle = 'black';", frameRate + 1)
		setTimeout("ttl.fillText('Now entering the planet Howihee', board.width / 2, board.height / 2);", frameRate + 1)
		setTimeout("pauseResume(false);", 2000);
		setTimeout("fakePause = false;", 2000);
	}
	if (level == 41) {
		audioFade("music5")
		fakePause = true;
		pauseResume(true);
		board.style.backgroundColor = "green";
		ttl.font = "40px Arial";
		ttl.textAlign = "center";
		ttl.fillStyle = "black";
		setTimeout("crl.clearRect(0, 0, board.width, board.height)", frameRate + 1)
		setTimeout("ttl.fillStyle = 'black';", frameRate + 1)
		setTimeout("ttl.fillText('Now entering the planet Oru', board.width / 2, board.height / 2);", frameRate + 1)
		setTimeout("pauseResume(false);", 2000);
		setTimeout("fakePause = false;", 2000);
	}
	if (level == 50) {
		phase = 1;
		audioFade("music6")
		fakePause = true;
		pauseResume(true);
		ttl.font = "40px Arial";
		ttl.textAlign = "center";
		ttl.fillStyle = "black";
		setTimeout("crl.clearRect(0, 0, board.width, board.height)", frameRate + 1)
		setTimeout("ttl.fillStyle = 'black';", frameRate + 1)
		setTimeout("ttl.fillText('Now entering the Final Challenge', board.width / 2, board.height / 2);", frameRate + 1)
		setTimeout("pauseResume(false);", 2000);
		setTimeout("fakePause = false;", 2000);
	}
	if (level == 51) {
		phase++;
		level = 50;
	}
}

var	keyDoor = "closed"

function reset(touch) {
	if (level == 50 && touch == "l") {
		radius = 20;
		grayTimer = 0;
		opacity = 1.0;
		keyDoor = "closed";
		teleportation = false;
		if (phase == 5) {endGame();}
	}
	else if (level == 50 && touch != "l") {
		if (phase == 1 || phase == 3 || phase == 5) {
		if (phase == 5) {phase = 3; var phasdf = true}
		else {var phasdf = false}
		x = 60 + phase * 3;
		if (phasdf == true) {phasdf = false; phase = 5;}
		y = board.height - 100;
		drc = 180;
		radius = 20;
		}
		if (phase == 2) {
		x = board.width - 63;
		y = board.height - 100;
		drc = 180;
		radius = 20;
		}
		if (phase == 4) {	
			x = board.width / 2 - 10;
			y = board.height - 100;
			drc = 180;
			radius = 20;
		}
	}
	else {
		x = 100;
		y = board.height - 100;
		drc = 135;
		radius = 20;
	}
	keyDoor = "closed"
	grayTimer = 0;
	teleportation = false;
	opacity = 1.0;
	recta(1, "white", 0, 0, 0, 0)
	recta(2, "white", 0, 0, 0, 0)
	recta(3, "white", 0, 0, 0, 0)
	recta(4, "white", 0, 0, 0, 0)
	recta(5, "white", 0, 0, 0, 0)
	recta(6, "white", 0, 0, 0, 0)
	recta(7, "white", 0, 0, 0, 0)
	recta(8, "white", 0, 0, 0, 0)
	recta(9, "white", 0, 0, 0, 0)
	recta(10, "white", 0, 0, 0, 0)
	recta(11, "white", 0, 0, 0, 0)
	recta(12, "white", 0, 0, 0, 0)
	recta(13, "white", 0, 0, 0, 0)
	recta(14, "white", 0, 0, 0, 0)
	recta(15, "white", 0, 0, 0, 0)
}

var b1l;
var b2l;

function realPause() {
	if (fakePause == false) {
		if (pButton == false) {
			board.style.backgroundColor = "white"
			pButton = true;
			pauseResume(true);
			crl.clearRect(0, 0, board.width, board.height);
			ttl.font = "50px Helvetica";
			ttl.textAlign = "center";
			ttl.fillStyle = "black";
			ttl.fillText("PAUSE", board.width / 2, 100);
			ttl.font = "25px Helvetica";
			ttl.fillText("Level " + level, board.width / 2, 200);
			ttl.fillText("Click the circle to cycle through your unlocked colors!", board.width / 2, board.height - 75)
			ttl.font = "20px Helvetica"
			var unlColor = levelAccom - 1;
			unlColor = Math.floor(unlColor / 10);
			/*if (localStorage.invis == true) {*/ttl.fillText("You have unlocked " + unlColor + " color(s)", board.width / 2, board.height - 20)//}
			// else {document.getElementById("invisbut").style.visibility = visible}
			document.getElementById("colorSelect").style.visibility = "visible";
			ttl.beginPath();
			ttl.arc(board.width / 2, 300, 50, 0, 2 * Math.PI);
			ttl.fillStyle = crcClr;
			ttl.fill();
			document.getElementById("plus").style.visibility = "visible";
			document.getElementById("minus").style.visibility = "visible";
			button.style.visibility = "visible";
			if (b1l == undefined) {b1l = window.innerWidth / 2 - 200 + "px"}
			button.style.left = b1l;
			button.style.top = 275 + "px";
			button.style.visibility = "visible";
			if (b2l == undefined) {b2l = window.innerWidth / 2 + 200 + "px"}
			button2.style.left = b2l;
			button2.style.top = 275 + "px";
			button2.style.visibility = "visible";
		}
		else {
			document.getElementById("plus").style.visibility = "hidden";
			document.getElementById("minus").style.visibility = "hidden";
			document.getElementById("colorSelect").style.visibility = "hidden";
			button.style.visibility = "hidden";
			button2.style.visibility = "hidden";
			pButton = false;
			pauseResume(false)
		}
	}
}
function resize() {
	document.getElementById('paus').style.left = window.innerWidth / 2 - board.width / 2 + 50 + "px";
	document.getElementById('arrow').style.left = window.innerWidth / 2 + board.width / 2 - 100 + "px";
	document.getElementById("plus").style.left = window.innerWidth / 2 + board.width / 2 - 225 + "px";
	document.getElementById("minus").style.left = window.innerWidth / 2 - board.width / 2 + 150 + "px";
	b1l = window.innerWidth / 2 - 200 + "px";
	b2l = window.innerWidth / 2 + 200 + "px";
	button.style.left = b1l;
	if (phase != 6) {button.style.top = 275 + "px";}
	else {button.style.top = 50 + "px"}
	button2.style.left = b2l;
	if (phase != 6) {button2.style.top = 275 + "px";}
	else {button2.style.top = 50 + "px"}
}

var opacity = "1.0";

function colorChange() {
	if (clrNum < levelAccom / 10) {clrNum++;}
	else {clrNum = 1;}
	if (clrNum == 1) {crcClr = "rgba(000, 000, 255, 1.0)";}
	if (clrNum == 2) {crcClr = "rgba(255, 140, 000, 1.0)";}
	if (clrNum == 3) {crcClr = "rgba(255, 255, 000, 1.0)";}
	if (clrNum == 4) {crcClr = "rgba(173, 216, 230, 1.0)";}
	if (clrNum == 5) {crcClr = "rgba(128, 128, 128, 1.0)";}
	if (clrNum == 6) {crcClr = "rgba(128, 000, 128, 1.0)";}
	ttl.beginPath();
	ttl.arc(board.width / 2, 300, 50, 0, 2 * Math.PI);
	ttl.fillStyle = crcClr;
	ttl.fill();
}
function levelPlus() {
	phase = 1;
	if (level + 1 <= levelAccom) {
		level++
	}
	else if (level + 1 > levelAccom) {level = 1}
	reset();
	pButton = false;
	realPause();
}
function levelMinus() {
	phase = 1;
	if (level - 1 > 0) {
		level--
	}
	else if (level - 1 == 0) {level = levelAccom}
	reset();
	pButton = false;
	realPause();
}
function circlestroke() {
	crl.beginPath();
	crl.arc(x, y, radius, 0, 2 * Math.PI);
	if (opacity == 1.0) {crl.strokeStyle = "black";}
	else {crl.strokeStyle = "rgba(0, 0, 0, 0.5)"}
	crl.lineWidth = 1;
	crl.stroke();
}

var audioToFade;

function audioFade(fadingid) {
	audioToFade = document.getElementById(fadingid)
	setTimeout("audioToFade.volume = 0.9", 200)
	setTimeout("audioToFade.volume = 0.8", 400)
	setTimeout("audioToFade.volume = 0.7", 600)
	setTimeout("audioToFade.volume = 0.6", 800)
	setTimeout("audioToFade.volume = 0.5", 1000)
	setTimeout("audioToFade.volume = 0.4", 1200)
	setTimeout("audioToFade.volume = 0.3", 1400)
	setTimeout("audioToFade.volume = 0.2", 1600)
	setTimeout("audioToFade.volume = 0.1", 1800)
	setTimeout("audioToFade.volume = 1.0", 2000)
}

var credx = 0;

function endGame() {
	credx = 0;
	pauseResume(true);
	board.style.backgroundColor = "black";
	crl.clearRect(0, 0, board.width, board.height);
	document.getElementById("arrow").style.visibility = "hidden";
	document.getElementById('paus').style.visibility = "hidden";
	credits = setInterval(credit, frameRate)
	function credit() {
		music("music8")
		crl.clearRect(0, 0, board.width, board.height);
		ttl.font = "25px Times New Roman";
		ttl.textAlign = "center";
		ttl.fillStyle = "gold";
		ttl.fillText("Programming - Ben Pitt Stoller", board.width / 2, board.height + credx);
		ttl.fillText("Concepts - Ben Pitt Stoller, Joseph, Ryan Werner", board.width / 2, board.height + 75 + credx);
		ttl.fillText("Level Design - Sean Murphy", board.width / 2, board.height + 150 + credx);	
		ttl.fillText("Additional Levels - Ben Pitt Stoller, Joseph, Ryan Werner", board.width / 2, board.height + 225 + credx);
		ttl.fillText("Music - Les Stoller & Sam Pitt Stoller", board.width / 2, board.height + 300 + credx);
		ttl.fillText("Special Thanks: Everyone I know who is not evil", board.width / 2, board.height + 375 + credx);
		ttl.font = "bold 100px Times New Roman";
		ttl.fillText("Thanks", board.width / 2, board.height * 2 + 200 + credx);
		ttl.fillText("For Playing!", board.width / 2, board.height * 2 + 350 + credx);
		if (board.height + credx > 0 - board.height) {credx -= 1}
		else {
		// 	ttl.font = "25px Times New Roman";
		// 	ttl.fillText("You have now unlocked invisible mode!", board.width / 2, board.height - 75)
		// 	ttl.fillText("(go in the pause menu to enable it)", board.width / 2, board.height - 50)
			// if (b1l == undefined) {b1l = window.innerWidth / 2 - 200 + "px"}
			// button.style.left = b1l;
			// button.style.top = 50 + "px";
			// button.style.visibility = "visible";
			// if (b2l == undefined) {b2l = window.innerWidth / 2 + 200 + "px"}
			// button2.style.left = b2l;
			// button2.style.top = 50 + "px";
			// button2.style.visibility = "visible";
	}
}
}
function endThing(mlode) {
	credx = 0;
	// localStorage.invis = true;
	clearInterval(credits);
	if (mlode == "e") {gloMode = "e"}
	if (mlode == "h") {gloMode = "h"}
	//clearInterval(credits);
	crl.clearRect(0, 0, board.width, board.height)
	level = 1;
	button.style.visibility = "hidden";
	button2.style.visibility = "hidden";
	document.getElementById("paus").style.visibility = "visible";
	clearInterval(runGame);
	pauseResume(false);
	clearInterval(runGame);
	pauseResume(false);
	fakePause = false;
	reset()
	//clearInterval(credits);
}