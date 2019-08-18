export default class Queue {
    constructor(fieldNum) {
        this.fieldNum = fieldNum;
    }

    createQueue() {
        let queue = document.createElement("div");
        queue.classList.add(`queue`, `field-${this.fieldNum}`);
        let queueMeter = document.createElement("div");
        queueMeter.classList.add(`queue-meter`, `field-${this.fieldNum}`);
        queue.appendChild(queueMeter);
        return queue;
    }
}

export const adjustQueueHeight = (fieldNum, percentage) => {
    let queueMeter = document.querySelector(`.queue-meter.field-${fieldNum}`);
    queueMeter.style.height = `${percentage}%`
}