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
	YAQP.FunctionsCore.prepareObjs(obj);
	YAQP.FunctionsCore.prepareRooms(room);
	YAQP.FunctionsCore.prepareLinksRoomObjs(room);
	YAQP.FunctionsCore.prepareLinksRoomWays(room);
	YAQP.FunctionsCore.prepareLinksObjObjs(obj);

	obj = YAQP.game.objs;
	room = YAQP.game.rooms;


})();
