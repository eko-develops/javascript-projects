const toggleButton = document.querySelector('.toggle-menu');
const sidebar = document.querySelector('.mobile-menu-container');

const toggleSidebar = () => {
    console.log('toggle button clicked');
    const offCanvas = sidebar.children[0];
    offCanvas.classList.toggle('sidebar-toggle');
}

toggleButton.addEventListener('click', toggleSidebar);

window.addEventListener('click', (e) => {
    if (e.target !== sidebar && e.target !== toggleButton){
        sidebar.style.display = 'none';
    }
})