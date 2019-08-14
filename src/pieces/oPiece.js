import Piece from './piece';

export default class OPiece extends Piece {
    constructor() {
        super();
        this.name = "OPiece";
        this.position = {
            top: [0,4],
            right: [0,5],
            bottom: [1,4],
            left: [1,5]
        };

        this.removeSquares = {};

        debugger
    }

    drop() {
        this.removeSquares = {
            top: this.position.top.slice(),
            right: this.position.right.slice(),
            // bottom: this.position.bottom.slice(),
            // left: this.position.left.slice()
        }

        this.position.top[0] = this.position.top[0] + 1;
        this.position.right[0] = this.position.right[0] + 1;
        this.position.bottom[0] = this.position.bottom[0] + 1;
        this.position.left[0] = this.position.left[0] + 1;
        debugger
    }

    // dropBox() {
    //     let fieldColumns = document.querySelectorAll(".field-column");

    //     let rowNums = [0, 1];
    //     let colNums = [4, 5];
    //     colNums.forEach(col => {
    //         rowNums.forEach(row => {
    //             debugger
    //             this._addColor(fieldColumns, colNums, rowNums, "yellow");
    //         });
    //     });
    //     rowNums = rowNums.map(num => num + 1);

    //     // initialize setInterval as "clear" to conditionally exit interval 
    //     let clear = setInterval(() => {
    //         this._addColor(fieldColumns, colNums, rowNums, "yellow");
    //         if (rowNums[1] === 19) clearInterval(clear);

    //         //remove previous colored squares
    //         this._removeColor(fieldColumns, colNums, rowNums, "yellow")

    //         rowNums = rowNums.map(num => num + 1);
    //     }, 100);
    // }
}