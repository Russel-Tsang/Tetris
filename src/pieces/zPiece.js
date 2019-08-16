import Piece from './piece';

export default class ZPiece extends Piece {
    constructor() {
        super();
        this.name = "ZPiece";
        this.position = {
            top: [[0, 3], [0, 4]],
            middle: [],
            bottom: [[1, 4], [1, 5]]
        };
        this.colorCode = 5;

        this.turningPoint = [1, 4];

        this.displaySquares = [[1, 1], [2, 1], [2, 2], [3, 2]];

        this.removeSquares = [];
    }
}