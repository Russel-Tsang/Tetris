import Game from '../game/game';
import Field from '../field/field';
import Multiplayer from '../multiplayer/multiplayer';

export default class Menu {
    constructor() {
        this.menu = document.getElementById("menu");

        this.optionsPlayer1 = { gameNum: 1, moveSpeed: 25, controls: { left: 65, right: 68, turnRight: 87, softDrop: 83, hold: 81, turnLeft: 192, hardDrop: 49 } }
        this.optionsPlayer2 = { gameNum: 2, moveSpeed: 15, controls: { left: 37, right: 39, turnRight: 38, softDrop: 40, hold: 190, turnLeft: 75, hardDrop: 16 } }
            

        this.game1 = new Game(this.optionsPlayer1);
        this.game2 = new Game(this.optionsPlayer2);

        this.field1 = new Field(1);
        this.field2 = new Field(2);

        this.multiplayerMode = new Multiplayer(this.game1, this.game2);

        this.fieldContainer1 = document.getElementById("field-container-1");
        this.fieldContainer2 = document.getElementById("field-container-2");
    }

    renderButtons() {
        let singlePlayerButton = document.createElement("div");
        let multiplayerButton = document.createElement("div");

        singlePlayerButton.classList.add("single-player-button");
        multiplayerButton.classList.add("multiplayer-button");

        singlePlayerButton.innerHTML = "Single Player";
        multiplayerButton.innerHTML = "Multiplayer";

        this.addEventListeners(singlePlayerButton, multiplayerButton);

        return [singlePlayerButton, multiplayerButton];
    }

    addEventListeners(singlePlayerButton, multiplayerButton) {
        singlePlayerButton.addEventListener('click', () => {
            this.renderSinglePlayer();
        });
        multiplayerButton.addEventListener('click', () => {
            this.renderMultiplayer();
        });
    }

    renderSinglePlayer() {
        document.body.removeChild(this.menu);
        document.body.style.justifyContent = 'none';
        this.field1.createCompleteField(this.fieldContainer1);
        this.fieldContainer1.style.position = 'relative';
        this.fieldContainer1.style.left = '14vw';
        this.game1.keyListener();
        this.game1.play();
    }

    renderMultiplayer() {
        document.body.removeChild(this.menu);
        this.field1.createCompleteField(this.fieldContainer1);
        this.game1.keyListener();

        this.field2.createCompleteField(this.fieldContainer2);
        this.game2.keyListener();

        this.multiplayerMode.startMultiplayer();
    }

    renderMenu() {
        let buttonContainer = document.createElement("div");
        buttonContainer.classList.add("button-container");
        this.renderButtons().forEach(button => {
            buttonContainer.appendChild(button);
        })
        this.menu.appendChild(buttonContainer);
    }
}