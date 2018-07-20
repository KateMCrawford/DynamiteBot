class Bot {

    makeMove(gamestate) {
        if (gamestate.rounds.length > 1)
            switch (gamestate.rounds[gamestate.rounds.length - 1].p2) {
                case 'R':
                    return 'P';
                case 'P':
                    return 'S';
                case 'S':
                    return 'R';
                case 'W':
                    return 'R';
                case 'D':
                    return 'W';
            }
        else return 'D';
    }
}

module.exports = new Bot();
