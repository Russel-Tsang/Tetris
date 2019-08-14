export default class Piece {

    // _addColor(fieldColumns, colNums, rowNums, classColor) {
    //     colNums.forEach((col, colIdx) => {
    //         rowNums.forEach((row, rowIdx) => {
    //             switch (classColor) {
    //                 case "purple": 
    //                     if (!((colIdx === 0 && rowIdx === 0) || (colIdx === 2 && rowIdx === 0))) {
    //                         debugger
    //                         fieldColumns[col].children[row].classList.add(classColor);
    //                     }
    //                     break;
    //                 default: 
    //                     fieldColumns[col].children[row].classList.add(classColor);
    //                     break;
    //             }
                
    //         });
    //     });
    // }

    _populateField(field) {
        let position = Object.values(this.position);
        let removeSquares = Object.values(this.removeSquares);

        position.forEach(positionArray => {
            let [row, col] = [positionArray[0], positionArray[1]];
            switch (this.name) {
                case("OPiece"): 
                    field[row][col] = 1;
                    break;
                case("IPiece"): 
                    field[row][col] = 2;
                    break;
            }
        });

        debugger
        removeSquares.forEach(positionArray => {
            let [row, col] = [positionArray[0], positionArray[1]];
            field[row][col] = 0;
        });
        
        debugger
    }

    // _removeColor(fieldColumns, colNums, rowNums, classColor) {
    //     colNums.forEach((col, colIdx) => {
    //         switch (classColor) {
    //             case "purple":
    //                 if ((rowNums[0] - 1) >= 0) {
    //                     if (colIdx === 0 || colIdx === 2) {
    //                         fieldColumns[col].children[rowNums[0]].classList.remove(classColor);
    //                     }
    //                     if (colIdx === 1) {
    //                         debugger
    //                         fieldColumns[col].children[rowNums[1] - 2].classList.remove(classColor);
    //                     }
    //                 }
    //                 break;
    //             default:
    //                 if ((rowNums[0] - 1) >= 0) {
    //                     fieldColumns[col].children[rowNums[0] - 1].classList.remove(classColor);
    //                 }
    //                 break;
    //         }
    //     })
    // }

    // turnPiece(piece, direction) {
    //     switch(piece) {
    //         case line {

    //         }
    //     }
    // }
}