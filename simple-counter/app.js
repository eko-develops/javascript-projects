const number = document.querySelector('.number');
const decreaseButton = document.querySelector('#decrease-button');
const resetButton = document.querySelector('#reset-button');
const increaseButton = document.querySelector('#increase-button');

let count = 0;

increaseButton.addEventListener('click', () => {
    count++;
    number.textContent = count;
})

decreaseButton.addEventListener('click', () => {
    count--;
    number.textContent = count;
})

resetButton.addEventListener('click', () => {
    count = 0;
    number.textContent = count;
})