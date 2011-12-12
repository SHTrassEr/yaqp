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
 * @namespace Содержит базовые функции.
 */
YAQP.Functions = {};

/**
 * @namespace Содержит все что связано с игрой.
 */
YAQP.game = {};