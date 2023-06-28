import * as flsFunctions from "./modules/functions.js";
import burgerMenu from "./modules/burger-menu.js"; //для бургер меню
// import accordion from "./modules/accordion.js"; // для аккордиона
import Swiper, { Navigation, Pagination } from "swiper";

flsFunctions.isWebp();
burgerMenu(); //для бургер меню
// accordion(); // для аккордиона

const swiper = new Swiper();
