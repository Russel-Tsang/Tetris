import Piece from './piece';

export default class IPiece extends Piece {
    constructor() {
        super();
        this.name = "IPiece";
        this.position = {
            top: [0,3],
            right: [0,4],
            bottom: [0,5],
            left: [0,6]
        };

        this.removeSquares = {};
    }

    drop() {
        this.removeSquares = {
            top: this.position.top.slice(),
            right: this.position.right.slice(),
            bottom: this.position.bottom.slice(),
            left: this.position.left.slice()
        }

        this.position.top[0] = this.position.top[0] + 1;
        this.position.right[0] = this.position.right[0] + 1;
        this.position.bottom[0] = this.position.bottom[0] + 1;
        this.position.left[0] = this.position.left[0] + 1;
        debugger
    }

    // dropLine() {
    //     let fieldColumns = document.querySelectorAll(".field-column");

    //     let rowNums = [0];
    //     let colNums = [3, 4, 5, 6];

    //     this._addColor(fieldColumns, colNums, rowNums, "blue");
    //     rowNums = rowNums.map(num => num + 1);

    //     // initialize setInterval as "clear" to conditionally exit interval 
    //     let clear = setInterval(() => {
    //         this._addColor(fieldColumns, colNums, rowNums, "blue");
    //         if (rowNums[0] === 19) clearInterval(clear);

    //         //remove previous colored squares
    //         this._removeColor(fieldColumns, colNums, rowNums, "blue")

    //         rowNums = rowNums.map(num => num + 1);
    //     }, 100);
    // }
}
