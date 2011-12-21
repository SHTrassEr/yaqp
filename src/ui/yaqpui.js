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

		YAQP.initGameSync("src/core/core.js", "test/quests/cat.js");
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
						.appendChild(YAQP.UI.HTML.goLink(here.ways[w]));
			}
		}
	} catch (e) {
		YAQP.UI.error("YAQP.UI.Functions.RefreshWays ", e);
	};
};

YAQP.UI.Functions.RefreshObjs = function() {
	try {
		
		YAQP.UI.objs.innerHTML = "";
		YAQP.UI.Functions.FormatText(YAQP.out.getObjs(), YAQP.UI.objs);
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
				YAQP.UI.inv.appendChild(YAQP.UI.HTML.invLink(inv[o]));
		}

	} catch (e) {
		YAQP.UI.error("YAQP.UI.Functions.RefreshInv ", e);
	};
};

YAQP.UI.Functions.Refresh = function() {
	try {
		YAQP.out.refresh();
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
		YAQP.UI.buffer.innerHTML = "";
		YAQP.UI.Functions.FormatText(YAQP.out.getBuffer(), YAQP.UI.buffer);
	} catch (e) {
		YAQP.UI.error("YAQP.UI.Functions.RefreshName ", e);
	};
};

YAQP.UI.Functions.RefreshText = function() {
	try {
		YAQP.UI.text.innerHTML = "";
		YAQP.UI.Functions.FormatText(YAQP.out.getText(), YAQP.UI.text);
	} catch (e) {
		YAQP.UI.error("YAQP.UI.Functions.Refresh ", e);
	}
};



YAQP.UI.Functions.FormatText = function(s, node) {
	try {
		var ret = "";
		switch (typeof s) {
			case "string" :
				ret = YAQP.UI.Str.formatStr(s);
				break;
			case "object" :
				ret = "";
				for (var i = 0; i< s.length; i++){
					switch (typeof s[i]) {
						case "string":
							YAQP.UI.Str.formatStr(s[i] , node);
							break;
						case "object":
							node.appendChild(YAQP.UI.HTML.objLink(s[i]));
							break;
					}
				}
				break;
		};
		return ret;
	} catch (e) {
		YAQP.UI.error("YAQP.UI.Functions.FormatText ", e);
	};
};

YAQP.UI.error = function(msg, e) {
	YAQP.UI.errors.innerHTML += msg + e.message + "<br>";
};
