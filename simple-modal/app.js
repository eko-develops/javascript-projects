const openButton = document.querySelector('.landing-button');
const modal = document.querySelector('.modal');
const closeButton = document.querySelector('.close-modal');

openButton.addEventListener('click', () => {
    modal.classList.remove('modal-toggle');
})

closeButton.addEventListener( 'click', () => {
     modal.classList.add('modal-toggle');
})

// window.addEventListener( 'click' , (e) => {
//     // console.log(e);

//     if( e.target === openButton){
//         modal.classList.remove('modal-toggle');
//     }

//     if(e.target === closeButton || e.target === document.querySelector('.fa-window-close')) {
//         modal.classList.add('modal-toggle');
//     }
// })