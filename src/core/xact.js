/**
 * @author SHTrassEr
 * 
 * Модуль позволяет делать ссылки на объекты из других объектов, 
 * реакций и life методов в форме: {объект:текст}.
 */

YAQP.Functions.xact = function(id, act) {
	try {
		var obj = {};
		obj.nam = id;
		obj.id = id;
		obj.act = act;
		YAQP.game.objs.add(new YAQP.Classes.Obj(obj, id));
		return id;
	} catch(e) {
		YAQP.Functions.error("YAQP.Functions.xact", e);
	}
};
