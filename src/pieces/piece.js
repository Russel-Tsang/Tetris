export default class Piece {
    _populateField(field) {
        let coordinateArrays = Object.values(this.position);

        coordinateArrays.forEach(array => {
            debugger
            array.forEach(coordinate => {
                let [row, col] = [coordinate[0], coordinate[1]];
                switch (this.name) {
                    case("OPiece"): 
                        field[row][col] = 1;
                        break;
                    case("IPiece"): 
                        field[row][col] = 2;
                        break;
                    case("TPiece"):
                        field[row][col] = 3;
                        break;
                    case("SPiece"):
                        field[row][col] = 4;
                        break;
                    case ("ZPiece"):
                        field[row][col] = 5;
                        break;
                    case ("LPiece"):
                        field[row][col] = 6;
                        break;
                    case ("JPiece"):
                        field[row][col] = 7;
                        break;
                }
            })
        });

        debugger
        this.removeSquares.forEach(positionArray => {
            let [row, col] = [positionArray[0], positionArray[1]];
            field[row][col] = 0;
        });
        
        debugger
    }

    // compares two arrays of coordinates and check if they have the same content in the same order
    _squaresAreEqual(oldSquare, newSquare) {
        for (let i = 0; i < oldSquare.length; i++) {
            if (oldSquare[i] !== newSquare[i]) return false;
        }
        return true;
    }

    _includes(oldSquare, coordinateArrays) {
        let result = false;
        coordinateArrays.forEach(array => {
            if (this._squaresAreEqual(oldSquare, array)) {
                result = true; 
            }
        });
        return result;
    }

    drop() {
        let oldPosition = {
            top: this.position.top.map(array => array.slice()),
            middle: this.position.middle.map(array => array.slice()),
            bottom: this.position.bottom.map(array => array.slice()),
        }

        this.position.top = this.position.top.map(array => [array[0] + 1, array[1]]);
        this.position.middle = this.position.middle.map(array => [array[0] + 1, array[1]]);
        this.position.bottom = this.position.bottom.map(array => [array[0] + 1, array[1]]);

        // compare old position with new position
        let oldSquares = [];
        let newSquares = [];
        Object.values(oldPosition).forEach(coordinatesArray => coordinatesArray.forEach(array => oldSquares.push(array)));
        Object.values(this.position).forEach(coordinatesArray => coordinatesArray.forEach(array => newSquares.push(array)));
        // keep track of squares that the positions do not have in common (squares to remove color from)
        this.removeSquares = oldSquares.filter(oldSquare => {
            if (!this._includes(oldSquare, newSquares)) return oldSquare;
        });
    }

    isFalling(field) {
        debugger
        let result = true;
        this.position.bottom.forEach(coordinatePair => {
            let [row, col] = [coordinatePair[0], coordinatePair[1]];
            // if the piece's current position is above the field floor or a another piece
            if (!field[row + 1] || field[row + 1][col]) {
                result = false;
            }
        });
        return result;
    }


    // turnPiece(piece, direction) {
    //     switch(piece) {
    //         case line {

    //         }
    //     }
    // }
}