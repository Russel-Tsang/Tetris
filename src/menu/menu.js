import Game from '../game/game';
import Field from '../field/field';
import Multiplayer from '../multiplayer/multiplayer';
import Modal from '../modal/modal';
import SinglePlayerContent from '../modal/singlePlayerContent';
import MultiplayerContent from '../modal/multiplayerContent';

export default class Menu {
    constructor() {
        this.menu = document.getElementById("menu");

        this.optionsPlayer1 = { gameNum: 1, moveSpeed: 15, controls: { left: 65, right: 68, turnRight: 87, softDrop: 83, hold: 81, turnLeft: 192, hardDrop: 49 } }
        this.optionsPlayer2 = { gameNum: 2, moveSpeed: 15, controls: { left: 37, right: 39, turnRight: 38, softDrop: 40, hold: 16, turnLeft: 75, hardDrop: 190 } }
            

        this.game1 = new Game(this.optionsPlayer1);
        this.game2 = new Game(this.optionsPlayer2);

        this.field1 = new Field(1);
        this.field2 = new Field(2);

        this.multiplayerMode = new Multiplayer(this.game1, this.game2);

        this.fieldContainer1 = document.getElementById("field-container-1");
        this.fieldContainer2 = document.getElementById("field-container-2");

        this.singlePlayerContent = new SinglePlayerContent();
        this.multiplayerContent = new MultiplayerContent();
        this.modal = new Modal();
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
        // document.body.removeChild(this.menu);
        this.menu.style.display = "none";
        document.body.style.justifyContent = 'none';
        this.singlePlayerContent.createAllContent();
        this.field1.createCompleteField(this.fieldContainer1);
        this.fieldContainer1.style.position = 'relative';
        this.fieldContainer1.style.left = '14vw';
        this.game1.keyListener();
        this.game1.changeControls('single-player');
        this.game1.restartGame();
        this.singlePlayerContent.createTimer();
    }

    renderMultiplayer() {
        this.game1.changeControls('multiplayer');
        this.fieldContainer1.style.left = '0vw';
        this.menu.style.display = "none";
        this.field1.createCompleteField(this.fieldContainer1);
        this.field2.createCompleteField(this.fieldContainer2);
        let controlsContainer = document.createElement('div');
        controlsContainer.classList.add('controls-container')
        controlsContainer.appendChild(this.multiplayerContent.createControlsContent('player1'));
        controlsContainer.appendChild(this.multiplayerContent.createControlsContent('player2'));
        this.modal.create();
        this.modal.appendChild(controlsContainer);
        this.modal.appendChild(this._createCloseModalLink());
    }

    renderMenu() {
        let buttonContainer = document.createElement("div");
        buttonContainer.classList.add("button-container");
        this.renderButtons().forEach(button => {
            buttonContainer.appendChild(button);
        })
        this.menu.appendChild(buttonContainer);
    }

    _createCloseModalLink() {
        let closeLink = document.createElement('div');
        closeLink.classList.add('close-modal-link');
        closeLink.innerHTML = "Let's get started.";

        closeLink.addEventListener('click', () => {
            this.modal.remove();
            this.game1.keyListener();
            this.game2.keyListener();
            this.multiplayerMode.startMultiplayer();
        });
        return closeLink;
    }
}