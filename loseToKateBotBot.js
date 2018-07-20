var roundCount = 0;

var dynamiteLimit = 100;
var ourDynamiteUsed = 0;

class Bot {

    makeMove(gamestate) {

        roundCount++;
        
        var random = Math.floor(Math.random() * 10);

        if (random < 1 && ourDynamiteUsed < dynamiteLimit) {
            ourDynamiteUsed++;
            return 'D';
        } else {
            return 'W';
        }
    }
}

module.exports = new Bot();
