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
	try {
		/**
		 * Название сцены. Это название будет заголовком сцены при её
		 * отображении. Имя сцены также используется для её идентификации при
		 * переходах.
		 * 
		 * @type string
		 */
		this.name = "";
		/**
		 * Описание комнаты. Описание статической части сцены, которое выводится
		 * при входе в сцену или выполнении команды look
		 * 
		 * @type string
		 */
		this.dsc = "";
		/**
		 * Определяет, выводить описание статической части сцены на каждом ходу
		 * (значение true) или только при первом входе на сцену (значение
		 * false). По-умолчанию установлено false.
		 * 
		 * @type boolean
		 */
		this.forcedsc = false;
		/**
		 * Список объектов сцены.
		 * 
		 * @type YAQP.Classes.ObjectList
		 */
		this.objs = new YAQP.Classes.ObjList();

		/**
		 * Список возможных переходов со сцены.
		 * 
		 * @type YAQP.Classes.RoomList
		 */
		this.ways = new YAQP.Classes.RoomList();

		/**
		 * Вызывается при попытке выйти со сцены, до перехода.
		 */
		this.exit = function() {
		};
		/**
		 * Вызывается при выходе со сцены после перехода.
		 */
		this.leave = function() {
		};

		/**
		 * Вызывается при входе на сцену
		 */
		this.enter = function() {
		};
		/**
		 * Вызывается при входе на сцену после перехода.
		 */
		this.entered = function() {
		};

		/**
		 * Перекидываем все поля и методы из описания сцены в создаваемый
		 * объект.
		 */
		for (var p in room) {
			if (!YAQP.Functions.isValidRoomField(p))
				throw "Недопустимое поле в описании сцены: '" + p + "'";
			if (p != "obj") {
				/** все, кроме поля obj */
				this[p] = room[p];
			}
		}
		YAQP.Classes.Obj.superclass.constructor.apply(this, [id]);
	} catch (e) {
		YAQP.Functions.error("YAQP.Classes.Room ", e);
	};

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
