import Piece from './piece';

export default class jPiece extends Piece {
    constructor() {
        super();
        this.name = "JPiece";
        this.position = {
            top: [[0, 3]],
            middle: [],
            bottom: [[1, 3], [1, 4], [1, 5]]
        };
        this.basePosition = {
            top: [[0, 3]],
            middle: [],
            bottom: [[1, 3], [1, 4], [1, 5]]
        };

        this.removeSquares = [];
    }
}