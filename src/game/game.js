import Field from '../field/field';
import OPiece from '../pieces/oPiece';
import IPiece from '../pieces/iPiece';
import TPiece from '../pieces/tPiece';
import SPiece from '../pieces/sPiece';
import ZPiece from '../pieces/zPiece';
import LPiece from '../pieces/lPiece';
import JPiece from '../pieces/jPiece';

export default class Game {
    constructor() {
        this.field = this._setField()

        this.colors = {
            1: "yellow",
            2: "blue",
            3: "purple",
            4: "green",
            5: "red",
            6: "orange",
            7: "dark-blue"
        }
        this.currentBag = this._shuffleBag(this._generateBag());
        this.currentPiece = '';
        this.holdPiece = '';
        this.ghostPosition = '';
        this.nextBag = this._shuffleBag(this._generateBag());
        // prevents player from holding piece multiple times
        this.canHold = true;

        this.clearHandle;
    }

    _generateBag() {
        let oPiece = new OPiece();
        let iPiece = new IPiece();
        let tPiece = new TPiece();
        let sPiece = new SPiece();
        let zPiece = new ZPiece();
        let lPiece = new LPiece();
        let jPiece = new JPiece();

        return [oPiece, iPiece, tPiece, sPiece, zPiece, lPiece, jPiece];
    }

    _setField() {
        let field = new Field();
        return field._generateField();
    }

    // take piece from currentBag and set it as the current piece
    _setCurrentPiece() {
        this.currentPiece = this.currentBag.shift();
    }

    // removes old ghost position before switching to a new one
    clearGhostPosition() {
        let coordinateArrays = Object.values(this.ghostPosition);

        coordinateArrays.forEach(array => {
            array.forEach(coordinate => {
                let [row, col] = [coordinate[0], coordinate[1]];
                this.field[row][col] = 0;
            })
        });
    }

    clearGhostClass() {
        let fieldColumns = document.querySelectorAll(".field-column");
        let coordinateArrays = Object.values(this.ghostPosition);

        coordinateArrays.forEach(array => {
            array.forEach(coordinate => {
                let [row, col] = [coordinate[0], coordinate[1]];
                fieldColumns[col].children[row].classList = this.colors[this.currentPiece.colorCode];
            })
        });
    }

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
                if (row + 1 === 20 || this.field[row + 1][col]) stopped = true;
            });
            if (stopped) break;
            ghostPosition.top = ghostPosition.top.map(array => [array[0] + 1, array[1]]);
            ghostPosition.middle = ghostPosition.middle.map(array => [array[0] + 1, array[1]]);
            ghostPosition.bottom = ghostPosition.bottom.map(array => [array[0] + 1, array[1]]);
        }
        this.ghostPosition = ghostPosition;
        this._populateGhostPosition();
    }

    _populateGhostPosition() {
        let coordinateArrays = Object.values(this.ghostPosition);

        coordinateArrays.forEach(array => {
            array.forEach(coordinate => {
                let [row, col] = [coordinate[0], coordinate[1]];
                this.field[row][col] = "x";
            })
        });
        this.render();
    }

    populateField(piece) {
        let coordinateArrays = Object.values(piece.position);
        coordinateArrays.forEach(array => {
            array.forEach(coordinate => {
                let [row, col] = [coordinate[0], coordinate[1]];
                this.field[row][col] = piece.colorCode;
            })
        });

        piece.removeSquares.forEach(positionArray => {
            let [row, col] = [positionArray[0], positionArray[1]];
            this.field[row][col] = 0;
        });
    }

    // hold piece for later use 
    hold() {
        if (!this.canHold) return;

        this.currentPiece.clearSelfFromBoard(this.field); 

        this.render();

        if (this.holdPiece === '') {
            // pass current piece name into generate piece in order to generate a new piece instance
            this.holdPiece = this._generatePiece(this.currentPiece.name);
            this._setCurrentPiece();
            // re-render next boxes to appropriately show current bag
            this._showCurrentBag();
        } else {
            this.currentPiece = this._generatePiece(this.currentPiece.name);
            [this.currentPiece, this.holdPiece] = [this.holdPiece, this.currentPiece];
        }
        this.canHold = false;

        this._populateHoldBox();
    }

    _populateHoldBox() {
        let columns = document.querySelector(".hold-box").children;

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
    _addToCurrentBag() {
        this.currentBag.push(this.nextBag.shift());
    }

    _showCurrentBag() {
        let boxes = document.getElementsByClassName("next-box");
        for (let i = 0; i < 5; i++) {
            this._populateNextBox(boxes[i], this.currentBag[i]);
        }
    }

    _populateNextBox(box, piece) {
        // columns is nodelist of <uls>
        let columns = box.children;

        // remove colors from previous pieces
        for (let i = 0; i < 5; i++) {
            for (let j = 0; j < 4; j++) {
                // columns.children is nodelist of <lis>
                columns[i].children[j].className = "";
            }
        }

        piece.displaySquares.forEach(square => {
            let [col, row] = [square[0], square[1]];
            columns[col].children[row].classList.add(this.colors[piece.colorCode]);
        })
    }

    // refill next bag, will only be called once nextBag becomes empty
    _refillNextBag() {
        this.nextBag = this._generateBag();
    }

    // implementation of shuffle found on https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array#2450976
    _shuffleBag(bag) {
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

    _gameOver() {
        return false;
    }

    // look through field, if field[row][col] contains a number > 0, fill that spot with the respective color. Else, remove color
    render() {
        let fieldColumns = document.querySelectorAll(".field-column");
        this.field.forEach((row, rowIdx) => {
            row.forEach((col, colIdx) => {
                let squareValue = this.field[rowIdx][colIdx];
                if (squareValue === 'x') {
                    fieldColumns[colIdx].children[rowIdx].classList.add(`x-${this.colors[this.currentPiece.colorCode]}`);
                } else if (squareValue) {
                    fieldColumns[colIdx].children[rowIdx].classList.add(this.colors[squareValue]);
                } else {
                    Object.values(this.colors).forEach(color => {
                        fieldColumns[colIdx].children[rowIdx].classList.remove(color);
                        fieldColumns[colIdx].children[rowIdx].classList.remove(`x-${color}`);
                    })
                }
            });
        });
    }

    keyListener() {
        document.body.addEventListener("keydown", event => {
            console.log(event);
            this.currentPiece.setLeftMostAndRightMost();
            this.clearGhostPosition();
            switch(event.which) {
                // up key
                case 38:
                    // pass field so piece can check field wall before turning
                    this.currentPiece.move("up", this.field);
                    this.populateField(this.currentPiece);
                    this.setGhostPosition();
                    break;
                // right key
                case 39:
                    if (this.currentPiece.rightSideBlocked(this.field)) break;
                    this.currentPiece.move("right");
                    this.populateField(this.currentPiece);
                    this.setGhostPosition();
                    break;
                // down key
                case 40:
                    if (!this.currentPiece.isFalling(this.field)) break;
                    this.currentPiece.move("down");
                    this.populateField(this.currentPiece);
                    this.setGhostPosition();
                    break;
                // left key
                case 37:
                    if (this.currentPiece.leftSideBlocked(this.field)) break;
                    this.currentPiece.move("left");
                    this.populateField(this.currentPiece);
                    this.setGhostPosition();
                    break;
                // shift key
                case 16: 
                    this.hold();
                    this.populateField(this.currentPiece);
                    this.setGhostPosition();
                    break;
                // space bar
                case 32:
                    // this.render();
                    this.currentPiece.hardDrop(this.field);
                    this.render();
                    this.populateField(this.currentPiece);
                    this.handlePieceStop(this.clearHandle);
                    break;
                default:
                    this.setGhostPosition();
            }
            console.log(this.currentPiece);
            this.currentPiece.setLeftMostAndRightMost();
            // messes up with piece color
            // this.populateField(this.currentPiece);
            this.render();
        });
    }

    clearLines(lowest, highest) {
        // base case: if we reach a row that is higher than the highest, then exit
        if (lowest < highest) return;
        // recursive case: 
        // if lowest row does not contain a 0, bring all above rows down one level
        if (!this.field[lowest].includes(0)) {
            this._bringDownField(lowest);
            // call recursiveClear(lowest, highest + 1);
            this.clearLines(lowest, highest + 1)
        // if rw contains a 0 
        // call ClearLines(lowest - 1, highest)
        } else if (this.field[lowest].includes(0)) {
            this.clearLines(lowest - 1, highest);
        }
    }

    _bringDownField(startingRow) {
        for (let i = startingRow; i > 0; i--) {
            this.field[i] = this.field[i - 1];
        }
        this.field[0] = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    }

    handlePieceStop(clear) {     
        // allow player to hold piece again
        this.canHold = true;
        let lowest = this.currentPiece.position.bottom[0][0];
        // in case of line piece, which may not have this.position.top
        let highest = !this.currentPiece.position.top.length ? lowest : this.currentPiece.position.top[0][0];
        this.clearLines(lowest, highest);
        this.clearGhostClass();
        clearInterval(clear);
        this.play();
    }
    
    play() {
        this._setCurrentPiece();
        this.populateField(this.currentPiece);
        this._addToCurrentBag();
        this._showCurrentBag();
        if (!this.nextBag.length) this._refillNextBag();
        this.setGhostPosition();
        
        let clear = setInterval(() => {
            this.clearHandle = clear;
            this.populateField(this.currentPiece);
            this.render();
            if (!this.currentPiece.isFalling(this.field)) {
                this.handlePieceStop(clear);
            }   
            this.currentPiece.drop();
            this.populateField(this.currentPiece); // keep only one populate field?
            this.render();
        }, 1000);
    }

}