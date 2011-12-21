/**
 * @author SHTrassEr
 */

(/** @constructor */
function() {
	var room = {};
	var obj = {};
	var game = YAQP.game;
	
	YAQP.game.objs = new YAQP.Classes.ObjList();
	YAQP.game.rooms = new YAQP.Classes.RoomList();
	
	// var dlg = {};

	var inv = YAQP.Functions.inv;
	var walk = function(to) {
		YAQP.Functions.walk(to, true);
		YAQP.game.go_canceled = true;
	};
	var p = YAQP.Functions.p;
	var put = YAQP.Functions.put;
	var remove = YAQP.Functions.remove;
	var replace = YAQP.Functions.replace;
	var me = YAQP.Functions.me;
	var seen = YAQP.Functions.seen;
	
	var vobj = YAQP.Functions.vobj;
	var vway = YAQP.Functions.vobj;	
	var xact = YAQP.Functions.xact;
	
	try {
	
	// <%QUEST%>//
	
	} catch (e) {
		YAQP.Functions.error("core.js не удалось загрузить игру", e);
	}
	
	
	YAQP.FunctionsCore.prepareObjs(obj);
	YAQP.FunctionsCore.prepareRooms(room);
	
	YAQP.FunctionsCore.prepareLinksRoomObjs(room);
	YAQP.FunctionsCore.prepareLinksRoomWays(room);
	YAQP.FunctionsCore.prepareLinksObjObjs(obj);

	obj = YAQP.game.objs;
	room = YAQP.game.rooms;

})();
