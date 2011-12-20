/**
 * @author SHTrassEr
 * 
 * Представление. Все функции, которые генерируют HTML код находятся здесь.
 */

YAQP.UI.HTML = {};

YAQP.UI.HTML.goLink = function(room) {
	var li = document.createElement("li");
	var a = document.createElement("a");
	li.appendChild(a);
	var ta = document.createTextNode(room.nam);
	a.appendChild(ta);
	a.setAttribute("onclick", "YAQP.UI.Events.go('" + room.getId() + "');");
	a.setAttribute("href", "#");
	return li;
};

YAQP.UI.HTML.objLink = function(obj) {
	var a = document.createElement("a");
	var ta = document.createTextNode(obj.text);
	a.appendChild(ta);
	a.setAttribute("onclick", "YAQP.UI.Events.use('" + obj.obj.getId() + "');");
	a.setAttribute("href", "#");
	return a;
};

YAQP.UI.HTML.invLink = function(obj) {
	var li = document.createElement("li");
	var a = document.createElement("a");
	li.appendChild(a);
	var ta = "";
	if (obj.getId() === YAQP.UI.selectedObject) {
		var ta = document.createElement("b");
		ta.appendChild(document.createTextNode(obj.nam));
	} else
		ta = document.createTextNode(obj.nam);
	a.appendChild(ta);
	a.setAttribute("onclick", "YAQP.UI.Events.invClick('" + obj.getId()
					+ "');");
	a.setAttribute("href", "#");
	return li;
};
