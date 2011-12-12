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
			case "undefined" :
				throw "Объект не является предметом: 'undefined'";
				break;
			case "string" :
				if (YAQP.game.objs[o]) {
					if (YAQP.Functions.isObj(YAQP.game.objs[o])) {
						return YAQP.Classes.ObjList.superclass.add.apply(this,
								[YAQP.game.objs[o]]);
					} else
						throw "Объект содержится в глобальном списке предметов, "
								+ " но не является предметом: '" + o + "'";
				} else
					throw "Объект не найден в глобальном списке предметов: '"
							+ o + "'";
				break;
			case "object" :
				if (YAQP.Functions.isObj(o)) {
					return YAQP.Classes.ObjList.superclass.add.apply(this, [o]);
				} else
					throw "Объект не является предметом: '" + o.toString()
							+ "'.";
				break;
		}
	} catch (e) {
		YAQP.Functions.error("YAQP.Classes.ObjList.add ", e);
	};
};
