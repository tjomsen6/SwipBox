const menuIcon = document.querySelector('.burgermenu');
const menu = document.querySelector('.menu__container');


menuIcon.addEventListener('click', () => {

    if (menu.classList.contains('active')) {
        comeOut();
    } else {
        comeIN();
    }

});

function comeIN() {
    menu.classList.add('active')
    menuIcon.classList.add('active')

    setTimeout(() => {
        menu.classList.add('delay');
    }, 300);
}

function comeOut() {
    menu.classList.remove('delay')

    setTimeout(() => {
        menu.classList.remove('active');
        menuIcon.classList.remove('active')
    }, 300);
}
