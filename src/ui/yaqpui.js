/**
 * @author SHTrassEr
 */

YAQP.UI = {};
YAQP.UI.Functions = {};

YAQP.UI.Functions.init = function() {
	YAQP.UI.canvas = document.getElementById("yaqpCanvas");
	YAQP.UI.context = YAQP.UI.canvas.getContext("2d");
	
	YAQP.UI.Preferences.Region.width = YAQP.UI.canvas.width;
	YAQP.UI.Preferences.Region.height = YAQP.UI.canvas.height;

	YAQP.UI.context.moveTo(100, 150);
	YAQP.UI.context.lineTo(450, 50);
	YAQP.UI.context.stroke();
	YAQP.UI.Functions.DrawBorders();
};

YAQP.UI.Functions.DrawBorders = function() {
	var context = YAQP.UI.context;
	var region = YAQP.UI.Preferences.Region;
	context.beginPath();
    context.moveTo(0, 0);
    context.lineTo(region.width, 0);
    context.lineTo(region.width, region.height);
    context.lineTo(0, region.height);
    context.lineTo(0, 0);
    context.lineWidth = 2;
    context.strokeStyle = "#0000ff";
    context.stroke();
	
};


YAQP.UI.Preferences = {};

YAQP.UI.Preferences.Region = {
	width : "800",
	height : "600"
};