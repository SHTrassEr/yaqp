/**
* @author SHTrassEr
*/

/**
 * Объект, представляющий игрока.
 * 
 * @param {YAQP.Classes.Room} room Сцена, на которой находится игрок.
 * @constructor
 * @class
 */
YAQP.Classes.Player = function(room) {
	/**
	 * Инвентарь.
	 * 
	 * @type YAQP.Classes.ObjList
	 */
	this.inv = new YAQP.Classes.ObjList();
	
	/**
	 * На какой сцене находится игрок.
	 * 
	 * @type YAQP.Classes.Room
	 */
	this.where = room;
};

/**
 * Тип объекта. 
 *  @type YAQP.Classes.ObjectTypes
 */
YAQP.Classes.Player.prototype.__type = YAQP.Classes.ObjectTypes.Player;