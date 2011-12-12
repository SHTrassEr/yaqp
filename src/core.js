/**
 * @author SHTrassEr
 */

(/** @constructor */
function() {
	var room = {};
	var obj = {};
	// var dlg = {};

	var initialRoom = 'main';

	/**
	 * Обрабатываем поле obj. obj - это массив, который может содержать как
	 * строку-идентификатор объекта, так и сам объект.
	 */

	function go() {
	}

	function xact(nam, act) {
		var obj = {};
		obj.nam = nam;
		obj.id = nam;
		obj.act = act;
		return new YAQP.Classes.Obj(obj, obj.id);
	}

	function p() {

	}

	function set_music() {

	}

	function seen() {
	}

	function me() {
		return YAQP.game.pl;
	}

	var inv = YAQP.Functions.inv;

	// objects
	function remove(obj, from) {
		if (from) {

		}
	}

	// <%QUEST%>//
	try {
		YAQP.Functions.prepareObjs(obj);
	} catch (e) {
		YAQP.Functions.error("function prepareObjs:", e);
	}

	try {
		YAQP.Functions.prepareRooms(room);
	} catch (e) {
		YAQP.Functions.error("function prepareRooms:", e);
	}

	try {
		YAQP.Functions.prepareLinksRoomObjs(room);
	} catch (e) {
		YAQP.Functions.error("function prepareLinksRoomObjs:", e);
	}
	YAQP.Functions.prepareLinksRoomWays(room);
	YAQP.Functions.prepareLinksObjObjs(obj);

	obj = YAQP.game.objs;
	room = YAQP.game.rooms;

	YAQP.game.pl = new YAQP.Classes.Player(YAQP.game.rooms[initialRoom]);
})();
