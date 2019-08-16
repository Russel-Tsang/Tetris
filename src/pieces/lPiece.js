import Piece from './piece';

export default class lPiece extends Piece {
    constructor() {
        super();
        this.name = "LPiece";
        this.position = {
            top: [[0, 5]],
            middle: [],
            bottom: [[1, 3], [1, 4], [1, 5]]
        };
        this.colorCode = 6;

        this.turningPoint = [1, 4];

        this.displaySquares = [[1, 2], [2, 2], [3, 2], [3, 1]];

        this.removeSquares = [];
    }
}