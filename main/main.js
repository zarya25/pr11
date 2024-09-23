'use strict';
document.addEventListener('DOMContentLoaded', function () {
    var menuItems = document.querySelectorAll('.menu > li');

    menuItems.forEach(function (item) {
        item.addEventListener('mouseenter', function () {
            this.classList.add('active');
        });

        item.addEventListener('mouseleave', function () {
            this.classList.remove('active');
        });
    });
});