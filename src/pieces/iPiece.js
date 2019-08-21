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
        this.turningPoint = [1, 4];
        this.displaySquares = [[0, 2], [1, 2], [2, 2], [3, 2]];

        this.removeSquares = [];

        this.offsetGuide = {
            0: [[0, 0], [0, -1], [0, 2], [0, -1], [0, 2]],
            1: [[0, -1], [0, 0], [0, 0], [1, 0], [-2, 0]],
            2: [[1, -1], [1, 1], [1, -2], [0, 1], [0, -2]],
            3: [[1, 0], [1, 0], [1, 0], [-1, 0], [2, 0]]
        }
    }


}


