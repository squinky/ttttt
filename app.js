var SCROLL = 87;	// w
var BEAKER = 65;	// a
var LIZARD = 83;	// s
var FISH = 68;		// d
var PLANT = 70;		// f
var EAR = 37;		// left arrow
var EYE = 38;		// up arrow
var HEART = 39;		// right arrow
var TEETH = 40;		// down arrow
var RESET = 32;		// spacebar

var objectsBeingTouched = [];
var sounds = [];

var lastTickTime = 0;
var pauseTime = 0;
var startDelay = 0;
var started = false;
var idling = true;
var timeSinceObjectTouched = 0;

function init()
{
	createjs.Sound.registerSound("sfx/intro.ogg", "intro");
	createjs.Sound.registerSound("sfx/reset.ogg", "reset");
	sounds[SCROLL] = loadSounds("scroll");
	sounds[BEAKER] = loadSounds("beaker");
	sounds[LIZARD] = loadSounds("lizard");
	sounds[FISH] = loadSounds("fish");
	sounds[PLANT] = loadSounds("plant");
	sounds[EAR] = loadSounds("ear");
	sounds[EYE] = loadSounds("eye");
	sounds[HEART] = loadSounds("heart");
	sounds[TEETH] = loadSounds("teeth");

	this.document.onkeydown = keydown;
	this.document.onkeyup = keyup;

	createjs.Ticker.addEventListener("tick", tick);
	createjs.Ticker.setFPS(40);
}

function loadSounds(obj)
{
	var s = [];

	var done = false;
	var i = 1;
	while (!done)
	{
		var filename = obj;
		if (i <= 9) filename += "-0"+(i);
		else filename += "-"+(i);

		if (doesFileExist("sfx/"+filename+".ogg"))
		{
			createjs.Sound.registerSound("sfx/"+filename+".ogg", filename);
			s.push(filename);
			i++;
		}
		else
		{
			done = true;
		}
	}

	return s;
}

function keydown(event)
{
	if (event.keyCode == RESET)
	{
		location.reload();
	}
	else if (!objectsBeingTouched[event.keyCode])
	{
		if (idling)
		{
			idling = false;
			pauseTime = 0;
			createjs.Sound.stop();
		}

		if (pauseTime <= 0)
		{
	    	objectsBeingTouched[event.keyCode] = true;
	    	var snd = sounds[event.keyCode][Math.floor(Math.random()*sounds[event.keyCode].length)];
	    	pauseTime = createjs.Sound.play(snd).duration;
			timeSinceObjectTouched = 0;
	    }
    }
}

function keyup(event)
{
    objectsBeingTouched[event.keyCode] = false;
}

function tick()
{
	var timeSinceLastTick = createjs.Ticker.getTime() - lastTickTime;
	lastTickTime = createjs.Ticker.getTime();

	if (!started)
	{
		startDelay += timeSinceLastTick;
		if (startDelay >= 10000)
		{
			pauseTime = createjs.Sound.play("reset").duration;
			started = true;
		}
	}
	if (idling && pauseTime <= 0)
	{
		pauseTime = createjs.Sound.play("intro").duration;
	}
	if (!idling)
	{
		timeSinceObjectTouched += timeSinceLastTick;
		if (timeSinceObjectTouched > 180000) idling = true;
	}

	if (pauseTime > 0) pauseTime -= timeSinceLastTick;
}

function doesFileExist(urlToFile)
{
    var xhr = new XMLHttpRequest();
    xhr.open('HEAD', urlToFile, false);
    xhr.send();
     
    if (xhr.status == "404") {
        return false;
    } else {
        return true;
    }
}
