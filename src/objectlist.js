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

YAQP.Functions.extend(YAQP.Classes.ObjectList, Array);

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
			if (this.look(o) === undefined) {
				this.push(o);
				return true;
			}
		} else
			throw "Параметр не является объектом, o: '" + o + "'";
		return false;
	} catch (e) {
		YAQP.Functions.error("YAQP.Classes.ObjectList.add ", e);
	}
};

/**
 * Поиск объекта. Функция возвращает индекс найденного объекта в списке.
 * 
 * @param {YAQP.Classes.Object|string}
 *            o объект поиска. Либо строка с id объекта, либо сам объект.
 * @param {boolean}
 *            lookHidden Искать скрытые объекты или нет. По умолчанию скрытые
 *            объекты не ищутся.
 * @returns {number|undefined} возвращает индекс найденного объекта, либо
 *          undefined если объект не найден.
 */
YAQP.Classes.ObjectList.prototype.look = function(o, lookHidden) {
	switch (typeof o) {
		case "string" :
			for (var i = 0; i < this.length; i++) {
				if (lookHidden || this[i].isEnabled()) {
					if (this[i].__id == o) {
						return i;
					}
				}
			}
			break;
		case "object" :
			for (var i = 0; i < this.length; i++) {
				if (lookHidden || this[i].isEnabled()) {
					if (this[i] == o) {
						return i;
					}
				}
			}
			break;
	}
	return undefined;
};

/**
 * Поиск объекта. Функция возвращает найденный в списке объект.
 * 
 * @param {YAQP.Classes.Object|string}
 *            o объект поиска. Либо строка с id объекта, либо сам объект.
 * @returns {number|undefined} возвращает индекс найденного объекта, либо
 *          undefined если объект не найден.
 */
YAQP.Classes.ObjectList.prototype.srch = function(o) {
	var i = this.look(o);
	if (i !== undefined) {
		return this[i];
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
	var i = this.look(o);
	if (i !== undefined) {
		return this[i].disable();
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
	var i = this.look(o, true);
	if (i !== undefined) {
		return this[i].enable();
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
	var i = this.look(o, false);
	if (i !== undefined) {
		this.splice(i, 1);
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
	var i = this.look(o, true);
	if (i !== undefined) {
		this.splice(i, 1);
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
	if (typeof oOld != "object") {
		return false;
	}
	if (typeof oNew != "object") {
		return false;
	}
	var i = this.look(oNew);
	if (i !== undefined) {
		i = this.look(oOld);
	}

	i = this.look(oOld);
	if (i !== undefined) {
		this[i] = oNew;
		return true;
	}
	return false;
};
