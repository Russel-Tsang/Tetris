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
        this.basePosition = {
            top: [[0, 4], [0, 5]],
            middle: [],
            bottom: [[1, 4],[1, 5]]
        };

        this.removeSquares = [];

        debugger
    }
} 