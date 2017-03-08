var SCROLL = 87;	// w
var FLASK = 65;		// a
var NEWT = 83;		// s
var FISH = 86;		// d
var PLANT = 70;		// f
var EAR = 37;		// left arrow
var EYE = 38;		// up arrow
var HEART = 39;		// right arrow
var TEETH = 40;		// down arrow

var objectsBeingTouched = [];

function init()
{
	createjs.Sound.registerSound("sfx/test.ogg", "testsound");

	this.document.onkeydown = keydown;
	this.document.onkeyup = keyup;
}

function keydown(event)
{
	if (!objectsBeingTouched[event.keyCode])
	{
    	objectsBeingTouched[event.keyCode] = true;
    	createjs.Sound.play("testsound");
    }
}

function keyup(event)
{
    objectsBeingTouched[event.keyCode] = false;
}
