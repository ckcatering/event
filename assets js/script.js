'use strict';

const modal = document.querySelector('.modal');
const modal2 = document.querySelector('.modal2');
const modal3 = document.querySelector('.modaloverlay');
const body = document.querySelector('.bodymdl');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnCloseModal2 = document.querySelector('.close-modal2');
const btnsOpenModal = document.querySelectorAll('.show-modal');
const btnsOpenModal2 = document.querySelectorAll('.show-modal2');

const openModal = function () {
    modal.classList.remove('hidden');
    body.classList.add('overflow');
    overlay.classList.remove('hidden');
};
const openModal2 = function () {
    modal2.classList.remove('hidden');
    body.classList.add('overflow');
    overlay.classList.remove('hidden');
};
const openModal3 = function () {
    modal3.classList.remove('hidden');
    body.classList.add('overflow');
    overlay.classList.remove('hidden');
};

const closeModal = function () {
    modal.classList.add('hidden');
    modal2.classList.add('hidden');
    modal3.classList.add('hidden');
    overlay.classList.add('hidden');
    body.classList.remove('overflow');
};

for (let i = 0; i < btnsOpenModal.length; i++) {
    btnsOpenModal[i].addEventListener('click', openModal);
}
for (let i = 0; i < btnsOpenModal2.length; i++) {
    btnsOpenModal2[i].addEventListener('click', openModal2);
}
for (let i = 0; i < btnsOpenModal2.length; i++) {
    btnsOpenModal2[i].addEventListener('click', openModal3);
}

btnCloseModal.addEventListener('click', closeModal);
btnCloseModal2.addEventListener('click', closeModal);

// overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
        closeModal();
    }
});




jQuery(window).on('load',function () {
    'use strict';
    
   /*
    var swiper = new Swiper(".main_slider", {
        slidesPerView: 3,
        slidesPerView: "auto",
        spaceBetween: 10,
        speed: 500,
        loop:true,
        // autoplay:true,
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
    });
 
   var swiper = new Swiper(".main_slider", {
        slidesPerView: 3,
        slidesPerView: "auto",
        spaceBetween: 10,
        speed: 500,
        loop:true,
        // autoplay:true,
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
    });
    */

});
