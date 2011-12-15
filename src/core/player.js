/**
 * @author SHTrassEr
 */

/**
 * Объект, представляющий игрока.
 * 
 * @constructor
 * @class
 */
YAQP.Classes.Player = function() {
	/**
	 * Инвентарь.
	 * 
	 * @type YAQP.Classes.ObjList
	 */
	this.inv = new YAQP.Classes.ObjList();
	
	this.objs = this.inv;

	/**
	 * На какой сцене находится игрок.
	 * 
	 * @type YAQP.Classes.Room
	 */
	this.where = undefined;

	/**
	 * Предыдущая сцена.
	 * 
	 * @type YAQP.Classes.Room
	 */
	this.from = undefined;

	/**
	 * Перемещает игрока с текущей сцены.
	 * 
	 * @param {YAQP.Classes.Room}
	 *            to Сцена назначения.
	 */
	this.move = function(to) {
		try {
			this.from = this.where;
			this.where = YAQP.Functions.refRoom(to);
		} catch (e) {
			YAQP.Functions.error("YAQP.Classes.Player.move", e);
		}
	};
};

/**
 * Тип объекта.
 * 
 * @type YAQP.Classes.ObjectTypes
 */
YAQP.Classes.Player.prototype.__type = YAQP.Classes.ObjectTypes.Player;
