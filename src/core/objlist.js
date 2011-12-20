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
 * Наследуемся от YAQP.Classes.ObjectList.
 */
YAQP.Functions.extend(YAQP.Classes.ObjList, YAQP.Classes.ObjectList);

/**
 * Переопределяем метод добавления обьекта в список. В список могут попасть
 * только обьекты типа YAQP.Classes.ObjectTypes.Obj. Добавляет объект в список.
 * Если в качестве параметра указана строка, то объект выбирается из глобального
 * списка обьектов (game.obj).
 * 
 * @param {YAQP.Classes.Object|string}
 *            o объект поиска. Либо строка с id объекта, либо сам объект.
 */
YAQP.Classes.ObjList.prototype.add = function(o) {
	try {
		switch (typeof o) {
			case "string" :
			case "object" :
				return YAQP.Classes.ObjList.superclass.add.apply(this,
						[YAQP.Functions.refObj(o)]);
			default :
				throw "Объект не является игровым предметом o : "
					+ YAQP.Functions.quotes(o);
		}
	} catch (e) {
		YAQP.Functions.error("YAQP.Classes.ObjList.add ", e);
	};
};
