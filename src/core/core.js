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
	YAQP.game.pl = new YAQP.Classes.Player();
	
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
	var take = YAQP.Functions.take;
	
	var me = YAQP.Functions.me;
	var seen = YAQP.Functions.seen;
	var from = YAQP.Functions.from;
	var here = YAQP.Functions.here;
	var have = YAQP.Functions.have; 
	
	var vobj = YAQP.Functions.vobj;
	var vway = YAQP.Functions.vobj;	
	var xact = YAQP.Functions.xact;
	
	var refRoom = YAQP.Functions.refRoom;
	
	/** TODO */
	var set_music = function(){};
	var lifeon = function(){};
	var move = function(){};
	
	
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
