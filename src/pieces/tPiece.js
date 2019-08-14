import Piece from './piece';

export default class TPiece extends Piece {
    constructor() {
        super();
        this.position = {
            top: [4,0],
            right: [5,1],
            bottom: [4,1],
            left: [3,1]
        }
        debugger
    }

    dropT() {
        let fieldColumns = document.querySelectorAll(".field-column");

        let rowNums = [0, 1];
        let colNums = [3, 4, 5];

        this._addColor(fieldColumns, colNums, rowNums, "purple");
        rowNums = rowNums.map(num => num + 1);

        // initialize setInterval as "clear" to conditionally exit interval 
        let clear = setInterval(() => {
            this._addColor(fieldColumns, colNums, rowNums, "purple");
            if (rowNums[1] === 19) clearInterval(clear);

            //remove previous colored squares
            this._removeColor(fieldColumns, colNums, rowNums, "purple")

            rowNums = rowNums.map(num => num + 1);
        }, 100);
    }
}