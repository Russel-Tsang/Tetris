import HoldBox from './holdbox';
import NextBox from './nextBox';

export default class Field {
    _createColumn() {
        let column = document.createElement("ul");
        column.classList.add("column");

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

    // _createHoldBox() {
    //     let holdBox = new HoldBox();
    //     field.prepend(holdBox.createBox());
    //     return holdBox.create;
    // }

    createFieldWithHoldBoxAndNextBoxes(container) {
        let nextBox = new NextBox();
        let holdBox = new HoldBox();
        container.append(this._createField());
        container.append(nextBox.createNextBoxes());
        container.prepend(holdBox.createBox());
        return container;
    }

}