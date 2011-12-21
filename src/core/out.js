/**
 * @author SHTrassEr
 * 
 * Класс содержит вывод текста.
 */

YAQP.out = (function() {
	var buffer = [];
	var text = [];
	var objs = [];
	
	var out = {};
	
	var processValue = function(v, o) {
		try {
			switch (typeof v) {
				case "string" :
					return v;
				case "function" :
					var ret = v(o);
					return typeof ret == "string" ? ret + YAQP.game.getBuffer() : YAQP.game.getBuffer();
				default :
					return "";
 			};
		} catch(e) {
			YAQP.Functions.error("YAQP.out.processValue" + arguments.toSource(), e);
		};
	};
	
	var processText = function() {
		try {
			var here = YAQP.Functions.here();
			text = YAQP.out.formatStr(processValue(here.dsc, here));
		} catch(e) {
			YAQP.Functions.error("YAQP.out.setBuffer", e);
		}; 
	};
	
	var processObjs = function() {
		try {
			objs = [];
			var here = YAQP.Functions.here();
			for (var o in here.objs) {
				if (here.objs.hasOwnProperty(o)){
					var arr = YAQP.out.formatStr(processValue(here.objs[o].dsc, here.objs[o]), here.objs[o]);
					objs = objs.concat(arr);
				}
			};
				
		} catch(e) {
			YAQP.Functions.error("YAQP.out.setBuffer", e);
		}; 
	};
	
	var processBuffer = function() {
		try {
			buffer = YAQP.out.formatStr(YAQP.game.getBuffer());
		} catch(e) {
			YAQP.Functions.error("YAQP.out.setBuffer", e);
		}; 
	};
	
	/**
	 * Возвращает buffer
	 */
	out.getBuffer = function() {
		return buffer;
	};
	
	/**
	 * Возвращает dsc
	 */
	out.getText = function() {
		return text;
	};
	
	/**
	 * Возвращает objs
	 */
	out.getObjs = function() {
		return objs;
	};

	out.refresh = function() {
		processBuffer();
		processText();
		processObjs();
		
	};

	return out;
})();

YAQP.out.obj = function(text, obj) {
	this.text = text;
	this.obj = obj;
};

YAQP.out.formatStr = function(s, obj) {
	var b_in = s;
	var b_out = [];
	var pointer = 0;
	var pointer_start = pointer;
	var b_obj = obj;
	
	var getBuffer = function() {
		return b_in.substring(pointer_start, pointer);
	};
	
	var printOutObj = function(){
		b_out.push(new YAQP.out.obj(getBuffer(), b_obj)); 
	}
	
	var printOut = function(){
		var s = getBuffer();
		if (s != "")
			b_out.push(s);
		pointer_start = pointer;
	};
	
	var skipChar = function() {
		printOut();
		pointer_start = pointer + 1;
	};
	
	var printObject = function() {
		printOut();
		b_obj = obj;
		pointer_start = pointer + 1;
		for( ; pointer < b_in.length; pointer++) {
			if (b_in[pointer] == "}") {
				printOutObj();
				break;
			} else if (b_in[pointer] == YAQP.game.prefs.delim) {
				b_obj = YAQP.Functions.refObj(getBuffer());
				pointer_start = pointer + 1;
			};
		};
		pointer++;
		pointer_start = pointer;
		
	};
	
	for (pointer_start = 0, pointer = 0; pointer < b_in.length; pointer++) {
		switch (b_in[pointer]) {
			case "\\":
				skipChar();
				pointer++;
				break;
			case "{":
				printObject();
				break;
		};
	}
	printOut();
	return b_out;
};