export default class Piece {
    constructor() {
        this.leftMost = '';
        this.rightMost = '';
    }

    setLeftMostAndRightMost() {
        let leftMost;
        let rightMost;
        Object.values(this.position).forEach(coordinatesArray => coordinatesArray.forEach(array => {
            let columnValue = array[1];
            if (!leftMost) leftMost = columnValue;
            if (!rightMost) rightMost = columnValue;
            if (columnValue < leftMost) leftMost = columnValue;
            if (columnValue > rightMost) rightMost = columnValue;
        }));
        this.leftMost = leftMost;
        this.rightMost = rightMost;
    }

    _populateField(field) {
        
        let coordinateArrays = Object.values(this.position);

        coordinateArrays.forEach(array => {
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

        this.removeSquares.forEach(positionArray => {
            let [row, col] = [positionArray[0], positionArray[1]];
            field[row][col] = 0;
        });
        
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
        this.turningPoint = [this.turningPoint[0] + 1, this.turningPoint[1]];

        this.setRemoveSquares(oldPosition);
    }

    // hardDrop() {

    // }

    move(direction) {
        let oldPosition = {
            top: this.position.top.map(array => array.slice()),
            middle: this.position.middle.map(array => array.slice()),
            bottom: this.position.bottom.map(array => array.slice()),
        }
        switch(direction) {
            case "left":  
                this.position.top = this.position.top.map(array => [array[0], array[1] - 1]);
                this.position.middle = this.position.middle.map(array => [array[0], array[1] - 1]);
                this.position.bottom = this.position.bottom.map(array => [array[0], array[1] - 1]);
                this.turningPoint = [this.turningPoint[0], this.turningPoint[1] - 1];
                break;
            case "up":
                // defer to subclass "turn" method
                this.turnRight();
                break;
            case "right":
                this.position.top = this.position.top.map(array => [array[0], array[1] + 1]);
                this.position.middle = this.position.middle.map(array => [array[0], array[1] + 1]);
                this.position.bottom = this.position.bottom.map(array => [array[0], array[1] + 1]);
                this.turningPoint = [this.turningPoint[0], this.turningPoint[1] + 1];
                break;
            case "down":
                this.position.top = this.position.top.map(array => [array[0] + 1, array[1]]);
                this.position.middle = this.position.middle.map(array => [array[0] + 1, array[1]]);
                this.position.bottom = this.position.bottom.map(array => [array[0] + 1, array[1]]);
                this.turningPoint = [this.turningPoint[0] + 1, this.turningPoint[1]];
                break;
        }
        this.setRemoveSquares(oldPosition);
    }

    turnRight() {
        let squares = [];
        Object.values(this.position).forEach(coordinatesArray => coordinatesArray.forEach(array => {
            squares.push(array);
        }));

        this.position.top = [];
        this.position.middle = [];
        this.position.bottom = [];
        squares.forEach(square => {
            let column = square[1];
            let heightDifference = this.turningPoint[0] - square[0];
            let widthDifference = this.turningPoint[1] - square[1];
            let newCol = this.turningPoint[1] + heightDifference;
            let newRow = this.turningPoint[0] + (widthDifference * -1);
            switch (column) {
                case column = this.leftMost:
                    this.position.top.push([newRow, newCol]);
                    break;
                case column = this.rightMost:
                    this.position.bottom.push([newRow, newCol]);
                    break;
                default:
                    this.position.middle.push([newRow, newCol]);
                    break;
            }
        })
    }

    // compare old position of piece with new position 
    setRemoveSquares(oldPosition) {
        let oldSquares = [];
        let newSquares = [];
        Object.values(oldPosition).forEach(coordinatesArray => coordinatesArray.forEach(array => oldSquares.push(array)));
        Object.values(this.position).forEach(coordinatesArray => coordinatesArray.forEach(array => newSquares.push(array)));
        // keep track of squares that the positions do not have in common (squares to remove color from)
        this.removeSquares = oldSquares.filter(oldSquare => {
            if (!this._includes(oldSquare, newSquares)) return oldSquare;
        });
    }

    hangingSquares() {
        let squares = [];
        let hangingSquares = [];
        Object.values(this.position).forEach(coordinateArrays => coordinateArrays.forEach(coordinate => {
            squares.push(coordinate);
        }));
        squares.forEach(square => {
            let belowSquare = [square[0] + 1, square[1]];
            if (!this._includes(belowSquare, squares)) hangingSquares.push(square);
        })
        return hangingSquares;
    } 

    isFalling(field) {
        let result = true;
        this.hangingSquares().forEach(coordinatePair => {
            let [row, col] = [coordinatePair[0], coordinatePair[1]];
            // if the piece's current position is above the field floor or a another piece
            if (!field[row + 1] || field[row + 1][col]) {
                result = false;
            }
        });
        return result;
    }

    rightSideNextToBlock(field) {
        let result = false;
        Object.values(this.position).forEach(coordinatesArray => coordinatesArray.forEach(array => {
            let columnValue = array[1];
            let rowValue = array[0];
            if (columnValue = this.rightMost) {
                if (columnValue === 9 || field[rowValue][columnValue + 1]) result = true;
            }
        }));
        return result;
    }

    leftSideNextToBlock(field) {
        let result = false;
        Object.values(this.position).forEach(coordinatesArray => coordinatesArray.forEach(array => {
            let columnValue = array[1];
            let rowValue = array[0];
            if (columnValue === this.leftMost) {
                if (columnValue === 0 || field[rowValue][columnValue - 1]) result = true;
            }
        }));
        return result;
    }
}