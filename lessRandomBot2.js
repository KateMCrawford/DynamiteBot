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

            if (ourDynamiteUsed < dynamiteLimit && tieCount >= 3) {
                ourDynamiteUsed++;
                return 'D';
            }

            var random = Math.floor(Math.random() * (31 + 3 * tieCount));

            if (ourDynamiteUsed < dynamiteLimit && random < ((3 * tieCount) + 1)) {
                ourDynamiteUsed++;
                return 'D';
            } else if (random < ((2 * tieCount) + 11)) {
                return 'R';
            } else if (random < ((2 * tieCount) + 21)) {
                return 'P';
            } else {
                return 'S';
            }
        }

        return 'R';
}
}

module.exports = new Bot();
