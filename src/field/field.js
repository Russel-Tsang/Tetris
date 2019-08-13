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

    _createField(container) {
        for (let i = 0; i < 10; i++) {
            container.appendChild(this._createColumn());
        }
        return container;
    }

    _createFieldWithHoldBox(container) {
        let field = this._createField(container);
        let holdBox = new HoldBox();
        field.prepend(holdBox.createBox());
        return field;
    }

    createFieldWithHoldBoxAndNextBoxes(container) {
        let field = this._createFieldWithHoldBox(container);
        let nextBox = new NextBox();
        field.append(nextBox.createNextBoxes());
    }

}