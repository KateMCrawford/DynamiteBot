class Bot {

    makeMove(gamestate) {
        var random = Math.floor(Math.random() * 3);

        if (gamestate.rounds.length > 0 && gamestate.rounds[gamestate.rounds.length - 1].p2 == 'W') {
            return 'P';
        }

        if (random < 1) {
            return 'R';
        } else if (random < 2) {
            return 'P';
        } else {
            return 'S';
        }
    }
}

module.exports = new Bot();
