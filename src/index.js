import Game from './game/game';
import Field from './field/field';

document.addEventListener("DOMContentLoaded", () => {
    const fieldContainer = document.getElementById("field-container");

    let field = new Field();
    field.createFieldWithHoldBoxAndNextBoxes(fieldContainer);

    let game = new Game();
    game.keyListener();
    game.play(fieldContainer);

});