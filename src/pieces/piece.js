export default class Piece {
    constructor() {
        this.leftMost = '';
        this.rightMost = '';
        this.bottomMost = '';
        this.topMost = '';

        this.rotationState = 0;

        this.offsetGuide = {
            0: [[0, 0], [0, 0], [0, 0], [0, 0], [0, 0]],
            1: [[0, 0], [0, 1], [-1, 1], [2, 0], [2, 1]],
            2: [[0, 0], [0, 0], [0, 0], [0, 0], [0, 0]],
            3: [[0, 0], [0, -1], [-1, -1], [2, 0], [2, -1]]
        }
    }

    setOuterSquares() {
        let leftMost, rightMost, topMost, bottomMost;
        Object.values(this.position).forEach(coordinatesArray => coordinatesArray.forEach(array => {
            let columnValue = array[1];
            let rowValue = array[0];
            if (!leftMost || columnValue < leftMost[1]) leftMost = [rowValue, columnValue];
            if (!rightMost || columnValue > rightMost[1]) rightMost = [rowValue, columnValue];
            if (!bottomMost || rowValue > bottomMost[0]) bottomMost = [rowValue, columnValue];
            if (!topMost || rowValue < topMost[0]) topMost = [rowValue, columnValue];
        }));
        this.leftMost = leftMost;
        this.rightMost = rightMost;
        this.topMost = topMost;
        this.bottomMost = bottomMost;
    }

    populateField(field) {
        // let coordinateArrays = Object.values(this.position);
        let coordinateArrays = [...this.position.top, ...this.position.middle, ...this.position.bottom];

        coordinateArrays.forEach(array => {
            let [row, col] = [array[0], array[1]];
            if ((col >= 0 && col <= 19) && (row >= 0 && row <= 19)) field[row][col] = this.colorCode;
        });

        this.removeSquares.forEach(positionArray => {
            let [row, col] = [positionArray[0], positionArray[1]];
            if ((col >= 0 && col <= 19) && (row >= 0 && row <= 19)) field[row][col] = 0;
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
        while (!stopped) {
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
            if (row < 20 && row >= 0 && col >= 0 && col < 10) field[row][col] = 0;
        }));
    }

    move(direction, field) {
        let tSpin = false;
        let oldPosition = {
            top: this.position.top.map(array => array.slice()),
            middle: this.position.middle.map(array => array.slice()),
            bottom: this.position.bottom.map(array => array.slice()),
        }
        this.oldTurningPoint = this.turningPoint.slice();
        switch (direction) {
            case "left":
                this.position.top = this.position.top.map(array => [array[0], array[1] - 1]);
                this.position.middle = this.position.middle.map(array => [array[0], array[1] - 1]);
                this.position.bottom = this.position.bottom.map(array => [array[0], array[1] - 1]);
                this.turningPoint = [this.turningPoint[0], this.turningPoint[1] - 1];
                break;
            case "turnRight":
                // defer to "turn" method
                // tSpin will either be truthy or falsy, tracked for sending more lines during multiplayer
                tSpin = this.turnRight(field, oldPosition);
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
            case "up":
                this.position.top = this.position.top.map(array => [array[0] - 1, array[1]]);
                this.position.middle = this.position.middle.map(array => [array[0] - 1, array[1]]);
                this.position.bottom = this.position.bottom.map(array => [array[0] - 1, array[1]]);
                this.turningPoint = [this.turningPoint[0] - 1, this.turningPoint[1]];
                break;
            case "turnLeft":
                this.turnLeft(field, oldPosition);
                break;
        }
        this.setOuterSquares();
        this.setRemoveSquares(oldPosition, field);
        return tSpin;
    }

    turnRight(field, oldPosition) {
        // clear from field first so that the piece doesn't see itself as a conflicting piece
        this.clearSelfFromBoard(field);
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
                case column = this.rightMost[1]:
                    this.position.bottom.push([newRow, newCol]);
                    break;
                case column = this.leftMost[1]:
                    this.position.top.push([newRow, newCol]);
                    break;
                default:
                    this.position.middle.push([newRow, newCol]);
                    break;
            }
        });
        this.setRemoveSquares(oldPosition);

        // find outer-most squares to see if piece is obstructed
        // if so, push piece back into field
        this.setOuterSquares();

        // reset rotation state, which is tracked for implementing super rotation system
        this.rotationState = this.rotationState === 3 ? 0 : this.rotationState + 1;

        let newSquares = [...this.position.top, ...this.position.middle, ...this.position.bottom];
        for (let i in newSquares) {
            let [row, col] = [newSquares[i][0], newSquares[i][1]];
            if (field[row] === undefined || field[row][col] === undefined || field[row][col]) {
                return this.wallKick(field, "turnRight", oldPosition);
            }
        }
    }

    turnLeft(field, oldPosition) {
        this.clearSelfFromBoard(field);
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
                case column = this.rightMost[1]:
                    this.position.top.push([newRow, newCol]);
                    break;
                case column = this.leftMost[1]:
                    this.position.bottom.push([newRow, newCol]);
                    break;
                default:
                    this.position.middle.push([newRow, newCol]);
                    break;
            }
        })
        this.setRemoveSquares(oldPosition);

        // find left and right most squares to see if piece through wall
        // if through wall, push piece back into field
        this.setOuterSquares();

        // reset rotation state, which is tracked for implementing super rotation system
        this.rotationState = this.rotationState === 0 ? 3 : this.rotationState - 1;

        let newSquares = [...this.position.top, ...this.position.middle, ...this.position.bottom];
        for (let i in newSquares) {
            let [row, col] = [newSquares[i][0], newSquares[i][1]];
            if (field[row] === undefined || field[row][col] === undefined || field[row][col]) {
                this.wallKick(field, "turnLeft", oldPosition);
                break;
            }
        }

    }

    // compare old position of piece with new position 
    setRemoveSquares(oldPosition, field) {
        let oldSquares = [];
        let newSquares = [];
        Object.values(oldPosition).forEach(coordinatesArray => oldSquares.push(...coordinatesArray));
        Object.values(this.position).forEach(coordinatesArray => newSquares.push(...coordinatesArray));
        // keep track of squares that the positions do not have in common (squares to remove color from)
        this.removeSquares = oldSquares.filter(oldSquare => {
            if (!field) {
                if (!this._includes(oldSquare, newSquares)) return oldSquare;
            // if field argument is passed, check the field to make sure to not clear squares of other pieces
            } else {
                if (!this._includes(oldSquare, newSquares) && !field[oldSquare[0]][oldSquare[1]]) return oldSquare;
            }
            
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
        // if (this.position.top[0][0] < 0) return false;
        let result = false;
        this.sideSquares().right.forEach(coordinatePair => {
            let [row, col] = [coordinatePair[0], coordinatePair[1]];
            // if any right facing square hits the wall or another piece, not including the ghost piece
            if (col === 9 || (field[row] && field[row][col + 1] && field[row + 1][col] !== "x")) {
                result = true;
            }
        });
        return result;
    }

    leftSideBlocked(field) {
        // if (this.position.top[0][0] < 0) return false;
        let result = false;
        this.sideSquares().left.forEach(coordinatePair => {
            let [row, col] = [coordinatePair[0], coordinatePair[1]];
            // if any left facing square hits the wall or another piece, not including the ghost piece
            if (col === 0 || (field[row] && field[row][col - 1] && field[row][col - 1] !== "x")) {
                result = true;
            }
        });
        return result;
    }

    wallKick(field, action, oldPosition) {
        let validSpot, startingOffset;
        if (action === "turnRight") {
            startingOffset = this.rotationState === 0 ? this.offsetGuide[3] : this.offsetGuide[this.rotationState - 1];
        } else {
            startingOffset = this.rotationState === 3 ? this.offsetGuide[0] : this.offsetGuide[this.rotationState + 1];
        }
        let nextOffset = this.offsetGuide[this.rotationState];
        // for (let i = 0; i < 5; i++) {
        for (let i = 0; i < 6; i++) {
            // if i === 5, there are no more potential positions to check and the piece's position is the initial position from before turning
            if (i === 5) {
                this.position = oldPosition;
                return;
            }
            validSpot = true;
            let basePosition = {
                top: this.position.top.map(array => array.slice()),
                middle: this.position.middle.map(array => array.slice()),
                bottom: this.position.bottom.map(array => array.slice()),
            }
            let baseTurningPoint = this.turningPoint.slice();

            let startingTranslation = startingOffset[i];
            let potentialTranslation = nextOffset[i];
            let rowShift = startingTranslation[0] - potentialTranslation[0];
            let colShift = startingTranslation[1] - potentialTranslation[1];
            let translateVertical = rowShift > 0 ? () => this.move("up") : () => this.move("down");
            let translateHorizontal = colShift > 0 ? () => this.move("right") : () => this.move("left");
            for (let numTimesRowShifted = 0; numTimesRowShifted < Math.abs(rowShift); numTimesRowShifted++) {
                translateVertical();
            }
            for (let numTimesColShifted = 0; numTimesColShifted < Math.abs(colShift); numTimesColShifted++) {
                translateHorizontal();
            }
            let newPosition = [...this.position.top, ...this.position.middle, ...this.position.bottom];
            for (let i in newPosition) {
                let [row, col] = [newPosition[i][0], newPosition[i][1]];
                if (field[row] === undefined || field[row][col] === undefined || field[row][col] > 0) {
                    validSpot = false;
                    this.position = basePosition;
                    this.turningPoint = baseTurningPoint;
                    break;
                }
            }
            // allows tSpin variable to be truthy
            if (validSpot) {
                if (this.name === "TPiece") {
                    return true;
                } else {
                    return;
                }
            }
        }
    }
}