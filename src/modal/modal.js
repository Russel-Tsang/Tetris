export default class Modal {
    create() {
        let modal = document.createElement('div');
        modal.classList.add('controls-modal');
        document.body.appendChild(modal);
    }
    
    appendChild(content) {
        let modal = document.querySelector('.controls-modal');
        modal.appendChild(content);
    }

    remove() {
        let modal = document.querySelector('.controls-modal');
        modal.remove();
    }
}