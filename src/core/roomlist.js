/**
 * @author SHTrassEr
 */

/**
 * Список объектов типа YAQP.Classes.Room. Класс YAQP.Classes.RoomList
 * наследутеся от YAQP.Classes.ObjectList
 * 
 * @constructor
 * @class
 */
YAQP.Classes.RoomList = function() {

};

/**
 * Наследуемся от YAQP.Classes.ObjectList.
 */
YAQP.Functions.extend(YAQP.Classes.RoomList, YAQP.Classes.ObjectList);

/**
 * Переопределяем метод добавления обьекта в список. В список могут попасть
 * только обьекты типа YAQP.Classes.ObjectTypes.room. Добавляет объект в список.
 * Если в качестве параметра указана строка, то объект выбирается из глобального
 * списка комнат (game.rooms).
 * 
 * @param {YAQP.Classes.Room|string}
 *            o объект поиска. Либо строка с id объекта, либо сам объект.
 */
YAQP.Classes.RoomList.prototype.add = function(o) {
	try {
		switch (typeof o) {
			case "string" :
			case "object" :
				return YAQP.Classes.RoomList.superclass.add.apply(this,
					[YAQP.Functions.refRoom(o)]);
			default :
				throw "Объект не является сценой: o : "
					+ YAQP.Functions.quotes(o);
		}
	} catch (e) {
		YAQP.Functions.error("YAQP.Classes.RoomList.add ", e);
	}
};
