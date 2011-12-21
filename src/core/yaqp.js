/**
 * @author SHTrassEr
 */

/**
 * @namespace
 * @type YAQP
 */
var YAQP = (/** @constructor */
function() {
	/**
	 * Здесь хранится шаблон для квестов.
	 * 
	 * @private
	 * @type string
	 */
	var sCore = undefined;
	/**
	 * Здесь сохраняется сам квест.
	 * 
	 * @private
	 * @type string
	 */
	var sGame = undefined;
	/**
	 * Хранит строку, которую нужно заменить в шаблоне.
	 * 
	 * @private
	 * @constant
	 */
	var sQuestEntry = "// <%QUEST%>//";
	/**
	 * 
	 */
	function createGame() {
		if (sCore != undefined && sGame != undefined) {
			var data = sCore.replace(sQuestEntry, sGame);
			$.globalEval(data);
		}
	}
	/** @scope YAQP */
	return {
		/**
		 * @memberOf YAQP
		 * @param {string}
		 *            corePath Путь к файлу
		 * @param {string}
		 *            gamePath Путь к файлу
		 */
		initGame : function(corePath, gamePath) {
			sCore = undefined;
			sGame = undefined;
			$.get(corePath, function(data) {
						$.globalEval(core);
					});
		},

		/**
		 * @memberOf YAQP
		 * @param {string}
		 *            corePath Путь к файлу
		 * @param {string}
		 *            gamePath Путь к файлу
		 */
		initGameSync : function(corePath, gamePath) {
			sCore = undefined;
			sGame = undefined;
			$.ajax({
						success : function(data) {
							sCore = data;
							createGame();
						},
						type : "GET",
						url : corePath,
						dataType : "text",
						async : false,
						cache : false
					});
			$.ajax({
						success : function(data) {
							sGame = data;
							createGame();
						},
						type : "GET",
						url : gamePath,
						dataType : "text",
						async : false,
						cache : false
					});

		}
		,

	};
})();

/**
 * @namespace Содержит конструкторы всех базовых классов
 */
YAQP.Classes = {};

/**
 * @namespace Содержит вспомогательные функции.
 */
YAQP.FunctionsCore = {};

/**
 * @namespace Содержит базовые функции.
 */
YAQP.Functions = {};

/**
 * @namespace Содержит все что связано с игрой.
 */
YAQP.game = {};

/**
 * @namespace Функции для работы с текстом.
 */
YAQP.out = {};
/**
 * @namespace Собития
 */
YAQP.game.Events = {};

YAQP.game.buffer = "";

YAQP.game.dsc = "";

YAQP.game.getBuffer = function(){
	var buffer = YAQP.game.buffer;
	YAQP.Functions.clearBuffer();
	return buffer;
};

YAQP.game.getDsc = function(){
	try {
		var here = YAQP.Functions.here();
		if (here.dsc){
			return here.dsc;
		} else 
			throw "Не могу прочитать here.dsc";
	} catch (e) {
		YAQP.Functions.error("YAQP.game.getDsc", e);
	} 
	
};


YAQP.game.initialRoom = "main";

YAQP.game.prefs = {};

YAQP.game.prefs.delim = "|";

YAQP.game.go_canceled = false;
