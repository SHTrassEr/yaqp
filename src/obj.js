/**
 * @author SHTrassEr
 */

YAQP.Classes.Obj = function(obj, id) {
	/**
	 * Перекидываем все поля и методы из описания объекта
	 * в создаваемый объект.
	 */
	for (var p in obj) {
			this[p] = obj[p];
	}
	/**
	 * Идентификатор объекта.
	 * @type string
	 */
	this.id = id;
};

YAQP.Classes.Obj.prototype = YAQP.Classes.Object;