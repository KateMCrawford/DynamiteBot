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
            
            var random1 = Math.floor(Math.random() * 10);

            if (ourDynamiteUsed < dynamiteLimit && tieCount >= 2 && random1 < 9) {
                ourDynamiteUsed++;
                console.log(ourDynamiteUsed, gamestate.rounds.length);
                return 'D';
            }

            var random2 = Math.floor(Math.random() * 3);

            if (random2 < 1) {
                return 'R';
            } else if (random2 < 2) {
                return 'P';
            } else {
                return 'S';
            }
        }

        return 'R';
}
}

module.exports = new Bot();
