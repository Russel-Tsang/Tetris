import Game from './game/game';
import Field from './field/field';
import Multiplayer from './multiplayer/multiplayer';

document.addEventListener("DOMContentLoaded", () => {
    const fieldContainer = document.getElementById("field-container");
    const fieldContainer2 = document.getElementById("field-container-2");

    let field = new Field(1);
    let field2 = new Field(2);
    field.createCompleteField(fieldContainer);
    field2.createCompleteField(fieldContainer2);

    let optionsPlayer1 = { gameNum: 1, moveSpeed: 20, controls: { left: 37, right: 39, turnRight: 38, softDrop: 40, hold: 191, turnLeft: 76, hardDrop: 18 } }
    let optionsPlayer2 = { gameNum: 2, moveSpeed: 20, controls: { left: 65, right: 68, turnRight: 87, softDrop: 83, hold: 81, turnLeft: 192, hardDrop: 16 } }

    let game1 = new Game(optionsPlayer1);
    game1.keyListener();
    // game1.play(fieldContainer);

    let game2 = new Game(optionsPlayer2);
    game2.keyListener();
    // game2.play(fieldContainer);

    let multiplayerMode = new Multiplayer(game1, game2);
    multiplayerMode.startMultiplayer();

});