const openButton = document.querySelector('.landing-button');
const modal = document.querySelector('.modal');
const closeButton = document.querySelector('.close-modal');
const modalBg = document.querySelector('.modal-bg');

openButton.addEventListener('click', () => {
    modal.classList.remove('modal-toggle');
    modalBg.classList.add('modal-overlay');

})

closeButton.addEventListener( 'click', () => {
     modal.classList.add('modal-toggle');
     modalBg.classList.remove('modal-overlay');
})

modalBg.addEventListener( 'click', (e) => {
        if(e.target === modalBg){
            modal.classList.add('modal-toggle');
            modalBg.classList.remove('modal-overlay');
        }
})