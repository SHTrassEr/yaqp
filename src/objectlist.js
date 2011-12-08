/**
 * Описание для класса ObjectList. ObjectList содержит
 * методы для работы со списком объектов. 
 * @author SHTrassEr
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
	switch (typeof obj) {
		case "string":
			for (var i = 0; i< this.length; i++) {
				if (this[i].id == obj) {
					return this[i];
				}
			}		
			break;
		case "object":
			for (var i = 0; i< this.length; i++) {
				if (this[i] == obj) {
					return this[i];
				}
			}
			break;
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
	switch (typeof obj) {
		case "string":
			break;
		case "object":
			if (! this.srch(obj)){
				this.push(obj);
			}
			break;
		}
};