/**
 * @author SHTrassEr
 */

(/** @constructor */
function() {
	var room = {};
	var obj = {};
	var dlg = {};
	
	var initialRoom = 'main';

	/**
	 * Обрабатываем поле obj. obj - это массив, который может
	 * содержать как строку-идентификатор объекта, так и сам
	 * объект. 
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
	

	//<%QUEST%>//
	
	YAQP.Functions.prepareObjs(obj);
	YAQP.Functions.prepareRooms(room);
	YAQP.Functions.prepareLinksRoomObjs(room);
	
	YAQP.game.pl = new YAQP.Classes.Player(YAQP.game.rooms[initialRoom]);
})();
