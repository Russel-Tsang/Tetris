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

// multiplayer.js(game1, game2) {
//     if game1.sentLines ?
//         game2.addLines
// 	if game2.sentLines ?
//             game1.addLines

// 	game1 {
//         this.opponent = ‘’;
//         this.multiplayer = “”;
//     }

//     game1 = newGame(params)
//     game2 = newGame(params)

//     game1.set(game2) {
//         will set multiplayer to true and opponent to other game
//     }