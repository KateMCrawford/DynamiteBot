class Bot {

    constructor() {
        this.possible_moves = ['R', 'P', 'S', 'W', 'D'];
        this.dynamiteUsed = 0;
        this.dynamiteLimit = 1000;
    }
    makeMove(gamestate) {
        return 'R';
    }
}

module.exports = new Bot();
