var SCREEN_TITLE = 0;
var SCREEN_HAT = 1;
var SCREEN_TROUBLE = 2;
var SCREEN_PAYMENT = 3;
var SCREEN_TROUBLESHOOT = 4;
var SCREEN_ENDGAME = 5;

var currentScreen;

function setCurrentScreen(s)
{
	if (s == SCREEN_TITLE)
	{
		$("#screenTitle").show();
		$("#screenHat").hide();
		$("#screenTrouble").hide();
		$("#screenPayment").hide();
		$("#screenTroubleshoot").hide();
		$("#screenEndgame").hide();
	}
	if (s == SCREEN_HAT)
	{
		$("#screenTitle").hide();
		$("#screenHat").show();
		$("#screenTrouble").hide();
		$("#screenPayment").hide();
		$("#screenTroubleshoot").hide();
		$("#screenEndgame").hide();
	}
	if (s == SCREEN_TROUBLE)
	{
		$("#screenTitle").hide();
		$("#screenHat").hide();
		$("#screenTrouble").show();
		$("#screenPayment").hide();
		$("#screenTroubleshoot").hide();
		$("#screenEndgame").hide();
	}
	if (s == SCREEN_PAYMENT)
	{
		$("#screenTitle").hide();
		$("#screenHat").hide();
		$("#screenTrouble").hide();
		$("#screenPayment").show();
		$("#screenTroubleshoot").hide();
		$("#screenEndgame").hide();
	}
	if (s == SCREEN_TROUBLESHOOT)
	{
		$("#screenTitle").hide();
		$("#screenHat").hide();
		$("#screenTrouble").hide();
		$("#screenPayment").hide();
		$("#screenTroubleshoot").show();
		$("#screenEndgame").hide();
	}
	if (s == SCREEN_ENDGAME)
	{
		$("#screenTitle").hide();
		$("#screenHat").hide();
		$("#screenTrouble").hide();
		$("#screenPayment").hide();
		$("#screenTroubleshoot").hide();
		$("#screenEndgame").show();
	}

	currentScreen = s;
}

function cycleCurrentScreen()
{
	if (currentScreen == SCREEN_ENDGAME) setCurrentScreen(SCREEN_TITLE);
	else setCurrentScreen(currentScreen+1);
}

$(document).ready(function()
{
	$(".continue").click(function(){ cycleCurrentScreen(); });
	setCurrentScreen(SCREEN_TITLE);
});
