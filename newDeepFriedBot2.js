var possible_moves = Array["R", "P", "S", "W", "D"];
var dynamiteLimit = 100;
var ourDynamiteUsed = 0;
var theirDynamiteUsed = 0;
var tieCount = 0;

class Bot {

    makeMove(gamestate) {

        if (gamestate.rounds.length > 0) {

            console.log(ourDynamiteUsed, gamestate.rounds.length, gamestate.rounds[gamestate.rounds.length - 1].p1, gamestate.rounds[gamestate.rounds.length - 1].p2);

            if (gamestate.rounds[gamestate.rounds.length - 1].p1 == 'D') {
                theirDynamiteUsed++;
            }

            if (gamestate.rounds[gamestate.rounds.length - 1].p2 == gamestate.rounds[gamestate.rounds.length - 1].p1) {
                tieCount++;
            } else {
                tieCount = 0;
            }

            var random1 = Math.floor(Math.random() * 60);

            if (tieCount > 0 && (gamestate.rounds[gamestate.rounds.length - 1].p2 == 'D' && theirDynamiteUsed < 100)) {
                if (random1 < 4) {
                    return 'R';
                } else if (random1 < 8) {
                    return 'P';
                } else if (random1 < 12) {
                    return 'S';
                } else if (random2 < 15 && ourDynamiteUsed < 100) {
                    return 'D';
                } else {
                    return 'W';
                }
            }

            if (tieCount > 0 && (gamestate.rounds[gamestate.rounds.length - 1].p2 == 'W')) {
                if (random1 < 15) {
                    return 'R';
                } else if (random1 < 30) {
                    return 'P';
                } else if (random1 < 55) {
                    return 'S';
                } else {
                    return 'W';
                }

            }

            if (ourDynamiteUsed < dynamiteLimit && tieCount >= 4) {
                ourDynamiteUsed++;
                return 'D';
            }

        }

        var modifier = (130 * tieCount)^4;
        var random2 = Math.floor(Math.random() * (600 + modifier));

        if (ourDynamiteUsed < dynamiteLimit && random2 < (modifier * 2 / 3)) {
            ourDynamiteUsed++;
            return 'D';
        } else if (random2 < modifier && theirDynamiteUsed < 100) {
            return 'W'
        } else if (random2 < (modifier + 200)) {
            return 'R';
        } else if (random2 < (modifier + 400)) {
            return 'P';
        } else {
            return 'S';
        }


        return 'R';
    }
}


module.exports = new Bot();
