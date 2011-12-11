/**
 * @author SHTrassEr
 */

/**
 * Список объектов типа YAQP.Classes.Room. Класс YAQP.Classes.RoomList наследутеся
 * от YAQP.Classes.ObjectList
 * 
 * @constructor
 * @class
 */
YAQP.Classes.RoomList = function() {
		
};

/**
 * Наследуемся от  YAQP.Classes.ObjectList.
 */
YAQP.Functions.extend(YAQP.Classes.RoomList, YAQP.Classes.ObjectList);

/**
 * Переопределяем метод добавления обьекта в список. В список могут попасть
 * только обьекты типа YAQP.Classes.ObjectTypes.room. 
 * Добавляет объект в список. Если в качестве параметра указана строка, то
 * объект выбирается из глобального списка комнат (game.rooms).
 * 
 * @param {YAQP.Classes.Room|string}
 *            o объект поиска. Либо строка с id объекта, либо сам объект.
 */
YAQP.Classes.RoomList.prototype.add = function(o) {
	switch (typeof o) {
		case "undefined" :
			YAQP.Functions.error("Нельзя добавить объект в список сцен." + 
					"Объект не является сценой: 'undefined'.");
			break;
		case "string" :
			if (YAQP.game.rooms[o]) {
				if (YAQP.Functions.isRoom(YAQP.game.rooms[o])) {
					return YAQP.Classes.RoomList.superclass.add.apply(this, [YAQP.game.rooms[o]]);					
				} else
					YAQP.Functions.error("Нельзя добавить объект в список сцен. " +
							"Объект содержится в глобальном списке сцен, " +
							" но не является сценой: '" + o + "'.");
			} else
				YAQP.Functions.error("Нельзя добавить объект в список сцен. " +
				"Объект не найден в глобальном списке сцен: '" + o + "'.");
			break;
		case "object" :
			if (YAQP.Functions.isRoom(o)) {
				return YAQP.Classes.RoomList.superclass.add.apply(this, [o]);					
			} else
				YAQP.Functions.error("Нельзя добавить объект в список сцен. " +
						"Объект не является сценой: '" +
						 + o.toString() + "'.");
			break;
	}
};
