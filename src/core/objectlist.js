/**
 * Описание для класса ObjectList. ObjectList содержит методы для работы со
 * списком объектов.
 * 
 * @author SHTrassEr
 */

/**
 * Список объектов.
 * 
 * @constructor
 * @class
 */
YAQP.Classes.ObjectList = function() {

};

// YAQP.Functions.extend(YAQP.Classes.ObjectList, Array);

/**
 * Добавляет объект в список. Если в качестве параметра указана строка, то
 * объект выбирается из глобального списка обьектов.
 * 
 * @param {YAQP.Classes.Object|string}
 *            o объект поиска. Либо строка с id объекта, либо сам объект.
 */
YAQP.Classes.ObjectList.prototype.add = function(o) {
	try {
		if (typeof o === "object") {
			if (o.__id) {
				if (this[o.__id] !== o) {
					this[o.__id] = o;
					return true;
				} else
					/* если объект уже занесен в список */
					return false;
			} else
				throw "Не указано свойство __id, o: '" + o.toString() + "'";
		} else
			throw "Параметр не является объектом, o: '" + o + "'";
		return false;
	} catch (e) {
		YAQP.Functions.error("YAQP.Classes.ObjectList.add ", e);
	}
};

/**
 * Поиск объекта. Функция возвращает найденный в списке объект.
 * 
 * @param {YAQP.Classes.Object|string}
 *            o объект поиска. Либо строка с id объекта, либо сам объект.
 * @param {boolean}
 *            lookHidden Искать скрытые объекты или нет. По умолчанию скрытые
 *            объекты не ищутся.
 * @returns {number|undefined} возвращает индекс найденного объекта, либо
 *          undefined если объект не найден.
 */
YAQP.Classes.ObjectList.prototype.srch = function(o, lookHidden) {
	switch (typeof o) {
		case "string" :
			if (this[o]) {
				if (lookHidden || this[o].isEnabled())
					return this[o];
			}
			break;
		case "object" :
			if (this[o.__id]) {
				if (lookHidden || this[o.__id].isEnabled())
					if (this[o.__id] === o)
						return this[o.__id];
			}
			break;
	}
	return undefined;
};

/**
 * Скрытие объекта в списке; отличается от удаления тем, что может быть
 * возвращён к жизни через метод enable
 * 
 * @param {YAQP.Classes.Object|string}
 *            o объект. Либо строка с id объекта, либо сам объект.
 * @returns {number|undefined} возвращает false, если объект удалось скрыть,
 *          либо undefined, если объект не найден.
 */
YAQP.Classes.ObjectList.prototype.disable = function(o) {
	var obj = this.srch(o);
	if (obj !== undefined) {
		return obj.disable();
	}
	return undefined;
};

/**
 * Скрытие объекта в списке; отличается от удаления тем, что может быть
 * возвращён к жизни через метод enable
 * 
 * @param {YAQP.Classes.Object|string}
 *            o объект. Либо строка с id объекта, либо сам объект.
 * @returns {number|undefined} возвращает false, если объект удалось скрыть,
 *          либо undefined, если объект не найден.
 */
YAQP.Classes.ObjectList.prototype.enable = function(o) {
	var obj = this.srch(o, true);
	if (obj !== undefined) {
		return obj.enable();
	}
	return undefined;
};

/**
 * Удаление объекта из списка. Скрытые объекты не удаляются.
 * 
 * @param {YAQP.Classes.Object|string}
 *            o объект. Либо строка с id объекта, либо сам объект.
 * @returns {boolean|undefined} возвращает true, если объект удалось удалить,
 *          либо undefined, если объект не найден.
 */
YAQP.Classes.ObjectList.prototype.del = function(o) {
	var obj = this.srch(o);
	if (obj !== undefined) {
		delete this[obj.__id];
		return true;
	}
	return undefined;
};
/**
 * Удаление объекта из списка. Скрытые объекты тоже удаляются.
 * 
 * @param {YAQP.Classes.Object|string}
 *            o объект. Либо строка с id объекта, либо сам объект.
 * @returns {number|undefined} возвращает true, если объект удалось удалить,
 *          либо undefined, если объект не найден.
 */
YAQP.Classes.ObjectList.prototype.purge = function(o) {
	var obj = this.srch(o, true);
	if (obj !== undefined) {
		delete this[obj.__id];
		return true;
	}
	return undefined;
};

/**
 * Замена объекта в списке. Если объект, на который следует заменить (oNew) уже
 * есть в списке, то просто удаляется объект замены (oOld)
 * 
 * @param {YAQP.Classes.Object|string}
 *            oOld объект поиска. Либо строка с id объекта, либо сам объект.
 * @param {YAQP.Classes.Object|string}
 *            oNew объект поиска. Либо строка с id объекта, либо сам объект.
 * @returns {boolean} возвращает true, если замена произошла, false - в
 *          противном случае.
 */
YAQP.Classes.ObjectList.prototype.replace = function(oOld, oNew) {
	try {
		if (typeof oOld != "object") {
			return false;
		}
		if (typeof oNew != "object") {
			return false;
		}
		if (oOld === oNew)
			return true;

		this.del(oOld);
		this.add(oNew);
		return true;
	} catch (e) {
		YAQP.Functions.error("YAQP.Classes.ObjectList.replace ", e);
	};
};

/**
 * Обнуление списка.
 */
YAQP.Classes.ObjectList.prototype.zap = function() {
	try {
		for (var p in this) {
			delete this[p];
		}
	} catch (e) {
		YAQP.Functions.error("YAQP.Classes.ObjectList.zap ", e);
	};
};

/**
 * Скрывает все объекты в списке.
 */
YAQP.Classes.ObjectList.prototype.disable_all = function() {
	try {
		for (var p in this) {
			this[p].disable();
		}
	} catch (e) {
		YAQP.Functions.error("YAQP.Classes.ObjectList.disable_all ", e);
	};
};

/**
 * Показывает все объекты в списке.
 */
YAQP.Classes.ObjectList.prototype.enable_all = function() {
	try {
		for (var p in this) {
			this[p].enable();
		}
	} catch (e) {
		YAQP.Functions.error("YAQP.Classes.ObjectList.enable_all ", e);
	};
};
