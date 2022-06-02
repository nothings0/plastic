let menu = document.querySelector('#menu-bar')
let navbar = document.querySelector('.navbar')
menu.onclick = () => {
    menu.classList.toggle('fa-times')
    navbar.classList.toggle('active')
}
window.onscroll = () => {
    menu.classList.remove('fa-times')
    navbar.classList.remove('active')
}

let header = document.querySelector('.header')

window.onscroll = function(){
    let top = window.scrollY
    if(top > 100){
        header.classList.add('active')
    }else{
        header.classList.remove('active')
    }
}

let slides = document.querySelectorAll('.home .video-container')
let index = 0

function next(){
    slides[index].classList.remove('active')
    index = (index + 1) % slides.length
}

function next(){
    slides[index].classList.remove('active');
    index = (index + 1) % slides.length;
    slides[index].classList.add('active')
}

function prev(){
    slides[index].classList.remove('active');
    index = (index - 1 + slides.length) % slides.length;
    slides[index].classList.add('active')
}

var swiper = new Swiper(".mySwiper", {
    loop: true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    breakpoints: {
        450: {
          slidesPerView: 1,
        },
        768: {
          slidesPerView: 2,
        },
        991: {
          slidesPerView: 3,
        },
        1024: {
          slidesPerView: 5,
        },
      },
    
});