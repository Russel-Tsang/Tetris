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
        this.colorCode = 7;

        this.turningPoint = [1, 4];

        this.displaySquares = [[1, 1], [1, 2], [2, 2], [3, 2]];
 
        this.removeSquares = [];
    }
}