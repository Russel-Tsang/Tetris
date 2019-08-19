import Game from '../game/game';

export default class Multiplayer {
    constructor(player1, player2) {
        this.player1 = player1;
        this.player2 = player2;
    }

    startMultiplayer() {
        this.player1.setOpponent(this.player2);
        this.player2.setOpponent(this.player1);
        this.player1.play();
        this.player2.play();
    }
}
