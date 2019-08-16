import Piece from './piece';

export default class TPiece extends Piece {
    constructor() {
        super();
        this.name = "TPiece";
        this.position = {
            top: [[0, 4]],
            middle: [],
            bottom: [[1, 3], [1, 4], [1, 5]],
        }
        this.colorCode = 3;

        this.turningPoint = [1, 4];

        this.displaySquares = [[1, 2], [2, 2], [3, 2], [2, 1]];

        this.removeSquares = [];
    }
}