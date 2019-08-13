export default class HoldBox {
    _createBoxColumn() {
        let column = document.createElement("ul");
        column.classList.add("hold-column");

        for (let i = 0; i < 4; i++) {
            column.append(document.createElement("li"));
        }
        return column;
    }

    createBox() {
        let box = document.createElement("div");
        box.classList.add("hold-box");
        for (let i = 0; i < 5; i++) {
            box.appendChild(this._createBoxColumn());
        }
        return box;
    }
}