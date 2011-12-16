/**
 * @author SHTrassEr
 */

(/** @constructor */
function() {
	var room = {};
	var obj = {};
	// var dlg = {};

	/**
	 * Обрабатываем поле obj. obj - это массив, который может содержать как
	 * строку-идентификатор объекта, так и сам объект.
	 */

	function xact(nam, act) {
		var obj = {};
		obj.nam = nam;
		obj.id = nam;
		obj.act = act;
		return new YAQP.Classes.Obj(obj, obj.id);
	}

	var inv = YAQP.Functions.inv;
	var go = function(to) {
		YAQP.Functions.go(to, true);
		YAQP.game.go_canceled = true;
	};
	var p = YAQP.Functions.p;
	var put = YAQP.Functions.put;
	var remove = YAQP.Functions.remove;
	var replace = YAQP.Functions.replace;
	var me = YAQP.Functions.me;

	// <%QUEST%>//
	YAQP.FunctionsCore.prepareObjs(obj);
	YAQP.FunctionsCore.prepareRooms(room);
	YAQP.FunctionsCore.prepareLinksRoomObjs(room);
	YAQP.FunctionsCore.prepareLinksRoomWays(room);
	YAQP.FunctionsCore.prepareLinksObjObjs(obj);

	obj = YAQP.game.objs;
	room = YAQP.game.rooms;

})();
