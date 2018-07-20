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


            if (tieCount > 0 && (gamestate.rounds[gamestate.rounds.length - 1].p2 == 'D')) {
                return 'W';
            }

            if (tieCount > 0 && (gamestate.rounds[gamestate.rounds.length - 1].p2 == 'W')) {
                var random1 = Math.floor(Math.random() * 30);

                if (random1 < 10) {
                    return 'R';
                } else if (random1 < 20) {
                    return 'P';
                } else {
                    return 'S';
                }

            }

            if (ourDynamiteUsed < dynamiteLimit && tieCount >= 4) {
                ourDynamiteUsed++;
                return 'D';
            }

        }

        var random2 = Math.floor(Math.random() * (30 + 20 * tieCount));

        if (ourDynamiteUsed < dynamiteLimit && random2 < ((20 * tieCount))) {
            ourDynamiteUsed++;
            return 'D';
        } else if (random2 < ((20 * tieCount) + 10)) {
            return 'R';
        } else if (random2 < ((20 * tieCount) + 20)) {
            return 'P';
        } else {
            return 'S';
        }


        return 'R';
    }
}


module.exports = new Bot();
