/**
 * @author SHTrassEr
 */

/**
 * Создает новую комнату. На вход получает описание комнаты и ее 
 * идентификатор. 
 * @constructor
 * @class
 * @param {object}
 *            room Описание сцены.
 * @param {string}
 *            id Идентификатор сцены.
 */
YAQP.Classes.Room = function(room, id) {
	/**
	 * Название сцены. Это название будет заголовком сцены
	 * при её отображении. Имя сцены также используется 
	 * для её идентификации при переходах. 
 	 * @type string
	 */
	this.name = "";
	/**
	 * Описание комнаты. Описание статической части 
	 * сцены, которое выводится при входе в сцену или 
	 * выполнении команды look
	 * @type string
	 */
	this.dsc = "";
	/**
	 * Определяет, выводить описание статической части сцены на 
	 * каждом ходу (значение true) или только при первом входе на 
	 * сцену (значение false). По-умолчанию установлено false.
	 * @type boolean
	 */
	this.forcedsc = false;
	/**
	 * Список объектов сцены. 
	 * @type YAQP.Classes.ObjectList
	 */
	this.obj = new YAQP.Classes.ObjectList();

	/**
	 * Перекидываем все поля и методы из описания сцены
	 * в создаваемый объект.
	 */
	for (var r in room) {
		if (r != "obj") {
			this[r] = room[r];
		} else {
			for (var o in room.obj) {
				this.obj.add(room.obj[o]);
			}
		}
	}
	/**
	 * Идентификатор комнаты.
	 * @type string
	 */
	this.id = id;
};

YAQP.Classes.Room.prototype.srch = function() {
	var obj = this;
	var s;
	switch (typeof obj) {
		case "object" :
			s = obj.id;
			break;
		case "string" :
			s = obj;
			break;
		default :
			return undefined;
			break;
	}

	for (var arrVal in this.loc) {
		if (arrVal != undefined) {
			if (arrVal.id == s) {
				return arrVal;
			}
		}
	}
};
