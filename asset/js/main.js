console.log("aaa")
document.addEventListener("DOMContentLoaded", function () {
  const toggleButton = document.querySelector('[data-collapse-toggle="navbar-dropdown"]');
  const menu = document.getElementById("navbar-dropdown");
  // console.log(toggleButton)
  // console.log(menu)

  toggleButton.addEventListener("click", () => {
    menu.classList.toggle("hidden");
  });
});


// const navTriggerBtn = document.querySelector("#nav_trigger_btn");
// const navMenu = document.querySelector("#nav_menu");
// const navMenuIconOpen = document.querySelector("#nav_menu_icon_open");
// const navMenuIconClose = document.querySelector("#nav_menu_icon_close");


// navTriggerBtn.addEventListener("click", () => {
//   navMenu.classList.toggle('nav-is-open');

// })





// navMenuIconClose.addEventListener('click', () => {
//   console.log("fff")
//   menuIconClose.classList.add('hidden');
//   menuIconOpen.classList.remove('hidden');
//   navMenu.classList.remove('open'); // Elimina la clase para ocultar el menú
// });

// 1. Seleccionar los elementos del DOM una sola vez

// const navTriggerBtn = document.querySelector("#nav_trigger_btn");
// const navMenu = document.querySelector("#nav_menu");
// const navMenuIconOpen = document.querySelector("#nav_menu_icon_open");
// const navMenuIconClose = document.querySelector("#nav_menu_icon_close");

// // 2. Añadir un único evento de clic al botón principal
// navTriggerBtn.addEventListener("click", () => {
//   // Alternar la visibilidad del menú
//   // Quita y pone h-0 y p-0 para que el menú aparezca y desaparezca
//   navMenu.classList.toggle('h-0');
//   navMenu.classList.toggle('p-0');

//   // Alternar los íconos de hamburguesa y 'X'
//   navMenuIconOpen.classList.toggle('hidden');
//   navMenuIconClose.classList.toggle('hidden');
// });


// swipper
const swiper = new Swiper('.swiper', {
  loop: false,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  // breakpoints
  slidesPerView: 3,
  spaceBetween: 20,
  breakpoints: {
    320: {
      slidesPerView: 1,
    },
    960: {
      slidesPerView: 2
    },
    1200: {
      slidesPerView: 3
    }
  }

})



// scroll reveal animation
const sr = ScrollReveal({
  origin: 'bottom',
  distance: '60px',
  duration: 3000,
  delay: 500,

})

// hero
sr.reveal('.hero__text', { origin: 'top' });

// steps
sr.reveal('.steps__step', { distance: '100px', interval: '100' })

sr.reveal('.about__text', { origin: 'left' })

// sr.reveal('.about__img', { origin: 'right', delay: 800 })

// // testimonail
sr.reveal('.testimonial__bg', { delay: 800 })

sr.reveal('.testimonial__title')

sr.reveal('.testimonial__slider', { delay: 1000 })


// // brand
sr.reveal('.brands__img', { delay: 600, distance: '100px', interval: 100 })

// // work

sr.reveal('.work__title')
sr.reveal('.work__subtitle', { delay: 800 })
sr.reveal('.work__grid', { delay: 1000 })

// // stats
sr.reveal('.stats')
sr.reveal('.stats__item', { distance: '100px', inteval: 100 })

// // news
sr.reveal('.news__title')
sr.reveal('.news__subtitle', { delay: 800 })
sr.reveal('.news__item', { distance: '100px', inteval: 400, delay: 1000 })

// // contact
sr.reveal('.contact__container')
sr.reveal('.contact__text', { delay: 800 })

// // footer
sr.reveal('.footer__item', { distance: '100px', inteval: 100 })
sr.reveal('.footer__copyright')





// Detectar el evento de desplazamiento
window.addEventListener('scroll', function () {
  const header = document.querySelector('header'); // Selecciona tu elemento de encabezado

  // Agrega o elimina la clase según la posición de desplazamiento
  if (window.scrollY > 0) {
    header.classList.remove('bg-gray-900/20'); // Reemplaza 'clase-agregada' con el nombre de tu clase
    header.classList.add('bg-gray-900/40'); // Reemplaza 'clase-agregada' con el nombre de tu clase
  } else {
    header.classList.remove("bg-gray-900/40"); // Reemplaza 'clase-agregada' con el nombre de tu clase
    header.classList.add('bg-gray-900/20');
  }
});