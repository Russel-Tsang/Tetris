import Piece from './piece';

export default class SPiece extends Piece {
    constructor() {
        super();
        this.name = "SPiece";
        this.position = {
            top: [[0, 4], [0, 5]],
            middle: [],
            bottom: [[1, 3], [1, 4]]
        };
        this.turningPoint = [1, 4];

        this.removeSquares = [];
    }
}