import Piece from './piece';

export default class IPiece extends Piece {
    constructor() {
        super();
        this.name = "IPiece";
        this.position = {
            top: [],
            middle: [],
            bottom: [[1, 3], [1, 4], [1, 5], [1, 6]]
        };
        this.colorCode = 2;
        this.turningPoint = [1, 5];
        this.displaySquares = [[0, 2], [1, 2], [2, 2], [3, 2]];

        this.removeSquares = [];
    }


}


