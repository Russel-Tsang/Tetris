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
        this.basePosition = {
            top: [[0, 5]],
            middle: [],
            bottom: [[1, 3], [1, 4], [1, 5]]
        };

        this.removeSquares = [];
    }
}