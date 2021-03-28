const button = document.querySelector('button[type="button"]');
const text = document.querySelector('.current-colour-text');

const changeColour = () => {

    const red = Math.floor(Math.random() * 255);
    const blue = Math.floor(Math.random() * 255);
    const green = Math.floor(Math.random() * 255);

    const body = document.querySelector('body');
    body.style.backgroundColor = `rgb(${red}, ${green}, ${blue}`;

    text.textContent = `background-color: rgb(${red}, ${green}, ${blue})`;

}

button.addEventListener('click', changeColour);
