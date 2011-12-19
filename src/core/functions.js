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

/**
 * Функция обработки ошибок.
 * 
 * @param {string} msg сообщение об ошибки.
 * @param {string|Error} Дополнительная информация об ошибке.
 */
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
	try {
		if (typeof o == "object")
			if (o.__type == YAQP.Classes.ObjectTypes.Room)
				return true;
		return false;
	} catch (e) {
		YAQP.Functions.error("YAQP.Functions.isRoom", e);
	}
};

/**
 * Проверяет, является ли переданный объект игроком.
 * 
 * @param {YAQP.Classes.Room}
 *            комната.
 * @returns {boolean} Возвращает true, если объект является комнатой. Возвращает
 *          false если объект комнатой не является.
 */
YAQP.Functions.isPlayer = function(o) {
	try {
		if (typeof o == "object")
			if (o.__type == YAQP.Classes.ObjectTypes.Player)
				return true;
		return false;
	} catch (e) {
		YAQP.Functions.error("YAQP.Functions.isRoom", e);
	}
};

/**
 * Возвращает ссылку на игрока.
 * 
 * @returns {YAQP.Classes.Player} игрок
 */
YAQP.Functions.me = function() {
	try {
		return YAQP.game.pl;
	} catch (e) {
		YAQP.Functions.error("YAQP.Functions.inv", e);
	};
};

/**
 * Проверяет, является ли переданный объект списком предметов, то есть
 * принадлежит ли он к классу {@links YAQP.Classes.ObjList}
 * 
 * @param {object}
 *            o список.
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
 *            o список.
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
 *            o комната.
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
	try {
		if (YAQP.Functions.me().inv) {
			return YAQP.Functions.me().inv;
		} else
			throw "Не определен инвентарь игрока";
	} catch (e) {
		YAQP.Functions.error("YAQP.Functions.inv", e);
	};
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
	};
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

/**
 * Получает комнату. Особенность функции в том, что она либо вернет комнату,
 * либо сгенерирует ошибку. Если в качестве параметра передан объект, то
 * проверяется, является ли этот объект комнатой.
 * 
 * @param {YAQP.Classes.Room |
 *            string} название комнаты, идентификатор либо сама комната.
 * @returns
 */
YAQP.Functions.refRoom = function(name) {
	try {
		switch (typeof name) {
			case "string" :
				if (YAQP.game.rooms.srch(name)) {
					return YAQP.game.rooms.srch(name);
				} else
					throw "Объект не является комнатой name : '" + name + "'";
				break;
			case "object" :
				if (YAQP.Functions.isRoom(name)) {
					return name;
				} else
					throw "Объект не является комнатой name : '"
							+ YAQP.Functions.toString(name) + "'";
				break;
			default :
				throw "Объект не является комнатой name : '"
						+ YAQP.Functions.toString(name) + "'";
				break;
		};
	} catch (e) {
		YAQP.Functions.error("YAQP.Functions.refRoom", e);
	};
};

/**
 * Получает предмет. Особенность функции в том, что она либо вернет предмет,
 * либо сгенерирует ошибку. Если в качестве параметра передан объект, то
 * проверяется, является ли этот объект игровым предметом.
 * 
 * @param {YAQP.Classes.obj |
 *            string} название объекта, идентификатор либо сам объект.
 * @returns
 */
YAQP.Functions.refObj = function(name) {
	try {
		switch (typeof name) {
			case "string" :
				if (YAQP.game.objs.srch(name)) {
					return YAQP.game.objs.srch(name);
				} else
					throw "Объект не является предметом name : '" + name + "'";
				break;
			case "object" :
				if (YAQP.Functions.isObj(name)) {
					return name;
				} else
					throw "Объект не является предметом o : '"
							+ YAQP.Functions.toString(name) + "'";
				break;
		};
	} catch (e) {
		YAQP.Functions.error("YAQP.Functions.refRoom", e);
	};
};

YAQP.Functions.ref = function(name) {
	try {
		switch (typeof name) {
			case "string" :
				if (YAQP.game.rooms.srch(name))
					return YAQP.game.rooms.srch(name);
				if (YAQP.game.objs.srch(name))
					return YAQP.game.objs.srch(name);
				break;
			case "object" :
				if (YAQP.Functions.isRoom(name) || YAQP.Functions.isObj(name)) {
					return name;
				} else
					throw "Объект не является ни комнатой ни предметом o : '"
							+ YAQP.Functions.toString(name) + "'";
				break;
		}
		throw "Объект не является ни комнатой ни предметом o : '"
		+ YAQP.Functions.toString(name) + "'";
	} catch (e) {
		YAQP.Functions.error("YAQP.Functions.ref", e);
	};
};

YAQP.Functions.remove = function(obj, room) {
	try {
		var o = YAQP.Functions.refObj(obj);
		if (YAQP.Functions.isPlayer(room)) {
			room.objs.del(o);
		} else {
			var r = YAQP.Functions.refRoom(room);
			if (r.objs) {
				r.objs.del(o);
			} else
				throw "В конмнате не инициализирован скисок объектов: room : '"
						+ YAQP.Functions.toString(room) + "', obj : '"
						+ YAQP.Functions.toString(obj) + "'";
		}
	} catch (e) {
		YAQP.Functions.error("YAQP.Functions.remove", e);
	}
};

YAQP.Functions.replace = function(objSrc, objDst, room) {
	try {
		var list;
		if (YAQP.Functions.isPlayer(room)) {
			list = YAQP.Functions.inv();
		} else
			list = YAQP.Functions.refRoom(room).objs;
		list.replace(YAQP.Functions.refObj(objSrc), YAQP.Functions
						.refObj(objDst));
	} catch (e) {
		YAQP.Functions.error("YAQP.Functions.replace", e);
	}
};

YAQP.Functions.clearBuffer = function() {
	try {
		YAQP.game.buffer = "";
	} catch (e) {
		YAQP.Functions.error("YAQP.Functions.p", e);
	};
};

YAQP.Functions.p = function(s) {
	try {
		YAQP.game.buffer += s;
	} catch (e) {
		YAQP.Functions.error("YAQP.Functions.p", e);
	}
};

YAQP.Functions.put = function(obj, room) {
	try {
		var o = YAQP.Functions.refObj(obj);
		var where = o.where;
		if (YAQP.Functions.isPlayer(room)) {
			if (where)
				YAQP.Functions.remove(o, where);
			room.objs.add(o);
			o.where = room;
		} else {
			var r = YAQP.Functions.refRoom(room);
			if (where)
				YAQP.Functions.remove(o, where);
			r.objs.add(o);
			o.where = r;
		}
	} catch (e) {
		YAQP.Functions.error("YAQP.Functions.put", e);
	}
};

YAQP.Functions.processEvent = function(event) {
	try {
		switch (typeof event) {
		case "undefined":
			return true;
		case "string" :
			YAQP.Functions.p(event);
			return true;
		case "function" :
			
		
		};
	} catch (e) {
		YAQP.Functions.error("YAQP.Functions.processEvent", e);
	}
};

/**
 * Переход из одной комнаты в другую.
 * 
 * @param {YAQP.Classes.Room|string} название комнаты или сама 
 * комната в которую следует перейти.
 * @param {boolean} устанавливается в true если вызывается при опсании игры
 */
YAQP.Functions.go = function(to, ingame) {
	try {
		if (!ingame)
			YAQP.game.go_canceled = false;
		var room_from = YAQP.Functions.here();
		var room_to = YAQP.Functions.refRoom(to);
		
		if (!ingame)
			room_from.exit(room_from, room_to);
		if (YAQP.game.go_canceled) {
			return;
		}
		room_to.enter(room_to, room_from);
		if (YAQP.game.go_canceled) {
			return;
		}
		
		YAQP.Functions.me().move(room_to);
		
		if (!ingame)
			room_from.leave(room_from, room_to);
		room_to.entered(room_to, room_from);
		
	} catch (e) {
		YAQP.Functions.error("YAQP.Functions.go", e);
	};
};

YAQP.Functions.processMethod = function(method) {
	switch (typeof method) {
		case "string" :
			YAQP.Functions.p(method);
			return true;
			break;
	}
	return false;
};

/**
 * Использовать объект. 
 * 
 * @param obj1
 * @param obj2
 */
YAQP.Functions.useTo = function(obj1, obj2) {
	try {
		var o1 = YAQP.Functions.refObj(obj1);
		var o2 = YAQP.Functions.refObj(obj2);

		o1.use(o1, o2);
		o2.used(o2, o1);

	} catch (e) {
		YAQP.Functions.error("YAQP.Functions.useTo obj1 : '"
						+ YAQP.Functions.toString(obj1) + "' obj2 : '"
						+ YAQP.Functions.toString(obj2) + "'", e);
	}
};

/**
 * Использование объекта. Вызывается при попытке взять предмет.
 * @param obj
 */
YAQP.Functions.use = function(obj) {
	try {
		// YAQP.Functions.clearBuffer();
		var o = YAQP.Functions.refObj(obj);
		if (o.act)
			YAQP.Functions.processMethod(o.act);
		if (o.tak) {
			YAQP.Functions.processMethod(o.tak);
			YAQP.Functions.take(o);
		}
	} catch (e) {
		YAQP.Functions.error("YAQP.Functions.use obj : '"
						+ YAQP.Functions.toString(obj) + "'", e);
	}
};

/**
 * Перемещает объект в инвентарь игрока.
 * 
 * @param obj
 */
YAQP.Functions.take = function(obj) {
	try {
		var o = YAQP.Functions.refObj(obj);
		YAQP.Functions.put(o, YAQP.Functions.me());
	} catch (e) {
		YAQP.Functions.error("YAQP.Functions.take", e);
	};
};

/**
 * Возвращает текущую сцену.
 * 
 * @returns {YAQP.Classes.Room} Текущая сцена
 */
YAQP.Functions.here = function() {
	try {
		if (YAQP.Functions.isRoom(YAQP.Functions.me().where))
			return YAQP.Functions.me().where;
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
		return YAQP.Functions.me().from;
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

YAQP.Functions.prepareStringOut = function(s) {
	
};
