var possible_moves = Array["R", "P", "S", "W", "D"];
var dynamiteLimit = 1000;
var ourDynamiteUsed = 0;

class Bot {

    makeMove(gamestate) {

        var random = Math.floor(Math.random() * 10);

        if (isTie(gamestate)) {
            if (random < 4 && ourDynamiteUsed < this.dynamiteLimit) {
                return 'D';
                ourDynamiteUsed++;
            } else if (random < 6) {
                return 'R';
            } else if (random < 8) {
                return 'P';
            } else {
                return 'S';
            }

        } else {
            if (random < 1 && ourDynamiteUsed < this.dynamiteLimit) {
                return 'D';
                ourDynamiteUsed++;
            } else if (random < 4) {
                return 'R';
            } else if (random < 7) {
                return 'P';
            } else {
                return 'S';
            }
        }
    }

    isTie(gamestate) {
        if (gamestate.rounds[gamestate.rounds.length - 1].p2 == gamestate.rounds[gamestate.rounds.length - 1].p1)
            return true;
        else
            return false;
    }
}

module.exports = new Bot();
