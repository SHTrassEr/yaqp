/**
 * @author SHTrassEr
 */

(/** @constructor */
function() {
	var game = {};

	var loc = {};
	var obj = {};
	var dlg = {};
	
	var initialRoom = 'main';

	/**
	 * Обрабатываем поле obj. obj - это массив, который может
	 * содержать как строку-идентификатор объекта, так и сам
	 * объект. 
	 */
	function prepareObjs() {
		for (var o in obj) {
			obj[o] = new YAQP.Classes.Obj(obj[o], o);
		}
		YAQP.game.objs = obj; 
	}
	
	function prepareRooms() {
		if (loc.obj){
			for (var o in loc.obj) {
				if (typeof loc.obj == "string") {
					loc.obj[o] = obj[o];
				} else {
					loc.obj[o] = new YAQP.Classes.Obj(obj[o], o);	
				}
			}
		}
		for (var r in loc) {
			loc[r] = new YAQP.Classes.Room(loc[r], r);
		}
		YAQP.game.rooms = loc;
	}


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
	//<%QUEST%>//
	prepareObjs();
	prepareRooms();
	
	YAQP.game.pl = new YAQP.Classes.Player(YAQP.game.rooms[initialRoom]);
})();
