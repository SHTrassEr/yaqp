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