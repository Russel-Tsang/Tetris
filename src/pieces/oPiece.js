import Piece from './piece';

export default class OPiece extends Piece {
    constructor() {
        super();
        this.name = "OPiece";
        this.position = {
            top: [[0, 4], [0, 5]],
            middle: [],
            bottom: [[1, 4],[1, 5]]
        };
        this.colorCode = 1;
        this.turningPoint = [1, 4];
        this.displaySquares = [[1, 1], [2, 1], [1, 2], [2, 2]];

        this.removeSquares = [];
    }

    // OPiece does not turn
    turnRight() {
        return;
    }
    
    turnLeft() {
        return;
    }
} 