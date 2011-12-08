/**
 * @author VMakarov
 */

/**
 * Список объектов. 
 * @class
 */
YAQP.Classes.ObjectList = function() {
	
};

YAQP.Classes.ObjectList.prototype = new Array();

/**
 * Поиск объекта. 
 * @param {YAQP.Classes.Object|string} obj объект поиска. Либо строка с id
 * объекта, либо сам объект. 
 */
YAQP.Classes.ObjectList.prototype.srch = function(obj) {
	if (typeof obj == "string") {
		for (var i = 0; i< this.length; i++) {
			if (this[i].id == obj) {
				return this[i];
			}
		}		
	} else {
		for (var i = 0; i< this.length; i++) {
			if (this[i] == obj) {
				return this[i];
			}
		}
	}
	return undefined;
};

/**
 * Добавляет объект в список. Если в качестве параметра 
 * указана строка, то объект выбирается из глобального 
 * списка обьектов. 
 * @param {YAQP.Classes.Object|string} obj объект поиска. Либо строка с id
 * объекта, либо сам объект. 
 */
YAQP.Classes.ObjectList.prototype.add = function(obj) {
	this.push(obj);
};

YAQP.Classes.Object = function() {
	
};