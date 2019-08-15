import Piece from './piece';

export default class IPiece extends Piece {
    constructor() {
        super();
        this.name = "IPiece";
        this.position = {
            top: [],
            middle: [],
            bottom: [[0, 3], [0, 4], [0, 5], [0, 6]]
        };
        this.turningPoint = [0, 4];

        this.removeSquares = [];
    }


}


