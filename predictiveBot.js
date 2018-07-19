class Bot {


    constructor() {
        this.possibleMoves = ['R', 'P', 'S', 'W', 'D'];
        this.responseMoves = ['P', 'S', 'R', 'R', 'W'];
        this.dynamiteUsed = 0;
        this.dynamiteLimit = 1000;

        this.probGiven = [[0.3, 0.3, 0.3, 0.1, 0], [0.3, 0.3, 0.3, 0.1, 0], [0.3, 0.3, 0.3, 0.1, 0], [0.3, 0.3, 0.3, 0.1, 0], [0.3, 0.3, 0.3, 0.1, 0]];
        this.probGivenOverNumber = [1, 1, 1, 1, 1];

        this.nextMove = 'P';
    }

    makeMove(gamestate) {
        this.updateProbability;
        this.beatPrediction;
        console.log(this.nextMove);
        return this.nextMove;
    }

    updateProbability() {
        var given = gamestate.getRounds()[gamestate.getRounds().length() - 1].getP1();
        var response = gamestate.getRounds()[gamestate.getRounds().length()].getP2();

        var givenIndex = this.possibleMoves.indexOf(given);
        var responseIndex = this.possibleMoves.indexOf(response);

        updateGivenValues = this.probGiven[givenIndex];

        for (i = 0; i <= 5; i++) {
            if (i === responseIndex) {
                updateGivenValues[i] = ((updateGivenValues[i] * this.probGivenOverNumber[givenIndex]) + 1) / (this.probGivenOverNumber[givenIndex] + 1);
            } else {
                updateGivenValues[i] = ((updateGivenValues[i] * this.probGivenOverNumber[givenIndex])) / (this.probGivenOverNumber[givenIndex] + 1);
            }
        }

        this.probGivenOverNumber[givenIndex]++;
    }

    beatPrediction() {
        var mostLikelyMoveIndex = this.probGiven[gamestate.getRounds().length() - 1].indexOf(Math.max(...this.probGiven[gamestate.getRounds().length() - 1]));

        switch (mostLikelyMoveIndex) {
            case 0:
                this.nextMove = this.possibleMoves[1];
                break;
            case 1:
                this.nextMove = this.possibleMoves[2];
                break;
            case 2:
                this.nextMove = this.possibleMoves[0];
                break;
            case 3:
                this.nextMove = this.possibleMoves[1];
                break;
            case 4:
                this.nextMove = this.possibleMoves[3];
                break;
        }
    }
}

module.exports = new Bot();
