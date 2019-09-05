export default class MultiplayerContent {
    constructor(props) {
        this.keys = {
            player1: {
                'w_key': 'TURN RIGHT',
                'a_key': 'LEFT',
                's_key': 'SOFT DROP',
                'd_key': 'RIGHT',
                '`_key': 'TURN LEFT',
                'q_key': 'HOLD',
                '1_key': 'HARDDROP'
            },
            player2: {
                'up_key': 'TURN RIGHT',
                'left_key': 'LEFT',
                'down_key': 'SOFT DROP',
                'right_key': 'RIGHT',
                'k_key': 'TURN LEFT',
                'shift_key': 'HOLD',
                'period_key': 'HARDDROP'
            }
        };

    }

    createControlsContent(player) {
        let controlsDiv = document.createElement('div');
        controlsDiv.classList.add('controls');
        let images = Object.keys(this.keys[player]);
        let descriptions = Object.values(this.keys[player]);

        // initialize arrays of spans and divs
        let spans = [];
        let divs = [];

        let label = document.createElement('header');
        label.innerHTML = `PLAYER ${player.slice(6)}`
        controlsDiv.appendChild(label);

        // create elements and store into array indices for later reference
        for (let i = 1; i <= 7; i++) {
            spans[i] = document.createElement('span');
            if (i <= 3) divs[i] = document.createElement('div');
        }

        for (let i = 0; i < images.length; i++) {
            let p = document.createElement('p');
            let img = document.createElement('img');
            img.classList.add('keyboard-key');
            if (i === 5 && player === "player2") img.classList.add('shift-key');

            p.innerHTML = descriptions[i];
            img.setAttribute('src', `./assets/images/${images[i]}.png`);

            spans[i + 1].append(img);
            spans[i + 1].append(p);

            if (i < 1) {
                divs[1].append(spans[i + 1]);
            } else if (i < 4) {
                divs[2].append(spans[i + 1]);
            } else if (i < 7) {
                divs[3].append(spans[i + 1]);
            }
        }

        for (let i = 1; i <= 3; i++) {
            controlsDiv.append(divs[i]);
        }

        return controlsDiv;
    }
}