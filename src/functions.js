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
 * Проверяет, является ли переданный объект игровым объектом.
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
 * Возвращает текущую сцену.
 * 
 * @returns {YAQP.Classes.ObjList} Инвентарь.
 */
YAQP.Functions.here = function() {
	if (YAQP.Functions.isRoom(YAQP.game.pl.where))
		return YAQP.game.pl.where;
	throw new Error("Не удалось определить местоположение игрока.");
};

/**
 * Возвращает список объектов указанной сцены; если сцена не указана, то
 * возвращает список объектов текущей сцены
 * 
 * @returns {YAQP.Classes.ObjList} Объекты сцены.
 */
YAQP.Functions.objs = function(o) {
	if (o === undefined) {
		o = YAQP.Functions.here();
	}
	if (YAQP.Functions.isRoom(o))
		return o.objs;
};

/**
 * Служебная функция, вызывается один раз при создании игры. 
 * На вход получает список объектов, объявленный в файле 
 * игры. Эти объекты преобразуются в объекты типа 
 * {@link YAQP.Classes.Obj} и сохраняются в глобальном 
 * перечне объектов игры {@link YAQP.game.objs}. 
 * @param {object} obj список игровых объектов.
 */
YAQP.Functions.prepareObjs = function(obj) {
	YAQP.game.objs = {};
	for (var o in obj)
		YAQP.game.objs[o] = new YAQP.Classes.Obj(obj[o], o);
};

/**
 * Служебная функция, вызывается один раз при создании игры. 
 * На вход получает список сцен, объявленный в файле 
 * игры. Эти сцены преобразуются в объекты типа 
 * {@link YAQP.Classes.Room} и сохраняются в глобальном 
 * перечне сцен игры {@link YAQP.game.rooms}. 
 * @param {object} room список сцен.
 */
YAQP.Functions.prepareRooms = function(room) {
	YAQP.game.rooms = {};
	for (var r in room) 
		YAQP.game.rooms[r] = new YAQP.Classes.Room(room[r], r);
};

/**
 * Служебная функция, вызывается один раз при создании игры. 
 * На вход получает список сцен, объявленный в файле 
 * игры. Инициализирует список объектов сцены.
 * @TODO написать нормальную документацию.  
 * @param {object} room список сцен.
 */
YAQP.Functions.prepareLinksRoomObjs = function(room) {
	for (var r in room){
		for (var o in room[r].obj) {
			YAQP.game.rooms[r].objs.add(room[r].obj[o]);
		}
	}
};

/**
 * Служебная функция, вызывается один раз при создании игры. 
 * На вход получает список сцен, объявленный в файле 
 * игры. Инициализирует список возможных переходов со сцены.
 * @param {object} room список сцен.
 */
YAQP.Functions.prepareLinksRoomWays = function(room) {
	for (var r in room){
		for (var w in room[r].way) {
			YAQP.game.rooms[r].ways.add(room[r].way[w]);
		}
	}
};

/**
 * Служебная функция, вызывается один раз при создании игры. 
 * На вход получает список м, объявленный в файле 
 * игры. Инициализирует список возможных переходов со сцены.
 * @param {object} room список сцен.
 */
YAQP.Functions.prepareLinksObjObjs = function(obj) {
	for (var o in obj){
		for (var oo in obj[o].obj) {
			YAQP.game.objs.obj[o].add(obj[o].obj[oo]);
		}
	}
};

YAQP.Functions.error = function(msg, e) {
	if (e != undefined) {
		throw new Error(msg + "\n" + e.message);		
	} else {
		throw new Error(msg + "\n");
	}
};