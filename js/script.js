(function () {
    'use strict';
    const menuBtn = document.querySelector('.menu-burger');
    const mainMenu = document.querySelector('.page-navigation');

    menuBtn.addEventListener('click', function () {
        this.children[0].classList.toggle('menu-burger__line');
        this.children[0].classList.toggle('menu-burger__close');
        toggleMenu(mainMenu);
    });


    function toggleMenu(elem) {
        if (elem.style.display == 'block') {
            elem.style.display = '';
        } else {
            elem.style.display = 'block';
        }
    }

}());
