var possible_moves = Array["R", "P", "S", "W", "D"];
var dynamiteLimit = 100;
var ourDynamiteUsed = 0;
var tieCount = 0;

class Bot {

    makeMove(gamestate) {

        if (gamestate.rounds.length > 0) {

            if (gamestate.rounds[gamestate.rounds.length - 1].p2 == gamestate.rounds[gamestate.rounds.length - 1].p1) {
                tieCount++;
            } else {
                tieCount = 0;
            }

            if (tieCount >= 2) {
                return 'W';
            }

            var random = Math.floor(Math.random() * 6);

            if (ourDynamiteUsed < dynamiteLimit && random < 3 && tieCount > 1) {
                return 'D';
            } else if ((ourDynamiteUsed < dynamiteLimit && random < 5 && tieCount > 2)){
                return 'W';
            } else if (random < 4) {
                return 'R';
            } else if (random < 5) {
                return 'P';
            } else {
                return 'S';
            }
        }

        return 'R';
    }
}

module.exports = new Bot();
