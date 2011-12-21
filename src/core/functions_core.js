/**
 * @author SHTrassEr Содержит список вспомогательных функций. Эти функции 
 * вызываются только из файла 'core.js' при инициализации игры.
 */

/**
 * Служебная функция, вызывается один раз при создании игры. На вход получает
 * список объектов, объявленный в файле игры. Эти объекты преобразуются в
 * объекты типа {@link YAQP.Classes.Obj} и сохраняются в глобальном перечне
 * объектов игры {@link YAQP.game.objs}.
 * 
 * @param {object}
 *            obj список игровых объектов.
 */
YAQP.FunctionsCore.prepareObjs = function(obj) {
	var o = "";
	try {
		for (o in obj)
			YAQP.game.objs.add(new YAQP.Classes.Obj(obj[o], o));
	} catch (e) {
		YAQP.Functions.error(
				"YAQP.Functions.prepareObjs " + "obj: '" + o + "'", e);
	};
};

/**
 * Служебная функция, вызывается один раз при создании игры. На вход получает
 * список сцен, объявленный в файле игры. Эти сцены преобразуются в объекты типа
 * {@link YAQP.Classes.Room} и сохраняются в глобальном перечне сцен игры
 * {@link YAQP.game.rooms}.
 * 
 * @param {object}
 *            room список сцен.
 */
YAQP.FunctionsCore.prepareRooms = function(room) {
	var r = "";
	try {
		for (r in room)
			YAQP.game.rooms.add(new YAQP.Classes.Room(room[r], r));
	} catch (e) {
		YAQP.Functions.error("YAQP.Functions.prepareRooms " + "room: '" + r
						+ "'", e);
	}
};

/**
 * Служебная функция, вызывается один раз при создании игры. На вход получает
 * список сцен, объявленный в файле игры. Инициализирует список объектов сцены.
 * 
 * @TODO написать нормальную документацию.
 * @param {object}
 *            room список сцен.
 */
YAQP.FunctionsCore.prepareLinksRoomObjs = function(room) {
	var r = "";
	var o = "";
	try {
		for (var r in room) {
			for (var o in room[r].obj) {
				YAQP.Functions.put(room[r].obj[o], YAQP.game.rooms[r]);
			}
		}
	} catch (e) {
		YAQP.Functions.error("YAQP.Functions.prepareLinksRoomObjs " + "room: '"
						+ r + "', obj: '" + o + "' " + "room[r].obj[o]: '"
						+ YAQP.Functions.toString(room[r].obj[o]) + "'", e);
	}
};

/**
 * Служебная функция, вызывается один раз при создании игры. На вход получает
 * список сцен, объявленный в файле игры. Инициализирует список возможных
 * переходов со сцены.
 * 
 * @param {object}
 *            room список сцен.
 */
YAQP.FunctionsCore.prepareLinksRoomWays = function(room) {
	var r = "";
	var w = "";
	try {
		for (r in room) {
			for (w in room[r].way) {
				YAQP.game.rooms[r].ways.add(room[r].way[w]);
			}
		}
	} catch (e) {
		YAQP.Functions.error("YAQP.Functions.prepareLinksRoomWays " + "room: '"
						+ r + "', way: '" + w + "' " + "room[r].way[w]: '"
						+ YAQP.Functions.toString(room[r].way[w]) + "'", e);
	}
};

/**
 * Служебная функция, вызывается один раз при создании игры. На вход получает
 * список предметов, объявленный в файле игры. Инициализирует список связанных
 * предметов.
 * 
 * @param {object}
 *            room список сцен.
 */
YAQP.FunctionsCore.prepareLinksObjObjs = function(obj) {
	var o = "";
	var oo = "";
	try {
		for (o in obj) {
			for (oo in obj[o].obj) {
				YAQP.game.objs[o].objs.add(obj[o].obj[oo]);
			}
		}
	} catch (e) {
		YAQP.Functions.error("YAQP.Functions.prepareLinksObjObjs " + "obj: '"
						+ o + "', obj: '" + oo + "' " + "obj[o].obj[oo]: '"
						+ YAQP.Functions.toString(obj[o].obj[oo]) + "'", e);

	}
};

/**
 * Служебная функция. Проверяет задано допустимое значение для 
 * названия поля или нет.
 * 
 * @param fieldName
 *            Название поля.
 * @returns {Boolean} результат проверки.
 */
YAQP.Functions.isValidRoomField = function(fieldName) {
	switch (fieldName) {
		case "objs" :
		case "ways" :
		case "__type" :
			return false;
		default :
			return true;
	}
};

/**
 * Служебная функция. Проверяет задано допустимое значение для 
 * названия поля или нет.
 * 
 * @param fieldName
 *            Название поля.
 * @returns {Boolean} результат проверки.
 */
YAQP.Functions.isValidObjField = function(fieldName) {
	switch (fieldName) {
		case "objs" :
		case "where" :
		case "__type" :
			return false;
		default :
			return true;
	}
};