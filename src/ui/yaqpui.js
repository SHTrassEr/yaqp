/**
 * @author SHTrassEr
 */

YAQP.UI = {};
YAQP.UI.Functions = {};

YAQP.UI.Functions.init = function() {
	try {
		YAQP.UI.inv = document.getElementById("yaqpInv");
		YAQP.UI.roomName = document.getElementById("yaqpRoomName");
		YAQP.UI.ways = document.getElementById("yaqpWays");
		YAQP.UI.text = document.getElementById("yaqpText");
		YAQP.UI.buffer = document.getElementById("yaqpBuffer");
		YAQP.UI.errors = document.getElementById("yaqpErrors");
		YAQP.UI.objs = document.getElementById("yaqpObjs");

		YAQP.UI.selectedObject = "";

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
		for (var w in here.ways) {
			if (here.ways.hasOwnProperty(w)){
				YAQP.UI.ways
						.appendChild(YAQP.UI.Functions.goLink(here.ways[w]));
			}
		}

	} catch (e) {
		YAQP.UI.error("YAQP.UI.Functions.RefreshWays ", e);
	};
};

YAQP.UI.Functions.RefreshObjs = function() {
	try {
		var here = YAQP.Functions.here();
		YAQP.UI.objs.innerHTML = "";
		for (var o in here.objs) {
			if (here.objs.hasOwnProperty(o))
				YAQP.UI.objs.appendChild(YAQP.UI.Functions
						.objLink(here.objs[o]));
		}

	} catch (e) {
		YAQP.UI.error("YAQP.UI.Functions.RefreshObjs ", e);
	};
};

YAQP.UI.Functions.RefreshInv = function() {
	try {
		var inv = YAQP.Functions.inv();
		YAQP.UI.inv.innerHTML = "";
		for (var o in inv) {
			if (inv.hasOwnProperty(o))
				YAQP.UI.inv.appendChild(YAQP.UI.Functions.invLink(inv[o]));
		}

	} catch (e) {
		YAQP.UI.error("YAQP.UI.Functions.RefreshInv ", e);
	};
};

YAQP.UI.Functions.Refresh = function() {
	try {
		YAQP.UI.Functions.RefreshName();
		YAQP.UI.Functions.RefreshText();
		YAQP.UI.Functions.RefreshBuffer();
		YAQP.UI.Functions.RefreshWays();
		YAQP.UI.Functions.RefreshObjs();
		YAQP.UI.Functions.RefreshInv();
	} catch (e) {
		YAQP.UI.error("YAQP.UI.Functions.Refresh ", e);
	}
};

YAQP.UI.Functions.RefreshName = function() {
	try {
		var here = YAQP.Functions.here();
		YAQP.UI.roomName.innerHTML = here.nam;
	} catch (e) {
		YAQP.UI.error("YAQP.UI.Functions.RefreshName ", e);
	};
};

YAQP.UI.Functions.RefreshBuffer = function() {
	try {
		YAQP.UI.buffer.innerHTML = YAQP.game.getBuffer();
	} catch (e) {
		YAQP.UI.error("YAQP.UI.Functions.RefreshName ", e);
	};
};

YAQP.UI.Functions.RefreshText = function() {
	try {
		YAQP.UI.text.innerHTML = YAQP.game.getDsc();
	} catch (e) {
		YAQP.UI.error("YAQP.UI.Functions.Refresh ", e);
	}
};

YAQP.UI.Functions.goLink = function(room) {
	var li = document.createElement("li");
	var a = document.createElement("a");
	li.appendChild(a);
	var ta = document.createTextNode(room.nam);
	a.appendChild(ta);
	a.setAttribute("onclick", "YAQP.UI.Functions.go('" + room.getId() + "');");
	a.setAttribute("href", "#");
	return li;
};

YAQP.UI.Functions.objLink = function(obj) {
	var li = document.createElement("li");
	var a = document.createElement("a");
	li.appendChild(a);
	var ta = document.createTextNode(obj.dsc);
	a.appendChild(ta);
	a.setAttribute("onclick", "YAQP.UI.Functions.use('" + obj.getId() + "');");
	a.setAttribute("href", "#");
	return li;
};

YAQP.UI.Functions.invLink = function(obj) {
	var li = document.createElement("li");
	var a = document.createElement("a");
	li.appendChild(a);
	var ta = "";
	if (obj.getId() === YAQP.UI.selectedObject) {
		var ta = document.createElement("b");
		ta.appendChild(document.createTextNode(obj.nam));
	} else
		ta = document.createTextNode(obj.nam);
	a.appendChild(ta);
	a.setAttribute("onclick", "YAQP.UI.Functions.invClick('" + obj.getId()
					+ "');");
	a.setAttribute("href", "#");
	return li;
};

YAQP.UI.Functions.invClick = function(obj) {
	try {
		if (YAQP.UI.selectedObject === "") {
			YAQP.UI.selectedObject = obj;
		} else
			YAQP.UI.selectedObject = "";
		YAQP.UI.Functions.RefreshInv();
	} catch (e) {
		YAQP.UI.error("YAQP.UI.Functions.invClick ", e);
	}
};

YAQP.UI.Functions.go = function(room) {
	try {
		YAQP.Functions.go(room);
		YAQP.UI.Functions.Refresh();
	} catch (e) {
		YAQP.UI.error("YAQP.UI.Functions.go ", e);
	}
};

YAQP.UI.Functions.use = function(obj) {
	try {
		if (YAQP.UI.selectedObject === "") {
			YAQP.Functions.use(obj);
		} else {
			YAQP.Functions.useTo(YAQP.UI.selectedObject, obj);
			YAQP.UI.selectedObject = "";
		}
		YAQP.UI.Functions.Refresh();
	} catch (e) {
		YAQP.UI.error("YAQP.UI.Functions.use ", e);
	}
};

YAQP.UI.error = function(msg, e) {
	YAQP.UI.errors.innerHTML += msg + e.message + "<br>";
};
