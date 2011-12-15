/**
 * @author SHTrassEr
 * @param {object}
 *            obj объект
 * @param {string}
 *            id идентификатор объекта.
 * @class
 */
YAQP.Classes.Obj = function(obj, id) {
	try {

		/**
		 * Список привязанных объектов.
		 * 
		 * @type YAQP.Classes.ObjectList
		 */
		this.objs = new YAQP.Classes.ObjList();

		/**
		 * В какой локации размещен предмет.
		 * 
		 * @type YAQP.Classes.Room
		 */
		this.where = undefined;

		/**
		 * Обработчик вызывается при попытке взять предмет.
		 */
		this.tak = undefined;
		
		this.used = function() {
		};

		this.use = function() {
		};
		
		/**
		 * Перекидываем все поля и методы из описания объекта в создаваемый
		 * объект.
		 */
		for (var p in obj) {
			if (!YAQP.Functions.isValidRoomField(p))
				throw "Недопустимое поле в описании предмета: '" + p + "'";
			if (p != "obj") {
				/** все, кроме поля obj */
				this[p] = obj[p];
			}
		}
		YAQP.Classes.Obj.superclass.constructor.apply(this, [id]);
	} catch (e) {
		YAQP.Functions.error("YAQP.Classes.Obj ", e);
	};
};

YAQP.Functions.extend(YAQP.Classes.Obj, YAQP.Classes.Object);

YAQP.Classes.Obj.prototype.__type = YAQP.Classes.ObjectTypes.Obj;