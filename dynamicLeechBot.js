var possible_moves = Array["R", "P", "S", "W", "D"];
var dynamiteLimit = 100;
var ourDynamiteUsed = 0;
var theirDynamiteUsed = 0;
var tieCount = 0;
var tiePredictionGiven = [[0.1, 0.8, 0.1], [0.1, 0.1, 0.8], [0.8, 0.1, 0.1]]; // [D, W, Other], tiePredictionGiven[Given]
var tiePredictionGivenCounter = [1, 1, 1];

class Bot {

    makeMove(gamestate) {
        
        var random = Math.floor(Math.random() * 1000);

        if (gamestate.rounds.length > 1 && gamestate.rounds[gamestate.rounds.length - 1].p2 == 'D') {
            theirDynamiteUsed++;
        }

        if (gamestate.rounds.length > 1 && gamestate.rounds[gamestate.rounds.length - 1].p2 == gamestate.rounds[gamestate.rounds.length - 1].p1) {
            tieCount++;
        } else {
            tieCount = 0;
        }
        if (gamestate.rounds.length > 2) {

            if (tieCount >= 2) {
                if (gamestate.rounds[gamestate.rounds.length - 2].p1 == 'D') {
                    updateProb(gamestate, 0);
                    tiePredictionGivenCounter[0]++;
                } else if (gamestate.rounds[gamestate.rounds.length - 2].p1 == 'W') {
                    updateProb(gamestate, 1);
                    tiePredictionGivenCounter[1]++;
                } else {
                    updateProb(gamestate, 2);
                    tiePredictionGivenCounter[2]++;
                }
            }
        }

        if (gamestate.rounds.length > 2 && tieCount > 1) {

            var given;

            switch (gamestate.rounds[gamestate.rounds.length - 1].p1) {
                case 'D':
                    given = 0;
                case 'W':
                    given = 1;
                default:
                    given = 2;

            }

            if (random < 1000 * tiePredictionGiven[given][0] && ourDynamiteUsed < dynamiteLimit) {
                ourDynamiteUsed++;
                return 'D';
            } else if (random < 1000 * (tiePredictionGiven[given][1] + tiePredictionGiven[given][0]) && theirDynamiteUsed < dynamiteLimit)
                return 'W';
            else if (random < 1000 * (tiePredictionGiven[given][1] + tiePredictionGiven[given][0] + (tiePredictionGiven[given][2] / 3)))
                return 'R';
            else if (random < 1000 * (tiePredictionGiven[given][1] + tiePredictionGiven[given][0] + (tiePredictionGiven[given][2] * 2 / 3)))
                return 'P';
            else
                return 'S';
        }


        if (random < 333) {
            return 'R';
        } else if (random < 666) {
            return 'P';
        } else {
            return 'S';

        }
    }
}

function updateProb(gamestate, given) {
    if (gamestate.rounds[gamestate.rounds.length - 1].p2 == 'D') {
        tiePredictionGiven[given][0] = (tiePredictionGiven[given][0] * tiePredictionGivenCounter[given]) / (tiePredictionGivenCounter[given] + 1);
        tiePredictionGiven[given][1] = ((tiePredictionGiven[given][1] * tiePredictionGivenCounter[given]) + 0.5) / (tiePredictionGivenCounter[given] + 1);
        tiePredictionGiven[given][2] = ((tiePredictionGiven[given][2] * tiePredictionGivenCounter[given]) + 0.5)/ (tiePredictionGivenCounter[given] + 1);
    } else if (gamestate.rounds[gamestate.rounds.length - 1].p2 == 'W') {
        tiePredictionGiven[given][0] = (tiePredictionGiven[given][0] * tiePredictionGivenCounter[given]) / (tiePredictionGivenCounter[given] + 1);
        tiePredictionGiven[given][1] = (tiePredictionGiven[given][1] * tiePredictionGivenCounter[given]) / (tiePredictionGivenCounter[given] + 1);
        tiePredictionGiven[given][2] = ((tiePredictionGiven[given][2] * tiePredictionGivenCounter[given]) + 1) / (tiePredictionGivenCounter[given] + 1);
    } else {
        tiePredictionGiven[given][0] = ((tiePredictionGiven[given][0] * tiePredictionGivenCounter[given]) + 1) / (tiePredictionGivenCounter[given] + 1);
        tiePredictionGiven[given][1] = (tiePredictionGiven[given][1] * tiePredictionGivenCounter[given]) / (tiePredictionGivenCounter[given] + 1);
        tiePredictionGiven[given][2] = (tiePredictionGiven[given][2] * tiePredictionGivenCounter[given]) / (tiePredictionGivenCounter[given] + 1);
    }
}

module.exports = new Bot();
