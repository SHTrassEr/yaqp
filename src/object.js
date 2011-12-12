/**
 * @author SHTrassEr
 */
/**
 * Базовый объект.
 * 
 * @class
 */
YAQP.Classes.Object = function(id) {
	var disabled = false;

	this.disable = function() {
		disabled = true;
		return true;
	};
	this.enable = function() {
		disabled = false;
		return true;
	};
	this.isDisabled = function() {
		return disabled;
	};
	this.isEnabled = function() {
		return !disabled;
	};

	this.__id = id;

};

YAQP.Classes.ObjectTypes = {
	Object : 1,
	Room : 2,
	Obj : 3,
	ObjectList : 4,
	ObjList : 5,
	Player : 6
};

YAQP.Classes.Object.prototype.__type = YAQP.Classes.ObjectTypes.Object;
