import * as flsFunctions from "./modules/functions.js";
import burgerMenu from "./modules/burger-menu.js"; //для бургер меню
// import accordion from "./modules/accordion.js"; // для аккордиона

flsFunctions.isWebp();
burgerMenu(); //для бургер меню
// accordion(); // для аккордиона

// ==================== Swiper slider ====================
//Подключение по CDN
//Скопировать файл cdn.swiper.min.js в папку dist > js
//В файл index.html перед подключением файла js добавить эту запись <script src="./js/cdn.swiper.min.js"></script>

// const swiper = new Swiper(".swiper", {
//   // Optional parameters
//   direction: "horizontal", //ориентация прокрутки
//   loop: true, //бесконечность
//   spaceBetween: 80,  //расстояние между слайдами
//   speed: 1000, //скорость прокрутки

//   // Если нужна пагинация
//   pagination: {
//     el: ".swiper-pagination",
//   },

//   // Если нужны стрелки управления
//   navigation: {
//     nextEl: ".swiper-button-next",
//     prevEl: ".swiper-button-prev",
//   },

//   // Если нужен scrollbar
//   scrollbar: {
//     el: ".swiper-scrollbar",
//   },

//   //Автозапуск
//   // autoplay: {
//   //   delay: 1800,
//   // }
// });
