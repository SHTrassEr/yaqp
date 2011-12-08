/**
 * @author VMakarov
 */
/**
 * @namespace
 * @type YAQP.game
 */
YAQP.game = (/** @constructor */
function() {
	var game = {};

	var loc = {};
	var obj = {};
	var dlg = {};
	var me = {};
	
	/**
	 * Обрабатываем поле obj. obj - это массив, который может
	 * содержать как строку-идентификатор объекта, так и сам
	 * объект. 
	 */
	function prepareObjs() {
		for (var o in obj) {
			obj[o] = new YAQP.Classes.Obj(obj[o], o);
		}
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
		return game.pl;
	}

	// objects
	function remove(obj, from) {
		if (from) {

		}

	}

	game.pl = {

	};

	//<%QUEST%>//
	
	prepareObjs();
	prepareRooms();
	/** @scope YAQP.game */
	return {
		loc : loc,
		obj : obj,
		dlg : dlg,
		me : me
	};
})();
