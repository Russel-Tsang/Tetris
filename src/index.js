import Field from './field';

document.addEventListener("DOMContentLoaded", () => {
    const fieldContainer = document.getElementById("field-container");
    let gameField = new Field();
    gameField.createFieldWithHoldBoxAndNextBoxes(fieldContainer);
});