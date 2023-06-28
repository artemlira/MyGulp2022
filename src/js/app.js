import * as flsFunctions from "./modules/functions.js";
import burgerMenu from "./modules/burger-menu.js"; //для бургер меню
// import accordion from "./modules/accordion.js"; // для аккордиона
// import tabs from "./modules/tabs.js"; // для табов

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

// ==================== phone mask ====================
// Ссылка на плагин: https://imask.js.org/
// Подключение через npm: https://www.npmjs.com/package/imask
//Подключение через CDN: <script src="https://unpkg.com/imask"></script>

// const maskElement = document.querySelector(".phone__input"),
//   maskOptions = { mask: "+{38}(000)000-00-00" },
//   mask = IMask(maskElement, maskOptions);

// ==================== Переключение табов ====================
// tabs(".tabs__header", ".tabs__header-item", ".tabs__content-item", "active");
