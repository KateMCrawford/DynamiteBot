var possible_moves = Array["R", "P", "S", "W", "D"];
var dynamiteLimit = 1000;
var ourDynamiteUsed = 0;
var tieCount = 0;

class Bot {

    makeMove(gamestate) {

        var random = Math.floor(Math.random() * 10);

        if (gamestate.rounds.length > 0) {
            
            console.log(ourDynamiteUsed);
            console.log(gamestate.rounds.length);
            console.log(gamestate.rounds[gamestate.rounds.length - 1].p1);
            console.log(gamestate.rounds[gamestate.rounds.length - 1].p2);

            if (gamestate.rounds[gamestate.rounds.length - 1].p2 == gamestate.rounds[gamestate.rounds.length - 1].p1) {
                if (random < 4 && ourDynamiteUsed < dynamiteLimit) {
                    ourDynamiteUsed++;
                    return 'D';
                } else if (random < 6) {
                    return 'R';
                } else if (random < 8) {
                    return 'P';
                } else {
                    return 'S';
                }

            } else {
                if (random < 1 && ourDynamiteUsed < dynamiteLimit) {
                    ourDynamiteUsed++;
                    return 'D';
                } else if (random < 4) {
                    return 'R';
                } else if (random < 7) {
                    return 'P';
                } else {
                    return 'S';
                }
            }
        } else {
            return 'R';
        }
    }
}

module.exports = new Bot();
