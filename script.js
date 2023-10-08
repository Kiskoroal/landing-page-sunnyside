let button = document.getElementById('menuTrigger');
let navBar = document.getElementById('navBar');

const menuOpened = () => {
    if(navBar.className == 'navbar-container opened') {
        navBar.setAttribute('class', 'navbar-container');
    }else {
        navBar.setAttribute('class', 'navbar-container opened');
    }
}

button.addEventListener('click', () => {
    menuOpened();
});