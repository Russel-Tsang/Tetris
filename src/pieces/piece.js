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
                field[row][col] = this.colorCode;
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

    _includes(square, coordinateArrays) {
        let result = false;
        coordinateArrays.forEach(array => {
            if (this._squaresAreEqual(square, array)) {
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

    // find highest possible ground-position for piece
    hardDrop(field) {
        this.clearSelfFromBoard(field);
        let stopped = false;
        while(!stopped) {
            let hangingSquares = this.hangingSquares(this.position);
            hangingSquares.forEach(coordinate => {
                let [row, col] = [coordinate[0], coordinate[1]];
                if ((row + 1 === 20 || field[row + 1][col])) stopped = true;
            }); 
            if (stopped) break;
            this.position.top = this.position.top.map(array => [array[0] + 1, array[1]]);
            this.position.middle = this.position.middle.map(array => [array[0] + 1, array[1]]);
            this.position.bottom = this.position.bottom.map(array => [array[0] + 1, array[1]]);
        }
    }

    clearSelfFromBoard(field) {
        Object.values(this.position).forEach(coordinateArrays => coordinateArrays.forEach(coordinate => {
            let row = coordinate[0];
            let col = coordinate[1];
            field[row][col] = 0;
        }));
    }

    move(direction, field) {
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
                this.turnRight(field);
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
            case "C":
                this.turnLeft(field);
                break;
        }
        this.setRemoveSquares(oldPosition);
    }

    turnRight(field) {
        let squares = [];
        Object.values(this.position).forEach(coordinatesArray => squares.push(...coordinatesArray));
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
                case column = this.rightMost:
                    this.position.bottom.push([newRow, newCol]);
                    break;
                case column = this.leftMost:
                    this.position.top.push([newRow, newCol]);
                    break;
                default:
                    this.position.middle.push([newRow, newCol]);
                    break;
            }
        })
        // find left and right most squares to see if piece through wall
        // if through wall, push piece back into field
        this.setLeftMostAndRightMost();
        
        while (this.rightMost > 9 || this.leftMost < 0) {
            this.rightMost > 9 ? this.move('left') : this.move('right');
            this.setLeftMostAndRightMost();
        }

        // in the case that the IPiece is turned through the field ceiling
        if (this.position.top.length) {
            while (this.position.top[0][0] < 0) this.move('down');
        }
    }

    turnLeft(field) {
        let squares = [];
        Object.values(this.position).forEach(coordinatesArray => squares.push(...coordinatesArray));
        this.position.top = [];
        this.position.middle = [];
        this.position.bottom = [];
        squares.forEach(square => {
            let column = square[1];
            let heightDifference = this.turningPoint[0] - square[0];
            let widthDifference = this.turningPoint[1] - square[1];
            let newCol = this.turningPoint[1] - heightDifference;
            let newRow = this.turningPoint[0] - (widthDifference * -1);
            switch (column) {
                case column = this.rightMost:
                    this.position.top.push([newRow, newCol]);
                    break;
                case column = this.leftMost:
                    this.position.bottom.push([newRow, newCol]);
                    break;
                default:
                    this.position.middle.push([newRow, newCol]);
                    break;
            }
        })
        // find left and right most squares to see if piece through wall
        // if through wall, push piece back into field
        this.setLeftMostAndRightMost();
        
        while (this.rightMost > 9 || this.leftMost < 0) {
            this.rightMost > 9 ? this.move('left') : this.move('right');
            this.setLeftMostAndRightMost();
        }

        // in the case that the IPiece is turned through the field ceiling
        if (this.position.top.length) {
            while (this.position.top[0][0] < 0) this.move('down');
        }
    }

    // compare old position of piece with new position 
    setRemoveSquares(oldPosition) {
        let oldSquares = [];
        let newSquares = [];
        Object.values(oldPosition).forEach(coordinatesArray => oldSquares.push(...coordinatesArray));
        Object.values(this.position).forEach(coordinatesArray => newSquares.push(...coordinatesArray));
        // keep track of squares that the positions do not have in common (squares to remove color from)
        this.removeSquares = oldSquares.filter(oldSquare => {
            if (!this._includes(oldSquare, newSquares)) return oldSquare;
        });
    }

    hangingSquares(position) {
        let squares = [];
        let hangingSquares = [];
        Object.values(position).forEach(coordinateArray => squares.push(...coordinateArray))
        squares.forEach(square => {
            let belowSquare = [square[0] + 1, square[1]];
            if (!this._includes(belowSquare, squares)) hangingSquares.push(square);
        })
        return hangingSquares;
    } 

    sideSquares() {
        let squares = [];
        let sideSquares = {
            left: [],
            right: []
        };
        Object.values(this.position).forEach(coordinateArray => squares.push(...coordinateArray));
        squares.forEach(square => {
            let adjacentLeft = [square[0], square[1] - 1];
            let adjacentRight = [square[0], square[1] + 1];
            if (!this._includes(adjacentLeft, squares)) sideSquares.left.push(square);
            if (!this._includes(adjacentRight, squares)) sideSquares.right.push(square);
        });
        return sideSquares;
    }

    isFalling(field) {
        let result = true;
        this.hangingSquares(this.position).forEach(coordinatePair => {
            let [row, col] = [coordinatePair[0], coordinatePair[1]];
            // if the piece's current position is above the field floor or a another piece (not include ghost piece)
            if (!field[row + 1] || (field[row + 1][col] && field[row + 1][col] !== "x")) {
                result = false;
            }
        });
        return result;
    }

    rightSideBlocked(field) {
        let result = false;
        this.sideSquares().right.forEach(coordinatePair => {
            let [row, col] = [coordinatePair[0], coordinatePair[1]];
            // if any right facing square hits the wall or another piece
            if (col === 9 || field[row][col + 1]) {
                result = true;
            }
        });
        return result;
    }

    leftSideBlocked(field) {
        let result = false;
        this.sideSquares().left.forEach(coordinatePair => {
            let [row, col] = [coordinatePair[0], coordinatePair[1]];
            // if any left facing square hits the wall or another piece
            if (col === 0 || field[row][col - 1]) {
                result = true;
            }
        });
        return result;
    }
}