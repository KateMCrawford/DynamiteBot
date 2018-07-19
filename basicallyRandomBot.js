var possible_moves = Array["R", "P", "S", "W", "D"];
var dynamiteLimit = 1000;
var ourDynamiteUsed = 0;

class Bot {

    makeMove(gamestate) {

        var random = Math.floor(Math.random() * 10);

        if (random < 2 && ourDynamiteUsed < this.dynamiteLimit) {
            return 'D';
            ourDynamiteUsed++;
        } else if (random < 4) {
            return 'R';
        } else if (random < 8) {
            return 'P';
        } else {
            return 'S';
        }
    }
}

module.exports = new Bot();
