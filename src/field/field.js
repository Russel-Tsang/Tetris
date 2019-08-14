import HoldBox from './holdbox';
import NextBox from './nextBox';

export default class Field {    
    _generateField() {
        let field = [];
        for (let i = 0; i < 20; i++) {
            let row = [0,0,0,0,0,0,0,0,0,0];
            field.push(row);
        }
        return field;
    }

    //_isValidMove

    _createColumn() {
        let column = document.createElement("ul");
        column.classList.add("field-column");

        for (let i = 0; i < 20; i++) {
            column.append(document.createElement("li"));
        }
        return column;
    }

    _createField() {
        let field = document.createElement("div");
        field.classList.add("field-box");
        for (let i = 0; i < 10; i++) {
            field.appendChild(this._createColumn());
        }
        return field;
    }

    createFieldWithHoldBoxAndNextBoxes(container) {
        let nextBox = new NextBox();
        let holdBox = new HoldBox();
        container.append(this._createField());
        container.append(nextBox.createNextBoxes());
        container.prepend(holdBox.createBox());
        return container;
    }

}