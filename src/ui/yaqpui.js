/**
 * @author SHTrassEr
 */

YAQP.UI = {};
YAQP.UI.Functions = {};

YAQP.UI.Functions.init = function() {
	try {
	YAQP.UI.inv = document.getElementById("yaqpInv");
	YAQP.UI.roomName = document.getElementById("yaqpInv");
	YAQP.UI.ways = document.getElementById("yaqpWays");
	YAQP.UI.text = document.getElementById("yaqpText");
	YAQP.UI.errors = document.getElementById("yaqpErrors");
	YAQP.UI.objs = document.getElementById("yaqpObjs");
	
	YAQP.initGameSync("../src/core/core.js", "/test/quests/tutorial.js");
	YAQP.init();
	
	YAQP.UI.Functions.Refresh();
	} catch (e) {
		YAQP.UI.error("YAQP.UI.Functions.init ", e);
	}
};

YAQP.UI.Functions.RefreshWays = function() {
	try {
		var here = YAQP.Functions.here();
		YAQP.UI.ways.innerHTML = "";
		for (var w in here.ways){
			if (here.ways.hasOwnProperty(w))
				YAQP.UI.ways.appendChild(YAQP.UI.Functions.goLink(here.ways[w]));
		}
			
	} catch (e) {
		YAQP.UI.error("YAQP.UI.Functions.RefreshWays ", e);
	};
};

YAQP.UI.Functions.RefreshObjs = function() {
	try {
		var here = YAQP.Functions.here();
		YAQP.UI.objs.innerHTML = "";
		for (var o in here.objs){
			if (here.objs.hasOwnProperty(o))
				YAQP.UI.objs.appendChild(YAQP.UI.Functions.objLink(here.objs[o]));
		}
			
	} catch (e) {
		YAQP.UI.error("YAQP.UI.Functions.RefreshObjs ", e);
	};
};

YAQP.UI.Functions.Refresh = function() {
	YAQP.UI.Functions.RefreshName();
	YAQP.UI.Functions.RefreshText();
	YAQP.UI.Functions.RefreshWays();
	YAQP.UI.Functions.RefreshObjs();
};

YAQP.UI.Functions.RefreshName = function() {
	try {
		var here = YAQP.Functions.here();
		YAQP.UI.roomName.innerHTML = here.nam;
	} catch (e) {
		YAQP.UI.error("YAQP.UI.Functions.RefreshName ", e);
	};
};

YAQP.UI.Functions.RefreshText = function() {
	try {
		var here = YAQP.Functions.here();
		YAQP.UI.text.innerHTML = "";
		if (here.dsc){
			YAQP.UI.text.innerHTML += here.dsc; 
			}
	} catch (e) {
		YAQP.UI.error("YAQP.UI.Functions.Refresh ", e);
	}
};

YAQP.UI.Functions.goLink = function(room) {
	var a = document.createElement("a");
	var ta = document.createTextNode(room.nam);
	a.appendChild(ta);
	a.setAttribute("onclick", "YAQP.UI.Functions.go('"+room.getId()+
			"');");
	a.setAttribute("href", "#");
	return a; 
};

YAQP.UI.Functions.objLink = function(obj) {
	var a = document.createElement("a");
	var ta = document.createTextNode(obj.nam);
	a.appendChild(ta);
	a.setAttribute("onclick", "YAQP.UI.Functions.go('"+obj.getId()+
			"');");
	a.setAttribute("href", "#");
	return a; 
};

YAQP.UI.Functions.go = function(room) {
	YAQP.Functions.go(room);
	YAQP.UI.Functions.Refresh();
};

YAQP.UI.error = function(msg, e) {
	YAQP.UI.errors.innerHTML += msg + e.message +
	"<br>";
};


