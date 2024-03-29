/**
 * @author SHTrassEr
 * 
 * События.
 */

YAQP.UI.Events = {};

YAQP.UI.Events.invClick = function(obj) {
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

YAQP.UI.Events.walk = function(room) {
	try {
		YAQP.Functions.walk(room);
		YAQP.UI.Functions.Refresh();
	} catch (e) {
		YAQP.UI.error("YAQP.UI.Functions.walk ", e);
	}
};

YAQP.UI.Events.use = function(obj) {
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