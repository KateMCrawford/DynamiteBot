var dynamiteUsed = 0;
var probGiven = Array[Array[0.3, 0.3, 0.3, 0.1, 0], Array[0.3, 0.3, 0.3, 0.1, 0], Array[0.3, 0.3, 0.3, 0.1, 0], Array[0.3, 0.3, 0.3, 0.1, 0], Array[0.3, 0.3, 0.3, 0.1, 0]];
var probGivenOverNumber = Array[10, 10, 10, 10, 10];

var nextMove = 'R';

class Bot {


    constructor() {
        this.possibleMoves = Array['R', 'P', 'S', 'W', 'D'];
        this.responseMoves = Array['P', 'S', 'R', 'R', 'W'];
        this.dynamiteLimit = 100;
    }

    makeMove(gamestate) {

        if (gamestate.rounds.length > 2) {
            this.updateProbability(gamestate);
            this.beatPrediction(gamestate);
        }
        //console.log(nextMove);
        //console.log(probGiven);
        return nextMove;
    }

    updateProbability(gamestate) {
        if (gamestate.rounds.length > 2) {
            var given = gamestate.rounds[gamestate.rounds.length - 2].p1;
            var response = gamestate.rounds[gamestate.rounds.length - 1].p2;

            var givenIndex = this.possibleMoves.indexOf(given);
            var responseIndex = this.possibleMoves.indexOf(response);


            for (var i = 0; i < 5; i++) {
                if (i == responseIndex) {
                    probGiven[givenIndex][i] = ((probGiven[givenIndex][i] * probGivenOverNumber[givenIndex]) + 1) / (probGivenOverNumber[givenIndex] + 1);
                } else {
                    probGiven[givenIndex][i] = ((probGiven[givenIndex][i] * probGivenOverNumber[givenIndex])) / (probGivenOverNumber[givenIndex] + 1);
                }
            }

            probGivenOverNumber[givenIndex]++;
        }
    }

    beatPrediction(gamestate) {

        var lastPlayedState = gamestate.rounds[gamestate.rounds.length - 1].p1;
        var lastPlayedIndex = this.possibleMoves.indexOf(lastPlayedState);

        var random = Math.floor(Math.random() * 1000);

        if (random < (1000 * this.probGiven[lastPlayedIndex][0])) {
            nextMove = this.responseMoves[0];
        } else if (random < (1000 * (probGiven[lastPlayedIndex][0] + probGiven[lastPlayedIndex][1]))) {
            nextMove = this.responseMoves[1];
        } else if (random < (1000 * (probGiven[lastPlayedIndex][0] + probGiven[lastPlayedIndex][1] + probGiven[lastPlayedIndex][2]))) {
            nextMove = this.responseMoves[2];
        } else if (random < (1000 * (probGiven[lastPlayedIndex][0] + probGiven[lastPlayedIndex][1] + probGiven[lastPlayedIndex][2] + probGiven[lastPlayedIndex][3]))) {
            nextMove = this.responseMoves[3];
        } else {
            nextMove = this.responseMoves[4];
        }

    }
}

module.exports = new Bot();
