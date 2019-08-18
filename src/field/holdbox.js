export default class HoldBox {
    constructor(fieldNum) {
        this.fieldNum = fieldNum;
    }

    _createBoxColumn() {
        let column = document.createElement("ul");
        column.classList.add(`hold-column`, `field-${this.fieldNum}`);

        for (let i = 0; i < 4; i++) {
            column.append(document.createElement("li"));
        }
        return column;
    }

    createBox() {
        let box = document.createElement("div");
        box.classList.add(`hold-box`, `field-${this.fieldNum}`);
        for (let i = 0; i < 5; i++) {
            box.appendChild(this._createBoxColumn());
        }
        return box;
    }
}