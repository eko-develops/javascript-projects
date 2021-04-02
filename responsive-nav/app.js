const menuButton = document.querySelector('.toggle-menu');
// const hiddenMenu = document.querySelector('.hidden-mobile');

const displayMenu = () => {
    const mobileContainer = document.querySelector('.mobile-container');
    const child = mobileContainer.children[0];
    child.classList.toggle('hidden-mobile');
}

menuButton.addEventListener('click', displayMenu);
