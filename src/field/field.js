import HoldBox from './holdbox';
import NextBox from './nextBox';
import Queue from './queue';

export default class Field {  
    constructor(fieldNum) {
        this.fieldNum = fieldNum;
    }
    
    _generateField() {
        let field = [];
        for (let i = 0; i < 20; i++) {
            let row = [0,0,0,0,0,0,0,0,0,0];
            field.push(row);
        }
        return field;
    }

    _createColumn() {
        let column = document.createElement("ul");
        column.classList.add(`field-column`, `field-${this.fieldNum}`);

        for (let i = 0; i < 20; i++) {
            column.append(document.createElement("li"));
        }
        return column;
    }

    _createField() {
        let field = document.createElement("div");
        field.classList.add(`field-box`, `field-${this.fieldNum}`);
        for (let i = 0; i < 10; i++) {
            field.appendChild(this._createColumn());
        }
        return field;
    }

    createCompleteField(container) {
        let queue = new Queue(this.fieldNum);
        let nextBox = new NextBox(this.fieldNum);
        let holdBox = new HoldBox(this.fieldNum);
        container.append(this._createField());
        container.append(queue.createQueue());
        container.append(nextBox.createNextBoxes());
        container.prepend(holdBox.createBox());
        return container;
    }

}