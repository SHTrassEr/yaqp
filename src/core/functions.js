/**
 * @author SHTrassEr
 */

/**
 * Функция делает класс Child потомком класса Parent.
 * 
 * @param {object}
 *            Child Наследник.
 * @param {object}
 *            Parent Родитель.
 */
YAQP.Functions.extend = function(Child, Parent) {
	var F = function() {
	};
	F.prototype = Parent.prototype;
	Child.prototype = new F();
	Child.prototype.constructor = Child;
	Child.superclass = Parent.prototype;
};

YAQP.Functions.error = function(msg, e) {
	switch (typeof e) {
		case "undefined" :
			throw new Error(msg + "\n");
			break;
		case "string" :
			throw new Error(msg + e + "\n");
			break;
		case "object" :
			throw new Error(msg + "\n" + e.message);
			break;
	}
};

/**
 * Проверяет, является ли переданный объект комнатой.
 * 
 * @param {YAQP.Classes.Room}
 *            комната.
 * @returns {boolean} Возвращает true, если объект является комнатой. Возвращает
 *          false если объект комнатой не является.
 */
YAQP.Functions.isRoom = function(o) {
	if (typeof o == "object")
		if (o.__type == YAQP.Classes.ObjectTypes.Room)
			return true;
	return false;
};

/**
 * Проверяет, является ли переданный объект списком предметов, то есть
 * принадлежит ли он к классу {@links YAQP.Classes.ObjList}
 * 
 * @param {object}
 *            список.
 * @returns {boolean} Возвращает true, если объект является комнатой. Возвращает
 *          false если объект комнатой не является.
 */
YAQP.Functions.isObjList = function(o) {
	if (typeof o == "object")
		if (o.__type == YAQP.Classes.ObjectTypes.ObjList)
			return true;
	return false;
};

/**
 * Проверяет, является ли переданный объект списком комнат, то есть принадлежит
 * ли он к классу {@links YAQP.Classes.RoomList}
 * 
 * @param {object}
 *            список.
 * @returns {boolean} Возвращает true, если объект является комнатой. Возвращает
 *          false если объект комнатой не является.
 */
YAQP.Functions.isRoomList = function(o) {
	if (typeof o == "object")
		if (o.__type == YAQP.Classes.ObjectTypes.RoomList)
			return true;
	return false;
};

/**
 * Проверяет, является ли переданный объект игровым предметом.
 * 
 * @param {YAQP.Classes.Room}
 *            комната.
 * @returns {boolean} Возвращает true, если объект является комнатой. Возвращает
 *          false если объект комнатой не является.
 */
YAQP.Functions.isObj = function(o) {
	if (typeof o == "object")
		if (o.__type == YAQP.Classes.ObjectTypes.Obj)
			return true;
	return false;
};

/**
 * Возвращает инвентарь игрока.
 * 
 * @returns {YAQP.Classes.ObjList} Инвентарь.
 */
YAQP.Functions.inv = function() {
	return YAQP.game.pl.inv;
};

/**
 * Возвращает список объектов указанной сцены; если сцена не указана, то
 * возвращает список объектов текущей сцены
 * 
 * @returns {YAQP.Classes.ObjList} Объекты сцены.
 */
YAQP.Functions.objs = function(o) {
	try {
		if (o === undefined) {
			if (YAQP.Functions.isRoom(YAQP.Functions.here())) {
				if (YAQP.Functions.isObjList(YAQP.Functions.here().objs)) {
					return YAQP.Functions.here().objs;
				} else
					throw "В текущей сцене найден не инициализированный"
							+ "список предметов YAQP.Functions.here() : '"
							+ YAQP.Functions.toString(YAQP.Functions.here())
							+ "' objs : "
							+ YAQP.Functions
									.toString(YAQP.Functions.here().objs);
			}
		} else if (YAQP.Functions.isRoom(o)) {
			if (YAQP.Functions.isObjList(o.objs)) {
				return o.objs;
			} else {
				throw "В переданной сцене найден не инициализированный"
						+ "список объектов o : '" + YAQP.Functions.toString(o)
						+ "' objs : " + YAQP.Functions.toString(o.objs);

			}
		} else
			throw "Параметр не является сценой o : '"
					+ YAQP.Functions.toString(o) + "'";
	} catch (e) {
		YAQP.Functions.error("YAQP.Functions.objs", e);
	}
};

/**
 * Возвращает список переходов с указанной сцены; если сцена не указана, то
 * возвращает список переходов с текущей сцены
 * 
 * @returns {YAQP.Classes.RoomList} Список переходов.
 */
YAQP.Functions.ways = function(o) {
	try {
		if (o === undefined) {
			if (YAQP.Functions.isRoom(YAQP.Functions.here())) {
				if (YAQP.Functions.isObjList(YAQP.Functions.here().ways)) {
					return YAQP.Functions.here().ways;
				} else
					throw "В текущей сцене найден не инициализированный"
							+ "список переходов YAQP.Functions.here() : '"
							+ YAQP.Functions.toString(YAQP.Functions.here())
							+ "' ways : "
							+ YAQP.Functions
									.toString(YAQP.Functions.here().ways);
			}
		} else if (YAQP.Functions.isRoom(o)) {
			if (YAQP.Functions.isObjList(o.ways)) {
				return o.ways;
			} else {
				throw "В переданной сцене найден не инициализированный"
						+ "список переходов o : '" + YAQP.Functions.toString(o)
						+ "' objs : " + YAQP.Functions.toString(o.ways);

			}
		} else
			throw "Параметр не является сценой o : '"
					+ YAQP.Functions.toString(o) + "'";
	} catch (e) {
		YAQP.Functions.error("YAQP.Functions.objs", e);
	}
};

YAQP.Functions.refRoom = function(name) {
	try {
		switch (typeof name) {
		case "string":
				if (YAQP.game.rooms.srch(name)){
					return YAQP.game.rooms.srch(name);
				} else 
					throw "Объект не является комнатой name : '" + 
					name + "'";  
			break;
		case "object" :
			if (YAQP.Functions.isRoom(name)) {
				return name;
			} else
				throw "Объект не является комнатой o : '" +
				YAQP.Functions.toString(name) + "'";
			break;
		};
	}catch (e) {
		YAQP.Functions.error("YAQP.Functions.refRoom", e);
	};
};

YAQP.Functions.ref = function(name) {
	try {
		switch (typeof name) {
		case "string":
				if(YAQP.game.rooms.srch(name))
					return YAQP.game.rooms.srch(name);
				if(YAQP.game.objs.srch(name)) 
					return YAQP.game.objs.srch(name);
			break;
		case "object" :
			if (YAQP.Functions.isRoom(name) || YAQP.Functions.isObj(name)) {
				return name;
			} else
				throw "Объект не является ни комнатой ни предметом o : '" +
				YAQP.Functions.toString(name) + "'";
			break;
		}
		
	}catch (e) {
		YAQP.Functions.error("YAQP.Functions.ref", e);
	};
};



YAQP.Functions.go = function(to) {
	try {
		var room_from = YAQP.Functions.here();
		var room_to = YAQP.Functions.refRoom(to);
		room_from.exit(room_from, room_to);
		room_to.enter(room_from, room_to);
		
		YAQP.game.pl.move(room_to);
		
		room_from.leave(room_from, room_to);
		room_to.entered(room_from, room_to);		
	} catch (e) {
		YAQP.Functions.error("YAQP.Functions.go", e);
	};
};

/**
 * Возвращает текущую сцену.
 * 
 * @returns {YAQP.Classes.Room} Текущая сцена
 */
YAQP.Functions.here = function() {
	try {
		if (YAQP.Functions.isRoom(YAQP.game.pl.where))
			return YAQP.game.pl.where;
		else
			throw "Не удалось определить местоположение игрока";
	} catch (e) {
		YAQP.Functions.error("YAQP.Functions.here", e);
	};
};

/**
 * Возвращает прошлую сцену.
 * 
 * @returns {YAQP.Classes.Room} Прошлая сцена
 */
YAQP.Functions.from = function() {
	try {
		return YAQP.game.pl.from;
	} catch (e) {
		YAQP.Functions.error("YAQP.Functions.here", e);
	};
};

/**
 * Возвращает сцену в которой помещен объект (если он был добавлен с
 * использованием функций put, drop, move)
 * 
 * @param {YAQP.Classes.Obj}
 *            o предмет
 * @returns {YAQP.Classes.Room} Сцена, в которой размещен предмет.
 */
YAQP.Functions.where = function(o) {
	try {
		switch (typeof o) {
			case "string" :
				var oo = YAQP.game.objs.srch(o);
				if (oo) {
					return oo.where;
				} else
					throw "Объект не найден в глобальном списке предметов o : '"
							+ YAQP.Functions.toString(o) + "'";
				break;
			case "object" :
				if (YAQP.Functions.isObj(o)) {
					return o.where;
				} else
					throw "Параметр не является предметом.";
				break;
		};
	} catch (e) {
		YAQP.Functions.from("YAQP.Functions.where", e);
	};
};

YAQP.Functions.toString = function(o) {
	switch (typeof o) {
		case "undefined" :
			return "undefined";
			break;
		case "string" :
			return o;
			break;
		case "object" :
			return o.toString();
			break;
	}
};

