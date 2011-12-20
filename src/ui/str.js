/**
 * @author SHTrassEr
 * 
 * Содержит набор функций для работы с текстом.
 */

YAQP.UI.Str = (function() {
	
	var b_in = "";
	
	var b_out = "";
	
	var pointer = 0;
	var pointer_start = pointer; 
	
	var Str = {};
	
	Str.prefs = {};
	
	Str.prefs.newLineFrom = "^";
	
	Str.prefs.newLineTo = "br";
	
	var printOut = function(){
		b_out.appendChild(document.createTextNode(b_in.substring(pointer_start, pointer)));
		pointer_start = pointer;
	};
	
	var skipChar = function() {
		printOut();
		pointer_start = pointer + 1;
	};
	
	var printNewLine = function() {
		skipChar();
		b_out.appendChild(document.createElement(Str.prefs.newLineTo));
	};
	
	Str.formatStr = function(s, node) {
		b_in = s;
		b_out = node;
		for (pointer_start = 0, pointer = 0; pointer < b_in.length; pointer++) {
			switch (b_in[pointer]) {
				case "\\":
					skipChar();
					pointer++;
					pointer++;
					break;
				case Str.prefs.newLineFrom:
					printNewLine();
					break;
			};
		}
		printOut();
	};
	
	return Str;
})();
