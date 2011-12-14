/**
 * @author SHTrassEr
 */

YAQP.init = function() {
	YAQP.game.pl = new YAQP.Classes.Player();
	YAQP.game.pl.where = YAQP.game.rooms[YAQP.game.initialRoom];
};