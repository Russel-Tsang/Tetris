import Field from '../field/field';
import OPiece from '../pieces/oPiece';
import IPiece from '../pieces/iPiece';
import TPiece from '../pieces/tPiece';
import SPiece from '../pieces/sPiece';
import ZPiece from '../pieces/zPiece';
import LPiece from '../pieces/lPiece';
import JPiece from '../pieces/jPiece';
import { adjustQueueHeight } from '../field/queue';

export default class Game {
    constructor(options) {
        this.field = this.setField()

        this.colors = {
            1: "yellow",
            2: "blue",
            3: "purple",
            4: "green",
            5: "red",
            6: "orange",
            7: "dark-blue",
            8: "grey"
        }

        this.gameNum = options.gameNum;

        this.currentBag = this.shuffleBag(this.generateBag());
        this.currentPiece = '';
        this.holdPiece = '';
        this.ghostPosition = '';
        this.nextBag = this.shuffleBag(this.generateBag());

        // prevents player from holding piece multiple times
        this.canHold = true;

        this.handleClear = {
            drop: '',
            right: '',
            left: '',
            down: ''
        };

        // for animations
        this.dropSpeed = 1;
        this.moveSpeed = options.moveSpeed;
        this.dropPiece = this.dropPiece.bind(this);
        this.drop = this.drop.bind(this);
        this.move = this.move.bind(this);
        this.movePiece = this.movePiece.bind(this);

        // keep track of the following variables for requestAnimationFrame throttling
        this.animate = {
            drop: {
                fpsInterval: '',
                startTime: '',
                now: '',
                then: ''
            },
            right: {
                fpsInterval: '',
                startTime: '',
                now: '',
                then: ''
            },
            left: {
                fpsInterval: '',
                startTime: '',
                now: '',
                then: ''
            },
            down: {
                fpsInterval: '',
                startTime: '',
                now: '',
                then: ''
            }
        }

        // pausing the game
        this.isPaused = false;

        this.keyHeld = {
            down: false,
            right: false,
            left: false
        }

        this.opponent = "";
        this.controls = options.controls;
        this.upcomingLines = 0;
        this.combo = -1;
        this.tSpin = false;
        this.tSpinStreak = false;
        this.comboGuide = {
            0: 0,
            1: 0, 
            2: 1,
            3: 1,
            4: 1,
            5: 2,
            6: 2,
            7: 3,
            8: 3,
            9: 4,
            10: 4,
            11: 4,
            12: 5
        };

        // single player
        this.startElevating = this.startElevating.bind(this);
        this.clearElevateInterval = '';
        this.elevateDelay = 5000;
        this.clearTimer = '';
    }

    generateBag() {
        let oPiece = new OPiece();
        let iPiece = new IPiece();
        let tPiece = new TPiece();
        let sPiece = new SPiece();
        let zPiece = new ZPiece();
        let lPiece = new LPiece();
        let jPiece = new JPiece();

        return [oPiece, iPiece, tPiece, sPiece, zPiece, lPiece, jPiece];
    }

    setField() {
        let field = new Field();
        return field._generateField();
    }

    // take piece from currentBag and set it as the current piece
    setCurrentPiece() {
        this.currentPiece = this.currentBag.shift();
    }

    // removes old ghost position from this.field before changing piece position
    clearGhostPosition() {
        let coordinateArrays = Object.values(this.ghostPosition);
        coordinateArrays.forEach(array => {
            array.forEach(coordinate => {
                let [row, col] = [coordinate[0], coordinate[1]];
                // prevent method from clearing piece if it happens to be where the ghost position should be
                if (this.field[row] && this.field[row][col] === "x" && row >= 0) this.field[row][col] = 0;
            })
        });
    }

    // clears the color classes from the browser field
    clearGhostClass() {
        let fieldColumns = document.querySelectorAll(`.field-column.field-${this.gameNum}`);
        
        Object.values(this.ghostPosition).forEach(array => {
            array.forEach(coordinate => {
                let [row, col] = [coordinate[0], coordinate[1]];
                fieldColumns[col].children[row].classList = this.colors[this.currentPiece.colorCode];
            })
        });
    }

    // find appropriate ghost position as piece position changes
    setGhostPosition() {
        let ghostPosition = {
            top: this.currentPiece.position.top.map(coordinate => coordinate.slice()),
            middle: this.currentPiece.position.middle.map(coordinate => coordinate.slice()),
            bottom: this.currentPiece.position.bottom.map(coordinate => coordinate.slice())
        }
        let stopped = false;
        while (!stopped) {
            let hangingSquares = this.currentPiece.hangingSquares(ghostPosition);
            hangingSquares.forEach(coordinate => {
                let [row, col] = [coordinate[0], coordinate[1]];
                if (row < 0 || row + 1 === 20 || this.field[row + 1][col]) stopped = true;
            });
            if (stopped) break;
            ghostPosition.top = ghostPosition.top.map(array => [array[0] + 1, array[1]]);
            ghostPosition.middle = ghostPosition.middle.map(array => [array[0] + 1, array[1]]);
            ghostPosition.bottom = ghostPosition.bottom.map(array => [array[0] + 1, array[1]]);
        }
        this.ghostPosition = ghostPosition;
        this._populateGhostPosition();
    }

    // populate this.field with 'x' wherever the ghost position is calculated to be
    _populateGhostPosition() {
        let coordinateArrays = Object.values(this.ghostPosition);
        coordinateArrays.forEach(array => {
            array.forEach(coordinate => {
                let [row, col] = [coordinate[0], coordinate[1]];
                if (this.field[row] && this.field[row][col] !== this.currentPiece.colorCode) this.field[row][col] = "x";
            })
        });
        this.render();
    }

    // hold piece for later use 
    hold() {
        if (!this.canHold) return;
        this.currentPiece.clearSelfFromBoard(this.field); 
        this.render();

        if (!this.holdPiece) {
            // pass current piece name into generate piece in order to generate a new piece instance
            this.holdPiece = this._generatePiece(this.currentPiece.name);
            this.setCurrentPiece();
            // re-render next boxes to appropriately show current bag
            this.showCurrentBag();
        } else {
            this.currentPiece = this._generatePiece(this.currentPiece.name);
            [this.currentPiece, this.holdPiece] = [this.holdPiece, this.currentPiece];
        }
        
        // disable hold-piece right after player holds a piece
        this.canHold = false;

        this._populateHoldBox();
    }

    _populateHoldBox() {
        let columns = document.querySelector(`.hold-box.field-${this.gameNum}`).children;

        // remove colors from previous pieces
        for (let i = 0; i < 5; i++) {
            for (let j = 0; j < 4; j++) {
                // columns.children is nodelist of <lis>
                columns[i].children[j].className = "";
            }
        }

        this.holdPiece.displaySquares.forEach(square => {
            let [col, row] = [square[0], square[1]];
            columns[col].children[row].classList.add(this.colors[this.holdPiece.colorCode]);
        })

    }

    // used for this.hold(): generate a new piece so that a holdpiece that is re-rendered on the board will not start from the old position
    _generatePiece(pieceName) {
        switch(pieceName) {
            case "TPiece":
                return new TPiece;
            case "OPiece":
                return new OPiece;
            case "IPiece":
                return new IPiece;
            case "LPiece":
                return new LPiece;
            case "JPiece":
                return new JPiece;
            case "SPiece":
                return new SPiece;
            case "ZPiece":
                return new ZPiece;
        }
    }

    // take one piece from nextBag and add to currentBag
    addToCurrentBag() {
        this.currentBag.push(this.nextBag.shift());
    }

    showCurrentBag() {
        let boxes = document.getElementsByClassName(`next-box field-${this.gameNum}`);
        for (let i = 0; i < 5; i++) {
            this._populateNextBox(boxes[i], this.currentBag[i]);
        }
    }

    _populateNextBox(box, piece) {
        // columns is nodelist of <uls>
        let columns = box.children;

        // remove colors from previous piece
        for (let i = 0; i < 5; i++) {
            for (let j = 0; j < 4; j++) {
                // columns.children is nodelist of <lis>
                columns[i].children[j].className = "";
            }
        }

        // populate box with new piece
        piece.displaySquares.forEach(square => {
            let [col, row] = [square[0], square[1]];
            columns[col].children[row].classList.add(this.colors[piece.colorCode]);
        })
    }

    // refill next bag, will only be called once nextBag becomes empty
    refillNextBag() {
        this.nextBag = this.generateBag();
    }

    // implementation of shuffle found on https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array#2450976
    shuffleBag(bag) {
        var currentIndex = bag.length, temporaryValue, randomIndex;

        // While there remain elements to shuffle...
        while (0 !== currentIndex) {

            // Pick a remaining element...
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex -= 1;

            // And swap it with the current element.
            temporaryValue = bag[currentIndex];
            bag[currentIndex] = bag[randomIndex];
            bag[randomIndex] = temporaryValue;
        }
        return bag;
    }
    // implementation of shuffle found on https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array#2450976

    // look through field, if field[row][col] contains a number > 0, fill that spot with the respective color. 
    // if contains an 'x', populate with ghost piece styles.
    // else, remove color
    render() {
        // if (this.currentPiece.rightMost[1] > 9 || this.currentPiece.leftMost[1] < 0) return;
        let fieldColumns = document.querySelectorAll(`.field-column.field-${this.gameNum}`);
        this.field.forEach((row, rowIdx) => {
            row.forEach((col, colIdx) => {
                let squareValue = this.field[rowIdx][colIdx];
                if (squareValue === 'x') {
                    fieldColumns[colIdx].children[rowIdx].classList.add(`x-${this.colors[this.currentPiece.colorCode]}`);
                } else if (squareValue) {
                    fieldColumns[colIdx].children[rowIdx].classList.add(this.colors[squareValue]);
                    fieldColumns[colIdx].children[rowIdx].classList.remove(`x-${this.colors[this.currentPiece.colorCode]}`);
                } else {
                    fieldColumns[colIdx].children[rowIdx].classList = "";
                }
            });
        });
    }

    keyListener() {
        document.body.addEventListener("keydown", event => {
            this.currentPiece.setOuterSquares();
            // this.clearGhostPosition();
            switch(event.which) {
                // up key
                case this.controls.turnRight:
                    // pass field so piece can check field wall before turning
                    this.clearGhostPosition();
                    this.tSpin = this.currentPiece.move("turnRight", this.field);
                    this.currentPiece.populateField(this.field);
                    this.setGhostPosition();
                    break;
                // C key
                case this.controls.turnLeft:
                    // pass field so piece can check field wall before turning
                    this.clearGhostPosition();
                    this.currentPiece.move("turnLeft", this.field);
                    this.currentPiece.populateField(this.field);
                    this.setGhostPosition();
                    break;
                // left key
                case this.controls.left:
                    this.keyHeld.left = true;
                    if (this.currentPiece.leftSideBlocked(this.field)) break;
                    this.movePiece("left");
                    break;
                // right key
                case this.controls.right:
                    this.keyHeld.right = true;
                    if (this.currentPiece.rightSideBlocked(this.field)) break;
                    this.movePiece("right");
                    break;
                // down key
                case this.controls.softDrop:
                    this.keyHeld.down = true;
                    this.movePiece("down");
                    break;
                // shift key
                case this.controls.hold: 
                    this.clearGhostPosition();
                    this.hold();
                    this.currentPiece.populateField(this.field);
                    this.setGhostPosition();
                    break;
                // space bar
                case this.controls.hardDrop:
                    // this.render();
                    this.clearGhostPosition();
                    this.currentPiece.hardDrop(this.field);
                    this.render();
                    this.currentPiece.populateField(this.field);
                    this.handlePieceStop(this.handleClear.drop);
                    break;
                // P key
                case 80:
                    this.isPaused ? this.dropPiece(this.dropSpeed) : cancelAnimationFrame(this.handleClear.drop);
                    this.isPaused = !this.isPaused;
                    break;
                default:
                    break;
            }
            this.currentPiece.setOuterSquares();
            this.render();
        });

        document.body.addEventListener("keyup", event => {
            switch (event.which) {
                case this.controls.right: 
                    this.keyHeld.right = false;
                    break;
                case this.controls.left: 
                    this.keyHeld.left = false;
                    break;
                case this.controls.softDrop: 
                    this.keyHeld.down = false;
                    break;  
            }
        });
    }

    clearLines(lowest, highest, numLinesCleared) {
        if (lowest < 0) return;
        // base case: if we reach a row that is higher than the highest, then return number of lines that were cleared
        if (lowest < highest) {
            return numLinesCleared;
        };
        // recursive case: 
        // if lowest row does not contain a 0, bring all above rows down one level
        if (!this.field[lowest].includes(0)) {
            this._bringDownField(lowest);
            // call recursiveClear(lowest, highest + 1);
            return this.clearLines(lowest, highest + 1, numLinesCleared + 1)
        // if row contains a 0 
        // call ClearLines(lowest - 1, highest)
        } else if (this.field[lowest].includes(0)) {
            return this.clearLines(lowest - 1, highest, numLinesCleared);
        }
    }

    _bringDownField(startingRow) {
        for (let i = startingRow; i > 0; i--) {
            this.field[i] = this.field[i - 1];
        }
        this.field[0] = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    }

    handlePieceStop() {  
        // allow player to hold piece again
        this.canHold = true;
        let lowest = this.currentPiece.position.bottom[0][0];
        // in case of line piece, which may not have this.position.top
        let highest = !this.currentPiece.position.top.length ? lowest : this.currentPiece.position.top[0][0];
        // check if a TPiece was spun in place
        if (this.currentPiece.name === "TPiece") {
            let [leftMostRow, rightMostRow] = [this.currentPiece.leftMost[0], this.currentPiece.rightMost[0]];
            let [leftMostCol, rightMostCol] = [this.currentPiece.leftMost[1], this.currentPiece.rightMost[1]];
            if (this.field[leftMostRow - 1] && this.field[rightMostRow - 1]) {
                if (this.field[leftMostRow - 1][leftMostCol] || this.field[rightMostRow - 1][rightMostCol]) this.tSpin = true;
            }
        }
        let numLinesCleared = this.clearLines(lowest, highest, 0);

        // in the case of multiplayer, send cleared lines to opponent and receive potential lines
        if (this.opponent) {
            if (this.tSpinStreak === true) debugger
            if (numLinesCleared > 0) {
                this.combo += 1;
                let numLines
                if (numLinesCleared < 4) {
                    if (this.currentPiece.name === "TPiece" && this.tSpin) {
                        numLines = numLinesCleared === 3 ? 6 : 4;
                    } else {
                        numLines = numLinesCleared - 1;
                        this.tSpinStreak = false;
                    }
                } else {
                    numLines = 4;
                }

                numLines += this.comboGuide[this.combo];
                if (this.tSpinStreak) numLines += 2;

                if (this.upcomingLines > 0) {
                    this.upcomingLines -= numLines;
                    if (this.upcomingLines < 0) {
                        this.opponent.addLinesToQueue(Math.abs(this.upcomingLines));
                        this.upcomingLines = 0;
                        adjustQueueHeight(this.gameNum, 0);
                    } else {
                        adjustQueueHeight(this.gameNum, this.upcomingLines * 5);
                    }
                } else {
                    this.opponent.addLinesToQueue(numLines);
                    if (this.tSpin === true) this.tSpinStreak = true;
                }
            } else {
                this.combo = -1;
                if (this.upcomingLines > 0) {
                    this.receiveUpcomingLines(this.upcomingLines);
                    adjustQueueHeight(this.gameNum, 0);
                }
            } 
        }
        // reset tSpin tracker
        this.tSpin = false
        this.clearGhostClass();
        cancelAnimationFrame(this.handleClear.drop);
        // this.startElevating();
        this.play();
    }

    dropPiece(fps) {
        // Do whatever
        this.animate.drop.fpsInterval = 1000 / fps;
        this.animate.drop.then = Date.now();
        this.animate.drop.startTime = this.then;
        this.drop(this.field);
    }

    // inspiration for throttling requestAnimationFrame from https://stackoverflow.com/questions/19764018/controlling-fps-with-requestanimationframe
    drop() {
        this.handleClear.drop = requestAnimationFrame(() => this.drop(this.field));
        this.animate.drop.now = Date.now();
        let elapsed = this.animate.drop.now - this.animate.drop.then;
        if (elapsed > this.animate.drop.fpsInterval) {
            // Get ready for next frame by setting then=now, adjusting for specified fpsInterval not being a multiple of RAF's interval (16.7ms)
            this.animate.drop.then = this.animate.drop.now - (elapsed % this.animate.drop.fpsInterval);
            this.currentPiece.populateField(this.field);
            this.render();
            if (!this.currentPiece.isFalling(this.field)) {
                this.handlePieceStop(this.handleClear.drop);
            }
            if (this.currentPiece.bottomMost[0] != 0) this.currentPiece.drop(this.field);
            // this.setGhostPosition();
            this.currentPiece.populateField(this.field); // keep only one populate field?
            this.render();
        }
    }

    movePiece(direction) {
        // Do whatever
        this.animate[direction].fpsInterval = 1000 / this.moveSpeed;
        this.animate[direction].then = Date.now();
        this.animate[direction].startTime = this.animate[direction].then;
        this.move(direction);
    }

    // inspiration for throttling requestAnimationFrame from https://stackoverflow.com/questions/19764018/controlling-fps-with-requestanimationframe
    move(direction) {
        this.handleClear[direction] = requestAnimationFrame(() => this.move(direction));
        if (!this.keyHeld[direction]) cancelAnimationFrame(this.handleClear[direction]);
        this.animate[direction].now = Date.now();
        let elapsed = this.animate[direction].now - this.animate[direction].then;
        if (elapsed > this.animate[direction].fpsInterval) {
            // Get ready for next frame by setting then=now, adjusting for specified fpsInterval not being a multiple of RAF's interval (16.7ms)
            this.animate[direction].then = this.animate[direction].now - (elapsed % this.animate[direction].fpsInterval);

            // prevent piece from moving if it is blocked or if both left and right arrow keys are held down
            if (
                direction === "right" && this.currentPiece.rightSideBlocked(this.field) 
                || 
                direction === "left" && this.currentPiece.leftSideBlocked(this.field) 
                || 
                direction === "down" && !this.currentPiece.isFalling(this.field)
                || 
                this.keyHeld.right && this.keyHeld.left
            ) return; 

            this.currentPiece.move(direction);

            this.currentPiece.populateField(this.field);

            // don't need to re-populate ghost position if the piece is soft-dropping
            if (direction !== "down") {
                this.clearGhostPosition();
                this.setGhostPosition();
            }

            this.render();
        }
    }

    handleTopPiece() {
        let atTop = false;
        try {
            while (this.field[this.currentPiece.position.bottom[0][0]][3] || this.field[this.currentPiece.position.bottom[0][0]][4] || this.field[this.currentPiece.position.bottom[0][0]][5] || this.field[this.currentPiece.position.bottom[0][0]][6]) {
                this.currentPiece.move("up", this.field);
                atTop = true;
            }
        } catch {
            this.gameOver(this.opponent.gameNum);
        }
        return atTop;
    }
    
    play() {
        this.setCurrentPiece();
        if (this.handleTopPiece() === true) {
            this.currentPiece.populateField(this.field, "atTop");
        } else {
            this.currentPiece.populateField(this.field);
        }
        this.addToCurrentBag();
        this.showCurrentBag();
        if (!this.nextBag.length) this.refillNextBag();
        this.setGhostPosition();
        // drop piece at given fps
        this.dropPiece(this.dropSpeed);    
    }

    gameOver(winner) {
        this.dropSpeed = 0;
        let gameOverScreen = document.createElement("div");
        gameOverScreen.classList.add("game-over-div");
        
        let gameOverHeading = document.createElement("h2");
        gameOverHeading.classList.add("game-over-heading");

        gameOverHeading.innerHTML = "GAME OVER";
        gameOverScreen.append(gameOverHeading);

        let winnerHeading;
        if (winner)  {
            winnerHeading = document.createElement("h2");
            winnerHeading.classList.add("game-over-heading");
            winnerHeading.innerHTML = `PLAYER ${winner} WINS`;
            gameOverScreen.append(winnerHeading)
        }   

        document.body.appendChild(gameOverScreen);
        this.stopTimer();
    }

    // multiplayer 
    setOpponent(player) {
        this.opponent = player;
    }

    addLinesToQueue(numLines) {
        this.upcomingLines += numLines;
        let percentage = this.upcomingLines * 5;
        adjustQueueHeight(this.gameNum, percentage);
    }

    receiveUpcomingLines() {
        let garbageLines = [];
        let numLines = this.upcomingLines;
        let randomHole;
        for (let i = 0; i < numLines; i++) {
            if (i % 2 === 0) randomHole = Math.floor(Math.random() * 9);
            let garbageRow = [8, 8, 8, 8, 8, 8, 8, 8, 8, 8];
            garbageRow[randomHole] = 0;
            garbageLines.push(garbageRow);
        }
        // if player reaches the top, player loses
        // slice allows player to continue playing if top middle is clear
        if (!this.field[numLines - 1].slice(2,7).includes(0)) {
            return;
        }
        this.field = this.field.slice(numLines, 20).concat(garbageLines);
        this.upcomingLines = 0;
        this.render();
    }

    // single player
    startElevating(elevateDelay) {
        this.clearElevateInterval = setInterval(() => {
            console.log(this.currentPiece);
            this.clearGhostPosition();
            this.currentPiece.clearSelfFromBoard(this.field);
            this.upcomingLines += 1;
            this.receiveUpcomingLines();
            this.setGhostPosition();
            this.currentPiece.populateField(this.field);
            this.render();
        }, elevateDelay)
    }

    adjustElevate() {
        setInterval(() => {
            if (this.clearElevateInterval) clearInterval(this.clearElevateInterval);
            if (this.elevateDelay > 2000) this.elevateDelay -= 200;
            this.startElevating(this.elevateDelay);
        }, 10000);
    }

    startTimer() {
        let minutes = document.querySelector('.minutes');
        let seconds = document.querySelector('.seconds');
        this.clearTimer = setInterval(() => {
            let oldSecond = Number(seconds.innerHTML);
            let oldMinute = Number(minutes.innerHTML);
            if (oldSecond + 1 === 60) {
                seconds.innerHTML = 0;
                minutes.innerHTML = oldMinute + 1;
            } else {
                let newSeconds = Number(seconds.innerHTML) + 1 < 10 ? `0${Number(seconds.innerHTML) + 1}` : Number(seconds.innerHTML) + 1;
                seconds.innerHTML = newSeconds;
            }
        }, 1000)
    }

    stopTimer() {
        clearInterval(this.clearTimer);
    }

    changeControls() {
        this.controls = { left: 37, right: 39, turnRight: 38, softDrop: 40, hold: 16, turnLeft: 67, hardDrop: 32 }
    }
}