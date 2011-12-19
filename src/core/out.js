/**
 * @author SHTrassEr
 * 
 * Содержит набор функций для работы с текстом.
 */

YAQP.out = {};

YAQP.out.prefs = {};

YAQP.out.prefs.newLineFrom = /[^\\]|^\^/g;
YAQP.out.prefs.newLineTo = "<br />";

YAQP.out.formatNewLine = function(s) {
	try {
		return s.replace(YAQP.out.prefs.newLineFrom, YAQP.out.prefs.newLineTo);
	} catch (e) {
		YAQP.Functions.error("YAQP.out.formatNewLine", e);
	};
};


