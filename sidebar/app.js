const toggleButton = document.querySelector('.toggle-menu');
const sidebar = document.querySelector('.mobile-menu-container');

const toggleSidebar = () => {
    console.log('toggle button clicked');
    const offCanvas = sidebar.children[0];
    offCanvas.classList.toggle('sidebar-toggle');
}

toggleButton.addEventListener('click', toggleSidebar);

window.addEventListener('click' , (e) => {
    if(e.target !== document.querySelector('.sidebar') && e.target !== document.querySelector('.header-nav') && e.target !== document.querySelector('.toggle-menu')){
        document.querySelector('.sidebar').classList.add('sidebar-toggle');
    }
})

