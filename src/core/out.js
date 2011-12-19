/**
 * @author SHTrassEr
 * 
 * Содержит набор функций для работы с текстом.
 */

YAQP.out = (function() {
	
	var b_in = "";
	
	var b_out = "";
	
	var pointer = 0;
	var pointer_start = pointer; 
	
	var out = {};
	
	out.prefs = {};
	
	out.prefs.newLineFrom = "^";
	
	out.prefs.newLineTo = "<br />";
	
	var printOut = function(){
		b_out += b_in.substring(pointer_start, pointer);
		pointer_start = pointer;
	};
	
	var skipChar = function() {
		printOut();
		pointer_start = pointer + 1;
	};
	
	var printNewLine = function() {
		skipChar();
		b_out += out.prefs.newLineTo; 
	};
	
	out.formatStr = function(s) {
		b_in = s;
		b_out = "";
		for (pointer_start = 0, pointer = 0; pointer < b_in.length; pointer++) {
			switch (b_in[pointer]) {
				case "\\":
					skipChar();
					pointer++;
					break;
				case out.prefs.newLineFrom:
					printNewLine();
					break;
			};
		}
		printOut();
		return b_out;
	};
	
	return out;
})();
