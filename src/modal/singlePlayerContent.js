import ScoreKeeper from '../scorekeeper/scorekeeper';

export default class SinglePlayerContent {
    constructor() {
        this.keys = {
            'left_key': 'LEFT',
            'right_key': 'RIGHT',
            'down_key': 'SOFT DROP',
            'up_key': 'TURN RIGHT',
            'c_key': 'TURN LEFT',
            'shift_key': 'HOLD',
            'space_key': 'HARDDROP',
        };

        this.scoreKeeper = new ScoreKeeper();
    }

    createAllContent() {
        let allSinglePlayerContent = document.createElement('div');
        allSinglePlayerContent.classList.add('single-player-content');
        allSinglePlayerContent.appendChild(this.createTimer());
        allSinglePlayerContent.appendChild(this.scoreKeeper.createScoreKeeper());
        allSinglePlayerContent.appendChild(this.createControlsContent());
        document.body.append(allSinglePlayerContent);
    }

    createControlsContent() {
        let contentDiv = document.createElement('div');
        contentDiv.classList.add('controls');
        let images = Object.keys(this.keys);
        let descriptions = Object.values(this.keys);

        // initialize arrays of spans and divs
        let spans = [];
        let divs = [];

        // create elements and store into array indices for later reference
        for (let i = 1; i <= 7; i++) {
            spans[i] = document.createElement('span');
            if (i <= 4) divs[i] = document.createElement('div');
        }

        for (let i = 0; i < images.length; i++) {
            let p = document.createElement('p');
            let img = document.createElement('img');
            img.classList.add('keyboard-key');
            if (i === 5) img.classList.add('shift-key');
            if (i === 6) img.classList.add('space-key');

            p.innerHTML = descriptions[i];
            img.setAttribute('src', `./assets/images/${images[i]}.png`);

            spans[i + 1].append(img);
            spans[i + 1].append(p);

            if (i < 2) {
                divs[1].append(spans[i + 1]);
            } else if (i < 4) {
                divs[2].append(spans[i + 1]);
            } else if (i < 6) {
                divs[3].append(spans[i + 1]);
            } else {
                divs[4].append(spans[i + 1]);
            }
        }

        for (let i = 1; i <= 4; i++) {
            contentDiv.append(divs[i]);
        }
        
        return contentDiv;
    }

    createTimer() {
        let timer = document.createElement('div');
        let minutes = document.createElement('p');
        let seconds = document.createElement('p');
        let colon = document.createElement('p');
        timer.classList.add('timer');
        minutes.classList.add('minutes');
        seconds.classList.add('seconds');
        colon.classList.add('colon');
        minutes.innerHTML = '0';
        seconds.innerHTML = '00';
        colon.innerHTML = ':';
        [minutes, colon, seconds].forEach(ele => timer.appendChild(ele));
        return timer;
    }

    
}