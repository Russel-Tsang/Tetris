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

        // use slice to prevent shallow cloning
        this.currentPiece = '';
        this.currentBag = this._shuffleBag(this._generateBag());
        this.nextBag = this._shuffleBag(this._generateBag());
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

    // take piece from currentBag and set it as the current piece
    _setCurrentPiece() {
        debugger
        this.currentPiece = this.currentBag.shift();
    }

    // take one piece from nextBag and add to currentBag
    _addToCurrentBag() {
        this.currentBag.push(this.nextBag.shift());
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

    _setField() {
        let field = new Field();
        return field._generateField();
    }

    _gameOver() {
        // for (let i = 0; i < this.field[0].length; i++) {
        //     if (this.field[0][i]) return true;
        // }
        return false;
    }

    // look through field, if field[row][col] contains a number > 0, fill that spot with the respective color. Else, remove color
    render() {
        let fieldColumns = document.querySelectorAll(".field-column");
        this.field.forEach((row, rowIdx) => {
            row.forEach((col, colIdx) => {
                let squareValue = this.field[rowIdx][colIdx];
                if (squareValue) {
                    fieldColumns[colIdx].children[rowIdx].classList.add(this.colors[squareValue]);
                } else {
                    Object.values(this.colors).forEach(color => {
                        fieldColumns[colIdx].children[rowIdx].classList.remove(color);
                    })
                }
            });
        });
    }

    handlePieceStop(clear) {
        debugger
        clearInterval(clear)
        this.play()
    }
    
    play() {
        // let jPiece = new JPiece();
        this._setCurrentPiece();
        this._addToCurrentBag();
        debugger
        if (!this.nextBag.length) this._refillNextBag();
        
        let clear = setInterval(() => {
            this.currentPiece.drop();
            this.currentPiece._populateField(this.field);
            this.render();
            if (!this.currentPiece.isFalling(this.field)) {
                debugger
                this.handlePieceStop(clear);
            }
        }, 1000);
        
        // while (!gameOver) {
            // this.currentPiece = this.setCurrentPiece; (takes from next pieces)
            // this.currentBag = this.setCurrentBag; (takes one from next bag)
            // this.nextBag = this.resetBag (if nextBag is empty)
            // this.nextPieces = this.setNextPieces;
        // }
    }

}