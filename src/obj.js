/**
 * @author SHTrassEr
 * @param {object}
 *            obj объект
 * @param {string}
 *            id идентификатор объекта.
 * @class
 */
YAQP.Classes.Obj = function(obj, id) {
	/**
	 * Перекидываем все поля и методы из описания объекта в создаваемый объект.
	 */
	for (var p in obj) {
		this[p] = obj[p];
	}
	YAQP.Classes.Obj.superclass.constructor.apply(this, [id]);
};

YAQP.Functions.extend(YAQP.Classes.Obj, YAQP.Classes.Object);

YAQP.Classes.Obj.prototype.__type = YAQP.Classes.ObjectTypes.Obj;