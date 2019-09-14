# Tetris

https://russel-tsang.github.io/Tetris/

## Background and Overview
Tetris is a classic tile-based video game that has since evolved into more high-speed and feature-filled versions. However, the initial foundations are still there:
<img height=15% width=65% src="https://i0.wp.com/mindyourdecisions.com/blog/wp-content/uploads/2018/05/tetris-riddle-pieces.png?resize=600%2C165&ssl=1"/>
* game pieces, or "tetriminoes", are randomly dropped onto a grid-based board
* lines are cleared by complete filling a row 
* player loses when pieces fill up to the top of the field

## Features
* Start, pause, and restart
* Play against local opponent
* View upcoming pieces
* View ghost piece of current piece (to show possible placements)

## Technologies 
* Vanilla JavaScript to simulate piece movement and overall game logic
* Webpack to bundle various and execute scripts

## Example Code 
### Visuals
The 'field' that sets the foundation for the whole game is a 10x20 2D array, corresponding with a 10x20 grid made of ULs on the DOM:
```javascript
generateField() {
    let field = [];
    for (let i = 0; i < 20; i++) {
        let row = [0,0,0,0,0,0,0,0,0,0];
        field.push(row);
    }
    return field;
}
```
As pieces move, instance methods allow them to populate the field with their respective color codes, also removing the color codes from their previous positions:
``` javascript
populateField(field) {
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
```
The field instance then calls its render method to manipulate the DOM based on the 2D array and its values:
```javascript 
render() {
    let fieldColumns = document.querySelectorAll(`.field-column.field-${this.gameNum}`);
    this.field.forEach((row, rowIdx) => {
        row.forEach((__, colIdx) => {
            let squareValue = this.field[rowIdx][colIdx];
            if (squareValue === 'x') {
                fieldColumns[colIdx].children[rowIdx].classList.add(`x-${this.colors[this.currentPiece.colorCode]}`);
            } else if (squareValue) {
                fieldColumns[colIdx].children[rowIdx].classList.add(this.colors[squareValue]);
                fieldColumns[colIdx].children[rowIdx].classList.remove(`x-${this.colors[this.currentPiece.colorCode]}`);
            } else {
                fieldColumns[colIdx].children[rowIdx].classList = "";
            }
        });
    });
}
```

### Future Implementations
* Connect with communications protocol such as WebSocket to allow online multiplayer
