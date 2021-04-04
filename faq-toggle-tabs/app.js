const buttons = document.querySelectorAll('button[type="button"]');

const toggleAnswer = (e) => {
    const toggleButton = e.target;
    toggleButton.classList.toggle('fa-plus-square');
    toggleButton.classList.toggle('fa-minus-square');

    const answer = e.target.parentNode.nextElementSibling;
    answer.classList.toggle('answer-hide');
};

buttons.forEach( (button) => {
    button.addEventListener('click', (e) => {
        toggleAnswer(e);
    });    
});

