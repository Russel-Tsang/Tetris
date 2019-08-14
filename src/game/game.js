import Field from '../field/field';
import OPiece from '../pieces/oPiece';
import IPiece from '../pieces/iPiece';

export default class Game {
    constructor() {
        this.field = this._setField()

        this.colors = {
            1: "yellow",
            2: "blue",
        }
        debugger
    }

    _setField() {
        let field = new Field();
        return field._generateField();
    }

    _isOver() {
        for (let i = 0; i < this.field[0].length; i++) {
            debugger
            if (this.field[0][i]) return true;
        }
        return false;
    }

    render() {
        let fieldColumns = document.querySelectorAll(".field-column");
        this.field.forEach((row, rowIdx) => {
            row.forEach((col, colIdx) => {
                let square = this.field[rowIdx][colIdx];
                if (square) {
                    debugger
                    fieldColumns[colIdx].children[rowIdx].classList.add(this.colors[square]);
                } else {
                    debugger
                    Object.values(this.colors).forEach(color => {
                        debugger
                        fieldColumns[colIdx].children[rowIdx].classList.remove(color);
                    })
                }
            });
        });
    }
    
    play(container) {
        let iPiece = new IPiece();
        setInterval(() => {
            iPiece.drop();
            iPiece._populateField(this.field);
            this.render(container);
            debugger
        }, 1000);
    }

}