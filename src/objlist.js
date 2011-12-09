/**
 * @author SHTrassEr
 */

/**
 * Список объектов типа YAQP.Classes.Obj. Класс YAQP.Classes.ObjList наследутеся
 * от YAQP.Classes.ObjectList
 * 
 * @constructor
 * @class
 */
YAQP.Classes.ObjList = function() {
		
};

/**
 * Наследуемся от  YAQP.Classes.ObjectList.
 */
YAQP.Functions.extend(YAQP.Classes.ObjList, YAQP.Classes.ObjectList);

/**
 * Переопределяем метод добавления обьекта в список. В список могут попасть
 * только обьекты типа YAQP.Classes.ObjectTypes.Obj. 
 * Добавляет объект в список. Если в качестве параметра указана строка, то
 * объект выбирается из глобального списка обьектов (game.obj).
 * 
 * @param {YAQP.Classes.Object|string}
 *            o объект поиска. Либо строка с id объекта, либо сам объект.
 */
YAQP.Classes.ObjList.prototype.add = function(o) {
	if (typeof o === "string"){
		o = YAPQ.game.obj.srch(o);
	}
	if (YAQP.Functions.isObj(o)) {
		return YAQP.Classes.ObjList.superclass.add.apply(this, [o]);
	} else
		throw new Error("Ошибка при попытке добавить переданный объект в " +
				"список игровых объектов.");
};
