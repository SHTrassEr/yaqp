/**
 * @author SHTrassEr
 */

/**
 * Создает новую комнату. На вход получает описание комнаты и ее идентификатор.
 * 
 * @constructor
 * @param {object}
 *            room Описание сцены.
 * @param {string}
 *            id Идентификатор сцены.
 * @class
 */
YAQP.Classes.Room = function(room, id) {
	/**
	 * Название сцены. Это название будет заголовком сцены при её отображении.
	 * Имя сцены также используется для её идентификации при переходах.
	 * 
	 * @type string
	 */
	this.name = "";
	/**
	 * Описание комнаты. Описание статической части сцены, которое выводится при
	 * входе в сцену или выполнении команды look
	 * 
	 * @type string
	 */
	this.dsc = "";
	/**
	 * Определяет, выводить описание статической части сцены на каждом ходу
	 * (значение true) или только при первом входе на сцену (значение false).
	 * По-умолчанию установлено false.
	 * 
	 * @type boolean
	 */
	this.forcedsc = false;
	/**
	 * Список объектов сцены.
	 * 
	 * @type YAQP.Classes.ObjectList
	 */
	this.objs = new YAQP.Classes.ObjectList();

	/**
	 * Перекидываем все поля и методы из описания сцены в создаваемый объект.
	 */
	for (var r in room) {
		if (r != "obj") {
			this[r] = room[r];
		} else {
			/**
			 * объекты лучше добавлять через метод add
			 */
			for (var o in room.obj) {
				this.obj.add(room.obj[o]);
			}
		}
	}

	/**
	 * Идентификатор комнаты.
	 * 
	 * @type string
	 */
	this.__id = id;
};

YAQP.Functions.extend(YAQP.Classes.Room, YAQP.Classes.Object);

/**
 * Ищет объект на данной сцене.
 * 
 * @param {YAQP.Classes.Obj}
 *            obj искомый объект.
 * @returns {YAQP.Classes.Object|undefined} возвращает найденный объект, либо
 *          undefined если объект не найден.
 */
YAQP.Classes.Room.prototype.srch = function(obj) {
	if (typeof obj == "object") {
		if (obj.type == YAQP.Classes.ObjectTypes.Obj) {
			return this.obj.srch(obj);
		}
	}
	return undefined;
};

YAQP.Classes.Room.prototype.__type = YAQP.Classes.ObjectTypes.Room;
