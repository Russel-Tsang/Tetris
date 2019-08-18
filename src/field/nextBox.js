export default class NextBox {
    constructor(fieldNum) {
        this.fieldNum = fieldNum;
    }

    _createNextBoxColumn() {
        let column = document.createElement("ul");
        column.classList.add(`next-column`, `field-${this.fieldNum}`);

        for (let i = 0; i < 4; i++) {
            column.append(document.createElement("li"));
        }
        return column;
    }

    _createNextBox() {
        let box = document.createElement("div");
        box.classList.add(`next-box`, `field-${this.fieldNum}`);
        for (let i = 0; i < 5; i++) {
            box.appendChild(this._createNextBoxColumn());
        }
        return box;
    }

    createNextBoxes() {
        let boxes = document.createElement("div");
        boxes.classList.add(`next-boxes`, `field-${this.fieldNum}`);
        for (let i = 0; i < 5; i++) {
            boxes.appendChild(this._createNextBox());
        }
        return boxes;
    }
}