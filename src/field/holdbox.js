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
        let boxWrapper = document.createElement("div");
        boxWrapper.classList.add(`hold-box-wrapper`, `field-${this.fieldNum}`);
        let box = document.createElement("div");
        box.classList.add(`hold-box`, `field-${this.fieldNum}`);
        let heading = document.createElement("h2");
        heading.innerHTML = "HOLD";
        boxWrapper.appendChild(heading);
        boxWrapper.appendChild(box);
        for (let i = 0; i < 5; i++) {
            box.appendChild(this._createBoxColumn());
        }
        return boxWrapper;
    }
}