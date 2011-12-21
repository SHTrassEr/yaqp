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
 * Заключает в кавычки переданную строку.
 * 
 * @param {string} s строка.
 * @returns {string} 's' . 
 */
YAQP.Functions.quotes = function(s) {
	return "'" + YAQP.Functions.toString(s) + "'"; 
};

/**
 * Преобразует переданный объект в строку. 
 * 
 * @param {any} o объект.
 * @returns {string} Строковое представление объекта.
 */
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

/**
 * Проверяет, является ли переданный параметр комнатой, то есть 
 * принадлежит ли он к классу {@link YAQP.Classes.Room}. Проверяется два условия. 
 * 1. typeof o == "object"
 * 2. o.__type == YAQP.Classes.ObjectTypes.Room
 * 
 * @param {YAQP.Classes.Room|any}
 *            o входной параметр.
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
 * Проверяет, является ли переданный объект игровым предметом, то есть 
 * принадлежит ли он к классу {@link YAQP.Classes.Obj}. Проверяется два условия. 
 * 1. typeof o == "object"
 * 2. o.__type == YAQP.Classes.ObjectTypes.Obj
 * 
 * @param {YAQP.Classes.Room}
 *            o входной параметр.
 * @returns {boolean} Возвращает true, если объект является комнатой. Возвращает
 *          false если объект комнатой не является.
 */
YAQP.Functions.isObj = function(o) {
	try {
		if (typeof o == "object")
			if (o.__type == YAQP.Classes.ObjectTypes.Obj)
				return true;
		return false;
	} catch (e) {
		YAQP.Functions.error("YAQP.Functions.isObj", e);
	}
};

/**
 * Проверяет, является ли переданный объект игроком, то есть 
 * принадлежит ли он к классу {@link YAQP.Classes.Player}. Проверяется два условия. 
 * 1. typeof o == "object"
 * 2. o.__type == YAQP.Classes.ObjectTypes.Player
 * 
 * @param {YAQP.Classes.Player|any}
 *           o входной параметр.
 * @returns {boolean} Возвращает true, если параметр является игроком. Возвращает
 *          false если параметр комнатой не является.
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
 * Проверяет, является ли переданный параметр списком игровых предметов, то есть
 * принадлежит ли он к классу {@link YAQP.Classes.ObjList}. Проверяется два условия. 
 * 1. typeof o == "object"
 * 2. o.__type == YAQP.Classes.ObjectTypes.ObjList
 * 
 * @param {YAQP.Classes.ObjectTypes.ObjList|any}
 *            o входной параметр.
 * @returns {boolean} Возвращает true, если объект является комнатой. Возвращает
 *          false если объект комнатой не является.
 */
YAQP.Functions.isObjList = function(o) {
	try {
		if (typeof o == "object")
			if (o.__type == YAQP.Classes.ObjectTypes.ObjList)
				return true;
		return false;
	} catch (e) {
		YAQP.Functions.error("YAQP.Functions.isObjList", e);
	}
};

/**
 * Проверяет, является ли переданный параметр списком комнат, то есть принадлежит
 * ли он к классу {@link YAQP.Classes.RoomList}. Проверяется два условия. 
 * 1. typeof o == "object"
 * 2. o.__type == YAQP.Classes.ObjectTypes.RoomList
 * 
 * @param {object}
 *            o входной параметр.
 * @returns {boolean} Возвращает true, если объект является комнатой. Возвращает
 *          false если объект комнатой не является.
 */
YAQP.Functions.isRoomList = function(o) {
	try {
		if (typeof o == "object")
			if (o.__type == YAQP.Classes.ObjectTypes.RoomList)
				return true;
		return false;
	} catch (e) {
		YAQP.Functions.error("YAQP.Functions.isRoomList", e);
	}
};

/**
 * Возвращает ссылку на игрока. В настоящее время доступен только один игрок,
 * ссылка на него хранится в {@link YAQP.game.pl}. Тем не менее все манипуляции 
 * с игроком рекомендуется делать через эту функцию. Не надо получать игрока напрямую
 * через YAQP.game.pl  
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
 * Возвращает комнату в которой находится текущий игрок.
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
 * Возвращает прошлую сцену, на которой находился текущий игрок.
 * 
 * @returns {YAQP.Classes.Room} Прошлая сцена
 */
YAQP.Functions.from = function() {
	try {
		return YAQP.Functions.me().from;
	} catch (e) {
		YAQP.Functions.error("YAQP.Functions.from", e);
	};
};

/**
 * Возвращает инвентарь текущего игрока игрока. При помощи функции 
 * {@link YAQP.Functions.me} получает ссылку на текущего игрока и 
 * возвращает его инвентарь. 
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
 * Проверяет, есть ли искомые предмет в инвентаруе текущего игрока игрока. При помощи функции 
 * {@link YAQP.Functions.inv} получает ссылку на инвентарь текущего игрока.
 * 
 * @returns {boolean} возвращает true если предмет найден в инвентаре,
 * 	false в противном случае.
 */
YAQP.Functions.have = function(obj) {
	try {
		var o = YAQP.Functions.refObj(obj);
		if (YAQP.Functions.inv().srch(o)) 
			return true;
		return false;
	} catch (e) {
		YAQP.Functions.error("YAQP.Functions.have", e);
	};
};

/**
 * Получает комнату. Параметром этой функции может быть либо комната либо 
 * идентификатор комнаты. Особенность функции в том, что она либо вернет комнату,
 * либо сгенерирует ошибку. Если в качестве параметра передан объект, то
 * проверяется, является ли этот объект комнатой.
 * 
 * @param {YAQP.Classes.Room|string} name название комнаты, идентификатор либо сама комната.
 * @returns {YAQP.Classes.Room} Ссылка на искомую комнату.
 */
YAQP.Functions.refRoom = function(name) {
	try {
		switch (typeof name) {
			case "string" : /** если строка - то ищем в глобальном списке комнат */
				if (YAQP.game.rooms.srch(name)) {
					return YAQP.game.rooms.srch(name);
				} else
					throw "Объект не является комнатой name : " + 
						YAQP.Functions.quotes(name);
				break;
			case "object" : /** если объект - то проверяем, является ли он комнатой */
				if (YAQP.Functions.isRoom(name)) {
					return name;
				} else
					throw "Объект не является комнатой name : "
							+ YAQP.Functions.quotes(name);
				break;
			default :
				throw "Объект не является комнатой name : "
						+ YAQP.Functions.quotes(name);
				break;
		};
	} catch (e) {
		YAQP.Functions.error("YAQP.Functions.refRoom", e);
	};
};

/**
 * Получает игровой предмет. Параметром этой функции может быть либо предмет либо 
 * идентификатор предмета. Особенность функции в том, что она либо вернет предмет,
 * либо сгенерирует ошибку. Если в качестве параметра передан объект, то
 * проверяется, является ли этот объект игровым предметом.
 * 
 * @param {YAQP.Classes.obj|string} name название предмета, идентификатор либо сам предмет.
 * @returns {YAQP.Classes.obj} Ссылка на искомый игровой предмет.
 */
YAQP.Functions.refObj = function(name) {
	try {
		switch (typeof name) {
			case "string" : /** если строка - то ищем в глобальном списке игровых предметов */
				if (YAQP.game.objs.srch(name)) {
					return YAQP.game.objs.srch(name);
				} else
					throw "Объект не является предметом name : " + 
					YAQP.Functions.quotes(name);
				break;
			case "object" : /** если объект - то проверяем, является ли он игровым предметом */
				if (YAQP.Functions.isObj(name)) {
					return name;
				} else
					throw "Объект не является предметом name : "
							+ YAQP.Functions.quotes(name);
				break;
		};
	} catch (e) {
		YAQP.Functions.error("YAQP.Functions.refRoom", e);
	};
};

/**
 * Получает игровой предмет или комнату. Использует функции {@link YAQP.Functions.refObj} и
 * {@link YAQP.Functions.refRoom}. Если переданный параметр не является ни комнатой ни 
 * игровым предметом, то генерируется ошибка. На данный момент нигде не используется, так как 
 * всегда из контекста ясно, что мы хотим найти: предмет или комнату. Возможно, что 
 * эта функция в дальнейшем будет удалена. Иди же оставлена для совместимости со STEAD.  
 * @param {YAQP.Classes.obj|string} name название предмета/комнаты, идентификатор либо предмет/комната.
 * @returns {YAQP.Classes.obj} Ссылка на искомый игровой предмет/комнату.
 */

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
					throw "Объект не является ни комнатой ни предметом o : "
							+ YAQP.Functions.quotes(name);
				break;
		}
		throw "Объект не является ни комнатой ни предметом o : "
			+ YAQP.Functions.quotes(name);
	} catch (e) {
		YAQP.Functions.error("YAQP.Functions.ref", e);
	};
};

/**
 * Возвращает список объектов указанной комнаты; если комната не указана, то
 * возвращает список объектов текущей комнаты. Текущая комната запрашиваетя через функцию 
 * {@link YAQP.Functions.here}. Если же комната указана, то ссылка на нее запрашивается
 * через функцию {@link YAQP.Functions.refRoom}. Эта функция либо возвращает список
 * объектов (класс {@link YAQP.Classes.ObjList}), либо генерирует ошибку. 
 * 
 * @param {YAQP.Classes.Room|string} room название комнаты, идентификатор либо сама комната.
 * 
 * @returns {YAQP.Classes.ObjList} Объекты сцены.
 */
YAQP.Functions.objs = function(room) {
	try {
		if (room === undefined) {
			if (YAQP.Functions.isObjList(YAQP.Functions.here().objs)) {
				return YAQP.Functions.here().objs;
			} else
				throw "В текущей сцене найден не инициализированный"
						+ "список предметов YAQP.Functions.here() : "
						+ YAQP.Functions.quotes(YAQP.Functions.here())
						+ " objs : "
						+ YAQP.Functions
								.quotes(YAQP.Functions.here().objs);

		} else {
			var r = YAQP.Functions.refRoom(room); 
			if (YAQP.Functions.isObjList(r.objs)) {
				return r.objs;
			} else {
				throw "В переданной сцене найден не инициализированный"
						+ "список объектов room : " + YAQP.Functions.quotes(room)
						+ " objs : " + YAQP.Functions.quotes(r.objs);

			}
		} 
	} catch (e) {
		YAQP.Functions.error("YAQP.Functions.objs", e);
	};
};

/**
 * Возвращает список переходов с указанной комнаты; если сцена не указана, то
 * возвращает список переходов с текущей комнаты. Список переходов содержится в 
 * {@link YAQP.Classes.Room.ways}. Текущая комната запрашиваетя через функцию 
 * {@link YAQP.Functions.here}. Если же комната указана, то ссылка на нее запрашивается
 * через функцию {@link YAQP.Functions.refRoom}.  Эта функция либо возвращает список
 * переходов (класс {@link YAQP.Classes.RoomList}), либо генерирует ошибку. 
 * 
 * @param {YAQP.Classes.Room|string} room название комнаты, идентификатор либо сама комната.
 * 
 * @returns {YAQP.Classes.RoomList} Список переходов.
 */
YAQP.Functions.ways = function(room) {
	try {
		if (room === undefined) {
			if (YAQP.Functions.isObjList(YAQP.Functions.here().ways)) {
				return YAQP.Functions.here().ways;
			} else
				throw "В текущей сцене найден не инициализированный"
						+ " список переходов YAQP.Functions.here() : "
						+ YAQP.Functions.quotes(YAQP.Functions.here())
						+ " ways : "
						+ YAQP.Functions
								.quotes(YAQP.Functions.here().ways);
		} else  {
			var r = YAQP.Functions.refRoom(room); 
			if (YAQP.Functions.isObjList(r.ways)) {
				return r.ways;
			} else {
				throw "В переданной сцене найден не инициализированный"
						+ " список переходов o : " + YAQP.Functions.quotes(room)
						+ " objs : " + YAQP.Functions.quotes(r.ways);
			}
		}
	} catch (e) {
		YAQP.Functions.error("YAQP.Functions.ways", e);
	}
};

/**
 * Удаляет предмет из указанной комнаты или из инвентаря игрока; если комната не указана, то
 * удаляет предмет из текущей комнаты. Текущая комната запрашиваетя через функцию 
 * {@link YAQP.Functions.here}. Если же комната указана, то ссылка на нее запрашивается
 * через функцию {@link YAQP.Functions.refRoom}. Ссылка на объект запрашивается через функцию 
 * {@link YAQP.Functions.refObj}. Если объект удаляется из комнаты, то 
 * его {@link YAQP.Classes.Obj.where} становится равным undefined, если же нет --- то остается
 * без изменений.
 * 
 * @param {YAQP.Classes.Obj|string} obj название предмета, идентификатор либо сам предмет.
 * @param {YAQP.Classes.Room|string} room название комнаты, идентификатор либо сама комната.
 * @returns {boolean} true, если объект удалось удалить, false в противном случае.
 */
YAQP.Functions.remove = function(obj, room) {
	try {
		var r;
		var o = YAQP.Functions.refObj(obj);
		if (YAQP.Functions.isPlayer(room)) {
			if (room.objs.del(o)) {
				o.where = undefined
				return true;
			}
		} else {
			if (room === undefined) {
				r = YAQP.Functions.here();
			} else
				r = YAQP.Functions.refRoom(room);
			if (YAQP.Functions.isObjList(r.objs)) {
				if (r.objs.del(o)) {
					o.where = undefined
					return true;
				}
			} else
				throw "В конмнате не инициализирован скисок объектов: room : '"
						+ YAQP.Functions.toString(room) + "', obj : '"
						+ YAQP.Functions.toString(obj) + "'";
		};
		return false;
	} catch (e) {
		YAQP.Functions.error("YAQP.Functions.remove", e);
	}
};

/**
 * Заменяет один объект в указанной комнате на другой; если комната не указана,
 * то замена производится в текущей комнате. Текущая комната запрашиваетя через функцию 
 * {@link YAQP.Functions.here}. Если комната указана, то ссылка на нее запрашивается
 * через функцию {@link YAQP.Functions.refRoom}. Ссылки на объекты запрашиваются через функцию 
 * {@link YAQP.Functions.refObj}. Если объект-источник не найден в списке, то список
 * остается без изменений. Если объект-источник удаляется из комнаты, то 
 * его {@link YAQP.Classes.Obj.where} становится равным undefined. 
 * {@link YAQP.Classes.Obj.where} объекта для замены становится равным комнате.
 * 
 * @param {YAQP.Classes.Obj|string} objSrc название предмета-источника, 
 * 	идентификатор либо сам предмет.
 * @param {YAQP.Classes.Obj|string} objDst название предмета для замены, 
 * 	идентификатор либо сам предмет.
 * @param {YAQP.Classes.Room|YAQP.Classes.Player|string} room название комнаты, 
 * идентификатор, сама комната либо ссылка на игрока.
 */
YAQP.Functions.replace = function(objSrc, objDst, room) {
	try {
		var list;
		var os = YAQP.Functions.refObj(objSrc);
		var od = YAQP.Functions.refObj(objDst);
		var r;
		
		if (YAQP.Functions.isPlayer(room)) {
			r = room;
			list = YAQP.Functions.inv();
		} else {
			r = YAQP.Functions.refRoom(room);
			list = r.objs;
		}
		if (list.replace(os, od)) {
			os.where = undefined;
			od.where = r;
			return true;	
		} else
			return false;
	} catch (e) {
		YAQP.Functions.error("YAQP.Functions.replace", e);
	}
};

/**
 * Помещает предмет в указанную комнату или в инвентарь игрока; если комната не указана, то
 * предмет помещается в текущую комнату. Текущая комната запрашиваетя через функцию 
 * {@link YAQP.Functions.here}. Если же комната указана, то ссылка на нее запрашивается
 * через функцию {@link YAQP.Functions.refRoom}. Ссылка на объект запрашивается через функцию 
 * {@link YAQP.Functions.refObj}. Поле  {@link YAQP.Classes.Obj.where} предмета становится 
 * равным комнате, в которую он был помещен. Если до вызова этой функции предмет уже находился
 * в какой-то комнате (или инвентаре), то предмет оттуда удаляется. 
 * 
 * @param {YAQP.Classes.Obj|string} obj название предмета, идентификатор либо сам предмет.
 * @param {YAQP.Classes.Room|string} room название комнаты, идентификатор либо сама комната.
 * @returns {boolean} true, если объект удалось переместить, false в противном случае.
 */
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


/**
 * Перемещает объект в инвентарь игрока. Для этого вызывается функция 
 * {@link YAQP.Functions.put}, у которой в качестве 2-го параметра указан
 * сам игрок.
 * 
 * @param {YAQP.Classes.Obj|string} obj название предмета, идентификатор либо сам предмет.
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
 * Очищает буфер. Буфер - это строковая переменная {@link YAQP.game.buffer}. В эту 
 * переменную заносится динамически сгенерированный контент при помощи функции 
 * {@YAQP.Functions.p}.
 */
YAQP.Functions.clearBuffer = function() {
	try {
		YAQP.game.buffer = "";
	} catch (e) {
		YAQP.Functions.error("YAQP.Functions.p", e);
	};
};

/**
 * Возвращает все что накопилось в буфере и очищает его. Буфер - это строковая 
 * переменная {@link YAQP.game.buffer}. В эту 
 * переменную заносится динамически сгенерированный контент при помощи функции 
 * {@YAQP.Functions.p}.
 * 
 * @returns {string} содержимое буфера.
 */
YAQP.Functions.getBuffer = function() {
	var buffer = YAQP.game.buffer;
	YAQP.Functions.clearBuffer();
	return buffer;
};

/**
 * Добавляет строку в буфер. Буфер - это строковая 
 * переменная {@link YAQP.game.buffer}. В эту 
 * переменную заносится динамически сгенерированный контент при помощи функции 
 * {@YAQP.Functions.p}.
 * 
 * @param {string} s Строка которую нужно занести в буфер.
 */
YAQP.Functions.p = function(s) {
	try {
		YAQP.game.buffer += s;
	} catch (e) {
		YAQP.Functions.error("YAQP.Functions.p", e);
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
 * Переход из одной комнаты в другую. При переходе производятся следующие
 * действия: 
 * 1. Вызывается метод {YAQP.Classes.Room.exit} той комнаты, из которой уходит игрок.
 * 2. Вызывается метод {YAQP.Classes.Room.enter} той комнаты, в которую приходит игрок.
 * 3. Игрок перемещается в комнату назначения.
 * 4. Вызывается метод {YAQP.Classes.Room.leave} той комнаты, из которой уходит игрок.
 * 5. Вызывается метод {YAQP.Classes.Room.entered} той комнаты, в которую приходит игрок.
 * При этом если в какой-то из вызываемых функций еще раз запрашивается переход в 
 * другую комнату, то текущий переход завершается.
 * Текущая комната запрашивается при помощи функции {@links YAQP.Functions.here},
 * ссылка на комнату назначения - при помощи функции {@links YAQP.Functions.refRoom}.
 * 
 * @param {YAQP.Classes.Room|string} to название комнаты или сама 
 * комната в которую следует перейти.
 * @param {boolean} ingame устанавливается в true если вызывается при опсании игры
 */
YAQP.Functions.walk = function(to, ingame) {
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
		YAQP.Functions.error("YAQP.Functions.walk", e);
	};
};

YAQP.Functions.processMethodReturn = function(ret) {
	try {
		switch (typeof ret){
			case "undefined" :
				return true;
			case "boolean" :
				return ret;
			case "string" :
				YAQP.Functions.p(ret);
				return true;
			case "object" : 
				if (typeof ret[0] == "boolean") {
					if (typeof ret[1] == "string")
						YAQP.Functions.p(ret[1]);
					return ret[0];
				} else if (typeof ret[0] == "string") {
					YAQP.Functions.p(ret[0]);
					if (typeof ret[1] == "boolean")
						return ret[1];
					return true;
				}
		};
		throw "Недопустимый возврат функции ret : " 
			+ YAQP.Functions.quotes(ret);
	} catch (e) {
		YAQP.Functions.error("YAQP.Functions.processMethodReturn", e);
	}
};

YAQP.Functions.processMethod = function(object, method, params, defaultMethod) {
	try {
		switch (typeof method) {
			case "string" :
				YAQP.Functions.p(method);
				return true;
			case "function" :
				var ret = method.apply(object, params);
				return YAQP.Functions.processMethodReturn(ret); 
			case "undefined" :
				if (defaultMethod !== undefined)
					return YAQP.Functions.processMethod(object, defaultMethod, params);
				break;
		}
		return false;
	} catch (e) {
		YAQP.Functions.error("YAQP.Functions.processMethod", e);
	}
};

/**
 * Соединить первый объект со вторым. При этом выполняются следующие
 * действия: 
 * 1. Вызывается метод {YAQP.Classes.Obj.use} 1-го объекта.
 * 2. Вызывается метод {YAQP.Classes.Obj.used} 2-го объекта.
 * Ссылка на объекты запрашивается при помощи функции  {@links YAQP.Functions.refObj}.
 * 
 * @param {YAQP.Classes.Obj|string} obj1 название 1-го предмета, идентификатор либо сам предмет.
 * @param {YAQP.Classes.Obj|string} obj2 название 2-го предмета, идентификатор либо сам предмет.
 */
YAQP.Functions.useTo = function(obj1, obj2) {
	try {
		var o1 = YAQP.Functions.refObj(obj1);
		var o2 = YAQP.Functions.refObj(obj2);
		YAQP.Functions.processMethod(o1, o1.use, [o1, o2], YAQP.game.use);
		YAQP.Functions.processMethod(o2, o2.used, [o2, o1], YAQP.game.used);

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
			YAQP.Functions.processMethod(o, o.act, [o], YAQP.game.act);
		if (o.tak) {
			if (YAQP.Functions.processMethod(o, o.tak, [o], YAQP.game.tak))
				YAQP.Functions.take(o);
		}
	} catch (e) {
		YAQP.Functions.error("YAQP.Functions.use obj : '"
						+ YAQP.Functions.toString(obj) + "'", e);
	}
};

/**
 * Возвращает сцену в которой помещен объект (если он был добавлен с
 * использованием функций put, drop, move). Возвращает значение 
 * {@link YAQP.Classes.Obj.where}. 
 * Ссылка на объект запрашивается при помощи функции  {@links YAQP.Functions.refObj}.
 * 
 * @param {YAQP.Classes.Obj}
 *            o предмет
 * @returns {YAQP.Classes.Room} Сцена, в которой размещен предмет.
 */
YAQP.Functions.where = function(obj) {
	try {
		return YAQP.Functions.refObj(obj).where;
	} catch (e) {
		YAQP.Functions.error("YAQP.Functions.where", e);
	};
};

/**
 * Возвращает объект, если он присутствует и не отключен на сцене, 
 * если сцена не указана, то поиск производится в текущей сцене. 
 * 
 * @param {YAQP.Classes.Obj}
 *            obj искомый предмет.
 * @param {YAQP.Classes.Room}
 *            room сцена.
 * @returns {YAQP.Classes.Obj|null} Если предмет найден, то возвращается 
 * ссылка на него, в противном случае возвращается null.
 * 
 */
YAQP.Functions.seen = function(obj, room) {
	try {
		var r;
		var o;
		o = YAQP.Functions.refObj(obj);
		if (room == undefined) {
			r = YAQP.Functions.here();
		} else {
			r = YAQP.Functions.refRoom(room);
		}
		if (r.objs.srch(obj)) {
			return o
		} else
			return null;
	} catch (e) {
		YAQP.Functions.error("YAQP.Functions.seen", e);
	};
};

YAQP.Functions.vobj = function(name, dsc) {
	var obj = {};
	obj.nam = name;
	obj.id = name;
	obj.dsc = dsc;
	obj.act = function() {
		var r = YAQP.Functions.here();
		//var o = r.objs.srch(name);
		return YAQP.Functions.processMethod(r, r.act, [r, name]);
	};
	obj.used = function() {
		var r = YAQP.Functions.here();
		//var o = r.objs.srch(name);
		return YAQP.Functions.processMethod(r, r.used, [r, name]);
	};	
	return new YAQP.Classes.Obj(obj, name);
};
YAQP.Functions.vway = function(name, dsc, walk_to) {
	var obj = {};
	obj.nam = name;
	obj.id = name;
	obj.dsc = dsc;
	obj.act = function() {
		var r = YAQP.Functions.here();
		var o = r.objs.srch(name);
		return YAQP.Functions.walk(walk_to);
	};
	obj.used = function() {
		var r = YAQP.Functions.here();
		var o = r.objs.srch(name);
		return YAQP.Functions.processMethod(r, r.used, [r, o]);
	};	
	return new YAQP.Classes.Obj(obj, name);
};
